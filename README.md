# ESG LAB — Kurumsal web sitesi

Statik HTML sitesi. Derleme (build) adımı yoktur; dosyalar olduğu gibi sunulur.

## Sayfalar
| Dosya | İçerik |
| --- | --- |
| `index.html` | Ana sayfa — hizmetler, metodoloji, iklim, iletişim |
| `egitimler.html` | Online eğitim kataloğu |
| `kobi-programi.html` | 36 haftalık KOBİ sürdürülebilirlik programı |
| `kobi-paketi.html` | 12 haftalık KOBİ paketi (önceki sürüm) |
| `yazilim-platformlar.html` | Yazılım & platformlar (GHG, SC360, Survey, ISO, OSB360) |
| `egitim-takvimi.html` | Eğitim takvimi — takvim + liste görünümü, filtre, arama |
| `yasal.html` | Mesafeli satış, iptal/iade, KVKK, teslimat metinleri |
| `tsu.html` | TSU |
| `iso46001.html` | ISO 46001 |

CSS ve JS dosyaları HTML içine gömülüdür; kök dizindeki `.css` / `.js` dosyaları kaynak referansıdır.

## Yerelde çalıştırma
```bash
npx http-server . -p 8080
```
Ardından http://localhost:8080

## Yayınlama

### GitHub Pages
1. Repo → **Settings → Pages**
2. **Source:** Deploy from a branch → **Branch:** `main` / `/ (root)` → Save
3. Site `https://<kullanıcı>.github.io/web/` adresinde yayına girer.
`.nojekyll` dosyası Jekyll işlemesini kapatır; olduğu gibi kalmalı.

### Netlify / Vercel / Cloudflare Pages
Build command: (boş) · Publish directory: `/` (kök)

### Node ile sunucu
`npm start` (`package.json` içinde `http-server`)

## İnternet bağımlılığı
Yazı tipleri Google Fonts CDN'inden yüklenir; ziyaretçinin internet erişimi olmalıdır.

## Ödeme (iyzico)
Eğitim kayıt butonları `takvim-data.js` içindeki `pay` alanını okur:
- `pay: ''` → buton e-posta ile kayda düşer
- `pay: 'https://iyzi.link/XXXX'` → "Kayıt ol ve öde" olur; yasal onay kutusu işaretlenmeden tıklanamaz

## Dil
Sayfalar TR/EN ikili dil desteklidir (`i18n.js`). 36 haftalık KOBİ programı sayfası yalnızca Türkçedir.
