/* ===================================================================
   ESG LAB — Eğitim takvimi verisi (Eylül–Aralık 2026)
   Her kayıt bir eğitim programıdır; oturum günleri start–end aralığında
   "wd" (hafta günleri) kuralına göre otomatik üretilir.

   cat  : E (Çevresel) · S (Sosyal) · G (Yönetişim) · GEN (Genel)
   wd   : hafta günleri — 0=Pzt 1=Sal 2=Çar 3=Per 4=Cum 5=Cmt 6=Paz
   id   : egitimler.html içindeki eğitim kimliği (boşsa detay bağlantısı gizlenir)
   pay  : iyzico Ödeme Linki (iyziLink) — boşsa buton e-posta ile kayda düşer
   =================================================================== */
window.ESG_TAKVIM = [
  {
    no: 1, id: '', code: 'Teknik Sürdürülebilirlik', cat: 'GEN',
    title: 'Teknik Sürdürülebilirlik Eğitimi',
    desc: 'Sürdürülebilirliğin teknik altyapısı: karbon ve kaynak hesaplama, veri yönetimi, raporlama standartları ve saha uygulamaları. Beş haftaya yayılan akşam programı.',
    start: '2026-09-22', end: '2026-10-22', wd: [1, 2, 3],
    days: 'Salı, Çarşamba, Perşembe', time: '19.00–23.00',
    hours: 60, price: 22000, seats: 24, pay: ''
  },
  {
    no: 2, id: 'iso-46001', code: 'ISO 46001', cat: 'E',
    title: 'ISO 46001 Başdenetçilik Eğitimi',
    desc: 'Su verimliliği yönetim sistemi denetçiliği: sistem gereklilikleri, denetim planlama, bulguların raporlanması ve başdenetçi yetkinlikleri.',
    start: '2026-09-28', end: '2026-10-02', wd: [0, 1, 2, 3, 4],
    days: 'Pazartesi–Cuma', time: '09.00–16.00',
    hours: 30, price: 13900, seats: 20, pay: ''
  },
  {
    no: 3, id: '', code: 'Master Raporlama', cat: 'G',
    title: 'Master Raporlama Eğitimi',
    desc: 'Kurumsal sürdürülebilirlik raporlamasının uçtan uca uygulaması: çifte önemlilik, gösterge seti, veri toplama, GRI/TSRS uyumu ve rapor yazımı.',
    start: '2026-10-05', end: '2026-10-24', wd: [0, 4, 5],
    days: 'Pazartesi, Cuma, Cumartesi', time: 'Pzt./Cum. 19.00–23.00 · Cmt. 09.00–16.00',
    hours: 40, price: 26000, seats: 20, pay: ''
  },
  {
    no: 4, id: 'iso-50001', code: 'ISO 50001', cat: 'E',
    title: 'ISO 50001 Başdenetçilik Eğitimi',
    desc: 'Enerji yönetim sistemi denetçiliği: enerji gözden geçirme, performans göstergeleri, denetim programı yönetimi ve belgelendirme süreci.',
    start: '2026-10-05', end: '2026-10-09', wd: [0, 1, 2, 3, 4],
    days: 'Pazartesi–Cuma', time: '09.00–16.00',
    hours: 30, price: 13900, seats: 20, pay: ''
  },
  {
    no: 5, id: '', code: 'ISO 42001', cat: 'G',
    title: 'ISO 42001 Başdenetçilik Eğitimi',
    desc: 'Yapay zekâ yönetim sistemi denetçiliği: AI risk ve etki değerlendirmesi, kontrol setleri, denetim teknikleri ve uygunluk raporlaması.',
    start: '2026-10-12', end: '2026-10-16', wd: [0, 1, 2, 3, 4],
    days: 'Pazartesi–Cuma', time: '09.00–16.00',
    hours: 30, price: 15900, seats: 20, pay: ''
  },
  {
    no: 6, id: '', code: 'Taksonomi', cat: 'G',
    title: 'Taksonomi Eğitimi',
    desc: 'AB ve Türkiye yeşil taksonomisi: uygunluk kriterleri, önemli zarar vermeme (DNSH) testi, asgari güvenceler ve uyum hesaplaması.',
    start: '2026-10-26', end: '2026-10-27', wd: [0, 1],
    days: 'Pazartesi–Salı', time: '09.00–16.00',
    hours: 16, price: 9900, seats: 24, pay: ''
  },
  {
    no: 7, id: '', code: 'AI — İleri Seviye', cat: 'GEN',
    title: 'Çalışanlar İçin AI Eğitimi — İleri Seviye',
    desc: 'Kurumsal iş akışlarında yapay zekâ: ileri seviye istem tasarımı, veri güvenliği, otomasyon senaryoları ve sorumlu kullanım politikaları.',
    start: '2026-11-02', end: '2026-11-06', wd: [0, 1, 2, 3, 4],
    days: 'Pazartesi–Cuma', time: '09.00–16.00',
    hours: 30, price: 13900, seats: 24, pay: ''
  },
  {
    no: 8, id: 'ecovadis', code: 'EcoVadis', cat: 'GEN',
    title: 'Ecovadis Eğitimi',
    desc: 'EcoVadis değerlendirme metodolojisi, 21 gösterge, belge gereksinimleri ve skoru yükselten dokümantasyon pratiği.',
    start: '2026-11-09', end: '2026-11-11', wd: [0, 1, 2],
    days: 'Pazartesi–Çarşamba', time: 'İlk iki gün 09.00–16.00 · son gün 09.00–13.00',
    hours: 16, price: 7900, seats: 24, pay: ''
  },
  {
    no: 9, id: 'ets', code: 'ETS', cat: 'E',
    title: 'Emisyon Ticaret Sistemi Eğitimi',
    desc: 'TR-ETS ve AB-ETS işleyişi: izleme-raporlama-doğrulama (MRV), tahsisat hesabı, piyasa mekanizmaları ve SKDM ile ilişkisi.',
    start: '2026-11-12', end: '2026-11-13', wd: [3, 4],
    days: 'Perşembe–Cuma', time: '09.00–16.00',
    hours: 16, price: 9900, seats: 24, pay: ''
  },
  {
    no: 10, id: 'iso-20400', code: 'ISO 20400', cat: 'G',
    title: 'ISO 20400 Tedarikçi Yönetimi',
    desc: 'Satın alma süreçlerine ESG kriterlerinin entegrasyonu, tedarikçi seçimi ve performans yönetimi, sürdürülebilir tedarik politikası.',
    start: '2026-11-16', end: '2026-11-18', wd: [0, 1, 2],
    days: 'Pazartesi–Çarşamba', time: 'İlk iki gün 09.00–16.00 · son gün 09.00–13.00',
    hours: 16, price: 13900, seats: 24, pay: ''
  },
  {
    no: 11, id: '', code: 'SBTi', cat: 'E',
    title: 'SBTi Eğitimi',
    desc: 'Bilime dayalı hedef belirleme: sektörel azaltım patikaları, Kapsam 3 hedefleri, Net Sıfır standardı ve SBTi başvuru süreci.',
    start: '2026-11-30', end: '2026-12-02', wd: [0, 1, 2],
    days: 'Pazartesi–Çarşamba', time: 'İlk iki gün 09.00–16.00 · son gün 09.00–13.00',
    hours: 16, price: 15900, seats: 24, pay: ''
  },
  {
    no: 12, id: 'iso-26000', code: 'ISO 26000', cat: 'S',
    title: 'ISO 26000 Sosyal Sorumluluk Eğitimi',
    desc: 'Yedi temel konu başlığı, paydaş analizi, sosyal sorumluluğun kurumsal süreçlere entegrasyonu, performans ölçümü ve raporlama.',
    start: '2026-12-07', end: '2026-12-09', wd: [0, 1, 2],
    days: 'Pazartesi–Çarşamba', time: 'İlk iki gün 09.00–16.00 · son gün 09.00–13.00',
    hours: 16, price: 13900, seats: 24, pay: ''
  },
  {
    no: 13, id: '', code: 'Sürdürülebilir Finans', cat: 'G',
    title: 'Sürdürülebilir Finans Eğitimi',
    desc: 'Yeşil ve sürdürülebilirlik bağlantılı finansman araçları, ESG risk değerlendirmesi, açıklama yükümlülükleri ve yatırımcı beklentileri.',
    start: '2026-12-14', end: '2026-12-16', wd: [0, 1, 2],
    days: 'Pazartesi–Çarşamba', time: 'İlk iki gün 09.00–16.00 · son gün 09.00–13.00',
    hours: 16, price: 13900, seats: 24, pay: ''
  },
  {
    no: 14, id: 'surdurulebilir-ik', code: 'Sürdürülebilir İK', cat: 'S',
    title: 'Sürdürülebilir İK Eğitimi',
    desc: 'Yeşil İK uygulamaları, çeşitlilik ve kapsayıcılık, çalışan esenliği ve ESG hedefleriyle uyumlu insan kaynakları stratejisi.',
    start: '2026-12-21', end: '2026-12-23', wd: [0, 1, 2],
    days: 'Pazartesi–Çarşamba', time: 'İlk iki gün 09.00–16.00 · son gün 09.00–13.00',
    hours: 16, price: 7900, seats: 24, pay: ''
  }
];

/* Resmî tatiller — takvimde işaretlenir, o gün oturum planlanmaz */
window.ESG_TATIL = {
  '2026-10-29': 'Cumhuriyet Bayramı'
};
