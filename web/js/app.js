(function () {
  'use strict';

  const Q = window.QUIZ_DATA || {};
  const G = window.GLOSSARY_DATA || [];
  const A = window.ASSESSMENT_DATA || [];

  /* ============================================================
     1. HELPERS
     ============================================================ */

  function ensureOverlay(id) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.className = 'overlay';
      document.body.appendChild(el);
    }
    return el;
  }

  function showOverlay(el) {
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function hideOverlay(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
    if (!document.querySelectorAll('.overlay.open, .fullscreen-overlay.open').length) {
      document.body.style.overflow = '';
    }
  }

  function escapeHtml(s) {
    if (typeof s !== 'string') return String(s || '');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(s));
    return div.innerHTML;
  }

  function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden';
    document.body.appendChild(container);
    const colors = ['#D4A843', '#C9952A', '#8B5CF6', '#7C3AED', '#F5DFA0', '#EDE9FE'];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.style.cssText = `position:absolute;top:-10px;left:${Math.random() * 100}%;width:${6 + Math.random() * 8}px;height:${6 + Math.random() * 8}px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};animation:confettiFall ${2 + Math.random() * 3}s ease-out ${Math.random() * 2}s forwards;opacity:0`;
      container.appendChild(piece);
    }
    setTimeout(() => container.remove(), 6000);
  }

  /* ============================================================
     2. QUIZ SYSTEM
     ============================================================ */

  window.openQuiz = function (moduleNum) {
    const data = Q[moduleNum];
    if (!data) return;
    const overlay = ensureOverlay('quizOverlay');
    overlay.innerHTML = `
      <div class="overlay-content" style="max-width:600px;max-height:80vh;overflow-y:auto">
        <button class="overlay-close" onclick="closeQuiz()"><i class="fas fa-times"></i></button>
        <h2 style="margin-bottom:0.5rem"><i class="fas fa-question-circle" style="color:var(--gold-500)"></i> ${escapeHtml(data.title)}</h2>
        <div id="quizArea"></div>
      </div>`;
    showOverlay(overlay);
    renderQuiz(moduleNum, 0);
  };

  window.closeQuiz = function () {
    hideOverlay('quizOverlay');
  };

  function getQuizScore(moduleNum) {
    try {
      return JSON.parse(localStorage.getItem(`quiz-score-${moduleNum}`));
    } catch {
      return null;
    }
  }

  function saveQuizScore(moduleNum, score, total) {
    const passed = score / total >= 0.6;
    localStorage.setItem(`quiz-score-${moduleNum}`, JSON.stringify({
      score, total, passed, timestamp: Date.now()
    }));
    updateQuizBadge(moduleNum);
    if (passed) launchConfetti();
  }

  function updateQuizBadge(moduleNum) {
    const s = getQuizScore(moduleNum);
    const badge = document.querySelector(`.curriculum-module[data-module="${moduleNum}"] .cm-badge`);
    if (!badge) return;
    if (!s) {
      badge.style.background = '';
      badge.style.color = '';
      badge.textContent = '';
      return;
    }
    badge.style.background = s.passed ? 'linear-gradient(135deg,var(--gold-500),var(--gold-300))' : '#f56565';
    badge.style.color = s.passed ? 'var(--hero-from)' : '#fff';
    badge.textContent = s.passed ? 'Aprobado' : 'Repasar';
  }

  function renderQuiz(moduleNum, idx) {
    const data = Q[moduleNum];
    if (!data) return;
    const qs = data.questions;
    if (!qs || !qs.length) return;
    const area = document.getElementById('quizArea');
    if (!area) return;
    const q = qs[idx];
    const total = qs.length;
    const answers = area.dataset.answers ? JSON.parse(area.dataset.answers) : {};
    const sel = answers[idx];
    const prev = idx > 0;
    const last = idx === total - 1;
    const optsHtml = q.options.map((o, i) => {
      const checked = sel === i ? 'checked' : '';
      return `<label style="display:flex;align-items:center;gap:0.5rem;padding:0.6rem 0.8rem;margin:0.3rem 0;border-radius:var(--radius-sm);border:1px solid var(--border);cursor:pointer;transition:all var(--transition);${sel === i ? 'border-color:var(--gold-500);background:var(--badge-bg)' : ''}" onclick="selectQuizOption(${moduleNum},${idx},${i})">
        <input type="radio" name="q${idx}" value="${i}" ${checked} style="accent-color:var(--gold-500)">
        <span>${escapeHtml(o)}</span></label>`;
    }).join('');
    area.innerHTML = `
      <div style="font-size:0.75rem;color:var(--text-tertiary);margin-bottom:0.75rem">Pregunta ${idx + 1}/${total} <span style="float:right">${Object.keys(answers).length} respondidas</span></div>
      <p style="font-weight:600;font-size:1.05rem;margin-bottom:1rem">${escapeHtml(q.question)}</p>
      <div style="display:flex;flex-direction:column">${optsHtml}</div>
      <div style="display:flex;justify-content:space-between;margin-top:1.5rem;gap:0.5rem">
        ${prev ? `<button class="fs-check-btn" onclick="navigateQuiz(${moduleNum},${idx - 1})"><i class="fas fa-chevron-left"></i> Anterior</button>` : '<span></span>'}
        ${last
          ? `<button class="fs-continue-btn" onclick="submitQuiz(${moduleNum})"><i class="fas fa-check-double"></i> Finalizar</button>`
          : `<button class="fs-continue-btn" onclick="navigateQuiz(${moduleNum},${idx + 1})">Siguiente <i class="fas fa-chevron-right"></i></button>`}
      </div>`;
    area.dataset.answers = JSON.stringify(answers);
  }

  window.selectQuizOption = function (moduleNum, idx, optIdx) {
    const area = document.getElementById('quizArea');
    if (!area) return;
    const answers = area.dataset.answers ? JSON.parse(area.dataset.answers) : {};
    answers[idx] = optIdx;
    area.dataset.answers = JSON.stringify(answers);
    renderQuiz(moduleNum, idx);
  };

  window.navigateQuiz = function (moduleNum, idx) {
    renderQuiz(moduleNum, idx);
  };

  window.submitQuiz = function (moduleNum) {
    const data = Q[moduleNum];
    if (!data) return;
    const area = document.getElementById('quizArea');
    if (!area) return;
    const answers = area.dataset.answers ? JSON.parse(area.dataset.answers) : {};
    const qs = data.questions;
    let score = 0;
    const results = qs.map((q, i) => {
      const correct = answers[i] === q.correct;
      if (correct) score++;
      return { num: i + 1, question: q.question, correct: q.correct, selected: answers[i], isCorrect: correct };
    });
    const total = qs.length;
    const passed = score / total >= 0.6;
    let html = `<h3 style="margin-bottom:0.5rem">Resultados</h3>
      <div style="text-align:center;margin:1rem 0;font-size:2rem;font-weight:800;color:${passed ? 'var(--gold-500)' : '#f56565'}">
        ${score}/${total} (${Math.round(score / total * 100)}%)</div>
      <div style="text-align:center;margin-bottom:1rem">
        ${passed
          ? '<span style="display:inline-block;padding:0.3rem 1rem;border-radius:100px;background:linear-gradient(135deg,var(--gold-500),var(--gold-300));color:var(--hero-from);font-weight:700">Aprobado</span>'
          : '<span style="display:inline-block;padding:0.3rem 1rem;border-radius:100px;background:#f56565;color:#fff;font-weight:700">No aprobado</span>'}</div>`;
    html += results.map(r => `
      <div style="padding:0.5rem 0.7rem;margin:0.3rem 0;border-radius:var(--radius-sm);border:1px solid ${r.isCorrect ? 'var(--border)' : '#f56565'};background:${r.isCorrect ? 'transparent' : '#fff5f5'}">
        <div style="font-weight:600;font-size:0.85rem">${r.isCorrect ? '<i class="fas fa-check" style="color:#48bb78"></i>' : '<i class="fas fa-times" style="color:#f56565"></i>'} ${escapeHtml(r.question)}</div>
        ${r.isCorrect ? '' : `<div style="font-size:0.78rem;color:var(--text-tertiary);margin-top:0.2rem">Respuesta correcta: ${escapeHtml(qs[r.num - 1].options[r.correct])}</div>`}
      </div>`).join('');
    if (!passed) {
      html += `<button class="fs-continue-btn" onclick="openQuiz(${moduleNum})" style="margin:1rem auto 0"><i class="fas fa-redo"></i> Reintentar</button>`;
    }
    area.innerHTML = html;
    saveQuizScore(moduleNum, score, total);
    updateQuizBadge(moduleNum);
  };

  /* ============================================================
     3. NOTES SYSTEM
     ============================================================ */

  let noteTimer = null;

  window.openNotes = function () {
    let panel = document.getElementById('notesPanel');
    if (panel) {
      panel.classList.toggle('open');
      return;
    }
    panel = document.createElement('div');
    panel.id = 'notesPanel';
    panel.className = 'notes-panel';
    panel.innerHTML = `
      <div class="notes-panel-header">
        <span><i class="fas fa-sticky-note" style="color:var(--gold-500)"></i> Mis Notas</span>
        <button onclick="closeNotes()" style="background:none;border:none;color:var(--text-tertiary);cursor:pointer;font-size:1rem"><i class="fas fa-times"></i></button>
      </div>
      <textarea id="notesTextarea" placeholder="Escribe tus notas aqu\u00ED..." style="width:100%;flex:1;border:none;resize:none;padding:1rem;font-family:var(--font-body);font-size:0.85rem;background:var(--bg);color:var(--text);outline:none"></textarea>`;
    document.body.appendChild(panel);
    panel.classList.add('open');
    const fs = document.getElementById('fullscreenOverlay');
    if (fs) fs.style.right = '300px';
  };

  window.closeNotes = function () {
    const panel = document.getElementById('notesPanel');
    if (panel) panel.classList.remove('open');
    const fs = document.getElementById('fullscreenOverlay');
    if (fs) fs.style.right = '';
  };

  window.saveNote = function (moduleNum, topicNum, text) {
    try {
      localStorage.setItem(`notes-${moduleNum}-${topicNum}`, text);
    } catch {
      /* storage full */
    }
  };

  window.loadNote = function (moduleNum, topicNum) {
    try {
      return localStorage.getItem(`notes-${moduleNum}-${topicNum}`) || '';
    } catch {
      return '';
    }
  };

  window.injectNotesUI = function (moduleNum, topicNum) {
    const body = document.getElementById('fullscreenBody');
    if (!body) return;
    const existing = body.querySelector('.notes-textarea-wrapper');
    if (existing) existing.remove();
    const txt = loadNote(moduleNum, topicNum);
    const wrap = document.createElement('div');
    wrap.className = 'notes-textarea-wrapper';
    wrap.style.cssText = 'margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--border)';
    wrap.innerHTML = `
      <label style="font-size:0.75rem;font-weight:700;color:var(--text-tertiary);display:flex;align-items:center;gap:0.4rem;margin-bottom:0.4rem">
        <i class="fas fa-sticky-note" style="color:var(--gold-500)"></i> Notas del tema</label>
      <textarea id="notesInline" rows="4" style="width:100%;border:1px solid var(--border);border-radius:var(--radius-sm);padding:0.7rem;font-family:var(--font-body);font-size:0.85rem;background:var(--card-bg);color:var(--text);resize:vertical;outline:none" placeholder="Toma notas aqu\u00ED...">${escapeHtml(txt)}</textarea>`;
    body.appendChild(wrap);
    const ta = document.getElementById('notesInline');
    if (ta) {
      ta.addEventListener('input', () => {
        if (noteTimer) clearTimeout(noteTimer);
        noteTimer = setTimeout(() => {
          saveNote(moduleNum, topicNum, ta.value);
        }, 500);
      });
    }
  };

  /* ============================================================
     4. PROGRESS DASHBOARD
     ============================================================ */

  window.openDashboard = function () {
    updateStreak();
    updateQuizBadges();
    const overlay = ensureOverlay('dashboardOverlay');
    let topicsDone = 0;
    const totalTopics = 34;
    for (let m = 1; m <= 9; m++) {
      document.querySelectorAll(`.topic-card[data-module="${m}"]`).forEach(c => {
        if (c.querySelector('.card-check')?.classList.contains('done')) topicsDone++;
      });
    }
    const pct = Math.round(topicsDone / totalTopics * 100);
    const streak = parseInt(localStorage.getItem('streak')) || 0;
    const lastAct = localStorage.getItem('last-activity') || 'Nunca';
    const circum = 220;
    const offset = circum - (pct / 100) * circum;
    let modBars = '';
    for (let i = 1; i <= 9; i++) {
      const t = document.querySelectorAll(`.topic-card[data-module="${i}"]`);
      let d = 0;
      t.forEach(c => {
        if (c.querySelector('.card-check')?.classList.contains('done')) d++;
      });
      const tp = t.length;
      const mp = tp ? Math.round(d / tp * 100) : 0;
      const s = getQuizScore(i);
      const badgeIcon = s
        ? (s.passed ? '<i class="fas fa-check-circle" style="color:#48bb78"></i>' : '<i class="fas fa-exclamation-circle" style="color:#f56565"></i>')
        : '<i class="far fa-circle" style="color:var(--text-tertiary)"></i>';
      modBars += `
        <div style="margin-bottom:0.5rem">
          <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.2rem">
            <span>M\u00F3dulo ${i}</span><span>${d}/${tp} (${mp}%) ${badgeIcon}</span>
          </div>
          <div style="height:4px;background:var(--bg-tertiary);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${mp}%;background:linear-gradient(90deg,var(--gold-500),var(--gold-300));border-radius:4px;transition:width 600ms ease"></div>
          </div>
        </div>`;
    }
    overlay.innerHTML = `
      <div class="overlay-content" style="max-width:620px;max-height:85vh;overflow-y:auto">
        <button class="overlay-close" onclick="closeDashboard()"><i class="fas fa-times"></i></button>
        <h2 style="margin-bottom:1rem"><i class="fas fa-chart-line" style="color:var(--gold-500)"></i> Tu Progreso</h2>
        <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap">
          <div style="position:relative;width:80px;height:80px;flex-shrink:0">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill="none" stroke="var(--bg-tertiary)" stroke-width="6"/>
              <circle cx="40" cy="40" r="35" fill="none" stroke="var(--gold-500)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${circum}" stroke-dashoffset="${offset}" transform="rotate(-90,40,40)" style="transition:stroke-dashoffset 800ms ease"/>
            </svg>
            <div style="position:absolute;inset:0;display:grid;place-items:center;font-size:1.3rem;font-weight:800;color:var(--text)">${pct}%</div>
          </div>
          <div style="font-size:0.85rem;color:var(--text-secondary)">
            <div style="margin-bottom:0.3rem"><i class="fas fa-check-circle" style="color:var(--gold-500);width:18px"></i> <strong>${topicsDone}</strong>/${totalTopics} temas</div>
            <div style="margin-bottom:0.3rem"><i class="fas fa-fire" style="color:var(--gold-500);width:18px"></i> Racha: <strong>${streak}</strong> d\u00EDas</div>
            <div style="margin-bottom:0.3rem"><i class="far fa-calendar-alt" style="color:var(--gold-500);width:18px"></i> \u00DAlt. actividad: ${lastAct}</div>
          </div>
        </div>
        <div style="margin-bottom:1rem">${modBars}</div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
          <button class="fs-check-btn" onclick="exportProgress()"><i class="fas fa-download"></i> Exportar Progreso</button>
          <button class="fs-check-btn" onclick="importProgress()"><i class="fas fa-upload"></i> Importar Progreso</button>
        </div>
        <input type="file" id="importFileInput" accept=".json" style="display:none" onchange="handleImport(event)">
      </div>`;
    showOverlay(overlay);
  };

  window.closeDashboard = function () {
    hideOverlay('dashboardOverlay');
  };

  window.exportProgress = function () {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('progress-') || key.startsWith('quiz-score-') || key === 'streak' || key === 'streak-last-date' || key === 'last-activity' || key === 'assessment-result')) {
        try {
          data[key] = JSON.parse(localStorage.getItem(key));
        } catch {
          data[key] = localStorage.getItem(key);
        }
      }
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ansuz-progress-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  window.importProgress = function () {
    document.getElementById('importFileInput').click();
  };

  window.handleImport = function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      try {
        const data = JSON.parse(ev.target.result);
        Object.keys(data).forEach(k => {
          localStorage.setItem(k, JSON.stringify(data[k]));
        });
        alert('Progreso importado correctamente.');
        closeDashboard();
        setTimeout(() => openDashboard(), 300);
      } catch {
        alert('Error al importar: el archivo no es v\u00E1lido.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  function updateStreak() {
    const today = new Date().toDateString();
    const last = localStorage.getItem('streak-last-date');
    let streak = parseInt(localStorage.getItem('streak')) || 0;
    if (last === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (last === yesterday) {
      streak++;
    } else if (last && last !== today) {
      streak = 1;
    } else {
      streak = 1;
    }
    localStorage.setItem('streak', streak);
    localStorage.setItem('streak-last-date', today);
    localStorage.setItem('last-activity', today);
  }

  function updateQuizBadges() {
    for (let m = 1; m <= 9; m++) updateQuizBadge(m);
  }

  /* ============================================================
     5. GLOSSARY
     ============================================================ */

  window.openGlossary = function () {
    if (!G.length) return;
    const overlay = ensureOverlay('glossaryOverlay');
    const letters = ['All'].concat(
      G.map(x => x.term.charAt(0).toUpperCase())
        .filter((l, i, a) => a.indexOf(l) === i)
        .sort()
    );
    const letterBtns = letters.map(l =>
      `<button class="glossary-letter-btn" data-letter="${l}" onclick="filterGlossary('${l}')" style="padding:0.25rem 0.5rem;border:1px solid var(--border);background:var(--card-bg);color:var(--text-secondary);border-radius:4px;cursor:pointer;font-size:0.75rem;font-weight:600;transition:all var(--transition)">${l}</button>`
    ).join('');
    overlay.innerHTML = `
      <div class="overlay-content" style="max-width:700px;max-height:85vh;overflow-y:auto">
        <button class="overlay-close" onclick="closeGlossary()"><i class="fas fa-times"></i></button>
        <h2 style="margin-bottom:0.75rem"><i class="fas fa-book" style="color:var(--gold-500)"></i> Glosario</h2>
        <div style="margin-bottom:0.75rem;position:relative">
          <i class="fas fa-search" style="position:absolute;left:0.7rem;top:50%;transform:translateY(-50%);color:var(--text-tertiary);font-size:0.8rem"></i>
          <input type="text" id="glossarySearch" placeholder="Buscar t\u00E9rminos..." oninput="searchGlossary(this.value)" style="width:100%;padding:0.6rem 0.6rem 0.6rem 2rem;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--card-bg);color:var(--text);font-size:0.85rem;outline:none">
        </div>
        <div style="display:flex;gap:0.3rem;flex-wrap:wrap;margin-bottom:0.75rem">${letterBtns}</div>
        <div id="glossaryGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.6rem"></div>
      </div>`;
    showOverlay(overlay);
    filterGlossary('All');
  };

  window.closeGlossary = function () {
    hideOverlay('glossaryOverlay');
  };

  window.filterGlossary = function (letter) {
    document.querySelectorAll('.glossary-letter-btn').forEach(b => {
      b.style.background = b.dataset.letter === letter ? 'var(--gold-500)' : 'var(--card-bg)';
      b.style.color = b.dataset.letter === letter ? 'var(--hero-from)' : 'var(--text-secondary)';
    });
    const filtered = letter === 'All' ? G : G.filter(x => x.term.charAt(0).toUpperCase() === letter);
    renderGlossary(filtered);
  };

  window.searchGlossary = function (query) {
    const q = query.toLowerCase().trim();
    const filtered = q ? G.filter(x => x.term.toLowerCase().includes(q) || x.definition.toLowerCase().includes(q)) : G;
    document.querySelectorAll('.glossary-letter-btn').forEach(b => {
      b.style.background = 'var(--card-bg)';
      b.style.color = 'var(--text-secondary)';
    });
    renderGlossary(filtered);
  };

  function renderGlossary(items) {
    const grid = document.getElementById('glossaryGrid');
    if (!grid) return;
    if (!items.length) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-tertiary);padding:2rem">No se encontraron t\u00E9rminos</div>';
      return;
    }
    grid.innerHTML = items.map(x => `
      <div style="padding:0.8rem;background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-sm);transition:all var(--transition)">
        <div style="font-weight:700;font-size:0.85rem;color:var(--gold-600);margin-bottom:0.2rem">${escapeHtml(x.term)}</div>
        <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5">${escapeHtml(x.definition)}</div>
      </div>`).join('');
  }

  /* ============================================================
     6. SKILL ASSESSMENT (Diagn\u00F3stico)
     ============================================================ */

  const assessState = { idx: 0, answers: {} };

  window.startAssessment = function () {
    if (!A.length) return;
    assessState.idx = 0;
    assessState.answers = {};
    const overlay = ensureOverlay('assessmentOverlay');
    overlay.innerHTML = `
      <div class="overlay-content" style="max-width:600px;max-height:80vh;overflow-y:auto">
        <button class="overlay-close" onclick="closeAssessment()"><i class="fas fa-times"></i></button>
        <h2 style="margin-bottom:0.5rem"><i class="fas fa-clipboard-list" style="color:var(--gold-500)"></i> Diagn\u00F3stico</h2>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem">Responde 10 preguntas para conocer tu nivel. Al final recibir\u00E1s recomendaciones.</p>
        <div id="assessArea"></div>
      </div>`;
    showOverlay(overlay);
    renderAssessment();
  };

  window.closeAssessment = function () {
    hideOverlay('assessmentOverlay');
  };

  function renderAssessment() {
    const idx = assessState.idx;
    const total = A.length;
    const q = A[idx];
    const area = document.getElementById('assessArea');
    if (!area) return;
    const sel = assessState.answers[idx];
    const optsHtml = q.options.map((o, i) => {
      return `<label style="display:flex;align-items:center;gap:0.5rem;padding:0.6rem 0.8rem;margin:0.3rem 0;border-radius:var(--radius-sm);border:1px solid var(--border);cursor:pointer;transition:all var(--transition);${sel === i ? 'border-color:var(--gold-500);background:var(--badge-bg)' : ''}" onclick="selectAssessOption(${idx},${i})">
        <input type="radio" name="a${idx}" value="${i}" ${sel === i ? 'checked' : ''} style="accent-color:var(--gold-500)">
        <span>${escapeHtml(o)}</span></label>`;
    }).join('');
    area.innerHTML = `
      <div style="font-size:0.75rem;color:var(--text-tertiary);margin-bottom:0.75rem">Pregunta ${idx + 1}/${total}</div>
      <p style="font-weight:600;font-size:1rem;margin-bottom:1rem">${escapeHtml(q.question)}</p>
      <div style="display:flex;flex-direction:column">${optsHtml}</div>
      <div style="display:flex;justify-content:space-between;margin-top:1.5rem;gap:0.5rem">
        ${idx > 0 ? `<button class="fs-check-btn" onclick="navigateAssess(${idx - 1})"><i class="fas fa-chevron-left"></i> Anterior</button>` : '<span></span>'}
        ${idx < total - 1
          ? `<button class="fs-continue-btn" onclick="navigateAssess(${idx + 1})">Siguiente <i class="fas fa-chevron-right"></i></button>`
          : `<button class="fs-continue-btn" onclick="finishAssessment()"><i class="fas fa-check-double"></i> Finalizar</button>`}
      </div>`;
  }

  window.selectAssessOption = function (idx, optIdx) {
    assessState.answers[idx] = optIdx;
    renderAssessment();
  };

  window.navigateAssess = function (idx) {
    assessState.idx = idx;
    renderAssessment();
  };

  window.finishAssessment = function () {
    const total = A.length;
    let score = 0;
    const moduleScores = {};
    A.forEach((q, i) => {
      const correct = assessState.answers[i] === q.correct;
      if (correct) score++;
      const m = q.module || 1;
      if (!moduleScores[m]) moduleScores[m] = { correct: 0, total: 0 };
      moduleScores[m].total++;
      if (correct) moduleScores[m].correct++;
    });
    const level = score <= 4 ? 'Principiante' : score <= 7 ? 'Intermedio' : 'Avanzado';
    const areas = Object.keys(moduleScores)
      .filter(m => (moduleScores[m].correct / moduleScores[m].total) < 0.6)
      .map(m => `M\u00F3dulo ${m}`);
    const area = document.getElementById('assessArea');
    if (!area) return;
    let html = `<h3 style="margin-bottom:0.75rem">Resultados</h3>
      <div style="text-align:center;margin-bottom:1rem">
        <div style="font-size:2.5rem;font-weight:800;color:var(--gold-500)">${score}/${total}</div>
        <div style="font-size:1.1rem;font-weight:700;color:var(--text);margin-top:0.3rem">Nivel: ${level}</div>
      </div>`;
    if (areas.length) {
      html += `<div style="padding:0.7rem;background:var(--badge-bg);border-radius:var(--radius-sm);margin-bottom:1rem">
        <strong style="font-size:0.85rem">Recomendaci\u00F3n:</strong><ul style="margin:0.3rem 0 0 1rem;font-size:0.82rem;color:var(--text-secondary)">
        ${areas.map(a => `<li>Te sugerimos repasar ${a}</li>`).join('')}</ul></div>`;
    } else {
      html += `<div style="padding:0.7rem;background:var(--gold-50);border-radius:var(--radius-sm);margin-bottom:1rem;font-size:0.85rem;color:var(--text)"><i class="fas fa-trophy" style="color:var(--gold-500)"></i> \u00A1Excelente! Tienes un buen dominio de todos los m\u00F3dulos.</div>`;
    }
    html += `<div style="display:flex;gap:0.5rem">
      <button class="fs-continue-btn" onclick="saveAssessmentResult()"><i class="fas fa-save"></i> Guardar resultado</button>
      <button class="fs-check-btn" onclick="closeAssessment()">Cerrar</button></div>`;
    area.innerHTML = html;
  };

  window.saveAssessmentResult = function () {
    let score = 0;
    A.forEach((q, i) => {
      if (assessState.answers[i] === q.correct) score++;
    });
    localStorage.setItem('assessment-result', JSON.stringify({
      score,
      total: A.length,
      date: new Date().toISOString()
    }));
    alert('Resultado guardado.');
    updateAssessmentBadge();
  };

  function updateAssessmentBadge() {
    const r = localStorage.getItem('assessment-result');
    const btn = document.getElementById('assessmentBadge');
    if (!btn) return;
    btn.innerHTML = r ? '<i class="fas fa-check-circle" style="color:#48bb78"></i>' : '<i class="fas fa-clipboard-list"></i>';
  }

  /* ============================================================
     7. unused
     ============================================================ */

  /* ============================================================
     8. CODE COPY BUTTONS
     ============================================================ */

  function initCopyButtons() {
    document.querySelectorAll('pre').forEach(pre => {
      if (pre.querySelector('.copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
      btn.onclick = () => copyCode(btn);
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  window.copyCode = function (btn) {
    const pre = btn.closest('pre');
    if (!pre) return;
    const code = pre.querySelector('code');
    const text = code ? code.textContent.trim() : pre.textContent.trim();
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => showCopied(btn))
        .catch(() => fallbackCopy(text, btn));
    } else {
      fallbackCopy(text, btn);
    }
  };

  function fallbackCopy(text, btn) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showCopied(btn);
    } catch {
      /* copy not supported */
    }
    document.body.removeChild(ta);
  }

  function showCopied(btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
    btn.style.background = 'rgba(72,187,120,0.3)';
    btn.style.color = '#48bb78';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = 'rgba(212,168,67,0.2)';
      btn.style.color = 'var(--gold-300)';
    }, 2000);
  }

  /* ============================================================
     9. KEYBOARD SHORTCUTS
     ============================================================ */

  window.showShortcuts = function () {
    const overlay = ensureOverlay('shortcutsOverlay');
    const shortcuts = [
      ['?', 'Mostrar atajos'],
      ['Esc', 'Cerrar overlay'],
      ['Ctrl+K', 'Buscar'],
      ['1\u20139', 'Ir al m\u00F3dulo N'],
      ['\u2190 \u2192', 'Tema anterior/siguiente (fullscreen)'],
      ['D', 'Alternar tema'],
    ];
    overlay.innerHTML = `
      <div class="overlay-content" style="max-width:450px">
        <button class="overlay-close" onclick="closeShortcuts()"><i class="fas fa-times"></i></button>
        <h2 style="margin-bottom:0.75rem"><i class="fas fa-keyboard" style="color:var(--gold-500)"></i> Atajos de teclado</h2>
        <div style="display:grid;gap:0.4rem">
          ${shortcuts.map(s => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.4rem 0.6rem;border-radius:var(--radius-sm);font-size:0.82rem">
              <span style="color:var(--text-secondary)">${s[1]}</span>
              <kbd style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:4px;padding:0.15rem 0.5rem;font-family:var(--font-body);font-size:0.72rem;font-weight:700;color:var(--text)">${s[0]}</kbd>
            </div>`).join('')}
        </div>
      </div>`;
    showOverlay(overlay);
  };

  window.closeShortcuts = function () {
    hideOverlay('shortcutsOverlay');
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.overlay.open').forEach(o => o.classList.remove('open'));
      const fs = document.getElementById('fullscreenOverlay');
      if (fs?.classList.contains('open')) {
        fs.classList.remove('open');
        document.body.style.overflow = '';
      }
      return;
    }
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key >= '1' && e.key <= '9') {
      const sec = document.getElementById(`modulo-${e.key}`);
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (e.key === 'd' || e.key === 'D') {
      e.preventDefault();
      document.getElementById('themeToggle')?.click();
      return;
    }
    if (e.key === '?' && !e.target.matches('input,textarea,select')) {
      e.preventDefault();
      const so = document.getElementById('shortcutsOverlay');
      if (so?.classList.contains('open')) closeShortcuts();
      else showShortcuts();
      return;
    }
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && document.getElementById('fullscreenOverlay')?.classList.contains('open')) {
      e.preventDefault();
      const dir = e.key === 'ArrowLeft' ? -1 : 1;
      const navBtn = document.querySelector(`.fs-nav button:nth-child(${dir === -1 ? 1 : 2})`);
      navBtn?.click();
    }
  });

  /* ============================================================
     10. ANIMATIONS & MICRO-INTERACTIONS
     ============================================================ */

  function initScrollReveal() {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  function initCounterAnimations() {
  }

  /* ============================================================
     11. INITIALIZATION
     ============================================================ */

  document.addEventListener('DOMContentLoaded', function () {
    updateStreak();
    initCopyButtons();
    initScrollReveal();
    initCounterAnimations();
    updateQuizBadges();
    updateAssessmentBadge();
  });

  /* ============================================================
     12. OVERLAY STYLES (injected once)
     ============================================================ */

  if (!document.getElementById('appOverlayStyles')) {
    const s = document.createElement('style');
    s.id = 'appOverlayStyles';
    s.textContent =
      '.overlay{position:fixed;inset:0;z-index:3000;background:var(--overlay-bg,rgba(0,0,0,0.5));backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:1.5rem;opacity:0;transition:opacity var(--transition,300ms)}' +
      '.overlay.open{display:flex;opacity:1}' +
      '.overlay-content{background:var(--card-bg,#fff);border-radius:var(--radius-lg,12px);padding:1.5rem;max-width:620px;width:100%;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.3);max-height:85vh;overflow-y:auto;border:1px solid var(--border)}' +
      '.overlay-close{position:absolute;top:0.75rem;right:0.75rem;width:32px;height:32px;border:none;background:var(--bg-tertiary);color:var(--text-secondary);border-radius:8px;cursor:pointer;display:grid;place-items:center;transition:all var(--transition,300ms);font-size:0.85rem}' +
      '.overlay-close:hover{background:var(--border-strong);color:var(--text)}' +
      '.overlay-content h2{font-family:var(--font-display,Georgia,serif);font-size:clamp(1.2rem,2.5vw,1.5rem);font-weight:800;color:var(--text)}' +
      '.overlay-content kbd{background:var(--bg-tertiary);border:1px solid var(--border);border-radius:4px;padding:0.15rem 0.5rem;font-family:var(--font-body);font-size:0.72rem;font-weight:700;color:var(--text)}' +
      '@media(max-width:480px){.overlay{padding:0.5rem}.overlay-content{padding:1rem;border-radius:var(--radius-md,12px)}}';
    document.head.appendChild(s);
  }

})();
