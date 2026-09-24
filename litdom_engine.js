/* =========================================================================
 * LITDOM ACADEMY - COMPREHENSIVE PROGRESSION & INTERACTION ENGINE
 * =========================================================================
 * 
 * WELCOME DEAR DEVELOPER / INSTRUCTOR!
 * This engine powers the entire learner journey across Litdom Academy.
 * The code is organized into 11 clearly designated regions below so you
 * can easily find, modify, add, remove, or duplicate any feature.
 * 
 * -------------------------------------------------------------------------
 * TABLE OF CONTENTS / CODE REGIONS:
 * -------------------------------------------------------------------------
 *   REGION 0: SVG ICON SYSTEM (ZERO EMOJIS, PURE VECTOR GRAPHICS)
 *   REGION 1: STATE MANAGEMENT & DATA PERSISTENCE
 *   REGION 2: CURRICULUM HELPERS (DYNAMIC SCALING FOR ANY COURSES/MODULES)
 *   REGION 3: VIEW NAVIGATION & ROUTING
 *   REGION 4: VIEW A - COURSE HUB & PATHWAY MODAL
 *   REGION 5: VIEW B - VISUAL ROADMAP JOURNEY MAP (DYNAMIC MODULES/SECTIONS)
 *   REGION 6: VIEW C - SECTION CONTENT, EDITABLE VIDEO TIMERS & PLAYERS
 *   REGION 7: INTERACTIVE EDITORIAL LABS (EMERALD GREEN SUCCESS ENGINE)
 *   REGION 8: SECTION KNOWLEDGE CHECKS & "MARK AS COMPLETE" GATE
 *   REGION 9: VIEW D - MODULE ASSESSMENTS (5-QUESTION EVALUATION)
 *   REGION 10: VIEW E - FINAL CAPSTONE EXAM & CERTIFICATION
 *   REGION 11: UTILITIES, AUDIO SIMULATOR & SVG TOAST NOTIFICATIONS
 * ========================================================================= */


/* =========================================================================
 * REGION 0: SVG ICON SYSTEM (ZERO EMOJIS, PURE VECTOR GRAPHICS)
 * ========================================================================= */
const LITDOM_ICONS = {
  quill: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  pencil: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`,
  book: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/></svg>`,
  award: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  clock: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  video: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,
  play: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
  pause: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
  replay: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
  check: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  lock: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  star: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  zap: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  headphones: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  search: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  target: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  alert: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  cross: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  scroll: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z"/><path d="M4 5v14a2 2 0 0 0 2 2h2"/><path d="M9 7h6"/><path d="M9 11h6"/></svg>`,
  scales: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  trophy: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  sparkle: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>`,
  graduation: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  sliders: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>`,
  sound: `<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`
};

/**
 * Returns an SVG icon string with customizable size.
 */
function svgIcon(name, size = 18) {
  let template = LITDOM_ICONS[name] || LITDOM_ICONS["sparkle"];
  return template.replace(/\{size\}/g, size);
}

/**
 * Formats integer seconds into MM:SS string.
 */
function formatSeconds(sec) {
  const s = Math.max(0, parseInt(sec, 10) || 0);
  const m = Math.floor(s / 60);
  const remS = s % 60;
  return `${m < 10 ? '0' + m : m}:${remS < 10 ? '0' + remS : remS}`;
}


/* =========================================================================
 * REGION 1: STATE MANAGEMENT & DATA PERSISTENCE
 * ========================================================================= */
const STORAGE_KEY = "litdom_academy_progression_v3";

let state = {
  currentView: "hub",
  selectedCourseId: "editor-academy",
  activeModuleIndex: 0,
  activeSectionIndex: 0,
  activeAssessmentModIndex: 0,
  studentName: "Eleanor Vance",
  completedSections: {},     // Map of sectionId -> boolean
  completedModules: {},      // Map of moduleId -> boolean
  completedParts: {},        // Map of partId -> boolean (Marked complete by student)
  completedVideos: {},       // Map of videoId -> boolean (Watched to end)
  completedExercises: {},    // Map of exerciseId -> boolean (Solved correctly)
  sectionTestPassed: {},     // Map of sectionId -> boolean (1-question test passed)
  moduleScores: {},          // Map of moduleId -> score (out of 5)
  customVideoSettings: {},   // Map of videoId -> { durationSeconds: number, videoUrl: string }
  examState: {
    passed: false,
    score: 0,
    timestamp: null
  }
};

/**
 * Loads saved state from localStorage or initializes default values.
 */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = Object.assign(state, parsed);
      if (!state.customVideoSettings) state.customVideoSettings = {};
      if (!state.completedParts) state.completedParts = {};
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
  updateNavUser();
}

/**
 * Persists the current state object to browser localStorage.
 */
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Storage save error:", e);
  }
  updateNavUser();
}

/**
 * Updates learner avatar and name in the top navigation bar.
 */
function updateNavUser() {
  const nameEl = document.getElementById("navLearnerName");
  const avatarEl = document.getElementById("navAvatar");
  if (nameEl) nameEl.textContent = state.studentName || "Scholar";
  if (avatarEl) avatarEl.textContent = (state.studentName || "E").charAt(0).toUpperCase();
}

/**
 * Prompts user to confirm resetting all progression, clearing storage.
 */
function resetProgress() {
  if (confirm("Reset all course progression, quiz attempts, video timers, and exam scores?")) {
    state.completedSections = {};
    state.completedModules = {};
    state.completedParts = {};
    state.completedVideos = {};
    state.completedExercises = {};
    state.sectionTestPassed = {};
    state.moduleScores = {};
    state.customVideoSettings = {};
    state.examState = {
      passed: false,
      score: 0,
      timestamp: null
    };
    saveState();
    showToast("All curriculum progress and timers have been reset.", "replay");
    navigateTo("hub");
  }
}


/* =========================================================================
 * REGION 2: CURRICULUM HELPERS (DYNAMIC SCALING FOR ANY COURSES/MODULES)
 * ========================================================================= */

function getActiveCourse() {
  const course = LITDOM_DATA.courses.find(c => c.id === state.selectedCourseId);
  return course || LITDOM_DATA.courses[0];
}

function isSectionCompleted(secId) {
  return !!state.completedSections[secId];
}

function isPartCompleted(secId, partId) {
  if (isSectionCompleted(secId)) return true;
  return !!(state.completedParts && state.completedParts[partId]);
}

function getSectionParts(sec) {
  const parts = [];
  (sec.content || []).forEach((block, idx) => {
    const partId = block.id || `${sec.id}-part-${idx}`;
    let title = block.title || `Part ${idx + 1}`;
    let typeName = "Reading Theory";
    let iconName = "book";

    if (block.type === "video") {
      typeName = "Masterclass Video";
      iconName = "video";
    } else if (block.type === "interactive_exercise" || block.type === "exercise") {
      typeName = "Editorial Crucible";
      iconName = "pencil";
    } else if (block.type === "audio") {
      typeName = "Audio Lecture";
      iconName = "headphones";
    } else if (block.type === "example") {
      typeName = "Comparative Analysis";
      iconName = "search";
    }

    parts.push({
      id: partId,
      index: idx,
      type: block.type || "text",
      typeName: typeName,
      iconName: iconName,
      title: title,
      block: block
    });
  });

  if (sec.test) {
    parts.push({
      id: `${sec.id}-quiz`,
      index: parts.length,
      type: "quiz",
      typeName: "Knowledge Check",
      iconName: "target",
      title: "Section Knowledge Verification",
      test: sec.test
    });
  }

  return parts;
}

function isModuleCompleted(modId) {
  return !!state.completedModules[modId];
}

function getSectionState(mIdx, sIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];
  const sec = mod.sections[sIdx];

  if (isSectionCompleted(sec.id)) return "completed";

  // First section of first module is available immediately
  if (mIdx === 0 && sIdx === 0) return "available";

  // If previous section in same module is completed, this section is available
  if (sIdx > 0) {
    const prevSec = mod.sections[sIdx - 1];
    return isSectionCompleted(prevSec.id) ? "available" : "locked";
  }

  // If first section of a subsequent module, previous module assessment must be passed
  if (mIdx > 0 && sIdx === 0) {
    const prevMod = course.modules[mIdx - 1];
    return isModuleCompleted(prevMod.id) ? "available" : "locked";
  }

  return "locked";
}

function canTakeModuleAssessment(mIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];
  return mod.sections.every(sec => isSectionCompleted(sec.id));
}

function getModuleState(mIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];

  if (isModuleCompleted(mod.id)) return "completed";
  if (mIdx === 0) return "active";

  const prevMod = course.modules[mIdx - 1];
  if (isModuleCompleted(prevMod.id)) return "active";

  return "locked";
}

function canTakeFinalExam() {
  const course = getActiveCourse();
  return course.modules.every(mod => isModuleCompleted(mod.id));
}


/* =========================================================================
 * REGION 3: VIEW NAVIGATION & ROUTING
 * ========================================================================= */

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
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.remove("active");
  });

  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Render view-specific content
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


/* =========================================================================
 * REGION 4: VIEW A - COURSE HUB & PATHWAY MODAL
 * ========================================================================= */

