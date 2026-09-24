/* LITDOM ACADEMY - PROGRESSION & INTERACTION ENGINE */
const STORAGE_KEY = "litdom_academy_progression_v2";

let state = {
  currentView: "hub",
  selectedCourseId: "editor-academy",
  activeModuleIndex: 0,
  activeSectionIndex: 0,
  activeAssessmentModIndex: 0,
  studentName: "Eleanor Vance",
  completedSections: {},
  completedModules: {},
  moduleScores: {},
  examState: {
    passed: false,
    score: 0,
    timestamp: null
  }
};

/* --- State Persistence --- */
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

function updateNavUser() {
  const nameEl = document.getElementById("navLearnerName");
  const avatarEl = document.getElementById("navAvatar");
  if (nameEl) nameEl.textContent = state.studentName || "Scholar";
  if (avatarEl) avatarEl.textContent = (state.studentName || "E").charAt(0).toUpperCase();
}

function resetProgress() {
  if (confirm("Reset all course progression, quiz attempts, and exam scores?")) {
    state.completedSections = {};
    state.completedModules = {};
    state.moduleScores = {};
    state.examState = { passed: false, score: 0, timestamp: null };
    state.activeModuleIndex = 0;
    state.activeSectionIndex = 0;
    saveState();
    showToast("Progress has been reset.", "ℹ️");
    if (state.currentView === "dashboard") {
      renderDashboard();
    } else {
      navigateTo("hub");
    }
  }
}

/* --- Helpers --- */
function getActiveCourse() {
  return LITDOM_DATA.courses.find(c => c.id === state.selectedCourseId) || LITDOM_DATA.courses[0];
}

function isSectionCompleted(secId) {
  return !!state.completedSections[secId];
}

function isModuleCompleted(modId) {
  return !!state.completedModules[modId];
}

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

function getModuleState(mIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];

  if (isModuleCompleted(mod.id)) return "completed";
  if (mIdx === 0) return "available";

  const prevMod = course.modules[mIdx - 1];
  return isModuleCompleted(prevMod.id) ? "available" : "locked";
}

function canTakeModuleAssessment(mIdx) {
  const course = getActiveCourse();
  const mod = course.modules[mIdx];
  return mod.sections.every(s => isSectionCompleted(s.id));
}

function canTakeFinalExam() {
  const course = getActiveCourse();
  return course.modules.every(m => isModuleCompleted(m.id));
}

