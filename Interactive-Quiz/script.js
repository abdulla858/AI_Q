/**
 * Interactive Quiz Platform - Core Logic
 * Vanilla JavaScript (ES6+) - 100% Static & Standalone
 */

(function () {
  'use strict';

  // =========================================================================
  // State Management
  // =========================================================================
  const state = {
    allQuestions: [],
    currentQuiz: {
      mode: 'all',
      titleAr: 'جميع الأسئلة',
      titleEn: 'All Questions',
      questions: [],
      currentIndex: 0,
      userAnswers: {}, // key: question index -> { selected: number, isChecked: boolean, isCorrect: boolean }
      isFinished: false,
    },
    reviewFilter: 'all',
    reviewSearchQuery: '',
    bankSearchQuery: '',
    bankChapterFilter: 'all',
    bankTypeFilter: 'all',
    theme: localStorage.getItem('ai_quiz_theme') || 'light',
    lang: (function () {
      // Primary default language is strictly English ('en')
      const pref = localStorage.getItem('ai_quiz_lang_pref_v2');
      if (pref) return pref;
      return 'en';
    })(),
    isNavigatorVisible: true,
  };

  // Translations dictionary
  const i18n = {
    en: {
      app_title: 'Artificial Intelligence',
      app_subtitle: 'Interactive Quiz Platform (300 Questions)',
      btn_modes_nav: 'Modes',
      btn_bank_nav: 'Question Bank',
      theme_dark: 'Dark',
      theme_light: 'Light',
      home_title: 'AI Practice & Examination Platform',
      home_desc: 'Comprehensive academic question bank with 300 questions covering AI foundations, intelligent agents, and problem-solving search with detailed bilingual explanations.',
      stat_total: 'Total Questions',
      stat_mcq: 'Multiple Choice (MCQ)',
      stat_tf: 'True / False',
      stat_chapters: 'Course Chapters',
      modes_title: '🎯 Choose Quiz Mode:',
      mode_all_title: 'All Questions',
      mode_all_desc: 'Practice the complete question bank (300 questions) sequentially by chapter for comprehensive mastery.',
      badge_300_qs: '300 Questions',
      btn_start: 'Start Quiz',
      mode_random_title: 'Random Quiz',
      mode_random_desc: 'Real exam simulation with randomized non-repeating questions, customizable counts, and chapter scope.',
      badge_random_qs: '10 - 100 Questions',
      btn_customize: 'Configure & Start',
      mode_bank_title: 'Question Bank Browser',
      mode_bank_desc: 'Browse and search all 300 questions, view verified answers, and read bilingual explanations on demand.',
      badge_bank: 'Search & Filter',
      btn_browse: 'Open Bank',
      chapters_title: '📑 Practice by Chapter:',
      chap1_title: 'Chapter 1: Introduction to AI',
      chap1_desc: 'AI history, Turing Test, Midas problem, rational agents, philosophical foundations.',
      chap1_badge: '100 Questions (70 MCQ + 30 T/F)',
      chap2_title: 'Chapter 2: Intelligent Agents',
      chap2_desc: 'Agents, PEAS framework, environment types, agent architectures, rationality & autonomy.',
      chap2_badge: '80 Questions (60 MCQ + 20 T/F)',
      chap3_title: 'Chapter 3: Solving Problems by Searching',
      chap3_desc: 'Problem formulation, BFS, DFS, UCS, IDS, A*, heuristic design, path costs.',
      chap3_badge: '120 Questions (90 MCQ + 30 T/F)',
      btn_practice_now: 'Practice Now',
      mode_all_badge: 'All Questions Mode',
      btn_prev: 'Previous',
      btn_next: 'Next',
      btn_check: 'Check Answer',
      btn_finish: 'Finish Quiz',
      correct_msg: '✓ Correct Answer',
      wrong_msg: '✗ Incorrect Answer',
      your_answer: 'Your Answer:',
      correct_answer: 'Correct Answer:',
      show_explanation: '💡 Show Explanation',
      hide_explanation: '💡 Hide Explanation',
      exp_header_ar: '🇸🇦 Arabic Explanation:',
      exp_header_en: '🇬🇧 English Explanation:',
      question_word: 'Question',
      of_word: 'of',
      res_title: 'Quiz Completed!',
      res_subtitle: 'Performance Summary & Final Result',
      stat_correct: 'Correct Answers',
      stat_wrong: 'Wrong Answers',
      stat_total_qs: 'Total Questions',
      grade_excellent: 'Excellent ⭐',
      grade_verygood: 'Very Good 👍',
      grade_good: 'Good',
      grade_pass: 'Pass',
      grade_needs: 'Needs More Practice',
      btn_review: 'Review Answers',
      btn_retry: 'Try Again',
      btn_new_random: 'New Random Quiz',
      btn_home: 'Home',
      review_title: '📋 Review Answers',
      tab_all: 'All',
      tab_correct: 'Correct ✓',
      tab_wrong: 'Wrong ✗',
      btn_back_results: 'Back to Results',
      review_search_placeholder: '🔍 Search reviewed questions...',
      bank_title: '📚 Question Bank Browser (300 Questions)',
      bank_subtitle: 'Browse and study all 300 questions with verified solutions and explanations',
      bank_search_placeholder: '🔍 Search any keyword or concept in questions...',
      bank_filter_all_chaps: 'All Chapters',
      bank_filter_chap1: 'Chapter 1: Introduction to AI',
      bank_filter_chap2: 'Chapter 2: Intelligent Agents',
      bank_filter_chap3: 'Chapter 3: Solving Problems by Searching',
      bank_filter_all_types: 'All Types',
      bank_filter_mcq: 'Multiple Choice (MCQ)',
      bank_filter_tf: 'True / False',
      modal_title: '🎲 Configure Random Quiz',
      modal_scope_lbl: 'Chapter Scope:',
      modal_scope_all: 'All (300 Q)',
      modal_scope_1: 'Chapter 1 (100 Q)',
      modal_scope_2: 'Chapter 2 (80 Q)',
      modal_scope_3: 'Chapter 3 (120 Q)',
      modal_count_lbl: 'Number of Questions:',
      modal_count_custom: 'Custom',
      modal_count_custom_placeholder: 'Enter a number between 5 and 300',
      btn_cancel: 'Cancel',
      btn_modal_start: 'Start Quiz Now 🚀',
      footer_line1: 'Interactive AI Quiz Platform • Built with HTML5, CSS3, Vanilla JS',
      footer_line2: 'Static Standalone System • Zero Dependencies, No Backend',
      confirm_finish: 'Are you sure you want to finish the quiz now?',
      confirm_reset: 'Are you sure you want to reset all stored progress?',
      nav_panel_title: 'Question Navigator',
      nav_toggle_show: 'Show Navigator',
      nav_toggle_hide: 'Hide Navigator',
      legend_current: 'Current',
      legend_correct: 'Correct',
      legend_wrong: 'Incorrect',
      legend_answered: 'Answered',
      legend_unanswered: 'Unanswered',
      nav_answered_ratio: '{answered} / {total} Answered',
    },
    ar: {
      app_title: 'الذكاء الاصطناعي',
      app_subtitle: 'منصة الاختبارات التفاعلية (300 سؤال)',
      btn_modes_nav: 'الأوضاع',
      btn_bank_nav: 'بنك الأسئلة',
      theme_dark: 'الداكن',
      theme_light: 'الفاتح',
      home_title: 'منصة اختبارات الذكاء الاصطناعي',
      home_desc: 'بنك أسئلة جامعي تفاعلي متقدم يحتوي على 300 سؤال تغطي أساسيات الذكاء الاصطناعي، والوكلاء الأذكياء، واستراتيجيات البحث مع شروحات تعليمية دقيقة باللغتين العربية والإنجليزية.',
      stat_total: 'إجمالي الأسئلة',
      stat_mcq: 'اختيار من متعدد (MCQ)',
      stat_tf: 'صح أم خطأ (True / False)',
      stat_chapters: 'أبواب دراسية متكاملة',
      modes_title: '🎯 اختر وضع الاختبار:',
      mode_all_title: 'جميع الأسئلة (All Questions)',
      mode_all_desc: 'تدرب على بنك الأسئلة بالكامل (300 سؤال) مرتبة حسب الأبواب والموضوعات لدراسة منهجية شاملة.',
      badge_300_qs: '300 سؤال',
      btn_start: 'ابدأ الاختبار',
      mode_random_title: 'اختبار عشوائي (Random Quiz)',
      mode_random_desc: 'محاكاة لاختبار حقيقي مع أسئلة عشوائية بدون تكرار، مع إمكانية تحديد عدد الأسئلة والباب المراد اختباره.',
      badge_random_qs: '10 - 100 سؤال',
      btn_customize: 'تخصيص وبدء',
      mode_bank_title: 'تصفح والبحث في الأسئلة',
      mode_bank_desc: 'ابحث في بنك الأسئلة بالكامل، واطلع على الإجابات النموذجية والشروحات التفصيلية بالعربية والإنجليزية مباشرة.',
      badge_bank: 'بحث وتصفية',
      btn_browse: 'فتح البنك',
      chapters_title: '📑 تدرب حسب الباب الدراسي:',
      chap1_title: 'الباب الأول: مقدمة في الذكاء الاصطناعي',
      chap1_desc: 'Chapter 1: Introduction to AI (تاريخ الذكاء الاصطناعي، اختبار تورينج، معضلة ميداس، الفلسفة)',
      chap1_badge: '100 سؤال (70 MCQ + 30 T/F)',
      chap2_title: 'الباب الثاني: الوكلاء الأذكياء',
      chap2_desc: 'Chapter 2: Intelligent Agents (الوكلاء، PEAS، أنواع البيئات، هياكل الوكلاء، العقلانية والاستقلالية)',
      chap2_badge: '80 سؤال (60 MCQ + 20 T/F)',
      chap3_title: 'الباب الثالث: حل المشكلات بالبحث',
      chap3_desc: 'Chapter 3: Solving Problems by Searching (صياغة المشكلات، BFS، DFS، UCS، IDS، A*، الهيورستك)',
      chap3_badge: '120 سؤال (90 MCQ + 30 T/F)',
      btn_practice_now: 'تدرب الآن',
      mode_all_badge: 'وضع جميع الأسئلة',
      btn_prev: 'السابق',
      btn_next: 'التالي',
      btn_check: 'تحقق من الإجابة',
      btn_finish: 'إنهاء الاختبار',
      correct_msg: '✓ إجابة صحيحة (Correct)',
      wrong_msg: '✗ إجابة خاطئة (Wrong)',
      your_answer: 'إجابتك:',
      correct_answer: 'الإجابة الصحيحة:',
      show_explanation: '💡 عرض الشرح التعليمي / Show Explanation',
      hide_explanation: '💡 إخفاء الشرح التعليمي / Hide Explanation',
      exp_header_ar: '🇸🇦 الشرح باللغة العربية:',
      exp_header_en: '🇬🇧 English Explanation:',
      question_word: 'السؤال',
      of_word: 'من',
      res_title: 'اكتمل الاختبار بنجاح!',
      res_subtitle: 'ملخص الأداء والنتيجة النهائية',
      stat_correct: 'إجابات صحيحة',
      stat_wrong: 'إجابات خاطئة',
      stat_total_qs: 'إجمالي الأسئلة',
      grade_excellent: 'ممتاز ⭐ Excellent',
      grade_verygood: 'جيد جداً 👍 Very Good',
      grade_good: 'جيد Good',
      grade_pass: 'مقبول Pass',
      grade_needs: 'يحتاج لمزيد من التدريب Needs More Practice',
      btn_review: 'مراجعة الإجابات',
      btn_retry: 'إعادة الاختبار',
      btn_new_random: 'اختبار عشوائي جديد',
      btn_home: 'الرئيسية',
      review_title: '📋 مراجعة الإجابات',
      tab_all: 'الكل',
      tab_correct: 'الصحيحة ✓',
      tab_wrong: 'الخاطئة ✗',
      btn_back_results: 'العودة للنتيجة',
      review_search_placeholder: '🔍 ابحث في الأسئلة التي تمت مراجعتها...',
      bank_title: '📚 تصفح بنك الأسئلة (300 سؤال)',
      bank_subtitle: 'تصفح واقرأ جميع الأسئلة مع الإجابات والشروحات التعليمية الكاملة',
      bank_search_placeholder: '🔍 ابحث عن أي كلمة أو مفهوم في الأسئلة...',
      bank_filter_all_chaps: 'جميع الأبواب (All Chapters)',
      bank_filter_chap1: 'الباب 1: مقدمة الذكاء الاصطناعي',
      bank_filter_chap2: 'الباب 2: الوكلاء الأذكياء',
      bank_filter_chap3: 'الباب 3: حل المشكلات بالبحث',
      bank_filter_all_types: 'جميع الأنواع',
      bank_filter_mcq: 'اختيار من متعدد (MCQ)',
      bank_filter_tf: 'صح أم خطأ (True / False)',
      modal_title: '🎲 إعداد الاختبار العشوائي',
      modal_scope_lbl: 'نطاق الأسئلة (Chapter Scope):',
      modal_scope_all: 'الكل (300 سؤال)',
      modal_scope_1: 'الباب 1 (100 Q)',
      modal_scope_2: 'الباب 2 (80 Q)',
      modal_scope_3: 'الباب 3 (120 Q)',
      modal_count_lbl: 'عدد الأسئلة (Number of Questions):',
      modal_count_custom: 'مخصص',
      modal_count_custom_placeholder: 'أدخل عدداً بين 5 و 300',
      btn_cancel: 'إلغاء',
      btn_modal_start: 'ابدأ الاختبار الآن 🚀',
      footer_line1: 'منصة الاختبارات التفاعلية للذكاء الاصطناعي • مبنية بالكامل باستخدام HTML5, CSS3, Vanilla JS',
      footer_line2: 'نظام Static مستقل • خالي من أي مكتبات أو Backend',
      confirm_finish: 'هل أنت متأكد من رغبتك في إنهاء الاختبار الآن؟',
      confirm_reset: 'هل تريد حقاً إعادة ضبط التقدم وحذف السجلات المحفوظة؟',
      nav_panel_title: 'قائمة الأسئلة والتنقل السريع',
      nav_toggle_show: 'إظهار القائمة',
      nav_toggle_hide: 'إخفاء القائمة',
      legend_current: 'الحالي',
      legend_correct: 'صحيحة',
      legend_wrong: 'خاطئة',
      legend_answered: 'تمت الإجابة',
      legend_unanswered: 'غير مجاب',
      nav_answered_ratio: 'تمت الإجابة: {answered} من {total}',
    }
  };

  // DOM Elements
  const dom = {
    brandLogo: document.getElementById('brand-logo'),
    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    themeLabel: document.getElementById('theme-label'),
    btnLangToggle: document.getElementById('btn-lang-toggle'),
    langLabel: document.getElementById('lang-label'),
    btnResetStorage: document.getElementById('btn-reset-storage'),
    btnOpenBank: document.getElementById('btn-open-bank'),
    btnHomeNav: document.getElementById('btn-home-nav'),

    // Views
    viewHome: document.getElementById('view-home'),
    viewQuiz: document.getElementById('view-quiz'),
    viewResults: document.getElementById('view-results'),
    viewReview: document.getElementById('view-review'),
    viewBrowser: document.getElementById('view-browser'),

    // Home
    cardModeAll: document.getElementById('card-mode-all'),
    cardModeRandom: document.getElementById('card-mode-random'),
    cardModeBrowser: document.getElementById('card-mode-browser'),

    // Quiz elements
    quizModeBadge: document.getElementById('quiz-mode-badge'),
    quizChapterBadge: document.getElementById('quiz-chapter-badge'),
    quizCounter: document.getElementById('quiz-counter'),
    quizProgressBar: document.getElementById('quiz-progress-bar'),

    // Navigator elements
    quizNavigatorCard: document.getElementById('quiz-navigator-card'),
    navigatorHeader: document.getElementById('navigator-header'),
    navigatorContent: document.getElementById('navigator-content'),
    btnToggleNavigator: document.getElementById('btn-toggle-navigator'),
    navToggleText: document.getElementById('nav-toggle-text'),
    navToggleIcon: document.getElementById('nav-toggle-icon'),
    navigatorSummary: document.getElementById('navigator-summary'),
    navigatorGrid: document.getElementById('navigator-grid'),

    qIdTag: document.getElementById('q-id-tag'),
    qTypeBadge: document.getElementById('q-type-badge'),
    qText: document.getElementById('q-text'),
    qOptionsContainer: document.getElementById('q-options-container'),
    feedbackBanner: document.getElementById('feedback-banner'),
    feedbackHeader: document.getElementById('feedback-header'),
    feedbackDetails: document.getElementById('feedback-details'),
    explanationBox: document.getElementById('explanation-box'),
    btnToggleExp: document.getElementById('btn-toggle-exp'),
    expToggleText: document.getElementById('exp-toggle-text'),
    expToggleIcon: document.getElementById('exp-toggle-icon'),
    explanationContent: document.getElementById('explanation-content'),
    expTextAr: document.getElementById('exp-text-ar'),
    expTextEn: document.getElementById('exp-text-en'),
    btnPrevQ: document.getElementById('btn-prev-q'),
    btnCheckAns: document.getElementById('btn-check-ans'),
    btnNextQ: document.getElementById('btn-next-q'),
    btnFinishQuiz: document.getElementById('btn-finish-quiz'),

    // Results elements
    resBadgeIcon: document.getElementById('res-badge-icon'),
    resScoreRatio: document.getElementById('res-score-ratio'),
    resScorePct: document.getElementById('res-score-pct'),
    resGradePill: document.getElementById('res-grade-pill'),
    resStatCorrect: document.getElementById('res-stat-correct'),
    resStatWrong: document.getElementById('res-stat-wrong'),
    resStatTotal: document.getElementById('res-stat-total'),
    btnReviewAnswers: document.getElementById('btn-review-answers'),
    btnTryAgain: document.getElementById('btn-try-again'),
    btnNewRandom: document.getElementById('btn-new-random'),
    btnReturnHome: document.getElementById('btn-return-home'),

    // Review elements
    reviewCardsContainer: document.getElementById('review-cards-container'),
    reviewSearchInput: document.getElementById('review-search-input'),
    btnReviewBack: document.getElementById('btn-review-back'),

    // Browser elements
    bankCardsContainer: document.getElementById('bank-cards-container'),
    bankSearchInput: document.getElementById('bank-search-input'),
    bankChapterFilter: document.getElementById('bank-chapter-filter'),
    bankTypeFilter: document.getElementById('bank-type-filter'),
    btnBrowserBack: document.getElementById('btn-browser-back'),

    // Random Config Modal
    randomModal: document.getElementById('random-config-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),
    modalStartBtn: document.getElementById('modal-start-btn'),
    modalScopePills: document.getElementById('modal-scope-pills'),
    modalCountPills: document.getElementById('modal-count-pills'),
    customCountInput: document.getElementById('custom-count-input'),
  };

  // =========================================================================
  // Initialization
  // =========================================================================
  function init() {
    // Load question database from global variable
    if (typeof questions !== 'undefined' && Array.isArray(questions)) {
      state.allQuestions = questions;
    } else if (typeof window !== 'undefined' && Array.isArray(window.questions)) {
      state.allQuestions = window.questions;
    } else {
      console.error('Questions data not loaded! Please check questions.js');
    }

    // Pre-populate quiz state with all 300 questions immediately
    state.currentQuiz = {
      mode: 'all',
      titleAr: 'جميع الأسئلة (300 سؤال)',
      titleEn: 'All Questions (300 Questions)',
      questions: [...state.allQuestions],
      currentIndex: 0,
      userAnswers: {},
      isFinished: false,
    };

    applyTheme(state.theme);
    applyLanguage(state.lang);
    bindEvents();

    // Default view on project startup is Home Landing Page (AI Practice & Examination Platform)
    showView(dom.viewHome);
  }

  // =========================================================================
  // Theme & Language
  // =========================================================================
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ai_quiz_theme', theme);
    if (theme === 'dark') {
      dom.themeIcon.textContent = '☀️';
      dom.themeLabel.textContent = state.lang === 'ar' ? 'الفاتح' : 'Light';
    } else {
      dom.themeIcon.textContent = '🌙';
      dom.themeLabel.textContent = state.lang === 'ar' ? 'الداكن' : 'Dark';
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  function reorderExplanationHeaders(lang) {
    const blockEn = document.getElementById('block-exp-en');
    const blockAr = document.getElementById('block-exp-ar');
    if (blockEn && blockAr && dom.explanationContent) {
      if (lang === 'ar') {
        dom.explanationContent.insertBefore(blockAr, blockEn);
      } else {
        dom.explanationContent.insertBefore(blockEn, blockAr);
      }
    }
  }

  const chapterTitlesAr = {
    1: 'الباب الأول: مقدمة في الذكاء الاصطناعي',
    2: 'الباب الثاني: الوكلاء الأذكياء',
    3: 'الباب الثالث: حل المشكلات بالبحث'
  };
  const chapterTitlesEn = {
    1: 'Chapter 1: Introduction to AI',
    2: 'Chapter 2: Intelligent Agents',
    3: 'Chapter 3: Problem-Solving by Search'
  };

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('ai_quiz_lang_pref_v2', lang);
    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    dom.langLabel.textContent = isRtl ? 'English' : 'عربي (Arabic)';

    // Update i18n text in DOM
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) {
        el.setAttribute('placeholder', i18n[lang][key]);
      }
    });

    // Dynamic directional arrow icons
    const btnPrevIcon = document.getElementById('btn-prev-icon');
    const btnNextIcon = document.getElementById('btn-next-icon');
    const btnReviewBackIcon = document.getElementById('btn-review-back-icon');
    if (btnPrevIcon) btnPrevIcon.textContent = isRtl ? '▶' : '◀';
    if (btnNextIcon) btnNextIcon.textContent = isRtl ? '◀' : '▶';
    if (btnReviewBackIcon) btnReviewBackIcon.textContent = isRtl ? '▶' : '◀';

    if (lang === 'ar') {
      dom.themeLabel.textContent = state.theme === 'dark' ? 'الفاتح' : 'الداكن';
    } else {
      dom.themeLabel.textContent = state.theme === 'dark' ? 'Light' : 'Dark';
    }

    reorderExplanationHeaders(lang);
    updateNavigatorVisibilityUI();
    updateNavigatorState();

    // Refresh active views and re-render current question with translated text instantly!
    if (dom.viewQuiz && dom.viewQuiz.classList.contains('active')) {
      updateQuizTopBar();
      if (state.currentQuiz && state.currentQuiz.questions && state.currentQuiz.questions.length > 0) {
        loadQuestion(state.currentQuiz.currentIndex);
      }
    } else if (dom.viewBrowser && dom.viewBrowser.classList.contains('active')) {
      renderBankView();
    } else if (dom.viewReview && dom.viewReview.classList.contains('active')) {
      renderReviewView();
    }
  }

  function toggleLanguage() {
    applyLanguage(state.lang === 'ar' ? 'en' : 'ar');
  }

  // =========================================================================
  // View Navigation
  // =========================================================================
  function showView(viewElement) {
    [dom.viewHome, dom.viewQuiz, dom.viewResults, dom.viewReview, dom.viewBrowser].forEach((v) => {
      v.classList.remove('active');
    });
    viewElement.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // Event Bindings
  // =========================================================================
  function bindEvents() {
    // Header navigation
    dom.brandLogo.addEventListener('click', () => showView(dom.viewHome));
    if (dom.btnHomeNav) {
      dom.btnHomeNav.addEventListener('click', () => showView(dom.viewHome));
    }
    dom.btnThemeToggle.addEventListener('click', toggleTheme);
    dom.btnLangToggle.addEventListener('click', toggleLanguage);
    dom.btnOpenBank.addEventListener('click', () => {
      renderBankView();
      showView(dom.viewBrowser);
    });

    dom.btnResetStorage.addEventListener('click', () => {
      if (confirm(i18n[state.lang].confirm_reset)) {
        localStorage.clear();
        applyTheme('light');
        applyLanguage('en');
        alert(state.lang === 'ar' ? 'تمت إعادة ضبط التقدم بنجاح!' : 'Progress reset successfully!');
        showView(dom.viewHome);
      }
    });

    // Home view mode cards
    dom.cardModeAll.addEventListener('click', startAllQuestionsQuiz);
    dom.cardModeRandom.addEventListener('click', openRandomConfigModal);
    dom.cardModeBrowser.addEventListener('click', () => {
      renderBankView();
      showView(dom.viewBrowser);
    });

    // Chapter buttons
    document.querySelectorAll('.start-chap-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const chId = parseInt(btn.getAttribute('data-chapter'), 10);
        startChapterQuiz(chId);
      });
    });

    // Question Navigator toggle button & header
    if (dom.btnToggleNavigator) {
      dom.btnToggleNavigator.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNavigator();
      });
    }
    if (dom.navigatorHeader) {
      dom.navigatorHeader.addEventListener('click', () => {
        toggleNavigator();
      });
    }

    // Quiz action buttons
    dom.btnPrevQ.addEventListener('click', goToPreviousQuestion);
    dom.btnNextQ.addEventListener('click', goToNextQuestion);
    if (dom.btnCheckAns) dom.btnCheckAns.addEventListener('click', checkCurrentAnswer);
    dom.btnFinishQuiz.addEventListener('click', () => {
      if (confirm(i18n[state.lang].confirm_finish)) {
        finishQuiz();
      }
    });

    // Explanation toggle button
    dom.btnToggleExp.addEventListener('click', toggleExplanationContent);

    // Results view buttons
    dom.btnReviewAnswers.addEventListener('click', () => {
      renderReviewView();
      showView(dom.viewReview);
    });
    dom.btnTryAgain.addEventListener('click', restartCurrentQuiz);
    dom.btnNewRandom.addEventListener('click', openRandomConfigModal);
    dom.btnReturnHome.addEventListener('click', () => showView(dom.viewHome));

    // Review view controls
    dom.btnReviewBack.addEventListener('click', () => showView(dom.viewResults));
    document.querySelectorAll('.review-filter-tabs .tab-btn').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.review-filter-tabs .tab-btn').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        state.reviewFilter = tab.getAttribute('data-filter');
        renderReviewView();
      });
    });
    dom.reviewSearchInput.addEventListener('input', (e) => {
      state.reviewSearchQuery = e.target.value.toLowerCase().trim();
      renderReviewView();
    });

    // Question Bank Browser controls
    dom.btnBrowserBack.addEventListener('click', () => showView(dom.viewHome));
    dom.bankSearchInput.addEventListener('input', (e) => {
      state.bankSearchQuery = e.target.value.toLowerCase().trim();
      renderBankView();
    });
    dom.bankChapterFilter.addEventListener('change', (e) => {
      state.bankChapterFilter = e.target.value;
      renderBankView();
    });
    dom.bankTypeFilter.addEventListener('change', (e) => {
      state.bankTypeFilter = e.target.value;
      renderBankView();
    });

    // Modal events
    dom.modalCloseBtn.addEventListener('click', closeRandomConfigModal);
    dom.modalCancelBtn.addEventListener('click', closeRandomConfigModal);
    dom.modalStartBtn.addEventListener('click', startConfiguredRandomQuiz);

    // Modal Pills
    setupPillGroup(dom.modalScopePills);
    setupPillGroup(dom.modalCountPills, (val) => {
      if (val === 'custom') {
        dom.customCountInput.style.display = 'block';
        dom.customCountInput.focus();
      } else {
        dom.customCountInput.style.display = 'none';
      }
    });

    // Keyboard navigation: Enter key advances to the next question
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (dom.viewQuiz && dom.viewQuiz.classList.contains('active')) {
          if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
            return;
          }

          e.preventDefault();

          if (state.currentQuiz && state.currentQuiz.questions) {
            const idx = state.currentQuiz.currentIndex;
            const total = state.currentQuiz.questions.length;
            if (idx < total - 1) {
              goToNextQuestion();
            } else {
              const ans = state.currentQuiz.userAnswers[idx];
              if (ans && ans.isChecked) {
                if (confirm(i18n[state.lang].confirm_finish)) {
                  finishQuiz();
                }
              }
            }
          }
        }
      }
    });
  }

  function setupPillGroup(container, onSelect) {
    container.querySelectorAll('.pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.pill-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const val = btn.getAttribute('data-scope') || btn.getAttribute('data-count');
        if (onSelect) onSelect(val);
      });
    });
  }

  // =========================================================================
  // Quiz Launchers
  // =========================================================================
  function startQuizSession(questionsList, mode, titleAr, titleEn) {
    if (!questionsList || questionsList.length === 0) {
      alert(state.lang === 'ar' ? 'لا توجد أسئلة متاحة لهذا النطاق!' : 'No questions found for this selection!');
      return;
    }

    state.currentQuiz = {
      mode: mode,
      titleAr: titleAr,
      titleEn: titleEn,
      questions: questionsList,
      currentIndex: 0,
      userAnswers: {},
      isFinished: false,
    };

    renderNavigator();
    showView(dom.viewQuiz);
    loadQuestion(0);
  }

  function startAllQuestionsQuiz() {
    startQuizSession(
      [...state.allQuestions],
      'all',
      'جميع الأسئلة (300 سؤال)',
      'All Questions (300 Questions)'
    );
  }

  function startChapterQuiz(chapterId) {
    const chapQuestions = state.allQuestions.filter((q) => q.chapterId === chapterId);
    let titleAr = '';
    let titleEn = '';
    if (chapterId === 1) {
      titleAr = 'الباب الأول: مقدمة في الذكاء الاصطناعي';
      titleEn = 'Chapter 1: Introduction to AI';
    } else if (chapterId === 2) {
      titleAr = 'الباب الثاني: الوكلاء الأذكياء';
      titleEn = 'Chapter 2: Intelligent Agents';
    } else {
      titleAr = 'الباب الثالث: حل المشكلات بالبحث';
      titleEn = 'Chapter 3: Solving Problems by Searching';
    }
    startQuizSession(chapQuestions, 'chapter', titleAr, titleEn);
  }

  function openRandomConfigModal() {
    dom.randomModal.classList.add('active');
  }

  function closeRandomConfigModal() {
    dom.randomModal.classList.remove('active');
  }

  function startConfiguredRandomQuiz() {
    const activeScopePill = dom.modalScopePills.querySelector('.pill-btn.active');
    const scope = activeScopePill ? activeScopePill.getAttribute('data-scope') : 'all';

    const activeCountPill = dom.modalCountPills.querySelector('.pill-btn.active');
    let countVal = activeCountPill ? activeCountPill.getAttribute('data-count') : '20';

    let requestedCount = 20;
    if (countVal === 'custom') {
      requestedCount = parseInt(dom.customCountInput.value, 10);
      if (isNaN(requestedCount) || requestedCount < 1) {
        alert(state.lang === 'ar' ? 'يرجى إدخال عدد صحيح للأسئلة!' : 'Please enter a valid question count!');
        return;
      }
    } else {
      requestedCount = parseInt(countVal, 10);
    }

    // Filter by scope
    let pool = [...state.allQuestions];
    if (scope !== 'all') {
      const chNum = parseInt(scope, 10);
      pool = pool.filter((q) => q.chapterId === chNum);
    }

    // Fisher-Yates Shuffle algorithm for true randomness
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const finalQuestions = shuffled.slice(0, Math.min(requestedCount, shuffled.length));

    closeRandomConfigModal();

    startQuizSession(
      finalQuestions,
      'random',
      `اختبار عشوائي (${finalQuestions.length} سؤال)`,
      `Random Quiz (${finalQuestions.length} Questions)`
    );
  }

  function restartCurrentQuiz() {
    // Restart with the same exact questions pool
    startQuizSession(
      [...state.currentQuiz.questions],
      state.currentQuiz.mode,
      state.currentQuiz.titleAr,
      state.currentQuiz.titleEn
    );
  }

  // =========================================================================
  // Question Navigator (Quick Navigation Panel)
  // =========================================================================
  function toggleNavigator(forceState) {
    if (typeof forceState === 'boolean') {
      state.isNavigatorVisible = forceState;
    } else {
      state.isNavigatorVisible = !state.isNavigatorVisible;
    }
    updateNavigatorVisibilityUI();
  }

  function updateNavigatorVisibilityUI() {
    if (!dom.navigatorContent) return;
    if (state.isNavigatorVisible) {
      dom.navigatorContent.classList.remove('hidden');
      if (dom.navToggleText) dom.navToggleText.textContent = i18n[state.lang].nav_toggle_hide;
      if (dom.navToggleIcon) dom.navToggleIcon.textContent = '▲';
      if (dom.btnToggleNavigator) dom.btnToggleNavigator.setAttribute('aria-expanded', 'true');
    } else {
      dom.navigatorContent.classList.add('hidden');
      if (dom.navToggleText) dom.navToggleText.textContent = i18n[state.lang].nav_toggle_show;
      if (dom.navToggleIcon) dom.navToggleIcon.textContent = '▼';
      if (dom.btnToggleNavigator) dom.btnToggleNavigator.setAttribute('aria-expanded', 'false');
    }
  }

  function renderNavigator() {
    if (!dom.navigatorGrid) return;
    dom.navigatorGrid.innerHTML = '';
    const quiz = state.currentQuiz;
    if (!quiz || !quiz.questions) return;
    const total = quiz.questions.length;

    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-q-btn';
      btn.setAttribute('data-q-idx', i);
      btn.setAttribute('title', `${i18n[state.lang].question_word} ${i + 1}`);
      btn.textContent = i + 1;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        loadQuestion(i);
      });

      dom.navigatorGrid.appendChild(btn);
    }

    updateNavigatorVisibilityUI();
    updateNavigatorState();
  }

  function updateNavigatorState() {
    if (!dom.navigatorGrid) return;
    const quiz = state.currentQuiz;
    if (!quiz || !quiz.questions || quiz.questions.length === 0) return;

    const currentIndex = quiz.currentIndex;
    const total = quiz.questions.length;
    let answeredCount = 0;

    const buttons = dom.navigatorGrid.querySelectorAll('.nav-q-btn');
    buttons.forEach((btn, i) => {
      btn.classList.remove('current', 'answered-correct', 'answered-wrong', 'answered-selected');
      btn.setAttribute('title', `${i18n[state.lang].question_word} ${i + 1}`);

      const ans = quiz.userAnswers[i];
      if (ans && ans.isChecked) {
        answeredCount++;
        if (ans.isCorrect) {
          btn.classList.add('answered-correct');
        } else {
          btn.classList.add('answered-wrong');
        }
      } else if (ans && ans.selected !== undefined) {
        answeredCount++;
        btn.classList.add('answered-selected');
      }

      if (i === currentIndex) {
        btn.classList.add('current');
        if (state.isNavigatorVisible) {
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
      }
    });

    if (dom.navigatorSummary && i18n[state.lang].nav_answered_ratio) {
      dom.navigatorSummary.textContent = i18n[state.lang].nav_answered_ratio
        .replace('{answered}', answeredCount)
        .replace('{total}', total);
    }
  }

  // =========================================================================
  // Question Rendering & Navigation
  // =========================================================================
  function loadQuestion(index) {
    const quiz = state.currentQuiz;
    if (!quiz || !quiz.questions || index < 0 || index >= quiz.questions.length) return;

    quiz.currentIndex = index;
    const q = quiz.questions[index];
    const total = quiz.questions.length;
    const isAr = state.lang === 'ar';

    updateQuizTopBar();

    // Set question meta tags
    dom.qIdTag.textContent = `Q${q.id}`;
    dom.qTypeBadge.textContent = isAr ? (q.type === 'mcq' ? 'اختيار من متعدد' : 'صواب أو خطأ') : (q.type === 'mcq' ? 'MCQ' : 'True / False');
    dom.qTypeBadge.className = `badge ${q.type === 'mcq' ? 'badge-primary' : 'badge-chapter'}`;
    dom.qText.textContent = isAr && q.questionAr ? q.questionAr : q.question;

    // Reset Explanation box
    dom.explanationBox.classList.remove('show');
    dom.explanationContent.style.display = 'none';
    dom.expToggleText.textContent = i18n[state.lang].show_explanation;
    dom.expToggleIcon.textContent = '▼';
    dom.expTextAr.textContent = q.explanationAr;
    dom.expTextEn.textContent = q.explanationEn;
    reorderExplanationHeaders(state.lang);

    // Check if previously answered
    const savedAnswer = quiz.userAnswers[index];

    // Reset Feedback banner
    dom.feedbackBanner.classList.remove('show', 'correct', 'wrong');
    dom.feedbackBanner.style.display = 'none';

    // Render Options (Bilingual)
    dom.qOptionsContainer.innerHTML = '';
    const optionLetters = ['A', 'B', 'C', 'D'];
    const activeOptions = isAr && q.optionsAr && q.optionsAr.length === q.options.length ? q.optionsAr : q.options;

    activeOptions.forEach((optText, optIdx) => {
      const optItem = document.createElement('div');
      optItem.className = 'option-item';
      optItem.setAttribute('data-idx', optIdx);

      const prefix = document.createElement('div');
      prefix.className = 'option-prefix';
      prefix.textContent = q.type === 'mcq' ? optionLetters[optIdx] : (optIdx === 0 ? (isAr ? 'ص' : 'T') : (isAr ? 'خ' : 'F'));

      const label = document.createElement('div');
      label.className = 'option-label';
      label.textContent = optText;

      optItem.appendChild(prefix);
      optItem.appendChild(label);

      // If user had already checked answer for this question
      if (savedAnswer && savedAnswer.isChecked) {
        optItem.classList.add('disabled');
        if (optIdx === q.correctAnswer) {
          optItem.classList.add('correct');
        } else if (optIdx === savedAnswer.selected) {
          optItem.classList.add('wrong');
        }
      } else if (savedAnswer && savedAnswer.selected === optIdx) {
        optItem.classList.add('selected');
      }

      // Click listener
      optItem.addEventListener('click', () => {
        if (savedAnswer && savedAnswer.isChecked) return;
        selectOption(optIdx);
      });

      dom.qOptionsContainer.appendChild(optItem);
    });

    // Update buttons
    dom.btnPrevQ.disabled = index === 0;
    dom.btnNextQ.disabled = index === total - 1;

    if (savedAnswer && savedAnswer.isChecked) {
      if (dom.btnCheckAns) dom.btnCheckAns.disabled = true;
      showFeedbackBanner(savedAnswer.isCorrect, savedAnswer.selected, q.correctAnswer);
      dom.explanationBox.classList.add('show');
      dom.explanationContent.style.display = 'none';
      dom.expToggleText.textContent = i18n[state.lang].show_explanation;
      dom.expToggleIcon.textContent = '▼';
    } else {
      if (dom.btnCheckAns) dom.btnCheckAns.disabled = true;
    }

    updateNavigatorState();
  }

  function updateQuizTopBar() {
    const quiz = state.currentQuiz;
    if (!quiz || !quiz.questions || quiz.questions.length === 0) return;
    const index = quiz.currentIndex !== undefined ? quiz.currentIndex : 0;
    const total = quiz.questions.length;
    const q = quiz.questions[index];
    if (!q) return;

    const isAr = state.lang === 'ar';
    if (dom.quizModeBadge) dom.quizModeBadge.textContent = isAr ? quiz.titleAr : quiz.titleEn;
    if (dom.quizChapterBadge) dom.quizChapterBadge.textContent = isAr ? (chapterTitlesAr[q.chapterId] || q.chapter) : (chapterTitlesEn[q.chapterId] || q.chapter);

    const qWord = i18n[state.lang].question_word;
    const ofWord = i18n[state.lang].of_word;
    if (dom.quizCounter) dom.quizCounter.textContent = `${qWord} ${index + 1} ${ofWord} ${total}`;

    const pct = ((index + 1) / total) * 100;
    if (dom.quizProgressBar) dom.quizProgressBar.style.width = `${pct}%`;
  }

  function selectOption(optionIndex) {
    const quiz = state.currentQuiz;
    const idx = quiz.currentIndex;

    // Prevent re-selection if question is already checked
    if (quiz.userAnswers[idx] && quiz.userAnswers[idx].isChecked) return;

    quiz.userAnswers[idx] = quiz.userAnswers[idx] || {};
    quiz.userAnswers[idx].selected = optionIndex;

    // Instant answer checking upon option click
    checkCurrentAnswer();
  }

  function checkCurrentAnswer() {
    const quiz = state.currentQuiz;
    const idx = quiz.currentIndex;
    const q = quiz.questions[idx];
    const userChoice = quiz.userAnswers[idx] ? quiz.userAnswers[idx].selected : undefined;

    if (userChoice === undefined) return;

    const isCorrect = userChoice === q.correctAnswer;

    quiz.userAnswers[idx].isChecked = true;
    quiz.userAnswers[idx].isCorrect = isCorrect;

    // Disable options and mark correct / wrong immediately
    dom.qOptionsContainer.querySelectorAll('.option-item').forEach((opt) => {
      const optIdx = parseInt(opt.getAttribute('data-idx'), 10);
      opt.classList.add('disabled');
      if (optIdx === q.correctAnswer) {
        optItemHighlight(opt, 'correct');
      } else if (optIdx === userChoice) {
        optItemHighlight(opt, 'wrong');
      }
    });

    if (dom.btnCheckAns) dom.btnCheckAns.disabled = true;

    // Show feedback banner immediately
    showFeedbackBanner(isCorrect, userChoice, q.correctAnswer);

    // Show explanation toggle box, but keep content collapsed/hidden by default
    dom.explanationBox.classList.add('show');
    dom.explanationContent.style.display = 'none';
    dom.expToggleText.textContent = i18n[state.lang].show_explanation;
    dom.expToggleIcon.textContent = '▼';

    updateNavigatorState();
  }

  function optItemHighlight(opt, status) {
    opt.classList.remove('selected');
    opt.classList.add(status);
  }

  function showFeedbackBanner(isCorrect, userChoiceIdx, correctChoiceIdx) {
    const quiz = state.currentQuiz;
    const q = quiz.questions[quiz.currentIndex];
    const isAr = state.lang === 'ar';
    const optionLetters = ['A', 'B', 'C', 'D'];
    const activeOptions = isAr && q.optionsAr && q.optionsAr.length === q.options.length ? q.optionsAr : q.options;

    dom.feedbackBanner.classList.remove('correct', 'wrong');
    dom.feedbackBanner.classList.add('show', isCorrect ? 'correct' : 'wrong');
    dom.feedbackBanner.style.display = 'block';

    if (isCorrect) {
      dom.feedbackHeader.textContent = i18n[state.lang].correct_msg;
      dom.feedbackDetails.innerHTML = `
        <div>${i18n[state.lang].correct_answer} <strong>${activeOptions[correctChoiceIdx]}</strong></div>
      `;
    } else {
      dom.feedbackHeader.textContent = i18n[state.lang].wrong_msg;
      const userLetter = q.type === 'mcq' ? optionLetters[userChoiceIdx] : (userChoiceIdx === 0 ? (isAr ? 'صواب' : 'True') : (isAr ? 'خطأ' : 'False'));
      const correctLetter = q.type === 'mcq' ? optionLetters[correctChoiceIdx] : (correctChoiceIdx === 0 ? (isAr ? 'صواب' : 'True') : (isAr ? 'خطأ' : 'False'));

      dom.feedbackDetails.innerHTML = `
        <div>${i18n[state.lang].your_answer} <span style="text-decoration:line-through; color:var(--danger);">${userLetter}) ${activeOptions[userChoiceIdx]}</span></div>
        <div>${i18n[state.lang].correct_answer} <span style="font-weight:700; color:var(--success);">${correctLetter}) ${activeOptions[correctChoiceIdx]}</span></div>
      `;
    }
  }

  function toggleExplanationContent() {
    const isVisible = dom.explanationContent.style.display === 'block';
    if (isVisible) {
      dom.explanationContent.style.display = 'none';
      dom.expToggleText.textContent = i18n[state.lang].show_explanation;
      dom.expToggleIcon.textContent = '▼';
    } else {
      dom.explanationContent.style.display = 'block';
      dom.expToggleText.textContent = i18n[state.lang].hide_explanation;
      dom.expToggleIcon.textContent = '▲';
    }
  }

  function goToPreviousQuestion() {
    if (state.currentQuiz.currentIndex > 0) {
      loadQuestion(state.currentQuiz.currentIndex - 1);
    }
  }

  function goToNextQuestion() {
    if (state.currentQuiz.currentIndex < state.currentQuiz.questions.length - 1) {
      loadQuestion(state.currentQuiz.currentIndex + 1);
    }
  }

  // =========================================================================
  // Results & Scoring
  // =========================================================================
  function finishQuiz() {
    const quiz = state.currentQuiz;
    quiz.isFinished = true;
    const total = quiz.questions.length;

    let correctCount = 0;
    let wrongCount = 0;

    quiz.questions.forEach((q, idx) => {
      const ans = quiz.userAnswers[idx];
      if (ans && ans.isChecked) {
        if (ans.isCorrect) {
          correctCount++;
        } else {
          wrongCount++;
        }
      } else if (ans && ans.selected !== undefined) {
        // If answered but not checked, evaluate it
        if (ans.selected === q.correctAnswer) {
          correctCount++;
          ans.isCorrect = true;
        } else {
          wrongCount++;
          ans.isCorrect = false;
        }
        ans.isChecked = true;
      } else {
        wrongCount++; // unanswered counted as incorrect
      }
    });

    const percentage = Math.round((correctCount / total) * 100);

    // Render Results
    dom.resScoreRatio.textContent = `${correctCount} / ${total}`;
    dom.resScorePct.textContent = `${percentage}%`;
    dom.resStatCorrect.textContent = correctCount;
    dom.resStatWrong.textContent = wrongCount;
    dom.resStatTotal.textContent = total;

    // Evaluation Pill
    dom.resGradePill.className = 'grade-pill';
    if (percentage >= 90) {
      dom.resBadgeIcon.textContent = '⭐';
      dom.resGradePill.classList.add('grade-excellent');
      dom.resGradePill.textContent = i18n[state.lang].grade_excellent;
    } else if (percentage >= 80) {
      dom.resBadgeIcon.textContent = '👍';
      dom.resGradePill.classList.add('grade-verygood');
      dom.resGradePill.textContent = i18n[state.lang].grade_verygood;
    } else if (percentage >= 70) {
      dom.resBadgeIcon.textContent = '🎯';
      dom.resGradePill.classList.add('grade-good');
      dom.resGradePill.textContent = i18n[state.lang].grade_good;
    } else if (percentage >= 60) {
      dom.resBadgeIcon.textContent = '✅';
      dom.resGradePill.classList.add('grade-pass');
      dom.resGradePill.textContent = i18n[state.lang].grade_pass;
    } else {
      dom.resBadgeIcon.textContent = '📚';
      dom.resGradePill.classList.add('grade-needs');
      dom.resGradePill.textContent = i18n[state.lang].grade_needs;
    }

    // Save summary to localStorage
    try {
      localStorage.setItem('ai_quiz_last_result', JSON.stringify({
        mode: quiz.mode,
        total: total,
        correct: correctCount,
        percentage: percentage,
        timestamp: new Date().toISOString(),
      }));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    showView(dom.viewResults);
  }

  // =========================================================================
  // Review Answers
  // =========================================================================
  function renderReviewView() {
    const quiz = state.currentQuiz;
    dom.reviewCardsContainer.innerHTML = '';

    const filter = state.reviewFilter;
    const query = state.reviewSearchQuery;

    let itemsToRender = [];

    quiz.questions.forEach((q, idx) => {
      const userAns = quiz.userAnswers[idx] || { selected: -1, isCorrect: false };
      const isCorrect = userAns.isCorrect;

      if (filter === 'correct' && !isCorrect) return;
      if (filter === 'wrong' && isCorrect) return;

      if (query) {
        const textMatch = q.question.toLowerCase().includes(query) ||
          q.explanationAr.toLowerCase().includes(query) ||
          q.explanationEn.toLowerCase().includes(query) ||
          q.options.some((o) => o.toLowerCase().includes(query));
        if (!textMatch) return;
      }

      itemsToRender.push({ q, idx, userAns, isCorrect });
    });

    if (itemsToRender.length === 0) {
      dom.reviewCardsContainer.innerHTML = `
        <div style="text-align:center; padding:3rem; color:var(--text-muted); font-size:1.1rem;">
          ${state.lang === 'ar' ? 'لا توجد أسئلة مطابقة للبحث أو التصفية الحالية.' : 'No questions matching current filter or search.'}
        </div>
      `;
      return;
    }

    const optionLetters = ['A', 'B', 'C', 'D'];
    const isAr = state.lang === 'ar';

    itemsToRender.forEach(({ q, idx, userAns, isCorrect }) => {
      const card = document.createElement('div');
      card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      const activeOptions = isAr && q.optionsAr && q.optionsAr.length === q.options.length ? q.optionsAr : q.options;
      const userChoiceText = userAns.selected >= 0 ? activeOptions[userAns.selected] : (isAr ? 'لم تتم الإجابة' : 'Unanswered');
      const userChoiceLetter = userAns.selected >= 0 ? (q.type === 'mcq' ? optionLetters[userAns.selected] : (userAns.selected === 0 ? (isAr ? 'صواب' : 'True') : (isAr ? 'خطأ' : 'False'))) : '-';
      const correctChoiceText = activeOptions[q.correctAnswer];
      const correctChoiceLetter = q.type === 'mcq' ? optionLetters[q.correctAnswer] : (q.correctAnswer === 0 ? (isAr ? 'صواب' : 'True') : (isAr ? 'خطأ' : 'False'));

      card.innerHTML = `
        <div class="review-card-top">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="question-number-tag">Q${q.id}</span>
            <span class="badge badge-chapter">${isAr ? (chapterTitlesAr[q.chapterId] || q.chapter) : (chapterTitlesEn[q.chapterId] || q.chapter)}</span>
          </div>
          <span class="review-status-badge ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? (isAr ? '✓ إجابة صحيحة' : '✓ Correct') : (isAr ? '✗ إجابة خاطئة' : '✗ Wrong')}
          </span>
        </div>

        <div class="review-q-text">${isAr && q.questionAr ? q.questionAr : q.question}</div>

        <div class="review-answers-box">
          <div><strong>${i18n[state.lang].your_answer}</strong> <span style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; font-weight:700;">${userChoiceLetter}) ${userChoiceText}</span></div>
          <div><strong>${i18n[state.lang].correct_answer}</strong> <span style="color:var(--success); font-weight:700;">${correctChoiceLetter}) ${correctChoiceText}</span></div>
        </div>

        <div class="explanation-content" style="padding:0;">
          ${state.lang === 'en' ? `
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇬🇧 English Explanation:</div>
              <div class="exp-text">${q.explanationEn}</div>
            </div>
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇸🇦 الشرح بالعربية:</div>
              <div class="exp-text">${q.explanationAr}</div>
            </div>
          ` : `
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇸🇦 الشرح بالعربية:</div>
              <div class="exp-text">${q.explanationAr}</div>
            </div>
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇬🇧 English Explanation:</div>
              <div class="exp-text">${q.explanationEn}</div>
            </div>
          `}
        </div>
      `;

      dom.reviewCardsContainer.appendChild(card);
    });
  }

  // =========================================================================
  // Question Bank Browser
  // =========================================================================
  function renderBankView() {
    dom.bankCardsContainer.innerHTML = '';
    const query = state.bankSearchQuery;
    const chapFilter = state.bankChapterFilter;
    const typeFilter = state.bankTypeFilter;

    let filtered = state.allQuestions.filter((q) => {
      if (chapFilter !== 'all' && q.chapterId !== parseInt(chapFilter, 10)) return false;
      if (typeFilter !== 'all' && q.type !== typeFilter) return false;
      if (query) {
        const matches = q.question.toLowerCase().includes(query) ||
          q.explanationAr.toLowerCase().includes(query) ||
          q.explanationEn.toLowerCase().includes(query) ||
          q.options.some((o) => o.toLowerCase().includes(query));
        if (!matches) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      dom.bankCardsContainer.innerHTML = `
        <div style="text-align:center; padding:3rem; color:var(--text-muted); font-size:1.1rem;">
          ${state.lang === 'ar' ? 'لم يتم العثور على أي أسئلة مطابقة للبحث.' : 'No questions found matching your search.'}
        </div>
      `;
      return;
    }

    const optionLetters = ['A', 'B', 'C', 'D'];
    const isAr = state.lang === 'ar';

    filtered.forEach((q) => {
      const card = document.createElement('div');
      card.className = 'review-item-card is-correct';

      const activeOptions = isAr && q.optionsAr && q.optionsAr.length === q.options.length ? q.optionsAr : q.options;
      const optionsHtml = activeOptions.map((opt, i) => {
        const isAnswer = i === q.correctAnswer;
        const letter = q.type === 'mcq' ? optionLetters[i] : (i === 0 ? (isAr ? 'صواب' : 'True') : (isAr ? 'خطأ' : 'False'));
        return `
          <div style="padding:0.4rem 0.6rem; border-radius:6px; background:${isAnswer ? 'var(--success-bg)' : 'transparent'}; color:${isAnswer ? 'var(--success-text)' : 'inherit'}; font-weight:${isAnswer ? '700' : 'normal'};">
            ${letter}) ${opt} ${isAnswer ? '✓' : ''}
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="review-card-top">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="question-number-tag">Q${q.id}</span>
            <span class="badge badge-chapter">${isAr ? (chapterTitlesAr[q.chapterId] || q.chapter) : (chapterTitlesEn[q.chapterId] || q.chapter)}</span>
            <span class="badge ${q.type === 'mcq' ? 'badge-primary' : 'badge-chapter'}">${isAr ? (q.type === 'mcq' ? 'اختيار من متعدد' : 'صواب أو خطأ') : (q.type === 'mcq' ? 'MCQ' : 'True/False')}</span>
          </div>
        </div>

        <div class="review-q-text">${isAr && q.questionAr ? q.questionAr : q.question}</div>

        <div style="background:var(--bg-tertiary); border-radius:8px; padding:0.75rem 1rem; margin-bottom:1rem; display:flex; flex-direction:column; gap:0.25rem;">
          ${optionsHtml}
        </div>

        <div class="explanation-content" style="padding:0;">
          ${state.lang === 'en' ? `
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇬🇧 English Explanation:</div>
              <div class="exp-text">${q.explanationEn}</div>
            </div>
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇸🇦 الشرح بالعربية:</div>
              <div class="exp-text">${q.explanationAr}</div>
            </div>
          ` : `
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇸🇦 الشرح بالعربية:</div>
              <div class="exp-text">${q.explanationAr}</div>
            </div>
            <div class="exp-lang-block">
              <div class="exp-lang-header">🇬🇧 English Explanation:</div>
              <div class="exp-text">${q.explanationEn}</div>
            </div>
          `}
        </div>
      `;

      dom.bankCardsContainer.appendChild(card);
    });
  }

  // Run on page load safely
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