function renderHub() {
  const container = document.getElementById("courseCardsGrid") || document.getElementById("coursesContainer");
  if (!container) return;

  container.innerHTML = LITDOM_DATA.courses.map(course => `
    <div class="course-card" id="course-card-${course.id}">
      <div style="color: var(--gold); margin-bottom: 14px;">
        ${svgIcon(course.icon || 'quill', 34)}
      </div>
      <span class="path-tag active-tag" style="margin-bottom: 12px; display: inline-block;">${course.category}</span>
      <h3 style="margin-bottom: 8px;">${course.title}</h3>
      <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
        ${course.description}
      </p>
      
      <div style="font-size: 0.82rem; color: var(--champagne); margin-bottom: 20px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          ${svgIcon('book', 14)} ${course.modules.length} Modules
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          ${svgIcon('clock', 14)} ${course.duration}
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          ${svgIcon('award', 14)} Certified
        </span>
      </div>

      <button class="btn btn-gold" style="width: 100%;" onclick="openPathModal('${course.id}')">
        ${svgIcon('play', 13)} Start Learning &rarr;
      </button>
    </div>
  `).join("");
}

function openPathModal(courseId) {
  state.selectedCourseId = courseId || (LITDOM_DATA.courses[0] && LITDOM_DATA.courses[0].id) || "editor-academy";
  const course = getActiveCourse();

  const titleEl = document.getElementById("pathModalTitle") || document.getElementById("modalCourseTitle");
  const descEl = document.getElementById("pathModalDesc");
  if (titleEl) titleEl.textContent = course.title;
  if (descEl) descEl.textContent = `Choose your study mode for ${course.title}. You may switch or reset at any time.`;

  const modal = document.getElementById("pathModal");
  if (modal) {
    modal.classList.add("active");
    modal.classList.add("open");
  }
}

function closePathModal() {
  const modal = document.getElementById("pathModal");
  if (modal) {
    modal.classList.remove("active");
    modal.classList.remove("open");
  }
}

function selectPath(pathType) {
  closePathModal();
  showToast(`Selected ${pathType === "oneway" ? "Sequential Mastery" : "Practical Apprenticeship"} Pathway`, "sparkle");
  navigateTo("dashboard");
}


/* =========================================================================
 * REGION 5: VIEW B - VISUAL ROADMAP JOURNEY MAP (DYNAMIC MODULES/SECTIONS)
 * ========================================================================= */

