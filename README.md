# ESG LAB — Web Sitesi

Statik HTML sitesi. **Her sayfa kendi içinde tamamen bağımsızdır** (CSS, JS, görseller
ve logolar HTML dosyalarının içine gömülüdür). Harici yerel dosya bağımlılığı **yoktur**;
bu yüzden hangi statik sunucuda olursa olsun, ekstra ayar gerektirmeden çalışır.

## Sayfalar
- `index.html` — Ana sayfa (giriş noktası)
- `kobi-paketi.html` — KOBİ Danışmanlık Paketi
- `egitimler.html` — Online Eğitim kataloğu
- `tsu.html` — Teknik Sürdürülebilirlik Uzmanlığı Eğitimi (menüde gizli, doğrudan link)
- `iso46001.html` — ISO 46001 Su Verimliliği Eğitimi (menüde gizli, doğrudan link)

## GitHub + Railway ile yayınlama
1. Bu klasördeki **tüm dosyaları** GitHub deposuna yükleyin (`package.json` ve
   `serve.json` dahil).
2. Railway depoyu bağlayınca otomatik `npm install` + `npm start` çalıştırır.
   - `start` komutu: `serve -l tcp://0.0.0.0:$PORT .`
   - `serve.json`, SPA yönlendirmesini KAPATIR; böylece `kobi-paketi.html`,
     `egitimler.html` gibi alt sayfa linkleri 404 vermeden, doğrudan açılır.
3. Deploy bitince tüm sayfalar ve menü linkleri çalışır.

> Daha önce alt sayfalar açılmıyorduysa sebebi sunucunun SPA (single-page) modunda
> her adrese `index.html` döndürmesiydi. `serve.json` bunu çözer.

## Başka bir statik hosting kullanıyorsanız
Dosyaları sunucunun kök dizinine (ör. `public_html`) yükleyin. `index.html` ana sayfa
olarak otomatik açılır. PHP / veritabanı / build adımı gerekmez.

## Yerel test
```
npx serve .
```
Çıkan adrese gidin; menü linklerini ve iletişim formunu deneyin.

## İnternet bağımlılığı
Yazı tipleri ve birkaç kütüphane (Google Fonts, React, Babel) CDN'den yüklenir.
Sayfaların düzgün görünmesi için sunucunun/ziyaretçinin internet erişimi olmalıdır.

## İletişim formu
Form, Web3Forms üzerinden çalışır; gönderilen mesajlar doğrudan
`bilgi@esgakademi.net` adresine iletilir. Ek backend gerekmez.
