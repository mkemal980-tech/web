/* ===================================================================
   ESG LAB — Railway sunucusu
   -------------------------------------------------------------------
   · Statik siteyi yayınlar (bu klasör)
   · POST /api/iyzico-checkout  → iyzico Checkout Form başlatır
   · POST /api/iyzico-callback  → 3D Secure dönüşünü doğrular
   Harici paket YOK (Node 18+ yeterli).

   Railway → Variables:
     IYZICO_API_KEY     = api key
     IYZICO_SECRET_KEY  = secret key      (asla tarayıcıya gitmez)
     IYZICO_BASE        = https://sandbox-api.iyzipay.com   (test)
                          https://api.iyzipay.com           (canlı)
     SITE_URL           = https://<railway-domaininiz>       (opsiyonel)
   =================================================================== */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const BASE = process.env.IYZICO_BASE || 'https://sandbox-api.iyzipay.com';
const API_KEY = process.env.IYZICO_API_KEY;
const SECRET = process.env.IYZICO_SECRET_KEY;

const P_INIT = '/payment/iyzipos/checkoutform/initialize/auth/ecom';
const P_DETAIL = '/payment/iyzipos/checkoutform/auth/ecom/detail';

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml'
};

/* ---------------- iyzico v2 imzalama ---------------- */
function authHeader(uriPath, body) {
  const rnd = Date.now() + '' + Math.floor(Math.random() * 1e6);
  const sig = crypto.createHmac('sha256', SECRET).update(rnd + uriPath + body).digest('hex');
  return 'IYZWSv2 ' + Buffer.from(`apiKey:${API_KEY}&randomKey:${rnd}&signature:${sig}`).toString('base64');
}
async function iyzico(uriPath, payload) {
  const body = JSON.stringify(payload);
  const r = await fetch(BASE + uriPath, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: authHeader(uriPath, body) },
    body
  });
  return r.json();
}

const tl = (n) => Number(n).toFixed(2);
const readBody = (req) => new Promise((ok) => {
  let d = ''; req.on('data', (c) => (d += c)); req.on('end', () => ok(d));
});
function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}
function siteUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '');
  return `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`;
}

/* ---------------- Ödeme başlatma ---------------- */
async function checkout(req, res) {
  if (!API_KEY || !SECRET) return json(res, 500, { errorMessage: 'iyzico anahtarları tanımlı değil.' });

  let o;
  try { o = JSON.parse(await readBody(req)); } catch { return json(res, 400, { errorMessage: 'Geçersiz istek.' }); }

  const a = o.alici || {};
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || '85.34.78.112';
  const conversationId = 'ESG-' + Date.now().toString(36).toUpperCase();
  const adres = {
    contactName: `${a.ad || ''} ${a.soyad || ''}`.trim(),
    city: a.il || 'İstanbul',
    country: 'Turkey',
    address: `${a.adres || ''} ${a.ilce || ''}`.trim() || 'Belirtilmedi',
    zipCode: a.postaKodu || '34000'
  };

  const data = await iyzico(P_INIT, {
    locale: 'tr',
    conversationId,
    price: tl(o.araToplam),
    paidPrice: tl(o.toplam),
    currency: o.paraBirimi || 'TRY',
    basketId: 'EGT-' + (o.egitim && o.egitim.no),
    paymentGroup: 'PRODUCT',
    callbackUrl: siteUrl(req) + '/api/iyzico-callback',
    enabledInstallments: [1, 2, 3, 6, 9, 12],
    buyer: {
      id: 'B-' + (a.kimlikNo || conversationId),
      name: a.ad, surname: a.soyad,
      gsmNumber: '+9' + String(a.telefon || '').replace(/\D/g, ''),
      email: a.eposta,
      identityNumber: a.kimlikNo || '11111111111',
      registrationAddress: adres.address,
      city: adres.city, country: 'Turkey', ip
    },
    shippingAddress: adres,
    billingAddress: adres,
    basketItems: [{
      id: 'EGT-' + (o.egitim && o.egitim.no),
      name: `${o.egitim && o.egitim.ad} (${o.egitim && o.egitim.tarih})${o.adet > 1 ? ' × ' + o.adet : ''}`,
      category1: 'Eğitim', category2: 'Online canlı eğitim',
      itemType: 'VIRTUAL',
      price: tl(o.araToplam)
    }]
  }).catch(() => null);

  if (!data || data.status !== 'success') {
    return json(res, 400, { errorMessage: (data && data.errorMessage) || 'Ödeme başlatılamadı.' });
  }
  /* Buraya sipariş kaydı eklenebilir: conversationId + data.token → "bekliyor" */
  json(res, 200, {
    conversationId,
    token: data.token,
    checkoutFormContent: data.checkoutFormContent,
    paymentPageUrl: data.paymentPageUrl
  });
}

/* ---------------- 3D Secure dönüşü ---------------- */
async function callback(req, res) {
  const form = new URLSearchParams(await readBody(req));
  const token = form.get('token');
  const go = (q) => { res.writeHead(302, { Location: `${siteUrl(req)}/odeme-sonuc.html?${q}` }); res.end(); };
  if (!token) return go('durum=basarisiz&mesaj=' + encodeURIComponent('Ödeme bilgisi alınamadı.'));

  const d = await iyzico(P_DETAIL, { locale: 'tr', token }).catch(() => null);
  if (d && d.status === 'success' && d.paymentStatus === 'SUCCESS') {
    /* Burada: siparişi "ödendi" yap, onay e-postası ve e-arşiv fatura tetikle */
    return go('durum=basarili&ref=' + encodeURIComponent(d.paymentId || d.conversationId || ''));
  }
  go('durum=basarisiz&mesaj=' + encodeURIComponent((d && d.errorMessage) || 'Banka işlemi onaylamadı.'));
}

/* ---------------- Statik dosyalar ---------------- */
function serveStatic(req, res) {
  let rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.join(ROOT, path.normalize(rel).replace(/^(\.\.[/\\])+/, ''));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }

  fs.readFile(file, (err, buf) => {
    if (err) {
      fs.readFile(path.join(ROOT, '404.html'), (e2, nf) => {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(e2 ? 'Sayfa bulunamadı' : nf);
      });
      return;
    }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
    });
    res.end(buf);
  });
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/api/iyzico-checkout') {
    if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
    if (req.method !== 'POST') return json(res, 405, { errorMessage: 'Yalnızca POST' });
    return checkout(req, res);
  }
  if (url.pathname === '/api/iyzico-callback') return callback(req, res);
  if (url.pathname === '/saglik') return json(res, 200, { ok: true });
  serveStatic(req, res);
}).listen(PORT, '0.0.0.0', () => console.log('ESG LAB · http://0.0.0.0:' + PORT));