function renderDashboard() {
  const course = getActiveCourse();

  // Update Header Banner
  const titleEl = document.getElementById("dashCourseTitle");
  const descEl = document.getElementById("dashCourseDesc");
  if (titleEl) titleEl.textContent = course.title;
  if (descEl) descEl.textContent = course.description;

  // Calculate Overall Progress
  let totalSections = 0;
  let clearedSections = 0;
  let clearedModules = 0;

  course.modules.forEach(m => {
    totalSections += m.sections.length;
    m.sections.forEach(s => {
      if (isSectionCompleted(s.id)) clearedSections++;
    });
    if (isModuleCompleted(m.id)) clearedModules++;
  });

  const pct = totalSections > 0 ? Math.round((clearedSections / totalSections) * 100) : 0;
  const pBar = document.getElementById("dashProgressBar");
  const pPct = document.getElementById("dashProgressPct");
  const counter = document.getElementById("dashStepsCounter");

  if (pBar) pBar.style.width = pct + "%";
  if (pPct) pPct.textContent = pct + "%";
  if (counter) counter.textContent = `${clearedModules} of ${course.modules.length} Modules Cleared (${clearedSections}/${totalSections} Sections)`;

  // Render Dynamic Journey Map
  const mapContainer = document.getElementById("journeyMapContainer");
  if (!mapContainer) return;

  let mapHtml = course.modules.map((mod, mIdx) => {
    const modState = getModuleState(mIdx);
    const modScore = state.moduleScores[mod.id];
    const canTestModule = canTakeModuleAssessment(mIdx);
    const isModDone = isModuleCompleted(mod.id);

    return `
      <div class="module-group ${modState}" id="module-group-${mod.id}">
        <div class="module-header-row">
          <div class="module-badge ${modState}">
            ${isModDone ? svgIcon('check', 14) : mod.num}
          </div>
          <div>
            <div style="font-size: 0.76rem; text-transform: uppercase; color: var(--gold); letter-spacing: 0.08em; font-weight: 700;">
              Module ${mod.num}
            </div>
            <h4 style="font-size: 1.15rem; color: var(--ivory);">${mod.title}</h4>
            <p style="font-size: 0.85rem; color: var(--muted); margin-top: 2px;">${mod.description}</p>
          </div>
        </div>

        <div class="sections-list">
          ${mod.sections.map((sec, sIdx) => {
            const secState = getSectionState(mIdx, sIdx);
            const isSecDone = isSectionCompleted(sec.id);
            const hasVideo = sec.content.some(b => b.type === "video");
            const hasEx = sec.content.some(b => b.type === "interactive_exercise" || b.type === "exercise");

            return `
              <div class="section-node ${secState}" id="sec-node-${sec.id}" onclick="openSection(${mIdx}, ${sIdx})" style="cursor: pointer;">
                <div class="node-status-icon">
                  ${isSecDone ? svgIcon('check', 14) : svgIcon('play', 12)}
                </div>
                <div class="node-text">
                  <h5>${sec.title}</h5>
                  <div class="node-meta">
                    <span style="display: inline-flex; align-items: center; gap: 5px;">
                      ${svgIcon('clock', 12)} ${sec.duration}
                    </span>
                    ${hasVideo ? `<span style="display: inline-flex; align-items: center; gap: 5px;">${svgIcon('video', 12)} Video</span>` : ""}
                    ${hasEx ? `<span style="display: inline-flex; align-items: center; gap: 5px;">${svgIcon('pencil', 12)} Exercise</span>` : ""}
                    ${isSecDone ? `<span style="color: #10b981; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">${svgIcon('check', 12)} Mastered</span>` : ""}
                  </div>
                </div>
                <div>
                  <button class="btn ${isSecDone ? 'btn-outline' : 'btn-gold'} node-action-btn" onclick="event.stopPropagation(); openSection(${mIdx}, ${sIdx})">
                    ${svgIcon('play', 12)} ${isSecDone ? "Review Lesson" : "Start Lesson"}
                  </button>
                </div>
              </div>
            `;
          }).join("")}

          <!-- Module Assessment Node -->
          <div class="section-node ${isModDone ? 'completed' : canTestModule ? 'available' : 'locked'}" style="background: rgba(212, 175, 55, 0.04); border-color: rgba(212, 175, 55, 0.3);">
            <div class="node-status-icon" style="border-color: var(--gold); color: var(--gold);">
              ${isModDone ? svgIcon('star', 14) : canTestModule ? svgIcon('scroll', 14) : svgIcon('lock', 14)}
            </div>
            <div class="node-text">
              <h5 style="color: var(--champagne);">Module ${mod.num} Comprehensive Assessment</h5>
              <div class="node-meta">
                <span>5 Questions • 80% Passing (4/5)</span>
                ${modScore !== undefined ? `<span style="color: #10b981; font-weight: 700;">Score: ${modScore}/5</span>` : ""}
              </div>
            </div>
            <div>
              ${
                canTestModule
                  ? `<button class="btn btn-gold node-action-btn" onclick="openModuleAssessment(${mIdx})">
                       ${isModDone ? "Retake" : "Take Exam"}
                     </button>`
                  : `<button class="btn btn-outline node-action-btn" disabled style="opacity: 0.4; cursor: not-allowed;">
                       Complete Sections First
                     </button>`
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Final Exam Milestone Card
  const examUnlocked = canTakeFinalExam();
  mapHtml += `
    <div class="exam-milestone-card" id="finalExamMilestone">
      <div>
        <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--gold); letter-spacing: 0.1em; font-weight: 700;">
          CAPSTONE MILESTONE
        </div>
        <h3 style="color: var(--champagne); font-size: 1.35rem; margin-top: 4px;">
          The Editorial Board Final Examination
        </h3>
        <p style="color: var(--ivory); font-size: 0.9rem; max-width: 520px; margin-top: 6px;">
          A rigorous 50-question board certification covering all 5 modules. Requires 90% (45/50) to earn the Litdom Master Editor Credential.
        </p>
      </div>
      <div>
        ${
          examUnlocked
            ? `<button class="btn btn-gold" onclick="navigateTo('exam')">
                 ${state.examState.passed ? "View Credential" : "Take Capstone Exam &rarr;"}
               </button>`
            : `<button class="btn btn-outline" disabled style="opacity: 0.4; cursor: not-allowed;">
                 <span style="display: inline-flex; align-items: center; gap: 6px;">
                   ${svgIcon('lock', 13)} Complete All 5 Modules
                 </span>
               </button>`
        }
      </div>
    </div>
  `;

  mapContainer.innerHTML = mapHtml;
}

function resumeCurrentLesson() {
  const course = getActiveCourse();
  for (let mIdx = 0; mIdx < course.modules.length; mIdx++) {
    const mod = course.modules[mIdx];
    for (let sIdx = 0; sIdx < mod.sections.length; sIdx++) {
      const sec = mod.sections[sIdx];
      if (!isSectionCompleted(sec.id)) {
        openSection(mIdx, sIdx);
        return;
      }
    }
  }
  // If all completed, open first section for review
  openSection(0, 0);
}

function openSection(mIdx, sIdx) {
  state.activeModuleIndex = mIdx;
  state.activeSectionIndex = sIdx;
  saveState();
  navigateTo("content");
}


/* =========================================================================
 * REGION 6: VIEW C - SECTION CONTENT, EDITABLE VIDEO TIMERS & PLAYERS
 * ========================================================================= */

// Dictionary holding active timers for each video
const videoTimers = {};

/**
 * Renders the sleek, non-overflowing Part Header Bar
 */
function renderPartHeaderBar(partNumber, totalParts, typeLabel, iconName, partId, isPartDone) {
  return `
    <div class="part-header-bar">
      <div class="part-header-left">
        <span class="part-index-pill">
          ${svgIcon(iconName || 'book', 13)} PART ${partNumber} OF ${totalParts}: ${typeLabel.toUpperCase()}
        </span>
      </div>
      <div class="part-header-right">
        <span class="part-status-pill ${isPartDone ? 'completed' : 'pending'}" id="part-status-pill-${partId}">
          ${isPartDone ? `${svgIcon('check', 11)} Completed` : 'Pending'}
        </span>
      </div>
    </div>
  `;
}

/**
 * Renders the dedicated, prestigious Part Action Box containing the verification button
 */
function renderPartActionBox(secId, partId, partNumber, totalParts, typeName, isPartDone, customPrompt) {
  const prompt = customPrompt || (isPartDone
    ? "Requirement satisfied for this lesson milestone."
    : `Finished reviewing this ${typeName.toLowerCase()}? Mark this part as complete to satisfy lesson clearance:`);

  return `
    <div class="part-action-box ${isPartDone ? 'completed' : ''}" id="part-action-box-${partId}">
      <div class="part-action-info">
        <div class="part-action-status-icon">
          ${isPartDone ? svgIcon('check', 18) : svgIcon('target', 18)}
        </div>
        <div class="part-action-text-group">
          <div class="part-action-title">
            ${isPartDone ? `Part ${partNumber} Complete & Verified` : `Mark Part ${partNumber} Complete`}
          </div>
          <div class="part-action-subtitle" id="label-part-footer-${partId}">
            ${prompt}
          </div>
        </div>
      </div>
      <div class="part-action-btn-wrapper">
        <button class="btn ${isPartDone ? 'btn-gold' : 'btn-outline'} part-box-btn ${isPartDone ? 'completed' : ''}"
                id="btn-part-${partId}"
                onclick="togglePartComplete('${secId}', '${partId}', event)">
          ${isPartDone ? `${svgIcon('check', 14)} Completed` : `${svgIcon('check', 14)} Mark Complete`}
        </button>
      </div>
    </div>
  `;
}

function renderSectionContent() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeModuleIndex];
  const sec = mod.sections[state.activeSectionIndex];
  const isCompleted = isSectionCompleted(sec.id);

  // Update header text
  const modLabel = document.getElementById("contentModuleLabel");
  const secTitle = document.getElementById("contentSectionTitle");
  const secDesc = document.getElementById("contentSectionDesc");
  const breadcrumb = document.getElementById("contentBreadcrumb");

  if (modLabel) modLabel.textContent = `Module ${mod.num} • Section ${state.activeSectionIndex + 1}`;
  if (secTitle) secTitle.textContent = sec.title;
  if (secDesc) secDesc.textContent = sec.summary;
  if (breadcrumb) breadcrumb.textContent = sec.title;

  const flowContainer = document.getElementById("contentBlocksFlow");
  if (!flowContainer) return;

  const parts = getSectionParts(sec);
  const totalParts = parts.length;

  // Render all media and editorial content blocks
  let blocksHtml = sec.content.map((block, bIdx) => {
    const part = parts[bIdx] || { id: block.id || `${sec.id}-part-${bIdx}`, typeName: "Part", iconName: "book" };
    const partId = part.id;
    const isPartDone = isPartCompleted(sec.id, partId);

    switch (block.type) {
      case "text":
        return `
          <div class="content-block-card" id="part-card-${partId}">
            ${renderPartHeaderBar(bIdx + 1, totalParts, "Reading Theory", "book", partId, isPartDone)}

            <h4>${block.title}</h4>
            <div style="font-size: 0.95rem; line-height: 1.8; color: var(--ivory); margin-top: 10px;">
              ${block.content}
            </div>

            ${renderPartActionBox(sec.id, partId, bIdx + 1, totalParts, "Reading Theory", isPartDone)}
          </div>
        `;

      case "video": {
        const vidId = block.id || `${sec.id}-vid`;
        const isWatched = !!state.completedVideos[vidId] || isPartDone;
        const custom = (state.customVideoSettings && state.customVideoSettings[vidId]) || {};
        const duration = custom.durationSeconds || block.durationSeconds || 20;
        const videoUrl = custom.videoUrl !== undefined ? custom.videoUrl : (block.videoUrl || "");

        // Determine media player type
        let viewportHtml = "";
        const isDirectVideo = videoUrl && (videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm") || videoUrl.startsWith("blob:") || videoUrl.includes("commondatastorage.googleapis.com"));
        const isEmbed = videoUrl && (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") || videoUrl.includes("vimeo.com"));

        if (isDirectVideo) {
          viewportHtml = `
            <div style="position: relative; width: 100%; height: 280px; background: #000; border-radius: 6px; overflow: hidden;">
              <video id="vid-media-el-${vidId}" src="${videoUrl}" controls playsinline style="width: 100%; height: 100%; object-fit: contain;"></video>
            </div>
          `;
        } else if (isEmbed) {
          let embedSrc = videoUrl;
          if (videoUrl.includes("watch?v=")) {
            embedSrc = videoUrl.replace("watch?v=", "embed/");
          } else if (videoUrl.includes("youtu.be/")) {
            embedSrc = videoUrl.replace("youtu.be/", "www.youtube.com/embed/");
          }
          viewportHtml = `
            <div style="position: relative; width: 100%; height: 280px; background: #000; border-radius: 6px; overflow: hidden;">
              <iframe src="${embedSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;"></iframe>
            </div>
          `;
        } else {
          // Luxury simulated masterclass player
          viewportHtml = `
            <div class="video-player-viewport">
              <button class="video-play-overlay-btn" id="vid-play-btn-${vidId}" onclick="toggleVideoPlayback('${vidId}', ${duration})" title="Play Lecture">
                ${isWatched ? svgIcon('replay', 24) : svgIcon('play', 24)}
              </button>
              <div style="font-size: 0.92rem; color: var(--champagne); margin-top: 12px; font-weight: 600;">
                ${block.instructor || "Dean Julian Sterling"}
              </div>
              <div style="font-size: 0.78rem; color: var(--muted); margin-top: 2px;">
                ${block.badge || "Litdom Studio Master Lecture"}
              </div>
              ${videoUrl ? `<div style="font-size: 0.75rem; color: var(--gold); margin-top: 6px;">Source: ${videoUrl}</div>` : ''}
            </div>
          `;
        }

        return `
          <div class="video-card-container" id="video-card-${vidId}">
            <!-- Part Header Bar -->
            ${renderPartHeaderBar(bIdx + 1, totalParts, "Masterclass Video", "video", vidId, isPartDone)}

            <!-- Card Sub-header -->
            <div style="padding: 6px 20px 0;">
              <span class="editorial-badge ${isWatched ? 'solved' : ''}">
                <span style="display: inline-flex; align-items: center; gap: 5px;">
                  ${isWatched ? `${svgIcon('check', 13)} VIDEO VERIFIED` : `${svgIcon('video', 13)} LECTURE REQUIREMENT`}
                </span>
              </span>
              <h4 style="margin-top: 6px; font-size: 1.15rem;">${block.title}</h4>
              <p style="font-size: 0.85rem; color: var(--muted); margin: 4px 0 10px;">${block.caption}</p>
            </div>

            <!-- Video Configuration Drawer (Editable by Instructor) -->
            <div class="video-config-drawer" id="vid-config-${vidId}" style="display: none;">
              <div class="video-config-title">
                ${svgIcon('sliders', 14)} Video Settings & Timer Configuration
              </div>
              <p class="video-config-hint">
                Set how long learners must watch before the section unlocks, and optionally paste your own video URL (MP4, YouTube, or Vimeo).
              </p>

              <div class="video-config-grid">
                <div class="video-config-field" style="flex: 1; min-width: 240px;">
                  <label>Watch Timer Duration (Seconds):</label>
                  <div style="display: flex; gap: 8px; align-items: center;">
                    <input type="number" class="video-input-field" id="vid-input-duration-${vidId}" value="${duration}" min="5" max="7200" oninput="updateDurationHelper('${vidId}')" style="width: 110px;">
                    <span id="vid-duration-helper-${vidId}" style="font-size: 0.85rem; color: var(--gold); font-weight: 700;">
                      ${formatSeconds(duration)}
                    </span>
                  </div>

                  <!-- Quick Presets -->
                  <div style="display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap;">
                    <span style="font-size: 0.72rem; color: var(--muted); align-self: center;">Presets:</span>
                    <button type="button" class="preset-btn" onclick="applyDurationPreset('${vidId}', 10)">10s</button>
                    <button type="button" class="preset-btn" onclick="applyDurationPreset('${vidId}', 30)">30s</button>
                    <button type="button" class="preset-btn" onclick="applyDurationPreset('${vidId}', 60)">1 min</button>
                    <button type="button" class="preset-btn" onclick="applyDurationPreset('${vidId}', 180)">3 min</button>
                    <button type="button" class="preset-btn" onclick="applyDurationPreset('${vidId}', 300)">5 min</button>
                  </div>
                </div>

                <div class="video-config-field" style="flex: 2; min-width: 260px;">
                  <label>Custom Video / Embed URL (Optional):</label>
                  <input type="text" class="video-input-field" id="vid-input-url-${vidId}" value="${videoUrl}" placeholder="https://example.com/video.mp4 or YouTube URL">
                  <span style="font-size: 0.72rem; color: var(--muted); margin-top: 4px;">
                    Leave blank to use the built-in Masterclass simulator.
                  </span>
                </div>
              </div>

              <div style="display: flex; gap: 10px; margin-top: 14px; justify-content: flex-end; flex-wrap: wrap;">
                <button class="btn btn-outline" style="font-size: 0.78rem; padding: 6px 14px;" onclick="resetVideoSettings('${vidId}', ${block.durationSeconds || 20})">
                  Reset Default
                </button>
                <button class="btn btn-gold" style="font-size: 0.78rem; padding: 6px 16px;" onclick="saveVideoSettings('${vidId}')">
                  ${svgIcon('check', 13)} Save & Apply
                </button>
              </div>
            </div>

            <!-- Video Player Viewport -->
            ${viewportHtml}

            <!-- Contained Video Media Control Box -->
            <div class="video-media-control-box">
              <!-- Row 1: Full-width Progress Bar + Live Countdown Badge -->
              <div class="video-progress-row">
                <div class="video-progress-bar-bg">
                  <div class="video-progress-bar-fill ${isWatched ? 'finished' : ''}" id="vid-progress-${vidId}" style="width: ${isWatched ? '100%' : '0%'};"></div>
                </div>
                <div class="video-countdown-pill ${isWatched ? 'completed' : ''}" id="vid-badge-${vidId}">
                  <span style="display: inline-flex; align-items: center; gap: 5px;">
                    ${isWatched ? `${svgIcon('check', 13)} Lecture Watched` : `${svgIcon('clock', 13)} ${formatSeconds(duration)} remaining`}
                  </span>
                </div>
              </div>

              <!-- Row 2: Play, Fast-Forward, Settings Buttons -->
              <div class="video-buttons-row">
                <div class="video-buttons-left">
                  <button class="btn btn-outline video-action-btn" onclick="toggleVideoPlayback('${vidId}', ${duration})">
                    <span id="vid-ctrl-text-${vidId}" style="display: inline-flex; align-items: center; gap: 6px;">
                      ${svgIcon('play', 12)} Play
                    </span>
                  </button>
                  <button class="btn btn-outline video-action-btn" style="color: var(--gold);" title="Fast-forward preview for instructors" onclick="fastForwardVideo('${vidId}')">
                    ${svgIcon('zap', 12)} Fast-Forward
                  </button>
                </div>
                <div class="video-buttons-right">
                  <button class="btn btn-outline video-action-btn" onclick="toggleVideoEditor('${vidId}')" title="Configure custom watch timer and media URL">
                    ${svgIcon('sliders', 12)} Timer Settings
                  </button>
                </div>
              </div>
            </div>

            <!-- Contained Part Completion Action Box -->
            <div style="padding: 0 16px 16px;">
              ${renderPartActionBox(sec.id, vidId, bIdx + 1, totalParts, "Video Lecture", isPartDone, isWatched ? "Video lecture completed and verified." : "Watch this master lecture and mark completion to advance:")}
            </div>
          </div>
        `;
      }

      case "interactive_exercise":
      case "exercise": {
        const exId = block.id || `${sec.id}-ex`;
        const isSolved = !!state.completedExercises[exId] || isPartDone;

        return `
          <div class="interactive-editorial-card ${isSolved ? 'solved' : ''}" id="exercise-card-${exId}">
            ${renderPartHeaderBar(bIdx + 1, totalParts, "Editorial Crucible", "pencil", exId, isPartDone)}

            <div class="editorial-badge ${isSolved ? 'solved' : ''}" id="ex-badge-${exId}">
              <span style="display: inline-flex; align-items: center; gap: 5px;">
                ${isSolved ? `${svgIcon('check', 13)} EDITORIAL EXERCISE CLEARED` : `${svgIcon('pencil', 13)} ${block.category || 'LINE EDITING CRUCIBLE'}`}
              </span>
            </div>
            
            <h4 style="margin-top: 6px; font-size: 1.15rem; color: var(--ivory);">${block.title}</h4>
            <p style="font-size: 0.9rem; color: var(--muted); margin: 8px 0 12px; line-height: 1.6;">${block.instructions}</p>

            <!-- Raw Draft Sentence -->
            <div class="interactive-sentence-box" id="ex-draft-${exId}">
              <div style="font-size: 0.74rem; text-transform: uppercase; color: var(--gold); letter-spacing: 0.08em; font-family: sans-serif; margin-bottom: 6px;">
                Raw Manuscript Draft:
              </div>
              <div style="font-style: italic;">"${block.draft || 'The sentence was written hurriedly by the author.'}"</div>
            </div>

            <!-- Multiple Choice Diagnosis Options -->
            <div class="editorial-options-grid">
              ${(block.options || []).map((opt, optIdx) => `
                <button class="editorial-choice-btn ${isSolved && opt.correct ? 'correct-choice' : ''}" 
                        id="ex-${exId}-opt-${optIdx}"
                        onclick="evaluateExerciseOption('${exId}', ${optIdx})">
                  <span style="font-weight: 700; color: var(--gold);">${String.fromCharCode(65 + optIdx)}.</span>
                  <span>${opt.text}</span>
                </button>
              `).join("")}
            </div>

            <!-- Feedback Box -->
            <div class="editorial-feedback-box ${isSolved ? 'show success' : ''}" id="ex-feedback-${exId}">
              ${
                isSolved
                  ? `<div style="display: flex; align-items: center; gap: 6px; color: #34d399; font-weight: 700;">${svgIcon('check', 14)} Masterful Edit! You correctly resolved this craft challenge.</div>`
                  : ""
              }
            </div>

            <!-- Contained Part Completion Action Box -->
            ${renderPartActionBox(sec.id, exId, bIdx + 1, totalParts, "Editorial Exercise", isPartDone, isSolved ? "Editorial exercise resolved with craft excellence." : "Resolve this exercise and mark completion to advance:")}
          </div>
        `;
      }

      case "audio":
        return `
          <div class="content-block-card" id="part-card-${partId}">
            ${renderPartHeaderBar(bIdx + 1, totalParts, "Audio Masterclass", "headphones", partId, isPartDone)}

            <h4 style="display: flex; align-items: center; gap: 8px;">
              ${svgIcon('headphones', 16)} ${block.title}
            </h4>
            <p style="font-size: 0.88rem; color: var(--muted); margin: 6px 0 14px;">${block.caption}</p>
            <div style="background: #111116; border: 1px solid var(--charcoal-border); border-radius: var(--radius-sm); padding: 14px; display: flex; align-items: center; gap: 16px;">
              <button class="btn btn-gold" style="border-radius: 50%; width: 44px; height: 44px; padding: 0; display: flex; align-items: center; justify-content: center;" onclick="toggleAudioDemo(this)">
                ${svgIcon('play', 14)}
              </button>
              <div style="flex-grow: 1;">
                <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--muted); margin-bottom: 4px;">
                  <span>Litdom Audio Masterclass</span>
                  <span>04:15</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                  <div style="width: 38%; height: 100%; background: var(--gold);"></div>
                </div>
              </div>
            </div>

            <!-- Contained Part Completion Action Box -->
            ${renderPartActionBox(sec.id, partId, bIdx + 1, totalParts, "Audio Masterclass", isPartDone)}
          </div>
        `;

      case "example":
        return `
          <div class="example-block-card" id="part-card-${partId}">
            ${renderPartHeaderBar(bIdx + 1, totalParts, "Comparative Analysis", "search", partId, isPartDone)}

            <h4 style="display: flex; align-items: center; gap: 8px;">
              ${svgIcon('search', 16)} ${block.title}
            </h4>
            <div class="example-compare-grid">
              <div class="example-pane before">
                <span style="font-size: 0.75rem; font-weight: 700; color: #ff6b6b; text-transform: uppercase;">Raw Draft</span>
                <p style="font-size: 0.9rem; color: var(--ivory); margin-top: 6px; font-style: italic;">"${block.before}"</p>
              </div>
              <div class="example-pane after">
                <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; text-transform: uppercase;">Polished Version</span>
                <p style="font-size: 0.9rem; color: #a7f3d0; margin-top: 6px; font-weight: 500;">"${block.after}"</p>
              </div>
            </div>
            <p style="font-size: 0.85rem; color: var(--muted); margin-top: 10px;">${block.explanation}</p>

            <!-- Contained Part Completion Action Box -->
            ${renderPartActionBox(sec.id, partId, bIdx + 1, totalParts, "Comparative Analysis", isPartDone)}
          </div>
        `;

      default:
        return `
          <div class="content-block-card" id="part-card-${partId}">
            ${renderPartHeaderBar(bIdx + 1, totalParts, "Curriculum Material", "book", partId, isPartDone)}
            <h4>${block.title || 'Curriculum Material'}</h4>
            <p style="font-size: 0.88rem; color: var(--muted);">${block.caption || ''}</p>

            <!-- Contained Part Completion Action Box -->
            ${renderPartActionBox(sec.id, partId, bIdx + 1, totalParts, "Curriculum Material", isPartDone)}
          </div>
        `;
    }
  }).join("");

  // Append Section Knowledge Test Card as final Part
  if (sec.test) {
    const test = sec.test;
    const quizPartId = `${sec.id}-quiz`;
    const isQuizDone = isPartCompleted(sec.id, quizPartId);
    const quizPartIdx = totalParts;

    blocksHtml += `
      <div class="quiz-container" id="sectionQuizContainer">
        ${renderPartHeaderBar(quizPartIdx, totalParts, "Knowledge Verification", "target", quizPartId, isQuizDone)}

        <div style="font-size: 0.82rem; color: var(--muted); margin-bottom: 10px;">
          Select the correct editorial response or mark this verification complete:
        </div>

        <div class="quiz-question-text">${test.question}</div>

        <div class="quiz-options" id="sectionOptionsList">
          ${test.options.map((opt, optIdx) => `
            <button class="quiz-option-btn ${isQuizDone && optIdx === test.correctAnswer ? 'correct' : ''}" 
                    id="sec-opt-${optIdx}"
                    onclick="handleSectionAnswer(${optIdx})">
              <span style="font-weight: 700; color: var(--gold);">${String.fromCharCode(65 + optIdx)}.</span>
              <span>${opt}</span>
            </button>
          `).join("")}
        </div>

        <div id="sectionFeedbackArea" style="display: ${isQuizDone ? 'block' : 'none'};">
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-sm); padding: 14px 18px; color: #d1fae5; margin-top: 14px;">
            <div style="color: #34d399; font-weight: 700; margin-bottom: 4px; font-size: 0.98rem; display: flex; align-items: center; gap: 6px;">
              ${svgIcon('check', 14)} Knowledge Check Cleared!
            </div>
            <p style="font-size: 0.88rem; color: #a7f3d0;">${test.explanation}</p>
          </div>
        </div>

        <!-- Contained Part Completion Action Box -->
        ${renderPartActionBox(sec.id, quizPartId, quizPartIdx, totalParts, "Knowledge Verification", isQuizDone, isQuizDone ? "Section knowledge test passed and verified." : "Select the correct option or mark this test part as complete:")}
      </div>
    `;
  }

  // Append Requirements Checklist & "Mark as Complete" Action Bar
  blocksHtml += renderSectionChecklistHtml(sec);

  flowContainer.innerHTML = blocksHtml;

  // Update top progress bar and checklist
  refreshSectionProgress();

  // Hide the old advance banner if it exists
  const oldBanner = document.getElementById("sectionCompleteBanner");
  if (oldBanner) oldBanner.style.display = "none";
}

/* -------------------------------------------------------------------------
 * Video Customization Handlers (Editable Timers & Media Sources)
 * ------------------------------------------------------------------------- */

function toggleVideoEditor(vidId) {
  const drawer = document.getElementById(`vid-config-${vidId}`);
  if (!drawer) return;
  if (drawer.style.display === "none" || !drawer.style.display) {
    drawer.style.display = "block";
    drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    drawer.style.display = "none";
  }
}

function applyDurationPreset(vidId, seconds) {
  const input = document.getElementById(`vid-input-duration-${vidId}`);
  const helper = document.getElementById(`vid-duration-helper-${vidId}`);
  if (input) input.value = seconds;
  if (helper) helper.textContent = formatSeconds(seconds);
}

function updateDurationHelper(vidId) {
  const input = document.getElementById(`vid-input-duration-${vidId}`);
  const helper = document.getElementById(`vid-duration-helper-${vidId}`);
  if (input && helper) {
    helper.textContent = formatSeconds(input.value);
  }
}

function saveVideoSettings(vidId) {
  const durationInput = document.getElementById(`vid-input-duration-${vidId}`);
  const urlInput = document.getElementById(`vid-input-url-${vidId}`);

  let newDuration = parseInt(durationInput ? durationInput.value : 20, 10);
  if (isNaN(newDuration) || newDuration < 5) newDuration = 5;
  if (newDuration > 7200) newDuration = 7200; // max 2 hours

  const newUrl = urlInput ? urlInput.value.trim() : "";

  if (!state.customVideoSettings) state.customVideoSettings = {};
  state.customVideoSettings[vidId] = {
    durationSeconds: newDuration,
    videoUrl: newUrl
  };

  // Clear current running interval for this video so new duration takes effect
  if (videoTimers[vidId]) {
    if (videoTimers[vidId].interval) clearInterval(videoTimers[vidId].interval);
    delete videoTimers[vidId];
  }

  saveState();
  renderSectionContent();
  showToast(`Watch timer updated to ${newDuration}s (${formatSeconds(newDuration)})`, "check");
}

function resetVideoSettings(vidId, defaultDuration) {
  if (state.customVideoSettings && state.customVideoSettings[vidId]) {
    delete state.customVideoSettings[vidId];
    saveState();
  }
  if (videoTimers[vidId]) {
    if (videoTimers[vidId].interval) clearInterval(videoTimers[vidId].interval);
    delete videoTimers[vidId];
  }
  renderSectionContent();
  showToast(`Restored default timer (${defaultDuration}s)`, "replay");
}

/**
 * Handles play/pause and countdown ticking for a video.
 */
function toggleVideoPlayback(vidId, defaultSeconds) {
  const custom = (state.customVideoSettings && state.customVideoSettings[vidId]) || {};
  const duration = custom.durationSeconds || defaultSeconds || 20;

  if (!videoTimers[vidId]) {
    videoTimers[vidId] = {
      remaining: duration,
      total: duration,
      isPlaying: false,
      interval: null
    };
  }

  const timerObj = videoTimers[vidId];
  const videoMedia = document.getElementById(`vid-media-el-${vidId}`);

  if (timerObj.isPlaying) {
    // Pause
    clearInterval(timerObj.interval);
    timerObj.isPlaying = false;
    if (videoMedia && !videoMedia.paused) {
      try { videoMedia.pause(); } catch(e) {}
    }
    updateVideoUI(vidId, false);
    showToast("Video paused.", "pause");
  } else {
    // Start or Resume
    timerObj.isPlaying = true;
    if (videoMedia && videoMedia.paused) {
      try { videoMedia.play(); } catch(e) {}
    }
    showToast(`Video playing... Watch timer active (${formatSeconds(timerObj.remaining)} remaining)`, "video");
    updateVideoUI(vidId, true);

    timerObj.interval = setInterval(() => {
      timerObj.remaining--;

      const pct = Math.min(100, Math.round(((timerObj.total - timerObj.remaining) / timerObj.total) * 100));
      const fillEl = document.getElementById(`vid-progress-${vidId}`);
      const badgeEl = document.getElementById(`vid-badge-${vidId}`);

      if (fillEl) fillEl.style.width = pct + "%";
      if (badgeEl) {
        badgeEl.innerHTML = `
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            ${svgIcon('clock', 13)} ${formatSeconds(timerObj.remaining)} remaining
          </span>
        `;
      }

      if (timerObj.remaining <= 0) {
        // FINISHED!
        clearInterval(timerObj.interval);
        timerObj.isPlaying = false;
        state.completedVideos[vidId] = true;
        if (!state.completedParts) state.completedParts = {};
        state.completedParts[vidId] = true;
        saveState();

        if (fillEl) {
          fillEl.style.width = "100%";
          fillEl.classList.add("finished");
        }
        if (badgeEl) {
          badgeEl.className = "video-countdown-pill completed";
          badgeEl.innerHTML = `
            <span style="display: inline-flex; align-items: center; gap: 5px;">
              ${svgIcon('check', 13)} Lecture Watched & Verified
            </span>
          `;
        }

        updateVideoUI(vidId, false);
        updatePartButtonsDOM(vidId, true);
        showToast("Video lecture completed! Part requirement satisfied.", "check");
        refreshSectionProgress();
      }
    }, 1000);
  }
}

/**
 * Allows instant completion of the video for testing or instructors.
 */
function fastForwardVideo(vidId) {
  if (videoTimers[vidId] && videoTimers[vidId].interval) {
    clearInterval(videoTimers[vidId].interval);
  }
  state.completedVideos[vidId] = true;
  if (!state.completedParts) state.completedParts = {};
  state.completedParts[vidId] = true;
  saveState();

  const fillEl = document.getElementById(`vid-progress-${vidId}`);
  const badgeEl = document.getElementById(`vid-badge-${vidId}`);
  if (fillEl) {
    fillEl.style.width = "100%";
    fillEl.classList.add("finished");
  }
  if (badgeEl) {
    badgeEl.className = "video-countdown-pill completed";
    badgeEl.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 5px;">
        ${svgIcon('check', 13)} Lecture Watched & Verified
      </span>
    `;
  }

  updatePartButtonsDOM(vidId, true);
  showToast("Video verified! Part marked complete.", "check");
  refreshSectionProgress();
}

