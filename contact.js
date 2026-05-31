/* ===================================================================
   ESG LAB — İletişim formu (Web3Forms ile otomatik gönderim)
   Mesajlar doğrudan bilgi@esgakademi.net adresine iletilir.
   =================================================================== */
(function () {
  'use strict';

  var FORM_ENDPOINT = 'https://api.web3forms.com/submit';
  var ACCESS_KEY = '485f0a2b-4374-47d5-8cb9-94d2806abeee';
  var TO_EMAIL = 'bilgi@esgakademi.net';

  var form = document.getElementById('contactForm');
  if (!form) return;

  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'tr'; }

  var MSG = {
    tr: {
      req: 'Bu alan zorunlu', email: 'Geçerli bir e-posta girin',
      sending: 'Gönderiliyor…', send: 'Mesajı gönder',
      sent_t: 'Mesajınız bize ulaştı!',
      sent_p: 'Teşekkürler — talebinizi aldık. En geç 2 iş günü içinde dönüş yapıyoruz.',
      fail_t: 'Bir sorun oluştu',
      fail_p: 'Mesaj gönderilemedi. Lütfen tekrar deneyin veya bize doğrudan e-posta yazın.',
      again: 'Yeni mesaj'
    },
    en: {
      req: 'This field is required', email: 'Enter a valid email',
      sending: 'Sending…', send: 'Send message',
      sent_t: 'Your message was sent!',
      sent_p: 'Thank you — we received your request and reply within 2 business days.',
      fail_t: 'Something went wrong',
      fail_p: 'The message could not be sent. Please try again or email us directly.',
      again: 'New message'
    }
  };
  function t(k) { return MSG[lang()][k]; }

  function setErr(field, msg) { field.classList.add('invalid'); var e = field.querySelector('.err'); if (e) e.textContent = msg; }
  function clearErr(field) { field.classList.remove('invalid'); }

  function validate() {
    var ok = true;
    form.querySelectorAll('.field[data-required]').forEach(function (field) {
      var inp = field.querySelector('input, select, textarea');
      clearErr(field);
      if (!inp.value.trim()) { setErr(field, t('req')); ok = false; return; }
      if (inp.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim())) { setErr(field, t('email')); ok = false; }
    });
    return ok;
  }

  function val(name) { var el = form.elements[name]; return el ? el.value.trim() : ''; }

  function showState(kind) {
    form.classList.add('sent');
    var s = document.getElementById('cfSuccess');
    s.querySelector('.s-t').textContent = t(kind === 'fail' ? 'fail_t' : 'sent_t');
    s.querySelector('.s-p').textContent = t(kind === 'fail' ? 'fail_p' : 'sent_p');
    s.querySelector('.s-again').textContent = t('again');
    s.classList.toggle('is-fail', kind === 'fail');
    s.classList.add('on');
  }

  var submitBtn = form.querySelector('button[type="submit"] span:first-child');

  form.addEventListener('input', function (e) {
    var field = e.target.closest('.field');
    if (field && field.classList.contains('invalid')) clearErr(field);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) {
      var first = form.querySelector('.field.invalid input, .field.invalid select, .field.invalid textarea');
      if (first) first.focus();
      return;
    }

    var data = new FormData(form);
    data.append('access_key', ACCESS_KEY);
    data.append('subject', 'Web sitesi iletişim formu — ' + (val('name') || ''));
    data.append('from_name', 'ESG LAB Web');

    if (submitBtn) submitBtn.textContent = t('sending');
    var btnEl = form.querySelector('button[type="submit"]');
    if (btnEl) btnEl.disabled = true;

    fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.success) showState('ok');
        else showState('fail');
      })
      .catch(function () { showState('fail'); })
      .finally(function () {
        if (submitBtn) submitBtn.textContent = t('send');
        if (btnEl) btnEl.disabled = false;
      });
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('#cfAgain')) {
      form.reset();
      form.classList.remove('sent');
      var s = document.getElementById('cfSuccess');
      s.classList.remove('on'); s.classList.remove('is-fail');
      form.querySelectorAll('.field.invalid').forEach(clearErr);
    }
  });
})();
