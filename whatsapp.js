(function () {
  'use strict';

  var PHONE_DISPLAY = '+44 7700 183009';
  var PHONE_URI = 'tel:+447700183009';
  var WHATSAPP_URI = 'https://wa.me/447700183009?text=' + encodeURIComponent("Hello, I'd like to learn more about ESG LAB.");

  function icon(path) {
    return '<span class="ic" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">' + path + '</svg></span>';
  }

  function addMainContactDetails() {
    var list = document.querySelector('#contact .ca-list');
    if (!list || list.querySelector('[data-international-contact]')) return;

    var phone = document.createElement('li');
    phone.className = 'ca-item intl-contact';
    phone.setAttribute('data-international-contact', 'phone');
    phone.innerHTML = icon('<path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z"/>') +
      '<span class="tx"><span class="l">International phone</span><a href="' + PHONE_URI + '">' + PHONE_DISPLAY + '</a></span>';

    var whatsapp = document.createElement('li');
    whatsapp.className = 'ca-item intl-contact';
    whatsapp.setAttribute('data-international-contact', 'whatsapp');
    whatsapp.innerHTML = icon('<path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.2 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 2.9 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.5-1 2-.6.5-1.4.7-2.2.5-1-.2-2.2-.6-3.7-1.9-1.2-1-2.1-2.3-2.7-3.6-.6-1.2-.6-2.3-.2-3.1.3-.4.7-.6 1-.6Z"/>') +
      '<span class="tx"><span class="l">WhatsApp</span><a href="' + WHATSAPP_URI + '" target="_blank" rel="noopener noreferrer">' + PHONE_DISPLAY + '</a></span>';

    list.appendChild(phone);
    list.appendChild(whatsapp);
  }

  function addFooterDetails() {
    document.querySelectorAll('footer .foot-grid > div').forEach(function (section) {
      var heading = section.querySelector('[data-i18n="ft_h3"]');
      var list = heading && section.querySelector('ul');
      if (!list || list.querySelector('[data-international-contact]')) return;

      var phone = document.createElement('li');
      phone.className = 'intl-contact';
      phone.setAttribute('data-international-contact', 'phone');
      phone.innerHTML = '<a href="' + PHONE_URI + '">UK: ' + PHONE_DISPLAY + '</a>';

      var whatsapp = document.createElement('li');
      whatsapp.className = 'intl-contact';
      whatsapp.setAttribute('data-international-contact', 'whatsapp');
      whatsapp.innerHTML = '<a href="' + WHATSAPP_URI + '" target="_blank" rel="noopener noreferrer">WhatsApp: ' + PHONE_DISPLAY + '</a>';

      list.appendChild(phone);
      list.appendChild(whatsapp);
    });

    document.querySelectorAll('footer .foot-bot').forEach(function (footerBottom) {
      var footer = footerBottom.closest('footer');
      if ((footer && footer.querySelector('.foot-grid')) || footerBottom.querySelector('[data-international-contact]')) return;
      var contact = document.createElement('span');
      contact.className = 'footer-intl-contact intl-contact';
      contact.setAttribute('data-international-contact', 'compact');
      contact.innerHTML = '<a href="' + PHONE_URI + '">UK: ' + PHONE_DISPLAY + '</a><span aria-hidden="true">·</span><a href="' + WHATSAPP_URI + '" target="_blank" rel="noopener noreferrer">WhatsApp</a>';
      footerBottom.appendChild(contact);
    });
  }

  function addFloatingButton() {
    if (document.getElementById('whatsappContact')) return;
    var link = document.createElement('a');
    link.id = 'whatsappContact';
    link.className = 'whatsapp-float';
    link.href = WHATSAPP_URI;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Chat with ESG LAB on WhatsApp at ' + PHONE_DISPLAY);
    link.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.2 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 2.9 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.5-1 2-.6.5-1.4.7-2.2.5-1-.2-2.2-.6-3.7-1.9-1.2-1-2.1-2.3-2.7-3.6-.6-1.2-.6-2.3-.2-3.1.3-.4.7-.6 1-.6Z"/></svg><span>WhatsApp</span>';
    document.body.appendChild(link);
  }

  function init() {
    addMainContactDetails();
    addFooterDetails();
    addFloatingButton();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