/* --- View Switching --- */
function navigateTo(viewId) {
  state.currentView = viewId;
  document.querySelectorAll(".view-screen").forEach(el => el.classList.remove("active"));

  const target = document.getElementById("view-" + viewId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (viewId === "hub") renderHub();
  else if (viewId === "dashboard") renderDashboard();
  else if (viewId === "content") renderSectionContent();
  else if (viewId === "module-assessment") renderModuleAssessment();
  else if (viewId === "exam") renderExamScreen();
  else if (viewId === "certificate") renderCertificate();
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
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

/* --- Modal Controls --- */
function openPathModal(courseId) {
  state.selectedCourseId = courseId;
  const modal = document.getElementById("pathModal");
  if (modal) modal.classList.add("open");
}

function closePathModal() {
  const modal = document.getElementById("pathModal");
  if (modal) modal.classList.remove("open");
}

function selectPath(path) {
  closePathModal();
  saveState();
  navigateTo("dashboard");
}

/* --- View A: Academy Hub --- */
function renderHub() {
  const container = document.getElementById("courseCardsGrid") || document.getElementById("coursesGrid");
  if (!container) return;

  container.innerHTML = LITDOM_DATA.courses.map(c => `
    <div class="course-card" onclick="openPathModal('${c.id}')">
      <div class="course-card-top">
        <span class="course-badge">${c.level}</span>
        <div style="font-size: 2.2rem; margin: 12px 0 8px;">${c.icon}</div>
        <h3 class="course-card-title">${c.title}</h3>
        <p class="course-card-desc">${c.description}</p>
      </div>
      <div class="course-card-footer">
        <div class="course-meta-pills">
          <span class="meta-pill">⏱️ ${c.duration}</span>
          <span class="meta-pill">📚 ${c.modules.length} Modules</span>
        </div>
        <button class="btn btn-gold" style="width: 100%; margin-top: 10px;">
          Start Learning &rarr;
        </button>
      </div>
    </div>
  `).join("");
}

function openCourse(courseId) {
  state.selectedCourseId = courseId;
  saveState();
  navigateTo("dashboard");
}

/* --- View B: Journey Map / Dashboard --- */
function renderDashboard() {
  const course = getActiveCourse();

  // Update Breadcrumb & Header info
  const courseTitleEl = document.getElementById("dashCourseTitle");
  const courseDescEl = document.getElementById("dashCourseDesc");
  const courseBreadcrumb = document.getElementById("dashBreadcrumbCourse");
  const courseCatEl = document.getElementById("dashCourseCategory");

  if (courseTitleEl) courseTitleEl.textContent = course.title;
  if (courseDescEl) courseDescEl.textContent = course.description;
  if (courseBreadcrumb) courseBreadcrumb.textContent = course.title;
  if (courseCatEl) courseCatEl.textContent = course.category;

  // Progress metrics calculation
  let totalSections = 0;
  let completedSecs = 0;
  let completedMods = 0;

  course.modules.forEach(m => {
    if (isModuleCompleted(m.id)) completedMods++;
    m.sections.forEach(s => {
      totalSections++;
      if (isSectionCompleted(s.id)) completedSecs++;
    });
  });

  const pct = Math.round((completedSecs / totalSections) * 100);
  const bar = document.getElementById("dashProgressBar");
  const pctTxt = document.getElementById("dashProgressPct");
  const counter = document.getElementById("dashStepsCounter");

  if (bar) bar.style.width = pct + "%";
  if (pctTxt) pctTxt.textContent = pct + "%";
  if (counter) counter.textContent = `${completedMods} of ${course.modules.length} Modules Cleared`;

  // Render Visual Roadmap Tree
  const container = document.getElementById("journeyMapContainer");
  if (!container) return;

  let html = "";

  course.modules.forEach((mod, mIdx) => {
    const modState = getModuleState(mIdx);
    const modCompleted = modState === "completed";
    const allSecsDone = mod.sections.every(s => isSectionCompleted(s.id));

    // Module circle indicator (Large Circle)
    let badgeContent = mod.num;
    if (modCompleted) {
      badgeContent = "✓";
    }

    html += `
      <div class="module-group" id="module-group-${mod.id}">
        <div class="module-header">
          <div class="module-badge ${modState}" title="Module ${mod.num}: ${modState}">
            ${badgeContent}
          </div>
          <div>
            <div class="module-title">MODULE ${mod.num}: ${mod.title}</div>
            <div style="font-size: 0.8rem; color: var(--muted);">${mod.description}</div>
          </div>
        </div>

        <div class="sections-tree-wrapper">
          <div class="tree-connector-stem ${allSecsDone ? 'completed' : ''}"></div>
          <div class="sections-list">
    `;

    // Render smaller section circles
    mod.sections.forEach((sec, sIdx) => {
      const sState = getSectionState(mIdx, sIdx);
      const isDone = sState === "completed";
      const isAvail = sState === "available";

      let circleContent = `${sIdx + 1}`;
      if (isDone) circleContent = "✓";

      let actionBtn = `<span class="btn btn-outline node-action-btn" style="opacity: 0.5;">Locked</span>`;
      if (isDone) {
        actionBtn = `<span class="btn btn-outline node-action-btn" style="border-color: var(--gold); color: var(--champagne);">Review</span>`;
      } else if (isAvail) {
        actionBtn = `<span class="btn btn-gold node-action-btn">Enter &rarr;</span>`;
      }

      html += `
        <div class="section-node ${sState}" onclick="selectSection(${mIdx}, ${sIdx})">
          <div class="node-content-wrap">
            <div class="section-circle ${sState}">
              ${circleContent}
            </div>
            <div class="node-text">
              <h5>Section ${sIdx + 1}: ${sec.title}</h5>
              <div class="node-meta">
                <span>⏱️ ${sec.duration}</span>
                <span>📑 ${sec.content.length} Blocks + Test</span>
                ${isDone ? '<span style="color: var(--gold); font-weight: 600;">Passed</span>' : ''}
              </div>
            </div>
          </div>
          <div>${actionBtn}</div>
        </div>
      `;
    });

    // Render Module Assessment Node
    let assessmentClass = "locked";
    let assessmentLabel = `Module ${mod.num} Assessment (Locked — Complete all sections)`;
    let assessmentIcon = "🔒";
    let assessmentBtn = `<span class="btn btn-outline node-action-btn" style="opacity: 0.5;">Locked</span>`;

    if (modCompleted) {
      assessmentClass = "completed";
      assessmentLabel = `Module ${mod.num} Assessment Passed (Score: ${state.moduleScores[mod.id] || 5}/5)`;
      assessmentIcon = "✓";
      assessmentBtn = `<span class="btn btn-outline node-action-btn" style="border-color: var(--gold); color: var(--gold);">Passed</span>`;
    } else if (allSecsDone) {
      assessmentClass = "available";
      assessmentLabel = `Module ${mod.num} Assessment: 5 Questions (Passing score: ${mod.passingScore}/5)`;
      assessmentIcon = "⚡";
      assessmentBtn = `<span class="btn btn-gold node-action-btn">Take Assessment &rarr;</span>`;
    }

    html += `
          <div class="module-assessment-node ${assessmentClass}" onclick="openModuleAssessment(${mIdx})">
            <div class="node-content-wrap">
              <div class="section-circle ${assessmentClass}">
                ${assessmentIcon}
              </div>
              <div class="node-text">
                <h5 style="color: var(--champagne);">${assessmentLabel}</h5>
                <div class="node-meta">
                  <span>Passing score required to unlock Module ${mIdx + 2}</span>
                </div>
              </div>
            </div>
            <div>${assessmentBtn}</div>
          </div>
        </div>
      </div>
    `;

    // Inter-module connector line to next module (if not last)
    if (mIdx < course.modules.length - 1) {
      html += `<div class="inter-module-connector ${modCompleted ? 'completed' : ''}"></div>`;
    }

    html += `</div>`;
  });

  // Final Examination Capstone Milestone at the end of the roadmap
  const allModulesCleared = canTakeFinalExam();
  const examPassed = state.examState.passed;

  html += `
    <div class="inter-module-connector ${allModulesCleared ? 'completed' : ''}"></div>
    <div class="exam-milestone-card" style="border-color: ${examPassed || allModulesCleared ? 'var(--gold)' : 'rgba(255,255,255,0.15)'};">
      <div>
        <div class="section-test-badge" style="background: ${examPassed ? 'rgba(56, 176, 0, 0.2)' : 'rgba(212, 175, 55, 0.2)'};">
          ${examPassed ? 'ACCREDITATION EARNED' : allModulesCleared ? 'CAPSTONE READY' : 'MILESTONE LOCKED'}
        </div>
        <h3 style="margin-top: 8px; font-size: 1.25rem; color: var(--champagne);">
          The Editorial Board Examination (50 Questions)
        </h3>
        <p style="font-size: 0.88rem; color: var(--muted); margin-top: 4px; max-width: 500px;">
          The rigorous 50-problem accreditation exam requiring 45/50 (90%) to confer the official Litdom Editor Certification.
        </p>
      </div>
      <div>
        ${
          examPassed
            ? `<button class="btn btn-gold" onclick="navigateTo('certificate')">View Official Certificate 🎓 &rarr;</button>`
            : allModulesCleared
            ? `<button class="btn btn-gold" onclick="navigateTo('exam')">Begin Final Exam &rarr;</button>`
            : `<button class="btn btn-outline" style="opacity: 0.5; cursor: not-allowed;" onclick="showToast('Complete all 5 modules and assessments first.', '🔒')">Locked (Pass All 5 Modules)</button>`
        }
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function selectSection(mIdx, sIdx) {
  const sState = getSectionState(mIdx, sIdx);
  if (sState === "locked") {
    showToast("This section is locked. Complete the preceding section test first.", "🔒");
    return;
  }
  state.activeModuleIndex = mIdx;
  state.activeSectionIndex = sIdx;
  saveState();
  navigateTo("content");
}

function openModuleAssessment(mIdx) {
  if (!canTakeModuleAssessment(mIdx)) {
    showToast("Complete all section tests in this module first.", "🔒");
    return;
  }
  state.activeAssessmentModIndex = mIdx;
  saveState();
  navigateTo("module-assessment");
}

/* --- View C: Section Content & Assessment --- */
function renderSectionContent() {
  const course = getActiveCourse();
  const mod = course.modules[state.activeModuleIndex];
  const sec = mod.sections[state.activeSectionIndex];

  // Breadcrumbs & Header
  const modLabel = document.getElementById("contentModuleLabel");
  const titleEl = document.getElementById("contentSectionTitle");
  const descEl = document.getElementById("contentSectionDesc");
  const bcEl = document.getElementById("contentBreadcrumb");

  if (modLabel) modLabel.textContent = `Module ${mod.num} / Section ${state.activeSectionIndex + 1}`;
  if (titleEl) titleEl.textContent = sec.title;
  if (descEl) descEl.textContent = `Duration: ${sec.duration} • Curriculum of Litdom Academy`;
  if (bcEl) bcEl.textContent = sec.title;

  const isCompleted = isSectionCompleted(sec.id);
  const pBar = document.getElementById("sectionProgressBar");
  const pTxt = document.getElementById("sectionProgressPct");
  if (pBar) pBar.style.width = isCompleted ? "100%" : "50%";
  if (pTxt) pTxt.textContent = isCompleted ? "100% Completed" : "In Progress";

  // Render Rich Content Blocks
  const flowContainer = document.getElementById("contentBlocksFlow");
  if (!flowContainer) return;

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
                  <span>Litdom Masterclass Audio</span>
                  <span>04:15</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                  <div style="width: 38%; height: 100%; background: var(--gold);"></div>
                </div>
              </div>
            </div>
          </div>
        `;
      case "video":
        return `
          <div class="content-block-card">
            <h4>🎬 ${block.title}</h4>
            <p style="font-size: 0.88rem; color: var(--muted); margin: 6px 0 14px;">${block.caption}</p>
            <div style="position: relative; background: #000; border-radius: var(--radius-sm); height: 260px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid var(--charcoal-border);">
              <div style="font-size: 3rem; color: var(--gold); cursor: pointer;" onclick="showToast('Video streaming ready.', '▶')">▶</div>
              <span style="font-size: 0.85rem; color: var(--muted); margin-top: 10px;">Litdom Studio Master Lecture</span>
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
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--gold); text-transform: uppercase;">Editorially Diagnosed</span>
                <p style="font-size: 0.9rem; color: var(--champagne); margin-top: 6px; font-weight: 500;">"${block.after}"</p>
              </div>
            </div>
            <p style="font-size: 0.82rem; color: var(--muted); margin-top: 12px;"><strong>Diagnostic Note:</strong> ${block.explanation}</p>
          </div>
        `;
      case "exercise":
        return `
          <div class="content-block-card" style="border-left: 3px solid var(--gold);">
            <h4>✏️ ${block.title}</h4>
            <p style="font-size: 0.9rem; color: var(--ivory); margin: 8px 0;">${block.instructions}</p>
            <div style="background: #111116; padding: 14px; border-radius: var(--radius-sm); margin-top: 10px; font-family: monospace; font-size: 0.88rem; color: var(--champagne);">
              "The moonlight reflected off the cold water. [Click to flag overzealous line-edit: <span style='text-decoration: underline; color: #ff8b8b; cursor: pointer;' onclick='showToast(\"Author voice preserved! Avoid unnecessary synonym replacement.\", \"✓\")'>Delete superfluous adjective</span>]"
            </div>
          </div>
        `;
      case "download":
      case "pdf":
        return `
          <div class="content-block-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <h4>📑 ${block.title}</h4>
                <p style="font-size: 0.82rem; color: var(--muted); margin-top: 4px;">${block.caption}</p>
              </div>
              <button class="btn btn-outline" style="border-color: var(--gold); color: var(--gold);" onclick="showToast('Document downloaded to device.', '📥')">
                Download Resource 📥
              </button>
            </div>
          </div>
        `;
      case "embed":
        return `
          <div class="embed-container-card">
            <div style="padding: 14px 18px; border-bottom: 1px solid var(--charcoal-border); display: flex; justify-content: space-between; align-items: center;">
              <h5 style="color: var(--champagne); font-size: 0.9rem;">📊 ${block.title}</h5>
              <span style="font-size: 0.75rem; color: var(--muted);">${block.caption}</span>
            </div>
            <div style="padding: 24px; text-align: center; background: #0c0c11;">
              <div style="border: 2px dashed rgba(212,175,55,0.3); border-radius: var(--radius-md); padding: 30px 20px;">
                <h4 style="color: var(--ivory); font-family: var(--font-serif);">Litdom Editorial Framework</h4>
                <p style="font-size: 0.85rem; color: var(--muted); margin: 8px auto 14px; max-width: 440px;">
                  Interactive Diagnostic Matrix for assessing narrative pacing and thematic gravity.
                </p>
                <button class="btn btn-gold" style="font-size: 0.82rem; padding: 8px 18px;" onclick="showToast('Matrix loaded successfully.', '✓')">
                  Expand Presentation Fullscreen
                </button>
              </div>
            </div>
          </div>
        `;
      default:
        return "";
    }
  }).join("");

  // SECTION ASSESSMENT TEST (MANDATORY: 1 QUESTION, 3 OPTIONS)
  const testData = sec.test;
  let testHtml = `
    <div class="section-test-box" id="sectionTestBox">
      <div class="section-test-badge">Section Assessment Test</div>
      <h3 style="color: var(--champagne); font-size: 1.15rem; margin-bottom: 8px;">
        Knowledge Verification: Unlock Next Stage
      </h3>
      <p style="font-size: 0.9rem; color: var(--muted); margin-bottom: 20px;">
        You must answer this single question correctly to unlock the subsequent section on your roadmap.
      </p>

      <div style="background: rgba(0,0,0,0.3); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.08);">
        <h4 style="font-size: 1rem; color: var(--ivory); margin-bottom: 14px;">
          ${testData.question}
        </h4>

        <div style="display: flex; flex-direction: column; gap: 10px;" id="sectionOptionsList">
  `;

  testData.options.forEach((opt, idx) => {
    testHtml += `
      <label class="quiz-option-card" id="sec-opt-${idx}" onclick="handleSectionAnswer(${idx})" style="cursor: pointer;">
        <input type="radio" name="section_quiz" value="${idx}" style="margin-right: 12px; accent-color: var(--gold);" ${isCompleted && idx === testData.correctAnswer ? 'checked' : ''}>
        <span style="font-size: 0.92rem; color: var(--ivory);">${opt}</span>
      </label>
    `;
  });

  testHtml += `
        </div>
        <div id="sectionFeedbackArea" style="margin-top: 16px; display: ${isCompleted ? 'block' : 'none'};">
          ${
            isCompleted
              ? `<div style="background: rgba(212, 175, 55, 0.15); border: 1px solid var(--gold); border-radius: var(--radius-sm); padding: 12px 16px; color: var(--champagne);">
                   <strong>✓ Correct!</strong> Section completed. Next phase is unlocked on your roadmap.
                 </div>`
              : ''
          }
        </div>
      </div>
    </div>
  `;

  flowContainer.innerHTML = blocksHtml + testHtml;

  // Complete Banner state
  const banner = document.getElementById("sectionCompleteBanner");
  if (banner) {
    banner.style.display = isCompleted ? "block" : "none";
  }
}

