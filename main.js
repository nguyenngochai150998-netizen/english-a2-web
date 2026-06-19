document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================================
    // AUDIO (TEXT-TO-SPEECH)
    // ============================================================
    function playAudio(text) {
        if (!window.speechSynthesis) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }

    // Event delegation for audio buttons & practice toggles
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-audio');
        if (btn && btn.dataset.text) {
            e.stopPropagation();
            playAudio(btn.dataset.text);
            
            // animation
            const icon = btn.querySelector('i');
            if(icon) {
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-down');
                setTimeout(() => {
                    icon.classList.remove('fa-volume-down');
                    icon.classList.add('fa-volume-up');
                }, 500);
            }
        }

        const toggleBtn = e.target.closest('.btn-toggle-answer');
        if (toggleBtn) {
            const answerDiv = toggleBtn.nextElementSibling;
            if (answerDiv && answerDiv.classList.contains('practice-answer')) {
                answerDiv.classList.toggle('hidden-answer');
                toggleBtn.innerHTML = answerDiv.classList.contains('hidden-answer') ? 
                    '<i class="fas fa-eye"></i> Show Answer' : '<i class="fas fa-eye-slash"></i> Hide Answer';
            }
        }
    });

    const homePage = document.getElementById('home-page');
    const lessonPage = document.getElementById('lesson-page');
    const lessonContent = document.getElementById('lesson-content');
    const documentPage = document.getElementById('document-page');
    const vocabPage = document.getElementById('vocab-page');
    const grammarPage = document.getElementById('grammar-page');
    const phrasalPage = document.getElementById('phrasal-page');
    const expressionsPage = document.getElementById('expressions-page');

    const navGrammar = document.getElementById('nav-grammar');
    const navPhrasal = document.getElementById('nav-phrasal');
    const navExpressions = document.getElementById('nav-expressions');

    // ============================================================
    // LESSON RENDERING
    // ============================================================
    window.showLesson = function(lessonId) {
        const data = lessonData[lessonId];
        if (!data) return;

        // Buid Vocabulary HTML
        let vocabHtml = '';
        if (data.vocab && data.vocab.length > 0) {
            vocabHtml = `
                <div class="detail-section reveal">
                    <div class="section-header">
                        <div class="icon-wrap"><i class="fas fa-book"></i></div>
                        <h3>Vocabulary</h3>
                    </div>
                    <div class="vocab-grid">
                        ${data.vocab.map(v => `
                            <div class="vocab-item-detail">
                                <div class="word-header">
                                    <div class="word-title-group" style="display:flex; align-items:center; gap:10px;">
                                        <div class="word">${v.word}</div>
                                        <button class="btn-audio" data-text="${(v.word || '').replace(/"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                                    </div>
                                    <div class="pronunciation">${v.pron || ''}</div>
                                </div>
                                <span class="meaning">${v.meaning}</span>
                                <span class="example">
                                    ${v.example}
                                    <button class="btn-audio small" data-text="${(v.example || '').replace(/"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                                </span>
                                ${v.synonyms ? `<div class="extra-vocab"><strong>Synonyms:</strong> ${v.synonyms}</div>` : ''}
                                ${v.antonyms ? `<div class="extra-vocab"><strong>Antonyms:</strong> ${v.antonyms}</div>` : ''}
                                ${v.family ? `<div class="extra-vocab"><strong>Word Family:</strong> ${v.family}</div>` : ''}
                                ${v.tip ? `<div class="tip">${v.tip}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Build Grammar HTML
        let grammarHtml = '';
        if (data.grammar && data.grammar.length > 0) {
            grammarHtml = `
                <div class="detail-section reveal">
                    <div class="section-header">
                        <div class="icon-wrap"><i class="fas fa-pencil-ruler"></i></div>
                        <h3>Grammar</h3>
                    </div>
                    <div class="grammar-container">
                        ${data.grammar.map(g => `
                            <div class="gram-point">
                                <div class="gram-title">${g.title}</div>
                                <p class="gram-explanation">${g.explanation}</p>
                                ${g.examples.map(ex => `
                                    <div class="ex-box correct">
                                        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                                            <span><i class="fas fa-check-circle" style="color: #2ed573; margin-right: 8px;"></i> ${ex}</span>
                                            <button class="btn-audio small" data-text="${(ex || '').replace(/"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                                        </div>
                                    </div>`).join('')}
                                ${g.notes ? `<div class="gram-notes"><i class="fas fa-info-circle"></i> <strong>Note:</strong> ${g.notes}</div>` : ''}
                                ${g.mistake ? `
                                    <div class="mistake-title">${g.mistake.title}</div>
                                    <div class="ex-box mistake"><i class="fas fa-times-circle" style="color: #ff4757; margin-right: 8px;"></i> <s>${g.mistake.wrong}</s></div>
                                    <div class="ex-box correct"><i class="fas fa-check-circle" style="color: #2ed573; margin-right: 8px;"></i> ${g.mistake.correct}</div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Build Conversation HTML
        let convHtml = '';
        if (data.conversation && data.conversation.length > 0) {
            let videoHtml = '';
            if (data.videoUrl) {
                videoHtml = `
                    <div class="video-container" style="margin-bottom: 20px; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                        <iframe width="100%" height="315" src="${data.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `;
            }

            convHtml = `
                <div class="detail-section reveal">
                    <div class="section-header">
                        <div class="icon-wrap"><i class="fas fa-comments"></i></div>
                        <h3>Conversation Roleplay</h3>
                    </div>
                    <div class="conversation-box">
                        ${videoHtml}
                        <div class="dialog-wrapper">
                            ${data.conversation.map((c, index) => {
                                const isA = index % 2 === 0;
                                const speakerClass = isA ? 'speaker-a' : 'speaker-b';
                                return `
                                    <div class="dialog ${speakerClass}" style="animation-delay: ${index * 0.15}s">
                                        <span class="who">${c.speaker}</span>
                                        <div style="display: flex; align-items: flex-start; justify-content: space-between;">
                                            <span>${c.text}</span>
                                            <button class="btn-audio dialog-audio" data-text="${(c.text || '').replace(/"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Build Practice HTML
        let practiceHtml = '';
        if (data.practice && data.practice.length > 0) {
            practiceHtml = `
                <div class="detail-section reveal">
                    <div class="section-header">
                        <div class="icon-wrap"><i class="fas fa-dumbbell"></i></div>
                        <h3>Practice & Quiz</h3>
                    </div>
                    <div class="practice-list">
                        ${data.practice.map((p, i) => `
                            <div class="practice-item">
                                <div class="q-num">${i + 1}</div>
                                <div style="flex: 1;">
                                    <div class="q-text">${p.q || p}</div>
                                    ${p.a ? `
                                        <button class="btn-toggle-answer"><i class="fas fa-eye"></i> Show Answer</button>
                                        <div class="practice-answer hidden-answer">
                                            <strong>Answer:</strong> ${p.a}
                                            ${p.explain ? `<br><small class="explain-text">${p.explain}</small>` : ''}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        lessonContent.innerHTML = `
            <div class="lesson-detail">
                <div class="lesson-nav">
                    <button class="btn-back" onclick="showHome()">
                        <i class="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <span class="badge-secondary">${data.chapter}</span>
                </div>
                
                <div class="lesson-header-content">
                    <div class="emoji-container">${data.emoji}</div>
                    <div class="lesson-title-area">
                        <h1>${data.title}</h1>
                        <div class="sub-info">
                            <span><i class="fas fa-clock"></i> ${data.time}</span>
                            <span><i class="fas fa-info-circle"></i> ${data.imgDesc}</span>
                        </div>
                    </div>
                </div>

                ${vocabHtml}
                ${grammarHtml}
                ${convHtml}
                ${practiceHtml}

                <div class="lesson-footer">
                    <span><i class="fas fa-check-circle"></i> End of Lesson ${lessonId}</span>
                    <span><i class="fas fa-star"></i> Great job!</span>
                </div>
            </div>
        `;

        homePage.classList.add('hidden');
        documentPage.classList.add('hidden');
        vocabPage.classList.add('hidden');
        lessonPage.classList.remove('hidden');
        document.body.classList.add('in-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        initScrollAnimations();
    }

    // ============================================================
    // HOME NAVIGATION
    // ============================================================
    window.showHome = function() {
        lessonPage.classList.add('hidden');
        documentPage.classList.add('hidden');
        vocabPage.classList.add('hidden');
        if(grammarPage) grammarPage.classList.add('hidden');
        if(phrasalPage) phrasalPage.classList.add('hidden');
        if(expressionsPage) expressionsPage.classList.add('hidden');
        homePage.classList.remove('hidden');
        document.body.classList.remove('in-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        lessonContent.innerHTML = '';
        initScrollAnimations();
    };

    // ============================================================
    // EVENT LISTENERS
    // ============================================================
    document.querySelectorAll('.tag-lesson').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            showLesson(this.dataset.lesson);
        });
    });

    document.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('tag-lesson')) return;
            const first = this.querySelector('.tag-lesson');
            if (first) showLesson(first.dataset.lesson);
        });
    });

    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        showHome();
    });

    document.getElementById('home-link-btn').addEventListener('click', showHome);

    // ============================================================
    // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ============================================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add reveal class to cards on home
        document.querySelectorAll('.chapter-card').forEach((el, index) => {
            if(!el.classList.contains('reveal')) {
                el.classList.add('reveal');
                el.style.transitionDelay = `${index * 0.1}s`;
            }
            observer.observe(el);
        });

        // Observe sections in lesson detail
        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });
    }

    // Initialize on load
    initScrollAnimations();

    // ============================================================
    // DOCUMENTS / IRREGULAR VERBS
    // ============================================================
    const docMenuBtn = document.getElementById('document-menu-btn');
    const docDropdown = document.getElementById('document-dropdown');
    const navIrregularVerbs = document.getElementById('nav-irregular-verbs');
    const verbTableBody = document.getElementById('verb-table-body');
    const verbSearch = document.getElementById('verb-search');

    // Toggle Dropdown
    docMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        docDropdown.classList.toggle('show');
    });

    // Close Dropdown when clicking outside
    document.addEventListener('click', () => {
        if(docDropdown.classList.contains('show')) {
            docDropdown.classList.remove('show');
        }
    });

    // Prevent closing when clicking inside dropdown
    docDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Render Table
    function renderVerbs(filterText = '') {
        if(!verbTableBody) return;
        const text = filterText.toLowerCase();
        
        const filtered = irregularVerbs.filter(v => 
            v.v1.toLowerCase().includes(text) || 
            v.v2.toLowerCase().includes(text) || 
            v.v3.toLowerCase().includes(text) || 
            v.meaning.toLowerCase().includes(text)
        );

        verbTableBody.innerHTML = filtered.map(v => `
            <tr>
                <td>${v.v1}</td>
                <td>${v.v2}</td>
                <td>${v.v3}</td>
                <td>${v.meaning}</td>
            </tr>
        `).join('');
    }

    // Show Irregular Verbs Page
    navIrregularVerbs.addEventListener('click', (e) => {
        e.preventDefault();
        homePage.classList.add('hidden');
        lessonPage.classList.add('hidden');
        vocabPage.classList.add('hidden');
        documentPage.classList.remove('hidden');
        document.body.classList.add('in-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        docDropdown.classList.remove('show');
        renderVerbs();
    });

    // Search functionality
    if(verbSearch) {
        verbSearch.addEventListener('input', (e) => {
            renderVerbs(e.target.value);
        });
    }

    // ============================================================
    // A2 VOCABULARY DICTIONARY
    // ============================================================
    const navA2Vocab = document.getElementById('nav-a2-vocab');
    const dictGrid = document.getElementById('dict-grid');
    const dictSearch = document.getElementById('dict-search');

    function renderDict(filterText = '') {
        if (!dictGrid) return;
        const text = filterText.toLowerCase();
        
        const filtered = a2Vocabulary.filter(v => 
            v.word.toLowerCase().includes(text) || 
            v.meaning.toLowerCase().includes(text)
        );

        dictGrid.innerHTML = filtered.map(v => `
            <div class="vocab-item-detail">
                <div class="word-header">
                    <div class="word-title-group" style="display:flex; align-items:center; gap:10px;">
                        <div class="word">${v.word}</div>
                        <button class="btn-audio" data-text="${(v.word || '').replace(/"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                    </div>
                    <div class="pronunciation">${v.pron || ''}</div>
                </div>
                <span class="meaning">${v.meaning}</span>
                <span class="example">
                    ${v.example}
                    <button class="btn-audio small" data-text="${(v.example || '').replace(/"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                </span>
            </div>
        `).join('');
    }

    if(navA2Vocab) {
        navA2Vocab.addEventListener('click', (e) => {
            e.preventDefault();
            homePage.classList.add('hidden');
            lessonPage.classList.add('hidden');
            documentPage.classList.add('hidden');
            vocabPage.classList.remove('hidden');
            document.body.classList.add('in-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            docDropdown.classList.remove('show');
            renderDict();
        });
    }

    if(dictSearch) {
        dictSearch.addEventListener('input', (e) => {
            renderDict(e.target.value);
        });
    }



    // ============================================================
    // NEW DOCUMENT PAGES (GRAMMAR, PHRASAL, EXPRESSIONS)
    // ============================================================

    function hideAllPages() {
        homePage.classList.add('hidden');
        lessonPage.classList.add('hidden');
        documentPage.classList.add('hidden');
        vocabPage.classList.add('hidden');
        if(grammarPage) grammarPage.classList.add('hidden');
        if(phrasalPage) phrasalPage.classList.add('hidden');
        if(expressionsPage) expressionsPage.classList.add('hidden');
    }

    if(navGrammar) {
        navGrammar.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllPages();
            grammarPage.classList.remove('hidden');
            document.body.classList.add('in-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            docDropdown.classList.remove('show');
            renderGrammar();
        });
    }

    if(navPhrasal) {
        navPhrasal.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllPages();
            phrasalPage.classList.remove('hidden');
            document.body.classList.add('in-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            docDropdown.classList.remove('show');
            renderPhrasal();
        });
    }

    if(navExpressions) {
        navExpressions.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllPages();
            expressionsPage.classList.remove('hidden');
            document.body.classList.add('in-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            docDropdown.classList.remove('show');
            renderExpressions();
        });
    }

    function renderGrammar() {
        const container = document.getElementById('grammar-content');
        if(!container) return;
        if(typeof grammarCheatSheet === 'undefined') return;
        
        let html = '';
        grammarCheatSheet.forEach(item => {
            html += `
            <div class="grammar-card">
                <h3>${item.title}</h3>
                <div class="grammar-explanation">
                    <p><strong>Công thức:</strong> <code>${item.formula}</code></p>
                    <p><strong>Cách dùng:</strong> ${item.usage}</p>
                </div>
                <div class="grammar-examples">
                    ${item.examples.map(ex => `
                        <div class="example-item">
                            <i class="fas fa-check-circle" style="color:var(--success);"></i>
                            <span>${ex}</span>
                            <button class="btn-audio" data-text="${ex.replace(/\"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        });
        container.innerHTML = html;
    }

    function renderPhrasal() {
        const container = document.getElementById('phrasal-grid');
        if(!container) return;
        if(typeof phrasalVerbs === 'undefined') return;
        
        let html = '';
        phrasalVerbs.forEach(item => {
            html += `
            <div class="vocab-card">
                <div class="vocab-header">
                    <h3>${item.verb}</h3>
                    <button class="btn-audio" data-text="${item.verb.replace(/\"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                </div>
                <div class="vocab-meaning">${item.meaning}</div>
                <div class="vocab-example">"${item.example}"</div>
            </div>`;
        });
        container.innerHTML = html;
    }

    function renderExpressions() {
        const container = document.getElementById('expressions-content');
        if(!container) return;
        if(typeof everydayExpressions === 'undefined') return;
        
        let html = '';
        everydayExpressions.forEach(category => {
            html += `
            <div class="grammar-card" style="margin-bottom: 20px;">
                <h3 style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 15px;">${category.category}</h3>
                <div class="grammar-examples" style="background: none; padding: 0;">
                    ${category.expressions.map(exp => `
                        <div class="example-item" style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                            <div style="flex: 1;">
                                <div style="font-weight: 600; font-size: 1.1rem; color: var(--accent-secondary);">${exp.en}</div>
                                <div style="color: var(--text-muted); font-size: 0.9rem; margin-top: 5px;">${exp.vi}</div>
                            </div>
                            <button class="btn-audio" data-text="${exp.en.replace(/\"/g, '&quot;')}"><i class="fas fa-volume-up"></i></button>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        });
        container.innerHTML = html;
    }

});
