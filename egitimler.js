/* ===================================================================
   ESG LAB — Online Eğitim: kategori filtreleme, arama, detay modalı
   =================================================================== */
(function () {
  'use strict';

  var CATS = {
    GEN: { tr: 'Genel', en: 'General', long_tr: 'Sürdürülebilirliğe giriş ve bütüncül programlar', long_en: 'Introductory & holistic sustainability programs' },
    E:   { tr: 'Çevresel', en: 'Environmental', long_tr: 'Karbon, enerji, su ve emisyon yönetimi', long_en: 'Carbon, energy, water and emissions' },
    DE:  { tr: 'Döngüsel Ekonomi', en: 'Circular Economy', long_tr: 'ISO 59000 serisi ve döngüsellik performansı', long_en: 'ISO 59000 series and circularity performance' },
    S:   { tr: 'Sosyal', en: 'Social', long_tr: 'İnsan, toplum, çalışan ve paydaş', long_en: 'People, society, employees and stakeholders' },
    G:   { tr: 'Yönetişim', en: 'Governance', long_tr: 'Denetim, tedarik ve yönetim sistemleri', long_en: 'Audit, procurement and management systems' }
  };
  var ORDER = ['GEN', 'E', 'DE', 'S', 'G'];

  var courses = window.ESG_COURSES || [];
  var lang = document.documentElement.lang === 'en' ? 'en' : 'tr';
  var activeFilter = 'ALL';
  var query = '';

  var grid = document.getElementById('eduSections');
  var empty = document.getElementById('eduEmpty');
  var filterBar = document.getElementById('eduFilters');
  var searchInput = document.getElementById('eduSearchInput');

  var T = {
    tr: { all: 'Tümü', modules: 'modül', detail: 'Detayları gör', empty: 'Aramanıza uygun eğitim bulunamadı.',
      obj: 'Eğitimin Amacı', content: 'Eğitim İçeriği', benefit: 'Faydaları', who: 'Kimler İçin', note: 'Kayıt ve tarih bilgisi için bizimle iletişime geçin.',
      cta: 'Bilgi al', search: 'Eğitim ara…' },
    en: { all: 'All', modules: 'modules', detail: 'View details', empty: 'No training matches your search.',
      obj: 'Objective', content: 'Course Content', benefit: 'Benefits', who: 'Who It\u2019s For', note: 'Contact us for enrollment and schedule.',
      cta: 'Get info', search: 'Search training…' }
  };

  function t(k) { return T[lang][k]; }

  /* ---------- filters ---------- */
  function renderFilters() {
    var counts = { ALL: courses.length };
    ORDER.forEach(function (c) { counts[c] = courses.filter(function (x) { return x.cat === c; }).length; });
    var html = '<button class="filt' + (activeFilter === 'ALL' ? ' on' : '') + '" data-f="ALL">' + t('all') + ' <span class="ct">' + counts.ALL + '</span></button>';
    ORDER.forEach(function (c) {
      html += '<button class="filt' + (activeFilter === c ? ' on' : '') + '" data-f="' + c + '" data-cat="' + c + '">' +
        '<span class="dot"></span>' + (c === 'GEN' || c === 'E' || c === 'S' || c === 'G' ? (c === 'GEN' ? CATS[c][lang] : c + ' · ' + CATS[c][lang]) : CATS[c][lang]) +
        ' <span class="ct">' + counts[c] + '</span></button>';
    });
    filterBar.innerHTML = html;
  }

  /* ---------- list ---------- */
  function matches(c) {
    if (activeFilter !== 'ALL' && c.cat !== activeFilter) return false;
    if (query) {
      var hay = (c.title + ' ' + c.code + ' ' + c.objective + ' ' + c.modules.join(' ') + ' ' + c.audience).toLowerCase();
      if (hay.indexOf(query) === -1) return false;
    }
    return true;
  }

  function cardHTML(c, idx) {
    return '<button class="course" data-cat="' + c.cat + '" data-id="' + c.id + '">' +
      '<div class="c-top"><span class="c-code">' + esc(c.code) + '</span>' +
      '<span class="c-cat"><span class="dot"></span>' + CATS[c.cat][lang] + '</span></div>' +
      '<h3>' + esc(c.title) + '</h3>' +
      '<p class="c-obj">' + esc(c.objective) + '</p>' +
      '<div class="c-foot"><span class="c-mod">' + c.modules.length + ' ' + t('modules') + '</span>' +
      '<span class="c-go">' + t('detail') + ' <span class="ar">→</span></span></div></button>';
  }

  function render() {
    var visible = courses.filter(matches);
    if (!visible.length) { grid.innerHTML = ''; empty.style.display = 'block'; empty.textContent = t('empty'); return; }
    empty.style.display = 'none';
    var html = '';
    ORDER.forEach(function (cat) {
      var list = visible.filter(function (x) { return x.cat === cat; });
      if (!list.length) return;
      html += '<section class="cat-block" data-cat="' + cat + '">' +
        '<div class="cat-head"><div class="cat-badge" data-cat="' + cat + '">' + (cat === 'GEN' ? '◆' : cat === 'DE' ? '↻' : cat) + '</div>' +
        '<div><h2>' + CATS[cat][lang] + '</h2><div class="sub">' + CATS[cat]['long_' + lang] + ' · ' + list.length + ' ' + t('modules').replace('modül', 'eğitim').replace('modules', 'courses') + '</div></div></div>' +
        '<div class="edu-grid">' + list.map(cardHTML).join('') + '</div></section>';
    });
    grid.innerHTML = html;
  }

  /* ---------- modal ---------- */
  var modalBack = document.getElementById('eduModal');
  function openModal(id) {
    var c = courses.find(function (x) { return x.id === id; });
    if (!c) return;
    var catVar = c.cat === 'E' ? 'var(--cat-e)' : c.cat === 'DE' ? 'var(--cat-de)' : c.cat === 'S' ? 'var(--cat-s)' : c.cat === 'G' ? 'var(--cat-g)' : 'var(--cat-gen)';
    var mods = c.modules.map(function (m, i) {
      return '<li><span class="mk">' + (i + 1) + '</span><span>' + esc(m) + '</span></li>';
    }).join('');
    modalBack.innerHTML =
      '<div class="modal" style="--mc:' + catVar + '" role="dialog" aria-modal="true">' +
        '<div class="modal-hd">' +
          '<div class="row"><span class="m-code">' + esc(c.code) + '</span>' +
          '<span class="m-cat"><span class="dot"></span>' + CATS[c.cat][lang] + '</span></div>' +
          '<h2>' + esc(c.title) + '</h2>' +
          '<button class="modal-close" aria-label="Kapat">✕</button>' +
        '</div>' +
        '<div class="modal-bd">' +
          '<div class="m-objective">' + esc(c.objective) + '</div>' +
          '<div class="m-sec"><div class="m-lbl"><span class="num">01</span>' + t('content') + '</div>' +
            '<ul class="m-modules">' + mods + '</ul></div>' +
          '<div class="m-two">' +
            '<div class="m-card"><h4><span class="num">02</span>' + t('benefit') + '</h4><p>' + esc(c.benefits) + '</p></div>' +
            '<div class="m-card"><h4><span class="num">03</span>' + t('who') + '</h4><p>' + esc(c.audience) + '</p></div>' +
          '</div>' +
          '<div class="modal-ft"><span class="note">' + t('note') + '</span>' +
            '<a href="mailto:bilgi@esgakademi.net?subject=' + encodeURIComponent(c.title) + '" class="btn btn-primary"><span>' + t('cta') + '</span> <span class="arrow">→</span></a>' +
          '</div>' +
        '</div>' +
      '</div>';
    modalBack.classList.add('on');
    document.documentElement.classList.add('modal-open');
  }
  function closeModal() {
    modalBack.classList.remove('on');
    document.documentElement.classList.remove('modal-open');
    modalBack.innerHTML = '';
  }

  /* ---------- events ---------- */
  filterBar.addEventListener('click', function (e) {
    var b = e.target.closest('.filt'); if (!b) return;
    activeFilter = b.getAttribute('data-f');
    renderFilters(); render();
  });
  grid.addEventListener('click', function (e) {
    var c = e.target.closest('.course'); if (!c) return;
    openModal(c.getAttribute('data-id'));
  });
  modalBack.addEventListener('click', function (e) {
    if (e.target === modalBack || e.target.closest('.modal-close')) closeModal();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  searchInput.addEventListener('input', function (e) {
    query = e.target.value.trim().toLowerCase(); render();
  });

  window.addEventListener('esglab:lang', function (e) {
    lang = e.detail === 'en' ? 'en' : 'tr';
    searchInput.placeholder = t('search');
    renderFilters(); render();
  });

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ---------- init ---------- */
  searchInput.placeholder = t('search');
  renderFilters();
  render();
})();

/* Takvim sayfasından gelen derin bağlantı: egitimler.html#c-<id> */
(function () {
  var m = (location.hash || '').match(/^#c-(.+)$/);
  if (!m) return;
  var open = function () {
    var b = document.querySelector('.course[data-id="' + m[1] + '"]');
    if (b) b.click();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(open, 120); });
  else setTimeout(open, 120);
})();
