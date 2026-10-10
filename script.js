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
      // Primary default language: en, ar, or both
      const pref = localStorage.getItem('ai_quiz_lang_pref_v2');
      if (pref && ['en', 'ar', 'both'].includes(pref)) return pref;
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
      modal_scope_hint: '(Multiple selection supported)',
      modal_scope_all: 'All Chapters (300 Q)',
      modal_scope_1: 'Chapter 1 (100 Q)',
      modal_scope_2: 'Chapter 2 (80 Q)',
      modal_scope_3: 'Chapter 3 (120 Q)',
      modal_type_lbl: 'Question Type:',
      modal_type_all: 'All Types (300 Q)',
      modal_type_mcq: 'Multiple Choice (MCQ)',
      modal_type_tf: 'True / False',
      modal_available_text: 'Available matching questions: {count}',
      modal_shuffle_lbl: 'Choices Order:',
      modal_shuffle_default: 'Original Order',
      modal_shuffle_random: '🔀 Randomized Choices',
      btn_shuffle_options: 'Shuffle Choices',
      toast_shuffled: 'Choices shuffled! 🔀',
      modal_count_lbl: 'Number of Questions:',
      modal_count_all_avail: 'All in Scope',
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
      modal_scope_lbl: 'نطاق الأبواب (Chapter Scope):',
      modal_scope_hint: '(يمكنك اختيار أكثر من باب معاً)',
      modal_scope_all: 'كافة الأبواب (300 سؤال)',
      modal_scope_1: 'الباب 1 (100 Q)',
      modal_scope_2: 'الباب 2 (80 Q)',
      modal_scope_3: 'الباب 3 (120 Q)',
      modal_type_lbl: 'نوع الأسئلة (Question Type):',
      modal_type_all: 'كافة الأنواع (300 سؤال)',
      modal_type_mcq: 'اختيار من متعدد فقط (MCQ)',
      modal_type_tf: 'صح أم خطأ فقط (True / False)',
      modal_available_text: 'إجمالي الأسئلة المتاحة في هذا التحديد: {count} سؤال',
      modal_shuffle_lbl: 'ترتيب الاختيارات:',
      modal_shuffle_default: 'الترتيب الافتراضي',
      modal_shuffle_random: '🔀 خلط عشوائي للاختيارات',
      btn_shuffle_options: 'خلط الاختيارات 🔀',
      toast_shuffled: 'تم تغيير أماكن الاختيارات بنجاح! 🔀',
      modal_count_lbl: 'عدد الأسئلة (Number of Questions):',
      modal_count_all_avail: 'كل المتاح في التحديد',
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
    },
    both: {
      app_title: 'Artificial Intelligence | الذكاء الاصطناعي',
      app_subtitle: 'Interactive Quiz Platform (300 Questions) | منصة اختبارات الذكاء الاصطناعي',
      btn_modes_nav: 'Modes | الأوضاع',
      btn_bank_nav: 'Question Bank | بنك الأسئلة',
      theme_dark: 'Dark | الداكن',
      theme_light: 'Light | الفاتح',
      home_title: 'AI Practice & Examination Platform | منصة اختبارات الذكاء الاصطناعي',
      home_desc: 'Comprehensive academic question bank with 300 questions (Russell & Norvig AIMA) with detailed bilingual explanations. | بنك أسئلة جامعي تفاعلي متقدم يحتوي على 300 سؤال مع شروحات تعليمية دقيقة باللغتين العربية والإنجليزية.',
      stat_total: 'Total | إجمالي الأسئلة',
      stat_mcq: 'MCQ | اختيار من متعدد',
      stat_tf: 'True / False | صح أم خطأ',
      stat_chapters: 'Chapters | أبواب دراسية',
      modes_title: '🎯 Choose Quiz Mode / اختر وضع الاختبار:',
      mode_all_title: 'All Questions | جميع الأسئلة',
      mode_all_desc: 'Practice the complete question bank (300 questions) sequentially by chapter for comprehensive mastery. | تدرب على بنك الأسئلة بالكامل مرتبة حسب الأبواب.',
      badge_300_qs: '300 Q / سؤال',
      btn_start: 'Start Quiz | ابدأ الاختبار',
      mode_random_title: 'Random Quiz | اختبار عشوائي',
      mode_random_desc: 'Real exam simulation with randomized non-repeating questions, customizable counts, and chapter scope. | محاكاة اختبار حقيقي بأسئلة عشوائية.',
      badge_random_qs: '10 - 100 Q / سؤال',
      btn_customize: 'Configure & Start | تخصيص وبدء',
      mode_bank_title: 'Question Bank Browser | بنك الأسئلة',
      mode_bank_desc: 'Browse and search all 300 questions, view verified answers, and read bilingual explanations on demand. | تصفح وبحث في كافة الأسئلة مع الحلول.',
      badge_bank: 'Search & Filter | بحث وتصفية',
      btn_browse: 'Open Bank | فتح البنك',
      chapters_title: '📑 Practice by Chapter / تدرب حسب الباب الدراسي:',
      chap1_title: 'Chapter 1: Intro to AI | الباب الأول: مقدمة الذكاء الاصطناعي',
      chap1_desc: 'AI history, Turing Test, rational agents, philosophical foundations | تاريخ الذكاء الاصطناعي، اختبار تورينج، الفلسفة',
      chap1_badge: '100 Q (70 MCQ + 30 T/F)',
      chap2_title: 'Chapter 2: Intelligent Agents | الباب الثاني: الوكلاء الأذكياء',
      chap2_desc: 'PEAS framework, environment types, agent architectures | الوكلاء، PEAS، أنواع البيئات، وهياكل الوكلاء',
      chap2_badge: '80 Q (60 MCQ + 20 T/F)',
      chap3_title: 'Chapter 3: Problem Solving by Search | الباب الثالث: حل المشكلات بالبحث',
      chap3_desc: 'Problem formulation, BFS, DFS, UCS, IDS, A*, heuristics | صياغة المشكلات، BFS، DFS، A*، والهيورستك',
      chap3_badge: '120 Q (90 MCQ + 30 T/F)',
      btn_practice_now: 'Practice Now | تدرب الآن',
      mode_all_badge: 'All Questions | جميع الأسئلة',
      btn_prev: 'Previous | السابق',
      btn_next: 'Next | التالي',
      btn_check: 'Check Answer | تحقق من الإجابة',
      btn_finish: 'Finish Quiz | إنهاء الاختبار',
      correct_msg: '✓ Correct Answer | إجابة صحيحة',
      wrong_msg: '✗ Incorrect Answer | إجابة خاطئة',
      your_answer: 'Your Answer / إجابتك:',
      correct_answer: 'Correct Answer / الإجابة الصحيحة:',
      show_explanation: '💡 Show Explanation / عرض الشرح',
      hide_explanation: '💡 Hide Explanation / إخفاء الشرح',
      exp_header_ar: '🇸🇦 Arabic Explanation / الشرح بالعربية:',
      exp_header_en: '🇬🇧 English Explanation:',
      question_word: 'Question / السؤال',
      of_word: 'of / من',
      res_title: 'Quiz Completed! | اكتمل الاختبار بنجاح!',
      res_subtitle: 'Performance Summary & Final Result | ملخص الأداء والنتيجة النهائية',
      stat_correct: 'Correct | إجابات صحيحة',
      stat_wrong: 'Wrong | إجابات خاطئة',
      stat_total_qs: 'Total Questions | إجمالي الأسئلة',
      grade_excellent: 'Excellent ⭐ ممتاز',
      grade_verygood: 'Very Good 👍 جيد جداً',
      grade_good: 'Good | جيد',
      grade_pass: 'Pass | مقبول',
      grade_needs: 'Needs More Practice | يحتاج لمزيد من التدريب',
      btn_review: 'Review Answers | مراجعة الإجابات',
      btn_retry: 'Try Again | إعادة الاختبار',
      btn_new_random: 'New Random Quiz | اختبار عشوائي جديد',
      btn_home: 'Home | الرئيسية',
      review_title: '📋 Review Answers | مراجعة الإجابات',
      tab_all: 'All | الكل',
      tab_correct: 'Correct ✓ الصحيحة',
      tab_wrong: 'Wrong ✗ الخاطئة',
      btn_back_results: 'Back to Results | العودة للنتيجة',
      review_search_placeholder: '🔍 Search reviewed questions / ابحث في الأسئلة...',
      bank_title: '📚 Question Bank Browser / تصفح بنك الأسئلة (300)',
      bank_subtitle: 'Browse and study all 300 questions with verified solutions and explanations | تصفح واقرأ جميع الأسئلة مع الحلول والشروحات',
      bank_search_placeholder: '🔍 Search any keyword or concept / ابحث عن أي كلمة أو مفهوم...',
      bank_filter_all_chaps: 'All Chapters | جميع الأبواب',
      bank_filter_chap1: 'Chapter 1: Intro to AI',
      bank_filter_chap2: 'Chapter 2: Intelligent Agents',
      bank_filter_chap3: 'Chapter 3: Search',
      bank_filter_all_types: 'All Types | كافة الأنواع',
      bank_filter_mcq: 'MCQ | اختيار من متعدد',
      bank_filter_tf: 'True / False | صح أم خطأ',
      modal_title: '🎲 Configure Random Quiz | إعداد الاختبار العشوائي',
      modal_scope_lbl: 'Chapter Scope / نطاق الأبواب:',
      modal_scope_hint: '(Multi-selection / يمكنك اختيار أكثر من باب)',
      modal_scope_all: 'All Chapters | كافة الأبواب (300 Q)',
      modal_scope_1: 'Chapter 1 | الباب 1 (100 Q)',
      modal_scope_2: 'Chapter 2 | الباب 2 (80 Q)',
      modal_scope_3: 'Chapter 3 | الباب 3 (120 Q)',
      modal_type_lbl: 'Question Type / نوع الأسئلة:',
      modal_type_all: 'All Types | كافة الأنواع (300 Q)',
      modal_type_mcq: 'MCQ Only | اختيار من متعدد فقط',
      modal_type_tf: 'True/False Only | صح أو خطأ فقط',
      modal_available_text: 'Available in selection: {count} Q | المتاح في التحديد: {count} سؤال',
      modal_shuffle_lbl: 'Choices Order / ترتيب الاختيارات:',
      modal_shuffle_default: 'Original | افتراضي',
      modal_shuffle_random: '🔀 Randomized | خلط عشوائي',
      btn_shuffle_options: 'Shuffle Choices | خلط الاختيارات 🔀',
      toast_shuffled: 'Choices shuffled! | تم تغيير أماكن الاختيارات! 🔀',
      modal_count_lbl: 'Number of Questions / عدد الأسئلة:',
      modal_count_all_avail: 'All in Selection | كل المتاح',
      modal_count_custom: 'Custom | مخصص',
      modal_count_custom_placeholder: 'Enter a number between 5 and 300 / أدخل عدداً بين 5 و 300',
      btn_cancel: 'Cancel | إلغاء',
      btn_modal_start: 'Start Quiz Now 🚀 ابدأ الاختبار الآن',
      footer_line1: 'Interactive AI Quiz Platform • Russell & Norvig AIMA Chapters 1, 2 & 3',
      footer_line2: 'Bilingual Standalone System • Zero Dependencies, No Backend',
      confirm_finish: 'Are you sure you want to finish the quiz now? / هل أنت متأكد من رغبتك في إنهاء الاختبار الآن؟',
      confirm_reset: 'Are you sure you want to reset all stored progress? / هل تريد حقاً إعادة ضبط التقدم وحذف السجلات؟',
      nav_panel_title: 'Question Navigator | قائمة الأسئلة والتنقل السريع',
      nav_toggle_show: 'Show Navigator | إظهار القائمة',
      nav_toggle_hide: 'Hide Navigator | إخفاء القائمة',
      legend_current: 'Current | الحالي',
      legend_correct: 'Correct | صواب',
      legend_wrong: 'Incorrect | خطأ',
      legend_answered: 'Answered | مجاب',
      legend_unanswered: 'Unanswered | غير مجاب',
      nav_answered_ratio: '{answered} / {total} Answered | تم حل',
    }
  };

  // Safe HTML escape helper
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // DOM Elements
  const dom = {
    brandLogo: document.getElementById('brand-logo'),
    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    themeLabel: document.getElementById('theme-label'),
    btnLangToggle: document.getElementById('btn-lang-toggle'),
    langLabel: document.getElementById('lang-label'),
    langDropdownWrapper: document.getElementById('lang-dropdown-wrapper'),
    langDropdownMenu: document.getElementById('lang-dropdown-menu'),
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
    modalTypePills: document.getElementById('modal-type-pills'),
    modalAvailableInfo: document.getElementById('modal-available-info'),
    modalAvailableText: document.getElementById('modal-available-text'),
    modalCountPills: document.getElementById('modal-count-pills'),
    customCountInput: document.getElementById('custom-count-input'),
    modalShufflePills: document.getElementById('modal-shuffle-pills'),
    btnShuffleOptions: document.getElementById('btn-shuffle-options'),
    quizToast: document.getElementById('quiz-toast'),
  };

  // Floating Toast Notification
  let toastTimer = null;
  function showToast(message) {
    if (!dom.quizToast) return;
    dom.quizToast.textContent = message;
    dom.quizToast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      if (dom.quizToast) dom.quizToast.classList.remove('show');
    }, 2000);
  }

  // Clone Question Deep Copy Helper
  function cloneQuestion(q) {
    return {
      ...q,
      options: [...q.options],
      optionsAr: q.optionsAr ? [...q.optionsAr] : undefined,
      eliminations: q.eliminations ? { ...q.eliminations } : undefined,
      eliminationsAr: q.eliminationsAr ? { ...q.eliminationsAr } : undefined,
    };
  }

  // Shuffle Question Options Helper
  function shuffleQuestionOptions(q) {
    if (!q || !q.options || q.options.length <= 1) return null;

    const n = q.options.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    let shuffledIndices;
    let attempts = 0;
    do {
      shuffledIndices = [...indices];
      for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
      }
      attempts++;
    } while (attempts < 10 && shuffledIndices.every((val, idx) => val === idx));

    const newOptions = shuffledIndices.map((oldIdx) => q.options[oldIdx]);
    const newOptionsAr = q.optionsAr ? shuffledIndices.map((oldIdx) => q.optionsAr[oldIdx]) : undefined;
    const newCorrectAnswer = shuffledIndices.indexOf(q.correctAnswer);

    let newEliminations = undefined;
    if (q.eliminations) {
      newEliminations = {};
      shuffledIndices.forEach((oldIdx, newIdx) => {
        if (q.eliminations[String(oldIdx)] !== undefined) {
          newEliminations[String(newIdx)] = q.eliminations[String(oldIdx)];
        }
      });
    }

    let newEliminationsAr = undefined;
    if (q.eliminationsAr) {
      newEliminationsAr = {};
      shuffledIndices.forEach((oldIdx, newIdx) => {
        if (q.eliminationsAr[String(oldIdx)] !== undefined) {
          newEliminationsAr[String(newIdx)] = q.eliminationsAr[String(oldIdx)];
        }
      });
    }

    q.options = newOptions;
    if (newOptionsAr) q.optionsAr = newOptionsAr;
    q.correctAnswer = newCorrectAnswer;
    if (newEliminations) q.eliminations = newEliminations;
    if (newEliminationsAr) q.eliminationsAr = newEliminationsAr;

    return shuffledIndices;
  }

  function handleShuffleCurrentQuestion() {
    const quiz = state.currentQuiz;
    if (!quiz || !quiz.questions || quiz.questions.length === 0) return;
    const q = quiz.questions[quiz.currentIndex];
    if (!q || !q.options || q.options.length <= 1) return;

    if (dom.btnShuffleOptions) {
      dom.btnShuffleOptions.classList.add('spinning');
      setTimeout(() => {
        if (dom.btnShuffleOptions) dom.btnShuffleOptions.classList.remove('spinning');
      }, 500);
    }

    const shuffledIndices = shuffleQuestionOptions(q);
    if (!shuffledIndices) return;

    const ans = quiz.userAnswers[quiz.currentIndex];
    if (ans && ans.selected !== undefined) {
      ans.selected = shuffledIndices.indexOf(ans.selected);
    }

    loadQuestion(quiz.currentIndex);

    if (dom.qOptionsContainer) {
      dom.qOptionsContainer.classList.remove('is-shuffling');
      void dom.qOptionsContainer.offsetWidth;
      dom.qOptionsContainer.classList.add('is-shuffling');
      setTimeout(() => {
        if (dom.qOptionsContainer) dom.qOptionsContainer.classList.remove('is-shuffling');
      }, 400);
    }

    showToast(i18n[state.lang].toast_shuffled || 'Choices shuffled! 🔀');
  }

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
    if (!['en', 'ar', 'both'].includes(lang)) lang = 'en';
    state.lang = lang;
    localStorage.setItem('ai_quiz_lang_pref_v2', lang);
    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Update Language Toggle Label
    if (dom.langLabel) {
      if (lang === 'en') dom.langLabel.textContent = 'English';
      else if (lang === 'ar') dom.langLabel.textContent = 'العربية';
      else dom.langLabel.textContent = 'كلاهما (Both)';
    }

    // Update active state in language dropdown menu
    document.querySelectorAll('.lang-dropdown-item').forEach((item) => {
      const itemLang = item.getAttribute('data-lang');
      item.classList.toggle('active', itemLang === lang);
    });

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
    } else if (lang === 'both') {
      dom.themeLabel.textContent = state.theme === 'dark' ? 'Light / فاتح' : 'Dark / داكن';
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
    const cycle = { en: 'ar', ar: 'both', both: 'en' };
    applyLanguage(cycle[state.lang] || 'en');
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

    // Language Dropdown open/close toggle
    if (dom.btnLangToggle) {
      dom.btnLangToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (dom.langDropdownMenu) {
          dom.langDropdownMenu.classList.toggle('show');
          if (dom.langDropdownWrapper) {
            dom.langDropdownWrapper.classList.toggle('open', dom.langDropdownMenu.classList.contains('show'));
          }
        }
      });
    }

    // Language Dropdown item selection
    document.querySelectorAll('.lang-dropdown-item').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = item.getAttribute('data-lang');
        if (selectedLang) {
          applyLanguage(selectedLang);
        }
        if (dom.langDropdownMenu) dom.langDropdownMenu.classList.remove('show');
        if (dom.langDropdownWrapper) dom.langDropdownWrapper.classList.remove('open');
      });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (dom.langDropdownMenu && dom.langDropdownMenu.classList.contains('show')) {
        if (dom.langDropdownWrapper && !dom.langDropdownWrapper.contains(e.target)) {
          dom.langDropdownMenu.classList.remove('show');
          dom.langDropdownWrapper.classList.remove('open');
        }
      }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dom.langDropdownMenu && dom.langDropdownMenu.classList.contains('show')) {
        dom.langDropdownMenu.classList.remove('show');
        if (dom.langDropdownWrapper) dom.langDropdownWrapper.classList.remove('open');
      }
    });

    dom.btnOpenBank.addEventListener('click', () => {
      renderBankView();
      showView(dom.viewBrowser);
    });

    dom.btnResetStorage.addEventListener('click', () => {
      if (confirm(i18n[state.lang].confirm_reset)) {
        localStorage.clear();
        applyTheme('light');
        applyLanguage('en');
        alert(state.lang === 'ar' ? 'تمت إعادة ضبط التقدم بنجاح!' : (state.lang === 'both' ? 'Progress reset successfully! | تمت إعادة ضبط التقدم!' : 'Progress reset successfully!'));
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
    setupScopeMultiSelect();
    setupTypeSelect();
    setupPillGroup(dom.modalShufflePills);
    setupPillGroup(dom.modalCountPills, (val) => {
      if (val === 'custom') {
        dom.customCountInput.style.display = 'block';
        dom.customCountInput.focus();
      } else {
        dom.customCountInput.style.display = 'none';
      }
    });

    // Shuffle options button listener
    if (dom.btnShuffleOptions) {
      dom.btnShuffleOptions.addEventListener('click', handleShuffleCurrentQuestion);
    }

    // Keyboard navigation: Enter key advances, 'S' key shuffles options
    document.addEventListener('keydown', (e) => {
      if (e.key === 's' || e.key === 'S') {
        if (dom.viewQuiz && dom.viewQuiz.classList.contains('active')) {
          if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
          if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            handleShuffleCurrentQuestion();
            return;
          }
        }
      }
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
    if (!container) return;
    container.querySelectorAll('.pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.pill-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const val = btn.getAttribute('data-count') || btn.getAttribute('data-scope') || btn.getAttribute('data-type');
        if (onSelect) onSelect(val);
      });
    });
  }

  // =========================================================================
  // Random Quiz Configuration Handlers (Multi-Chapter & Question Type)
  // =========================================================================
  function setupScopeMultiSelect() {
    if (!dom.modalScopePills) return;
    const allBtn = dom.modalScopePills.querySelector('[data-scope="all"]');
    const chapterBtns = dom.modalScopePills.querySelectorAll('[data-scope]:not([data-scope="all"])');

    if (allBtn) {
      allBtn.addEventListener('click', () => {
        allBtn.classList.add('active');
        chapterBtns.forEach((btn) => btn.classList.remove('active'));
        updateRandomModalAvailableCount();
      });
    }

    chapterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');

        const activeChBtns = dom.modalScopePills.querySelectorAll('[data-scope]:not([data-scope="all"]).active');

        if (activeChBtns.length === 0) {
          // If no individual chapter selected, revert to 'all'
          if (allBtn) allBtn.classList.add('active');
        } else if (activeChBtns.length === chapterBtns.length) {
          // If all chapters selected, light up 'all'
          if (allBtn) allBtn.classList.add('active');
          chapterBtns.forEach((b) => b.classList.remove('active'));
        } else {
          // Partial selection (e.g. Ch1 & Ch2)
          if (allBtn) allBtn.classList.remove('active');
        }

        updateRandomModalAvailableCount();
      });
    });
  }

  function setupTypeSelect() {
    if (!dom.modalTypePills) return;
    dom.modalTypePills.querySelectorAll('.pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        dom.modalTypePills.querySelectorAll('.pill-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        updateRandomModalAvailableCount();
      });
    });
  }

  function getSelectedChaptersForRandom() {
    if (!dom.modalScopePills) return [1, 2, 3];
    const allBtn = dom.modalScopePills.querySelector('[data-scope="all"].active');
    if (allBtn) return [1, 2, 3];

    const activeChBtns = dom.modalScopePills.querySelectorAll('[data-scope]:not([data-scope="all"]).active');
    if (activeChBtns.length === 0) return [1, 2, 3];

    const chapters = [];
    activeChBtns.forEach((b) => {
      const ch = parseInt(b.getAttribute('data-scope'), 10);
      if (!isNaN(ch)) chapters.push(ch);
    });
    return chapters.length > 0 ? chapters : [1, 2, 3];
  }

  function getSelectedTypeForRandom() {
    if (!dom.modalTypePills) return 'all';
    const activeBtn = dom.modalTypePills.querySelector('.pill-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-type') : 'all';
  }

  function getMatchingQuestionsForRandom() {
    const chapters = getSelectedChaptersForRandom();
    const type = getSelectedTypeForRandom();

    return state.allQuestions.filter((q) => {
      if (!chapters.includes(q.chapterId)) return false;
      if (type !== 'all' && q.type !== type) return false;
      return true;
    });
  }

  function updateRandomModalAvailableCount() {
    const matching = getMatchingQuestionsForRandom();
    if (dom.modalAvailableText) {
      const tmpl = i18n[state.lang].modal_available_text || 'Available matching questions: {count}';
      dom.modalAvailableText.textContent = tmpl.replace('{count}', matching.length);
    }
  }

  // =========================================================================
  // Quiz Launchers
  // =========================================================================
  function startQuizSession(questionsList, mode, titleAr, titleEn) {
    if (!questionsList || questionsList.length === 0) {
      alert(state.lang === 'ar' ? 'لا توجد أسئلة متاحة لهذا النطاق!' : 'No questions found for this selection!');
      return;
    }

    const clonedQuestions = questionsList.map((q) => cloneQuestion(q));

    state.currentQuiz = {
      mode: mode,
      titleAr: titleAr,
      titleEn: titleEn,
      questions: clonedQuestions,
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
    updateRandomModalAvailableCount();
  }

  function closeRandomConfigModal() {
    dom.randomModal.classList.remove('active');
  }

  function startConfiguredRandomQuiz() {
    const matching = getMatchingQuestionsForRandom();
    if (matching.length === 0) {
      alert(state.lang === 'ar' ? 'لا توجد أسئلة مطابقة للخيارات المحددة!' : (state.lang === 'both' ? 'No questions match the selected options! | لا توجد أسئلة مطابقة للخيارات المحددة!' : 'No questions match the selected options!'));
      return;
    }

    const activeCountPill = dom.modalCountPills.querySelector('.pill-btn.active');
    let countVal = activeCountPill ? activeCountPill.getAttribute('data-count') : '20';

    let requestedCount = 20;
    if (countVal === 'all_available') {
      requestedCount = matching.length;
    } else if (countVal === 'custom') {
      requestedCount = parseInt(dom.customCountInput.value, 10);
      if (isNaN(requestedCount) || requestedCount < 1) {
        alert(state.lang === 'ar' ? 'يرجى إدخال عدد صحيح للأسئلة!' : 'Please enter a valid question count!');
        return;
      }
    } else {
      requestedCount = parseInt(countVal, 10);
    }

    // Fisher-Yates Shuffle algorithm for true randomness
    const shuffled = [...matching];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const finalQuestions = shuffled.slice(0, Math.min(requestedCount, shuffled.length));

    // Check if options should be randomized
    const activeShufflePill = dom.modalShufflePills ? dom.modalShufflePills.querySelector('.pill-btn.active') : null;
    const shouldShuffleOptions = activeShufflePill && activeShufflePill.getAttribute('data-shuffle') === 'random';
    if (shouldShuffleOptions) {
      finalQuestions.forEach((q) => shuffleQuestionOptions(q));
    }

    closeRandomConfigModal();

    // Construct descriptive bilingual titles
    const chapters = getSelectedChaptersForRandom();
    const type = getSelectedTypeForRandom();

    const chapAr = chapters.length === 3 ? 'جميع الأبواب' : `الأبواب (${chapters.join(' و ')})`;
    const chapEn = chapters.length === 3 ? 'All Chapters' : `Ch ${chapters.join(' & ')}`;

    const typeAr = type === 'all' ? '' : (type === 'mcq' ? ' • اختيار من متعدد' : ' • صح أو خطأ');
    const typeEn = type === 'all' ? '' : (type === 'mcq' ? ' • MCQ Only' : ' • T/F Only');

    const titleAr = `اختبار عشوائي (${chapAr}${typeAr} • ${finalQuestions.length} سؤال)`;
    const titleEn = `Random Quiz (${chapEn}${typeEn} • ${finalQuestions.length} Questions)`;

    startQuizSession(
      finalQuestions,
      'random',
      titleAr,
      titleEn
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
    const isBoth = state.lang === 'both';

    updateQuizTopBar();

    // Set question meta tags
    dom.qIdTag.textContent = `Q${q.id}`;
    if (isBoth) {
      dom.qTypeBadge.textContent = q.type === 'mcq' ? 'MCQ | اختيار من متعدد' : 'True/False | صح أو خطأ';
    } else if (isAr) {
      dom.qTypeBadge.textContent = q.type === 'mcq' ? 'اختيار من متعدد' : 'صواب أو خطأ';
    } else {
      dom.qTypeBadge.textContent = q.type === 'mcq' ? 'MCQ' : 'True / False';
    }
    dom.qTypeBadge.className = `badge ${q.type === 'mcq' ? 'badge-primary' : 'badge-chapter'}`;

    // Question Text (Bilingual support)
    if (isBoth) {
      dom.qText.innerHTML = `
        <div class="q-bilingual-wrapper">
          <div class="q-bilingual-en">
            <span class="q-bilingual-tag tag-en">EN</span>
            <span>${escapeHtml(q.question)}</span>
          </div>
          <div class="q-bilingual-ar" dir="rtl">
            <span class="q-bilingual-tag tag-ar">AR</span>
            <span>${escapeHtml(q.questionAr || '')}</span>
          </div>
        </div>
      `;
    } else if (isAr) {
      dom.qText.textContent = q.questionAr || q.question;
    } else {
      dom.qText.textContent = q.question;
    }

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
      if (q.type === 'mcq') {
        prefix.textContent = optionLetters[optIdx];
      } else {
        const optEnText = (q.options[optIdx] || '').toLowerCase().trim();
        const isTrueOpt = optEnText.startsWith('true');
        if (isBoth) {
          prefix.textContent = isTrueOpt ? 'T / ص' : 'F / خ';
        } else if (isAr) {
          prefix.textContent = isTrueOpt ? 'ص' : 'خ';
        } else {
          prefix.textContent = isTrueOpt ? 'T' : 'F';
        }
      }

      const label = document.createElement('div');
      if (isBoth) {
        label.className = 'option-label option-label-bilingual';
        const optEn = q.options[optIdx] || '';
        const optAr = (q.optionsAr && q.optionsAr[optIdx]) ? q.optionsAr[optIdx] : '';
        label.innerHTML = `
          <div class="opt-label-en">${escapeHtml(optEn)}</div>
          <div class="opt-label-ar" dir="rtl">${escapeHtml(optAr)}</div>
        `;
      } else {
        label.className = 'option-label';
        label.textContent = optText;
      }

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
    const isBoth = state.lang === 'both';
    if (dom.quizModeBadge) {
      if (isBoth) dom.quizModeBadge.textContent = `${quiz.titleEn} | ${quiz.titleAr}`;
      else if (isAr) dom.quizModeBadge.textContent = quiz.titleAr;
      else dom.quizModeBadge.textContent = quiz.titleEn;
    }
    if (dom.quizChapterBadge) {
      if (isBoth) dom.quizChapterBadge.textContent = `${chapterTitlesEn[q.chapterId] || q.chapter} | ${chapterTitlesAr[q.chapterId] || q.chapter}`;
      else if (isAr) dom.quizChapterBadge.textContent = chapterTitlesAr[q.chapterId] || q.chapter;
      else dom.quizChapterBadge.textContent = chapterTitlesEn[q.chapterId] || q.chapter;
    }

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
    const isBoth = state.lang === 'both';
    const optionLetters = ['A', 'B', 'C', 'D'];

    function getOptText(idx) {
      if (idx < 0 || idx >= q.options.length) return isAr ? 'لم تتم الإجابة' : (isBoth ? 'Unanswered / لم تتم الإجابة' : 'Unanswered');
      const en = q.options[idx];
      const ar = (q.optionsAr && q.optionsAr[idx]) ? q.optionsAr[idx] : en;
      if (isBoth) return `${en} / ${ar}`;
      if (isAr) return ar;
      return en;
    }

    function getOptLetter(idx) {
      if (idx < 0) return '-';
      if (q.type === 'mcq') return optionLetters[idx];
      const optEnText = (q.options[idx] || '').toLowerCase().trim();
      const isTrueOpt = optEnText.startsWith('true');
      if (isBoth) return isTrueOpt ? 'True / صواب' : 'False / خطأ';
      if (isAr) return isTrueOpt ? 'صواب' : 'خطأ';
      return isTrueOpt ? 'True' : 'False';
    }

    dom.feedbackBanner.classList.remove('correct', 'wrong');
    dom.feedbackBanner.classList.add('show', isCorrect ? 'correct' : 'wrong');
    dom.feedbackBanner.style.display = 'block';

    const correctText = getOptText(correctChoiceIdx);
    const correctLetter = getOptLetter(correctChoiceIdx);

    if (isCorrect) {
      dom.feedbackHeader.textContent = i18n[state.lang].correct_msg;
      dom.feedbackDetails.innerHTML = `
        <div>${i18n[state.lang].correct_answer} <strong>${correctLetter}) ${escapeHtml(correctText)}</strong></div>
      `;
    } else {
      dom.feedbackHeader.textContent = i18n[state.lang].wrong_msg;
      const userText = getOptText(userChoiceIdx);
      const userLetter = getOptLetter(userChoiceIdx);

      dom.feedbackDetails.innerHTML = `
        <div>${i18n[state.lang].your_answer} <span style="text-decoration:line-through; color:var(--danger);">${userLetter}) ${escapeHtml(userText)}</span></div>
        <div>${i18n[state.lang].correct_answer} <span style="font-weight:700; color:var(--success);">${correctLetter}) ${escapeHtml(correctText)}</span></div>
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
    const query = state.reviewSearchQuery ? state.reviewSearchQuery.toLowerCase() : '';

    let itemsToRender = [];

    quiz.questions.forEach((q, idx) => {
      const userAns = quiz.userAnswers[idx] || { selected: -1, isCorrect: false };
      const isCorrect = userAns.isCorrect;

      if (filter === 'correct' && !isCorrect) return;
      if (filter === 'wrong' && isCorrect) return;

      if (query) {
        const qAr = q.questionAr ? q.questionAr.toLowerCase() : '';
        const textMatch = q.question.toLowerCase().includes(query) ||
          qAr.includes(query) ||
          q.explanationAr.toLowerCase().includes(query) ||
          q.explanationEn.toLowerCase().includes(query) ||
          q.options.some((o) => o.toLowerCase().includes(query)) ||
          (q.optionsAr && q.optionsAr.some((o) => o.toLowerCase().includes(query)));
        if (!textMatch) return;
      }

      itemsToRender.push({ q, idx, userAns, isCorrect });
    });

    if (itemsToRender.length === 0) {
      dom.reviewCardsContainer.innerHTML = `
        <div style="text-align:center; padding:3rem; color:var(--text-muted); font-size:1.1rem;">
          ${state.lang === 'ar' ? 'لا توجد أسئلة مطابقة للبحث أو التصفية الحالية.' : (state.lang === 'both' ? 'No questions matching search or filter | لا توجد أسئلة مطابقة للبحث.' : 'No questions matching current filter or search.')}
        </div>
      `;
      return;
    }

    const optionLetters = ['A', 'B', 'C', 'D'];
    const isAr = state.lang === 'ar';
    const isBoth = state.lang === 'both';

    itemsToRender.forEach(({ q, idx, userAns, isCorrect }) => {
      const card = document.createElement('div');
      card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      function getOptText(i) {
        if (i < 0 || i >= q.options.length) return isAr ? 'لم تتم الإجابة' : (isBoth ? 'Unanswered / لم تتم الإجابة' : 'Unanswered');
        const en = q.options[i];
        const ar = (q.optionsAr && q.optionsAr[i]) ? q.optionsAr[i] : en;
        if (isBoth) return `${en} / ${ar}`;
        if (isAr) return ar;
        return en;
      }

      function getOptLetter(i) {
        if (i < 0) return '-';
        if (q.type === 'mcq') return optionLetters[i];
        const optEnText = (q.options[i] || '').toLowerCase().trim();
        const isTrueOpt = optEnText.startsWith('true');
        if (isBoth) return isTrueOpt ? 'True / صواب' : 'False / خطأ';
        if (isAr) return isTrueOpt ? 'صواب' : 'خطأ';
        return isTrueOpt ? 'True' : 'False';
      }

      const userChoiceText = getOptText(userAns.selected);
      const userChoiceLetter = getOptLetter(userAns.selected);
      const correctChoiceText = getOptText(q.correctAnswer);
      const correctChoiceLetter = getOptLetter(q.correctAnswer);

      const chapterTag = isBoth
        ? `${chapterTitlesEn[q.chapterId] || q.chapter} | ${chapterTitlesAr[q.chapterId] || q.chapter}`
        : (isAr ? (chapterTitlesAr[q.chapterId] || q.chapter) : (chapterTitlesEn[q.chapterId] || q.chapter));

      const typeTag = isBoth
        ? (q.type === 'mcq' ? 'MCQ | اختيار من متعدد' : 'True/False | صح أو خطأ')
        : (isAr ? (q.type === 'mcq' ? 'اختيار من متعدد' : 'صواب أو خطأ') : (q.type === 'mcq' ? 'MCQ' : 'True/False'));

      const statusTag = isCorrect
        ? (isBoth ? '✓ Correct | إجابة صحيحة' : (isAr ? '✓ إجابة صحيحة' : '✓ Correct'))
        : (isBoth ? '✗ Incorrect | إجابة خاطئة' : (isAr ? '✗ إجابة خاطئة' : '✗ Wrong'));

      let questionHtml = '';
      if (isBoth) {
        questionHtml = `
          <div class="review-q-text">
            <div class="q-bilingual-wrapper">
              <div class="q-bilingual-en"><span class="q-bilingual-tag tag-en">EN</span><span>${escapeHtml(q.question)}</span></div>
              <div class="q-bilingual-ar" dir="rtl"><span class="q-bilingual-tag tag-ar">AR</span><span>${escapeHtml(q.questionAr || '')}</span></div>
            </div>
          </div>
        `;
      } else {
        questionHtml = `<div class="review-q-text">${escapeHtml(isAr && q.questionAr ? q.questionAr : q.question)}</div>`;
      }

      card.innerHTML = `
        <div class="review-card-top">
          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
            <span class="question-number-tag">Q${q.id}</span>
            <span class="badge badge-chapter">${chapterTag}</span>
            <span class="badge ${q.type === 'mcq' ? 'badge-primary' : 'badge-chapter'}">${typeTag}</span>
          </div>
          <span class="review-status-badge ${isCorrect ? 'correct' : 'wrong'}">
            ${statusTag}
          </span>
        </div>

        ${questionHtml}

        <div class="review-answers-box">
          <div><strong>${i18n[state.lang].your_answer}</strong> <span style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; font-weight:700;">${userChoiceLetter}) ${escapeHtml(userChoiceText)}</span></div>
          <div><strong>${i18n[state.lang].correct_answer}</strong> <span style="color:var(--success); font-weight:700;">${correctChoiceLetter}) ${escapeHtml(correctChoiceText)}</span></div>
        </div>

        <div class="explanation-content" style="padding:0;">
          <div class="exp-lang-block">
            <div class="exp-lang-header">🇬🇧 English Explanation:</div>
            <div class="exp-text">${escapeHtml(q.explanationEn)}</div>
          </div>
          <div class="exp-lang-block">
            <div class="exp-lang-header">🇸🇦 الشرح بالعربية:</div>
            <div class="exp-text">${escapeHtml(q.explanationAr)}</div>
          </div>
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
    const query = state.bankSearchQuery ? state.bankSearchQuery.toLowerCase() : '';
    const chapFilter = state.bankChapterFilter;
    const typeFilter = state.bankTypeFilter;

    let filtered = state.allQuestions.filter((q) => {
      if (chapFilter !== 'all' && q.chapterId !== parseInt(chapFilter, 10)) return false;
      if (typeFilter !== 'all' && q.type !== typeFilter) return false;
      if (query) {
        const qAr = q.questionAr ? q.questionAr.toLowerCase() : '';
        const matches = q.question.toLowerCase().includes(query) ||
          qAr.includes(query) ||
          q.explanationAr.toLowerCase().includes(query) ||
          q.explanationEn.toLowerCase().includes(query) ||
          q.options.some((o) => o.toLowerCase().includes(query)) ||
          (q.optionsAr && q.optionsAr.some((o) => o.toLowerCase().includes(query)));
        if (!matches) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      dom.bankCardsContainer.innerHTML = `
        <div style="text-align:center; padding:3rem; color:var(--text-muted); font-size:1.1rem;">
          ${state.lang === 'ar' ? 'لم يتم العثور على أي أسئلة مطابقة للبحث.' : (state.lang === 'both' ? 'No questions found matching your search | لم يتم العثور على نتائج للبحث.' : 'No questions found matching your search.')}
        </div>
      `;
      return;
    }

    const optionLetters = ['A', 'B', 'C', 'D'];
    const isAr = state.lang === 'ar';
    const isBoth = state.lang === 'both';

    filtered.forEach((q) => {
      const card = document.createElement('div');
      card.className = 'review-item-card is-correct';

      const chapterTag = isBoth
        ? `${chapterTitlesEn[q.chapterId] || q.chapter} | ${chapterTitlesAr[q.chapterId] || q.chapter}`
        : (isAr ? (chapterTitlesAr[q.chapterId] || q.chapter) : (chapterTitlesEn[q.chapterId] || q.chapter));

      const typeTag = isBoth
        ? (q.type === 'mcq' ? 'MCQ | اختيار من متعدد' : 'True/False | صح أو خطأ')
        : (isAr ? (q.type === 'mcq' ? 'اختيار من متعدد' : 'صواب أو خطأ') : (q.type === 'mcq' ? 'MCQ' : 'True/False'));

      const optionsHtml = q.options.map((optEn, i) => {
        const isAnswer = i === q.correctAnswer;
        let letter = '';
        if (q.type === 'mcq') {
          letter = optionLetters[i];
        } else {
          if (isBoth) letter = i === 0 ? 'True / صواب' : 'False / خطأ';
          else if (isAr) letter = i === 0 ? 'صواب' : 'خطأ';
          else letter = i === 0 ? 'True' : 'False';
        }

        let labelHtml = '';
        if (isBoth) {
          const optAr = (q.optionsAr && q.optionsAr[i]) ? q.optionsAr[i] : '';
          labelHtml = `<span>${escapeHtml(optEn)}</span> <span style="opacity:0.85; margin-inline-start:0.5rem;" dir="rtl">/ ${escapeHtml(optAr)}</span>`;
        } else if (isAr) {
          labelHtml = escapeHtml((q.optionsAr && q.optionsAr[i]) ? q.optionsAr[i] : optEn);
        } else {
          labelHtml = escapeHtml(optEn);
        }

        return `
          <div style="padding:0.4rem 0.6rem; border-radius:6px; background:${isAnswer ? 'var(--success-bg)' : 'transparent'}; color:${isAnswer ? 'var(--success-text)' : 'inherit'}; font-weight:${isAnswer ? '700' : 'normal'};">
            ${letter}) ${labelHtml} ${isAnswer ? '✓' : ''}
          </div>
        `;
      }).join('');

      let questionHtml = '';
      if (isBoth) {
        questionHtml = `
          <div class="review-q-text">
            <div class="q-bilingual-wrapper">
              <div class="q-bilingual-en"><span class="q-bilingual-tag tag-en">EN</span><span>${escapeHtml(q.question)}</span></div>
              <div class="q-bilingual-ar" dir="rtl"><span class="q-bilingual-tag tag-ar">AR</span><span>${escapeHtml(q.questionAr || '')}</span></div>
            </div>
          </div>
        `;
      } else {
        questionHtml = `<div class="review-q-text">${escapeHtml(isAr && q.questionAr ? q.questionAr : q.question)}</div>`;
      }

      card.innerHTML = `
        <div class="review-card-top">
          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
            <span class="question-number-tag">Q${q.id}</span>
            <span class="badge badge-chapter">${chapterTag}</span>
            <span class="badge ${q.type === 'mcq' ? 'badge-primary' : 'badge-chapter'}">${typeTag}</span>
          </div>
        </div>

        ${questionHtml}

        <div style="background:var(--bg-tertiary); border-radius:8px; padding:0.75rem 1rem; margin-bottom:1rem; display:flex; flex-direction:column; gap:0.25rem;">
          ${optionsHtml}
        </div>

        <div class="explanation-content" style="padding:0;">
          <div class="exp-lang-block">
            <div class="exp-lang-header">🇬🇧 English Explanation:</div>
            <div class="exp-text">${escapeHtml(q.explanationEn)}</div>
          </div>
          <div class="exp-lang-block">
            <div class="exp-lang-header">🇸🇦 الشرح بالعربية:</div>
            <div class="exp-text">${escapeHtml(q.explanationAr)}</div>
          </div>
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