function handleSectionAnswer(selectedIdx) {
  const course = getActiveCourse();
  const mod = course.modules[state.activeModuleIndex];
  const sec = mod.sections[state.activeSectionIndex];
  const test = sec.test;

  const feedback = document.getElementById("sectionFeedbackArea");
  const options = document.querySelectorAll("#sectionOptionsList .quiz-option-card");

  options.forEach((el, idx) => {
    el.classList.remove("selected", "correct", "wrong");
    if (idx === selectedIdx) el.classList.add("selected");
  });

  if (selectedIdx === test.correctAnswer) {
    // CORRECT!
    state.completedSections[sec.id] = true;
    saveState();

    const selectedEl = document.getElementById(`sec-opt-${selectedIdx}`);
    if (selectedEl) selectedEl.classList.add("correct");

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div style="background: rgba(212, 175, 55, 0.18); border: 1px solid var(--gold); border-radius: var(--radius-sm); padding: 14px 18px; color: var(--ivory);">
          <div style="color: var(--gold); font-weight: 700; margin-bottom: 4px; font-size: 1rem;">
            ✓ Correct Answer! Section Mastery Achieved
          </div>
          <p style="font-size: 0.88rem; color: var(--muted);">${test.explanation}</p>
        </div>
      `;
    }

    const banner = document.getElementById("sectionCompleteBanner");
    if (banner) banner.style.display = "block";

    const pBar = document.getElementById("sectionProgressBar");
    const pTxt = document.getElementById("sectionProgressPct");
    if (pBar) pBar.style.width = "100%";
    if (pTxt) pTxt.textContent = "100% Completed";

    showToast("Section cleared! Next stage unlocked on roadmap.", "✓");
  } else {
    // INCORRECT!
    const selectedEl = document.getElementById(`sec-opt-${selectedIdx}`);
    if (selectedEl) selectedEl.classList.add("wrong");

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div style="background: rgba(255, 107, 107, 0.15); border: 1px solid #ff6b6b; border-radius: var(--radius-sm); padding: 14px 18px; color: var(--ivory);">
          <div style="color: #ff8b8b; font-weight: 700; margin-bottom: 4px; font-size: 0.95rem;">
            ✕ Incorrect Answer
          </div>
          <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 8px;">
            Review the section concepts above and select the correct option to unlock the next section.
          </p>
          <button class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 14px;" onclick="renderSectionContent()">
            Try Again ↻
          </button>
        </div>
      `;
    }

    showToast("Incorrect. Re-read the section materials and try again.", "⚠️");
  }
}

