/* ===================================================================
   ESG LAB — i18n + etkileşimler
   =================================================================== */
(function () {
  'use strict';

  /* ---------------- Dictionary ---------------- */
  const DICT = {
    tr: {
      nav_services: 'Hizmetler', nav_process: 'Yaklaşım', nav_method: 'Metodoloji', nav_about: 'Hakkımızda', nav_cta: 'İletişim',
      hero_eyebrow: 'Sürdürülebilirlik · Veri · Strateji',
      hero_title: 'Sürdürülebilirliği <span class="hl">ölçülebilir</span> kılıyoruz.',
      hero_sub: "ESG LAB; KOBİ'ler, büyük kurumlar ve kamu için karbon yönetimi, ESG raporlama ve kurumsal kapasite geliştirme alanlarında veriye dayalı danışmanlık sunar.",
      hero_cta1: 'Ücretsiz değerlendirme', hero_cta2: 'Metodolojimiz',
      hero_m1: 'uyumlu envanter', hero_m2: 'kapsam 1·2·3', hero_m3: 'raporlama',
      dp_title: 'Karbon yoğunluğu — tCO₂e / m₺ ciro', dp_f1: 'Kapsam 1 · 2', dp_f2: 'Kapsam 3', dp_f3: 'Hedef yılı',
      trust_lbl: 'Birlikte çalıştığımız ekosistem',
      fc_eyebrow: 'Platform', fc_title: 'Tek bir veri çatısı, üç somut çıktı',
      fc_sub: 'Danışmanlık bir raporla bitmez. Verinizi panoya, panoyu rapora, raporu ekibinizin yetkinliğine dönüştürüyoruz.',
      fc1_chip: 'Toplam azaltım', fc1_tag: 'Veri panosu', fc1_t: 'Karbon verinizi tek panelde',
      fc1_p: 'Tüm tesis ve kapsamların emisyonu canlı bir panoda toplanır; eğilimi ve hedefe uzaklığı anlık görürsünüz.', fc1_b: 'Veri panosu',
      fc2_btn: 'Doğrula', fc2_tag: 'Raporlama', fc2_t: 'Standartlara uyumlu raporlar',
      fc2_p: 'GRI, CSRD/ESRS ve TSRS gereksinimlerine eşlenmiş, doğrulamaya hazır raporları tek tıkla üretin.', fc2_b: 'Raporlama',
      fc3_new: 'Yeni', fc3_bubble: 'Ekibinizi 12 modülde sertifikalandırıyoruz.', fc3_tag: 'Akademi', fc3_t: 'Ekibinizi içeriden güçlendirin',
      fc3_p: 'Role özel modüller ve sertifikasyonla sürdürülebilirlik yetkinliğini kurum içinde kalıcı hale getirin.', fc3_b: 'Akademi',
      cl_title: 'İklim stratejiniz, hedeften eyleme',
      cl_sub: 'Emisyon hedeflerinizi bilimle hizalayın ve net-sıfıra giden yolu adım adım planlayın — uluslararası standartlarla uyumlu, denetime hazır.',
      cl_badge: '1,5°C', cl_suggest: '2030 için doğrulanabilir azaltım hedefleri önerildi…',
      cl_a_t: 'Hedefleriniz, bilimle hizalı', cl_a_p: 'Emisyon azaltım hedeflerinizi Science Based Targets initiative (SBTi) kriterlerine göre belirleyin; 1,5°C senaryosuyla uyumlu, bağımsız doğrulanabilir hedefler kurun.', cl_a_b: "SBTi'yi keşfet",
      cl_b_eyebrow: 'NET-SIFIR', cl_b_t: 'Net-sıfır yol haritanız', cl_b_p: 'Kapsam 1, 2 ve 3 emisyonlarınızı kapsayan aşamalı bir net-sıfır planı; ara kilometre taşları, azaltım kaldıraçları ve dengeleme stratejisiyle.',
      st_1: 'Tamamlanan proje', st_2: 'Ortalama emisyon azaltımı', st_3: 'Sektörde saha deneyimi', st_4: 'Eğitilen profesyonel',
      svc_eyebrow: 'Hizmetler', svc_title: 'Üç temel uzmanlık alanı',
      svc_sub: 'Teşhisten raporlamaya kadar tüm sürdürülebilirlik yolculuğunuzu tek bir veri çatısı altında yönetiyoruz.',
      svc1_t: 'Karbon ayak izi & emisyon yönetimi', svc1_p: 'Kapsam 1, 2 ve 3 sera gazı envanteri, doğrulamaya hazır hesaplama ve net-sıfır yol haritası.',
      svc1_l1: 'GHG Protocol envanteri', svc1_l2: 'ISO 14064 doğrulama desteği', svc1_l3: 'Azaltım & SBTi hedefleri',
      svc2_t: 'ESG raporlama & strateji', svc2_p: 'Çift önemlilik analizi, paydaş haritalama ve CSRD/GRI uyumlu raporlama mimarisi.',
      svc2_l1: 'GRI · CSRD · TSRS uyumu', svc2_l2: 'Çift önemlilik analizi', svc2_l3: 'ESG skor & derecelendirme',
      svc3_t: 'Eğitim & kurumsal farkındalık', svc3_p: 'Yönetim kurulundan saha ekiplerine kadar role özel eğitim programları ve kapasite geliştirme.',
      svc3_l1: 'Yönetici farkındalık atölyeleri', svc3_l2: 'Teknik ekip sertifikasyonu', svc3_l3: 'Sürdürülebilirlik akademisi',
      proc_eyebrow: 'Yaklaşım', proc_title: 'Veriyle başlar, etkiyle biter',
      proc_sub: 'Her projeyi denetlenebilir bir veri zinciri olarak kurguluyoruz — varsayım değil, kanıt.',
      p1_t: 'Teşhis', p1_p: 'Mevcut durum analizi, veri olgunluğu ve regülasyon maruziyeti taraması.',
      p2_t: 'Ölçüm', p2_p: 'Sera gazı envanteri, ESG gösterge seti ve doğrulanabilir veri toplama.',
      p3_t: 'Strateji', p3_p: 'Azaltım senaryoları, hedef belirleme ve yatırım önceliklendirme.',
      p4_t: 'Raporlama', p4_p: 'Standartlara uyumlu rapor, beyan ve sürekli izleme panosu.',
      m_eyebrow: 'Metodoloji', m_title: 'Kanıta dayalı, denetime hazır',
      m_sub: 'Topladığımız her veri noktası kaynağına kadar izlenebilir. Tahmin yürütmüyoruz — ölçüyor, doğruluyor ve görselleştiriyoruz.',
      m_f1: '<b>Tek doğruluk kaynağı.</b> Tüm göstergeler merkezi bir veri modelinde toplanır.',
      m_f2: '<b>Bağımsız doğrulanabilirlik.</b> Hesaplamalar üçüncü taraf denetimine hazır kurgulanır.',
      m_f3: '<b>Canlı izleme.</b> İlerleme, statik rapor değil yaşayan bir panodan takip edilir.',
      tab_1: 'Karbon', tab_2: 'ESG Skoru', tab_3: 'Sektör',
      vz_c_t: 'Yıllık emisyon (tCO₂e)', vz_c_a: '● Gerçekleşen', vz_c_b: '● Hedef patikası', vz_c_c: 'Net-sıfır',
      vz_s_t: 'Bileşik ESG skoru', vz_s_e: 'Çevresel (E)', vz_s_s: 'Sosyal (S)', vz_s_g: 'Yönetişim (G)',
      vz_x_t: 'Emisyon kaynağı dağılımı', vz_x_1: 'Enerji & ısıtma', vz_x_2: 'Tedarik zinciri', vz_x_3: 'Lojistik & ulaşım', vz_x_4: 'Atık & su', vz_x_5: 'Diğer',
      ab_eyebrow: 'Hakkımızda',
      ab_lead: 'Sürdürülebilirliğin bir <em>uyum yükü</em> değil, ölçülebilir bir <em>rekabet avantajı</em> olduğuna inanıyoruz.',
      ab_1t: 'Bağımsızlık', ab_1p: 'Tedarikçi değiliz; çıkarımız yalnızca verinizin doğruluğunda.',
      ab_2t: 'Şeffaflık', ab_2p: 'Her sayının arkasındaki yöntemi ve kaynağı açıkça paylaşırız.',
      ab_3t: 'Uygulanabilirlik', ab_3p: 'Rafta kalan rapor değil, sahada işleyen yol haritası üretiriz.',
      ab_4t: 'Bilimsel temel', ab_4p: 'Uluslararası standart ve en güncel iklim bilimine dayanırız.',
      cta_t: 'Sürdürülebilirlik yol haritanızı birlikte çıkaralım.',
      cta_p: '45 dakikalık ücretsiz bir değerlendirme görüşmesiyle başlayın — kurumunuzun veri olgunluğunu ve öncelikli adımları birlikte belirleyelim.',
      cta_b1: 'Görüşme planla', cta_b2: 'Hizmetleri incele',
      ct_eyebrow: 'İletişim', ct_title: 'Yol haritanızı birlikte çıkaralım.',
      ct_lead: 'Formu doldurun; veri olgunluğunuzu ve öncelikli adımları konuşmak için en geç 2 iş günü içinde dönüş yapalım.',
      ct_email_l: 'E-posta', ct_phone_l: 'Telefon', ct_addr_l: 'Adres',
      ct_f_name: 'Ad Soyad <span class="req">*</span>', ct_f_email: 'E-posta <span class="req">*</span>',
      ct_f_company: 'Şirket / Kurum', ct_f_phone: 'Telefon', ct_f_topic: 'İlgi alanı',
      ct_t1: 'Karbon ayak izi & emisyon', ct_t2: 'ESG raporlama & strateji', ct_t3: 'Online eğitim', ct_t4: 'KOBİ paketi', ct_t5: 'Diğer',
      ct_f_msg: 'Mesajınız <span class="req">*</span>', ct_ph: 'Kurumunuz ve ihtiyacınız hakkında kısaca yazın…',
      ct_send: 'Mesajı gönder', ct_note: 'Yanıt süresi: ~2 iş günü',
      ft_desc: 'Veriye dayalı sürdürülebilirlik danışmanlığı. Karbon, ESG raporlama ve kurumsal kapasite geliştirme.',
      ft_h1: 'Hizmetler', ft_s1: 'Karbon yönetimi', ft_s2: 'ESG raporlama', ft_s3: 'Eğitim & farkındalık', ft_s4: 'Metodoloji',
      ft_h2: 'Kurum', ft_c1: 'Hakkımızda', ft_c2: 'Yaklaşım', ft_c3: 'Etki', ft_c4: 'İletişim',
      ft_h3: 'İletişim', ft_addr: 'Yahyakaptan Mah A11:26, İzmit/Kocaeli', ft_legal: 'Tüm hakları saklıdır · Gizlilik · KVKK',
      nav_pkg: 'KOBİ Paketi',
      nav_soft: 'Yazılım & Platformlar',
      nav_edu: 'Online Eğitim',
      edu_eyebrow: 'ESG Akademi · Online Eğitim',
      edu_title: 'Sürdürülebilirlik yetkinliğini <span class="hl">eğitimle</span> kurun.',
      edu_sub: 'Karbondan döngüsel ekonomiye, sosyal sorumluluktan yönetişime; standart temelli ve uygulamaya dönük online eğitim kataloğu. E, S ve G başlıkları altında kategorize edilmiştir.',
      edu_st1: 'Eğitim programı', edu_st2: 'Kategori', edu_st3: 'ISO · CDP · GRI', edu_st3v: 'Standart temelli',
      pk_eyebrow: "KOBİ'ler için · Sabit kapsam",
      pk_title: 'Sürdürülebilirliğe <span class="hl">12 haftada</span> sağlam bir başlangıç.',
      pk_sub: "Büyük danışmanlık bütçeleri olmadan; KOBİ'niz için sabit kapsamlı, sabit fiyatlı ve doğrudan uygulanabilir bir sürdürülebilirlik paketi.",
      pk_cta1: 'Paket teklifi al', pk_cta2: 'Kapsamı incele',
      pk_m1v: '12 hafta', pk_m1: 'ana işlerin teslimi', pk_m2v: '12 ay', pk_m2: 'danışmanlık süresi', pk_m3v: 'Haftalık', pk_m3: 'değerlendirme toplantısı',
      pk_sum_t: 'Paket bir bakışta', pk_sum_badge: 'KOBİ',
      pk_sum_1: 'Karbon ayak izi envanteri (Kapsam 1–2–3)', pk_sum_2: 'ESG ön-değerlendirme & olgunluk skoru',
      pk_sum_3: 'Önceliklendirilmiş azaltım yol haritası', pk_sum_4: 'Yarım günlük ekip eğitimi', pk_sum_5: 'Yönetici özeti & dijital rapor',
      pk_sum_from: 'Standart kapsam', pk_sum_price: 'Teklife göre <small>+KDV</small>', pk_sum_link: 'Detay',
      pk_v_eyebrow: 'Neden KOBİ paketi', pk_v_title: 'Kurumsal kalite, KOBİ ölçeği',
      pk_v_sub: "Büyük şirketlerin sürdürülebilirlik metodolojisini, KOBİ'lerin bütçesine ve hızına göre paketledik.",
      pk_v1t: 'Sabit fiyat', pk_v1p: 'Kapsam baştan bellidir, açık uçlu danışmanlık faturası yoktur.',
      pk_v2t: 'Hızlı sonuç', pk_v2p: '12 hafta içinde elinizde denetime uygun bir rapor ve yol haritası olur.',
      pk_v3t: 'Regülasyona hazır', pk_v3p: 'Tedarik zinciri ve müşteri taleplerine, yaklaşan raporlama yükümlülüklerine hazırlık.',
      pk_v4t: 'Teşvik uyumu', pk_v4p: 'KOSGEB ve diğer destek programlarına uygunluk kontrol listesi dahildir.',
      pk_m_eyebrow: 'Paket içeriği', pk_m_title: 'Pakette ne var?',
      pk_m_sub: 'Altı modül; teşhisten ekibinizin eğitimine kadar uçtan uca tek bir teslimat.',
      pk_mod1t: 'Karbon envanteri', pk_mod1p: 'Kapsam 1 ve 2 sera gazı hesabı, temel Kapsam 3 kalemleri.',
      pk_mod2t: 'ESG ön-değerlendirme', pk_mod2p: 'Çevresel, sosyal ve yönetişim olgunluk skoru ve kıyaslama.',
      pk_mod3t: 'Azaltım yol haritası', pk_mod3p: 'Etki/maliyet önceliğine göre sıralanmış somut aksiyon planı.',
      pk_mod4t: 'Ekip eğitimi', pk_mod4p: 'Yarım günlük, role özel sürdürülebilirlik farkındalık oturumu.',
      pk_mod5t: 'Yönetici raporu', pk_mod5p: 'Karar vericiler için özet ve denetime uygun teknik ek.',
      pk_mod6t: 'Teşvik kontrol listesi', pk_mod6p: 'Uygun destek ve hibe programları için hazırlık ve kontrol listesi.',
      pk_t_eyebrow: 'Zaman çizelgesi', pk_t_title: 'Ana işler 12 hafta, danışmanlık 12 ay',
      pk_t_sub: 'Ana işler 12 haftada, dört fazda tamamlanır. Danışmanlık ilişkisi ise 12 ay sürer — her hafta yaptığımız değerlendirme ve revizyon toplantılarıyla yol haritanızı canlı tutarız.',
      pk_eng_k1: 'Ana işler', pk_eng_v1: '12 hafta', pk_eng_d1: 'Dört faz, net teslimatlar',
      pk_eng_k2: 'Danışmanlık', pk_eng_v2: '12 ay', pk_eng_d2: 'Uçtan uca refakat ve destek',
      pk_eng_k3: 'Ritim', pk_eng_v3: 'Haftalık', pk_eng_d3: 'Değerlendirme & revizyon toplantısı',
      pk_ph1t: 'Başlangıç', pk_ph1p: 'Tanışma, kapsam netleştirme ve veri toplama planı.', pk_ph1a: 'Başlangıç toplantısı', pk_ph1b: 'Veri talep listesi',
      pk_ph2t: 'Ölçüm', pk_ph2p: 'Karbon envanteri ve ESG göstergelerinin hesaplanması.', pk_ph2a: 'GHG hesaplaması', pk_ph2b: 'ESG skor seti',
      pk_ph3t: 'Analiz', pk_ph3p: 'Sonuçların yorumlanması ve azaltım yol haritası.', pk_ph3a: 'Önceliklendirme', pk_ph3b: 'Senaryo & hedef',
      pk_ph4t: 'Teslim', pk_ph4p: 'Rapor sunumu, ekip eğitimi ve sonraki adımlar.', pk_ph4a: 'Yönetici sunumu', pk_ph4b: 'Eğitim oturumu',
      pk_pr_eyebrow: 'Paketler', pk_pr_title: 'Ölçeğinize uygun üç paket',
      pk_pr_sub: "Tek tesisli bir KOBİ'den çok lokasyonlu gruplara kadar; aynı metodoloji, farklı kapsam.",
      pk_pop: 'En çok tercih edilen', pk_tier_cta: 'Teklif al',
      pk_tier1s: 'Tek lokasyon', pk_tier1n: 'Temel', pk_tier1d: "İlk adımı atan, tek tesisli KOBİ'ler için.",
      pk_t1f1: 'Karbon Kapsam 1–2 envanteri', pk_t1f2: 'ESG ön-değerlendirme', pk_t1f3: 'Yol haritası özeti', pk_t1f4: 'Dijital yönetici raporu', pk_t1f5: 'Ekip eğitimi', pk_t1f6: 'Takip dönemi',
      pk_tier2s: 'Çok lokasyon', pk_tier2n: 'Büyüme', pk_tier2d: "Müşteri ve regülasyon talebi gelen büyüyen KOBİ'ler için.",
      pk_t2f1: 'Kapsam 1–2 + öncelikli Kapsam 3', pk_t2f2: 'Tam ESG değerlendirme & skor', pk_t2f3: 'Detaylı azaltım yol haritası', pk_t2f4: 'Yarım günlük ekip eğitimi', pk_t2f5: 'Teşvik uyum kontrol listesi', pk_t2f6: '3 ay e-posta takip desteği',
      pk_tier3s: 'Grup / holding', pk_tier3n: 'Kurumsal+', pk_tier3d: 'Çok şirketli yapılar ve ileri raporlama ihtiyacı için.',
      pk_t3f1: 'Büyüme paketinin tamamı', pk_t3f2: 'Tedarik zinciri analizi', pk_t3f3: 'CSRD / GRI raporlama hazırlığı', pk_t3f4: 'Çeyreklik izleme panosu', pk_t3f5: 'Özel yönetici atölyeleri', pk_t3f6: '12 ay danışmanlık desteği',
      pk_f_eyebrow: 'Sık sorulanlar', pk_f_title: 'Aklınızdaki sorular',
      pk_q1: 'Paket ne kadar sürede tamamlanıyor?', pk_a1: 'Tipik bir KOBİ için süreç başlangıç toplantısından nihai sunuma kadar 12 haftadır. Veri hazırlığınıza ve lokasyon sayısına göre bu süre kısalabilir veya uzayabilir.',
      pk_q2: 'Hangi verileri sağlamamız gerekiyor?', pk_a2: 'Genellikle enerji ve yakıt faturaları, üretim/operasyon hacimleri, araç filosu ve atık verileri yeterlidir. Başlangıçta size net bir veri talep listesi iletiyoruz.',
      pk_q3: 'Rapor denetime ve müşteri taleplerine uygun mu?', pk_a3: 'Evet. Hesaplamalar GHG Protocol ve ISO 14064 metodolojisine göre, üçüncü taraf doğrulamasına hazır şekilde yapılandırılır.',
      pk_q4: 'Devlet teşviklerinden yararlanabilir miyiz?', pk_a4: 'Pakete, KOSGEB ve ilgili destek programlarına uygunluğunuzu değerlendiren bir kontrol listesi dahildir. Başvuru sürecinde de yönlendirme sağlıyoruz.',
      pk_q5: 'Paket sonrası destek alabilir miyiz?', pk_a5: 'Evet. Büyüme ve Kurumsal+ paketleri takip dönemleri içerir; ayrıca yıllık izleme ve raporlama için ayrı sürekli destek paketleri sunuyoruz.',
      pk_cta_t: "KOBİ'niz için doğru paketi birlikte seçelim.",
      pk_cta_p: 'Kısa bir görüşmede ölçeğinizi ve hedeflerinizi konuşalım; size en uygun paketi ve net bir teklifi 2 iş günü içinde iletelim.',
      pk_cta_b1: 'Teklif iste', pk_cta_b2: 'Tüm hizmetler',
      pk_sc_eyebrow: 'Detaylı kapsam', pk_sc_title: 'Yapılacak işler',
      pk_sc_sub: 'Tek bir standart paket, altı iş kolu. Her iş kolu net teslimatlarla sonuçlanır — neyi, nasıl ve hangi standartla yaptığımız baştan bellidir.',
      pk_sc_deliver: 'Teslimat',
      pk_sc_a_t: 'Karbon ayak izi & envanter', pk_sc_a_d: 'Sera gazı envanter raporu (Excel + PDF)',
      pk_sc_a_1: 'Baz yıl ve organizasyonel sınırların belirlenmesi', pk_sc_a_2: 'Kapsam 1: yakıt, jeneratör, araç filosu, soğutucu gaz kaçakları', pk_sc_a_3: 'Kapsam 2: satın alınan elektrik, ısıtma ve soğutma', pk_sc_a_4: 'Kapsam 3 (öncelikli): satın alınan mal/hizmet, atık, iş seyahati, lojistik', pk_sc_a_5: 'Emisyon faktörleri ve GHG Protocol / ISO 14064 metodolojisi', pk_sc_a_6: 'Veri kalite kontrolü ve belirsizlik değerlendirmesi',
      pk_sc_b_t: 'ESG değerlendirme & olgunluk', pk_sc_b_d: 'ESG skor kartı ve değerlendirme raporu',
      pk_sc_b_1: 'Çevresel (E), Sosyal (S), Yönetişim (G) gösterge taraması', pk_sc_b_2: 'Çift önemlilik ve öncelikli konu analizi', pk_sc_b_3: 'Mevzuat ve müşteri taleplerine karşı boşluk analizi', pk_sc_b_4: 'Sektör kıyaslaması (benchmark)', pk_sc_b_5: 'Politika ve yönetişim yapısı değerlendirmesi',
      pk_sc_c_t: 'Azaltım yol haritası', pk_sc_c_d: 'Önceliklendirilmiş aksiyon planı',
      pk_sc_c_1: 'Azaltım fırsatlarının tespiti ve nicelendirilmesi', pk_sc_c_2: 'Etki/maliyet önceliklendirmesi (azaltım maliyet eğrisi)', pk_sc_c_3: 'Enerji verimliliği ve yenilenebilir enerji önerileri', pk_sc_c_4: 'Kısa, orta ve uzun vadeli hedef belirleme', pk_sc_c_5: 'Net-sıfır patikası taslağı',
      pk_sc_d_t: 'Tedarik zinciri & raporlama hazırlığı', pk_sc_d_d: 'Raporlama hazırlık dosyası',
      pk_sc_d_1: 'Kritik tedarikçilerin haritalanması', pk_sc_d_2: 'CSRD / GRI / TSRS gereksinim eşlemesi', pk_sc_d_3: 'Veri toplama süreç ve altyapı önerisi', pk_sc_d_4: 'Beyan ve doğrulama yol haritası',
      pk_sc_e_t: 'Eğitim & kurumsal kapasite', pk_sc_e_d: 'Eğitim materyalleri ve katılım belgesi',
      pk_sc_e_1: 'Yönetici farkındalık oturumu (yarım gün)', pk_sc_e_2: 'Teknik ekip uygulama atölyesi', pk_sc_e_3: 'Sürdürülebilirlik el kitabı ve şablonlar', pk_sc_e_4: 'Rol bazlı sorumluluk matrisi',
      pk_sc_f_t: 'İzleme & sürekli danışmanlık', pk_sc_f_d: 'Haftalık toplantılar + 12 ay danışmanlık',
      pk_sc_f_1: 'Haftalık değerlendirme ve revizyon toplantıları', pk_sc_f_2: 'Aylık ilerleme raporu ve hedef takibi', pk_sc_f_3: 'Çeyreklik izleme panosu güncellemesi', pk_sc_f_4: '12 ay boyunca e-posta ve görüşme desteği',
      pk_sc_foot: '<b>Tek paket, tüm kapsam.</b> Kapsamı lokasyon sayınıza ve sektörünüze göre birlikte ölçeklendirir, net bir teklif sunarız.', pk_sc_foot_cta: 'Teklif al'
    },
    en: {
      nav_services: 'Services', nav_process: 'Approach', nav_method: 'Methodology', nav_about: 'About', nav_cta: 'Contact',
      hero_eyebrow: 'Sustainability · Data · Strategy',
      hero_title: 'We make sustainability <span class="hl">measurable</span>.',
      hero_sub: 'ESG LAB delivers data-driven advisory in carbon management, ESG reporting and corporate capacity building — for SMEs, large enterprises and the public sector.',
      hero_cta1: 'Free assessment', hero_cta2: 'Our methodology',
      hero_m1: 'compliant inventory', hero_m2: 'scope 1·2·3', hero_m3: 'reporting',
      dp_title: 'Carbon intensity — tCO₂e / €M revenue', dp_f1: 'Scope 1 · 2', dp_f2: 'Scope 3', dp_f3: 'Target year',
      trust_lbl: 'The ecosystem we work with',
      fc_eyebrow: 'Platform', fc_title: 'One data layer, three tangible outputs',
      fc_sub: "Consulting doesn't end with a report. We turn your data into a dashboard, the dashboard into a report, and the report into your team's capability.",
      fc1_chip: 'Total reduction', fc1_tag: 'Dashboard', fc1_t: 'Your carbon data in one dashboard',
      fc1_p: 'Emissions across all sites and scopes are consolidated into a live dashboard — see the trend and distance to target instantly.', fc1_b: 'Dashboard',
      fc2_btn: 'Verify', fc2_tag: 'Reporting', fc2_t: 'Standards-compliant reports',
      fc2_p: 'Generate audit-ready reports mapped to GRI, CSRD/ESRS and TSRS requirements in a single click.', fc2_b: 'Reporting',
      fc3_new: 'New', fc3_bubble: 'We certify your team across 12 modules.', fc3_tag: 'Academy', fc3_t: 'Empower your team from within',
      fc3_p: 'Make sustainability capability permanent in-house with role-specific modules and certification.', fc3_b: 'Academy',
      cl_title: 'Your climate strategy, from target to action',
      cl_sub: 'Align your emission targets with science and plan your path to net-zero step by step — standards-aligned and audit-ready.',
      cl_badge: '1.5°C', cl_suggest: 'Verifiable reduction targets suggested for 2030…',
      cl_a_t: 'Your targets, aligned with science', cl_a_p: 'Set your emission reduction targets to Science Based Targets initiative (SBTi) criteria — credible, independently verifiable targets aligned with a 1.5°C scenario.', cl_a_b: 'Explore SBTi',
      cl_b_eyebrow: 'NET-ZERO', cl_b_t: 'Your net-zero roadmap', cl_b_p: 'A phased net-zero plan covering your Scope 1, 2 and 3 emissions — with interim milestones, reduction levers and an offsetting strategy.',
      st_1: 'Projects delivered', st_2: 'Average emission reduction', st_3: 'Industries in the field', st_4: 'Professionals trained',
      svc_eyebrow: 'Services', svc_title: 'Three core areas of expertise',
      svc_sub: 'From diagnosis to reporting, we run your entire sustainability journey under a single data framework.',
      svc1_t: 'Carbon footprint & emission management', svc1_p: 'Scope 1, 2 and 3 GHG inventory, audit-ready calculation and a net-zero roadmap.',
      svc1_l1: 'GHG Protocol inventory', svc1_l2: 'ISO 14064 verification support', svc1_l3: 'Reduction & SBTi targets',
      svc2_t: 'ESG reporting & strategy', svc2_p: 'Double materiality analysis, stakeholder mapping and a CSRD/GRI-compliant reporting architecture.',
      svc2_l1: 'GRI · CSRD · TSRS alignment', svc2_l2: 'Double materiality analysis', svc2_l3: 'ESG score & rating',
      svc3_t: 'Training & corporate awareness', svc3_p: 'Role-specific training programs and capacity building, from the boardroom to field teams.',
      svc3_l1: 'Executive awareness workshops', svc3_l2: 'Technical team certification', svc3_l3: 'Sustainability academy',
      proc_eyebrow: 'Approach', proc_title: 'Starts with data, ends with impact',
      proc_sub: 'We design every project as an auditable chain of evidence — proof, not assumption.',
      p1_t: 'Diagnose', p1_p: 'Current-state analysis, data maturity and regulatory exposure scan.',
      p2_t: 'Measure', p2_p: 'GHG inventory, ESG indicator set and verifiable data collection.',
      p3_t: 'Strategy', p3_p: 'Reduction scenarios, target setting and investment prioritization.',
      p4_t: 'Report', p4_p: 'Standards-compliant report, disclosure and a continuous monitoring dashboard.',
      m_eyebrow: 'Methodology', m_title: 'Evidence-based, audit-ready',
      m_sub: 'Every data point we collect is traceable to its source. We don’t guess — we measure, verify and visualize.',
      m_f1: '<b>Single source of truth.</b> All indicators are consolidated into one central data model.',
      m_f2: '<b>Independent verifiability.</b> Calculations are structured for third-party audit.',
      m_f3: '<b>Live monitoring.</b> Progress is tracked on a living dashboard, not a static report.',
      tab_1: 'Carbon', tab_2: 'ESG Score', tab_3: 'Sector',
      vz_c_t: 'Annual emissions (tCO₂e)', vz_c_a: '● Actual', vz_c_b: '● Target path', vz_c_c: 'Net-zero',
      vz_s_t: 'Composite ESG score', vz_s_e: 'Environmental (E)', vz_s_s: 'Social (S)', vz_s_g: 'Governance (G)',
      vz_x_t: 'Emission source breakdown', vz_x_1: 'Energy & heating', vz_x_2: 'Supply chain', vz_x_3: 'Logistics & transport', vz_x_4: 'Waste & water', vz_x_5: 'Other',
      ab_eyebrow: 'About',
      ab_lead: 'We believe sustainability is not a <em>compliance burden</em> but a measurable <em>competitive advantage</em>.',
      ab_1t: 'Independence', ab_1p: 'We are not a supplier; our only interest is the accuracy of your data.',
      ab_2t: 'Transparency', ab_2p: 'We openly share the method and source behind every number.',
      ab_3t: 'Actionability', ab_3p: 'We produce roadmaps that work in the field, not reports that sit on a shelf.',
      ab_4t: 'Scientific basis', ab_4p: 'We build on international standards and the latest climate science.',
      cta_t: 'Let’s build your sustainability roadmap together.',
      cta_p: 'Start with a free 45-minute assessment call — we’ll map your organization’s data maturity and priority next steps together.',
      cta_b1: 'Book a call', cta_b2: 'Explore services',
      ct_eyebrow: 'Contact', ct_title: 'Let’s build your roadmap together.',
      ct_lead: 'Fill out the form and we’ll get back to you within 2 business days to discuss your data maturity and priority next steps.',
      ct_email_l: 'Email', ct_phone_l: 'Phone', ct_addr_l: 'Address',
      ct_f_name: 'Full name <span class="req">*</span>', ct_f_email: 'Email <span class="req">*</span>',
      ct_f_company: 'Company', ct_f_phone: 'Phone', ct_f_topic: 'Topic',
      ct_t1: 'Carbon footprint & emissions', ct_t2: 'ESG reporting & strategy', ct_t3: 'Online training', ct_t4: 'SME package', ct_t5: 'Other',
      ct_f_msg: 'Your message <span class="req">*</span>', ct_ph: 'Tell us briefly about your organization and needs…',
      ct_send: 'Send message', ct_note: 'Response time: ~2 business days',
      ft_desc: 'Data-driven sustainability consulting. Carbon, ESG reporting and corporate capacity building.',
      ft_h1: 'Services', ft_s1: 'Carbon management', ft_s2: 'ESG reporting', ft_s3: 'Training & awareness', ft_s4: 'Methodology',
      ft_h2: 'Company', ft_c1: 'About', ft_c2: 'Approach', ft_c3: 'Impact', ft_c4: 'Contact',
      ft_h3: 'Contact', ft_addr: 'Yahyakaptan Mah A11:26, İzmit/Kocaeli', ft_legal: 'All rights reserved · Privacy · GDPR',
      nav_pkg: 'SME Package',
      nav_soft: 'Software & Platforms',
      nav_edu: 'Online Training',
      edu_eyebrow: 'ESG Academy · Online Training',
      edu_title: 'Build sustainability capability <span class="hl">through training</span>.',
      edu_sub: 'From carbon to circular economy, social responsibility to governance — a standards-based, practical online training catalog, categorized under E, S and G.',
      edu_st1: 'Training programs', edu_st2: 'Categories', edu_st3: 'ISO · CDP · GRI', edu_st3v: 'Standards-based',
      pk_eyebrow: 'For SMEs · Fixed scope',
      pk_title: 'A solid start to sustainability in <span class="hl">12 weeks</span>.',
      pk_sub: 'No large consulting budgets required — a fixed-scope, fixed-price and directly actionable sustainability package built for your SME.',
      pk_cta1: 'Request a quote', pk_cta2: 'View scope',
      pk_m1v: '12 weeks', pk_m1: 'core work delivery', pk_m2v: '12 months', pk_m2: 'advisory engagement', pk_m3v: 'Weekly', pk_m3: 'review meeting',
      pk_sum_t: 'Package at a glance', pk_sum_badge: 'SME',
      pk_sum_1: 'Carbon footprint inventory (Scope 1–2–3)', pk_sum_2: 'ESG pre-assessment & maturity score',
      pk_sum_3: 'Prioritized reduction roadmap', pk_sum_4: 'Half-day team training', pk_sum_5: 'Executive summary & digital report',
      pk_sum_from: 'Standard scope', pk_sum_price: 'On request <small>+VAT</small>', pk_sum_link: 'Details',
      pk_v_eyebrow: 'Why the SME package', pk_v_title: 'Enterprise quality, SME scale',
      pk_v_sub: 'We packaged the sustainability methodology of large companies to fit the budget and pace of SMEs.',
      pk_v1t: 'Fixed price', pk_v1p: 'Scope is defined upfront — no open-ended consulting invoices.',
      pk_v2t: 'Fast results', pk_v2p: 'Within 12 weeks you hold an audit-ready report and a roadmap.',
      pk_v3t: 'Regulation-ready', pk_v3p: 'Prepared for supply chain and customer demands and upcoming reporting obligations.',
      pk_v4t: 'Incentive alignment', pk_v4p: 'A checklist for eligibility to KOSGEB and other support programs is included.',
      pk_m_eyebrow: 'What\u2019s included', pk_m_title: 'What\u2019s in the package?',
      pk_m_sub: 'Six modules — one end-to-end delivery, from diagnosis to training your team.',
      pk_mod1t: 'Carbon inventory', pk_mod1p: 'Scope 1 and 2 GHG calculation, core Scope 3 items.',
      pk_mod2t: 'ESG pre-assessment', pk_mod2p: 'Environmental, social and governance maturity score and benchmark.',
      pk_mod3t: 'Reduction roadmap', pk_mod3p: 'A concrete action plan ranked by impact/cost priority.',
      pk_mod4t: 'Team training', pk_mod4p: 'A half-day, role-specific sustainability awareness session.',
      pk_mod5t: 'Executive report', pk_mod5p: 'A summary for decision-makers and an audit-ready technical annex.',
      pk_mod6t: 'Incentive checklist', pk_mod6p: 'Preparation and checklist for eligible support and grant programs.',
      pk_t_eyebrow: 'Timeline', pk_t_title: 'Core work 12 weeks, advisory 12 months',
      pk_t_sub: 'The core work is completed in 12 weeks across four phases. The advisory engagement runs for 12 months — with weekly review and revision meetings, we keep your roadmap alive.',
      pk_eng_k1: 'Core work', pk_eng_v1: '12 weeks', pk_eng_d1: 'Four phases, clear deliverables',
      pk_eng_k2: 'Advisory', pk_eng_v2: '12 months', pk_eng_d2: 'End-to-end guidance and support',
      pk_eng_k3: 'Cadence', pk_eng_v3: 'Weekly', pk_eng_d3: 'Review & revision meeting',
      pk_ph1t: 'Kick-off', pk_ph1p: 'Introduction, scope clarification and a data collection plan.', pk_ph1a: 'Kick-off meeting', pk_ph1b: 'Data request list',
      pk_ph2t: 'Measure', pk_ph2p: 'Calculating the carbon inventory and ESG indicators.', pk_ph2a: 'GHG calculation', pk_ph2b: 'ESG score set',
      pk_ph3t: 'Analyze', pk_ph3p: 'Interpreting results and building the reduction roadmap.', pk_ph3a: 'Prioritization', pk_ph3b: 'Scenario & target',
      pk_ph4t: 'Deliver', pk_ph4p: 'Report presentation, team training and next steps.', pk_ph4a: 'Executive presentation', pk_ph4b: 'Training session',
      pk_pr_eyebrow: 'Packages', pk_pr_title: 'Three packages to match your scale',
      pk_pr_sub: 'From a single-site SME to multi-location groups — same methodology, different scope.',
      pk_pop: 'Most chosen', pk_tier_cta: 'Get a quote',
      pk_tier1s: 'Single location', pk_tier1n: 'Essential', pk_tier1d: 'For single-site SMEs taking the first step.',
      pk_t1f1: 'Carbon Scope 1–2 inventory', pk_t1f2: 'ESG pre-assessment', pk_t1f3: 'Roadmap summary', pk_t1f4: 'Digital executive report', pk_t1f5: 'Team training', pk_t1f6: 'Follow-up period',
      pk_tier2s: 'Multi-location', pk_tier2n: 'Growth', pk_tier2d: 'For growing SMEs facing customer and regulatory demand.',
      pk_t2f1: 'Scope 1–2 + priority Scope 3', pk_t2f2: 'Full ESG assessment & score', pk_t2f3: 'Detailed reduction roadmap', pk_t2f4: 'Half-day team training', pk_t2f5: 'Incentive compliance checklist', pk_t2f6: '3-month email follow-up',
      pk_tier3s: 'Group / holding', pk_tier3n: 'Enterprise+', pk_tier3d: 'For multi-company structures with advanced reporting needs.',
      pk_t3f1: 'The entire Growth package', pk_t3f2: 'Supply chain analysis', pk_t3f3: 'CSRD / GRI reporting readiness', pk_t3f4: 'Quarterly monitoring dashboard', pk_t3f5: 'Dedicated executive workshops', pk_t3f6: '12-month advisory support',
      pk_f_eyebrow: 'FAQ', pk_f_title: 'Questions on your mind',
      pk_q1: 'How long does the package take?', pk_a1: 'For a typical SME the process runs 12 weeks, from kick-off to the final presentation. This can be shorter or longer depending on your data readiness and number of locations.',
      pk_q2: 'What data do we need to provide?', pk_a2: 'Usually energy and fuel bills, production/operation volumes, vehicle fleet and waste data are enough. At the start we send you a clear data request list.',
      pk_q3: 'Is the report fit for audit and customer demands?', pk_a3: 'Yes. Calculations are structured per the GHG Protocol and ISO 14064 methodology, ready for third-party verification.',
      pk_q4: 'Can we benefit from government incentives?', pk_a4: 'The package includes a checklist assessing your eligibility for KOSGEB and related support programs. We also guide you through the application process.',
      pk_q5: 'Can we get support after the package?', pk_a5: 'Yes. The Growth and Enterprise+ packages include follow-up periods; we also offer separate ongoing support packages for annual monitoring and reporting.',
      pk_cta_t: 'Let\u2019s choose the right package for your SME together.',
      pk_cta_p: 'In a short call we\u2019ll discuss your scale and goals, then send you the most suitable package and a clear quote within 2 business days.',
      pk_cta_b1: 'Request a quote', pk_cta_b2: 'All services',
      pk_sc_eyebrow: 'Detailed scope', pk_sc_title: 'Scope of work',
      pk_sc_sub: 'One standard package, six workstreams. Each workstream ends with clear deliverables — what we do, how, and to which standard is defined upfront.',
      pk_sc_deliver: 'Deliverable',
      pk_sc_a_t: 'Carbon footprint & inventory', pk_sc_a_d: 'GHG inventory report (Excel + PDF)',
      pk_sc_a_1: 'Setting the base year and organizational boundaries', pk_sc_a_2: 'Scope 1: fuel, generators, vehicle fleet, refrigerant leaks', pk_sc_a_3: 'Scope 2: purchased electricity, heating and cooling', pk_sc_a_4: 'Scope 3 (priority): purchased goods/services, waste, business travel, logistics', pk_sc_a_5: 'Emission factors and GHG Protocol / ISO 14064 methodology', pk_sc_a_6: 'Data quality control and uncertainty assessment',
      pk_sc_b_t: 'ESG assessment & maturity', pk_sc_b_d: 'ESG scorecard and assessment report',
      pk_sc_b_1: 'Environmental (E), Social (S), Governance (G) indicator scan', pk_sc_b_2: 'Double materiality and priority topic analysis', pk_sc_b_3: 'Gap analysis against regulation and customer demands', pk_sc_b_4: 'Sector benchmarking', pk_sc_b_5: 'Policy and governance structure assessment',
      pk_sc_c_t: 'Reduction roadmap', pk_sc_c_d: 'Prioritized action plan',
      pk_sc_c_1: 'Identifying and quantifying reduction opportunities', pk_sc_c_2: 'Impact/cost prioritization (marginal abatement cost curve)', pk_sc_c_3: 'Energy efficiency and renewable energy recommendations', pk_sc_c_4: 'Short, medium and long-term target setting', pk_sc_c_5: 'Net-zero pathway draft',
      pk_sc_d_t: 'Supply chain & reporting readiness', pk_sc_d_d: 'Reporting readiness file',
      pk_sc_d_1: 'Mapping critical suppliers', pk_sc_d_2: 'CSRD / GRI / TSRS requirement mapping', pk_sc_d_3: 'Data collection process and infrastructure proposal', pk_sc_d_4: 'Disclosure and verification roadmap',
      pk_sc_e_t: 'Training & corporate capacity', pk_sc_e_d: 'Training materials and certificate of attendance',
      pk_sc_e_1: 'Executive awareness session (half-day)', pk_sc_e_2: 'Technical team hands-on workshop', pk_sc_e_3: 'Sustainability handbook and templates', pk_sc_e_4: 'Role-based responsibility matrix',
      pk_sc_f_t: 'Monitoring & ongoing advisory', pk_sc_f_d: 'Weekly meetings + 12-month advisory',
      pk_sc_f_1: 'Weekly review and revision meetings', pk_sc_f_2: 'Monthly progress report and target tracking', pk_sc_f_3: 'Quarterly monitoring dashboard update', pk_sc_f_4: 'Email and call support throughout the 12 months',
      pk_sc_foot: '<b>One package, full scope.</b> We scale the scope with you based on your number of locations and sector, and give you a clear quote.', pk_sc_foot_cta: 'Get a quote'
    }
  };

  let lang = localStorage.getItem('esglab_lang') || 'tr';

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    const d = DICT[l];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const v = d[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      const v = d[el.getAttribute('data-i18n-ph')];
      if (v != null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('#lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === l);
    });
    localStorage.setItem('esglab_lang', l);
    window.dispatchEvent(new CustomEvent('esglab:lang', { detail: l }));
    // refresh counters that already ran
    document.querySelectorAll('.count[data-done]').forEach(function (c) {
      c.textContent = fmt(+c.getAttribute('data-to'));
    });
  }

  function fmt(n) {
    return n >= 1000 ? n.toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-US') : String(n);
  }

  /* ---------------- Lang toggle ---------------- */
  document.getElementById('lang').addEventListener('click', function (e) {
    const b = e.target.closest('button');
    if (b) applyLang(b.getAttribute('data-lang'));
  });

  /* ---------------- Nav scrolled ---------------- */
  const nav = document.getElementById('nav');
  const onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile menu (anchor scroll) ---------------- */
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) menuBtn.addEventListener('click', function () {
    const target = document.getElementById('services') || document.querySelector('main section');
    if (target) window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
  });

  /* ---------------- Counters ---------------- */
  function runCounter(el) {
    const to = +el.getAttribute('data-to');
    const dur = 1400, t0 = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(to * e));
      if (p < 1) requestAnimationFrame(tick);
      else { el.textContent = fmt(to); el.setAttribute('data-done', '1'); }
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- Hero line draw ---------------- */
  let heroDone = false;
  function animateHero() {
    if (heroDone) return; heroDone = true;
    const line = document.getElementById('heroLine');
    const area = document.getElementById('heroArea');
    if (line) {
      const len = line.getTotalLength();
      line.style.strokeDasharray = len;
      line.style.strokeDashoffset = len;
      line.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.4,.7,.2,1)';
      requestAnimationFrame(function () { line.style.strokeDashoffset = '0'; });
      // dots
      const pts = line.getAttribute('points').trim().split(/\s+/);
      const g = document.getElementById('heroDots');
      pts.forEach(function (pt, i) {
        const xy = pt.split(',');
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', xy[0]); c.setAttribute('cy', xy[1]); c.setAttribute('r', '3.2');
        c.setAttribute('fill', 'var(--surface)'); c.setAttribute('stroke', 'var(--accent)'); c.setAttribute('stroke-width', '2');
        c.style.opacity = '0'; c.style.transition = 'opacity .3s ease ' + (0.5 + i * 0.13) + 's';
        g.appendChild(c);
        requestAnimationFrame(function () { c.style.opacity = '1'; });
      });
    }
    if (area) { area.style.transition = 'opacity 1.2s ease .5s'; requestAnimationFrame(function () { area.style.opacity = '1'; }); }
  }

  /* ---------------- Bars / gauge / process fill ---------------- */
  function fillBars(scope) {
    (scope || document).querySelectorAll('.bar[data-w]').forEach(function (b) {
      b.style.width = b.getAttribute('data-w') + '%';
    });
  }
  function animateGauge() {
    const g = document.getElementById('gauge');
    if (g && !g.getAttribute('data-done')) {
      const score = 78, circ = 314;
      g.style.transition = 'stroke-dashoffset 1.3s cubic-bezier(.4,.7,.2,1)';
      requestAnimationFrame(function () { g.style.strokeDashoffset = circ * (1 - score / 100); });
      g.setAttribute('data-done', '1');
    }
  }

  /* ---------------- Reveal observer ---------------- */
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      if (en.target.id === 'stats') en.target.querySelectorAll('.count').forEach(runCounter);
      if (en.target.id === 'hero') animateHero();
      if (en.target.classList.contains('proc')) {
        const f = document.getElementById('procFill'); if (f) f.style.width = '100%';
      }
      if (en.target.id === 'method') { fillBars(document.querySelector('[data-pane="carbon"]')); }
      io.unobserve(en.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  ['stats', 'hero', 'method'].forEach(function (id) { const el = document.getElementById(id); if (el) io.observe(el); });
  const proc = document.querySelector('.proc'); if (proc) io.observe(proc);

  /* ---------------- Methodology tabs ---------------- */
  const tabs = document.getElementById('tabs');
  if (tabs) tabs.addEventListener('click', function (e) {
    const b = e.target.closest('button'); if (!b) return;
    const name = b.getAttribute('data-tab');
    tabs.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
    document.querySelectorAll('#viz .pane').forEach(function (p) {
      const on = p.getAttribute('data-pane') === name;
      p.classList.toggle('on', on);
      if (on) {
        p.querySelectorAll('.bar[data-w]').forEach(function (bar) { bar.style.width = '0'; });
        requestAnimationFrame(function () { setTimeout(function () { fillBars(p); }, 40); });
        if (name === 'score') { document.getElementById('gauge').removeAttribute('data-done'); document.getElementById('gauge').style.strokeDashoffset = '314'; setTimeout(animateGauge, 60); }
      }
    });
  });

  /* ---------------- Init ---------------- */
  applyLang(lang);
})();
