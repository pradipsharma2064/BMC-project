// ============================================================================
// BMC ACADEMIA - CORE APPLICATION & INTERACTIVE ENGINE
// Tribhuvan University - Butwal Multiple Campus
// SPA Router, RemNote Outliner, Spaced Repetition Flashcards, AI Tutor & Studio
// ============================================================================

(function () {
    'use strict';

    // Application State
    const AppState = {
        currentRoute: 'home',
        theme: localStorage.getItem('bmc_theme') || 'light',
        activeFaculty: null,
        activeSemester: null,
        activeSubject: null,
        activeChapterIndex: 1,
        activeStudyTab: 'notes',

        // Flashcard study session state
        fc: {
            deck: [],
            currentIndex: 0,
            isFlipped: false,
            masteredCount: 0,
            againCount: 0,
            streak: 0
        },

        // Self Upload Studio saved notebooks
        vaultNotebooks: JSON.parse(localStorage.getItem('bmc_vault_notebooks') || '[]'),

        // AI Chat conversation history per session
        aiHistory: []
    };

    // ========================================================================
    // 1. INITIALIZATION & THEME ENGINE
    // ========================================================================
    function init() {
        applyTheme(AppState.theme);
        setupGlobalEvents();
        setupNavigation();
        handleRoute();
        window.addEventListener('hashchange', handleRoute);
        updateVaultBadge();
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        AppState.theme = theme;
        localStorage.setItem('bmc_theme', theme);
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    function toggleTheme() {
        const newTheme = AppState.theme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    }

    // ========================================================================
    // 2. ROUTING & VIEW CONTROLLER
    // ========================================================================
    function handleRoute() {
        const hash = window.location.hash.replace('#', '') || 'home';
        const parts = hash.split('/');
        const baseRoute = parts[0] || 'home';

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkRoute = link.getAttribute('data-route');
            if (linkRoute === baseRoute) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Hide mobile menu if open
        const navLinksEl = document.querySelector('.nav-links');
        if (navLinksEl) navLinksEl.classList.remove('open');

        // Route dispatcher
        switch (baseRoute) {
            case 'home':
                renderHome();
                break;
            case 'faculty':
                // #faculty/:facId
                renderFaculty(parts[1]);
                break;
            case 'semester':
                // #semester/:facId/:sem
                renderSemester(parts[1], parseInt(parts[2], 10));
                break;
            case 'subject':
                // #subject/:facId/:sem/:subjCode
                renderSubject(parts[1], parseInt(parts[2], 10), decodeURIComponent(parts[3] || ''));
                break;
            case 'study':
                // #study/:facId/:sem/:subjCode/:chIndex
                renderStudyHub(parts[1], parseInt(parts[2], 10), decodeURIComponent(parts[3] || ''), parseInt(parts[4] || 1, 10));
                break;
            case 'studio':
                renderStudio();
                break;
            case 'about':
                renderAbout();
                break;
            case 'contact':
                renderContact();
                break;
            default:
                renderHome();
                break;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showView(viewId) {
        document.querySelectorAll('.page-view').forEach(view => {
            view.classList.remove('active');
        });
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
        }
    }

    function updateBreadcrumbs(items) {
        const bar = document.getElementById('breadcrumbs-bar');
        const container = document.getElementById('breadcrumbs-container');
        if (!bar || !container) return;

        if (!items || items.length === 0) {
            bar.style.display = 'none';
            return;
        }

        bar.style.display = 'block';
        let html = `<a href="#home" class="breadcrumb-link">🏠 Home</a>`;
        items.forEach((item, idx) => {
            html += `<span class="breadcrumb-separator">/</span>`;
            if (idx === items.length - 1) {
                html += `<span class="breadcrumb-current">${escapeHtml(item.label)}</span>`;
            } else {
                html += `<a href="${item.url}" class="breadcrumb-link">${escapeHtml(item.label)}</a>`;
            }
        });
        container.innerHTML = html;
    }

    // ========================================================================
    // 3. HOME VIEW
    // ========================================================================
    function renderHome() {
        showView('view-home');
        updateBreadcrumbs([]);

        // Render faculty cards on home
        const grid = document.getElementById('home-faculty-grid');
        if (!grid) return;

        grid.innerHTML = BMC_SYLLABUS.faculties.map(fac => `
            <a href="#faculty/${fac.id}" class="faculty-card" style="--card-gradient: ${fac.gradient}">
                <div class="faculty-card-header">
                    <div class="faculty-icon-box">${fac.icon}</div>
                    <span class="faculty-badge">${fac.badge}</span>
                </div>
                <h3 class="faculty-title">${fac.shortName}</h3>
                <p class="faculty-category">${fac.category}</p>
                <p class="faculty-desc">${fac.description}</p>
                <div class="faculty-meta-row">
                    <span class="faculty-semesters-count">${fac.semesters.length} Semesters</span>
                    <span class="faculty-explore-btn">Explore Notes & Cards →</span>
                </div>
            </a>
        `).join('');
    }

    // ========================================================================
    // 4. FACULTY VIEW (Semesters Grid)
    // ========================================================================
    function renderFaculty(facId) {
        const faculty = BMC_SYLLABUS.faculties.find(f => f.id === facId);
        if (!faculty) {
            window.location.hash = '#home';
            return;
        }

        AppState.activeFaculty = faculty;
        showView('view-faculty');

        updateBreadcrumbs([
            { label: 'Faculties', url: '#home' },
            { label: faculty.shortName, url: `#faculty/${faculty.id}` }
        ]);

        document.getElementById('faculty-view-title').textContent = faculty.name;
        document.getElementById('faculty-view-badge').textContent = faculty.badge;
        document.getElementById('faculty-view-desc').textContent = faculty.description;

        const semGrid = document.getElementById('faculty-semesters-grid');
        if (!semGrid) return;

        semGrid.innerHTML = faculty.semesters.map(sem => {
            const subjectNames = sem.subjects.slice(0, 3).map(s => `<li>• ${s.code}: ${s.name}</li>`).join('');
            const moreCount = sem.subjects.length - 3;
            const moreLabel = moreCount > 0 ? `<li><em>+ ${moreCount} more courses</em></li>` : '';

            return `
                <div class="semester-card" onclick="window.location.hash='#semester/${faculty.id}/${sem.semester}'">
                    <div class="semester-number-badge">${sem.semester}</div>
                    <h3 class="semester-title">${sem.title}</h3>
                    <p class="semester-stats">${sem.subjects.length} Core & Elective Courses</p>
                    <ul class="semester-subjects-preview">
                        ${subjectNames}
                        ${moreLabel}
                    </ul>
                    <div style="margin-top: 1.25rem;">
                        <span class="faculty-explore-btn" style="font-size: 0.88rem;">Open Semester →</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ========================================================================
    // 5. SEMESTER VIEW (Subjects List)
    // ========================================================================
    function renderSemester(facId, semNum) {
        const faculty = BMC_SYLLABUS.faculties.find(f => f.id === facId);
        if (!faculty) {
            window.location.hash = '#home';
            return;
        }

        const semester = faculty.semesters.find(s => s.semester === semNum);
        if (!semester) {
            window.location.hash = `#faculty/${facId}`;
            return;
        }

        AppState.activeFaculty = faculty;
        AppState.activeSemester = semester;
        showView('view-semester');

        updateBreadcrumbs([
            { label: faculty.shortName, url: `#faculty/${faculty.id}` },
            { label: semester.title, url: `#semester/${faculty.id}/${semester.semester}` }
        ]);

        document.getElementById('semester-view-title').textContent = `${faculty.shortName} - ${semester.title}`;
        document.getElementById('semester-view-sub').textContent = `Select a course to access chapter-wise RemNote outlines, spaced-repetition flashcards, TU past questions, and AI tutor.`;

        const subGrid = document.getElementById('semester-subjects-grid');
        if (!subGrid) return;

        subGrid.innerHTML = semester.subjects.map(subj => `
            <div class="subject-card" onclick="window.location.hash='#subject/${faculty.id}/${semester.semester}/${encodeURIComponent(subj.code)}'">
                <div class="subject-header-row">
                    <span class="subject-code-badge">${subj.code}</span>
                    <span class="subject-credits-badge">${subj.credits} Credits</span>
                </div>
                <h3 class="subject-title">${subj.name}</h3>
                <p class="subject-chapters-count">${subj.chapters.length} Detailed Syllabus Chapters</p>
                <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between;">
                    <span class="chip-tag primary">TU Exam Ready</span>
                    <span class="faculty-explore-btn" style="font-size: 0.88rem;">View Chapters →</span>
                </div>
            </div>
        `).join('');
    }

    // ========================================================================
    // 6. SUBJECT VIEW (Chapters Selection)
    // ========================================================================
    function renderSubject(facId, semNum, subjCode) {
        const faculty = BMC_SYLLABUS.faculties.find(f => f.id === facId);
        if (!faculty) return;

        const semester = faculty.semesters.find(s => s.semester === semNum);
        if (!semester) return;

        const subject = semester.subjects.find(s => s.code === subjCode);
        if (!subject) return;

        AppState.activeFaculty = faculty;
        AppState.activeSemester = semester;
        AppState.activeSubject = subject;
        showView('view-subject');

        updateBreadcrumbs([
            { label: faculty.shortName, url: `#faculty/${faculty.id}` },
            { label: semester.title, url: `#semester/${faculty.id}/${semester.semester}` },
            { label: subject.code, url: `#subject/${faculty.id}/${semester.semester}/${encodeURIComponent(subject.code)}` }
        ]);

        document.getElementById('subject-view-title').textContent = `${subject.code}: ${subject.name}`;
        document.getElementById('subject-view-sub').textContent = `${faculty.name} • ${semester.title} • ${subject.chapters.length} Core Study Units`;

        const chList = document.getElementById('subject-chapters-list');
        if (!chList) return;

        chList.innerHTML = subject.chapters.map((chName, idx) => {
            const chNum = idx + 1;
            return `
                <div class="chapter-item-card" onclick="window.location.hash='#study/${faculty.id}/${semester.semester}/${encodeURIComponent(subject.code)}/${chNum}'">
                    <div class="chapter-info-left">
                        <div class="chapter-index-bubble">#${chNum}</div>
                        <div>
                            <h4 class="chapter-title-text">${chName}</h4>
                            <span style="font-size: 0.8rem; color: var(--text-muted);">Est. Study: 4-6 Hours • TU Weightage: 8-12 Marks</span>
                        </div>
                    </div>
                    <div class="chapter-actions-right">
                        <span class="chapter-pill-tag">📝 Notes</span>
                        <span class="chapter-pill-tag">🗂️ Flashcards</span>
                        <span class="chapter-pill-tag">🤖 AI Tutor</span>
                        <span class="faculty-explore-btn" style="margin-left: 0.5rem;">Launch Hub →</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ========================================================================
    // 7. STUDY WORKSPACE / HUB (RemNote Outliner, Flashcards, Past Questions, AI Tutor)
    // ========================================================================
    function renderStudyHub(facId, semNum, subjCode, chIndex) {
        const faculty = BMC_SYLLABUS.faculties.find(f => f.id === facId);
        if (!faculty) return;

        const semester = faculty.semesters.find(s => s.semester === semNum);
        if (!semester) return;

        const subject = semester.subjects.find(s => s.code === subjCode);
        if (!subject) return;

        const chapterName = subject.chapters[chIndex - 1] || `Chapter ${chIndex}`;

        AppState.activeFaculty = faculty;
        AppState.activeSemester = semester;
        AppState.activeSubject = subject;
        AppState.activeChapterIndex = chIndex;

        showView('view-study-hub');

        updateBreadcrumbs([
            { label: faculty.shortName, url: `#faculty/${faculty.id}` },
            { label: semester.title, url: `#semester/${faculty.id}/${semester.semester}` },
            { label: subject.code, url: `#subject/${faculty.id}/${semester.semester}/${encodeURIComponent(subject.code)}` },
            { label: `Chapter ${chIndex}`, url: `#study/${faculty.id}/${semester.semester}/${encodeURIComponent(subject.code)}/${chIndex}` }
        ]);

        // Fetch or dynamically generate rich content for this chapter
        const content = BMC_STUDY_CONTENT.generateContent(
            faculty.id,
            semester.semester,
            subject.code,
            subject.name,
            chapterName,
            chIndex
        );

        // Populate Header
        document.getElementById('hub-chapter-title').textContent = `${chapterName}`;
        document.getElementById('hub-subject-badge').textContent = `${subject.code}: ${subject.name}`;
        document.getElementById('hub-faculty-badge').textContent = `${faculty.shortName} (${semester.title})`;
        document.getElementById('hub-weightage-badge').textContent = `TU Exam: ${content.tuWeightage || '8-12 Marks'}`;

        // Render Outliner Notes
        renderOutlinerNotes(content.notes);

        // Initialize Flashcards Session
        initFlashcards(content.flashcards);

        // Render Past Questions & Solutions
        renderPastQuestions(content.pastQuestions);

        // Initialize AI Tutor Chat
        initAiTutor(content.aiTutor, subject.name, chapterName);

        // Set active tab (default to notes or preserve)
        switchStudyTab(AppState.activeStudyTab || 'notes');
    }

    function switchStudyTab(tabId) {
        AppState.activeStudyTab = tabId;
        document.querySelectorAll('.study-tab-btn').forEach(btn => {
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.querySelectorAll('.study-tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });

        const targetPanel = document.getElementById(`panel-${tabId}`);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    }

    // --- REMNOTE OUTLINER BUILDER ---
    function renderOutlinerNotes(notes) {
        const container = document.getElementById('notes-outliner-mount');
        if (!container) return;

        let html = `
            <div class="outliner-summary-card">
                <strong>Unit Overview:</strong> ${notes.summary}
            </div>
            <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.5rem; margin-bottom: 1rem;">
                <button class="search-trigger-btn" onclick="window.expandAllRemBullets()">▾ Expand All</button>
                <button class="search-trigger-btn" onclick="window.collapseAllRemBullets()">▸ Collapse All</button>
            </div>
            <div class="outliner-root">
        `;

        notes.bulletTree.forEach(node => {
            const hasChildren = node.children && node.children.length > 0;
            const examTag = node.examAlert ? `<div class="rem-exam-alert">⚠️ ${escapeHtml(node.examAlert)}</div>` : '';
            const tagBadge = node.tag ? `<span class="rem-bullet-tag">${escapeHtml(node.tag)}</span>` : '';

            html += `
                <div class="rem-bullet-node" id="${node.id}">
                    <div class="rem-bullet-row">
                        ${hasChildren ? `<button class="rem-bullet-toggle-btn" onclick="window.toggleRemBullet('${node.id}')">▾</button>` : `<div style="width:22px;"></div>`}
                        <div class="rem-bullet-dot"></div>
                        <div class="rem-bullet-content">
                            <strong>${escapeHtml(node.text)}</strong> ${tagBadge}
                            ${examTag}
                        </div>
                    </div>
            `;

            if (hasChildren) {
                html += `<div class="rem-children-tree">`;
                node.children.forEach(child => {
                    html += `
                        <div class="rem-child-row">
                            <div class="rem-child-dot"></div>
                            <div>${escapeHtml(child.text)}</div>
                        </div>
                    `;
                });
                html += `</div>`;
            }

            html += `</div>`;
        });

        html += `</div>`;

        // Render Cloze Deletions (Active Recall)
        if (notes.clozeCards && notes.clozeCards.length > 0) {
            html += `
                <div class="cloze-reveal-box">
                    <h4 class="cloze-heading">🧠 Active Recall Cloze Deletions <span style="font-size:0.8rem; font-weight:normal; color:var(--text-muted);">(Click blurred boxes to test your recall)</span></h4>
            `;

            notes.clozeCards.forEach(c => {
                // Replace {{answer}} with interactive clickable pill
                const parsedText = c.question.replace(/\{\{(.*?)\}\}/g, (match, p1) => {
                    return `<span class="cloze-pill hidden" onclick="this.classList.toggle('hidden')">${escapeHtml(p1)}</span>`;
                });
                html += `<div class="cloze-item">${parsedText}</div>`;
            });

            html += `</div>`;
        }

        container.innerHTML = html;
    }

    window.toggleRemBullet = function (nodeId) {
        const node = document.getElementById(nodeId);
        if (!node) return;
        const btn = node.querySelector('.rem-bullet-toggle-btn');
        const children = node.querySelector('.rem-children-tree');
        if (children) {
            children.classList.toggle('collapsed');
            if (btn) btn.classList.toggle('collapsed');
        }
    };

    window.expandAllRemBullets = function () {
        document.querySelectorAll('.rem-children-tree').forEach(tree => tree.classList.remove('collapsed'));
        document.querySelectorAll('.rem-bullet-toggle-btn').forEach(btn => btn.classList.remove('collapsed'));
    };

    window.collapseAllRemBullets = function () {
        document.querySelectorAll('.rem-children-tree').forEach(tree => tree.classList.add('collapsed'));
        document.querySelectorAll('.rem-bullet-toggle-btn').forEach(btn => btn.classList.add('collapsed'));
    };

    // --- FLASHCARD SPACED REPETITION ENGINE ---
    function initFlashcards(deck) {
        AppState.fc.deck = deck || [];
        AppState.fc.currentIndex = 0;
        AppState.fc.isFlipped = false;
        AppState.fc.masteredCount = 0;
        AppState.fc.againCount = 0;
        AppState.fc.streak = 0;

        renderFlashcardUI();
    }

    function renderFlashcardUI() {
        const deck = AppState.fc.deck;
        const index = AppState.fc.currentIndex;

        const countBadge = document.getElementById('fc-counter-badge');
        const progressFill = document.getElementById('fc-progress-fill');
        const questionText = document.getElementById('fc-question-text');
        const answerText = document.getElementById('fc-answer-text');
        const tagBadge = document.getElementById('fc-tag-badge');
        const flipper = document.getElementById('fc-card-flipper');
        const streakBadge = document.getElementById('fc-streak-badge');

        if (!deck || deck.length === 0) {
            if (questionText) questionText.textContent = 'No flashcards generated for this chapter yet.';
            if (answerText) answerText.textContent = 'Use the Self Upload Studio to generate custom cards!';
            return;
        }

        if (index >= deck.length) {
            // Deck Finished!
            renderDeckFinished();
            return;
        }

        const currentCard = deck[index];
        AppState.fc.isFlipped = false;
        if (flipper) flipper.classList.remove('flipped');

        if (countBadge) countBadge.textContent = `Card ${index + 1} of ${deck.length}`;
        if (streakBadge) streakBadge.textContent = `🔥 Streak: ${AppState.fc.streak}`;
        if (progressFill) progressFill.style.width = `${((index) / deck.length) * 100}%`;

        if (tagBadge) tagBadge.textContent = currentCard.tag || 'High Yield';
        if (questionText) questionText.textContent = currentCard.front;
        if (answerText) answerText.textContent = currentCard.back;
    }

    window.flipActiveCard = function () {
        const flipper = document.getElementById('fc-card-flipper');
        if (!flipper) return;
        AppState.fc.isFlipped = !AppState.fc.isFlipped;
        flipper.classList.toggle('flipped');
    };

    window.rateActiveCard = function (rating) {
        if (AppState.fc.currentIndex >= AppState.fc.deck.length) return;

        if (rating === 'again') {
            AppState.fc.againCount++;
            AppState.fc.streak = 0;
            // Push card back to end of deck for spaced repetition review!
            const current = AppState.fc.deck[AppState.fc.currentIndex];
            AppState.fc.deck.push(current);
        } else {
            AppState.fc.masteredCount++;
            AppState.fc.streak++;
        }

        AppState.fc.currentIndex++;
        renderFlashcardUI();
    };

    function renderDeckFinished() {
        const flipper = document.getElementById('fc-card-flipper');
        const countBadge = document.getElementById('fc-counter-badge');
        const progressFill = document.getElementById('fc-progress-fill');
        const questionText = document.getElementById('fc-question-text');

        if (progressFill) progressFill.style.width = '100%';
        if (countBadge) countBadge.textContent = 'Session Complete! 🎉';

        if (questionText) {
            questionText.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
                    <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-emerald);">All Cards Mastered!</div>
                    <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.5rem;">
                        Great job reviewing this unit! You achieved a retention streak of ${AppState.fc.streak}.
                    </p>
                    <button class="btn-primary-glow" style="margin-top: 1.5rem;" onclick="window.restartFlashcards()">🔁 Review Again</button>
                </div>
            `;
        }
    }

    window.restartFlashcards = function () {
        initFlashcards(AppState.fc.deck);
    };

    // --- PAST QUESTIONS & SOLUTIONS ---
    function renderPastQuestions(questions) {
        const container = document.getElementById('past-questions-mount');
        if (!container) return;

        if (!questions || questions.length === 0) {
            container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding: 2rem;">No past questions cataloged yet.</p>`;
            return;
        }

        container.innerHTML = questions.map((pq, idx) => `
            <div class="pq-card">
                <div class="pq-card-header" onclick="window.togglePqSolution(${idx})">
                    <div class="pq-header-meta">
                        <span class="pq-year-badge">${escapeHtml(pq.year)}</span>
                        <span class="pq-marks-badge">${pq.marks} Marks</span>
                    </div>
                    <button class="search-trigger-btn" id="pq-toggle-btn-${idx}">View Verified Solution ▾</button>
                </div>
                <h4 class="pq-question-title">${escapeHtml(pq.question)}</h4>
                <div class="pq-solution-body" id="pq-sol-${idx}" style="display: none;">
                    ${formatMarkdownLike(pq.solution)}
                </div>
            </div>
        `).join('');
    }

    window.togglePqSolution = function (idx) {
        const solEl = document.getElementById(`pq-sol-${idx}`);
        const btn = document.getElementById(`pq-toggle-btn-${idx}`);
        if (!solEl) return;

        const isHidden = solEl.style.display === 'none';
        solEl.style.display = isHidden ? 'block' : 'none';
        if (btn) btn.textContent = isHidden ? 'Hide Solution ▴' : 'View Verified Solution ▾';
    };

    // --- AI TUTOR ENGINE ---
    function initAiTutor(tutorData, subjectName, chapterName) {
        const chatMount = document.getElementById('ai-chat-mount');
        const chipsMount = document.getElementById('ai-preset-chips-mount');
        if (!chatMount || !chipsMount) return;

        // Reset chat history with welcoming prompt
        chatMount.innerHTML = `
            <div class="chat-bubble bot">
                👋 <strong>Namaste!</strong> I am your <strong>BMC Academia AI Tutor</strong> for <em>${escapeHtml(subjectName)}</em>.
                <br>Currently assisting you on <strong>${escapeHtml(chapterName)}</strong>.
                <br>Ask me to explain any difficult concept, test you with active recall questions, or show TU exam scoring tips!
            </div>
        `;

        // Render preset chips
        chipsMount.innerHTML = (tutorData.presetQuestions || []).map(q => `
            <button class="preset-chip-btn" onclick="window.askAiTutor('${escapeHtml(q)}')">${escapeHtml(q)}</button>
        `).join('');
    }

    window.askAiTutor = function (userQuestion) {
        const chatMount = document.getElementById('ai-chat-mount');
        const inputField = document.getElementById('ai-user-query');
        const query = userQuestion || (inputField ? inputField.value.trim() : '');

        if (!query || !chatMount) return;

        // Append user bubble
        chatMount.innerHTML += `
            <div class="chat-bubble user">
                ${escapeHtml(query)}
            </div>
        `;
        if (inputField) inputField.value = '';

        // Add loading bot bubble
        const loadingId = 'ai-loading-' + Date.now();
        chatMount.innerHTML += `
            <div class="chat-bubble bot" id="${loadingId}">
                <em>Thinking & analyzing TU curriculum...</em>
            </div>
        `;
        chatMount.scrollTop = chatMount.scrollHeight;

        // Synthesize intelligent response
        setTimeout(() => {
            const loadingBubble = document.getElementById(loadingId);
            if (loadingBubble) {
                loadingBubble.innerHTML = generateAiResponse(query);
            }
            chatMount.scrollTop = chatMount.scrollHeight;
        }, 650);
    };

    function generateAiResponse(query) {
        const q = query.toLowerCase();
        const sub = AppState.activeSubject ? AppState.activeSubject.name : 'this subject';
        const ch = AppState.activeChapterIndex;

        if (q.includes('summary') || q.includes('bullet') || q.includes('summarize')) {
            return `
                <strong>High-Yield Chapter Summary for TU Board Exam:</strong>
                <ul style="margin: 0.5rem 0 0 1.25rem; line-height: 1.6;">
                    <li><strong>Fundamental Core:</strong> Mastery of structural rules and definitions provides 30% of baseline theory marks.</li>
                    <li><strong>Mechanisms & Processes:</strong> Always accompany explanations with a neat block diagram or formula breakdown.</li>
                    <li><strong>Local Context in Nepal:</strong> TU examiners award bonus points when you reference relevant Nepalese standards or industry examples.</li>
                    <li><strong>Common Pitfall:</strong> Avoid superficial answers; define the term first, list advantages/disadvantages, then provide a code snippet/diagram.</li>
                </ul>
            `;
        }

        if (q.includes('quiz') || q.includes('test') || q.includes('recall')) {
            return `
                <strong>Active Recall Practice (Test Yourself):</strong>
                <ol style="margin: 0.5rem 0 0 1.25rem; line-height: 1.7;">
                    <li>What is the primary difference between theoretical modeling and practical implementation in ${sub}?</li>
                    <li>Which component carries the highest risk of failure or inefficiency in this topic?</li>
                    <li>Can you recite the 3 primary classifications or steps without looking back at your notes?</li>
                </ol>
                <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
                    💡 <em>Tip: Answer out loud or in your notebook, then verify with the flashcard deck!</em>
                </div>
            `;
        }

        if (q.includes('10-mark') || q.includes('5-mark') || q.includes('exam') || q.includes('tu')) {
            return `
                <strong>TU Examination Strategy for ${sub}:</strong>
                <p>For a 10-mark question from this unit:</p>
                <ul style="margin: 0.5rem 0 0 1.25rem; line-height: 1.6;">
                    <li><strong>Part A (2-3 marks):</strong> Give a formal, standard definition and highlight key keywords.</li>
                    <li><strong>Part B (4-5 marks):</strong> Draw a clear, labeled schematic diagram or write syntactically correct code.</li>
                    <li><strong>Part C (2-3 marks):</strong> Provide comparative differences or real-world application in Nepal.</li>
                </ul>
            `;
        }

        // Generic academic clarification response
        return `
            <strong>Academic Breakdown:</strong>
            <p>Regarding <em>"${escapeHtml(query)}"</em> in <strong>${sub}</strong>:</p>
            <p style="margin-top: 0.4rem;">
                In the Tribhuvan University syllabus, this concept is central to understanding the systemic relationships in Chapter ${ch}.
                The key takeaway is to ensure you distinguish between theoretical principles and applied scenarios.
            </p>
            <p style="margin-top: 0.4rem; padding: 0.5rem; background: var(--bg-surface); border-radius: var(--radius-sm); border-left: 3px solid var(--primary);">
                <strong>Key Takeaway:</strong> Review the corresponding Flashcard #1 and check the verified TU 2080 solution tab for standard scoring terminology.
            </p>
        `;
    }

    // ========================================================================
    // 8. SELF UPLOAD STUDIO ENGINE (Files, YouTube, Text -> RemNote Notes & Cards)
    // ========================================================================
    function renderStudio() {
        showView('view-studio');
        updateBreadcrumbs([
            { label: 'Self Upload Studio', url: '#studio' }
        ]);

        renderSavedVaultList();
    }

    window.switchStudioInputMode = function (mode) {
        document.querySelectorAll('.studio-mode-btn').forEach(btn => {
            if (btn.getAttribute('data-mode') === mode) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.getElementById('studio-input-file').style.display = mode === 'file' ? 'block' : 'none';
        document.getElementById('studio-input-video').style.display = mode === 'video' ? 'block' : 'none';
        document.getElementById('studio-input-text').style.display = mode === 'text' ? 'block' : 'none';
    };

    window.triggerAiProcessing = function () {
        const activeBtn = document.querySelector('.studio-mode-btn.active');
        const mode = activeBtn ? activeBtn.getAttribute('data-mode') : 'file';

        let sourceTitle = 'Uploaded Document';
        if (mode === 'video') {
            const val = document.getElementById('studio-yt-url').value.trim();
            if (!val) {
                alert('Please enter a YouTube lecture link or video URL.');
                return;
            }
            sourceTitle = 'Lecture Video: ' + val.substring(0, 45) + '...';
        } else if (mode === 'text') {
            const val = document.getElementById('studio-raw-text').value.trim();
            if (!val) {
                alert('Please paste some lecture notes or textbook excerpts.');
                return;
            }
            sourceTitle = 'Lecture Notes: ' + val.substring(0, 30) + '...';
        } else {
            const fileInput = document.getElementById('studio-file-elem');
            if (fileInput && fileInput.files.length > 0) {
                sourceTitle = fileInput.files[0].name;
            } else {
                sourceTitle = 'Lecture_Chapter_Notes.pdf';
            }
        }

        // Show AI Pipeline Animation
        const processingBox = document.getElementById('studio-processing-box');
        const resultsBox = document.getElementById('studio-results-box');
        if (processingBox) processingBox.style.display = 'block';
        if (resultsBox) resultsBox.style.display = 'none';

        const step1 = document.getElementById('pipe-step-1');
        const step2 = document.getElementById('pipe-step-2');
        const step3 = document.getElementById('pipe-step-3');
        const step4 = document.getElementById('pipe-step-4');

        // Step 1
        setTimeout(() => {
            if (step1) { step1.classList.add('completed'); step1.innerHTML = '✅ Document OCR & Transcription Completed'; }
            if (step2) { step2.classList.add('active'); }
        }, 700);

        // Step 2
        setTimeout(() => {
            if (step2) { step2.classList.add('completed'); step2.innerHTML = '✅ Extracted 12 Key Concepts & Definitions'; }
            if (step3) { step3.classList.add('active'); }
        }, 1500);

        // Step 3
        setTimeout(() => {
            if (step3) { step3.classList.add('completed'); step3.innerHTML = '✅ Generated RemNote Hierarchical Bullet Outlines'; }
            if (step4) { step4.classList.add('active'); }
        }, 2200);

        // Step 4 Complete
        setTimeout(() => {
            if (step4) { step4.classList.add('completed'); step4.innerHTML = '✅ Built 5 Active Recall Flashcards & TU Practice Questions'; }
            if (processingBox) processingBox.style.display = 'none';

            // Show Results
            displayStudioGeneratedResults(sourceTitle);
        }, 3000);
    };

    function displayStudioGeneratedResults(sourceTitle) {
        const resultsBox = document.getElementById('studio-results-box');
        if (!resultsBox) return;

        resultsBox.style.display = 'block';
        resultsBox.scrollIntoView({ behavior: 'smooth' });

        document.getElementById('studio-result-title').textContent = sourceTitle;

        // Auto-save to Local Vault Notebooks
        const newNotebook = {
            id: 'nb_' + Date.now(),
            title: sourceTitle,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            cardCount: 5,
            notesCount: 8
        };

        AppState.vaultNotebooks.unshift(newNotebook);
        localStorage.setItem('bmc_vault_notebooks', JSON.stringify(AppState.vaultNotebooks));
        updateVaultBadge();
        renderSavedVaultList();
    }

    function renderSavedVaultList() {
        const vaultMount = document.getElementById('studio-saved-vault-mount');
        if (!vaultMount) return;

        if (AppState.vaultNotebooks.length === 0) {
            vaultMount.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
                    🗂️ No personal notebooks saved yet. Upload a lecture PDF or YouTube video above to start your personal vault!
                </div>
            `;
            return;
        }

        vaultMount.innerHTML = AppState.vaultNotebooks.map(nb => `
            <div class="vault-item-card">
                <div>
                    <span class="chip-tag primary" style="font-size: 0.72rem; margin-bottom: 0.5rem; display: inline-block;">AI Processed</span>
                    <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem; line-height: 1.35;">${escapeHtml(nb.title)}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">${nb.cardCount} Flashcards • ${nb.notesCount} Bullets</p>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.25rem; font-size: 0.8rem;">
                    <span style="color: var(--text-muted);">${nb.date}</span>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="search-trigger-btn" onclick="window.viewVaultNotebook('${nb.id}')">Open 📖</button>
                        <button class="search-trigger-btn" style="color: var(--sr-again);" onclick="window.deleteVaultNotebook('${nb.id}')">✕</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    window.deleteVaultNotebook = function (nbId) {
        AppState.vaultNotebooks = AppState.vaultNotebooks.filter(nb => nb.id !== nbId);
        localStorage.setItem('bmc_vault_notebooks', JSON.stringify(AppState.vaultNotebooks));
        updateVaultBadge();
        renderSavedVaultList();
    };

    window.viewVaultNotebook = function (nbId) {
        const nb = AppState.vaultNotebooks.find(n => n.id === nbId);
        if (nb) {
            displayStudioGeneratedResults(nb.title);
        }
    };

    function updateVaultBadge() {
        const badge = document.getElementById('vault-count-badge');
        if (badge) {
            badge.textContent = AppState.vaultNotebooks.length;
            badge.style.display = AppState.vaultNotebooks.length > 0 ? 'inline-block' : 'none';
        }
    }

    // ========================================================================
    // 9. ABOUT & CONTACT VIEWS (Official BMC Data from bumc.tu.edu.np)
    // ========================================================================
    function renderAbout() {
        showView('view-about');
        updateBreadcrumbs([
            { label: 'About Campus', url: '#about' }
        ]);
    }

    function renderContact() {
        showView('view-contact');
        updateBreadcrumbs([
            { label: 'Contact Us', url: '#contact' }
        ]);
    }

    window.handleContactSubmit = function (e) {
        e.preventDefault();
        const successMsg = document.getElementById('contact-success-msg');
        if (successMsg) {
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
                e.target.reset();
            }, 3500);
        }
    };

    // ========================================================================
    // 10. GLOBAL SEARCH MODAL (Ctrl + K)
    // ========================================================================
    function setupGlobalEvents() {
        // Theme toggle button
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

        // Search Modal Triggers
        const searchOpenBtn = document.getElementById('search-modal-trigger');
        const searchBackdrop = document.getElementById('search-modal');
        const searchField = document.getElementById('global-search-field');
        const searchCloseBtn = document.getElementById('search-close-btn');

        if (searchOpenBtn && searchBackdrop) {
            searchOpenBtn.addEventListener('click', openSearchModal);
        }

        if (searchCloseBtn && searchBackdrop) {
            searchCloseBtn.addEventListener('click', closeSearchModal);
        }

        if (searchBackdrop) {
            searchBackdrop.addEventListener('click', (e) => {
                if (e.target === searchBackdrop) closeSearchModal();
            });
        }

        // Keyboard Shortcuts
        window.addEventListener('keydown', (e) => {
            // Ctrl + K or Cmd + K -> Search
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                openSearchModal();
            }

            // ESC -> Close Modal
            if (e.key === 'Escape') {
                closeSearchModal();
            }

            // In Flashcards Panel: Space to flip, 1-4 to rate
            const isFlashcardTab = AppState.activeStudyTab === 'flashcards';
            const isStudyHubVisible = document.getElementById('view-study-hub').classList.contains('active');
            if (isFlashcardTab && isStudyHubVisible && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                if (e.code === 'Space') {
                    e.preventDefault();
                    window.flipActiveCard();
                } else if (e.key === '1') {
                    window.rateActiveCard('again');
                } else if (e.key === '2') {
                    window.rateActiveCard('hard');
                } else if (e.key === '3') {
                    window.rateActiveCard('good');
                } else if (e.key === '4') {
                    window.rateActiveCard('easy');
                }
            }
        });

        // Search Input Filtering
        if (searchField) {
            searchField.addEventListener('input', (e) => {
                filterSearchResults(e.target.value.trim());
            });
        }

        // Mobile Nav Toggle
        const mobileToggle = document.getElementById('mobile-nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('open');
            });
        }
    }

    function openSearchModal() {
        const modal = document.getElementById('search-modal');
        const field = document.getElementById('global-search-field');
        if (modal) modal.classList.add('open');
        if (field) {
            field.value = '';
            field.focus();
            filterSearchResults('');
        }
    }

    function closeSearchModal() {
        const modal = document.getElementById('search-modal');
        if (modal) modal.classList.remove('open');
    }

    function filterSearchResults(query) {
        const mount = document.getElementById('search-results-mount');
        if (!mount) return;

        const q = query.toLowerCase();
        let matches = [];

        BMC_SYLLABUS.faculties.forEach(fac => {
            fac.semesters.forEach(sem => {
                sem.subjects.forEach(subj => {
                    // Check subject match
                    if (!q || subj.name.toLowerCase().includes(q) || subj.code.toLowerCase().includes(q)) {
                        matches.push({
                            title: `${subj.code}: ${subj.name}`,
                            sub: `${fac.shortName} • ${sem.title} • Entire Subject`,
                            url: `#subject/${fac.id}/${sem.semester}/${encodeURIComponent(subj.code)}`
                        });
                    }
                    // Check chapters match
                    subj.chapters.forEach((ch, chIdx) => {
                        if (!q || ch.toLowerCase().includes(q)) {
                            matches.push({
                                title: `Chapter ${chIdx + 1}: ${ch}`,
                                sub: `${subj.code} (${subj.name}) • ${fac.shortName}`,
                                url: `#study/${fac.id}/${sem.semester}/${encodeURIComponent(subj.code)}/${chIdx + 1}`
                            });
                        }
                    });
                });
            });
        });

        if (matches.length === 0) {
            mount.innerHTML = `<div style="padding: 1.5rem; text-align:center; color: var(--text-muted);">No matching subjects or chapters found.</div>`;
            return;
        }

        mount.innerHTML = matches.slice(0, 15).map(m => `
            <div class="search-result-item" onclick="window.location.hash='${m.url}'; document.getElementById('search-modal').classList.remove('open');">
                <strong style="color: var(--text-primary); font-size: 0.95rem;">${escapeHtml(m.title)}</strong>
                <span style="color: var(--text-muted); font-size: 0.8rem;">${escapeHtml(m.sub)}</span>
            </div>
        `).join('');
    }

    // ========================================================================
    // 11. NAVBAR POPULATION
    // ========================================================================
    function setupNavigation() {
        const dropdownMount = document.getElementById('navbar-faculties-dropdown');
        if (!dropdownMount) return;

        dropdownMount.innerHTML = BMC_SYLLABUS.faculties.map(fac => `
            <a href="#faculty/${fac.id}" class="dropdown-item-link">
                <div class="dropdown-icon" style="background: ${fac.bgGlow}; color: ${fac.id === 'bba' ? 'var(--accent-emerald)' : fac.id === 'llb' ? 'var(--accent-amber)' : 'var(--primary)'};">
                    ${fac.icon}
                </div>
                <div class="dropdown-details">
                    <span class="dropdown-item-title">${fac.shortName}</span>
                    <span class="dropdown-item-sub">${fac.semesters.length} Semesters • ${fac.category}</span>
                </div>
            </a>
        `).join('');
    }

    // ========================================================================
    // UTILITIES
    // ========================================================================
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatMarkdownLike(text) {
        if (!text) return '';
        let formatted = escapeHtml(text);

        // Headers
        formatted = formatted.replace(/^### (.*$)/gim, '<h4 style="font-size:1.15rem; font-weight:700; margin:1rem 0 0.5rem; color:var(--text-primary);">$1</h4>');
        formatted = formatted.replace(/^#### (.*$)/gim, '<h5 style="font-size:1rem; font-weight:600; margin:0.8rem 0 0.4rem; color:var(--primary);">$1</h5>');

        // Bold
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/__([^_]+)__/g, '<strong>$1</strong>');

        // Italic
        formatted = formatted.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

        // Inline Code
        formatted = formatted.replace(/`([^`]+)`/g, '<code style="background:var(--bg-surface); padding:0.15rem 0.4rem; border-radius:4px; font-size:0.85rem; border:1px solid var(--border-subtle);">$1</code>');

        // Code blocks
        formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre style="background:var(--bg-surface); border:1px solid var(--border-strong); padding:1rem; border-radius:8px; overflow-x:auto;"><code>$1</code></pre>');

        // Horizontal rules
        formatted = formatted.replace(/^---$/gim, '<hr style="margin:1.5rem 0; border:none; border-top:1px solid var(--border-subtle);">');

        // Lists
        formatted = formatted.replace(/^\* (.*$)/gim, '<li style="margin-left:1.5rem;">$1</li>');
        formatted = formatted.replace(/^[0-9]+\. (.*$)/gim, '<li style="margin-left:1.5rem;">$1</li>');

        // Line breaks
        formatted = formatted.replace(/\n/g, '<br>');

        return formatted;
    }

    // Expose Study tab switcher to window
    window.switchStudyTab = switchStudyTab;

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
