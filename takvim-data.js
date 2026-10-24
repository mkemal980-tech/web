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
   ara      : yalnızca bu programda oturum yapılmayacak günler, 'YYYY-AA-GG' (isteğe bağlı)
   =================================================================== */
window.ESG_TAKVIM = [
  {
    no: 1, id: '', code: 'Teknik Sürdürülebilirlik', cat: 'GEN',
    title: 'Teknik Sürdürülebilirlik Uzmanlığı Eğitimi',
    desc: 'Sürdürülebilirliğin teknik altyapısı: karbon ve kaynak hesaplama, veri yönetimi ve gerçek bir şirket üzerinde vaka analizi. Dört haftaya yayılan akşam programı; toplam 60 saat.',
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
  },
  {
    no: 5, id: '', code: 'ISO 42001', cat: 'G',
    title: 'ISO 42001 Başdenetçilik Eğitimi',
    desc: 'Yapay zekâ yönetim sistemi denetçiliği: AI risk ve etki değerlendirmesi, kontrol setleri, denetim teknikleri ve uygunluk raporlaması.',
    start: '2026-10-19', end: '2026-10-23', wd: [0, 1, 2, 3, 4],
    days: 'Pazartesi–Cuma', time: '09.00–16.00',
    hours: 30, price: 15900, seats: 20, pay: ''
  },
  {
    no: 6, id: '', code: 'SBTi', cat: 'E',
    title: 'SBTi Eğitimi',
    desc: 'Bilime dayalı hedef belirleme: sektörel azaltım patikaları, Kapsam 3 hedefleri, Net Sıfır standardı ve SBTi başvuru süreci.',
    start: '2026-11-30', end: '2026-12-01', wd: [0, 1],
    days: 'Pazartesi–Salı', time: '09.00–16.00',
    hours: 16, price: 24000, seats: 24, pay: ''
  },
  {
    no: 7, id: '', url: 'claude-ustalik-programi.html', code: 'Claude Ustalık', cat: 'GEN',
    title: 'Claude Ustalık Eğitimi',
    desc: 'İleri seviye, uygulamalı Claude eğitimi: çalışma ortamları, projeler ve yetenekler, ajanlı çalışma, bağlayıcılar, güvenlik ve token ekonomisi. Dört haftaya yayılan akşam programı; %75 laboratuvar.',
    /* 8 oturum × 90 dk (2 ders × 45 dk) · 23 Kas – 18 Ara */
    start: '2026-11-23', end: '2026-12-18', wd: [0, 4],
    days: 'Pazartesi ve Cuma', time: '19.00–20.30',
    hours: 16, canli: 16, price: 26000, seats: 16, pay: ''
  },
  {
    no: 8, id: '', code: 'ISO 14040/44 · ISO 14067', cat: 'E',
    title: 'Uygulamalı LCA ISO 14040/44 ve Ürün Karbon Ayak İzi ISO 14067 Eğitimi',
    desc: 'Teorik değil, gerçek ve uygulamalı: yaşam döngüsü değerlendirmesi ve ürün karbon ayak izi, gerçek ürün verileriyle ve yazılım üzerinde adım adım hesaplanır. Beşinci gün atölye. Katılımcılara 3 ay LCA ve ürün karbon ayak izi (PCF) yazılımı tam erişim lisansı.',
    /* 5 gün × 6 ders (45 dk) · 09.00–15.00, öğle arası ve aralar dahil · 5. gün atölye */
    start: '2026-11-02', end: '2026-11-06', wd: [0, 1, 2, 3, 4],
    days: 'Pazartesi–Cuma', time: '09.00–15.00',
    hours: 30, canli: 30, price: 26000, seats: 20, pay: '',
    vurgu: '3 ay LCA ve PCF yazılımı tam erişim lisansı'
  },
  {
    no: 9, id: 'iso-50001', code: 'ISO 50001', cat: 'E',
    title: 'ISO 50001 Enerji Yönetim Sistemi Başdenetçilik Eğitimi',
    desc: 'ISO 50001 enerji yönetim sistemi gereklilikleri ile ISO 19011 denetim yaklaşımını birlikte ele alan yoğun başdenetçilik programı: enerji gözden geçirmesi, EnPI ve baz çizgisi, denetim planlama, kanıt toplama, uygunsuzluk yazımı ve raporlama.',
    /* 2–5 Kasım: Pazartesi–Perşembe, 4 gün */
    start: '2026-11-02', end: '2026-11-05', wd: [0, 1, 2, 3],
    days: 'Pazartesi–Perşembe', time: '09.00–17.00',
    hours: 28, canli: 28, price: 16000, seats: 20, pay: ''
  },
  {
    no: 10, id: '', url: 'tr-ets-egitimi.html', code: 'TR-ETS', cat: 'E',
    title: 'TR-ETS Uygulamalı Uyum Eğitimi',
    desc: 'Türkiye ETS yükümlülük döngüsü tek oturumda: kapsam ve kategori, emisyon izni, İzleme Metodolojisi Planı (son tarih 27 Ocak 2027), doğrulama, ücretsiz tahsisat ve piyasa kuralları. Örnek tesisin tahsisat pozisyonu Excel’de hesaplanır.',
    /* tek oturum · 4 saat (15 dk ara dahil) */
    start: '2026-11-12', end: '2026-11-12', wd: [3],
    days: 'Perşembe', time: '09.30–13.30',
    hours: 4, canli: 4, price: 5900, seats: 24, pay: '',
    vurgu: 'Tahsisat pozisyonu Excel şablonu ve İMP hazırlık kontrol listesi'
  },
  {
    no: 11, id: '', url: 'ets-uzmanligi.html', code: 'ETS Uzmanlığı', cat: 'E',
    title: 'ETS Uzmanlığı Eğitimi',
    desc: 'TR ETS döngüsünü şirkette yönetecek uzmanlar için: kapsam ve alt tesis tasarımı, İMP ve FSR, doğrulama yönetimi, ücretsiz tahsisat, İşlem Kayıt Sistemi ve piyasa işlemleri, teslim ve karbon maliyeti. Sekiz akşamlık program; toplam 48 saat.',
    /* 40 ders saati × 45 dk · akşam başına 5 ders (19.00–23.00, aralar dahil)
       22–24 Ara + 5–7 Oca + 12–13 Oca: 8 akşam · 29–31 Ara yılbaşı arası */
    start: '2026-12-22', end: '2027-01-13', wd: [1, 2, 3],
    ara: ['2026-12-29', '2026-12-30', '2026-12-31'],
    days: 'Salı, Çarşamba, Perşembe', time: '19.00–23.00',
    hours: 48, canli: 40, price: 24000, seats: 20, pay: '',
    vurgu: 'Bitirme projesi: tesisiniz için ETS uyum dosyası'
  }
];

/* Resmî tatiller — takvimde işaretlenir, o gün oturum planlanmaz */
window.ESG_TATIL = {
  '2026-10-29': 'Cumhuriyet Bayramı'
};
