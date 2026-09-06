(function () {
  const DATA_URL = '/stem-resources.json';

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function render(data) {
    const list = document.getElementById('stemList');
    const countEl = document.getElementById('stemCount');
    if (!list || !data || !Array.isArray(data.categories)) return;

    const itemCount = data.categories.reduce((n, c) => n + (c.items || []).length, 0);
    if (countEl) countEl.textContent = '(' + itemCount + ' PARTS · ' + data.categories.length + ' BAYS)';

    const note = document.getElementById('stemNote');
    if (note && data.note) note.textContent = data.note;

    list.innerHTML = '';
    data.categories.forEach((cat) => {
      const wrap = el('details', 'stem-bay');
      wrap.open = false;
      const sum = document.createElement('summary');
      sum.className = 'stem-bay-sum';
      const left = el('span', 'stem-bay-name', cat.name);
      const right = el('span', 'stem-bay-n', String((cat.items || []).length));
      sum.appendChild(left);
      sum.appendChild(right);
      wrap.appendChild(sum);

      if (cat.blurb) wrap.appendChild(el('p', 'stem-bay-blurb', cat.blurb));

      (cat.items || []).forEach((item) => {
        const row = el('div', 'stem-row');
        const top = el('div', 'stem-row-top');
        top.appendChild(el('span', 'fname', item.name));
        const lvl = el('span', 'stem-lvl ' + (item.level === 'shop' ? 'shop' : 'beginner'), (item.level || 'beginner').toUpperCase());
        top.appendChild(lvl);
        row.appendChild(top);
        if (item.why) row.appendChild(el('div', 'stem-why', item.why));
        if (item.tip) row.appendChild(el('div', 'stem-tip', item.tip));
        list ? wrap.appendChild(row) : null;
      });

      list.appendChild(wrap);
    });
  }

  async function load() {
    const list = document.getElementById('stemList');
    try {
      const r = await fetch(DATA_URL, { cache: 'no-store' });
      if (!r.ok) throw new Error('stem');
      const data = await r.json();
      render(data);
    } catch (e) {
      if (list) list.innerHTML = '<div class="fleet-empty">Build lab list offline — ask the crew</div>';
    }
  }

  function bind() {
    const btn = document.getElementById('stemBtn');
    const list = document.getElementById('stemList');
    const panel = document.getElementById('stemPanel');
    if (btn && list) {
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        list.hidden = open;
      });
    }
    document.querySelectorAll('[data-open-stem]').forEach((b) => {
      b.addEventListener('click', () => {
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (btn && list) {
          btn.setAttribute('aria-expanded', 'true');
          list.hidden = false;
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { bind(); load(); });
  } else {
    bind();
    load();
  }
})();