function updateVideoUI(vidId, isPlaying) {
  const btn = document.getElementById(`vid-play-btn-${vidId}`);
  const ctrlText = document.getElementById(`vid-ctrl-text-${vidId}`);
  if (btn) btn.innerHTML = isPlaying ? svgIcon('pause', 24) : svgIcon('play', 24);
  if (ctrlText) {
    ctrlText.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 6px;">
        ${isPlaying ? svgIcon('pause', 12) : svgIcon('play', 12)} ${isPlaying ? "Pause" : "Play"}
      </span>
    `;
  }
}


/* =========================================================================
 * REGION 7: INTERACTIVE EDITORIAL LABS (EMERALD GREEN SUCCESS ENGINE)
 * ========================================================================= */

function evaluateExerciseOption(exId, chosenIdx) {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const block = sec.content.find(b => (b.id || `${sec.id}-ex`) === exId);

  if (!block || !block.options) return;

  const chosenOpt = block.options[chosenIdx];
  const cardEl = document.getElementById(`exercise-card-${exId}`);
  const badgeEl = document.getElementById(`ex-badge-${exId}`);
  const draftEl = document.getElementById(`ex-draft-${exId}`);
  const feedbackEl = document.getElementById(`ex-feedback-${exId}`);
  const allOptionBtns = cardEl ? cardEl.querySelectorAll(".editorial-choice-btn") : [];
  const selectedBtn = document.getElementById(`ex-${exId}-opt-${chosenIdx}`);

  // Reset previously applied choice classes
  allOptionBtns.forEach(btn => {
    btn.classList.remove("selected", "correct-choice", "wrong-choice");
  });

  if (chosenOpt.correct) {
    // CORRECT ANSWER -> TURN EMERALD GREEN!
    state.completedExercises[exId] = true;
    if (!state.completedParts) state.completedParts = {};
    state.completedParts[exId] = true;
    saveState();

    if (selectedBtn) selectedBtn.classList.add("correct-choice");
    if (cardEl) cardEl.classList.add("solved");
    if (badgeEl) {
      badgeEl.classList.add("solved");
      badgeEl.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 5px;">
          ${svgIcon('check', 13)} EDITORIAL EXERCISE CLEARED
        </span>
      `;
    }

    if (draftEl && chosenOpt.polishedText) {
      draftEl.innerHTML = `
        <div style="font-size: 0.74rem; text-transform: uppercase; color: #10b981; letter-spacing: 0.08em; font-family: sans-serif; margin-bottom: 6px; display: flex; align-items: center; gap: 5px;">
          ${svgIcon('check', 12)} Masterfully Polished Sentence:
        </div>
        <div style="color: #a7f3d0; font-weight: 500;">"${chosenOpt.polishedText}"</div>
      `;
    }

    if (feedbackEl) {
      feedbackEl.className = "editorial-feedback-box show success";
      feedbackEl.innerHTML = `
        <div style="font-weight: 700; color: #34d399; margin-bottom: 4px; font-size: 0.98rem; display: flex; align-items: center; gap: 6px;">
          ${svgIcon('check', 14)} Masterful Editorial Diagnosis!
        </div>
        <div>${chosenOpt.feedback}</div>
      `;
    }

    updatePartButtonsDOM(exId, true);
    showToast("Masterful edit! Exercise solved and verified in green.", "sparkle");
    refreshSectionProgress();
  } else {
    // INCORRECT OPTION
    if (selectedBtn) selectedBtn.classList.add("wrong-choice");
    if (feedbackEl) {
      feedbackEl.className = "editorial-feedback-box show error";
      feedbackEl.innerHTML = `
        <div style="font-weight: 700; color: #f87171; margin-bottom: 4px; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
          ${svgIcon('cross', 14)} Craft Diagnosis Note
        </div>
        <div>${chosenOpt.feedback}</div>
        <div style="margin-top: 6px; font-size: 0.82rem; color: var(--muted);">Review the editorial principle and select the elevated alternative.</div>
      `;
    }

    showToast("Re-evaluate the craft diagnosis and try again.", "alert");
  }
}


