/* ===================================================================
   ESG LAB — Eğitim takvimi verisi (2026 dönemi)
   Her kayıt bir eğitim programıdır; oturum günleri start–end aralığında
   "wd" (hafta günleri) kuralına göre otomatik üretilir.

   cat  : E (Çevresel) · S (Sosyal) · G (Yönetişim) · GEN (Genel)
   wd   : hafta günleri — 0=Pzt 1=Sal 2=Çar 3=Per 4=Cum 5=Cmt 6=Paz
   id   : egitimler.html içindeki eğitim kimliği (boşsa detay bağlantısı gizlenir)
   url  : kendi program sayfası (id yerine kullanılabilir)
   pay  : iyzico Ödeme Linki (iyziLink) — boşsa buton e-posta ile kayda düşer
   hours    : sitede gösterilen toplam süre (canlı ders + katılımcının kendi yaptığı uygulama)
   canli    : takvimi oluşturan canlı ders saati (45 dk) — oturum sayısı buna göre planlanır
   pkgPrice : birden fazla programa katılımda geçerli fiyat (isteğe bağlı)
   pkgNote  : bu fiyatın koşulu (isteğe bağlı)
   priceNote: price'ın kendisi koşullu ise koşulu (isteğe bağlı)
   vurgu    : listede ve detay penceresinde öne çıkan avantaj (isteğe bağlı)
   =================================================================== */
window.ESG_TAKVIM = [
  {
    no: 1, id: '', code: 'Teknik Sürdürülebilirlik', cat: 'GEN',
    title: 'Teknik Sürdürülebilirlik Uzmanlığı Eğitimi',
    desc: 'Sürdürülebilirliğin teknik altyapısı: karbon ve kaynak hesaplama, veri yönetimi, raporlama standartları ve saha uygulamaları. Dört haftaya yayılan akşam programı; toplam 60 saat.',
    /* 52 ders saati × 45 dk · akşam başına 5 ders (19.00–23.00, aralar dahil)
       27–28 Eki + 3–19 Kas: 11 akşam (29 Eki tatil) · son akşam 2 ders */
    start: '2026-10-27', end: '2026-11-19', wd: [1, 2, 3],
    days: 'Salı, Çarşamba, Perşembe', time: '19.00–23.00',
    hours: 60, canli: 52, price: 22000, seats: 24, pay: '',
    vurgu: '1 yıl ücretsiz yazılım erişimi · karbon, su, LCA ve ürün karbon ayak izi'
  },
  {
    no: 2, id: '', code: 'Uygulamalı Raporlama', cat: 'G',
    title: 'Sürdürülebilirlik Uygulama Ağırlıklı Raporlama Eğitimi',
    desc: 'TSRS, GRI ve ESRS ile raporlama sürecini örnek şirket üzerinden çalışın: önemlilik, açıklama yapısı, veri ihtiyaçları ve içerik eşleştirme. Katılımcılara AI destekli raporlama platformlarımız 3 ay ücretsiz. Üç haftaya yayılan akşam programı; toplam 40 saat.',
    /* 36 ders saati × 45 dk · akşam başına 5 ders (19.00–23.00, aralar dahil)
       24 Kas – 9 Ara: 8 akşam · son akşam 1 ders */
    start: '2026-11-24', end: '2026-12-09', wd: [1, 2, 3],
    days: 'Salı, Çarşamba, Perşembe', time: '19.00–23.00',
    hours: 40, canli: 36, price: 21000, seats: 24, pay: '',
    pkgPrice: 15000, pkgNote: 'en az 2 programa katılımda',
    vurgu: 'AI destekli raporlama platformlarımız 3 ay ücretsiz'
  },
  {
    no: 3, id: '', code: 'EcoVadis · CDP', cat: 'GEN',
    title: 'EcoVadis ve CDP Hazırlık Atölyesi',
    desc: 'Değerlendirme ve açıklama süreçleri için verilerinizi ve kanıtlarınızı hazırlayın: 20 saat EcoVadis ve 20 saat CDP uygulaması, örnek şirket üzerinden. İki hafta sonuna yayılan program; toplam 40 saat.',
    /* 32 ders saati × 45 dk · günde 8 ders (09.00–16.00, aralar dahil)
       21–22 ve 28–29 Kas: 4 gün */
    start: '2026-11-21', end: '2026-11-29', wd: [5, 6],
    days: 'Cumartesi, Pazar', time: '09.00–16.00',
    hours: 40, canli: 32, price: 15000, seats: 24, pay: '',
    pkgPrice: 12000, pkgNote: 'en az 2 programa katılımda'
  },
  {
    no: 4, id: '', code: 'ISO 26000', cat: 'S',
    title: 'ISO 26000 Sosyal Sorumluluk Eğitimi',
    desc: 'ISO 26000 rehberliğinde kurumunuz için uygulanabilir bir sosyal sorumluluk planı geliştirin: insan hakları, çalışma uygulamaları, etik ve paydaş ilişkileri, örnek şirket üzerinden. Beş gün süren yoğun program; toplam 40 saat.',
    /* 40 ders saati × 45 dk · günde 8 ders (09.00–16.00, aralar dahil)
       4–8 Ara: 5 ardışık gün, hafta sonu dahil */
    start: '2026-12-04', end: '2026-12-08', wd: [0, 1, 2, 3, 4, 5, 6],
    days: 'Cuma–Salı, her gün', time: '09.00–16.00',
    hours: 40, canli: 40, price: 15000, seats: 24, pay: '',
    pkgPrice: 12000, pkgNote: 'en az 2 programa katılımda'
  }
];

/* Resmî tatiller — takvimde işaretlenir, o gün oturum planlanmaz */
window.ESG_TATIL = {
  '2026-10-29': 'Cumhuriyet Bayramı'
};
