/* ===================================================================
   ESG LAB — Ödeme yapılandırması
   -------------------------------------------------------------------
   endpoint : iyzico Checkout Form'u başlatan SUNUCU adresi.
              API secret key asla tarayıcıya konmaz; imzalama sunucuda
              yapılır (bkz. api/iyzico-checkout.js).
              Boş bırakılırsa sayfa "ödeme yakında" moduna düşer ve
              kayıt e-posta ile alınır.
   callback : ödeme sonrası dönülecek sayfa (sunucuya iletilir).
   kdv      : oran (0.20 = %20). Takvimdeki fiyatlar KDV hariçtir.
   =================================================================== */
window.ESG_ODEME = {
  endpoint: '/api/iyzico-checkout', // Railway'deki server.js bu ucu karşılar
  callback: 'odeme-sonuc.html',
  kdv: 0.20,
  currency: 'TRY',
  mail: 'bilgi@esgakademi.net',
  tel: '+90 533 955 28 84'
};
