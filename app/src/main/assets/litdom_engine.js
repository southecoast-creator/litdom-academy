/* =========================================================================
 * LITDOM ACADEMY - COMPREHENSIVE PROGRESSION & INTERACTION ENGINE
 * =========================================================================
 * 
 * 🎓 WELCOME DEAR DEVELOPER / INSTRUCTOR!
 * This engine powers the entire learner journey across Litdom Academy.
 * The code is organized into 11 clearly designated regions below so you
 * can easily find, modify, add, remove, or duplicate any feature.
 * 
 * -------------------------------------------------------------------------
 * TABLE OF CONTENTS / CODE REGIONS:
 * -------------------------------------------------------------------------
 *   REGION 1: STATE MANAGEMENT & DATA PERSISTENCE
 *   REGION 2: CURRICULUM HELPERS (DYNAMIC SCALING FOR ANY COURSES/MODULES)
 *   REGION 3: VIEW NAVIGATION & ROUTING
 *   REGION 4: VIEW A - COURSE HUB & PATHWAY MODAL
 *   REGION 5: VIEW B - VISUAL ROADMAP JOURNEY MAP (DYNAMIC MODULES/SECTIONS)
 *   REGION 6: VIEW C - SECTION CONTENT & VIDEO TIMER ENGINE
 *   REGION 7: INTERACTIVE EDITORIAL LABS (EMERALD GREEN SUCCESS ENGINE)
 *   REGION 8: SECTION KNOWLEDGE CHECKS & "MARK AS COMPLETE" GATE
 *   REGION 9: VIEW D - MODULE ASSESSMENTS (5-QUESTION EVALUATION)
 *   REGION 10: VIEW E - FINAL CAPSTONE EXAM & CERTIFICATION
 *   REGION 11: UTILITIES, AUDIO SIMULATOR & TOAST NOTIFICATIONS
 * ========================================================================= */


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
  completedSections: {},   // Map of sectionId -> boolean
  completedModules: {},    // Map of moduleId -> boolean
  completedVideos: {},     // Map of videoId -> boolean (Watched to end)
  completedExercises: {},  // Map of exerciseId -> boolean (Solved correctly)
  sectionTestPassed: {},   // Map of sectionId -> boolean (1-question test passed)
  moduleScores: {},        // Map of moduleId -> score (out of 5)
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
    state.completedVideos = {};
    state.completedExercises = {};
    state.sectionTestPassed = {};
    state.moduleScores = {};
    state.examState = { passed: false, score: 0, timestamp: null };
    state.activeModuleIndex = 0;
    state.activeSectionIndex = 0;
    saveState();
    showToast("Progress has been completely reset.", "ℹ️");
    if (state.currentView === "dashboard") {
      renderDashboard();
    } else {
      navigateTo("hub");
    }
  }
}


/* =========================================================================
 * REGION 2: CURRICULUM HELPERS (DYNAMIC SCALING FOR ANY COURSES/MODULES)
 * ========================================================================= */

/**
 * Retrieves the currently active course from LITDOM_DATA.
 */
function getActiveCourse() {
  return LITDOM_DATA.courses.find(c => c.id === state.selectedCourseId) || LITDOM_DATA.courses[0];
}

/**
 * Returns whether a section is marked completed.
 */
function isSectionCompleted(secId) {
  return !!state.completedSections[secId];
}

/**
 * Returns whether a module is marked completed.
 */
function isModuleCompleted(modId) {
  return !!state.completedModules[modId];
}

/**
 * Computes section state: "completed", "available", or "locked".
 * Enforces sequential progression: Section N requires Section N-1 completion.
 */
function getSectionState(mIdx, sIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];
  const sec = mod.sections[sIdx];

  if (isSectionCompleted(sec.id)) return "completed";
  if (mIdx === 0 && sIdx === 0) return "available";

  if (sIdx > 0) {
    const prevSec = mod.sections[sIdx - 1];
    return isSectionCompleted(prevSec.id) ? "available" : "locked";
  }

  if (sIdx === 0 && mIdx > 0) {
    const prevMod = course.modules[mIdx - 1];
    return isModuleCompleted(prevMod.id) ? "available" : "locked";
  }

  return "locked";
}

/**
 * Computes module state: "completed", "available", or "locked".
 */
function getModuleState(mIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];

  if (isModuleCompleted(mod.id)) return "completed";
  if (mIdx === 0) return "available";

  const prevMod = course.modules[mIdx - 1];
  return isModuleCompleted(prevMod.id) ? "available" : "locked";
}

/**
 * Returns true if all sections in a module have been completed.
 */
function canTakeModuleAssessment(mIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];
  return mod.sections.every(s => isSectionCompleted(s.id));
}

/**
 * Returns true if all modules have been completed, unlocking Capstone Exam.
 */
function canTakeFinalExam() {
  const course = getActiveCourse();
  return course.modules.every(m => isModuleCompleted(m.id));
}


/* =========================================================================
 * REGION 3: VIEW NAVIGATION & ROUTING
 * ========================================================================= */

/**
 * Primary single-page-application view switcher.
 */