function advanceToNextSection() {
  const course = getActiveCourse();
  const currentMod = course.modules[state.activeModuleIndex];

  if (state.activeSectionIndex < currentMod.sections.length - 1) {
    // Next section in current module
    state.activeSectionIndex++;
    saveState();
    renderSectionContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // End of module sections -> Advance to Module Assessment
    showToast(`All sections cleared! Proceeding to Module ${currentMod.num} Assessment.`, "📜");
    state.activeAssessmentModIndex = state.activeModuleIndex;
    saveState();
    navigateTo("module-assessment");
  }
}

function toggleAudioDemo(btn) {
  if (btn.textContent.trim() === "▶") {
    btn.textContent = "❚❚";
    showToast("Audio masterclass playing...", "🔊");
  } else {
    btn.textContent = "▶";
    showToast("Audio paused.", "⏸️");
  }
}

/* --- View E1: Module Assessment View --- */
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
    : `Unlocks Final Examination`;
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
        <h2 style="color: var(--champagne); font-size: 1.5rem;">Module ${mod.num} Assessment Passed!</h2>
        <div class="score-banner" style="color: var(--gold); font-size: 2rem; font-weight: 800; margin: 12px 0;">
          Score: ${score} / 5 (${(score/5)*100}%)
        </div>
        <p style="color: var(--ivory); font-size: 0.95rem; max-width: 500px; margin: 0 auto 24px;">
          ${
            isLastModule
              ? "Magnificent achievement! You have completed all 5 curriculum modules. The 50-Question Final Capstone Examination is now UNLOCKED on your roadmap."
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

/* --- View E2: Final Examination View (50 Questions, Passing 45/50) --- */
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
    showToast(`Please answer all questions. Missing: Problem ${unansweredIndices.slice(0, 3).join(", ")}...`, "⚠️");
    const firstMissing = document.getElementById(`final-q-item-${unansweredIndices[0] - 1}`);
    if (firstMissing) firstMissing.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const passed = score >= exam.passingScore;
  const resultBox = document.getElementById("examResultBox");
  const submitWrapper = document.getElementById("examSubmitWrapper");

  state.examState.score = score;
  state.examState.passed = passed;
  state.examState.timestamp = Date.now();
  saveState();

  if (submitWrapper) submitWrapper.style.display = "none";

  if (passed) {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 12px;">🎓</div>
        <h2 style="color: var(--champagne); font-size: 1.6rem;">Board Accreditation Conferred!</h2>
        <div class="score-banner" style="color: var(--gold); font-size: 2.2rem; font-weight: 800; margin: 12px 0;">
          Score: ${score} / 50 (${(score/50)*100}%)
        </div>
        <p style="color: var(--ivory); font-size: 0.98rem; max-width: 520px; margin: 0 auto 24px;">
          Distinction achieved! You have satisfied the rigorous 45/50 standard of Litdom Academy. Your official Certificate of Editorial Mastery has been generated and sealed.
        </p>
        <button class="btn btn-gold" style="padding: 16px 36px; font-size: 1.1rem;" onclick="navigateTo('certificate')">
          View Official Certificate & Credentials &rarr;
        </button>
      `;
    }
    showToast(`Exam Passed with ${score}/50! Accreditation granted.`, "🎓");
  } else {
    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="font-size: 2.6rem; margin-bottom: 10px;">⚖️</div>
        <h2 style="color: #ff8b8b; font-size: 1.4rem;">Accreditation Threshold Not Met</h2>
        <div class="score-banner" style="color: #ff8b8b; font-size: 2rem; font-weight: 800; margin: 12px 0;">
          Score: ${score} / 50 (Passing: 45 / 50)
        </div>
        <p style="color: var(--muted); font-size: 0.92rem; max-width: 500px; margin: 0 auto 20px;">
          The Litdom Editorial Board requires a minimum score of 45/50 (90%) for formal credentialing. Review the curriculum modules and re-attempt the examination.
        </p>
        <div style="display: flex; gap: 14px; justify-content: center;">
          <button class="btn btn-outline" onclick="navigateTo('dashboard')">
            Review Roadmap
          </button>
          <button class="btn btn-gold" onclick="renderExamScreen()">
            Retake Exam Now ↻
          </button>
        </div>
      `;
    }
    showToast(`Score: ${score}/50. Required: 45/50.`, "⚠️");
  }
}

