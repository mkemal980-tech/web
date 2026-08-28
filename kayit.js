/* ===================================================================
   ESG LAB — Kayıt & ödeme ekranı mantığı
   ------------------------------------------------------------------
   ?e=<eğitim no>&q=<katılımcı sayısı>
   =================================================================== */
(function () {
  'use strict';

  var CFG = window.ESG_ODEME || {};
  var DATA = window.ESG_TAKVIM || [];
  var MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

  var qs = new URLSearchParams(location.search);
  var ders = DATA.filter(function (s) { return String(s.no) === qs.get('e'); })[0];
  var qty = Math.min(10, Math.max(1, parseInt(qs.get('q'), 10) || 1));

  var form = document.getElementById('ckForm');
  var alertBox = document.getElementById('ckAlert');
  var payBtn = document.getElementById('ckPay');

  function money(n) { return n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₺'; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function rangeText(s) {
    var a = s.start.split('-').map(Number), b = s.end.split('-').map(Number);
    if (a[1] === b[1]) return a[2] + '–' + b[2] + ' ' + MONTHS[a[1] - 1] + ' ' + a[0];
    return a[2] + ' ' + MONTHS[a[1] - 1] + ' – ' + b[2] + ' ' + MONTHS[b[1] - 1] + ' ' + b[0];
  }
  function note(html, kind) {
    alertBox.innerHTML = '<div class="ck-alert' + (kind === 'err' ? ' err' : '') + '">' + html + '</div>';
  }

  /* ---------------- Özet ---------------- */
  if (!ders) {
    note('<span><b>Eğitim seçilmedi.</b> Lütfen <a href="egitim-takvimi.html">eğitim takviminden</a> bir program seçip “Kayıt ol” butonunu kullanın.</span>', 'err');
    payBtn.disabled = true;
    payBtn.classList.add('is-busy');
  } else {
    document.title = 'Kayıt — ' + ders.title + ' · ESG LAB';
    document.getElementById('ckCode').textContent = String(ders.no).padStart(2, '0') + ' · ' + ders.code;
    document.getElementById('ckTitle').textContent = ders.title;
    document.getElementById('ckMeta').innerHTML =
      '<div><span class="k">Tarih</span><span class="v">' + esc(rangeText(ders)) + '</span></div>' +
      '<div><span class="k">Günler</span><span class="v">' + esc(ders.days) + '</span></div>' +
      '<div><span class="k">Saat</span><span class="v">' + esc(ders.time) + '</span></div>' +
      '<div><span class="k">Süre</span><span class="v">' + ders.hours + ' saat · canlı online</span></div>' +
      '<div><span class="k">Birim ücret</span><span class="v">' + money(ders.price) + '<small style="color:var(--ink-3);font-weight:400"> +KDV</small></span></div>';
  }

  function totals() {
    if (!ders) return;
    var net = ders.price * qty, vat = net * (CFG.kdv || 0.2);
    document.getElementById('ckQty').textContent = qty;
    document.getElementById('ckNet').textContent = money(net);
    document.getElementById('ckVat').textContent = money(vat);
    document.getElementById('ckGross').textContent = money(net + vat);
    var b = document.getElementById('ckInstBest');
    if (b) b.textContent = '12 ay · yakl. ' + money((net + vat) / 12) + '/ay';
  }
  totals();

  document.getElementById('ckMinus').addEventListener('click', function () { if (qty > 1) { qty--; totals(); } });
  document.getElementById('ckPlus').addEventListener('click', function () { if (qty < 10) { qty++; totals(); } });

  /* ---------------- Fatura tipi ---------------- */
  var bir = document.getElementById('ckBireysel'), kur = document.getElementById('ckKurumsal');
  form.addEventListener('change', function (e) {
    if (e.target.name === 'fatura') {
      var k = e.target.value === 'kurumsal';
      bir.hidden = k; kur.hidden = !k;
    }
    var f = e.target.closest('.ck-f');
    if (f) f.classList.remove('bad');
    var cs = e.target.closest('.ck-cs');
    if (cs) cs.classList.remove('warn');
  });

  /* ---------------- Doğrulama ---------------- */
  function setErr(name, msg) {
    var el = form.querySelector('[name="' + name + '"]');
    if (!el) return;
    var wrap = el.closest('.ck-f');
    wrap.classList.add('bad');
    var i = wrap.querySelector('.err');
    if (i) i.textContent = msg;
  }
  function digits(v) { return (v || '').replace(/\D/g, ''); }

  function collect() {
    form.querySelectorAll('.ck-f').forEach(function (f) {
      f.classList.remove('bad');
      var i = f.querySelector('.err'); if (i) i.textContent = '';
    });
    form.querySelectorAll('.ck-cs').forEach(function (c) { c.classList.remove('warn'); });

    var d = {}, ok = true;
    new FormData(form).forEach(function (v, k) { d[k] = typeof v === 'string' ? v.trim() : v; });
    d.kurumsal = d.fatura === 'kurumsal';

    ['ad', 'soyad', 'adres', 'il', 'ilce'].forEach(function (k) {
      if (!d[k]) { setErr(k, 'Zorunlu alan'); ok = false; }
    });
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(d.eposta || '')) { setErr('eposta', 'Geçerli bir e-posta girin'); ok = false; }
    if (digits(d.tel).length < 10) { setErr('tel', 'Geçerli bir telefon girin'); ok = false; }

    if (d.kurumsal) {
      if (!d.unvan) { setErr('unvan', 'Zorunlu alan'); ok = false; }
      if (!d.vd) { setErr('vd', 'Zorunlu alan'); ok = false; }
      if (digits(d.vkn).length < 10) { setErr('vkn', '10 veya 11 haneli vergi no'); ok = false; }
    } else if (digits(d.tckn).length !== 11) {
      setErr('tckn', '11 haneli TC kimlik no'); ok = false;
    }

    ['onbilgi', 'iade', 'kvkk'].forEach(function (k) {
      if (!form.querySelector('[name="' + k + '"]').checked) {
        form.querySelector('[name="' + k + '"]').closest('.ck-cs').classList.add('warn');
        ok = false;
      }
    });
    if (!ok) return null;

    var net = ders.price * qty, vat = net * (CFG.kdv || 0.2);
    return {
      egitim: { no: ders.no, kod: ders.code, ad: ders.title, tarih: rangeText(ders), saat: ders.hours },
      adet: qty,
      araToplam: net,
      kdv: +vat.toFixed(2),
      toplam: +(net + vat).toFixed(2),
      paraBirimi: CFG.currency || 'TRY',
      alici: {
        ad: d.ad, soyad: d.soyad, eposta: d.eposta, telefon: d.tel, gorev: d.gorev || '',
        tip: d.kurumsal ? 'kurumsal' : 'bireysel',
        kimlikNo: d.kurumsal ? digits(d.vkn) : digits(d.tckn),
        unvan: d.unvan || '', vergiDairesi: d.vd || '',
        adres: d.adres, il: d.il, ilce: d.ilce, ulke: 'Türkiye'
      },
      onaylar: { onBilgilendirme: true, mesafeliSatis: true, iptalIade: true, kvkk: true, pazarlama: !!d.izin },
      callbackUrl: new URL(CFG.callback || 'odeme-sonuc.html', location.href).href
    };
  }

  /* ---------------- Ödeme ---------------- */
  var layer = document.getElementById('ckPayLayer');
  document.getElementById('ckPayClose').addEventListener('click', function () {
    layer.classList.remove('on'); layer.setAttribute('aria-hidden', 'true');
    document.getElementById('iyzipay-checkout-form').innerHTML = '';
  });

  payBtn.addEventListener('click', function () {
    var payload = collect();
    if (!payload) {
      note('<span>Eksik veya hatalı alanlar var. İşaretli alanları kontrol edin.</span>', 'err');
      var bad = form.querySelector('.ck-f.bad, .ck-cs.warn');
      if (bad) window.scrollTo({ top: bad.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
      return;
    }
    alertBox.innerHTML = '';

    /* Sunucu uçları henüz bağlanmadıysa: kayıt talebini e-posta ile al */
    if (!CFG.endpoint) {
      var body = [
        'Eğitim: ' + payload.egitim.ad + ' (' + payload.egitim.tarih + ')',
        'Katılımcı sayısı: ' + payload.adet,
        'Toplam (KDV dahil): ' + money(payload.toplam),
        '',
        'Ad Soyad: ' + payload.alici.ad + ' ' + payload.alici.soyad,
        'E-posta: ' + payload.alici.eposta,
        'Telefon: ' + payload.alici.telefon,
        'Fatura tipi: ' + payload.alici.tip,
        payload.alici.tip === 'kurumsal'
          ? 'Ticaret unvanı: ' + payload.alici.unvan + '\nVergi dairesi: ' + payload.alici.vergiDairesi + '\nVKN: ' + payload.alici.kimlikNo
          : 'TCKN: ' + payload.alici.kimlikNo,
        'Adres: ' + payload.alici.adres + ', ' + payload.alici.ilce + '/' + payload.alici.il,
        '',
        'Sözleşmeler onaylandı. Ödeme bağlantısı talep ediyorum.'
      ].join('\n');
      note('<span><b>Kayıt bilgileriniz hazır.</b> Ödeme altyapısı bağlanana kadar kaydınızı e-posta ile tamamlıyoruz — açılan e-postayı gönderdiğinizde size ödeme bağlantısı iletilir.</span>');
      location.href = 'mailto:' + (CFG.mail || 'bilgi@esgakademi.net') +
        '?subject=' + encodeURIComponent('Kayıt: ' + payload.egitim.ad) +
        '&body=' + encodeURIComponent(body);
      return;
    }

    payBtn.classList.add('is-busy');
    payBtn.querySelector('span').textContent = 'Hazırlanıyor…';

    fetch(CFG.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        payBtn.classList.remove('is-busy');
        payBtn.querySelector('span').textContent = 'Ödemeye geç';
        if (res && res.paymentPageUrl) { location.href = res.paymentPageUrl; return; }
        if (res && res.checkoutFormContent) {
          try { sessionStorage.setItem('esg_kayit', JSON.stringify(payload)); } catch (e) {}
          layer.classList.add('on');
          layer.setAttribute('aria-hidden', 'false');
          var holder = document.getElementById('iyzipay-checkout-form');
          holder.innerHTML = '';
          var tmp = document.createElement('div');
          tmp.innerHTML = res.checkoutFormContent;
          Array.prototype.forEach.call(tmp.querySelectorAll('script'), function (old) {
            var sc = document.createElement('script');
            if (old.src) sc.src = old.src; else sc.textContent = old.textContent;
            document.body.appendChild(sc);
          });
          return;
        }
        note('<span><b>Ödeme başlatılamadı.</b> ' + esc((res && res.errorMessage) || 'Lütfen birazdan tekrar deneyin.') +
          ' Sorun sürerse <a href="mailto:' + (CFG.mail) + '">' + CFG.mail + '</a> adresinden bize yazın.</span>', 'err');
      })
      .catch(function () {
        payBtn.classList.remove('is-busy');
        payBtn.querySelector('span').textContent = 'Ödemeye geç';
        note('<span><b>Bağlantı kurulamadı.</b> İnternet bağlantınızı kontrol edip tekrar deneyin.</span>', 'err');
      });
  });
})();