function navigateTo(viewId) {
  state.currentView = viewId;
  document.querySelectorAll(".view-screen").forEach(el => el.classList.remove("active"));

  const target = document.getElementById("view-" + viewId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Clear any active video intervals when switching screens
  clearAllVideoTimers();

  if (viewId === "hub") renderHub();
  else if (viewId === "dashboard") renderDashboard();
  else if (viewId === "content") renderSectionContent();
  else if (viewId === "module-assessment") renderModuleAssessment();
  else if (viewId === "exam") renderExamScreen();
  else if (viewId === "certificate") renderCertificate();
}


/* =========================================================================
 * REGION 4: VIEW A - COURSE HUB & PATHWAY MODAL
 * ========================================================================= */

function renderHub() {
  const container = document.getElementById("coursesContainer");
  if (!container) return;

  container.innerHTML = LITDOM_DATA.courses.map(course => `
    <div class="course-card" id="course-card-${course.id}">
      <div style="font-size: 2.2rem; margin-bottom: 12px;">${course.icon}</div>
      <span class="path-tag active-tag" style="margin-bottom: 12px; display: inline-block;">${course.category}</span>
      <h3 style="margin-bottom: 8px;">${course.title}</h3>
      <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
        ${course.description}
      </p>
      
      <div style="font-size: 0.82rem; color: var(--champagne); margin-bottom: 20px; display: flex; gap: 16px; flex-wrap: wrap;">
        <span>📚 ${course.modules.length} Modules</span>
        <span>⏱️ ${course.duration}</span>
        <span>🎖️ Certified</span>
      </div>

      <button class="btn btn-gold" style="width: 100%;" onclick="openPathModal('${course.id}')">
        Start Learning &rarr;
      </button>
    </div>
  `).join("");
}

function openPathModal(courseId) {
  state.selectedCourseId = courseId || (LITDOM_DATA.courses[0] && LITDOM_DATA.courses[0].id) || "editor-academy";
  const course = getActiveCourse();

  const titleEl = document.getElementById("pathModalTitle");
  const descEl = document.getElementById("pathModalDesc");
  if (titleEl) titleEl.textContent = `${course.title}: Select Your Learning Pathway`;
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
  showToast(`Selected ${pathType === "oneway" ? "Sequential Mastery" : "Practical Apprenticeship"} Pathway`, "✨");
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
            ${isModDone ? "✓" : mod.num}
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
              <div class="section-node ${secState}" id="sec-node-${sec.id}">
                <div class="node-status-icon">
                  ${isSecDone ? "✓" : secState === "available" ? "▶" : "🔒"}
                </div>
                <div class="node-text">
                  <h5>${sec.title}</h5>
                  <div class="node-meta">
                    <span>⏱️ ${sec.duration}</span>
                    ${hasVideo ? "<span>🎬 Video</span>" : ""}
                    ${hasEx ? "<span>✏️ Exercise</span>" : ""}
                    ${isSecDone ? "<span style='color: #10b981; font-weight: 700;'>✓ Mastered</span>" : ""}
                  </div>
                </div>
                <div>
                  ${
                    secState !== "locked"
                      ? `<button class="btn ${isSecDone ? 'btn-outline' : 'btn-gold'} node-action-btn" onclick="openSection(${mIdx}, ${sIdx})">
                           ${isSecDone ? "Review" : "Start"}
                         </button>`
                      : `<button class="btn btn-outline node-action-btn" disabled style="opacity: 0.4; cursor: not-allowed;">
                           Locked
                         </button>`
                  }
                </div>
              </div>
            `;
          }).join("")}

          <!-- Module Assessment Node -->
          <div class="section-node ${isModDone ? 'completed' : canTestModule ? 'available' : 'locked'}" style="background: rgba(212, 175, 55, 0.04); border-color: rgba(212, 175, 55, 0.3);">
            <div class="node-status-icon" style="border-color: var(--gold); color: var(--gold);">
              ${isModDone ? "★" : canTestModule ? "📝" : "🔒"}
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
                 ${state.examState.passed ? "View Credential ★" : "Take Capstone Exam &rarr;"}
               </button>`
            : `<button class="btn btn-outline" disabled style="opacity: 0.4; cursor: not-allowed;">
                 🔒 Complete All 5 Modules
               </button>`
        }
      </div>
    </div>
  `;

  mapContainer.innerHTML = mapHtml;
}

function openSection(mIdx, sIdx) {
  state.activeModuleIndex = mIdx;
  state.activeSectionIndex = sIdx;
  saveState();
  navigateTo("content");
}

function openModuleAssessment(mIdx) {
  state.activeAssessmentModIndex = mIdx;
  saveState();
  navigateTo("module-assessment");
}


/* =========================================================================
 * REGION 6: VIEW C - SECTION CONTENT & VIDEO TIMER ENGINE
 * ========================================================================= */

// Global registry of running video timers
const videoTimers = {};

function clearAllVideoTimers() {
  Object.keys(videoTimers).forEach(vidId => {
    if (videoTimers[vidId].interval) {
      clearInterval(videoTimers[vidId].interval);
    }
  });
}

/**
 * Renders the full content flow for the active section, including:
 * - Header with section level & progress
 * - Dynamic media blocks (text, video with countdown timer, audio, examples)
 * - Interactive Editorial Exercises (turns emerald green)
 * - Section Knowledge Test (1 Question, 3 Options)
 * - Section Mastery Checklist & "Mark as Complete" gate
 */
function renderSectionContent() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeModuleIndex];
  const sec = mod.sections[state.activeSectionIndex];

  // Breadcrumbs & Header
  const modLabel = document.getElementById("contentModuleLabel");
  const titleEl = document.getElementById("contentSectionTitle");
  const descEl = document.getElementById("contentSectionDesc");
  const bcEl = document.getElementById("contentBreadcrumb");

  if (modLabel) modLabel.textContent = `Module ${mod.num} • Section ${state.activeSectionIndex + 1}`;
  if (titleEl) titleEl.textContent = sec.title;
  if (descEl) descEl.textContent = `Estimated Time: ${sec.duration} • Litdom Master Curriculum`;
  if (bcEl) bcEl.textContent = sec.title;

  const isCompleted = isSectionCompleted(sec.id);
  const pBar = document.getElementById("sectionProgressBar");
  const pTxt = document.getElementById("sectionProgressPct");
  if (pBar) pBar.style.width = isCompleted ? "100%" : "40%";
  if (pTxt) pTxt.textContent = isCompleted ? "100% Mastered" : "In Progress";

  // Flow Container
  const flowContainer = document.getElementById("contentBlocksFlow");
  if (!flowContainer) return;

  // Render Blocks
  let blocksHtml = sec.content.map(block => {
    switch (block.type) {
      case "text":
        return `
          <div class="content-block-card">
            <h4>${block.title}</h4>
            <div style="font-size: 0.95rem; line-height: 1.8; color: var(--ivory); margin-top: 10px;">
              ${block.content}
            </div>
          </div>
        `;

      case "video": {
        const vidId = block.id || `${sec.id}-vid`;
        const isWatched = !!state.completedVideos[vidId];
        const duration = block.durationSeconds || 20;

        return `
          <div class="video-card-container" id="video-card-${vidId}">
            <div style="padding: 16px 20px 0;">
              <span class="editorial-badge ${isWatched ? 'solved' : ''}">
                ${isWatched ? '✓ VIDEO VERIFIED' : '🎬 LECTURE REQUIREMENT'}
              </span>
              <h4 style="margin-top: 4px; font-size: 1.15rem;">${block.title}</h4>
              <p style="font-size: 0.85rem; color: var(--muted); margin: 4px 0 14px;">${block.caption}</p>
            </div>

            <!-- Video Player Viewport -->
            <div class="video-player-viewport">
              <button class="video-play-overlay-btn" id="vid-play-btn-${vidId}" onclick="toggleVideoPlayback('${vidId}', ${duration})">
                ${isWatched ? '↻' : '▶'}
              </button>
              <div style="font-size: 0.92rem; color: var(--champagne); margin-top: 12px; font-weight: 600;">
                ${block.instructor || "Dean Julian Sterling"}
              </div>
              <div style="font-size: 0.78rem; color: var(--muted); margin-top: 2px;">
                ${block.badge || "Litdom Studio Master Lecture"}
              </div>
            </div>

            <!-- Video Live Timer Strip -->
            <div class="video-timer-strip">
              <div style="display: flex; align-items: center; gap: 10px;">
                <button class="btn btn-outline" style="font-size: 0.78rem; padding: 4px 12px;" onclick="toggleVideoPlayback('${vidId}', ${duration})">
                  <span id="vid-ctrl-text-${vidId}">Play</span>
                </button>
                <button class="btn btn-outline" style="font-size: 0.72rem; padding: 4px 8px; color: var(--gold);" title="Fast-forward preview for instructors" onclick="fastForwardVideo('${vidId}')">
                  ⚡ Fast-Forward (Preview)
                </button>
              </div>

              <!-- Progress bar -->
              <div class="video-progress-bar-bg">
                <div class="video-progress-bar-fill ${isWatched ? 'finished' : ''}" id="vid-progress-${vidId}" style="width: ${isWatched ? '100%' : '0%'};"></div>
              </div>

              <!-- Live Timer Badge -->
              <div class="video-countdown-pill ${isWatched ? 'completed' : ''}" id="vid-badge-${vidId}">
                ${isWatched ? '✓ Lecture Watched' : `⏱️ 00:${duration < 10 ? '0' + duration : duration} remaining`}
              </div>
            </div>
          </div>
        `;
      }

      case "interactive_exercise":
      case "exercise": {
        const exId = block.id || `${sec.id}-ex`;
        const isSolved = !!state.completedExercises[exId];

        return `
          <div class="interactive-editorial-card ${isSolved ? 'solved' : ''}" id="exercise-card-${exId}">
            <div class="editorial-badge ${isSolved ? 'solved' : ''}" id="ex-badge-${exId}">
              ${isSolved ? '✓ EDITORIAL EXERCISE CLEARED' : `✏️ ${block.category || 'LINE EDITING CRUCIBLE'}`}
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

            <!-- Feedback Box (Shows vibrant green on correct choice!) -->
            <div class="editorial-feedback-box ${isSolved ? 'show success' : ''}" id="ex-feedback-${exId}">
              ${
                isSolved
                  ? `<strong>✓ Masterful Edit!</strong> You correctly resolved this craft challenge.`
                  : ""
              }
            </div>
          </div>
        `;
      }

      case "audio":
        return `
          <div class="content-block-card">
            <h4>🎧 ${block.title}</h4>
            <p style="font-size: 0.88rem; color: var(--muted); margin: 6px 0 14px;">${block.caption}</p>
            <div style="background: #111116; border: 1px solid var(--charcoal-border); border-radius: var(--radius-sm); padding: 14px; display: flex; align-items: center; gap: 16px;">
              <button class="btn btn-gold" style="border-radius: 50%; width: 44px; height: 44px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;" onclick="toggleAudioDemo(this)">
                ▶
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
          </div>
        `;

      case "example":
        return `
          <div class="example-block-card">
            <h4>🔍 ${block.title}</h4>
            <div class="example-compare-grid">
              <div class="example-pane before">
                <span style="font-size: 0.75rem; font-weight: 700; color: #ff6b6b; text-transform: uppercase;">Raw Draft</span>
                <p style="font-size: 0.9rem; color: var(--ivory); margin-top: 6px; font-style: italic;">"${block.before}"</p>
              </div>
              <div class="example-pane after">
                <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; text-transform: uppercase;">Editorially Diagnosed</span>
                <p style="font-size: 0.9rem; color: #a7f3d0; margin-top: 6px; font-weight: 500;">"${block.after}"</p>
              </div>
            </div>
            <p style="font-size: 0.82rem; color: var(--muted); margin-top: 12px;"><strong>Diagnostic Note:</strong> ${block.explanation}</p>
          </div>
        `;

      default:
        return `
          <div class="content-block-card">
            <h4>${block.title || 'Curriculum Material'}</h4>
            <p style="font-size: 0.88rem; color: var(--muted);">${block.caption || ''}</p>
          </div>
        `;
    }
  }).join("");

  // Append Section Knowledge Test Card
  const test = sec.test;
  const isTestPassed = !!state.sectionTestPassed[sec.id] || isCompleted;

  blocksHtml += `
    <div class="quiz-container" id="sectionQuizContainer">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="path-tag active-tag" style="background: rgba(212, 175, 55, 0.15);">
          🎯 SECTION KNOWLEDGE VERIFICATION
        </span>
        <span style="font-size: 0.8rem; color: var(--muted);">1 Question • Required</span>
      </div>

      <div class="quiz-question-text">${test.question}</div>

      <div class="quiz-options" id="sectionOptionsList">
        ${test.options.map((opt, optIdx) => `
          <button class="quiz-option-btn ${isTestPassed && optIdx === test.correctAnswer ? 'correct' : ''}" 
                  id="sec-opt-${optIdx}"
                  onclick="handleSectionAnswer(${optIdx})">
            <span style="font-weight: 700; color: var(--gold);">${String.fromCharCode(65 + optIdx)}.</span>
            <span>${opt}</span>
          </button>
        `).join("")}
      </div>

      <div id="sectionFeedbackArea" style="display: ${isTestPassed ? 'block' : 'none'};">
        <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-sm); padding: 14px 18px; color: #d1fae5;">
          <div style="color: #34d399; font-weight: 700; margin-bottom: 4px; font-size: 0.98rem;">
            ✓ Knowledge Check Cleared!
          </div>
          <p style="font-size: 0.88rem; color: #a7f3d0;">${test.explanation}</p>
        </div>
      </div>
    </div>
  `;

  // Append Requirements Checklist & "Mark as Complete" Action Bar
  blocksHtml += renderSectionChecklistHtml(sec);

  flowContainer.innerHTML = blocksHtml;

  // Hide the old advance banner if it exists
  const oldBanner = document.getElementById("sectionCompleteBanner");
  if (oldBanner) oldBanner.style.display = "none";
}

/**
 * Handles play/pause and countdown ticking for a video.
 */
function toggleVideoPlayback(vidId, totalSeconds) {
  if (!videoTimers[vidId]) {
    videoTimers[vidId] = {
      remaining: totalSeconds,
      total: totalSeconds,
      isPlaying: false,
      interval: null
    };
  }

  const timerObj = videoTimers[vidId];

  if (timerObj.isPlaying) {
    // Pause
    clearInterval(timerObj.interval);
    timerObj.isPlaying = false;
    updateVideoUI(vidId, false);
    showToast("Video paused.", "⏸️");
  } else {
    // Start or Resume
    timerObj.isPlaying = true;
    showToast(`Video playing... Watch timer active (${timerObj.remaining}s remaining)`, "🎬");
    updateVideoUI(vidId, true);

    timerObj.interval = setInterval(() => {
      timerObj.remaining--;

      const pct = Math.round(((timerObj.total - timerObj.remaining) / timerObj.total) * 100);
      const fillEl = document.getElementById(`vid-progress-${vidId}`);
      const badgeEl = document.getElementById(`vid-badge-${vidId}`);

      if (fillEl) fillEl.style.width = pct + "%";
      if (badgeEl) badgeEl.textContent = `⏱️ 00:${timerObj.remaining < 10 ? '0' + timerObj.remaining : timerObj.remaining} remaining`;

      if (timerObj.remaining <= 0) {
        // FINISHED!
        clearInterval(timerObj.interval);
        timerObj.isPlaying = false;
        state.completedVideos[vidId] = true;
        saveState();

        if (fillEl) {
          fillEl.style.width = "100%";
          fillEl.classList.add("finished");
        }
        if (badgeEl) {
          badgeEl.className = "video-countdown-pill completed";
          badgeEl.textContent = "✓ Lecture Watched & Verified";
        }

        updateVideoUI(vidId, false);
        showToast("✓ Video lecture completed! Video requirement satisfied.", "🎉");

        // Refresh section checklist
        refreshSectionChecklist();
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
  saveState();

  const fillEl = document.getElementById(`vid-progress-${vidId}`);
  const badgeEl = document.getElementById(`vid-badge-${vidId}`);
  if (fillEl) {
    fillEl.style.width = "100%";
    fillEl.classList.add("finished");
  }
  if (badgeEl) {
    badgeEl.className = "video-countdown-pill completed";
    badgeEl.textContent = "✓ Lecture Watched & Verified";
  }

  showToast("Video verified! Lecture requirement fulfilled.", "⚡");
  refreshSectionChecklist();
}

function updateVideoUI(vidId, isPlaying) {
  const btn = document.getElementById(`vid-play-btn-${vidId}`);
  const ctrlText = document.getElementById(`vid-ctrl-text-${vidId}`);
  if (btn) btn.textContent = isPlaying ? "❚❚" : "▶";
  if (ctrlText) ctrlText.textContent = isPlaying ? "Pause" : "Play";
}


/* =========================================================================
 * REGION 7: INTERACTIVE EDITORIAL LABS (EMERALD GREEN SUCCESS ENGINE)
 * ========================================================================= */

/**
 * Evaluates an option chosen by the student in an editorial exercise.
 * Upon choosing the correct option, turns the button and card glowing EMERALD GREEN!
 */
function evaluateExerciseOption(exId, optionIdx) {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const block = sec.content.find(b => (b.id || `${sec.id}-ex`) === exId);
  if (!block || !block.options) return;

  const chosenOpt = block.options[optionIdx];
  const cardEl = document.getElementById(`exercise-card-${exId}`);
  const badgeEl = document.getElementById(`ex-badge-${exId}`);
  const feedbackEl = document.getElementById(`ex-feedback-${exId}`);
  const draftEl = document.getElementById(`ex-draft-${exId}`);

  // Clear previous option styles
  block.options.forEach((_, idx) => {
    const btn = document.getElementById(`ex-${exId}-opt-${idx}`);
    if (btn) btn.classList.remove("correct-choice", "wrong-choice");
  });

  const selectedBtn = document.getElementById(`ex-${exId}-opt-${optionIdx}`);

  if (chosenOpt.correct) {
    // 🌟 CORRECT ANSWER -> TURN EMERALD GREEN!
    state.completedExercises[exId] = true;
    saveState();

    if (selectedBtn) selectedBtn.classList.add("correct-choice");
    if (cardEl) cardEl.classList.add("solved");
    if (badgeEl) {
      badgeEl.classList.add("solved");
      badgeEl.textContent = "✓ EDITORIAL EXERCISE CLEARED";
    }

    if (draftEl && chosenOpt.polishedText) {
      draftEl.innerHTML = `
        <div style="font-size: 0.74rem; text-transform: uppercase; color: #10b981; letter-spacing: 0.08em; font-family: sans-serif; margin-bottom: 6px;">
          ✓ Masterfully Polished Sentence:
        </div>
        <div style="color: #a7f3d0; font-weight: 500;">"${chosenOpt.polishedText}"</div>
      `;
    }

    if (feedbackEl) {
      feedbackEl.className = "editorial-feedback-box show success";
      feedbackEl.innerHTML = `
        <div style="font-weight: 700; color: #34d399; margin-bottom: 4px; font-size: 0.98rem;">
          ✓ Masterful Editorial Diagnosis!
        </div>
        <div>${chosenOpt.feedback}</div>
      `;
    }

    showToast("Masterful edit! Exercise solved and verified in green.", "✨");
    refreshSectionChecklist();
  } else {
    // INCORRECT OPTION
    if (selectedBtn) selectedBtn.classList.add("wrong-choice");
    if (feedbackEl) {
      feedbackEl.className = "editorial-feedback-box show error";
      feedbackEl.innerHTML = `
        <div style="font-weight: 700; color: #f87171; margin-bottom: 4px; font-size: 0.95rem;">
          ✕ Craft Diagnosis Note
        </div>
        <div>${chosenOpt.feedback}</div>
        <div style="margin-top: 6px; font-size: 0.82rem; color: var(--muted);">Review the editorial principle and select the elevated alternative.</div>
      `;
    }

    showToast("Re-evaluate the craft diagnosis and try again.", "⚠️");
  }
}


/* =========================================================================
 * REGION 8: SECTION KNOWLEDGE CHECKS & "MARK AS COMPLETE" GATE
 * ========================================================================= */

/**
 * Handles section quiz submission (1 question, 3 options).
 */
function handleSectionAnswer(selectedIdx) {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const test = sec.test;

  const feedback = document.getElementById("sectionFeedbackArea");
  const options = document.querySelectorAll("#sectionOptionsList .quiz-option-btn");

  options.forEach((el, idx) => {
    el.classList.remove("selected", "correct", "wrong");
    if (idx === selectedIdx) el.classList.add("selected");
  });

  if (selectedIdx === test.correctAnswer) {
    // CORRECT!
    state.sectionTestPassed[sec.id] = true;
    saveState();

    const selectedEl = document.getElementById(`sec-opt-${selectedIdx}`);
    if (selectedEl) selectedEl.classList.add("correct");

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-sm); padding: 14px 18px; color: #d1fae5;">
          <div style="color: #34d399; font-weight: 700; margin-bottom: 4px; font-size: 1rem;">
            ✓ Correct Answer! Knowledge Check Cleared
          </div>
          <p style="font-size: 0.88rem; color: #a7f3d0;">${test.explanation}</p>
        </div>
      `;
    }

    showToast("Knowledge check passed! Requirement satisfied.", "✓");
    refreshSectionChecklist();
  } else {
    // INCORRECT!
    const selectedEl = document.getElementById(`sec-opt-${selectedIdx}`);
    if (selectedEl) selectedEl.classList.add("wrong");

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; border-radius: var(--radius-sm); padding: 14px 18px; color: #fee2e2;">
          <div style="color: #f87171; font-weight: 700; margin-bottom: 4px; font-size: 0.95rem;">
            ✕ Incorrect Answer
          </div>
          <p style="font-size: 0.88rem; color: #fca5a5; margin-bottom: 8px;">
            Review the section material above and choose the correct answer.
          </p>
        </div>
      `;
    }

    showToast("Incorrect. Re-read the section material and try again.", "⚠️");
  }
}

/**
 * Checks if all requirements for the given section are met.
 */
function areSectionRequirementsMet(sec) {
  // Check video requirements
  const videoBlocks = sec.content.filter(b => b.type === "video");
  const allVideosDone = videoBlocks.every(v => !!state.completedVideos[v.id || `${sec.id}-vid`]);

  // Check interactive exercise requirements
  const exBlocks = sec.content.filter(b => b.type === "interactive_exercise" || b.type === "exercise");
  const allExDone = exBlocks.every(e => !!state.completedExercises[e.id || `${sec.id}-ex`]);

  // Check section knowledge check
  const testDone = !!state.sectionTestPassed[sec.id] || isSectionCompleted(sec.id);

  return {
    allMet: allVideosDone && allExDone && testDone,
    videosDone: allVideosDone,
    videoCount: videoBlocks.length,
    exDone: allExDone,
    exCount: exBlocks.length,
    testDone: testDone
  };
}

/**
 * Renders the Section Completion Checklist HTML block.
 */
function renderSectionChecklistHtml(sec) {
  const reqs = areSectionRequirementsMet(sec);
  const isCompleted = isSectionCompleted(sec.id);

  let totalItems = 1; // Section test is always 1
  let completedItems = reqs.testDone ? 1 : 0;

  if (reqs.videoCount > 0) {
    totalItems += reqs.videoCount;
    if (reqs.videosDone) completedItems += reqs.videoCount;
  }
  if (reqs.exCount > 0) {
    totalItems += reqs.exCount;
    if (reqs.exDone) completedItems += reqs.exCount;
  }

  const isReady = reqs.allMet || isCompleted;

  return `
    <div class="section-checklist-box" id="sectionChecklistCard">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: 0.74rem; text-transform: uppercase; color: var(--gold); letter-spacing: 0.08em; font-weight: 700;">
            LEVEL CLEARANCE PROTOCOL
          </span>
          <h4 style="color: var(--ivory); font-size: 1.15rem; margin-top: 2px;">
            Required Section Milestones
          </h4>
        </div>
        <div style="font-size: 0.85rem; font-weight: 700; color: ${isReady ? '#10b981' : 'var(--gold)'};">
          ${completedItems} / ${totalItems} Satisfied
        </div>
      </div>

      <div class="checklist-items-grid">
        ${
          reqs.videoCount > 0
            ? `
              <div class="checklist-row ${reqs.videosDone ? 'completed' : ''}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 1.1rem;">${reqs.videosDone ? '✓' : '🎬'}</span>
                  <span style="font-size: 0.9rem; color: var(--ivory);">Masterclass Video Lecture (Watch Timer Enforced)</span>
                </div>
                <span class="checklist-status-badge">
                  ${reqs.videosDone ? 'Watched' : 'Watch Required'}
                </span>
              </div>
            `
            : ''
        }

        ${
          reqs.exCount > 0
            ? `
              <div class="checklist-row ${reqs.exDone ? 'completed' : ''}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 1.1rem;">${reqs.exDone ? '✓' : '✏️'}</span>
                  <span style="font-size: 0.9rem; color: var(--ivory);">Interactive Editorial Exercise (Solve Correctly)</span>
                </div>
                <span class="checklist-status-badge">
                  ${reqs.exDone ? 'Cleared' : 'Pending Diagnosis'}
                </span>
              </div>
            `
            : ''
        }

        <div class="checklist-row ${reqs.testDone ? 'completed' : ''}">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.1rem;">${reqs.testDone ? '✓' : '🎯'}</span>
            <span style="font-size: 0.9rem; color: var(--ivory);">Section Knowledge Verification (1 Question)</span>
          </div>
          <span class="checklist-status-badge">
            ${reqs.testDone ? 'Passed' : 'Pending Check'}
          </span>
        </div>
      </div>

      <!-- Mark as Complete Button -->
      <button class="btn-complete-level ${isReady ? 'ready' : 'locked'}" 
              id="btnMarkSectionComplete"
              onclick="${isReady ? 'markSectionCompleteAndAdvance()' : 'explainPendingRequirements()'}">
        ${
          isCompleted
            ? "✓ Level Completed • Continue to Next &rarr;"
            : isReady
            ? "✓ Mark Level as Complete & Advance &rarr;"
            : `Mark Level as Complete (${completedItems}/${totalItems} Satisfied)`
        }
      </button>
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
 * Called when learner clicks "Mark Level as Complete & Advance".
 */
function markSectionCompleteAndAdvance() {
  const course = getActiveCourse();
  const currentMod = course.modules[state.activeModuleIndex];
  const currentSec = currentMod.sections[state.activeSectionIndex];

  // Mark section as completed in state
  state.completedSections[currentSec.id] = true;
  saveState();

  showToast("🎉 Congratulations! Section cleared and unlocked on the roadmap.", "🏆");

  // Advance to next section or module assessment
  if (state.activeSectionIndex < currentMod.sections.length - 1) {
    state.activeSectionIndex++;
    saveState();
    renderSectionContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // All sections in this module cleared -> Advance to Module Assessment!
    showToast(`All sections cleared! Opening Module ${currentMod.num} Assessment.`, "📜");
    state.activeAssessmentModIndex = state.activeModuleIndex;
    saveState();
    navigateTo("module-assessment");
  }
}

/**
 * Alerts the user to which requirements are still missing.
 */
function explainPendingRequirements() {
  const course = getActiveCourse();
  const sec = course.modules[state.activeModuleIndex].sections[state.activeSectionIndex];
  const reqs = areSectionRequirementsMet(sec);

  let missing = [];
  if (reqs.videoCount > 0 && !reqs.videosDone) missing.push("Watch video lecture until timer completes");
  if (reqs.exCount > 0 && !reqs.exDone) missing.push("Solve the interactive editorial exercise");
  if (!reqs.testDone) missing.push("Answer the section knowledge question correctly");

  showToast(`Please complete requirements before moving on: ${missing.join(" • ")}`, "⚠️");
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
  const bcEl = document.getElementById("moduleAssessmentBreadcrumb");

  if (titleEl) titleEl.textContent = `Module ${mod.num} Comprehensive Assessment`;
  if (descEl) descEl.textContent = `Validate foundational mastery across all sections in Module ${mod.num}: "${mod.title}".`;
  if (passEl) passEl.textContent = `${mod.passingScore} of 5 (${(mod.passingScore/5)*100}%)`;
  if (outcomeEl) outcomeEl.textContent = state.activeAssessmentModIndex < course.modules.length - 1
    ? `Unlocks Module ${mod.num + 1}`
    : `Unlocks Final Capstone Examination`;
  if (bcEl) bcEl.textContent = `Module ${mod.num} Assessment`;

  const container = document.getElementById("moduleAssessmentQuestionsContainer");
  const resultBox = document.getElementById("modAssessmentResultBox");
  const submitWrapper = document.getElementById("modAssessmentSubmitWrapper");

  if (resultBox) resultBox.style.display = "none";
  if (submitWrapper) submitWrapper.style.display = "block";

  if (!container) return;

  container.innerHTML = mod.assessment.map((q, qIdx) => `
    <div class="exam-question-item" id="mod-q-item-${qIdx}">
      <span class="exam-q-number">Question ${qIdx + 1} of 5</span>
      <h4 class="exam-q-text">${q.question}</h4>
      <div class="exam-options-grid">
        ${q.options.map((opt, optIdx) => `
          <label class="exam-opt-card" id="mod-q-${qIdx}-opt-${optIdx}">
            <input type="radio" name="mod_assessment_q_${qIdx}" value="${optIdx}">
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
  const questions = mod.assessment;

  let score = 0;
  let unanswered = false;

  questions.forEach((q, qIdx) => {
    const selected = document.querySelector(`input[name="mod_assessment_q_${qIdx}"]:checked`);
    if (!selected) {
      unanswered = true;
    } else if (parseInt(selected.value, 10) === q.correctIndex) {
      score++;
    }
  });

  if (unanswered) {
    showToast("Please answer all 5 questions before submitting.", "⚠️");
    return;
  }

  const passed = score >= mod.passingScore;
  const resultBox = document.getElementById("modAssessmentResultBox");
  const submitWrapper = document.getElementById("modAssessmentSubmitWrapper");

  if (passed) {
    state.completedModules[mod.id] = true;
    state.moduleScores[mod.id] = score;
    saveState();

    if (submitWrapper) submitWrapper.style.display = "none";

    const isLastModule = state.activeAssessmentModIndex === course.modules.length - 1;

    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="font-size: 2.8rem; margin-bottom: 10px;">🌟</div>
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

    showToast(`Module ${mod.num} cleared with ${score}/5!`, "🏆");
  } else {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="font-size: 2.5rem; margin-bottom: 10px;">⚠️</div>
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

    showToast(`Score: ${score}/5. Required: ${mod.passingScore}/5.`, "⚠️");
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
    showToast("Final Exam locked. Complete all 5 modules first.", "🔒");
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
    showToast(`You have ${unansweredIndices.length} unanswered question(s). Complete all 50.`, "⚠️");
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
        <div style="font-size: 3rem; margin-bottom: 12px;">🎓</div>
        <h2 style="color: #34d399; font-size: 1.8rem;">Board Examination Cleared!</h2>
        <div class="score-banner" style="color: #10b981; font-size: 2.2rem; font-weight: 800; margin: 14px 0;">
          Score: ${score} / 50 (${Math.round((score/50)*100)}%)
        </div>
        <p style="color: var(--ivory); font-size: 1rem; max-width: 550px; margin: 0 auto 24px;">
          By order of the Editorial Directorate of Litdom Academy, having satisfied all examination standards, you are hereby conferred the credential of Master Editorial Fellow.
        </p>
        <button class="btn btn-gold" style="padding: 14px 28px; font-size: 1.05rem;" onclick="navigateTo('certificate')">
          View Master Certificate &rarr;
        </button>
      `;
    }

    showToast("Master Certification Achieved! 🎓", "🏆");
  } else {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 12px;">⚖️</div>
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

    showToast(`Score: ${score}/50. Required: 45/50.`, "⚠️");
  }
}

function renderCertificate() {
  if (!state.examState.passed) {
    showToast("Certificate locked. Complete and pass the Board Exam first.", "🔒");
    navigateTo("dashboard");
    return;
  }

  const nameEl = document.getElementById("certLearnerName");
  const dateEl = document.getElementById("certDateIssued");
  const idEl = document.getElementById("certCredentialId");

  if (nameEl) nameEl.textContent = state.studentName || "Eleanor Vance";
  if (dateEl) dateEl.textContent = state.examState.timestamp || "October 2026";
  if (idEl) idEl.textContent = "LITDOM-" + Math.abs(hashCode(state.studentName + "cert")).toString(36).toUpperCase().padStart(8, "0");
}

function downloadCertificate() {
  window.print();
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
 * REGION 11: UTILITIES, AUDIO SIMULATOR & TOAST NOTIFICATIONS
 * ========================================================================= */

function toggleAudioDemo(btn) {
  if (btn.textContent.trim() === "▶") {
    btn.textContent = "❚❚";
    showToast("Audio masterclass playing...", "🔊");
  } else {
    btn.textContent = "▶";
    showToast("Audio paused.", "⏸️");
  }
}

function showToast(msg, icon = "✨") {
  const el = document.getElementById("toastMsg");
  const txt = document.getElementById("toastText");
  const icn = document.getElementById("toastIcon");
  if (!el || !txt) return;

  txt.textContent = msg;
  if (icn) icn.textContent = icon;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 3400);
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

  // Ensure first screen loads
  navigateTo(state.currentView || "hub");
});

// Expose globally
if (typeof window !== "undefined") {
  window.navigateTo = navigateTo;
  window.openPathModal = openPathModal;
  window.closePathModal = closePathModal;
  window.selectPath = selectPath;
  window.openSection = openSection;
  window.openModuleAssessment = openModuleAssessment;
  window.resetProgress = resetProgress;
  window.toggleVideoPlayback = toggleVideoPlayback;
  window.fastForwardVideo = fastForwardVideo;
  window.evaluateExerciseOption = evaluateExerciseOption;
  window.handleSectionAnswer = handleSectionAnswer;
  window.markSectionCompleteAndAdvance = markSectionCompleteAndAdvance;
  window.explainPendingRequirements = explainPendingRequirements;
  window.submitModuleAssessment = submitModuleAssessment;
  window.proceedToNextModule = proceedToNextModule;
  window.submitFinalExam = submitFinalExam;
  window.downloadCertificate = downloadCertificate;
  window.toggleAudioDemo = toggleAudioDemo;
  window.showToast = showToast;
}
