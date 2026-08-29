/* ===================================================================
   ESG LAB — Eğitim takvimi: takvim + liste görünümü, filtre, arama
   =================================================================== */
(function () {
  'use strict';

  var DATA = (window.ESG_TAKVIM || []).slice().sort(function (a, b) {
    return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
  });
  var TATIL = window.ESG_TATIL || {};

  var MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  var MSHORT = ['OCA', 'ŞUB', 'MAR', 'NİS', 'MAY', 'HAZ', 'TEM', 'AĞU', 'EYL', 'EKİ', 'KAS', 'ARA'];
  var WDAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  var WSHORT = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

  var root = document.getElementById('tk');
  var elMonths = document.getElementById('tkMonths');
  var elRows = document.getElementById('tkRows');
  var elFilters = document.getElementById('tkFilters');
  var elQ = document.getElementById('tkQ');
  var elView = document.getElementById('tkView');

  var state = { cat: 'all', q: '' };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function parts(iso) { var p = iso.split('-'); return { y: +p[0], m: +p[1] - 1, d: +p[2] }; }
  function iso(y, m, d) { return y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0'); }
  function toDate(s) { var p = parts(s); return new Date(p.y, p.m, p.d); }
  function wdOf(dt) { return (dt.getDay() + 6) % 7; }
  function money(n) { return n.toLocaleString('tr-TR') + ' ₺'; }
  /* Türkçe I/İ/ı farkını eritip arama karşılaştırmasını güvenli kılar */
  function norm(s) {
    return String(s).replace(/[İIı]/g, 'i').replace(/Ş/g, 'ş').replace(/Ğ/g, 'ğ')
      .replace(/Ü/g, 'ü').replace(/Ö/g, 'ö').replace(/Ç/g, 'ç').toLowerCase();
  }

  /* start–end aralığında wd kuralına uyan, tatil olmayan oturum günleri */
  function sessions(s) {
    var out = [], cur = toDate(s.start), last = toDate(s.end);
    while (cur <= last) {
      var key = iso(cur.getFullYear(), cur.getMonth(), cur.getDate());
      if (s.wd.indexOf(wdOf(cur)) !== -1 && !TATIL[key]) out.push(key);
      cur.setDate(cur.getDate() + 1);
    }
    return out;
  }

  function match(s) {
    if (state.cat !== 'all' && s.cat !== state.cat) return false;
    if (!state.q) return true;
    return norm(s.title + ' ' + s.code + ' ' + s.desc).indexOf(state.q) !== -1;
  }

  function rangeText(s) {
    var a = parts(s.start), b = parts(s.end);
    if (a.m === b.m) return a.d + '–' + b.d + ' ' + MONTHS[a.m] + ' ' + a.y;
    return a.d + ' ' + MONTHS[a.m] + ' – ' + b.d + ' ' + MONTHS[b.m] + ' ' + b.y;
  }

  /* ---------------- Takvim ---------------- */
  function renderCal(list) {
    var span = {}, order = [];
    /* Eylül–Aralık 2026 aylarını her durumda göster */
    DATA.forEach(function (s) {
      [s.start, s.end].forEach(function (d) {
        var p = parts(d), key = p.y + '-' + p.m;
        if (!span[key]) { span[key] = { y: p.y, m: p.m, days: {} }; order.push(key); }
      });
    });
    order.sort(function (a, b) {
      var x = a.split('-'), y = b.split('-');
      return (+x[0] * 12 + +x[1]) - (+y[0] * 12 + +y[1]);
    });

    list.forEach(function (s) {
      var p = parts(s.start), key = p.y + '-' + p.m;
      if (!span[key]) return;
      if (!span[key].days[p.d]) span[key].days[p.d] = [];
      span[key].days[p.d].push({ s: s });
    });

    elMonths.innerHTML = order.map(function (key) {
      var mo = span[key];
      var lead = wdOf(new Date(mo.y, mo.m, 1));
      var total = new Date(mo.y, mo.m + 1, 0).getDate();
      var prevTotal = new Date(mo.y, mo.m, 0).getDate();
      var count = 0;
      Object.keys(mo.days).forEach(function (d) { count += mo.days[d].length; });

      var cells = '';
      for (var i = 0; i < lead; i++) {
        cells += '<div class="tk-day out"><span class="tk-dn">' + (prevTotal - lead + i + 1) + '</span></div>';
      }
      for (var d = 1; d <= total; d++) {
        var key2 = iso(mo.y, mo.m, d);
        var col = (lead + d - 1) % 7;
        var evs = mo.days[d] || [];
        var cls = 'tk-day';
        if (col > 4) cls += ' we';
        if (TATIL[key2]) cls += ' hol';
        if (evs.length) cls += ' has';
        cells += '<div class="' + cls + '"><span class="tk-dn">' + d + '</span>' +
          (TATIL[key2] ? '<span class="tk-hol">' + esc(TATIL[key2]) + '</span>' : '') +
          evs.map(function (e) {
            return '<button class="tk-ev" data-cat="' + e.s.cat + '" data-no="' + e.s.no + '" data-go="' + esc(e.s._uid) + '" ' +
              'title="' + esc(e.s.title + ' · ' + rangeText(e.s) + ' · ' + e.s.days + ' · ' + e.s.time + ' — detay için tıklayın') + '">' +
              '<b>' + esc(e.s.code) + '</b><span class="n">' + e.s.hours + ' saat · ' + money(e.s.price) + '</span></button>';
          }).join('') + '</div>';
      }
      var trail = (7 - ((lead + total) % 7)) % 7;
      for (var t = 1; t <= trail; t++) {
        cells += '<div class="tk-day out"><span class="tk-dn">' + t + '</span></div>';
      }

      return '<div class="tk-month">' +
        '<div class="tk-mhead"><h3>' + MONTHS[mo.m] + '<small>' + mo.y + '</small></h3>' +
        '<span class="n">' + (count ? count + ' eğitim başlıyor' : '—') + '</span></div>' +
        '<div class="tk-wd">' + WSHORT.map(function (w) { return '<span>' + w + '</span>'; }).join('') + '</div>' +
        '<div class="tk-grid">' + cells + '</div></div>';
    }).join('');
  }

  /* ---------------- Liste ---------------- */
  function renderList(list) {
    if (!list.length) {
      elRows.innerHTML = '<div class="tk-empty">Bu filtreye uygun eğitim bulunamadı.</div>';
      return;
    }
    elRows.innerHTML = list.map(function (s) {
      var a = parts(s.start), b = parts(s.end);
      var same = a.m === b.m;
      return '<article class="tk-row" id="' + esc(s._uid) + '" data-cat="' + s.cat + '">' +

        '<div class="tk-date"><span class="d">' + a.d + '</span>' +
        '<span class="m">' + MSHORT[a.m] + ' ' + a.y + '</span>' +
        '<span class="w">bitiş ' + b.d + ' ' + MSHORT[b.m] + '</span></div>' +

        '<div class="tk-main"><span class="code">' + String(s.no).padStart(2, '0') + ' · ' + esc(s.code) + '</span>' +
        '<h3>' + esc(s.title) + '</h3><p>' + esc(s.desc) + '</p>' +
        '<div class="tk-tags"><span class="tk-tag">' + esc(s.days) + '</span>' +
        '<span class="tk-tag">' + esc(s.time) + '</span>' +
        '<span class="tk-tag">Canlı online</span></div></div>' +

        '<div class="tk-cell"><span class="k">Süre</span>' +
        '<span class="v">' + s.hours + ' saat' + (s._solid ? '<small>' + s._days.length + ' gün</small>' : '') + '</span></div>' +

        '<div class="tk-cell price"><span class="k">Fiyat</span>' +
        '<span class="v">' + money(s.price) + '<small>kişi · KDV hariç</small></span></div>' +

        '<div class="tk-go">' +
        (s.pay
          ? '<label class="tk-ok"><input type="checkbox" data-ok="' + esc(s._uid) + '" />' +
            '<span><a href="yasal.html#mesafeli" target="_blank" rel="noopener">Mesafeli Satış Sözleşmesi</a>, ' +
            '<a href="yasal.html#iptal" target="_blank" rel="noopener">İptal &amp; İade</a>, ' +
            '<a href="yasal.html#kvkk" target="_blank" rel="noopener">KVKK</a> ve ' +
            '<a href="yasal.html#teslimat" target="_blank" rel="noopener">Teslimat</a> koşullarını okudum, onaylıyorum.</span></label>' +
            '<a class="btn btn-primary is-off" data-pay="' + esc(s._uid) + '" href="' + esc(s.pay) + '" target="_blank" rel="noopener" aria-disabled="true">Kayıt ol ve öde</a>' +
            '<span class="tk-pay"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" stroke="currentColor" stroke-width="1.4">' +
            '<rect x="1.2" y="5" width="8.6" height="6" rx="1.4"/><path d="M3.4 5V3.3a2.1 2.1 0 0 1 4.2 0V5"/></svg>' +
            'iyzico ile güvenli ödeme</span>'
          : '<a class="btn btn-primary" href="kayit.html?e=' + s.no + '">Kayıt ol</a>' +
            '<span class="tk-pay"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" stroke="currentColor" stroke-width="1.4">' +
            '<rect x="1.2" y="5" width="8.6" height="6" rx="1.4"/><path d="M3.4 5V3.3a2.1 2.1 0 0 1 4.2 0V5"/></svg>' +
            'iyzico ile güvenli ödeme</span>') +
        (s.url
          ? '<a class="tk-detay" href="' + esc(s.url) + '">'
          : '<button class="tk-detay" type="button" data-detay="' + s.no + '">') +
        '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3">' +
        '<circle cx="6" cy="6" r="5"/><path d="M6 5.2v3.2M6 3.5v.5" stroke-linecap="round"/></svg>' +
        'Eğitim detayı' + (s.url ? '</a>' : '</button>') +
        (s.id ? '<a class="lnk" href="egitimler.html#c-' + esc(s.id) + '">Program sayfası →</a>' : '') +
        '</div></article>';
    }).join('');
  }

  function counts() {
    var c = { all: 0, E: 0, S: 0, G: 0, GEN: 0 }, gun = 0;
    DATA.forEach(function (s) { c.all++; if (c[s.cat] != null) c[s.cat]++; gun += s._days.length; });
    elFilters.querySelectorAll('.tk-chip').forEach(function (b) {
      var k = b.getAttribute('data-cat'), ct = b.querySelector('.ct');
      if (ct && c[k] != null) ct.textContent = c[k];
      if (ct && c[k] == null) b.style.display = 'none';
    });
    var a = document.getElementById('tkStatN'); if (a) a.textContent = c.all;
    var b2 = document.getElementById('tkStatG'); if (b2) b2.textContent = gun;
  }

  function render() {
    var list = DATA.filter(match);
    renderCal(list);
    renderList(list);
  }

  /* ---------------- Olaylar ---------------- */
  elFilters.addEventListener('click', function (e) {
    var b = e.target.closest('.tk-chip');
    if (!b) return;
    state.cat = b.getAttribute('data-cat');
    elFilters.querySelectorAll('.tk-chip').forEach(function (x) {
      x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
    });
    render();
  });

  /* onay kutusu işaretlenmeden ödeme butonu çalışmaz */
  elRows.addEventListener('change', function (e) {
    var cb = e.target.closest('input[data-ok]');
    if (!cb) return;
    var btn = elRows.querySelector('[data-pay="' + cb.getAttribute('data-ok') + '"]');
    if (!btn) return;
    btn.classList.toggle('is-off', !cb.checked);
    btn.setAttribute('aria-disabled', cb.checked ? 'false' : 'true');
  });
  elRows.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-pay]');
    if (btn && btn.classList.contains('is-off')) {
      e.preventDefault();
      var lbl = btn.parentNode.querySelector('.tk-ok');
      if (lbl) { lbl.classList.add('warn'); setTimeout(function () { lbl.classList.remove('warn'); }, 1600); }
    }
  });

  elQ.addEventListener('input', function () {
    state.q = norm(elQ.value.trim());
    render();
  });

  function setView(v) {
    root.setAttribute('data-view', v);
    elView.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-v') === v ? 'true' : 'false');
    });
    try { localStorage.setItem('esglab_tk_view', v); } catch (err) {}
  }
  elView.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (b) setView(b.getAttribute('data-v'));
  });

  /* ---------------- Detay penceresi ---------------- */
  var DETAY = window.ESG_DETAY || {};
  var modal = null, lastFocus = null;

  function ul(items, cls) {
    return '<ul class="' + cls + '">' + items.map(function (t) {
      return '<li>' + esc(t) + '</li>';
    }).join('') + '</ul>';
  }

  function modalHTML(s) {
    var d = DETAY[s.no] || {};
    var body = '';

    if (d.aciklama) {
      body += '<section class="tkm-sec"><h4><i>01</i>Eğitimin açıklaması</h4>' +
        '<p class="tkm-lead">' + esc(d.aciklama) + '</p></section>';
    }
    if (d.mufredat) {
      body += '<section class="tkm-sec"><h4><i>02</i>Müfredat</h4>' + ul(d.mufredat, 'tkm-num') + '</section>';
    }
    if (d.faydalar) {
      body += '<section class="tkm-sec"><h4><i>03</i>Faydaları</h4>' + ul(d.faydalar, 'tkm-tick') + '</section>';
    }
    if (d.kariyer) {
      body += '<section class="tkm-sec"><h4><i>04</i>Kariyerinize katkıları</h4>' + ul(d.kariyer, 'tkm-tick') + '</section>';
    }
    if (d.kimler) {
      body += '<section class="tkm-sec"><h4><i>05</i>Kimler için uygun</h4>' + ul(d.kimler, 'tkm-who') + '</section>';
    }
    if (d.sss) {
      body += '<section class="tkm-sec"><h4><i>06</i>Sık sorulan sorular</h4><div class="tkm-faq">' +
        d.sss.map(function (qa) {
          return '<details><summary>' + esc(qa[0]) + '</summary><p>' + esc(qa[1]) + '</p></details>';
        }).join('') + '</div></section>';
    }
    if (!body) {
      body = '<section class="tkm-sec"><p class="tkm-lead">' + esc(s.desc) + '</p></section>';
    }

    return '<div class="tkm-panel" role="dialog" aria-modal="true" aria-label="' + esc(s.title) + '" data-cat="' + s.cat + '">' +
      '<header class="tkm-head">' +
      '<div><span class="code">' + String(s.no).padStart(2, '0') + ' · ' + esc(s.code) + '</span>' +
      '<h3>' + esc(s.title) + '</h3></div>' +
      '<button class="tkm-x" type="button" data-close aria-label="Kapat">' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">' +
      '<path d="M4 4l8 8M12 4l-8 8"/></svg></button></header>' +

      '<div class="tkm-meta">' +
      '<div><span class="k">Tarih</span><span class="v">' + rangeText(s) + '</span></div>' +
      '<div><span class="k">Günler</span><span class="v">' + esc(s.days) + '</span></div>' +
      '<div><span class="k">Saat</span><span class="v">' + esc(s.time) + '</span></div>' +
      '<div><span class="k">Süre</span><span class="v">' + s.hours + ' saat</span></div>' +
      '<div><span class="k">Kontenjan</span><span class="v">' + s.seats + ' kişi</span></div>' +
      '<div><span class="k">Ücret</span><span class="v">' + money(s.price) + ' <small>+KDV</small></span></div>' +
      '</div>' +

      '<div class="tkm-body">' + body + '</div>' +

      '<footer class="tkm-foot">' +
      '<span class="tkm-note">Canlı online · kayıtlara erişim · uluslararası geçerli sertifika</span>' +
      '<a class="btn btn-primary" href="kayit.html?e=' + s.no + '">Kayıt ol</a>' +
      '</footer></div>';
  }

  function openModal(no) {
    var s = null;
    DATA.forEach(function (x) { if (x.no === +no) s = x; });
    if (!s) return;
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'tkm';
      modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.closest('[data-close]')) closeModal();
      });
      document.body.appendChild(modal);
    }
    lastFocus = document.activeElement;
    modal.innerHTML = modalHTML(s);
    document.body.style.overflow = 'hidden';
    setTimeout(function () { modal.classList.add('on'); }, 16);
    var x = modal.querySelector('.tkm-x');
    if (x) x.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('on');
    document.body.style.overflow = '';
    setTimeout(function () { if (modal) modal.innerHTML = ''; }, 220);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('on')) closeModal();
  });

  elRows.addEventListener('click', function (e) {
    var b = e.target.closest('[data-detay]');
    if (b) openModal(b.getAttribute('data-detay'));
  });

  elMonths.addEventListener('click', function (e) {
    var b = e.target.closest('.tk-ev');
    if (!b) return;
    var no = b.getAttribute('data-no');
    var rec = null;
    DATA.forEach(function (x) { if (x.no === +no) rec = x; });
    if (rec && rec.url) { window.location.href = rec.url; return; }
    if (no) { openModal(no); return; }
    setView('list');
    var row = document.getElementById(b.getAttribute('data-go'));
    if (!row) return;
    document.querySelectorAll('.tk-row.hit').forEach(function (r) { r.classList.remove('hit'); });
    row.classList.add('hit');
    window.scrollTo({ top: row.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
    setTimeout(function () { row.classList.remove('hit'); }, 2600);
  });

  /* ---------------- Başlat ---------------- */
  DATA.forEach(function (s) {
    s._uid = 'tk-' + s.no;
    s._days = sessions(s);
    /* aralıktaki her takvim gününde ders varsa "n gün" bilgisi anlamlı;
       haftalara yayılan programlarda yanıltıcı olduğu için gizlenir */
    var kapsam = Math.round((toDate(s.end) - toDate(s.start)) / 86400000) + 1;
    s._solid = kapsam === s._days.length;
  });
  counts();
  render();
  try {
    var saved = localStorage.getItem('esglab_tk_view');
    if (saved === 'list' || saved === 'cal') setView(saved);
  } catch (err) {}
})();