/* --- View F: Official Certificate --- */
function renderCertificate() {
  if (!state.examState.passed) {
    showToast("Certificate locked. Pass the Final Examination (45/50) first.", "🔒");
    navigateTo("dashboard");
    return;
  }

  const nameEl = document.getElementById("certRecipientName");
  const courseEl = document.getElementById("certCourseTitle");
  const dateEl = document.getElementById("certIssueDate");
  const codeEl = document.getElementById("certCodeDisplay");

  if (nameEl) nameEl.textContent = state.studentName;
  if (courseEl) courseEl.textContent = getActiveCourse().title;
  if (dateEl) {
    const d = new Date(state.examState.timestamp || Date.now());
    dateEl.textContent = d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }
  if (codeEl) {
    codeEl.textContent = `LIT-${state.examState.score}X-${Math.abs(state.studentName.split("").reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0) % 99999)}`;
  }
}

function updateStudentName() {
  const current = state.studentName;
  const next = prompt("Enter your full legal name for the official certificate:", current);
  if (next && next.trim()) {
    state.studentName = next.trim();
    saveState();
    renderCertificate();
    showToast("Certificate name updated!", "✓");
  }
}

// Window aliases
window.changeStudentNamePrompt = updateStudentName;
window.updateStudentName = updateStudentName;
window.openPathModal = openPathModal;
window.closePathModal = closePathModal;
window.selectPath = selectPath;

/* --- Initialization --- */
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderHub();
});
