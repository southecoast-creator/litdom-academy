const fs = require('fs');

const engineCode = `/* =========================================================================
 * LITDOM ACADEMY - UNIFIED APPLICATION & CURRICULUM ENGINE
 * =========================================================================
 * Complete data-driven execution engine powering:
 * - Dynamic Course Hub & Pathway Selection
 * - Modular Journey Map / Roadmap with Strict Clearance Progression
 * - Flexible Multi-Media Section Content Renderer (Text, Real Video, Real Audio,
 *   Canva Embeds, Images, Documents, Downloads, Interactive Crucibles, Examples)
 * - 5-Question Section Assessments (Passing: 3/5)
 * - 5-Question Module Assessments (Passing: 4/5)
 * - 50-Question Capstone Board Examination (Passing: 45/50)
 * - Master Credential Certification (Locked until all modules & exam passed)
 * ========================================================================= */

/* -------------------------------------------------------------------------
 * SVG ICON REPOSITORY (Clean, crisp Material & Editorial Symbols)
 * ------------------------------------------------------------------------- */
const LITDOM_ICONS = {
  quill: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>\`,
  book: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/></svg>\`,
  award: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>\`,
  clock: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>\`,
  video: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>\`,
  play: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>\`,
  pause: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>\`,
  replay: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>\`,
  check: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\`,
  lock: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>\`,
  star: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>\`,
  zap: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>\`,
  headphones: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>\`,
  search: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>\`,
  target: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>\`,
  alert: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>\`,
  pencil: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>\`,
  download: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>\`,
  presentation: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>\`,
  image: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>\`,
  file: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>\`,
  graduation: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>\`,
  trophy: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>\`,
  sparkle: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>\`,
  scales: \`<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>\`
};

function svgIcon(name, size = 18) {
  const template = LITDOM_ICONS[name] || LITDOM_ICONS["sparkle"];
  return template.replace(/\\{size\\}/g, size);
}

function formatSeconds(sec) {
  const s = Math.max(0, parseInt(sec, 10) || 0);
  const m = Math.floor(s / 60);
  const remS = s % 60;
  return \`\${m < 10 ? '0' + m : m}:\${remS < 10 ? '0' + remS : remS}\`;
}

/* -------------------------------------------------------------------------
 * STATE PERSISTENCE (LocalStorage)
 * ------------------------------------------------------------------------- */
const STORAGE_KEY = "litdom_academy_progression_v5";

let state = {
  currentView: "hub",
  selectedCourseId: "editor-academy",
  activeModuleIndex: 0,
  activeSectionIndex: 0,
  activeAssessmentModIndex: 0,
  studentName: "Eleanor Vance",
  completedSections: {}, // Map of sectionId -> boolean (passed 3/5 assessment)
  sectionScores: {},     // Map of sectionId -> number (e.g. 4 for 4/5)
  completedModules: {},  // Map of moduleId -> boolean (passed 4/5 assessment)
  moduleScores: {},      // Map of moduleId -> number (e.g. 5 for 5/5)
  examState: {
    passed: false,
    score: 0,
    timestamp: null
  }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = Object.assign(state, parsed);
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
  updateNavUser();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Storage save error:", e);
  }
  updateNavUser();
}

function resetProgress() {
  if (confirm("Reset all course progression, quiz attempts, and exam scores?")) {
    state.completedSections = {};
    state.sectionScores = {};
    state.completedModules = {};
    state.moduleScores = {};
    state.examState = {
      passed: false,
      score: 0,
      timestamp: null
    };
    saveState();
    showToast("All curriculum progress has been reset.", "replay");
    navigateTo("hub");
  }
}

function updateNavUser() {
  const nameEl = document.getElementById("navUserName");
  if (nameEl) nameEl.textContent = state.studentName || "Eleanor Vance";
}

/* -------------------------------------------------------------------------
 * CURRICULUM ACCESSORS & PROGRESSION LOGIC
 * ------------------------------------------------------------------------- */
function getActiveCourse() {
  const courses = (typeof LITDOM_DATA !== "undefined" && LITDOM_DATA.courses) ? LITDOM_DATA.courses : [];
  return courses.find(c => c.id === state.selectedCourseId) || courses[0] || {
    id: "editor-academy",
    title: "Editor Academy",
    modules: []
  };
}

function isSectionCompleted(secId) {
  return !!state.completedSections[secId];
}

function isModuleCompleted(modId) {
  return !!state.completedModules[modId];
}

function getSectionState(mIdx, sIdx) {
  const course = getActiveCourse();
  if (!course.modules || !course.modules[mIdx]) return "locked";
  const mod = course.modules[mIdx];
  const sec = mod.sections[sIdx];
  if (!sec) return "locked";

  if (isSectionCompleted(sec.id)) return "completed";

  // First section of first module is available by default
  if (mIdx === 0 && sIdx === 0) return "available";

  // Within the same module: previous section must be completed
  if (sIdx > 0) {
    const prevSec = mod.sections[sIdx - 1];
    return isSectionCompleted(prevSec.id) ? "available" : "locked";
  }

  // First section of subsequent module: previous module assessment must be passed
  if (mIdx > 0 && sIdx === 0) {
    const prevMod = course.modules[mIdx - 1];
    return isModuleCompleted(prevMod.id) ? "available" : "locked";
  }

  return "locked";
}

function canTakeModuleAssessment(mIdx) {
  const course = getActiveCourse();
  if (!course.modules || !course.modules[mIdx]) return false;
  const mod = course.modules[mIdx];
  return mod.sections.every(sec => isSectionCompleted(sec.id));
}

function getModuleState(mIdx) {
  const course = getActiveCourse();
  if (!course.modules || !course.modules[mIdx]) return "locked";
  const mod = course.modules[mIdx];
  if (isModuleCompleted(mod.id)) return "completed";
  if (mIdx === 0) return "active";
  const prevMod = course.modules[mIdx - 1];
  if (isModuleCompleted(prevMod.id)) return "active";
  return "locked";
}

function canTakeFinalExam() {
  const course = getActiveCourse();
  if (!course.modules || course.modules.length === 0) return false;
  return course.modules.every(mod => isModuleCompleted(mod.id));
}

/* -------------------------------------------------------------------------
 * NAVIGATION & VIEW ROUTING
 * ------------------------------------------------------------------------- */
function navigateTo(viewId) {
  state.currentView = viewId;
  saveState();

  const views = [
    "hub",
    "dashboard",
    "content",
    "module-assessment",
    "exam",
    "certificate"
  ];

  views.forEach(v => {
    const el = document.getElementById(\`view-\${v}\`);
    if (el) {
      if (v === viewId) {
        el.classList.add("active");
        el.style.display = "block";
      } else {
        el.classList.remove("active");
        el.style.display = "none";
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  switch (viewId) {
    case "hub":
      renderHub();
      break;
    case "dashboard":
      renderDashboard();
      break;
    case "content":
      renderSectionContent();
      break;
    case "module-assessment":
      renderModuleAssessment();
      break;
    case "exam":
      renderExamScreen();
      break;
    case "certificate":
      renderCertificate();
      break;
  }
}

function openCourse(courseId) {
  state.selectedCourseId = courseId;
  saveState();
  navigateTo("dashboard");
}

function openSection(mIdx, sIdx) {
  const secState = getSectionState(mIdx, sIdx);
  if (secState === "locked") {
    showToast("This section is locked. Complete the preceding section and pass its assessment to unlock.", "lock");
    return;
  }
  state.activeModuleIndex = mIdx;
  state.activeSectionIndex = sIdx;
  saveState();
  navigateTo("content");
}

function openModuleAssessment(mIdx) {
  if (!canTakeModuleAssessment(mIdx)) {
    showToast("Complete all sections in this module before taking the comprehensive assessment.", "lock");
    return;
  }
  state.activeAssessmentModIndex = mIdx;
  saveState();
  navigateTo("module-assessment");
}

function resumeCurrentLesson() {
  const course = getActiveCourse();
  for (let m = 0; m < course.modules.length; m++) {
    const mod = course.modules[m];
    for (let s = 0; s < mod.sections.length; s++) {
      const sec = mod.sections[s];
      if (!isSectionCompleted(sec.id) && getSectionState(m, s) === "available") {
        openSection(m, s);
        return;
      }
    }
    if (!isModuleCompleted(mod.id) && canTakeModuleAssessment(m)) {
      openModuleAssessment(m);
      return;
    }
  }
  if (canTakeFinalExam() && !state.examState.passed) {
    navigateTo("exam");
    return;
  }
  if (state.examState.passed) {
    navigateTo("certificate");
    return;
  }
  openSection(0, 0);
}

/* -------------------------------------------------------------------------
 * VIEW 1: COURSE HUB
 * ------------------------------------------------------------------------- */
function renderHub() {
  const container = document.getElementById("courseCardsGrid") || document.getElementById("coursesContainer");
  if (!container) return;

  const courses = (typeof LITDOM_DATA !== "undefined" && LITDOM_DATA.courses) ? LITDOM_DATA.courses : [];
  container.innerHTML = courses.map(course => \`
    <div class="course-card" id="course-card-\${course.id}" onclick="openCourse('\${course.id}')" style="cursor: pointer;">
      <div style="color: var(--gold); margin-bottom: 14px;">
        \${svgIcon(course.icon || 'quill', 34)}
      </div>
      <span class="path-tag active-tag" style="margin-bottom: 12px; display: inline-block;">\${course.category}</span>
      <h3 style="margin-bottom: 8px;">\${course.title}</h3>
      <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
        \${course.description}
      </p>
      
      <div style="font-size: 0.82rem; color: var(--champagne); margin-bottom: 20px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          \${svgIcon('book', 14)} \${course.modules.length} Modules
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          \${svgIcon('clock', 14)} \${course.duration}
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          \${svgIcon('award', 14)} \${course.level}
        </span>
      </div>

      <div style="display: flex; gap: 10px; align-items: center;">
        <button class="btn btn-gold" onclick="event.stopPropagation(); openCourse('\${course.id}')" style="flex-grow: 1;">
          Enter Academy &rarr;
        </button>
      </div>
    </div>
  \`).join("");
}

/* -------------------------------------------------------------------------
 * VIEW 2: COURSE DASHBOARD & ROADMAP
 * ------------------------------------------------------------------------- */
function renderDashboard() {
  const course = getActiveCourse();

  // Update header text
  const bcCourse = document.getElementById("dashBreadcrumbCourse");
  const catEl = document.getElementById("dashCourseCategory");
  const titleEl = document.getElementById("dashCourseTitle");
  const descEl = document.getElementById("dashCourseDesc");

  if (bcCourse) bcCourse.textContent = course.title;
  if (catEl) catEl.textContent = course.category || "Editorial Arts";
  if (titleEl) titleEl.textContent = course.title;
  if (descEl) descEl.textContent = course.description;

  // Calculate Progress across all sections and modules
  let totalItems = 0;
  let completedItems = 0;
  let clearedModulesCount = 0;

  course.modules.forEach(m => {
    totalItems += m.sections.length + 1; // sections + module assessment
    m.sections.forEach(s => {
      if (isSectionCompleted(s.id)) completedItems++;
    });
    if (isModuleCompleted(m.id)) {
      completedItems++;
      clearedModulesCount++;
    }
  });

  const progressPct = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  const pBar = document.getElementById("dashProgressBar");
  const pPct = document.getElementById("dashProgressPct");
  const counterEl = document.getElementById("dashStepsCounter");

  if (pBar) pBar.style.width = \`\${progressPct}%\`;
  if (pPct) pPct.textContent = \`\${progressPct}%\`;
  if (counterEl) counterEl.textContent = \`\${clearedModulesCount} of \${course.modules.length} Modules Cleared\`;

  // Render Dynamic Journey Map
  const mapContainer = document.getElementById("journeyMapContainer");
  if (!mapContainer) return;

  let mapHtml = course.modules.map((mod, mIdx) => {
    const modState = getModuleState(mIdx);
    const modScore = state.moduleScores[mod.id];
    const canTestModule = canTakeModuleAssessment(mIdx);
    const isModDone = isModuleCompleted(mod.id);

    return \`
      <div class="module-group \${modState}" id="module-group-\${mod.id}">
        <div class="module-header-row">
          <div class="module-badge \${modState}">
            \${isModDone ? svgIcon('check', 14) : mod.num}
          </div>
          <div>
            <div style="font-size: 0.76rem; text-transform: uppercase; color: var(--gold); letter-spacing: 0.08em; font-weight: 700;">
              Module \${mod.num}
            </div>
            <h4 style="font-size: 1.15rem; color: var(--ivory);">\${mod.title}</h4>
            <p style="font-size: 0.85rem; color: var(--muted); margin-top: 2px;">\${mod.description}</p>
          </div>
        </div>

        <div class="sections-list">
          \${mod.sections.map((sec, sIdx) => {
            const secState = getSectionState(mIdx, sIdx);
            const isSecDone = isSectionCompleted(sec.id);
            const secScore = state.sectionScores[sec.id];
            
            // Dynamic media badge indicators based on that section's content array
            const hasVideo = sec.content.some(b => b.type === "video");
            const hasAudio = sec.content.some(b => b.type === "audio");
            const hasCanva = sec.content.some(b => b.type === "canva" || b.type === "presentation");
            const hasEx = sec.content.some(b => b.type === "interactive_exercise" || b.type === "exercise");
            const hasDoc = sec.content.some(b => b.type === "document" || b.type === "pdf" || b.type === "resource");

            return \`
              <div class="section-node \${secState}" id="sec-node-\${sec.id}" onclick="openSection(\${mIdx}, \${sIdx})" style="cursor: \${secState === 'locked' ? 'not-allowed' : 'pointer'};">
                <div class="node-status-icon">
                  \${isSecDone ? svgIcon('check', 14) : secState === 'locked' ? svgIcon('lock', 12) : svgIcon('play', 12)}
                </div>
                <div class="node-text">
                  <h5>\${sec.title}</h5>
                  <div class="node-meta">
                    <span style="display: inline-flex; align-items: center; gap: 5px;">
                      \${svgIcon('clock', 12)} \${sec.duration}
                    </span>
                    \${hasVideo ? \`<span style="display: inline-flex; align-items: center; gap: 5px;">\${svgIcon('video', 12)} Video</span>\` : ""}
                    \${hasAudio ? \`<span style="display: inline-flex; align-items: center; gap: 5px;">\${svgIcon('headphones', 12)} Audio</span>\` : ""}
                    \${hasCanva ? \`<span style="display: inline-flex; align-items: center; gap: 5px;">\${svgIcon('presentation', 12)} Canva</span>\` : ""}
                    \${hasEx ? \`<span style="display: inline-flex; align-items: center; gap: 5px;">\${svgIcon('pencil', 12)} Exercise</span>\` : ""}
                    \${hasDoc ? \`<span style="display: inline-flex; align-items: center; gap: 5px;">\${svgIcon('file', 12)} Document</span>\` : ""}
                    \${isSecDone ? \`<span style="color: #10b981; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">\${svgIcon('check', 12)} Passed (\${secScore !== undefined ? secScore : 5}/5)</span>\` : ""}
                  </div>
                </div>
                <div>
                  <button class="btn \${isSecDone ? 'btn-outline' : secState === 'locked' ? 'btn-outline' : 'btn-gold'} node-action-btn" 
                          onclick="event.stopPropagation(); openSection(\${mIdx}, \${sIdx})" 
                          \${secState === 'locked' ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
                    \${isSecDone ? "Review Lesson" : secState === 'locked' ? svgIcon('lock', 12) + " Locked" : svgIcon('play', 12) + " Start Lesson"}
                  </button>
                </div>
              </div>
            \`;
          }).join("")}

          <!-- Module Assessment Node -->
          <div class="section-node \${isModDone ? 'completed' : canTestModule ? 'available' : 'locked'}" style="background: rgba(212, 175, 55, 0.04); border-color: rgba(212, 175, 55, 0.3);">
            <div class="node-status-icon" style="border-color: var(--gold); color: var(--gold);">
              \${isModDone ? svgIcon('star', 14) : canTestModule ? svgIcon('award', 14) : svgIcon('lock', 14)}
            </div>
            <div class="node-text">
              <h5 style="color: var(--champagne);">Module \${mod.num} Comprehensive Assessment</h5>
              <div class="node-meta">
                <span>5 Questions • 80% Passing (4/5)</span>
                \${modScore !== undefined ? \`<span style="color: #10b981; font-weight: 700;">Score: \${modScore}/5 Passed</span>\` : ""}
              </div>
            </div>
            <div>
              \${
                canTestModule
                  ? \`<button class="btn btn-gold node-action-btn" onclick="openModuleAssessment(\${mIdx})">
                       \${isModDone ? "Retake Exam" : "Take Exam &rarr;"}
                     </button>\`
                  : \`<button class="btn btn-outline node-action-btn" disabled style="opacity: 0.4; cursor: not-allowed;">
                       Complete Sections First
                     </button>\`
              }
            </div>
          </div>
        </div>
      </div>
    \`;
  }).join("");

  // Final Exam Milestone Card
  const examUnlocked = canTakeFinalExam();
  mapHtml += \`
    <div class="exam-milestone-card" id="finalExamMilestone" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.12), rgba(20, 20, 26, 0.95)); border: 1px solid var(--gold); border-radius: var(--radius-lg); padding: 28px; margin-top: 24px; display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap;">
      <div>
        <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--gold); letter-spacing: 0.1em; font-weight: 700; display: flex; align-items: center; gap: 6px;">
          \${svgIcon('graduation', 16)} CAPSTONE BOARD CERTIFICATION
        </div>
        <h3 style="color: var(--champagne); font-size: 1.35rem; margin-top: 6px;">
          The Editorial Board Final Examination
        </h3>
        <p style="color: var(--ivory); font-size: 0.9rem; max-width: 540px; margin-top: 6px; line-height: 1.6;">
          A rigorous 50-question board certification covering all \${course.modules.length} modules. Requires 90% (45/50) to earn the Litdom Master Editor Credential.
        </p>
      </div>
      <div>
        \${
          examUnlocked
            ? \`<button class="btn btn-gold" onclick="navigateTo('exam')" style="font-size: 0.95rem; padding: 12px 24px;">
                 \${state.examState.passed ? "View Credential &rarr;" : "Take Capstone Exam &rarr;"}
               </button>\`
            : \`<button class="btn btn-outline" disabled style="opacity: 0.4; cursor: not-allowed; font-size: 0.9rem; padding: 10px 20px;">
                 <span style="display: inline-flex; align-items: center; gap: 6px;">
                   \${svgIcon('lock', 13)} Complete All \${course.modules.length} Modules First
                 </span>
               </button>\`
        }
      </div>
    </div>
  \`;

  mapContainer.innerHTML = mapHtml;
}

/* -------------------------------------------------------------------------
 * VIEW 3: SECTION CONTENT & 5-QUESTION ASSESSMENT
 * ------------------------------------------------------------------------- */
function renderSectionContent() {
  const course = getActiveCourse();
  if (!course.modules || !course.modules[state.activeModuleIndex]) return;
  const mod = course.modules[state.activeModuleIndex];
  const sec = mod.sections[state.activeSectionIndex];
  if (!sec) return;

  const isCompleted = isSectionCompleted(sec.id);
  const secScore = state.sectionScores[sec.id];

  // Update header text
  const modLabel = document.getElementById("contentModuleLabel");
  const secTitle = document.getElementById("contentSectionTitle");
  const secDesc = document.getElementById("contentSectionDesc");
  const breadcrumb = document.getElementById("contentBreadcrumb");
  const pBar = document.getElementById("sectionProgressBar");
  const pPct = document.getElementById("sectionProgressPct");

  if (modLabel) modLabel.textContent = \`Module \${mod.num} • Section \${state.activeSectionIndex + 1}\`;
  if (secTitle) secTitle.textContent = sec.title;
  if (secDesc) secDesc.textContent = sec.summary || "";
  if (breadcrumb) breadcrumb.textContent = sec.title;
  if (pBar) pBar.style.width = isCompleted ? "100%" : "60%";
  if (pPct) pPct.textContent = isCompleted ? \`100% Cleared (Score: \${secScore !== undefined ? secScore : 5}/5)\` : "In Progress";

  const flowContainer = document.getElementById("contentBlocksFlow");
  if (!flowContainer) return;

  // Render all curriculum blocks in EXACT order provided in sec.content
  let blocksHtml = sec.content.map((block, bIdx) => {
    switch (block.type) {
      case "text":
        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.1); border-color: rgba(212, 175, 55, 0.25); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('book', 12)} READING & EDITORIAL THEORY
              </span>
            </div>
            <h4 style="font-size: 1.25rem; color: var(--champagne); margin-bottom: 10px;">\${block.title}</h4>
            <div style="font-size: 0.98rem; line-height: 1.85; color: var(--ivory);">
              \${block.content}
            </div>
          </div>
        \`;

      case "video": {
        const videoSrc = block.src || block.videoUrl || "";
        let playerHtml = "";

        if (videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be") || videoSrc.includes("vimeo.com")) {
          let embedUrl = videoSrc;
          if (videoSrc.includes("watch?v=")) embedUrl = videoSrc.replace("watch?v=", "embed/");
          if (videoSrc.includes("youtu.be/")) embedUrl = videoSrc.replace("youtu.be/", "www.youtube.com/embed/");
          playerHtml = \`
            <div style="position: relative; width: 100%; padding-top: 56.25%; background: #000; border-radius: 8px; overflow: hidden; margin: 14px 0; box-shadow: 0 6px 24px rgba(0,0,0,0.5);">
              <iframe src="\${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>
            </div>
          \`;
        } else {
          // Real HTML5 Video Player
          playerHtml = \`
            <div style="position: relative; width: 100%; border-radius: 8px; overflow: hidden; background: #000; margin: 14px 0; box-shadow: 0 6px 24px rgba(0,0,0,0.5);">
              <video controls playsinline preload="metadata" style="width: 100%; max-height: 480px; display: block; background: #000;">
                <source src="\${videoSrc}" type="video/mp4">
                Your browser does not support HTML5 video playback.
              </video>
            </div>
          \`;
        }

        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.12); border-color: rgba(212, 175, 55, 0.3); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('video', 12)} MASTERCLASS LECTURE
              </span>
              <span style="font-size: 0.78rem; color: var(--muted); display: inline-flex; align-items: center; gap: 5px;">
                \${svgIcon('clock', 12)} \${block.duration || "HD"} • \${block.badge || "Faculty Lecture"}
              </span>
            </div>
            <h4 style="font-size: 1.2rem; color: var(--champagne);">\${block.title}</h4>
            <p style="font-size: 0.88rem; color: var(--muted); margin: 4px 0 12px;">\${block.caption || ""}</p>
            \${playerHtml}
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--champagne); margin-top: 6px;">
              <span><strong>Instructor:</strong> \${block.instructor || "Litdom Faculty"}</span>
              <span style="color: var(--muted);">Direct Studio Stream</span>
            </div>
          </div>
        \`;
      }

      case "audio": {
        const audioSrc = block.src || block.audioUrl || "";
        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.12); border-color: rgba(212, 175, 55, 0.3); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('headphones', 12)} AUDIO MASTERCLASS
              </span>
              <span style="font-size: 0.78rem; color: var(--muted); display: inline-flex; align-items: center; gap: 5px;">
                \${svgIcon('clock', 12)} \${block.duration || "Lecture"}
              </span>
            </div>
            <h4 style="font-size: 1.2rem; color: var(--champagne);">\${block.title}</h4>
            <p style="font-size: 0.88rem; color: var(--muted); margin: 4px 0 14px;">\${block.caption || ""}</p>
            <div style="background: #111116; border: 1px solid var(--charcoal-border); border-radius: var(--radius-md); padding: 18px; margin: 12px 0;">
              <audio controls preload="metadata" style="width: 100%; border-radius: 6px;">
                <source src="\${audioSrc}" type="audio/mpeg">
                Your browser does not support audio playback.
              </audio>
            </div>
            <div style="font-size: 0.8rem; color: var(--champagne);">
              <strong>Narrated by:</strong> \${block.instructor || "Prof. Arthur Pendelton"}
            </div>
          </div>
        \`;
      }

      case "canva":
      case "presentation": {
        const canvaUrl = block.src || block.embedUrl || "";
        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 10px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.12); border-color: rgba(212, 175, 55, 0.3); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('presentation', 12)} CANVA PRESENTATION
              </span>
            </div>
            <h4 style="font-size: 1.2rem; color: var(--champagne);">\${block.title}</h4>
            <p style="font-size: 0.88rem; color: var(--muted); margin: 4px 0 14px;">\${block.caption || ""}</p>
            <div style="position: relative; width: 100%; padding-top: 56.25%; background: #000; border-radius: 8px; overflow: hidden; margin: 14px 0; box-shadow: 0 6px 24px rgba(0,0,0,0.5);">
              <iframe src="\${canvaUrl}" allowfullscreen="allowfullscreen" allow="fullscreen" style="position: absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>
            </div>
          </div>
        \`;
      }

      case "image":
        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 10px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.12); border-color: rgba(212, 175, 55, 0.3); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('image', 12)} VISUAL REFERENCE
              </span>
            </div>
            <h4 style="font-size: 1.2rem; color: var(--champagne);">\${block.title}</h4>
            <div style="margin: 14px 0; border-radius: 8px; overflow: hidden; border: 1px solid var(--charcoal-border);">
              <img src="\${block.src}" alt="\${block.alt || block.title}" style="width: 100%; max-height: 460px; object-fit: cover; display: block;">
            </div>
            \${block.caption ? \`<p style="font-size: 0.85rem; color: var(--muted); font-style: italic;">\${block.caption}</p>\` : ""}
          </div>
        \`;

      case "document":
      case "pdf":
        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 10px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.12); border-color: rgba(212, 175, 55, 0.3); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('file', 12)} CURRICULUM DOCUMENT
              </span>
            </div>
            <div class="pdf-viewer-card">
              <div class="pdf-info">
                <div class="pdf-icon">PDF</div>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem; color: var(--ivory);">\${block.title}</h4>
                  <p style="margin: 4px 0 0; font-size: 0.82rem; color: var(--muted);">\${block.caption || block.fileName || "Editorial Document"} • \${block.fileSize || "PDF"}</p>
                </div>
              </div>
              <a href="\${block.src || '#'}" download="\${block.fileName || 'Litdom_Document.pdf'}" class="btn btn-outline" style="font-size: 0.85rem; text-decoration: none;">
                \${svgIcon('download', 14)} Download PDF
              </a>
            </div>
          </div>
        \`;

      case "resource":
      case "download":
        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 10px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.12); border-color: rgba(212, 175, 55, 0.3); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('download', 12)} EDITORIAL ASSET
              </span>
            </div>
            <h4 style="font-size: 1.15rem; color: var(--champagne);">\${block.title}</h4>
            <p style="color: var(--muted); font-size: 0.88rem; margin: 6px 0 14px;">\${block.description || ""}</p>
            <a href="\${block.downloadUrl || block.src || '#'}" download="\${block.fileName || 'Litdom_Asset.pdf'}" class="btn btn-gold" style="font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
              \${svgIcon('download', 14)} Download \${block.fileName || 'Asset'} (\${block.fileSize || 'Ready'})
            </a>
          </div>
        \`;

      case "interactive_exercise":
      case "exercise": {
        const exId = block.id || \`ex-\${sec.id}-\${bIdx}\`;
        return \`
          <div class="interactive-editorial-card" id="exercise-card-\${exId}">
            <div class="block-badge-bar" style="margin-bottom: 8px;">
              <span class="editorial-badge">
                <span style="display: inline-flex; align-items: center; gap: 5px;">
                  \${svgIcon('pencil', 13)} \${block.category || 'LINE EDITING CRUCIBLE'}
                </span>
              </span>
            </div>
            <h4 style="margin-top: 6px; font-size: 1.18rem; color: var(--ivory);">\${block.title}</h4>
            <p style="font-size: 0.9rem; color: var(--muted); margin: 8px 0 14px; line-height: 1.6;">\${block.instructions}</p>
            
            <div class="interactive-sentence-box" id="ex-draft-\${exId}">
              <div style="font-size: 0.74rem; text-transform: uppercase; color: var(--gold); letter-spacing: 0.08em; font-family: sans-serif; margin-bottom: 6px;">
                Raw Manuscript Draft:
              </div>
              <div style="font-style: italic; font-size: 1.02rem; line-height: 1.6;">"\${block.draft}"</div>
            </div>

            <div class="editorial-options-grid" style="margin-top: 14px;">
              \${(block.options || []).map((opt, optIdx) => \`
                <button class="editorial-choice-btn" 
                        id="ex-\${exId}-opt-\${optIdx}"
                        onclick="evaluateExerciseOption('\${exId}', \${optIdx})">
                  <span style="font-weight: 700; color: var(--gold);">\${String.fromCharCode(65 + optIdx)}.</span>
                  <span>\${opt.text}</span>
                </button>
              \`).join("")}
            </div>

            <div class="editorial-feedback-box" id="ex-feedback-\${exId}" style="display: none; margin-top: 14px;"></div>
          </div>
        \`;
      }

      case "example":
        return \`
          <div class="example-block-card" id="block-\${bIdx}">
            <div class="block-badge-bar" style="margin-bottom: 10px;">
              <span class="path-tag" style="background: rgba(212, 175, 55, 0.12); border-color: rgba(212, 175, 55, 0.3); color: var(--gold); font-size: 0.74rem;">
                \${svgIcon('search', 12)} COMPARATIVE CRAFT DIAGNOSIS
              </span>
            </div>
            <h4 style="font-size: 1.15rem; color: var(--champagne); margin-bottom: 12px;">\${block.title}</h4>
            <div class="example-compare-grid">
              <div class="example-pane before">
                <span style="font-size: 0.75rem; font-weight: 700; color: #ff6b6b; text-transform: uppercase;">Raw Draft</span>
                <p style="font-size: 0.92rem; color: var(--ivory); margin-top: 8px; font-style: italic; line-height: 1.6;">"\${block.before}"</p>
              </div>
              <div class="example-pane after">
                <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; text-transform: uppercase;">Polished Version</span>
                <p style="font-size: 0.92rem; color: #a7f3d0; margin-top: 8px; font-weight: 500; line-height: 1.6;">"\${block.after}"</p>
              </div>
            </div>
            <p style="font-size: 0.88rem; color: var(--muted); margin-top: 12px; line-height: 1.6;">\${block.explanation}</p>
          </div>
        \`;

      default:
        return \`
          <div class="content-block-card" id="block-\${bIdx}">
            <h4>\${block.title || 'Curriculum Material'}</h4>
            <p>\${block.caption || ''}</p>
          </div>
        \`;
    }
  }).join("");

  // SECTION ASSESSMENT COMPONENT (EXACTLY 5 QUESTIONS, PASSING: 3/5)
  const assessment = sec.assessment || sec.test;
  if (assessment && assessment.questions && assessment.questions.length > 0) {
    const qList = assessment.questions;
    blocksHtml += \`
      <div class="section-assessment-card" id="sectionAssessmentCard" style="background: #121218; border: 1px solid rgba(212, 175, 55, 0.35); border-radius: var(--radius-lg); padding: 28px; margin-top: 36px; box-shadow: 0 8px 30px rgba(0,0,0,0.4);">
        <div style="margin-bottom: 18px;">
          <span class="editorial-badge" style="background: rgba(212, 175, 55, 0.15); border-color: var(--gold); color: var(--gold);">
            \${svgIcon('target', 14)} SECTION KNOWLEDGE CERTIFICATION
          </span>
          <h3 style="color: var(--champagne); font-size: 1.35rem; margin-top: 8px;">
            \${assessment.title || "Section Mastery Assessment"}
          </h3>
          <p style="color: var(--muted); font-size: 0.92rem; margin-top: 4px;">
            Demonstrate verified mastery of this lesson. You must score at least <strong>\${assessment.passingScore || 3} of 5 (60%)</strong> to pass and unlock the next stage.
          </p>
        </div>

        \${
          isCompleted
            ? \`
              <div id="secAssessmentPreviouslyPassedBanner" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="color: #34d399;">\${svgIcon('check', 24)}</span>
                  <div>
                    <div style="color: #34d399; font-weight: 700; font-size: 1.05rem;">Section Mastered & Verified!</div>
                    <div style="color: #a7f3d0; font-size: 0.85rem;">You cleared this assessment with a score of \${secScore !== undefined ? secScore : 5}/5.</div>
                  </div>
                </div>
                <button class="btn btn-outline" onclick="scrollToAssessmentForm()" style="font-size: 0.85rem;">
                  Retake for Practice
                </button>
              </div>
            \`
            : ""
        }

        <div id="secAssessmentResultBox" style="display: none;"></div>

        <form id="sectionAssessmentForm" onsubmit="event.preventDefault(); submitSectionAssessment();">
          \${qList.map((q, qIdx) => \`
            <div class="assessment-q-card" id="sec-q-card-\${qIdx}" style="background: #181820; border: 1px solid var(--charcoal-border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--gold); letter-spacing: 0.08em;">
                  Question \${qIdx + 1} of 5
                </span>
              </div>
              <h4 style="font-size: 1.02rem; color: var(--ivory); line-height: 1.6; margin-bottom: 14px;">\${q.q || q.question}</h4>
              <div class="quiz-options" style="display: flex; flex-direction: column; gap: 8px;">
                \${q.options.map((opt, optIdx) => \`
                  <label class="assessment-opt-label" id="sec-q-\${qIdx}-opt-\${optIdx}" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border: 1px solid var(--charcoal-border); border-radius: var(--radius-sm); cursor: pointer; transition: all 0.2s ease; background: rgba(255,255,255,0.015);">
                    <input type="radio" name="sec_assessment_q_\${qIdx}" value="\${optIdx}" style="margin-top: 3px; accent-color: var(--gold);">
                    <span style="font-size: 0.92rem; color: var(--ivory); line-height: 1.5;">\${opt}</span>
                  </label>
                \`).join("")}
              </div>
              <div class="q-explanation-box" id="sec-q-\${qIdx}-exp" style="display: none; margin-top: 10px; padding: 10px 14px; border-radius: 6px; font-size: 0.86rem;"></div>
            </div>
          \`).join("")}

          <div id="secAssessmentSubmitWrapper" style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 12px;">
            <button type="submit" class="btn btn-gold" id="btnSubmitSecAssessment" style="padding: 12px 28px; font-size: 0.95rem;">
              Submit Section Assessment &rarr;
            </button>
          </div>
        </form>
      </div>
    \`;
  }

  flowContainer.innerHTML = blocksHtml;

  // Hide legacy advance banner if present
  const oldBanner = document.getElementById("sectionCompleteBanner");
  if (oldBanner) oldBanner.style.display = "none";
}

function scrollToAssessmentForm() {
  const card = document.getElementById("sectionAssessmentCard");
  if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* -------------------------------------------------------------------------
 * SECTION ASSESSMENT EVALUATION (PASSING: 3/5)
 * ------------------------------------------------------------------------- */
function submitSectionAssessment() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeModuleIndex];
  const sec = mod.sections[state.activeSectionIndex];
  const assessment = sec.assessment || sec.test;

  if (!assessment || !assessment.questions) return;

  const questions = assessment.questions;
  let score = 0;
  let unansweredIndices = [];

  questions.forEach((q, idx) => {
    const selected = document.querySelector(\`input[name="sec_assessment_q_\${idx}"]:checked\`);
    if (!selected) {
      unansweredIndices.push(idx + 1);
    } else {
      const val = parseInt(selected.value, 10);
      const correctAns = (typeof q.answer === "number") ? q.answer : q.correctAnswer;
      if (val === correctAns) {
        score++;
      }
    }
  });

  if (unansweredIndices.length > 0) {
    showToast(\`Please answer all 5 questions before submitting. Unanswered: #\${unansweredIndices.join(", #")}\`, "alert");
    const firstUnanswered = document.getElementById(\`sec-q-card-\${unansweredIndices[0] - 1}\`);
    if (firstUnanswered) firstUnanswered.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const passingScore = assessment.passingScore || 3;
  const passed = score >= passingScore;

  // Reveal explanations and color codes on questions
  questions.forEach((q, idx) => {
    const selected = document.querySelector(\`input[name="sec_assessment_q_\${idx}"]:checked\`);
    const val = parseInt(selected.value, 10);
    const correctAns = (typeof q.answer === "number") ? q.answer : q.correctAnswer;
    const isQCorrect = val === correctAns;

    const expBox = document.getElementById(\`sec-q-\${idx}-exp\`);
    if (expBox) {
      expBox.style.display = "block";
      if (isQCorrect) {
        expBox.style.background = "rgba(16, 185, 129, 0.12)";
        expBox.style.border = "1px solid #10b981";
        expBox.style.color = "#a7f3d0";
        expBox.innerHTML = \`<strong>Correct!</strong> \${q.explanation || ""}\`;
      } else {
        expBox.style.background = "rgba(239, 68, 68, 0.12)";
        expBox.style.border = "1px solid #ef4444";
        expBox.style.color = "#fca5a5";
        expBox.innerHTML = \`<strong>Incorrect.</strong> \${q.explanation || ""}\`;
      }
    }
  });

  const resultBox = document.getElementById("secAssessmentResultBox");
  const submitWrapper = document.getElementById("secAssessmentSubmitWrapper");

  if (passed) {
    state.completedSections[sec.id] = true;
    state.sectionScores[sec.id] = score;
    saveState();

    if (submitWrapper) submitWrapper.style.display = "none";
    if (resultBox) {
      resultBox.style.display = "block";
      
      const isLastSecInMod = state.activeSectionIndex === mod.sections.length - 1;
      
      resultBox.innerHTML = \`
        <div class="assessment-result-banner passed" style="background: rgba(16, 185, 129, 0.14); border: 1px solid #10b981; border-radius: var(--radius-md); padding: 24px; text-align: center; margin-bottom: 24px;">
          <div style="color: #34d399; margin-bottom: 10px;">
            \${svgIcon('check', 44)}
          </div>
          <h3 style="color: #34d399; font-size: 1.45rem;">Section Assessment Passed!</h3>
          <div style="font-size: 2rem; font-weight: 800; color: #10b981; margin: 8px 0;">
            Score: \${score} / 5 (\${(score/5)*100}%)
          </div>
          <p style="color: #d1fae5; font-size: 0.95rem; max-width: 480px; margin: 0 auto 20px;">
            Outstanding craftsmanship! You have cleared this lesson's standards. The next phase of your journey is unlocked on your roadmap.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            \${
              isLastSecInMod
                ? \`<button class="btn btn-gold" onclick="openModuleAssessment(\${state.activeModuleIndex})">
                     Take Module \${mod.num} Assessment &rarr;
                   </button>\`
                : \`<button class="btn btn-gold" onclick="advanceToNextSection()">
                     Proceed to Next Section &rarr;
                   </button>\`
            }
            <button class="btn btn-outline" onclick="navigateTo('dashboard')">
              Curriculum Roadmap
            </button>
          </div>
        </div>
      \`;
      resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    showToast("Section Assessment Cleared!", "trophy");
  } else {
    // FAILED: Next section remains locked
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = \`
        <div class="assessment-result-banner failed" style="background: rgba(239, 68, 68, 0.14); border: 1px solid #ef4444; border-radius: var(--radius-md); padding: 24px; text-align: center; margin-bottom: 24px;">
          <div style="color: #ff6b6b; margin-bottom: 10px;">
            \${svgIcon('scales', 44)}
          </div>
          <h3 style="color: #ff8b8b; font-size: 1.4rem;">Assessment Not Passed</h3>
          <div style="font-size: 2rem; font-weight: 800; color: #ff6b6b; margin: 8px 0;">
            Score: \${score} / 5 (\${(score/5)*100}%)
          </div>
          <p style="color: #fca5a5; font-size: 0.95rem; max-width: 500px; margin: 0 auto 20px;">
            A passing score of at least <strong>3 out of 5</strong> is required to advance. Review the explanations above and retry the assessment.
          </p>
          <button class="btn btn-gold" onclick="retrySectionAssessment()">
            Retry Assessment ↻
          </button>
        </div>
      \`;
      resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    showToast(\`Score: \${score}/5. Passing score required: 3/5.\`, "alert");
  }
}

function retrySectionAssessment() {
  const form = document.getElementById("sectionAssessmentForm");
  if (form) form.reset();

  const resultBox = document.getElementById("secAssessmentResultBox");
  if (resultBox) {
    resultBox.style.display = "none";
    resultBox.innerHTML = "";
  }

  const submitWrapper = document.getElementById("secAssessmentSubmitWrapper");
  if (submitWrapper) submitWrapper.style.display = "flex";

  // Hide explanation boxes
  const exps = document.querySelectorAll(".q-explanation-box");
  exps.forEach(box => {
    box.style.display = "none";
    box.innerHTML = "";
  });

  const card = document.getElementById("sectionAssessmentCard");
  if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
}

function advanceToNextSection() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeModuleIndex];

  if (state.activeSectionIndex < mod.sections.length - 1) {
    state.activeSectionIndex++;
    saveState();
    renderSectionContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Finished last section of module -> open module assessment
    openModuleAssessment(state.activeModuleIndex);
  }
}

/* -------------------------------------------------------------------------
 * INTERACTIVE EXERCISE CRUCIBLE EVALUATOR
 * ------------------------------------------------------------------------- */
function evaluateExerciseOption(exId, selectedIdx) {
  const course = getActiveCourse();
  const mod = course.modules[state.activeModuleIndex];
  const sec = mod.sections[state.activeSectionIndex];

  // Find exercise block
  let exBlock = null;
  sec.content.forEach(b => {
    if ((b.type === "interactive_exercise" || b.type === "exercise") && (b.id === exId || !exBlock)) {
      exBlock = b;
    }
  });

  if (!exBlock || !exBlock.options) return;

  const option = exBlock.options[selectedIdx];
  const feedbackBox = document.getElementById(\`ex-feedback-\${exId}\`);
  const card = document.getElementById(\`exercise-card-\${exId}\`);

  // Clear previous highlights on this exercise's buttons
  const buttons = document.querySelectorAll(\`[id^="ex-\${exId}-opt-"]\`);
  buttons.forEach(btn => btn.classList.remove("correct-choice", "wrong-choice"));

  const clickedBtn = document.getElementById(\`ex-\${exId}-opt-\${selectedIdx}\`);

  if (option.correct) {
    if (clickedBtn) clickedBtn.classList.add("correct-choice");
    if (card) card.classList.add("solved");

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.className = "editorial-feedback-box show success";
      feedbackBox.innerHTML = \`
        <div style="display: flex; align-items: center; gap: 8px; color: #34d399; font-weight: 700; font-size: 1rem; margin-bottom: 6px;">
          \${svgIcon('check', 16)} Masterful Diagnosis!
        </div>
        <p style="color: #d1fae5; font-size: 0.9rem; line-height: 1.6;">\${option.feedback}</p>
        \${
          option.polishedText
            ? \`<div style="margin-top: 10px; padding: 10px 14px; background: rgba(16, 185, 129, 0.15); border-left: 3px solid #10b981; border-radius: 4px; font-style: italic; color: #a7f3d0;">
                 "\${option.polishedText}"
               </div>\`
            : ""
        }
      \`;
    }
    showToast("Craft challenge resolved with excellence!", "check");
  } else {
    if (clickedBtn) clickedBtn.classList.add("wrong-choice");
    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.className = "editorial-feedback-box show fail";
      feedbackBox.innerHTML = \`
        <div style="display: flex; align-items: center; gap: 8px; color: #ff8b8b; font-weight: 700; font-size: 1rem; margin-bottom: 6px;">
          \${svgIcon('alert', 16)} Editorial Revision Required
        </div>
        <p style="color: #fca5a5; font-size: 0.9rem; line-height: 1.6;">\${option.feedback}</p>
      \`;
    }
  }
}

/* -------------------------------------------------------------------------
 * VIEW 4: MODULE COMPREHENSIVE ASSESSMENT (PASSING: 4/5)
 * ------------------------------------------------------------------------- */
function renderModuleAssessment() {
  const course = getActiveCourse();
  if (!course.modules || !course.modules[state.activeAssessmentModIndex]) return;
  const mod = course.modules[state.activeAssessmentModIndex];

  const titleEl = document.getElementById("modAssessmentTitle");
  const descEl = document.getElementById("modAssessmentDesc");
  const passEl = document.getElementById("modAssessmentPassingLabel");
  const outcomeEl = document.getElementById("modAssessmentOutcomeLabel");

  if (titleEl) titleEl.textContent = \`Module \${mod.num} Comprehensive Assessment\`;
  if (descEl) descEl.textContent = \`Validate your mastery across all sections in "\${mod.title}". Achieving \${mod.passingScore || 4} of 5 (80%) unlocks the next module.\`;
  if (passEl) passEl.textContent = \`\${mod.passingScore || 4} of 5 (80%)\`;
  if (outcomeEl) outcomeEl.textContent = mod.num === course.modules.length ? "Final Capstone Exam Unlock" : \`Module \${mod.num + 1} Access\`;

  const qContainer = document.getElementById("moduleAssessmentQuestionsContainer");
  const resultBox = document.getElementById("modAssessmentResultBox");
  const submitWrapper = document.getElementById("modAssessmentSubmitWrapper");

  if (resultBox) resultBox.style.display = "none";
  if (submitWrapper) submitWrapper.style.display = "block";

  if (!qContainer || !mod.assessment || !mod.assessment.questions) return;

  qContainer.innerHTML = mod.assessment.questions.map((q, idx) => \`
    <div class="assessment-question-card" id="mod-q-card-\${idx}">
      <span class="q-number-pill">Question \${idx + 1} of 5</span>
      <h4 style="color: var(--champagne); font-size: 1.05rem; margin-top: 6px; line-height: 1.6;">\${q.q || q.question}</h4>
      <div class="exam-options-grid" style="margin-top: 14px;">
        \${q.options.map((opt, optIdx) => \`
          <label class="exam-opt-card" id="mod-q-\${idx}-opt-\${optIdx}">
            <input type="radio" name="mod_assessment_q_\${idx}" value="\${optIdx}">
            <span>\${opt}</span>
          </label>
        \`).join("")}
      </div>
    </div>
  \`).join("");
}

function submitModuleAssessment() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeAssessmentModIndex];
  const assessment = mod.assessment;
  if (!assessment || !assessment.questions) return;

  let score = 0;
  let allAnswered = true;

  assessment.questions.forEach((q, idx) => {
    const selected = document.querySelector(\`input[name="mod_assessment_q_\${idx}"]:checked\`);
    if (!selected) {
      allAnswered = false;
    } else {
      const val = parseInt(selected.value, 10);
      const correctAns = (typeof q.answer === "number") ? q.answer : q.correctAnswer;
      if (val === correctAns) score++;
    }
  });

  if (!allAnswered) {
    showToast("Please answer all 5 questions before submitting.", "alert");
    return;
  }

  const passingScore = mod.passingScore || 4;
  const passed = score >= passingScore;
  state.moduleScores[mod.id] = score;

  const resultBox = document.getElementById("modAssessmentResultBox");
  const submitWrapper = document.getElementById("modAssessmentSubmitWrapper");

  if (passed) {
    state.completedModules[mod.id] = true;
    saveState();

    if (submitWrapper) submitWrapper.style.display = "none";
    const isLastModule = state.activeAssessmentModIndex === course.modules.length - 1;

    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = \`
        <div style="margin-bottom: 14px; color: var(--gold); display: flex; justify-content: center;">
          \${svgIcon('trophy', 48)}
        </div>
        <h2 style="color: #34d399; font-size: 1.5rem;">Module \${mod.num} Assessment Passed!</h2>
        <div class="score-banner" style="color: #10b981; font-size: 2rem; font-weight: 800; margin: 12px 0;">
          Score: \${score} / 5 (\${(score/5)*100}%)
        </div>
        <p style="color: var(--ivory); font-size: 0.95rem; max-width: 500px; margin: 0 auto 24px;">
          \${
            isLastModule
              ? "Magnificent achievement! You have mastered all curriculum modules. The 50-Question Final Capstone Examination is now UNLOCKED on your roadmap."
              : \`Congratulations! You have demonstrated verified mastery of "\${mod.title}". Module \${mod.num + 1} is now unlocked.\`
          }
        </p>
        <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-gold" onclick="navigateTo('dashboard')">
            Curriculum Roadmap &rarr;
          </button>
          \${
            isLastModule
              ? \`<button class="btn btn-outline" onclick="navigateTo('exam')">
                   Take Capstone Exam &rarr;
                 </button>\`
              : \`<button class="btn btn-outline" onclick="openSection(\${state.activeAssessmentModIndex + 1}, 0)">
                   Begin Module \${mod.num + 1} &rarr;
                 </button>\`
          }
        </div>
      \`;
      resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    showToast(\`Module \${mod.num} Assessment Cleared! (\${score}/5)\`, "trophy");
  } else {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = \`
        <div style="margin-bottom: 14px; color: #ff8b8b; display: flex; justify-content: center;">
          \${svgIcon('scales', 48)}
        </div>
        <h2 style="color: #ff8b8b; font-size: 1.45rem;">Module Assessment Not Passed</h2>
        <div class="score-banner" style="color: #ff8b8b; font-size: 1.9rem; font-weight: 800; margin: 12px 0;">
          Score: \${score} / 5 (\${(score/5)*100}%)
        </div>
        <p style="color: var(--muted); font-size: 0.92rem; max-width: 480px; margin: 0 auto 20px;">
          Passing requires at least \${passingScore} of 5 (80%). Review the module lessons and retry the assessment.
        </p>
        <button class="btn btn-gold" onclick="renderModuleAssessment()">
          Retake Assessment Now ↻
        </button>
      \`;
      resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    showToast(\`Score: \${score}/5. Required: \${passingScore}/5 to pass.\`, "alert");
  }
}

/* -------------------------------------------------------------------------
 * VIEW 5: CAPSTONE BOARD EXAMINATION (50 QUESTIONS, PASSING: 45/50)
 * ------------------------------------------------------------------------- */
function renderExamScreen() {
  const course = getActiveCourse();
  if (!canTakeFinalExam()) {
    showToast("Final Capstone Exam is locked. Complete all modules first.", "lock");
    navigateTo("dashboard");
    return;
  }

  const exam = course.finalExam;
  const questionsContainer = document.getElementById("examQuestionsContainer");
  const resultBox = document.getElementById("examResultBox");
  const submitWrapper = document.getElementById("examSubmitWrapper");

  if (resultBox) resultBox.style.display = "none";
  if (submitWrapper) submitWrapper.style.display = "block";

  const passLabel = document.getElementById("examPassingScoreLabel");
  const countLabel = document.getElementById("examQuestionsCountLabel");
  if (passLabel) passLabel.textContent = \`\${exam.passingScore} of \${exam.questions.length} (\${Math.round((exam.passingScore/exam.questions.length)*100)}%)\`;
  if (countLabel) countLabel.textContent = \`\${exam.questions.length} Rigorous Problems\`;

  if (!questionsContainer) return;

  questionsContainer.innerHTML = exam.questions.map((q, idx) => \`
    <div class="exam-question-item" id="final-q-item-\${idx}">
      <span class="exam-q-number">Problem \${idx + 1} of \${exam.questions.length}</span>
      <h4 class="exam-q-text" style="line-height: 1.6;">\${q.q}</h4>
      <div class="exam-options-grid">
        \${q.options.map((opt, optIdx) => \`
          <label class="exam-opt-card" id="final-q-\${idx}-opt-\${optIdx}">
            <input type="radio" name="final_exam_q_\${idx}" value="\${optIdx}">
            <span>\${opt}</span>
          </label>
        \`).join("")}
      </div>
    </div>
  \`).join("");
}

function submitFinalExam() {
  const course = getActiveCourse();
  const exam = course.finalExam;
  let score = 0;
  let unansweredIndices = [];

  exam.questions.forEach((q, idx) => {
    const selected = document.querySelector(\`input[name="final_exam_q_\${idx}"]:checked\`);
    if (!selected) {
      unansweredIndices.push(idx + 1);
    } else {
      const val = parseInt(selected.value, 10);
      const correctAns = (typeof q.answer === "number") ? q.answer : q.correctAnswer;
      if (val === correctAns) score++;
    }
  });

  if (unansweredIndices.length > 0) {
    showToast(\`You have \${unansweredIndices.length} unanswered question(s). Complete all 50 before submitting.\`, "alert");
    const firstUnanswered = document.getElementById(\`final-q-item-\${unansweredIndices[0] - 1}\`);
    if (firstUnanswered) {
      firstUnanswered.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  const passed = score >= exam.passingScore;
  const resultBox = document.getElementById("examResultBox");
  const submitWrapper = document.getElementById("examSubmitWrapper");

  if (passed) {
    state.examState = {
      passed: true,
      score: score,
      timestamp: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    };
    saveState();

    if (submitWrapper) submitWrapper.style.display = "none";
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = \`
        <div style="margin-bottom: 16px; color: var(--gold); display: flex; justify-content: center;">
          \${svgIcon('graduation', 56)}
        </div>
        <h2 style="color: #34d399; font-size: 1.8rem;">Board Examination Cleared!</h2>
        <div class="score-banner" style="color: #10b981; font-size: 2.2rem; font-weight: 800; margin: 14px 0;">
          Score: \${score} / 50 (\${Math.round((score/50)*100)}%)
        </div>
        <p style="color: var(--ivory); font-size: 1rem; max-width: 550px; margin: 0 auto 24px; line-height: 1.6;">
          By order of the Editorial Directorate of Litdom Academy, having satisfied all examination standards with distinction, you are hereby conferred the credential of Master Editorial Fellow.
        </p>
        <button class="btn btn-gold" style="padding: 12px 28px; font-size: 1rem;" onclick="navigateTo('certificate')">
          View Master Certificate &rarr;
        </button>
      \`;
      resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    showToast("Master Certification Achieved!", "trophy");
  } else {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = \`
        <div style="margin-bottom: 16px; color: #ff8b8b; display: flex; justify-content: center;">
          \${svgIcon('scales', 56)}
        </div>
        <h2 style="color: #ff8b8b; font-size: 1.6rem;">Examination Not Passed</h2>
        <div class="score-banner" style="color: #ff8b8b; font-size: 2rem; font-weight: 800; margin: 14px 0;">
          Score: \${score} / 50 (Passing Requirement: \${exam.passingScore} / 50)
        </div>
        <p style="color: var(--muted); font-size: 0.95rem; max-width: 550px; margin: 0 auto 20px; line-height: 1.6;">
          The Board requires 90% (45/50) for professional credentialing. You scored \${score}/50. Review the curriculum modules and retake the examination.
        </p>
        <button class="btn btn-gold" onclick="renderExamScreen()">
          Retake Examination Now ↻
        </button>
      \`;
      resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    showToast(\`Score: \${score}/50. Required: 45/50.\`, "alert");
  }
}

/* -------------------------------------------------------------------------
 * VIEW 6: MASTER CREDENTIAL CERTIFICATE
 * ------------------------------------------------------------------------- */
function renderCertificate() {
  if (!state.examState.passed) {
    showToast("Certificate locked. Complete all modules and pass the Board Exam first.", "lock");
    navigateTo("dashboard");
    return;
  }

  const nameEl = document.getElementById("certLearnerName");
  const dateEl = document.getElementById("certDateIssued");
  const idEl = document.getElementById("certCredentialId") || document.getElementById("certVerificationCode");

  if (nameEl) nameEl.textContent = state.studentName || "Eleanor Vance";
  if (dateEl) dateEl.textContent = state.examState.timestamp || "October 2026";
  if (idEl) idEl.textContent = "LITDOM-" + Math.abs(hashCode((state.studentName || "scholar") + "master_editor")).toString(36).toUpperCase().padStart(8, "0");
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

/* -------------------------------------------------------------------------
 * UTILITIES & TOAST NOTIFICATIONS
 * ------------------------------------------------------------------------- */
function showToast(message, iconName = "sparkle") {
  const toast = document.getElementById("appToast");
  const msgEl = document.getElementById("toastMsg");
  const iconEl = document.getElementById("toastIcon");

  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) iconEl.innerHTML = svgIcon(iconName, 18);

  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function promptStudentNameChange() {
  const current = state.studentName || "Eleanor Vance";
  const newName = prompt("Enter your name for the Litdom Master Certificate:", current);
  if (newName && newName.trim()) {
    state.studentName = newName.trim();
    saveState();
    updateNavUser();
    if (state.currentView === "certificate") {
      renderCertificate();
    }
    showToast(\`Student name updated to \${state.studentName}\`, "check");
  }
}

function resetCourseProgressPrompt() {
  resetProgress();
}

/* -------------------------------------------------------------------------
 * INITIALIZATION ON DOM LOAD
 * ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  loadState();

  // Attach modal overlay click-to-close
  const modal = document.getElementById("pathModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closePathModal();
    });
  }

  // Initial navigation
  navigateTo(state.currentView || "hub");
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = { state, navigateTo, openSection, openModuleAssessment, submitSectionAssessment, submitModuleAssessment, submitFinalExam };
}
`;

fs.writeFileSync('litdom_engine.js', engineCode);
fs.writeFileSync('app/src/main/assets/litdom_engine.js', engineCode);
console.log('Successfully wrote updated litdom_engine.js to root and app/src/main/assets!');