/* =========================================================================
 * REGION 8: SECTION KNOWLEDGE CHECKS, PART COMPLETION & ADVANCEMENT GATE
 * ========================================================================= */

/**
 * Toggles granular completion of any individual part (text block, video, exercise, quiz).
 */
function togglePartComplete(secId, partId, event) {
  if (event) {
    try { event.stopPropagation(); } catch (e) {}
  }
  if (!state.completedParts) state.completedParts = {};

  const current = !!state.completedParts[partId];
  const newState = !current;
  state.completedParts[partId] = newState;

  // Sync related subsystem state if applicable
  if (partId.endsWith("-vid") || partId.includes("-vid")) {
    state.completedVideos[partId] = newState;
  }
  if (partId.endsWith("-ex") || partId.includes("-ex")) {
    state.completedExercises[partId] = newState;
  }
  if (partId.endsWith("-quiz")) {
    state.sectionTestPassed[secId] = newState;
  }

  saveState();

  if (newState) {
    showToast("Part marked as complete!", "check");
  } else {
    showToast("Part marked as pending.", "sliders");
  }

  updatePartButtonsDOM(partId, newState);
  refreshSectionProgress();
}

/**
 * Updates all DOM elements reflecting a part's completion status.
 */
function updatePartButtonsDOM(partId, isDone) {
  const btnPart = document.getElementById(`btn-part-${partId}`);
  const btnFooter = document.getElementById(`btn-part-footer-${partId}`);
  const btnChk = document.getElementById(`btn-chk-${partId}`);
  const labelFooter = document.getElementById(`label-part-footer-${partId}`);
  const chkRow = document.getElementById(`checklist-row-${partId}`);
  const actionBox = document.getElementById(`part-action-box-${partId}`);
  const statusPill = document.getElementById(`part-status-pill-${partId}`);
  const card = document.getElementById(`part-card-${partId}`) || 
               document.getElementById(`video-card-${partId}`) || 
               document.getElementById(`exercise-card-${partId}`) || 
               document.getElementById("sectionQuizContainer");

  // Update Part Action Box button
  [btnPart, btnFooter].forEach(btn => {
    if (!btn) return;
    if (isDone) {
      btn.className = "btn btn-gold part-box-btn completed";
      btn.innerHTML = `${svgIcon('check', 14)} Completed`;
    } else {
      btn.className = "btn btn-outline part-box-btn";
      btn.innerHTML = `${svgIcon('check', 14)} Mark Complete`;
    }
  });

  // Update Checklist row button
  if (btnChk) {
    if (isDone) {
      btnChk.className = "btn btn-gold checklist-part-btn completed";
      btnChk.innerHTML = `${svgIcon('check', 13)} Completed`;
    } else {
      btnChk.className = "btn btn-outline checklist-part-btn";
      btnChk.innerHTML = `${svgIcon('check', 13)} Mark Complete`;
    }
  }

  // Update Part Action Box container styling & crest icon
  if (actionBox) {
    if (isDone) {
      actionBox.classList.add("completed");
    } else {
      actionBox.classList.remove("completed");
    }
    const iconEl = actionBox.querySelector(".part-action-status-icon");
    if (iconEl) {
      iconEl.innerHTML = isDone ? svgIcon('check', 18) : svgIcon('target', 18);
    }
    const titleEl = actionBox.querySelector(".part-action-title");
    if (titleEl) {
      titleEl.textContent = isDone ? "Part Complete & Verified" : "Mark Part Complete";
    }
  }

  // Update Top Header Status Pill
  if (statusPill) {
    if (isDone) {
      statusPill.className = "part-status-pill completed";
      statusPill.innerHTML = `${svgIcon('check', 11)} Completed`;
    } else {
      statusPill.className = "part-status-pill pending";
      statusPill.textContent = "Pending";
    }
  }

  if (labelFooter) {
    labelFooter.textContent = isDone ? "Requirement satisfied for this lesson milestone." : "Review this material and mark complete to satisfy lesson clearance:";
  }
  if (chkRow) {
    if (isDone) {
      chkRow.classList.add("completed");
      const icon = chkRow.querySelector(".checklist-row-icon");
      if (icon) {
        icon.classList.add("completed");
        icon.innerHTML = svgIcon('check', 18);
      }
      const st = chkRow.querySelector(".checklist-status-text");
      if (st) {
        st.className = "checklist-status-text completed";
        st.textContent = "Completed";
      }
    } else {
      chkRow.classList.remove("completed");
      const icon = chkRow.querySelector(".checklist-row-icon");
      if (icon) {
        icon.classList.remove("completed");
      }
      const st = chkRow.querySelector(".checklist-status-text");
      if (st) {
        st.className = "checklist-status-text pending";
        st.textContent = "Pending Clearance";
      }
    }
  }
  if (card) {
    if (isDone) card.classList.add("part-cleared");
    else card.classList.remove("part-cleared");
  }
}

