# ESG LAB — Web Sitesi

Statik HTML sitesi. Üç sayfa: `index.html`, `kobi-paketi.html`, `egitimler.html`.

## Railway'de yayınlama (linkler çalışsın diye)

Sitedeki menü linkleri (KOBİ Paketi, Online Eğitim) doğru çalışmıyorsa sebebi
neredeyse her zaman sunucunun **SPA (single-page) modunda** olmasıdır: her adres
için `index.html` döndürülür, bu yüzden alt sayfalar açılmaz.

Bu klasördeki `package.json` bunu çözer — Railway siteyi düz statik dosya
sunucusuyla (SPA fallback OLMADAN) yayınlar.

### Adımlar
1. Bu klasörün **tüm içeriğini** (package.json ve serve.json dahil) Railway
   projenize / repo'nuza yükleyin.
2. Railway otomatik olarak `npm install` + `npm start` çalıştırır.
   - `start` komutu: `serve -l tcp://0.0.0.0:$PORT .`
3. Deploy bitince tüm sayfalar ve menü linkleri çalışır.

> Not: `serve.json` temiz-URL yönlendirmesini ve SPA rewrite'ı kapatır; böylece
> `kobi-paketi.html` gibi `.html` linkleri doğrudan, yönlendirmesiz açılır.

## Alternatif: Caddy ile
Railway'de Caddy kullanıyorsanız, SPA fallback satırını (`try_files ... /index.html`)
KALDIRIN; her dosya doğrudan sunulmalı.

## Yerel test
```
npx serve .
```
Tarayıcıda çıkan adrese gidin; menü linklerini deneyin.

## İnternet bağımlılığı
Yazı tipleri ve birkaç kütüphane CDN'den yüklenir (Google Fonts, React, Babel).
Sayfaların düzgün görünmesi için sunucunun internet erişimi olmalıdır.
