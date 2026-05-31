/* ===================================================================
   ESG LAB — Hero ürün vitrini etkileşimi
   Otomatik dönen sekmeler · yazan asistan · TR/EN senkron
   =================================================================== */
(function () {
  'use strict';

  const DATA = {
    tr: {
      chrome: { search: 'Ara…', ask: 'Sor', signin: 'Giriş', tabs: ['Panel', 'Veri', 'Yardım', 'Changelog'],
        asst: 'ESG LAB Asistanı', inputPh: 'Karbon ayak izimi nasıl hesaplarım?', tag: 'Bağlamınıza göre', send: 'Gönder' },
      pills: ['Karbonu ölç', 'ESG skoru', 'Raporla', 'Canlı izleme'],
      side: [
        { g: 'Karbon', items: [{ id: 'env', t: 'Envanter' }, { id: 'fac', t: 'Emisyon faktörleri' }] },
        { g: 'ESG', items: [{ id: 'score', t: 'Olgunluk skoru' }, { id: 'bench', t: 'Kıyaslama' }] },
        { g: 'Raporlama', items: [{ id: 'rep', t: 'Raporlar' }, { id: 'std', t: 'Standartlar' }] },
        { g: 'İzleme', items: [{ id: 'mon', t: 'Canlı pano' }, { id: 'alert', t: 'Uyarılar' }] }
      ],
      tabs: [
        { side: 'env', eyebrow: 'Karbon', title: 'Karbon envanterinize hoş geldiniz',
          desc: 'Tüm tesis ve faaliyetlerin sera gazı emisyonlarını tek yerde toplayın.',
          cards: [{ t: 'Kapsam 1·2·3', s: 'Doğrudan ve dolaylı emisyonlar' }, { t: 'Emisyon faktörleri', s: 'GHG Protocol uyumlu' }, { t: 'Baz yıl', s: 'Karşılaştırma referansı' }, { t: 'Hedefler', s: 'SBTi & net-sıfır' }],
          q: 'Karbon ayak izimi nasıl hesaplarım?', a: 'Kapsam 1, 2 ve 3 verilerinizi girin; ESG LAB bunları |GHG Protocol| faktörleriyle otomatik hesaplar.' },
        { side: 'score', eyebrow: 'ESG', title: 'ESG olgunluk skorunuz',
          desc: 'Çevresel, sosyal ve yönetişim performansınızı tek bir skorda görün.',
          cards: [{ t: 'Çevresel (E)', s: '82 / 100' }, { t: 'Sosyal (S)', s: '74 / 100' }, { t: 'Yönetişim (G)', s: '79 / 100' }, { t: 'Kıyaslama', s: 'Sektör ortalaması' }],
          q: 'ESG skorum sektörde nerede?', a: 'Skorunuz |78/100| — sektör ortalamasının %12 üzerinde. Detaylı kıyaslamayı açıyorum.' },
        { side: 'rep', eyebrow: 'Raporlama', title: 'Standartlara uyumlu raporlar',
          desc: 'GRI, CSRD/ESRS ve TSRS gereksinimlerine eşlenmiş raporları tek yerde üretin.',
          cards: [{ t: 'GRI', s: 'Genel açıklamalar' }, { t: 'CSRD / ESRS', s: 'AB uyum standardı' }, { t: 'TSRS', s: 'Yerel raporlama' }, { t: 'Dışa aktar', s: 'PDF + XBRL' }],
          q: 'CSRD raporumu hazırlayabilir misin?', a: 'Verileriniz |ESRS| gereksinimlerine eşlendi. Taslak raporu oluşturuyorum.' },
        { side: 'mon', eyebrow: 'İzleme', title: 'Canlı izleme panosu',
          desc: 'Hedeflerinize doğru ilerlemeyi gerçek zamanlı olarak takip edin.',
          cards: [{ t: 'Eğilim', s: 'Aylık emisyon' }, { t: 'Hedef sapması', s: '−6% sapma' }, { t: 'Uyarılar', s: 'Eşik aşımları' }, { t: 'Aylık özet', s: 'Otomatik rapor' }],
          q: 'Bu çeyrek hedefe ulaşır mıyım?', a: 'Mevcut hızla yıl sonu hedefinin |%94|’üne ulaşıyorsunuz. İki öneri hazırladım.' }
      ]
    },
    en: {
      chrome: { search: 'Search…', ask: 'Ask', signin: 'Sign in', tabs: ['Dashboard', 'Data', 'Help', 'Changelog'],
        asst: 'ESG LAB Assistant', inputPh: 'How do I calculate my carbon footprint?', tag: 'Based on your context', send: 'Send' },
      pills: ['Measure carbon', 'ESG score', 'Report', 'Live monitoring'],
      side: [
        { g: 'Carbon', items: [{ id: 'env', t: 'Inventory' }, { id: 'fac', t: 'Emission factors' }] },
        { g: 'ESG', items: [{ id: 'score', t: 'Maturity score' }, { id: 'bench', t: 'Benchmark' }] },
        { g: 'Reporting', items: [{ id: 'rep', t: 'Reports' }, { id: 'std', t: 'Standards' }] },
        { g: 'Monitoring', items: [{ id: 'mon', t: 'Live board' }, { id: 'alert', t: 'Alerts' }] }
      ],
      tabs: [
        { side: 'env', eyebrow: 'Carbon', title: 'Welcome to your carbon inventory',
          desc: 'Consolidate greenhouse gas emissions from all sites and activities in one place.',
          cards: [{ t: 'Scope 1·2·3', s: 'Direct and indirect emissions' }, { t: 'Emission factors', s: 'GHG Protocol aligned' }, { t: 'Base year', s: 'Comparison reference' }, { t: 'Targets', s: 'SBTi & net-zero' }],
          q: 'How do I calculate my carbon footprint?', a: 'Enter your Scope 1, 2 and 3 data; ESG LAB computes it automatically with |GHG Protocol| factors.' },
        { side: 'score', eyebrow: 'ESG', title: 'Your ESG maturity score',
          desc: 'See your environmental, social and governance performance in a single score.',
          cards: [{ t: 'Environmental (E)', s: '82 / 100' }, { t: 'Social (S)', s: '74 / 100' }, { t: 'Governance (G)', s: '79 / 100' }, { t: 'Benchmark', s: 'Sector average' }],
          q: 'Where does my ESG score stand?', a: 'Your score is |78/100| — 12% above the sector average. Opening the detailed benchmark.' },
        { side: 'rep', eyebrow: 'Reporting', title: 'Standards-compliant reports',
          desc: 'Generate reports mapped to GRI, CSRD/ESRS and TSRS requirements in one place.',
          cards: [{ t: 'GRI', s: 'General disclosures' }, { t: 'CSRD / ESRS', s: 'EU compliance' }, { t: 'TSRS', s: 'Local reporting' }, { t: 'Export', s: 'PDF + XBRL' }],
          q: 'Can you prepare my CSRD report?', a: 'Your data is mapped to |ESRS| requirements. Generating the draft report.' },
        { side: 'mon', eyebrow: 'Monitoring', title: 'Live monitoring dashboard',
          desc: 'Track progress toward your targets in real time.',
          cards: [{ t: 'Trend', s: 'Monthly emissions' }, { t: 'Target gap', s: '−6% variance' }, { t: 'Alerts', s: 'Threshold breaches' }, { t: 'Monthly digest', s: 'Automated report' }],
          q: 'Will I hit this quarter’s target?', a: 'At the current pace you reach |94%| of the year-end target. I’ve prepared two suggestions.' }
      ]
    }
  };

  const ICONS = [
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12a9 9 0 1 0 9-9"/><path d="M12 7v5l3 2"/></svg>',
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V9M10 20V4M16 20v-7M22 20H2"/></svg>',
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M2 16l10 5 10-5"/></svg>',
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>'
  ];

  const root = document.getElementById('showcase');
  if (!root) return;

  const $ = function (s) { return root.querySelector(s); };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lang = document.documentElement.lang === 'en' ? 'en' : 'tr';
  let cur = 0;
  let typeTimer = null;
  let cycleTimer = null;

  /* ---- static chrome ---- */
  function renderStatic() {
    const d = DATA[lang], c = d.chrome;
    $('#shSearch').textContent = c.search;
    $('#shAsk').textContent = c.ask;
    $('#shSignin').textContent = c.signin;
    $('#shAsstTitle').textContent = c.asst;
    $('#shInputPh').textContent = c.inputPh;
    $('#shInputTag').textContent = c.tag;
    $('#shSend').textContent = c.send;

    $('#shTabs').innerHTML = c.tabs.map(function (t, i) {
      return '<a class="' + (i === 0 ? 'on' : '') + '">' + t + '</a>';
    }).join('');

    $('#shPills').innerHTML = d.pills.map(function (p, i) {
      return '<button class="sh-pill' + (i === cur ? ' on' : '') + '" data-i="' + i + '">' + p + '</button>';
    }).join('');

    $('#shSide').innerHTML = d.side.map(function (grp) {
      return '<div class="sh-grp"><div class="gt">' + grp.g + '</div>' +
        grp.items.map(function (it) {
          return '<div class="sh-item" data-id="' + it.id + '"><span class="si"></span>' + it.t + '</div>';
        }).join('') + '</div>';
    }).join('');
  }

  /* ---- type answer ---- */
  function parseSegs(str) {
    return str.split('|').map(function (p, i) { return { text: p, link: i % 2 === 1 }; });
  }
  function typeAnswer(str, instant) {
    clearTimeout(typeTimer);
    const el = $('#shA');
    el.innerHTML = '';
    const segs = parseSegs(str);
    if (instant || reduce) {
      el.innerHTML = segs.map(function (s) { return s.link ? '<span class="lnk">' + s.text + '</span>' : s.text; }).join('');
      return;
    }
    const chars = [];
    segs.forEach(function (s) { for (const ch of s.text) chars.push({ ch: ch, link: s.link }); });
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    el.appendChild(cursor);
    let idx = 0, span = null, linkState = null;
    (function tick() {
      if (idx >= chars.length) { cursor.remove(); return; }
      const c = chars[idx++];
      if (span === null || linkState !== c.link) {
        span = document.createElement('span');
        if (c.link) span.className = 'lnk';
        el.insertBefore(span, cursor);
        linkState = c.link;
      }
      span.textContent += c.ch;
      typeTimer = setTimeout(tick, 15 + Math.random() * 24);
    })();
  }

  /* ---- render active tab ---- */
  function renderTab(i, type) {
    cur = i;
    const d = DATA[lang], t = d.tabs[i];
    root.querySelectorAll('.sh-pill').forEach(function (p) { p.classList.toggle('on', +p.dataset.i === i); });
    root.querySelectorAll('.sh-item').forEach(function (it) { it.classList.toggle('on', it.dataset.id === t.side); });
    $('#shEyebrow').textContent = t.eyebrow;
    $('#shTitle').textContent = t.title;
    $('#shDesc').textContent = t.desc;
    $('#shCards').innerHTML = t.cards.map(function (c, k) {
      return '<div class="sh-card"><span class="conn-dot"></span><span class="ci">' + ICONS[k] + '</span>' +
        '<div class="ct">' + c.t + '</div><div class="cs">' + c.s + '</div></div>';
    }).join('');
    $('#shQ').textContent = t.q;
    typeAnswer(t.a, !type);
  }

  /* ---- cycle ---- */
  function startCycle() {
    if (reduce) return;
    stopCycle();
    cycleTimer = setInterval(function () { renderTab((cur + 1) % 4, true); }, 4400);
  }
  function stopCycle() { clearInterval(cycleTimer); cycleTimer = null; }

  /* ---- events ---- */
  $('#shPills').addEventListener('click', function (e) {
    const b = e.target.closest('.sh-pill'); if (!b) return;
    renderTab(+b.dataset.i, true); startCycle();
  });
  const win = $('.sh-window');
  win.addEventListener('mouseenter', stopCycle);
  win.addEventListener('mouseleave', startCycle);

  window.addEventListener('esglab:lang', function (e) {
    lang = e.detail === 'en' ? 'en' : 'tr';
    renderStatic();
    renderTab(cur, false);
  });

  /* ---- init ---- */
  renderStatic();
  renderTab(0, false);

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { if (!reduce) renderTab(cur, true); startCycle(); }
      else stopCycle();
    });
  }, { threshold: 0.25 });
  io.observe(root);
})();