/**
 * Handles section quiz answer clicks.
 */
function handleSectionAnswer(selectedIdx) {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const test = sec.test;
  const quizPartId = `${sec.id}-quiz`;

  const feedback = document.getElementById("sectionFeedbackArea");
  const options = document.querySelectorAll("#sectionOptionsList .quiz-option-btn");

  options.forEach((el, idx) => {
    el.classList.remove("selected", "correct", "wrong");
    if (idx === selectedIdx) el.classList.add("selected");
  });

  if (selectedIdx === test.correctAnswer) {
    // CORRECT!
    state.sectionTestPassed[sec.id] = true;
    if (!state.completedParts) state.completedParts = {};
    state.completedParts[quizPartId] = true;
    saveState();

    const selectedEl = document.getElementById(`sec-opt-${selectedIdx}`);
    if (selectedEl) selectedEl.classList.add("correct");

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-sm); padding: 14px 18px; color: #d1fae5; margin-top: 14px;">
          <div style="color: #34d399; font-weight: 700; margin-bottom: 4px; font-size: 1rem; display: flex; align-items: center; gap: 6px;">
            ${svgIcon('check', 14)} Correct Answer! Knowledge Check Cleared
          </div>
          <p style="font-size: 0.88rem; color: #a7f3d0;">${test.explanation}</p>
        </div>
      `;
    }

    updatePartButtonsDOM(quizPartId, true);
    showToast("Knowledge check passed! Part marked complete.", "check");
    refreshSectionProgress();
  } else {
    // INCORRECT!
    const selectedEl = document.getElementById(`sec-opt-${selectedIdx}`);
    if (selectedEl) selectedEl.classList.add("wrong");

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; border-radius: var(--radius-sm); padding: 14px 18px; color: #fee2e2; margin-top: 14px;">
          <div style="color: #f87171; font-weight: 700; margin-bottom: 4px; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            ${svgIcon('cross', 14)} Incorrect Answer
          </div>
          <p style="font-size: 0.88rem; color: #fca5a5; margin-bottom: 8px;">
            Review the section material above and choose the correct answer.
          </p>
        </div>
      `;
    }

    showToast("Incorrect. Re-read the section material and try again.", "alert");
  }
}

/**
 * Checks if ALL individual parts for the given section are marked complete.
 */
function areSectionRequirementsMet(sec) {
  const parts = getSectionParts(sec);
  const totalCount = parts.length;
  let completedCount = 0;
  const pendingParts = [];

  parts.forEach((part, idx) => {
    const done = isPartCompleted(sec.id, part.id);
    if (done) {
      completedCount++;
    } else {
      pendingParts.push({ ...part, partNumber: idx + 1 });
    }
  });

  const allMet = totalCount > 0 ? (completedCount === totalCount) : true;

  return {
    allMet: allMet || isSectionCompleted(sec.id),
    totalCount: totalCount,
    completedCount: completedCount,
    pendingParts: pendingParts,
    parts: parts
  };
}

/**
 * Renders the Section Completion Checklist HTML block.
 */
function renderSectionChecklistHtml(sec) {
  const reqs = areSectionRequirementsMet(sec);
  const isCompleted = isSectionCompleted(sec.id);
  const isReady = reqs.allMet || isCompleted;

  return `
    <div class="section-checklist-box" id="sectionChecklistCard">
      <div class="section-checklist-header">
        <div>
          <span class="checklist-protocol-tag">
            SECTION CLEARANCE PROTOCOL
          </span>
          <h4 class="checklist-title">
            Section Parts Checklist (${reqs.completedCount} of ${reqs.totalCount} Completed)
          </h4>
        </div>
        <div class="checklist-counter-badge ${isReady ? 'ready' : 'pending'}">
          ${isReady ? `${svgIcon('check', 16)} All Parts Cleared` : `${svgIcon('clock', 16)} ${reqs.totalCount - reqs.completedCount} Pending`}
        </div>
      </div>

      <p class="checklist-subtitle">
        Every part in this section must be completed and marked complete before you can unlock and advance to the next lesson.
      </p>

      <div class="checklist-items-grid">
        ${reqs.parts.map((p, idx) => {
          const pDone = isPartCompleted(sec.id, p.id);
          return `
            <div class="checklist-row ${pDone ? 'completed' : ''}" id="checklist-row-${p.id}">
              <div class="checklist-row-main" onclick="scrollToPart('${p.id}')">
                <span class="checklist-row-icon ${pDone ? 'completed' : ''}">
                  ${pDone ? svgIcon('check', 18) : svgIcon(p.iconName || 'book', 18)}
                </span>
                <div class="checklist-row-info">
                  <div class="checklist-row-title">
                    Part ${idx + 1}: ${p.title}
                  </div>
                  <div class="checklist-row-meta">
                    <span class="checklist-type-pill">${p.typeName}</span>
                    <span class="checklist-status-text ${pDone ? 'completed' : 'pending'}">
                      ${pDone ? 'Completed' : 'Pending Clearance'}
                    </span>
                  </div>
                </div>
              </div>

              <div class="checklist-row-btn-box">
                <button class="btn ${pDone ? 'btn-gold' : 'btn-outline'} checklist-part-btn ${pDone ? 'completed' : ''}" 
                        onclick="event.stopPropagation(); togglePartComplete('${sec.id}', '${p.id}', event)"
                        id="btn-chk-${p.id}">
                  ${pDone ? `${svgIcon('check', 13)} Completed` : `${svgIcon('check', 13)} Mark Complete`}
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Mark as Complete & Advance Button Box -->
      <div class="checklist-advance-box">
        <button class="btn-complete-level ${isReady ? 'ready' : 'locked'}" 
                id="btnMarkSectionComplete"
                onclick="${isReady ? 'markSectionCompleteAndAdvance()' : 'explainPendingRequirements()'}">
          ${
            isCompleted
              ? `${svgIcon('check', 18)} Lesson Cleared • Move to Next Lesson &rarr;`
              : isReady
              ? `${svgIcon('sparkle', 18)} All Parts Complete • Advance to Next Lesson &rarr;`
              : `${svgIcon('lock', 16)} Complete All Parts to Unlock Next Lesson (${reqs.completedCount}/${reqs.totalCount} Cleared)`
          }
        </button>
      </div>
    </div>
  `;
}

/**
 * Re-renders only the checklist widget so user sees live updates.
 */
function refreshSectionChecklist() {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const oldBox = document.getElementById("sectionChecklistCard");
  if (!oldBox) return;

  const temp = document.createElement("div");
  temp.innerHTML = renderSectionChecklistHtml(sec);
  oldBox.parentNode.replaceChild(temp.firstElementChild, oldBox);
}

/**
 * Re-calculates and updates progress bar and checklist in the current section view.
 */
function refreshSectionProgress() {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const reqs = areSectionRequirementsMet(sec);

  // Update top Section progress bar
  const pct = reqs.totalCount > 0 ? Math.round((reqs.completedCount / reqs.totalCount) * 100) : 0;
  const pBar = document.getElementById("sectionProgressBar");
  const pPct = document.getElementById("sectionProgressPct");
  if (pBar) pBar.style.width = pct + "%";
  if (pPct) pPct.textContent = `${pct}% (${reqs.completedCount}/${reqs.totalCount} Parts Cleared)`;

  refreshSectionChecklist();
}

/**
 * Scrolls smoothly to a target part inside the section.
 */
function scrollToPart(partId) {
  const el = document.getElementById(`part-card-${partId}`) || 
             document.getElementById(`video-card-${partId}`) || 
             document.getElementById(`exercise-card-${partId}`) || 
             document.getElementById("sectionQuizContainer");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.style.boxShadow = "0 0 0 2px var(--gold)";
    setTimeout(() => { el.style.boxShadow = ""; }, 2000);
  }
}

/**
 * Called when learner clicks "Mark Level as Complete & Advance".
 */
function markSectionCompleteAndAdvance() {
  const course = getActiveCourse();
  const currentMod = course.modules[state.activeModuleIndex];
  const currentSec = currentMod.sections[state.activeSectionIndex];

  // Verify that all parts are indeed completed
  const reqs = areSectionRequirementsMet(currentSec);
  if (!reqs.allMet && !isSectionCompleted(currentSec.id)) {
    explainPendingRequirements();
    return;
  }

  state.completedSections[currentSec.id] = true;
  saveState();

  showToast("Section cleared and unlocked on the roadmap.", "trophy");

  if (state.activeSectionIndex < currentMod.sections.length - 1) {
    state.activeSectionIndex++;
    saveState();
    renderSectionContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // All sections in this module cleared -> Advance to Module Assessment!
    showToast(`All sections cleared! Opening Module ${currentMod.num} Assessment.`, "scroll");
    state.activeAssessmentModIndex = state.activeModuleIndex;
    saveState();
    navigateTo("module-assessment");
  }
}

function explainPendingRequirements() {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const reqs = areSectionRequirementsMet(sec);

  if (reqs.pendingParts.length > 0) {
    const listStr = reqs.pendingParts.map(p => `Part ${p.partNumber} (${p.typeName})`).join(", ");
    showToast(`Incomplete: Please finish and mark ${listStr} as complete to advance.`, "alert");

    // Smoothly scroll to the first unfinished part so learner can immediately complete it
    const firstPending = reqs.pendingParts[0];
    scrollToPart(firstPending.id);
  } else {
    showToast("Please mark all parts of this section as complete before moving to the next lesson.", "alert");
  }
}


/* =========================================================================
 * REGION 9: VIEW D - MODULE ASSESSMENTS (5-QUESTION EVALUATION)
 * ========================================================================= */

function renderModuleAssessment() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeAssessmentModIndex];

  const titleEl = document.getElementById("modAssessmentTitle");
  const descEl = document.getElementById("modAssessmentDesc");
  const passEl = document.getElementById("modAssessmentPassingLabel");
  const outcomeEl = document.getElementById("modAssessmentOutcomeLabel");

  if (titleEl) titleEl.textContent = `Module ${mod.num} Comprehensive Assessment`;
  if (descEl) descEl.textContent = `Validate your mastery across all sections in "${mod.title}". Achieving 4 of 5 (80%) unlocks the next module.`;
  if (passEl) passEl.textContent = `${mod.passingScore} of ${mod.assessment.questions.length} (80%)`;
  if (outcomeEl) outcomeEl.textContent = mod.num === 5 ? "Final Exam Unlock" : `Module ${mod.num + 1} Access`;

  const qContainer = document.getElementById("moduleAssessmentQuestionsContainer");
  const resultBox = document.getElementById("modAssessmentResultBox");
  const submitWrapper = document.getElementById("modAssessmentSubmitWrapper");

  if (resultBox) resultBox.style.display = "none";
  if (submitWrapper) submitWrapper.style.display = "block";

  if (!qContainer) return;

  qContainer.innerHTML = mod.assessment.questions.map((q, idx) => `
    <div class="assessment-question-card" id="mod-q-card-${idx}">
      <span class="q-number-pill">Question ${idx + 1} of 5</span>
      <h4 style="color: var(--champagne); font-size: 1.05rem; margin-top: 6px;">${q.q}</h4>
      <div class="exam-options-grid" style="margin-top: 14px;">
        ${q.options.map((opt, optIdx) => `
          <label class="exam-opt-card" id="mod-q-${idx}-opt-${optIdx}">
            <input type="radio" name="mod_assessment_q_${idx}" value="${optIdx}">
            <span>${opt}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function submitModuleAssessment() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeAssessmentModIndex];
  const assessment = mod.assessment;
  let score = 0;
  let allAnswered = true;

  assessment.questions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="mod_assessment_q_${idx}"]:checked`);
    if (!selected) {
      allAnswered = false;
    } else if (parseInt(selected.value, 10) === q.answer) {
      score++;
    }
  });

  if (!allAnswered) {
    showToast("Please answer all 5 questions before submitting.", "alert");
    return;
  }

  const passed = score >= mod.passingScore;
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
      resultBox.innerHTML = `
        <div style="margin-bottom: 14px; color: var(--gold); display: flex; justify-content: center;">
          ${svgIcon('trophy', 48)}
        </div>
        <h2 style="color: #34d399; font-size: 1.5rem;">Module ${mod.num} Assessment Passed!</h2>
        <div class="score-banner" style="color: #10b981; font-size: 2rem; font-weight: 800; margin: 12px 0;">
          Score: ${score} / 5 (${(score/5)*100}%)
        </div>
        <p style="color: var(--ivory); font-size: 0.95rem; max-width: 500px; margin: 0 auto 24px;">
          ${
            isLastModule
              ? "Magnificent achievement! You have mastered all 5 curriculum modules. The 50-Question Final Capstone Examination is now UNLOCKED on your roadmap."
              : `Congratulations! You have demonstrated verified mastery of "${mod.title}". Module ${mod.num + 1} is now unlocked.`
          }
        </p>
        <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-outline" onclick="navigateTo('dashboard')">
            Curriculum Roadmap &rarr;
          </button>
          ${
            isLastModule
              ? `<button class="btn btn-gold" onclick="navigateTo('exam')">Begin Final Capstone Exam (50 Questions) &rarr;</button>`
              : `<button class="btn btn-gold" onclick="proceedToNextModule()">Proceed to Module ${mod.num + 1} &rarr;</button>`
          }
        </div>
      `;
    }

    showToast(`Module ${mod.num} cleared with ${score}/5!`, "trophy");
  } else {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="margin-bottom: 14px; color: #ff8b8b; display: flex; justify-content: center;">
          ${svgIcon('alert', 48)}
        </div>
        <h2 style="color: #ff8b8b; font-size: 1.4rem;">Assessment Not Yet Passed</h2>
        <div class="score-banner" style="color: #ff8b8b; font-size: 1.8rem; font-weight: 800; margin: 12px 0;">
          Score: ${score} / 5 (Required: ${mod.passingScore} / 5)
        </div>
        <p style="color: var(--muted); font-size: 0.92rem; max-width: 500px; margin: 0 auto 20px;">
          To ensure uncompromising standards, you must achieve at least ${mod.passingScore}/5 to unlock the next module. Review the module sections and retry.
        </p>
        <button class="btn btn-gold" onclick="renderModuleAssessment()">
          Retry Assessment Now ↻
        </button>
      `;
    }

    showToast(`Score: ${score}/5. Required: ${mod.passingScore}/5.`, "alert");
  }
}

function proceedToNextModule() {
  state.activeModuleIndex = state.activeAssessmentModIndex + 1;
  state.activeSectionIndex = 0;
  saveState();
  navigateTo("content");
}


/* =========================================================================
 * REGION 10: VIEW E - FINAL CAPSTONE EXAM & CERTIFICATION
 * ========================================================================= */

function renderExamScreen() {
  const course = getActiveCourse();
  if (!canTakeFinalExam()) {
    showToast("Final Exam locked. Complete all 5 modules first.", "lock");
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
  if (passLabel) passLabel.textContent = `${exam.passingScore} of 50 (${(exam.passingScore/50)*100}%)`;
  if (countLabel) countLabel.textContent = `${exam.questions.length} Rigorous Problems`;

  if (!questionsContainer) return;

  questionsContainer.innerHTML = exam.questions.map((q, idx) => `
    <div class="exam-question-item" id="final-q-item-${idx}">
      <span class="exam-q-number">Problem ${idx + 1} of 50</span>
      <h4 class="exam-q-text">${q.q}</h4>
      <div class="exam-options-grid">
        ${q.options.map((opt, optIdx) => `
          <label class="exam-opt-card" id="final-q-${idx}-opt-${optIdx}">
            <input type="radio" name="final_exam_q_${idx}" value="${optIdx}">
            <span>${opt}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function submitFinalExam() {
  const course = getActiveCourse();
  const exam = course.finalExam;
  let score = 0;
  let unansweredIndices = [];

  exam.questions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="final_exam_q_${idx}"]:checked`);
    if (!selected) {
      unansweredIndices.push(idx + 1);
    } else if (parseInt(selected.value, 10) === q.answer) {
      score++;
    }
  });

  if (unansweredIndices.length > 0) {
    showToast(`You have ${unansweredIndices.length} unanswered question(s). Complete all 50.`, "alert");
    const firstUnanswered = document.getElementById(`final-q-item-${unansweredIndices[0] - 1}`);
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
      resultBox.innerHTML = `
        <div style="margin-bottom: 16px; color: var(--gold); display: flex; justify-content: center;">
          ${svgIcon('graduation', 56)}
        </div>
        <h2 style="color: #34d399; font-size: 1.8rem;">Board Examination Cleared!</h2>
        <div class="score-banner" style="color: #10b981; font-size: 2.2rem; font-weight: 800; margin: 14px 0;">
          Score: ${score} / 50 (${Math.round((score/50)*100)}%)
        </div>
        <p style="color: var(--ivory); font-size: 1rem; max-width: 550px; margin: 0 auto 24px;">
          By order of the Editorial Directorate of Litdom Academy, having satisfied all examination standards, you are hereby conferred the credential of Master Editorial Fellow.
        </p>
        <button class="btn btn-gold" style="padding: 12px 24px; font-size: 1rem;" onclick="navigateTo('certificate')">
          View Master Certificate &rarr;
        </button>
      `;
    }

    showToast("Master Certification Achieved!", "trophy");
  } else {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="margin-bottom: 16px; color: #ff8b8b; display: flex; justify-content: center;">
          ${svgIcon('scales', 56)}
        </div>
        <h2 style="color: #ff8b8b; font-size: 1.6rem;">Examination Not Passed</h2>
        <div class="score-banner" style="color: #ff8b8b; font-size: 2rem; font-weight: 800; margin: 14px 0;">
          Score: ${score} / 50 (Passing: ${exam.passingScore} / 50)
        </div>
        <p style="color: var(--muted); font-size: 0.95rem; max-width: 550px; margin: 0 auto 20px;">
          The Board requires 90% (45/50) for professional licensure. You scored ${score}/50. Review the curriculum modules and retake the examination.
        </p>
        <button class="btn btn-gold" onclick="renderExamScreen()">
          Retake Examination Now ↻
        </button>
      `;
    }

    showToast(`Score: ${score}/50. Required: 45/50.`, "alert");
  }
}

function renderCertificate() {
  if (!state.examState.passed) {
    showToast("Certificate locked. Complete and pass the Board Exam first.", "lock");
    navigateTo("dashboard");
    return;
  }

  const nameEl = document.getElementById("certLearnerName");
  const dateEl = document.getElementById("certDateIssued");
  const idEl = document.getElementById("certCredentialId") || document.getElementById("certVerificationCode");

  if (nameEl) nameEl.textContent = state.studentName || "Eleanor Vance";
  if (dateEl) dateEl.textContent = state.examState.timestamp || "October 2026";
  if (idEl) idEl.textContent = "LITDOM-" + Math.abs(hashCode((state.studentName || "scholar") + "cert")).toString(36).toUpperCase().padStart(8, "0");
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}


/* =========================================================================
 * REGION 11: UTILITIES, AUDIO SIMULATOR & SVG TOAST NOTIFICATIONS
 * ========================================================================= */

function toggleAudioDemo(btn) {
  const isPlaying = btn.getAttribute("data-playing") === "true";
  if (!isPlaying) {
    btn.setAttribute("data-playing", "true");
    btn.innerHTML = svgIcon('pause', 14);
    showToast("Audio masterclass playing...", "sound");
  } else {
    btn.setAttribute("data-playing", "false");
    btn.innerHTML = svgIcon('play', 14);
    showToast("Audio paused.", "pause");
  }
}

function showToast(msg, iconKey = "sparkle") {
  const el = document.getElementById("toastMsg");
  const txt = document.getElementById("toastText");
  const icn = document.getElementById("toastIcon");
  if (!el || !txt) return;

  txt.textContent = msg;
  if (icn) {
    let key = iconKey;
    if (key === "trophy" || key === "reward") key = "trophy";
    else if (key === "video" || key === "lecture") key = "video";
    else if (key === "check" || key === "solved") key = "check";
    else if (key === "alert" || key === "warning") key = "alert";
    else if (key === "zap" || key === "fast") key = "zap";
    else if (key === "scroll" || key === "exam") key = "scroll";
    else if (key === "lock") key = "lock";
    else if (key === "sound" || key === "audio") key = "sound";
    else if (key === "pause") key = "pause";
    else if (key === "graduation" || key === "certificate") key = "graduation";
    icn.innerHTML = svgIcon(key, 18);
  }
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 3400);
}


/* =========================================================================
 * REGION 12: MODAL HANDLERS & EXPLICIT ACTION HOOKS
 * ========================================================================= */

function changeStudentNamePrompt() {
  const current = state.studentName || "Eleanor Vance";
  const newName = prompt("Enter your name for the Litdom Master Certificate:", current);
  if (newName && newName.trim()) {
    state.studentName = newName.trim();
    saveState();
    updateNavUser();
    if (state.currentView === "certificate") {
      renderCertificate();
    }
    showToast(`Student name updated to ${state.studentName}`, "check");
  }
}

function resetCourseProgressPrompt() {
  resetProgress();
}

function advanceToNextSection() {
  markSectionCompleteAndAdvance();
}

function bypassCooldownForTesting() {
  const box = document.getElementById("examCooldownBox");
  if (box) box.style.display = "none";
  showToast("Cooldown bypassed for testing.", "zap");
}

/* =========================================================================
 * INITIALIZATION ON DOM LOAD
 * ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  loadState();

  // Attach modal overlay click-to-close
  const modal = document.getElementById("pathModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closePathModal();
    });
  }

  // Initial routing
  navigateTo(state.currentView || "hub");
});
