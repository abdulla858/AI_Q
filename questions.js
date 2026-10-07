// Interactive Quiz Platform - Question Bank
// Extracted from Artificial Intelligence Question Bank (300 Questions - AIMA Chapters 1, 2, 3)

const questions = [
  {
    "id": 1,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In artificial intelligence, an entity that perceives its environment through sensors and acts upon that environment through actuators is fundamentally defined as a/an:",
    "options": [
      "Controller",
      "Agent",
      "Model",
      "Program"
    ],
    "correctAnswer": 1,
    "explanationAr": "الوكيل (Agent) هو المفهوم الجوهري في الذكاء الاصطناعي الذي يُطلق على أي كيان يتفاعل مع بيئته في دورة مغلقة: يستقبل المدخلات عبر الحواس (Sensors) ويؤثر فيها بالأفعال عبر المشغلات (Actuators).",
    "explanationEn": "An Agent is formally defined as any entity that perceives its environment through sensors and acts upon that environment through actuators.",
    "questionAr": "في الذكاء الاصطناعي، يتم تعريف الكيان الذي يدرك بيئته من خلال أجهزة الاستشعار ويعمل على تلك البيئة من خلال المحركات بشكل أساسي على أنه أ/أن:",
    "optionsAr": [
      "جهاز التحكم",
      "الوكيل",
      "نموذج",
      "برنامج"
    ]
  },
  {
    "id": 2,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which of the following terms specifically refers to the agent's sensory inputs at any given instant of time?",
    "options": [
      "Sequence",
      "Action",
      "Percept",
      "State"
    ],
    "correctAnswer": 2,
    "explanationAr": "المُدرَك الحسي (Percept) يعبر تحديداً عن المدخل الحسي اللحظي للوكيل في نقطة زمنية معينة، بينما سلسلة المُدركات تمثل التاريخ التراكمي لهذه المدخلات.",
    "explanationEn": "A Percept specifically refers to the agent's perceptual input at any given instant, distinct from the sequence of past inputs.",
    "questionAr": "أي من المصطلحات التالية يشير على وجه التحديد إلى المدخلات الحسية للعامل في أي لحظة زمنية معينة؟",
    "optionsAr": [
      "التسلسل",
      "العمل",
      "الإدراك",
      "ولاية"
    ]
  },
  {
    "id": 3,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "The complete historical record of everything that an agent has ever perceived during its entire operating lifetime is defined as the:",
    "options": [
      "State space",
      "Percept sequence",
      "Action history",
      "Knowledge base"
    ],
    "correctAnswer": 1,
    "explanationAr": "سلسلة المُدركات (Percept Sequence) هي السجل التاريخي الكامل والشامل لكل ما التقطه الوكيل بحواسه منذ بداية تشغيله وحتى اللحظة الراهنة.",
    "explanationEn": "The Percept Sequence represents the complete chronological record of everything the agent has ever perceived over its lifetime.",
    "questionAr": "يتم تعريف السجل التاريخي الكامل لكل ما أدركه الوكيل خلال فترة تشغيله بالكامل على النحو التالي:",
    "optionsAr": [
      "مساحة الدولة",
      "تسلسل الإدراك",
      "تاريخ العمل",
      "قاعدة المعرفة"
    ]
  },
  {
    "id": 4,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Mathematically, the abstract mapping that specifies an agent's selected action for every possible percept sequence is known as the:",
    "options": [
      "Transition model",
      "Sensor function",
      "Agent function",
      "Utility function"
    ],
    "correctAnswer": 2,
    "explanationAr": "دالة الوكيل (Agent Function) هي صياغة رياضية مجردة تحدد الفعل الذي يجب اتخاذه استجابة لأي سلسلة مُدركات معطاة.",
    "explanationEn": "The Agent Function is the abstract mathematical mapping that dictates the selected action for any given sequence of percepts.",
    "questionAr": "رياضيًا، يُعرف التعيين المجرد الذي يحدد الإجراء المحدد للوكيل لكل تسلسل إدراكي محتمل باسم:",
    "optionsAr": [
      "نموذج التحول",
      "وظيفة الاستشعار",
      "وظيفة الوكيل",
      "وظيفة المنفعة"
    ]
  },
  {
    "id": 5,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "If P is the set of all possible percepts and A is the set of all possible actions, what is the formal mathematical domain and range of the agent function f?",
    "options": [
      "f: P -> A",
      "f: P* -> A",
      "f: A -> P*",
      "f: P x A -> P"
    ],
    "correctAnswer": 1,
    "explanationAr": "دالة الوكيل تُكتب رياضياً كـ f: P* -> A؛ حيث P* تعني مجموعة كل السلاسل الممكنة من المُدركات (التاريخ السابق بأي طول)، و A هي مجموعة الأفعال المتاحة.",
    "explanationEn": "Mathematically, the agent function maps sequences of percepts (P*, where * is the Kleene star representing history of any length) to actions (A): f: P* -> A.",
    "questionAr": "إذا كانت P هي مجموعة جميع التصورات الممكنة و A هي مجموعة جميع الإجراءات الممكنة، فما هو المجال الرياضي الرسمي ومدى الدالة الوكيل f؟",
    "optionsAr": [
      "و: ف -> أ",
      "و: ف* -> أ",
      "و: أ -> ف*",
      "و: ف × أ -> ص"
    ]
  },
  {
    "id": 6,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An intelligent agent is physically composed of two primary components according to the formula: Agent = Architecture + Program. What does the architecture provide?",
    "options": [
      "The condition-action rules",
      "The computing hardware, sensors, and actuators",
      "The heuristic evaluation function",
      "The objective performance measure"
    ],
    "correctAnswer": 1,
    "explanationAr": "معادلة الوكيل هي (Agent = Architecture + Program)؛ البنية (Architecture) توفر العتاد المادي والمستشعرات والمشغلات، بينما البرنامج ينفذ الخوارزمية التي تحسب دالة الوكيل.",
    "explanationEn": "In the formula Agent = Architecture + Program, the Architecture supplies the physical hardware, computing machinery, sensors, and actuators.",
    "questionAr": "يتكون الوكيل الذكي فعليًا من مكونين أساسيين وفقًا للمعادلة: الوكيل = الهندسة المعمارية + البرنامج. ماذا تقدم الهندسة المعمارية؟",
    "optionsAr": [
      "قواعد التصرف الشرطي",
      "أجهزة الحوسبة وأجهزة الاستشعار والمحركات",
      "وظيفة التقييم الإرشادي",
      "مقياس الأداء الموضوعي"
    ]
  },
  {
    "id": 7,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "What is the key operational distinction between an agent function and an agent program?",
    "options": [
      "The function takes the current percept, while the program takes the percept history",
      "The function is an abstract mathematical concept, while the program runs on physical hardware",
      "The program is always table-driven, while the function is rule-based",
      "There is no distinction; both terms refer to the same software code"
    ],
    "correctAnswer": 1,
    "explanationAr": "الفرق الجوهري هو أن دالة الوكيل مفهوم رياضي وصفي مجرد، في حين أن برنامج الوكيل هو الكود البرمجي الملموس الذي يعمل على عتاد الحاسوب وينفذ هذه الدالة عملياً.",
    "explanationEn": "The agent function is an abstract mathematical concept mapping percept sequences to actions, whereas the agent program is the concrete software implementation running on real hardware.",
    "questionAr": "ما هو الفرق التشغيلي الرئيسي بين وظيفة الوكيل وبرنامج الوكيل؟",
    "optionsAr": [
      "تأخذ الدالة الإدراك الحالي، بينما يأخذ البرنامج تاريخ الإدراك",
      "الدالة هي مفهوم رياضي مجرد، بينما يعمل البرنامج على أجهزة مادية",
      "يعتمد البرنامج دائمًا على الجدول، بينما تعتمد الوظيفة على القواعد",
      "لا يوجد تمييز. يشير كلا المصطلحين إلى نفس رمز البرنامج"
    ]
  },
  {
    "id": 8,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In a table-driven agent, what primary input does the program take on each invocation to perform its table lookup?",
    "options": [
      "The current percept only",
      "The current state only",
      "The entire accumulated percept sequence",
      "The next expected reward"
    ],
    "correctAnswer": 2,
    "explanationAr": "وكيل جدول البحث (Table-driven agent) يحتاج في كل خطوة إلى سلسلة المُدركات التراكمية كاملة للبحث في الجدول عن الفعل المطابق لتلك السلسلة المحددة.",
    "explanationEn": "A table-driven agent program requires the entire accumulated percept sequence as its lookup key to find the corresponding action.",
    "questionAr": "في الوكيل المبني على الجدول، ما هي المدخلات الأساسية التي يأخذها البرنامج في كل استدعاء لإجراء بحث الجدول الخاص به؟",
    "optionsAr": [
      "الإدراك الحالي فقط",
      "الحالة الحالية فقط",
      "كامل تسلسل الإدراك المتراكم",
      "المكافأة المتوقعة القادمة"
    ]
  },
  {
    "id": 9,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Why is the table-driven approach to constructing intelligent agents fundamentally impractical for complex real-world tasks?",
    "options": [
      "It cannot implement deterministic agent functions",
      "The table size grows exponentially with the agent's lifetime and percept set size",
      "Table lookup requires complex recursive algorithms",
      "Hardware architectures cannot execute lookup tables"
    ],
    "correctAnswer": 1,
    "explanationAr": "نهج جدول البحث غير عملي واستحالة تطبيقه في الواقع؛ لأن حجم الجدول يتضاعف أسياً مع زيادة طول السلسلة وعدد المُدركات الممكنة، مما يؤدي لانفجار هائل في متطلبات الذاكرة.",
    "explanationEn": "Table-driven agents fail because the lookup table size grows exponentially with the percept space and lifetime: sum of |P|^t, requiring astronomical memory.",
    "questionAr": "لماذا يعتبر النهج القائم على الجدول لبناء عملاء أذكياء غير عملي بشكل أساسي لمهام العالم الحقيقي المعقدة؟",
    "optionsAr": [
      "لا يمكنه تنفيذ وظائف الوكيل الحتمية",
      "ينمو حجم الجدول بشكل كبير مع عمر الوكيل وحجم المجموعة المدركة",
      "يتطلب البحث عن الجدول خوارزميات متكررة معقدة",
      "لا تستطيع بنيات الأجهزة تنفيذ جداول البحث"
    ]
  },
  {
    "id": 10,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In the standard two-cell vacuum-cleaner world (locations A and B), how many possible atomic physical states exist in the environment?",
    "options": [
      "4 states",
      "8 states",
      "16 states",
      "2 states"
    ],
    "correctAnswer": 1,
    "explanationAr": "في بيئة المكنسة ذات الخليتين، توجد حالتان لموقع الوكيل (A أو B)، وكل خلية قد تكون نظيفة أو متسخة (2 × 2 = 4 احتمالات للأوساخ)، وبالتالي إجمالي الحالات = 2 × 4 = 8 حالات ممكنة.",
    "explanationEn": "In a two-cell vacuum world, there are 2 possible agent locations times 2^2 = 4 possible dirt configurations, yielding 2 * 4 = 8 distinct physical states.",
    "questionAr": "في عالم المكنسة الكهربائية القياسي المكون من خليتين (الموقعان A وB)، ما عدد الحالات الفيزيائية الذرية المحتملة الموجودة في البيئة؟",
    "optionsAr": [
      "4 ولايات",
      "8 ولايات",
      "16 ولاية",
      "2 ولاية"
    ]
  },
  {
    "id": 11,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "For a vacuum-cleaner world consisting of n distinct cells, where each cell can independently be either clean or dirty, the total number of physical states is given by:",
    "options": [
      "2^n",
      "n * 2^n",
      "n^2",
      "(n!)^2"
    ],
    "correctAnswer": 1,
    "explanationAr": "إذا كان لدينا 8 حالات مختلفة للبيئة وفعلين متاحين للوكيل، فإن عدد دوال الوكيل المحتملة الممكن بناؤها يساوي 2 أس 8 = 256 دالة وكيل محتملة.",
    "explanationEn": "With 8 possible states and 2 possible actions, the number of distinct mappings from states to actions is 2^8 = 256 possible functions.",
    "questionAr": "بالنسبة لعالم المكنسة الكهربائية الذي يتكون من عدد n من الخلايا المتميزة، حيث يمكن أن تكون كل خلية بشكل مستقل إما نظيفة أو متسخة، يتم إعطاء العدد الإجمالي للحالات المادية بواسطة:",
    "optionsAr": [
      "2 ^ ن",
      "ن * 2 ^ ن",
      "ن^2",
      "(ن!)^2"
    ]
  },
  {
    "id": 12,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In the discipline of control theory, a closed-loop system that regulates a process variable to a set point without human intervention is known as a:",
    "options": [
      "Controller",
      "Transducer",
      "Softbot",
      "Sensor array"
    ],
    "correctAnswer": 0,
    "explanationAr": "في نظرية التحكم (Control Theory)، يُعرف النظام مغلق الحلقة الذي يضبط متغيراً نحو نقطة مرجعية دون تدخل بشري باسم 'المتحكم' (Controller).",
    "explanationEn": "In control theory, a closed-loop system regulating a process variable to a set point without manual human intervention is known as a Controller.",
    "questionAr": "في مجال نظرية التحكم، يُعرف نظام الحلقة المغلقة الذي ينظم متغير العملية إلى نقطة محددة دون تدخل بشري باسم:",
    "optionsAr": [
      "جهاز التحكم",
      "محول",
      "سوفت بوت",
      "مجموعة أجهزة الاستشعار"
    ]
  },
  {
    "id": 13,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An agent that exists purely in a software environment (such as an automated web-crawler or an online trading program) is commonly referred to as a:",
    "options": [
      "Robot",
      "Cyborg",
      "Softbot",
      "Transducer"
    ],
    "correctAnswer": 2,
    "explanationAr": "الوكيل البرمجي الخالص الذي ينشط داخل بيئة برمجية وشبكات (مثل زواحف الويب أو برامج التداول المالي) يُصطلح عليه بـ Softbot (Software Robot).",
    "explanationEn": "An agent that exists entirely in software environments (like a web crawler or algorithmic trading bot) is called a Softbot.",
    "questionAr": "يُشار عادةً إلى الوكيل الموجود فقط في بيئة برمجية (مثل متتبع الويب الآلي أو برنامج التداول عبر الإنترنت) باسم:",
    "optionsAr": [
      "روبوت",
      "سايبورغ",
      "سوفت بوت",
      "محول"
    ]
  },
  {
    "id": 14,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "If an agent operates for a lifetime of T time steps with a set of possible percepts |P|, how many total entries would a complete lookup table contain?",
    "options": [
      "|P| * T",
      "Sum from t=1 to T of |P|^t",
      "T^|P|",
      "|P|!"
    ],
    "correctAnswer": 1,
    "explanationAr": "لحساب حجم جدول البحث لوكيل يعمل لزمن T مع مجموعة مُدركات |P|، نجمع جميع السلاسل ذات الأطوال من 1 إلى T، وهو المجموع التراكمي لـ |P|^t من t=1 إلى T.",
    "explanationEn": "The complete lookup table must index all possible percept sequences of lengths 1 through T, which sums to Σ(|P|^t) for t=1..T.",
    "questionAr": "إذا كان الوكيل يعمل لمدى الحياة بخطوات زمنية T مع مجموعة من التصورات المحتملة |P|، فكم عدد الإدخالات الإجمالية التي سيحتويها جدول البحث الكامل؟",
    "optionsAr": [
      "|ف| *ت",
      "المجموع من t=1 إلى T لـ |P|^t",
      "ت^|ف|",
      "|ف|!"
    ]
  },
  {
    "id": 15,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In the simplest two-cell vacuum-cleaner model described in AIMA Chapter 2, what are the primary actions available to the agent?",
    "options": [
      "Forward, Backward, TurnLeft, TurnRight",
      "Left, Right, Suck, NoOp",
      "Clean, Move, Sleep, Stop",
      "Search, Scan, Pick, Drop"
    ],
    "correctAnswer": 1,
    "explanationAr": "في النموذج الكلاسيكي لمكنسة الفاكيوم، الأفعال الأساسية المتاحة هي: التحرك يساراً (Left)، يميناً (Right)، شفط الأوساخ (Suck)، أو عدم فعل شيء (NoOp).",
    "explanationEn": "The standard actions available in the basic two-location vacuum-cleaner world are Left, Right, Suck, and NoOp (No Operation).",
    "questionAr": "في أبسط نموذج للمكنسة الكهربائية المكونة من خليتين والموصوف في الفصل الثاني من AIMA، ما هي الإجراءات الأساسية المتاحة للوكيل؟",
    "optionsAr": [
      "للأمام، للخلف، لليسار، لليمين",
      "يسار، يمين، مص، NoOp",
      "تنظيف، تحرك، نوم، توقف",
      "بحث، مسح، اختيار، إسقاط"
    ]
  },
  {
    "id": 16,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "The philosophical approach adopted in AI which evaluates the goodness or rationality of an agent's behavior strictly by its outcomes is called:",
    "options": [
      "Deontology",
      "Consequentialism",
      "Rationalism",
      "Dualism"
    ],
    "correctAnswer": 1,
    "explanationAr": "مذهب العواقبية (Consequentialism) هو الأساس الفلسفي للذكاء الاصطناعي، حيث يُقاس السلوك العقلاني بنتيجة الفعل وعواقبه على البيئة وليس بنية الفعل أو طبيعته المجردة.",
    "explanationEn": "Consequentialism evaluates the rationality of an agent's behavior purely based on its consequences—the desirability of the environment states achieved.",
    "questionAr": "يُطلق على النهج الفلسفي المعتمد في الذكاء الاصطناعي والذي يقيم جودة أو عقلانية سلوك العميل بشكل صارم من خلال نتائجه:",
    "optionsAr": [
      "أخلاق",
      "التبعية",
      "العقلانية",
      "ثنائية"
    ]
  },
  {
    "id": 17,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An objective numerical criterion used by an external designer to assess the success of an agent's behavior in an environment is the:",
    "options": [
      "Agent program",
      "Performance measure",
      "Sensor model",
      "Percept history"
    ],
    "correctAnswer": 1,
    "explanationAr": "مقياس الأداء (Performance Measure) هو معيار عددي موضوعي يضعه المصمم الخارجي لتقييم مدى نجاح الوكيل في تحقيق الأهداف المرغوبة في البيئة.",
    "explanationEn": "The Performance Measure is an objective numerical criterion established by the designer to quantify an agent's success in its environment.",
    "questionAr": "المعيار العددي الموضوعي الذي يستخدمه المصمم الخارجي لتقييم نجاح سلوك الوكيل في البيئة هو:",
    "optionsAr": [
      "برنامج الوكيل",
      "مقياس الأداء",
      "نموذج الحساس",
      "تاريخ الإدراك"
    ]
  },
  {
    "id": 18,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Why is it generally considered poor design to measure a vacuum-cleaner's performance by the amount of dirt it sweeps up during a shift?",
    "options": [
      "The agent cannot count the dirt particles accurately",
      "A rational agent could maximize score by repeatedly dumping dirt and cleaning it again",
      "Dirt sensors are too noisy to provide objective feedback",
      "Sucking dirt consumes excessive electrical power"
    ],
    "correctAnswer": 1,
    "explanationAr": "مكافأة الوكيل على كمية الأوساخ المشفوطة غير صائبة؛ لأن الوكيل العقلاني سيتعلم تفريغ الأوساخ وإعادة شفطها تكراراً لتعظيم نقاطه بدلاً من إبقاء الأرض نظيفة.",
    "explanationEn": "Rewarding cleaning actions creates a loophole: a rational agent could clean dirt, dump it back out, and clean it again indefinitely to maximize score without keeping the room clean.",
    "questionAr": "لماذا يعتبر بشكل عام تصميمًا سيئًا لقياس أداء المكنسة الكهربائية من خلال كمية الأوساخ التي تقوم بكنسها أثناء نوبة العمل؟",
    "optionsAr": [
      "لا يستطيع العامل إحصاء ذرات الأوساخ بدقة",
      "يمكن للعامل العقلاني تعظيم النتيجة عن طريق رمي الأوساخ بشكل متكرر وتنظيفها مرة أخرى",
      "أجهزة استشعار الأوساخ صاخبة جدًا بحيث لا توفر ردود فعل موضوعية",
      "يستهلك مص الأوساخ طاقة كهربائية زائدة"
    ]
  },
  {
    "id": 19,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "What is the recommended general rule for designing performance measures for artificial intelligence systems?",
    "options": [
      "Design them according to how you think the agent should behave",
      "Design them according to the desired state of the environment",
      "Maximize the number of actions executed per second",
      "Penalize the agent whenever it visits a previously seen state"
    ],
    "correctAnswer": 1,
    "explanationAr": "القاعدة الذهبية في تصميم مقاييس الأداء هي تصميمها وفقاً للحالة المرغوبة للبيئة (مثلاً أن تكون الغرفة نظيفة باستمرار) وليس وفقاً لطريقة تصرف الوكيل التي نفترضها.",
    "explanationEn": "Performance measures should be designed according to the desired state of the environment, not according to how the designer thinks the agent ought to behave.",
    "questionAr": "ما هي القاعدة العامة الموصى بها لتصميم مقاييس الأداء لأنظمة الذكاء الاصطناعي؟",
    "optionsAr": [
      "قم بتصميمها وفقًا للطريقة التي تعتقد أنه يجب أن يتصرف بها الوكيل",
      "تصميمها حسب الحالة البيئية المرغوبة",
      "تعظيم عدد الإجراءات التي يتم تنفيذها في الثانية",
      "معاقبة الوكيل كلما زار دولة سبق رؤيتها"
    ]
  },
  {
    "id": 20,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "According to Russell & Norvig, the rationality of an agent at any given time depends on how many fundamental factors?",
    "options": [
      "Two factors",
      "Three factors",
      "Four factors",
      "Six factors"
    ],
    "correctAnswer": 2,
    "explanationAr": "عقلانية الوكيل تعتمد على 4 عوامل: مقياس الأداء، المعرفة المسبقة بالبيئة، سلسلة المُدركات المكتسبة، والأفعال التي يستطيع الوكيل تنفيذها.",
    "explanationEn": "Rationality depends on four factors: (1) The performance measure, (2) Prior knowledge of the environment, (3) The percept sequence, and (4) The agent's available actions.",
    "questionAr": "وفقًا لراسل ونورفيج، تعتمد عقلانية الفاعل في أي وقت على كم عدد العوامل الأساسية؟",
    "optionsAr": [
      "عاملين",
      "ثلاثة عوامل",
      "أربعة عوامل",
      "ستة عوامل"
    ]
  },
  {
    "id": 21,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which of the following is NOT one of the four factors that determine an agent's rationality at any given time?",
    "options": [
      "The external performance measure",
      "The agent's prior knowledge of the environment",
      "The agent's future percepts that have not yet occurred",
      "The agent's percept sequence to date"
    ],
    "correctAnswer": 2,
    "explanationAr": "المعرفة المطلقة بالحالة المستقبلية الحقيقية (Omniscience) ليست من محددات العقلانية؛ فالعقلانية تقوم على تعظيم الأداء المتوقع بناءً على ما يعرفه الوكيل، ولا تشترط معرفة الغيب.",
    "explanationEn": "Omniscience (knowing actual future outcomes) is NOT a factor of rationality. Rationality is about expected success given available information.",
    "questionAr": "أي مما يلي ليس أحد العوامل الأربعة التي تحدد عقلانية الوكيل في أي وقت معين؟",
    "optionsAr": [
      "مقياس الأداء الخارجي",
      "معرفة الوكيل المسبقة بالبيئة",
      "تصورات الوكيل المستقبلية التي لم تحدث بعد",
      "تسلسل إدراك الوكيل حتى الآن"
    ]
  },
  {
    "id": 22,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An agent that knows the actual outcome of its actions and can act with infallible foresight is termed:",
    "options": [
      "Rational",
      "Omniscient",
      "Autonomous",
      "Model-based"
    ],
    "correctAnswer": 1,
    "explanationAr": "العقلانية تتعلق بالنجاح المتوقع بناءً على الأدلة المتاحة، بينما الكمال (Perfection) يتطلب النجاح الفعلي المطلق، وهو غير واقعي في البيئات غير المتوقعة.",
    "explanationEn": "Rationality maximizes expected performance, whereas perfection requires maximizing actual performance (which is impossible without omniscience in uncertain worlds).",
    "questionAr": "الفاعل الذي يعرف النتيجة الفعلية لأفعاله ويستطيع أن يتصرف ببصيرة معصومة يسمى:",
    "optionsAr": [
      "عقلاني",
      "كلي العلم",
      "مستقلة",
      "على أساس النموذج"
    ]
  },
  {
    "id": 23,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "What is the crucial conceptual difference between rationality and perfection?",
    "options": [
      "Rationality maximizes expected performance, whereas perfection maximizes actual outcome",
      "Perfection applies only to software agents, whereas rationality applies to physical robots",
      "Rationality requires complete knowledge of the future, whereas perfection does not",
      "Rational agents make no errors under any circumstances"
    ],
    "correctAnswer": 0,
    "explanationAr": "جمع المعلومات (Information gathering) والاستكشاف هو جزء أساسي من العقلانية، لأنه يغير المُدركات المستقبلية ويساعد الوكيل على اتخاذ قرارات أفضل.",
    "explanationEn": "Information gathering is an integral part of rationality because taking actions to modify future percepts helps make better-informed decisions.",
    "questionAr": "ما هو الفرق المفاهيمي الحاسم بين العقلانية والكمال؟",
    "optionsAr": [
      "العقلانية تزيد من الأداء المتوقع، في حين أن الكمال يزيد من النتيجة الفعلية",
      "الكمال ينطبق فقط على وكلاء البرمجيات، في حين أن العقلانية تنطبق على الروبوتات المادية",
      "العقلانية تتطلب معرفة كاملة بالمستقبل، أما الكمال فلا",
      "الوكلاء العقلانيون لا يرتكبون الأخطاء تحت أي ظرف من الظروف"
    ]
  },
  {
    "id": 24,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Actions executed by an agent primarily to modify future percepts rather than directly modify the environment state are called:",
    "options": [
      "Reflex actions",
      "Information gathering",
      "Backtracking",
      "Pruning"
    ],
    "correctAnswer": 1,
    "explanationAr": "الاستكشاف (Exploration) يعني قيام الوكيل بأفعال لا تهدف إلى مكسب فوري بل لاكتشاف معلومات غير معروفة عن البيئة لتحسين أدائه على المدى الطويل.",
    "explanationEn": "Exploration refers to an agent performing actions specifically to discover unknown aspects of its environment.",
    "questionAr": "تسمى الإجراءات التي ينفذها الوكيل بشكل أساسي لتعديل التصورات المستقبلية بدلاً من تعديل حالة البيئة مباشرة:",
    "optionsAr": [
      "الأفعال الانعكاسية",
      "جمع المعلومات",
      "التراجع",
      "تشذيب"
    ]
  },
  {
    "id": 25,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Why is looking both ways before crossing a busy street considered an act of rationality rather than a wasted action?",
    "options": [
      "It provides a delay that slows down the agent's processor",
      "It modifies future percepts to help make a decision that maximizes expected safety",
      "It immediately changes the positions of approaching vehicles",
      "Looking is an actuator movement that scores direct utility points"
    ],
    "correctAnswer": 1,
    "explanationAr": "النظر في كلا الاتجاهين قبل عبور الشارع فعل عقلاني لأنه إجراء لجمع المعلومات يغير المُدركات المستقبلية لتقليل المخاطر وزيادة السلامة المتوقعة.",
    "explanationEn": "Looking both ways is rational information gathering: it modifies future percepts to maximize expected safety rather than scoring direct points.",
    "questionAr": "لماذا يعتبر النظر في الاتجاهين قبل عبور شارع مزدحم عملاً عقلانيًا وليس عملاً ضائعًا؟",
    "optionsAr": [
      "يوفر تأخيرًا يؤدي إلى إبطاء معالج الوكيل",
      "إنه يعدل التصورات المستقبلية للمساعدة في اتخاذ قرار يزيد من السلامة المتوقعة",
      "يقوم على الفور بتغيير مواقع المركبات المقتربة",
      "النظر هو حركة مشغلة تسجل نقاط فائدة مباشرة"
    ]
  },
  {
    "id": 26,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "If an agent relies primarily on the prior knowledge embedded by its designer rather than on its own percepts and learning, the agent is said to lack:",
    "options": [
      "Mobility",
      "Autonomy",
      "Determinism",
      "Continuity"
    ],
    "correctAnswer": 1,
    "explanationAr": "إذا اعتمد الوكيل فقط على المعرفة المسبقة التي برمجها المصمم دون الاعتماد على مدخلاته وخبراته، يُقال إنه يفتقر إلى الاستقلالية (Autonomy).",
    "explanationEn": "An agent lacks Autonomy if its behavior relies primarily on the designer's built-in prior knowledge rather than learning from its own experience.",
    "questionAr": "إذا كان الوكيل يعتمد بشكل أساسي على المعرفة السابقة المضمنة في مصممه بدلاً من اعتماده على إدراكه وتعلمه، فيقال إن الوكيل يفتقر إلى:",
    "optionsAr": [
      "التنقل",
      "الحكم الذاتي",
      "الحتمية",
      "الاستمرارية"
    ]
  },
  {
    "id": 27,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "How does an agent achieve high autonomy over the course of its lifetime?",
    "options": [
      "By discarding all sensors and relying solely on its internal clock",
      "By learning from its percepts to compensate for partial or incorrect prior knowledge",
      "By following a fixed table of condition-action rules created at manufacture",
      "By refusing to execute actions in unfamiliar environments"
    ],
    "correctAnswer": 1,
    "explanationAr": "يحقق الوكيل استقلالية عالية بالتعلم المستمر من مُدركاته وتجاربه، مما يمكنه من تعويض أي نقص أو أخطاء في المعرفة المسبقة التي زوده بها المصمم.",
    "explanationEn": "High autonomy is attained when an agent learns from its percepts over time, compensating for partial or incorrect initial designer knowledge.",
    "questionAr": "كيف يحقق الوكيل استقلالية عالية على مدار حياته؟",
    "optionsAr": [
      "وذلك بالتخلص من كافة المستشعرات والاعتماد فقط على ساعتها الداخلية",
      "بالتعلم من مفاهيمه للتعويض عن المعرفة المسبقة الجزئية أو غير الصحيحة",
      "باتباع جدول ثابت لقواعد الإجراء الشرطي التي تم إنشاؤها عند التصنيع",
      "من خلال رفض تنفيذ الإجراءات في بيئات غير مألوفة"
    ]
  },
  {
    "id": 28,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In AIMA Chapter 2, the sphex wasp and dung beetle are discussed as classic biological examples of:",
    "options": [
      "Highly autonomous utility-based learning agents",
      "Innate, rigid behavioral routines that fail when assumptions are violated",
      "Perfect agents that exhibit complete omniscience",
      "Multi-agent competitive systems in continuous environments"
    ],
    "correctAnswer": 1,
    "explanationAr": "نموذج PEAS هو اختصار للأركان الأربعة لوصف بيئة المهمة: مقياس الأداء (Performance)، البيئة (Environment)، المشغلات (Actuators)، وأجهزة الاستشعار (Sensors).",
    "explanationEn": "PEAS stands for Performance measure, Environment, Actuators, and Sensors, formalizing the task environment specification.",
    "questionAr": "في الفصل الثاني من AIMA، تمت مناقشة دبور السفيكس وخنفساء الروث كأمثلة بيولوجية كلاسيكية لما يلي:",
    "optionsAr": [
      "وكلاء التعلم القائم على المرافق ذات الاستقلالية العالية",
      "إجراءات سلوكية فطرية جامدة تفشل عند انتهاك الافتراضات",
      "وكلاء مثاليون يظهرون المعرفة الكاملة",
      "أنظمة تنافسية متعددة الوكلاء في بيئات مستمرة"
    ]
  },
  {
    "id": 29,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In practice, an agent's ability to compute the optimal rational decision is strictly constrained by finite computational time and memory. This is known as:",
    "options": [
      "Bounded rationality",
      "Perfect rationality",
      "Omniscience",
      "Unobservable logic"
    ],
    "correctAnswer": 0,
    "explanationAr": "في سيارة الأجرة الذكية، مقاييس الأداء تتضمن: السلامة، الوصول السريع، مطابقة قوانين المرور، راحة الركاب، وتعظيم الأرباح.",
    "explanationEn": "For an automated taxi driver, the performance measure includes safety, destination arrival speed, legal compliance, passenger comfort, and profit maximization.",
    "questionAr": "من الناحية العملية، فإن قدرة الوكيل على حساب القرار العقلاني الأمثل مقيدة بشكل صارم بالوقت الحسابي والذاكرة المحدودة. وهذا ما يُعرف بـ:",
    "optionsAr": [
      "العقلانية المحدودة",
      "العقلانية الكاملة",
      "كلي العلم",
      "منطق لا يمكن ملاحظته"
    ]
  },
  {
    "id": 30,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which mathematical expression describes selecting the action that maximizes expected utility E(U|a)?",
    "options": [
      "a = argmax_a E(U | a)",
      "a = argmin_a E(U | a)",
      "a = E(a | U)",
      "a = max_s P(s | a)"
    ],
    "correctAnswer": 0,
    "explanationAr": "مبدأ تعظيم المنفعة المتوقعة رياضياً يتمثل في اختيار الفعل a الذي يعظم القيمة التوقعية: a = argmax_a E(U | a).",
    "explanationEn": "The principle of maximizing expected utility chooses the action maximizing expected utility: a = argmax_a E(U | a).",
    "questionAr": "ما التعبير الرياضي الذي يصف اختيار الإجراء الذي يزيد من المنفعة المتوقعة E(U|a)؟",
    "optionsAr": [
      "أ = argmax_a E(U | أ)",
      "أ = argmin_a E(U | أ)",
      "أ = ه(أ | ش)",
      "أ = max_s P(s | أ)"
    ]
  },
  {
    "id": 31,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In the PEAS problem specification framework, what do the four letters stand for?",
    "options": [
      "Perception, Environment, Actions, System",
      "Performance measure, Environment, Actuators, Sensors",
      "Process, Execution, Agents, State",
      "Program, Entity, Actuation, Sequence"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Performance measure, Environment, Actuators, Sensors' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Performance measure, Environment, Actuators, Sensors' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "في إطار مواصفات مشكلة PEAS، ما الذي ترمز إليه الأحرف الأربعة؟",
    "optionsAr": [
      "الإدراك، البيئة، الإجراءات، النظام",
      "مقياس الأداء، البيئة، المحركات، الحساسات",
      "العملية، التنفيذ، الوكلاء، الدولة",
      "البرنامج، الكيان، التشغيل، التسلسل"
    ]
  },
  {
    "id": 32,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "When designing any intelligent agent, what should always be the very first step according to AIMA?",
    "options": [
      "Write the code for the condition-action rules",
      "Specify the task environment (PEAS) as fully as possible",
      "Select a neural network architecture",
      "Assemble the physical hardware and actuators"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Specify the task environment (PEAS) as fully as possible' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Specify the task environment (PEAS) as fully as possible' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "عند تصميم أي وكيل ذكي، ما هي الخطوة الأولى التي يجب أن تكون دائمًا وفقًا لـ AIMA؟",
    "optionsAr": [
      "اكتب الكود الخاص بقواعد التصرف الشرطي",
      "حدد بيئة المهمة (PEAS) على أكمل وجه قدر الإمكان",
      "حدد بنية الشبكة العصبية",
      "تجميع الأجهزة المادية والمحركات"
    ]
  },
  {
    "id": 33,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In the PEAS specification of an automated taxi driver, which of the following is considered an actuator?",
    "options": [
      "Video camera",
      "Steering wheel",
      "Speedometer",
      "GPS receiver"
    ],
    "correctAnswer": 1,
    "explanationAr": "المشغلات (Actuators) هي الأجهزة التي تسمح للوكيل بالتأثير الفعلي والحركي في البيئة، مثل المحركات، والتوجيه، والشاشات.",
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment.",
    "questionAr": "في مواصفات PEAS لسائق سيارة أجرة آلي، أي مما يلي يعتبر مشغلًا؟",
    "optionsAr": [
      "كاميرا فيديو",
      "عجلة القيادة",
      "عداد السرعة",
      "جهاز استقبال جي بي اس"
    ]
  },
  {
    "id": 34,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In the PEAS specification of an automated taxi driver, which of the following is classified as a sensor?",
    "options": [
      "Accelerator",
      "Brake pedal",
      "Lidar / Radar",
      "Voice synthesizer"
    ],
    "correctAnswer": 2,
    "explanationAr": "أجهزة الاستشعار في سيارة الأجرة تشمل الكاميرات والسونار والرادار والـ GPS وعداد السرعة لقراءة حالة الطريق.",
    "explanationEn": "Sensors for an automated taxi include cameras, radar, sonar, GPS, and speedometers to perceive traffic and surroundings.",
    "questionAr": "في مواصفات PEAS لسائق سيارة أجرة آلي، أي مما يلي يُصنف على أنه جهاز استشعار؟",
    "optionsAr": [
      "المسرع",
      "دواسة الفرامل",
      "ليدار / رادار",
      "مركب صوتي"
    ]
  },
  {
    "id": 35,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which of the following is an explicit element of the performance measure for an automated taxi driver?",
    "options": [
      "Driving smoothly to maximize comfort, safety, and passenger satisfaction",
      "Turning the steering wheel 15 degrees right",
      "Detecting lane markings with cameras",
      "Sending coordinate packets over 5G networks"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Driving smoothly to maximize comfort, safety, and passenger satisfaction' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Driving smoothly to maximize comfort, safety, and passenger satisfaction' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "أي مما يلي يعد عنصرًا صريحًا في مقياس الأداء لسائق سيارة أجرة آلي؟",
    "optionsAr": [
      "القيادة بسلاسة لتحقيق أقصى قدر من الراحة والأمان ورضا الركاب",
      "تحويل المقود 15 درجة لليمين",
      "كشف علامات المسار بالكاميرات",
      "إرسال حزم الإحداثيات عبر شبكات 5G"
    ]
  },
  {
    "id": 36,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "For an automated email spam filter agent, what constitutes the primary performance measure?",
    "options": [
      "Speed of downloading files",
      "Accuracy in minimizing false positives and false negatives",
      "Number of emails sent per hour",
      "Disk storage capacity of the server"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Accuracy in minimizing false positives and false negatives' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Accuracy in minimizing false positives and false negatives' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "بالنسبة لعامل تصفية البريد الإلكتروني العشوائي الآلي، ما الذي يشكل مقياس الأداء الأساسي؟",
    "optionsAr": [
      "سرعة تحميل الملفات",
      "الدقة في التقليل من الإيجابيات الكاذبة والسلبيات الكاذبة",
      "عدد رسائل البريد الإلكتروني المرسلة في الساعة",
      "سعة تخزين القرص للخادم"
    ]
  },
  {
    "id": 37,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which of the following is an actuator for an email spam filter agent?",
    "options": [
      "Incoming email headers",
      "Email text content",
      "Moving an email to the Spam folder",
      "Sender IP address"
    ],
    "correctAnswer": 2,
    "explanationAr": "المشغلات (Actuators) هي الأجهزة التي تسمح للوكيل بالتأثير الفعلي والحركي في البيئة، مثل المحركات، والتوجيه، والشاشات.",
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment.",
    "questionAr": "أي مما يلي يعد مشغلًا لعامل تصفية البريد الإلكتروني العشوائي؟",
    "optionsAr": [
      "رؤوس البريد الإلكتروني الوارد",
      "محتوى نص البريد الإلكتروني",
      "نقل البريد الإلكتروني إلى مجلد البريد العشوائي",
      "عنوان IP للمرسل"
    ]
  },
  {
    "id": 38,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In a medical diagnosis expert system, which of the following represents an actuator?",
    "options": [
      "Touchscreen display of questions, test suggestions, and diagnoses",
      "Keyboard entry of patient symptoms",
      "Patient heart rate sensor",
      "Hospital billing database"
    ],
    "correctAnswer": 0,
    "explanationAr": "المشغلات (Actuators) هي الأجهزة التي تسمح للوكيل بالتأثير الفعلي والحركي في البيئة، مثل المحركات، والتوجيه، والشاشات.",
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment.",
    "questionAr": "في النظام الخبير للتشخيص الطبي، أي مما يلي يمثل المحرك؟",
    "optionsAr": [
      "شاشة تعمل باللمس للأسئلة واقتراحات الاختبار والتشخيصات",
      "إدخال لوحة المفاتيح لأعراض المريض",
      "مستشعر معدل ضربات قلب المريض",
      "قاعدة بيانات فواتير المستشفيات"
    ]
  },
  {
    "id": 39,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "What is the primary performance measure for a part-picking robot operating on a manufacturing assembly line?",
    "options": [
      "Percentage of parts placed into correct sorting bins",
      "Electrical voltage supplied to the conveyor belt",
      "Ambient temperature of the warehouse",
      "Angle of the robotic arm joints"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Percentage of parts placed into correct sorting bins' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Percentage of parts placed into correct sorting bins' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "ما هو مقياس الأداء الأساسي لروبوت التقاط الأجزاء الذي يعمل على خط تجميع التصنيع؟",
    "optionsAr": [
      "نسبة الأجزاء الموضوعة في صناديق الفرز الصحيحة",
      "الجهد الكهربائي المزود للحزام الناقل",
      "درجة الحرارة المحيطة بالمستودع",
      "زاوية مفاصل الذراع الروبوتية"
    ]
  },
  {
    "id": 40,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which set of devices serves as sensors for a factory part-picking robot?",
    "options": [
      "Jointed arm and pneumatic gripper",
      "Digital cameras and tactile touch sensors",
      "Electric servomotors and gears",
      "Conveyor belt rollers"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Digital cameras and tactile touch sensors' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Digital cameras and tactile touch sensors' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "ما هي مجموعة الأجهزة التي تعمل كأجهزة استشعار لروبوت التقاط الأجزاء في المصنع؟",
    "optionsAr": [
      "ذراع مفصلية وقابض هوائي",
      "الكاميرات الرقمية وحساسات اللمس",
      "محركات مؤازرة وتروس كهربائية",
      "بكرات الحزام الناقل"
    ]
  },
  {
    "id": 41,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "For a chemical refinery controller agent, what are the primary actuators used to maintain process control?",
    "options": [
      "Pressure gauges and temperature sensors",
      "Valves, heaters, pumps, and stirrers",
      "Purity measurement assays",
      "Chemical composition reports"
    ],
    "correctAnswer": 1,
    "explanationAr": "المشغلات (Actuators) هي الأجهزة التي تسمح للوكيل بالتأثير الفعلي والحركي في البيئة، مثل المحركات، والتوجيه، والشاشات.",
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment.",
    "questionAr": "بالنسبة لعامل التحكم في مصفاة تكرير المواد الكيميائية، ما هي المحركات الأساسية المستخدمة للحفاظ على التحكم في العملية؟",
    "optionsAr": [
      "أجهزة قياس الضغط وحساسات الحرارة",
      "صمامات وسخانات ومضخات ونمامات",
      "فحوصات قياس النقاء",
      "تقارير التركيب الكيميائي"
    ]
  },
  {
    "id": 42,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "For an interactive automated English tutoring softbot, what is the main performance measure?",
    "options": [
      "The speed of keystroke logging",
      "The student's improvement and test score",
      "Number of network requests handled",
      "Audio speaker frequency range"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'The student's improvement and test score' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'The student's improvement and test score' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "بالنسبة لبرنامج softbot لتعليم اللغة الإنجليزية التفاعلي الآلي، ما هو مقياس الأداء الرئيسي؟",
    "optionsAr": [
      "سرعة تسجيل ضغطات المفاتيح",
      "تحسن الطالب ودرجة الاختبار",
      "عدد طلبات الشبكة التي تمت معالجتها",
      "نطاق تردد مكبر الصوت"
    ]
  },
  {
    "id": 43,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An environment is described as fully observable if:",
    "options": [
      "The agent knows the entire future trajectory of states",
      "The agent's sensors give it access to the complete state of the environment at each point in time",
      "The agent has no need for actuators",
      "The environment never changes while the agent is deciding"
    ],
    "correctAnswer": 1,
    "explanationAr": "البيئة الملاحظة بالكامل (Fully observable) هي التي تتيح فيها مستشعرات الوكيل الوصول إلى الحالة الكاملة للبيئة في كل نقطة زمنية دون أي غموض.",
    "explanationEn": "An environment is fully observable if the agent's sensors provide complete access to the entire state of the environment at any given time.",
    "questionAr": "توصف البيئة بأنها قابلة للملاحظة بالكامل إذا:",
    "optionsAr": [
      "الوكيل يعرف المسار المستقبلي الكامل للدول",
      "أجهزة الاستشعار الخاصة بالوكيل تمنحه إمكانية الوصول إلى الحالة الكاملة للبيئة في كل نقطة زمنية",
      "الوكيل لا يحتاج إلى مشغلات",
      "البيئة لا تتغير أبدًا بينما يتخذ الوكيل القرار"
    ]
  },
  {
    "id": 44,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Why is a poker game classified as a partially observable environment?",
    "options": [
      "The dealer shuffles cards unpredictably",
      "Players cannot see the hidden cards held by their opponents",
      "The betting rules change after every round",
      "The chip count is not visible to all players"
    ],
    "correctAnswer": 1,
    "explanationAr": "البيئة الملاحظة جزئياً (Partially observable) تحدث عندما تكون الحواس غير قادرة على رؤية جوانب معينة من العالم بسبب الضوضاء أو محدودية نطاق الحواس.",
    "explanationEn": "An environment is partially observable when sensors cannot detect all relevant aspects of the world due to noise or limited range.",
    "questionAr": "لماذا يتم تصنيف لعبة البوكر على أنها بيئة يمكن ملاحظتها جزئيًا؟",
    "optionsAr": [
      "يقوم الموزع بخلط البطاقات بشكل غير متوقع",
      "لا يمكن للاعبين رؤية البطاقات المخفية التي يحتفظ بها خصومهم",
      "قواعد الرهان تتغير بعد كل جولة",
      "عدد الرقائق غير مرئي لجميع اللاعبين"
    ]
  },
  {
    "id": 45,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "If the next state of an environment is completely determined by the current state and the action executed by the agent, the environment is:",
    "options": [
      "Stochastic",
      "Deterministic",
      "Dynamic",
      "Continuous"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Deterministic' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Deterministic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "إذا تم تحديد الحالة التالية للبيئة بالكامل من خلال الحالة الحالية والإجراء الذي تم تنفيذه بواسطة الوكيل، فإن البيئة هي:",
    "optionsAr": [
      "مؤشر ستوكاستيك",
      "حتمية",
      "ديناميكي",
      "مستمر"
    ]
  },
  {
    "id": 46,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "What is the technical difference between a stochastic environment and a nondeterministic environment in AIMA?",
    "options": [
      "Stochastic explicitly associates probabilities with outcomes, while nondeterministic simply lists possibilities",
      "Nondeterministic environments are always fully observable, while stochastic environments are not",
      "Stochastic environments only occur in board games",
      "There is no mathematical distinction; they are completely interchangeable"
    ],
    "correctAnswer": 0,
    "explanationAr": "البيئة الحتمية (Deterministic) هي التي تتحدد حالتها التالية بشكل كامل وقاطع بالحالة الحالية والفعل الذي ينفذه الوكيل.",
    "explanationEn": "In a deterministic environment, the next state is completely determined by the current state and the action executed by the agent.",
    "questionAr": "ما هو الفرق الفني بين البيئة العشوائية والبيئة غير الحتمية في AIMA؟",
    "optionsAr": [
      "يربط مؤشر ستوكاستيك الاحتمالات بالنتائج بشكل صريح، بينما يسرد مؤشر غير حتمي الاحتمالات",
      "البيئات غير الحتمية تكون دائمًا قابلة للملاحظة بشكل كامل، في حين أن البيئات العشوائية ليست",
      "البيئات العشوائية تحدث فقط في ألعاب الطاولة",
      "لا يوجد تمييز رياضي. فهي قابلة للتبديل تمامًا"
    ]
  },
  {
    "id": 47,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In which type of task environment is the agent's experience divided into atomic episodes where the current decision has no impact on future episodes?",
    "options": [
      "Sequential",
      "Episodic",
      "Dynamic",
      "Continuous"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Episodic' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Episodic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "في أي نوع من بيئة المهام يتم تقسيم تجربة الوكيل إلى حلقات ذرية حيث ليس للقرار الحالي أي تأثير على الحلقات المستقبلية؟",
    "optionsAr": [
      "متسلسل",
      "عرضي",
      "ديناميكي",
      "مستمر"
    ]
  },
  {
    "id": 48,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Why is chess considered a sequential environment rather than an episodic one?",
    "options": [
      "The pieces move in discrete squares",
      "Current board moves have long-term consequences that directly affect all future states",
      "Each turn is completely independent of who moved previously",
      "Players are rewarded points for every piece captured"
    ],
    "correctAnswer": 1,
    "explanationAr": "في البيئة المجزأة (Episodic)، تنقسم تجربة الوكيل إلى نوبات مستقلة؛ بحيث لا يؤثر القرار المتخذ في نوبة سابقة على النوبات التالية.",
    "explanationEn": "In an episodic environment, the agent's experience is divided into independent episodes where past actions do not affect future episodes.",
    "questionAr": "لماذا تعتبر لعبة الشطرنج بيئة متتابعة وليست عرضية؟",
    "optionsAr": [
      "تتحرك القطع في مربعات منفصلة",
      "تحركات مجلس الإدارة الحالية لها عواقب طويلة المدى تؤثر بشكل مباشر على جميع الحالات المستقبلية",
      "كل دور مستقل تمامًا عن من انتقل سابقًا",
      "يحصل اللاعبون على نقاط مقابل كل قطعة يتم التقاطها"
    ]
  },
  {
    "id": 49,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "If an environment does not change while the agent is deliberating, but the agent's performance score decreases as time passes, the environment is:",
    "options": [
      "Static",
      "Dynamic",
      "Semidynamic",
      "Discrete"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار 'Semidynamic' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Semidynamic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "إذا لم تتغير البيئة أثناء مداولات الوكيل، لكن درجة أداء الوكيل تنخفض مع مرور الوقت، فإن البيئة هي:",
    "optionsAr": [
      "ثابت",
      "ديناميكي",
      "شبه ديناميكي",
      "منفصلة"
    ]
  },
  {
    "id": 50,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which of the following is a classic example of a semidynamic task environment?",
    "options": [
      "Driving an automated taxi through urban traffic",
      "Playing chess with a running game clock",
      "Solving a standard crossword puzzle",
      "Sorting parts on a moving conveyor belt"
    ],
    "correctAnswer": 1,
    "explanationAr": "البيئة شبه الديناميكية (Semidynamic) هي التي لا تتغير فيها البيئة نفسها أثناء تفكير الوكيل، ولكن نقاط أداء الوكيل تتناقص مع مرور الوقت.",
    "explanationEn": "An environment is semidynamic if the environment itself does not change while the agent thinks, but the agent's performance score does (e.g. timed chess).",
    "questionAr": "أي مما يلي يعد مثالًا كلاسيكيًا لبيئة المهام شبه الديناميكية؟",
    "optionsAr": [
      "قيادة سيارة أجرة آلية عبر حركة المرور في المناطق الحضرية",
      "لعب الشطرنج بساعة اللعب الجارية",
      "حل لغز الكلمات المتقاطعة القياسية",
      "فرز الأجزاء على الحزام الناقل المتحرك"
    ]
  },
  {
    "id": 51,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An environment with a finite or countable number of distinct states, percepts, actions, and time steps is classified as:",
    "options": [
      "Continuous",
      "Discrete",
      "Dynamic",
      "Stochastic"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Discrete' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Discrete' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "يتم تصنيف البيئة التي تحتوي على عدد محدود أو لا يحصى من الحالات والإدراكات والإجراءات والخطوات الزمنية المميزة على النحو التالي:",
    "optionsAr": [
      "مستمر",
      "منفصل",
      "ديناميكي",
      "العشوائية"
    ]
  },
  {
    "id": 52,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Why is automated taxi driving classified as a continuous environment?",
    "options": [
      "The taxi operates 24 hours a day without stops",
      "Speed, location, steering angles, and time vary continuously through real-valued ranges",
      "The rules of the road never change over time",
      "The taxi visits every city in the country"
    ],
    "correctAnswer": 1,
    "explanationAr": "البيئة المنفصلة (Discrete) تمتلك عدداً محدداً وقابلاً للعد من الحالات والخيارات الزمنية، بينما المستمرة (Continuous) تشمل قيماً لا نهائية متصلة كالسرعة والموقع.",
    "explanationEn": "Discrete environments have a countable number of distinct states and actions, while continuous environments feature continuous variables like position and time.",
    "questionAr": "لماذا تصنف قيادة سيارات الأجرة الآلية على أنها بيئة مستمرة؟",
    "optionsAr": [
      "التاكسي يعمل 24 ساعة يوميا بدون توقف",
      "تختلف السرعة والموقع وزوايا التوجيه والوقت بشكل مستمر من خلال نطاقات ذات قيمة حقيقية",
      "قواعد الطريق لا تتغير مع مرور الوقت",
      "سيارة الأجرة تزور كل مدينة في البلاد"
    ]
  },
  {
    "id": 53,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "What is the key criterion that distinguishes an entity in an environment as another 'agent' rather than merely an object following physical laws?",
    "options": [
      "The entity moves faster than the primary agent",
      "The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions",
      "The entity is made of metal and electronic circuits",
      "The entity communicates using human natural language"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "ما هو المعيار الرئيسي الذي يميز كيانًا ما في بيئة ما باعتباره \"عاملًا\" آخر وليس مجرد كائن يتبع القوانين الفيزيائية؟",
    "optionsAr": [
      "يتحرك الكيان بشكل أسرع من الوكيل الأساسي",
      "أفضل وصف لسلوك الكيان هو تعظيم مقياس الأداء الذي يعتمد على تصرفات الوكيل الأساسي",
      "الكيان مصنوع من المعدن والدوائر الإلكترونية",
      "يتواصل الكيان باستخدام اللغة البشرية الطبيعية"
    ]
  },
  {
    "id": 54,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In a competitive multi-agent environment such as chess, how do the performance measures of the agents relate to each other?",
    "options": [
      "Maximizing one agent's performance measure minimizes the other's",
      "Both agents work together to maximize a shared reward",
      "The agents ignore each other's score entirely",
      "Both agents receive equal points regardless of outcome"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Maximizing one agent's performance measure minimizes the other's' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Maximizing one agent's performance measure minimizes the other's' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "في بيئة تنافسية متعددة الوكلاء مثل لعبة الشطرنج، كيف ترتبط مقاييس أداء الوكلاء ببعضها البعض؟",
    "optionsAr": [
      "يؤدي تعظيم مقياس أداء وكيل واحد إلى تقليل",
      "الآخر يعمل كلا الوكيلين معًا لتحقيق أقصى قدر من المكافأة المشتركة",
      "يتجاهل الوكلاء نقاط بعضهم البعض تمامًا",
      "يحصل كلا الوكيلين على نقاط متساوية بغض النظر عن النتيجة"
    ]
  },
  {
    "id": 55,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An environment is termed 'known' when:",
    "options": [
      "The agent can see through walls using infrared sensors",
      "The outcomes (or outcome probabilities) for all actions are fully given to the agent",
      "The agent has already reached the goal state",
      "The state space contains fewer than 100 states"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'The outcomes (or outcome probabilities) for all actions are fully given to the agent' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'The outcomes (or outcome probabilities) for all actions are fully given to the agent' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "تسمى البيئة \"معروفة\" عندما:",
    "optionsAr": [
      "يستطيع العميل الرؤية من خلال الجدران باستخدام أجهزة استشعار الأشعة تحت الحمراء",
      "يتم إعطاء النتائج (أو احتمالات النتائج) لجميع الإجراءات بالكامل إلى الوكيل",
      "لقد وصل الوكيل بالفعل إلى حالة الهدف",
      "تحتوي مساحة الحالة على أقل من 100 ولاية"
    ]
  },
  {
    "id": 56,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Can an environment be 'known' but still 'partially observable'? Which example proves this?",
    "options": [
      "No, knowing the rules guarantees full observability",
      "Yes; in solitaire card games the rules are known, but face-down cards cannot be seen",
      "Yes; in crossword puzzles the grid is partially invisible",
      "No, partial observability only occurs in unknown video games"
    ],
    "correctAnswer": 1,
    "explanationAr": "البيئة الملاحظة جزئياً (Partially observable) تحدث عندما تكون الحواس غير قادرة على رؤية جوانب معينة من العالم بسبب الضوضاء أو محدودية نطاق الحواس.",
    "explanationEn": "An environment is partially observable when sensors cannot detect all relevant aspects of the world due to noise or limited range.",
    "questionAr": "هل يمكن أن تكون البيئة \"معروفة\" ولكن مع ذلك \"يمكن ملاحظتها جزئيًا\"؟ أي مثال يثبت ذلك؟",
    "optionsAr": [
      "لا، إن معرفة القواعد تضمن إمكانية الملاحظة الكاملة",
      "نعم؛ القواعد معروفة في ألعاب ورق السوليتير، لكن لا يمكن رؤية البطاقات المقلوبة",
      "نعم؛ في الكلمات المتقاطعة تكون الشبكة غير مرئية جزئيًا",
      "لا، إمكانية الملاحظة الجزئية تحدث فقط في ألعاب الفيديو غير المعروفة"
    ]
  },
  {
    "id": 57,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "What combination of environment characteristics represents the most difficult challenge for designing AI agents?",
    "options": [
      "Fully observable, deterministic, static, discrete, single-agent, known",
      "Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown",
      "Fully observable, stochastic, episodic, static, single-agent, known",
      "Partially observable, deterministic, sequential, static, discrete, known"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "ما هي مجموعة خصائص البيئة التي تمثل التحدي الأكثر صعوبة في تصميم عوامل الذكاء الاصطناعي؟",
    "optionsAr": [
      "يمكن ملاحظتها بالكامل، حتمية، ثابتة، منفصلة، ​​وكيل واحد، معروف",
      "يمكن ملاحظته جزئيا، متعدد العوامل، غير حتمي، متسلسل، ديناميكي، مستمر، غير معروف",
      "يمكن ملاحظته بالكامل، عشوائي، عرضي، ثابت، وكيل واحد، معروف",
      "يمكن ملاحظتها جزئيا، حتمية، متسلسل، ثابت، منفصل، معروف"
    ]
  },
  {
    "id": 58,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Which of the following task environments is classified as Static, Discrete, and Deterministic?",
    "options": [
      "Taxi driving",
      "Standard crossword puzzle",
      "Refinery controller",
      "Medical diagnosis"
    ],
    "correctAnswer": 1,
    "explanationAr": "البيئة الحتمية (Deterministic) هي التي تتحدد حالتها التالية بشكل كامل وقاطع بالحالة الحالية والفعل الذي ينفذه الوكيل.",
    "explanationEn": "In a deterministic environment, the next state is completely determined by the current state and the action executed by the agent.",
    "questionAr": "أي من بيئات المهام التالية تم تصنيفها على أنها ثابتة ومنفصلة وحتمية؟",
    "optionsAr": [
      "قيادة سيارات الأجرة",
      "لغز الكلمات المتقاطعة القياسية",
      "مراقب المصفاة",
      "التشخيص الطبي"
    ]
  },
  {
    "id": 59,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In Figure 2.6 of AIMA, how is the task environment for backgammon categorized regarding observability and determinism?",
    "options": [
      "Partially observable and Deterministic",
      "Fully observable and Stochastic",
      "Fully observable and Deterministic",
      "Partially observable and Continuous"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Fully observable and Stochastic' يوضح هذا المفهوم بدقة؛ حيث يرتبط مباشرة بالوظيفة المحددة والمبدأ النظري المنظم لعمل الوكلاء الأذكياء.",
    "explanationEn": "The option 'Fully observable and Stochastic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent.",
    "questionAr": "في الشكل 2.6 من AIMA، كيف يتم تصنيف بيئة مهمة لعبة الطاولة فيما يتعلق بقابلية الملاحظة والحتمية؟",
    "optionsAr": [
      "يمكن ملاحظتها جزئيا وحتمية",
      "يمكن ملاحظتها بالكامل و العشوائية",
      "يمكن ملاحظتها بالكامل وحتمية",
      "يمكن ملاحظتها جزئيا ومستمرة"
    ]
  },
  {
    "id": 60,
    "type": "mcq",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Why is backgammon classified as stochastic, whereas chess is classified as deterministic?",
    "options": [
      "Backgammon involves dice rolls, which introduce randomness into state transitions",
      "Chess has a smaller board size than backgammon",
      "In backgammon, the opponent's pieces are hidden from view",
      "Chess requires timing clocks, while backgammon does not"
    ],
    "correctAnswer": 0,
    "explanationAr": "البيئة الحتمية (Deterministic) هي التي تتحدد حالتها التالية بشكل كامل وقاطع بالحالة الحالية والفعل الذي ينفذه الوكيل.",
    "explanationEn": "In a deterministic environment, the next state is completely determined by the current state and the action executed by the agent.",
    "questionAr": "لماذا تم تصنيف لعبة الطاولة على أنها عشوائية، في حين تم تصنيف الشطرنج على أنها حتمية؟",
    "optionsAr": [
      "تتضمن لعبة الطاولة رمي النرد، مما يُدخل العشوائية في انتقالات الحالة",
      "الشطرنج لديه حجم لوحة أصغر من لعبة الطاولة",
      "في لعبة الطاولة، يتم إخفاء قطع الخصم عن الأنظار",
      "تتطلب لعبة الشطرنج ساعات زمنية، بينما لا تتطلب لعبة الطاولة ذلك"
    ]
  },
  {
    "id": 61,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An agent is anything that can perceive its environment through sensors and act upon that environment through actuators.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "الوكيل هو أي شيء يمكنه إدراك بيئته من خلال أجهزة الاستشعار والتصرف في تلك البيئة من خلال المحركات.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 62,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An agent's choice of action at any given moment can legitimately depend on future percepts that have not yet occurred.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "يمكن أن يعتمد اختيار الوكيل للتصرف في أي لحظة بشكل مشروع على التصورات المستقبلية التي لم تحدث بعد.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 63,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "A table-driven agent is theoretically capable of implementing any valid agent function, despite being practically infeasible for complex tasks.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "الوكيل المبني على الجدول قادر نظريًا على تنفيذ أي وظيفة وكيل صالحة، على الرغم من كونه غير ممكن عمليًا للمهام المعقدة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 64,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An omniscient agent is identical in definition to a rational agent, as both terms require maximizing expected utility based on current percepts.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "العامل كلي العلم مطابق في التعريف للعامل العقلاني، حيث يتطلب كلا المصطلحين تعظيم المنفعة المتوقعة بناءً على التصورات الحالية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 65,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Rationality guarantees perfection; therefore, a rational agent will never suffer an unfortunate outcome due to unobserved external events.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "العقلانية تضمن الكمال؛ ولذلك، فإن العامل العقلاني لن يعاني أبدًا من نتيجة مؤسفة بسبب أحداث خارجية غير ملحوظة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 66,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "As a general rule, a performance measure should be designed according to what one actually wants to achieve in the environment, rather than how the agent should behave.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "كقاعدة عامة، يجب تصميم مقياس الأداء وفقًا لما يريد الفرد تحقيقه فعليًا في البيئة، وليس وفقًا للطريقة التي يجب أن يتصرف بها الوكيل.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 67,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An agent that relies entirely on built-in prior knowledge and never learns from its sensory experience is said to possess complete autonomy.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "يقال إن الوكيل الذي يعتمد بشكل كامل على المعرفة السابقة المضمنة ولا يتعلم أبدًا من تجربته الحسية يمتلك استقلالية كاملة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 68,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Simple reflex agents choose actions based solely on the current percept, completely ignoring the historical percept sequence.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "يختار الوكلاء المنعكسون البسيطون إجراءات تعتمد فقط على الإدراك الحالي، متجاهلين تمامًا تسلسل الإدراك التاريخي.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 69,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In partially observable environments, deterministic simple reflex agents are often prone to getting trapped in infinite, unrecoverable loops.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "في البيئات التي يمكن ملاحظتها جزئيًا، غالبًا ما تكون العوامل المنعكسة الحتمية البسيطة عرضة للوقوع في فخ حلقات لا نهائية وغير قابلة للاسترداد.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 70,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Randomization of actions can sometimes help a simple reflex agent escape infinite loops in partially observable single-agent environments.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "يمكن أن تساعد عشوائية الإجراءات في بعض الأحيان وكيلًا منعكسًا بسيطًا على الهروب من الحلقات اللانهائية في بيئات الوكيل الفردي التي يمكن ملاحظتها جزئيًا.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 71,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Model-based reflex agents maintain an internal state to keep track of aspects of the world that cannot be observed in the current percept.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "تحافظ العوامل المنعكسة القائمة على النموذج على حالة داخلية لتتبع جوانب العالم التي لا يمكن ملاحظتها في الإدراك الحالي.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 72,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "The transition model in a model-based agent reflects knowledge about how the world evolves independently and how the agent's actions change the world.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "يعكس نموذج الانتقال في الوكيل القائم على النموذج المعرفة حول كيفية تطور العالم بشكل مستقل وكيف تغير تصرفات الوكيل العالم.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 73,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Goal-based agents are less flexible than simple reflex agents because their decision logic cannot be adjusted without rewriting the entire program.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "تعتبر الوكلاء المعتمدون على الأهداف أقل مرونة من الوكلاء المنعكسين البسيطين لأنه لا يمكن تعديل منطق القرار الخاص بهم دون إعادة كتابة البرنامج بأكمله.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 74,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "Utility-based agents use an internalized utility function that allows them to make rational trade- offs between conflicting goals.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "يستخدم الوكلاء المعتمدون على المنفعة وظيفة المنفعة الداخلية التي تسمح لهم بإجراء مقايضات عقلانية بين الأهداف المتضاربة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 75,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In a learning agent architecture, the critic evaluates the agent's behavior against an external performance standard that the agent itself is allowed to modify.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "في بنية وكيل التعلم، يقوم الناقد بتقييم سلوك الوكيل مقابل معيار أداء خارجي يُسمح للوكيل نفسه بتعديله.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 76,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "The problem generator component in a learning agent is responsible for suggesting exploratory actions that lead to new experiences.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "يعد مكون مولد المشكلات في وكيل التعلم مسؤولاً عن اقتراح الإجراءات الاستكشافية التي تؤدي إلى تجارب جديدة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 77,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "In an atomic representation, each state of the world has an internal structure composed of accessible attribute-value variables called fluents.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "في التمثيل الذري، كل حالة من دول العالم لديها بنية داخلية تتكون من متغيرات قيمة السمة التي يمكن الوصول إليها والتي تسمى بطلاقة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 78,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "A factored state representation splits each state into a fixed set of variables or attributes, each of which can hold a value.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة. فالمفهوم المذكور يعبر عن حقيقة ثابتة في هيكلة الوكلاء: فالوكيل يعتمد على مدخلاته لمعالجة العالم الداخلي واتخاذ القرار الأنسب.",
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations.",
    "questionAr": "يقوم تمثيل الحالة المُعامل بتقسيم كل حالة إلى مجموعة ثابتة من المتغيرات أو السمات، كل منها يمكن أن يحمل قيمة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 79,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An environment is considered dynamic if the physical world remains unchanged while the agent deliberates, but time limits expire.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "تعتبر البيئة ديناميكية إذا ظل العالم المادي دون تغيير أثناء تداول الوكيل، ولكن تنتهي الحدود الزمنية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 80,
    "type": "true_false",
    "chapterId": 2,
    "chapter": "Chapter 2: Intelligent Agents",
    "question": "An automated taxi driving on a highway operates in a single-agent environment because other cars are merely physical obstacles governed by physics.",
    "options": [
      "True",
      "False QUESTIONS)"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة. والسبب أن المفهوم الحقيقي يتناقض مع ذلك: فلا يمكن للوكيل أن يخرق القوانين السببية بالاعتماد على المستقبل، أو تجاوز المراقبة في البيئات غير المؤكدة.",
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments.",
    "questionAr": "تعمل سيارة أجرة آلية تسير على الطريق السريع في بيئة وكيل واحد لأن السيارات الأخرى مجرد عقبات مادية تحكمها الفيزياء.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 81,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "An agent that plans ahead by considering a sequence of actions that form a path to a goal state before taking action in the physical world is called a:",
    "options": [
      "Reflex agent",
      "Problem-solving agent",
      "Utility-free agent",
      "Reactive agent"
    ],
    "correctAnswer": 1,
    "explanationAr": "وكيل حل المشكلات (Problem-solving agent) هو وكيل موجه بالهدف يخطط مسبقاً بمحاكاة تسلسل من الأفعال للوصول إلى حالة الهدف قبل التنفيذ الفعلي في البيئة.",
    "explanationEn": "A problem-solving agent is a goal-based agent that plans ahead by finding a sequence of actions that leads to a goal state before executing them.",
    "questionAr": "الوكيل الذي يخطط للمستقبل من خلال النظر في سلسلة من الإجراءات التي تشكل طريقًا إلى حالة الهدف قبل اتخاذ إجراء في العالم المادي يسمى:",
    "optionsAr": [
      "العامل المنعكس",
      "وكيل حل المشكلات",
      "وكيل بدون فائدة",
      "عامل رد الفعل"
    ]
  },
  {
    "id": 82,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the first phase in the four-phase problem-solving process carried out by a problem- solving agent?",
    "options": [
      "Execution",
      "Search",
      "Goal formulation",
      "Problem formulation"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار الصحيح هو 'Goal formulation'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Goal formulation' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "ما هي المرحلة الأولى في عملية حل المشكلات ذات المراحل الأربع التي يقوم بها وكيل حل المشكلات؟",
    "optionsAr": [
      "تنفيذ",
      "بحث",
      "صياغة الأهداف",
      "صياغة المشكلة"
    ]
  },
  {
    "id": 83,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the four-phase problem-solving process, what is the correct chronological sequence of phases?",
    "options": [
      "Search -> Goal formulation -> Problem formulation -> Execution",
      "Goal formulation -> Problem formulation -> Search -> Execution",
      "Problem formulation -> Execution -> Goal formulation -> Search",
      "Goal formulation -> Search -> Execution -> Problem formulation"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Goal formulation -> Problem formulation -> Search -> Execution'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Goal formulation -> Problem formulation -> Search -> Execution' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في عملية حل المشكلات المكونة من أربع مراحل، ما هو التسلسل الزمني الصحيح للمراحل؟",
    "optionsAr": [
      "بحث -> صياغة الأهداف -> صياغة المشكلة -> التنفيذ",
      "صياغة الأهداف -> صياغة المشكلة -> البحث -> التنفيذ",
      "صياغة المشكلة -> التنفيذ -> صياغة الأهداف -> بحث",
      "صياغة الأهداف -> البحث -> التنفيذ -> صياغة المشكلة"
    ]
  },
  {
    "id": 84,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In a fully observable, deterministic, and known environment, why can an agent execute its solution as an 'open-loop system' without monitoring sensors?",
    "options": [
      "Because the actuators never wear out",
      "Because the predetermined sequence of actions is guaranteed to reach the goal without surprises",
      "Because open-loop systems are always faster than closed-loop systems",
      "Because sensors are deactivated during execution to conserve energy"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Because the predetermined sequence of actions is guaranteed to reach the goal without surprises'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Because the predetermined sequence of actions is guaranteed to reach the goal without surprises' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في بيئة يمكن ملاحظتها وحتميتها ومعروفة بالكامل، لماذا يمكن للوكيل تنفيذ حله باعتباره \"نظام حلقة مفتوحة\" دون مراقبة أجهزة الاستشعار؟",
    "optionsAr": [
      "لأن المحركات لا تبلى أبدًا",
      "لأن تسلسل الإجراءات المحدد مسبقًا يضمن الوصول إلى الهدف دون مفاجآت",
      "لأن أنظمة الحلقة المفتوحة تكون دائمًا أسرع من أنظمة الحلقة المغلقة",
      "لأنه يتم تعطيل أجهزة الاستشعار أثناء التنفيذ للحفاظ على الطاقة"
    ]
  },
  {
    "id": 85,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "How many formal components are required to mathematically define a search problem according to AIMA Chapter 3?",
    "options": [
      "Three components",
      "Four components",
      "Five components",
      "Seven components"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار الصحيح هو 'Five components'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Five components' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "ما هو عدد المكونات الرسمية المطلوبة لتحديد مشكلة البحث رياضيًا وفقًا للفصل الثالث من AIMA؟",
    "optionsAr": [
      "ثلاثة مكونات",
      "أربعة مكونات",
      "خمسة مكونات",
      "سبعة مكونات"
    ]
  },
  {
    "id": 86,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Which of the following is NOT one of the five formal components of a search problem?",
    "options": [
      "Initial state",
      "Set of available actions (ACTIONS)",
      "Heuristic decay rate",
      "Transition model (RESULT)"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار الصحيح هو 'Heuristic decay rate'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Heuristic decay rate' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "أي مما يلي ليس أحد المكونات الرسمية الخمسة لمشكلة البحث؟",
    "optionsAr": [
      "الحالة الأولية",
      "مجموعة الإجراءات المتاحة (ACTIONS)",
      "معدل الاضمحلال الإرشادي",
      "النموذج الانتقالي (النتيجة)"
    ]
  },
  {
    "id": 87,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the formal definition of a search problem, what does the function RESULT(s, a) return?",
    "options": [
      "A boolean indicating if state s is the goal",
      "The numerical cost of action a",
      "The state that results from executing action a in state s",
      "The list of all valid actions in state s"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار الصحيح هو 'The state that results from executing action a in state s'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'The state that results from executing action a in state s' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في التعريف الرسمي لمشكلة البحث، ما الذي ترجعه الدالة RESULT(s, a)؟",
    "optionsAr": [
      "قيمة منطقية تشير إلى ما إذا كانت الحالة هي الهدف",
      "التكلفة العددية للعمل أ",
      "الحالة الناتجة عن تنفيذ الإجراء a في الحالة",
      "قائمة بجميع الإجراءات الصالحة في الحالة"
    ]
  },
  {
    "id": 88,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "An action a is described as 'applicable' in state s if:",
    "options": [
      "a belongs to the set ACTIONS(s)",
      "a has a cost of zero",
      "a immediately achieves the goal state",
      "a has never been performed before"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'a belongs to the set ACTIONS(s)'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'a belongs to the set ACTIONS(s)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "يتم وصف الإجراء a بأنه \"قابل للتطبيق\" في الحالة s إذا:",
    "optionsAr": [
      "ينتمي a إلى مجموعة الإجراءات (الإجراءات)",
      "تكلفة صفر",
      "يحقق حالة الهدف على الفور",
      "لم يتم تنفيذها من قبل"
    ]
  },
  {
    "id": 89,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In search algorithms, a path is defined as a sequence of actions, and a solution is formally defined as:",
    "options": [
      "The shortest path between any two random states",
      "A path leading from the initial state to any valid goal state",
      "The entire explored portion of the state space graph",
      "The minimum spanning tree of the search space"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'A path leading from the initial state to any valid goal state'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'A path leading from the initial state to any valid goal state' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في خوارزميات البحث، يتم تعريف المسار على أنه سلسلة من الإجراءات، ويتم تعريف الحل رسميًا على النحو التالي:",
    "optionsAr": [
      "أقصر مسار بين أي حالتين عشوائيتين",
      "مسار يؤدي من الحالة الأولية إلى أي حالة هدف صالحة",
      "الجزء المستكشف بالكامل من الرسم البياني الفضائي للحالة",
      "الحد الأدنى للشجرة الممتدة لمساحة البحث"
    ]
  },
  {
    "id": 90,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In search algorithms, path costs are assumed to be additive, meaning that the total path cost is:",
    "options": [
      "The maximum cost among all individual action steps",
      "The product of all individual action costs",
      "The sum of the individual step costs along the path",
      "The average of the start and goal node costs"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار الصحيح هو 'The sum of the individual step costs along the path'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'The sum of the individual step costs along the path' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في خوارزميات البحث، يُفترض أن تكون تكاليف المسار مضافة، مما يعني أن تكلفة المسار الإجمالية هي:",
    "optionsAr": [
      "الحد الأقصى للتكلفة بين جميع خطوات العمل الفردية",
      "منتج جميع تكاليف العمل الفردي",
      "مجموع تكاليف الخطوة الفردية على طول المسار",
      "متوسط ​​تكاليف عقدة البداية والهدف"
    ]
  },
  {
    "id": 91,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is it assumed in standard classical search that all action costs must be strictly positive (cost >= epsilon > 0)?",
    "options": [
      "To ensure that computers do not divide by zero during search",
      "To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly",
      "Because real money can never have negative values",
      "To force BFS and DFS to generate the same number of nodes"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "لماذا يُفترض في البحث الكلاسيكي القياسي أن جميع تكاليف الإجراء يجب أن تكون إيجابية تمامًا (التكلفة > = إبسيلون > 0)؟",
    "optionsAr": [
      "للتأكد من عدم قسمة أجهزة الكمبيوتر على صفر أثناء البحث",
      "لتجنب الحلقات اللانهائية حيث يجتاز الوكيل دورات التكلفة الصفرية أو التكلفة السلبية إلى ما لا نهاية",
      "لأن المال الحقيقي لا يمكن أن يكون له قيم سلبية أبدًا",
      "لإجبار BFS و DFS على إنشاء نفس العدد من العقد"
    ]
  },
  {
    "id": 92,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The essential engineering process of removing irrelevant details from a world representation to create a manageable problem model is called:",
    "options": [
      "Pruning",
      "Abstraction",
      "Discretization",
      "Optimization"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Abstraction'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Abstraction' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "تسمى العملية الهندسية الأساسية لإزالة التفاصيل غير ذات الصلة من التمثيل العالمي لإنشاء نموذج مشكلة يمكن التحكم فيه:",
    "optionsAr": [
      "التقليم",
      "التجريد",
      "التفرد",
      "تحسين"
    ]
  },
  {
    "id": 93,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "When is an abstract problem formulation considered 'valid'?",
    "options": [
      "If it contains no numbers greater than 1,000",
      "If any abstract solution can be elaborated into a concrete solution in the more detailed real world",
      "If it can be solved in polynomial time O(n)",
      "Only if the state space graph is completely planar"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "متى تعتبر صياغة المشكلة المجردة \"صالحة\"؟",
    "optionsAr": [
      "إذا لم يكن يحتوي على أرقام أكبر من 1000",
      "إذا كان من الممكن تطوير أي حل مجرد إلى حل ملموس في العالم الحقيقي الأكثر تفصيلاً",
      "إذا كان من الممكن حلها في زمن كثير الحدود O(n)",
      "فقط إذا كان الرسم البياني الفضائي للحالة مستويًا تمامًا"
    ]
  },
  {
    "id": 94,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "An abstraction is considered 'useful' if carrying out each abstract action in the solution:",
    "options": [
      "Is easier than solving the original unabstracted problem",
      "Generates at least 100 successor states",
      "Costs exactly one unit of energy",
      "Eliminates the need for an initial state"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'Is easier than solving the original unabstracted problem'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Is easier than solving the original unabstracted problem' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "يعتبر التجريد \"مفيدًا\" في حالة تنفيذ كل إجراء مجرد في الحل:",
    "optionsAr": [
      "أسهل من حل المشكلة الأصلية غير الملخصة",
      "يولد ما لا يقل عن 100 دولة لاحقة",
      "يكلف بالضبط وحدة واحدة من الطاقة",
      "يلغي الحاجة إلى حالة أولية"
    ]
  },
  {
    "id": 95,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "An optimal solution to a search problem is formally defined as:",
    "options": [
      "Any path that visits the fewest possible states",
      "A solution path that has the lowest path cost among all possible solutions",
      "The path that visits every node in the graph exactly once",
      "A solution discovered without expanding any non-goal nodes"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'A solution path that has the lowest path cost among all possible solutions'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'A solution path that has the lowest path cost among all possible solutions' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "يتم تعريف الحل الأمثل لمشكلة البحث رسميًا على النحو التالي:",
    "optionsAr": [
      "أي مسار يزور أقل عدد ممكن من الحالات",
      "مسار الحل ذو تكلفة المسار الأقل بين جميع الحلول الممكنة",
      "المسار الذي يزور كل عقدة في الرسم البياني مرة واحدة بالضبط",
      "تم اكتشاف الحل دون توسيع أي عقد غير هدفية"
    ]
  },
  {
    "id": 96,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the primary academic purpose of a standardized benchmark problem in AI research?",
    "options": [
      "To run actual commercial airline flight reservations",
      "To provide concise, exact problem descriptions to compare algorithm performance",
      "To control factory hardware on production lines",
      "To eliminate the need for heuristic functions"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'To provide concise, exact problem descriptions to compare algorithm performance'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'To provide concise, exact problem descriptions to compare algorithm performance' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "ما هو الغرض الأكاديمي الأساسي لمشكلة مرجعية موحدة في أبحاث الذكاء الاصطناعي؟",
    "optionsAr": [
      "لإجراء حجوزات طيران تجارية فعلية",
      "لتوفير أوصاف موجزة ودقيقة للمشكلة لمقارنة أداء الخوارزمية",
      "للتحكم بأجهزة المصنع على خطوط الإنتاج",
      "للقضاء على الحاجة إلى وظائف ارشادية"
    ]
  },
  {
    "id": 97,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In a 3-cell vacuum-cleaner world where each cell can be clean or dirty, what is the exact number of possible states in the state space?",
    "options": [
      "12 states",
      "24 states",
      "16 states",
      "64 states"
    ],
    "correctAnswer": 1,
    "explanationAr": "مساحة الحالات تمثل جميع التكوينات الممكنة للمسألة، بينما شجرة البحث تمثل المسارات المحددة التي يستكشفها الوكيل والتي قد تتضمن حالات مكررة في فروع مختلفة.",
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata.",
    "questionAr": "في عالم المكنسة الكهربائية المكون من ثلاث خلايا حيث يمكن أن تكون كل خلية نظيفة أو متسخة، ما هو العدد الدقيق للحالات المحتملة في مساحة الحالة؟",
    "optionsAr": [
      "12 ولاية",
      "24 ولاية",
      "16 ولاية",
      "64 ولاية"
    ]
  },
  {
    "id": 98,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the standard formulation of the 8-puzzle, how are actions most cleanly and conveniently conceptualized?",
    "options": [
      "Moving numbered tiles along diagonal tracks",
      "Moving the blank space Left, Right, Up, or Down",
      "Shaking the puzzle board to randomize tiles",
      "Swapping any two arbitrary tiles regardless of position"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Moving the blank space Left, Right, Up, or Down'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Moving the blank space Left, Right, Up, or Down' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في الصيغة القياسية للألغاز الثمانية، كيف يتم تصور الإجراءات بشكل أكثر وضوحًا وملاءمة؟",
    "optionsAr": [
      "تحريك البلاطات المرقمة على طول المسارات القطرية",
      "تحريك المساحة الفارغة لليسار أو لليمين أو للأعلى أو للأسفل",
      "هز لوحة اللغز لترتيب البلاط بشكل عشوائي",
      "مبادلة أي اثنين من البلاط التعسفي بغض النظر عن الموقف"
    ]
  },
  {
    "id": 99,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Because of the mathematical parity property of the sliding-tile puzzle, what fraction of all possible random tile arrangements can reach a given goal state?",
    "options": [
      "Exactly all (100%)",
      "Exactly one-half (50%)",
      "Exactly one-third (33%)",
      "Exactly one-ninth (11%)"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Exactly one-half (50%)'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Exactly one-half (50%)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "بسبب خاصية التكافؤ الرياضي في لغز البلاط المنزلق، ما هو الجزء من جميع ترتيبات البلاط العشوائية الممكنة التي يمكن أن تصل إلى حالة هدف معينة؟",
    "optionsAr": [
      "الكل بالضبط (100%)",
      "بالضبط النصف (50%)",
      "الثلث بالضبط (33%)",
      "التاسع بالضبط (11%)"
    ]
  },
  {
    "id": 100,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The total number of reachable states in the standard 8-puzzle state space is exactly:",
    "options": [
      "9! = 362,880",
      "9! / 2 = 181,440",
      "8! = 40,320",
      "2^8 = 256"
    ],
    "correctAnswer": 1,
    "explanationAr": "في لغز 8-puzzle، تنقسم مساحة الحالات الإجمالية (9! = 362,880) إلى نصفين غير متصلين بسبب قيود التكافؤ الزوجي، وبالتالي عدد الحالات القابلة للوصول هو بالضبط 9! / 2 = 181,440 حالة.",
    "explanationEn": "In the 8-puzzle, the permutation state space splits into two parity-separated components; exactly half the configurations (9! / 2 = 181,440) are reachable from any start state.",
    "questionAr": "إجمالي عدد الحالات التي يمكن الوصول إليها في مساحة الحالة القياسية المكونة من 8 ألغاز هو بالضبط:",
    "optionsAr": [
      "9! = 362,880",
      "9! / 2 = 181,440",
      "8! = 40,320",
      "2^8 = 256"
    ]
  },
  {
    "id": 101,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "For the larger 15-puzzle (a 4x4 grid), the number of reachable states is approximately:",
    "options": [
      "1.8 * 10^5",
      "Over 10 trillion (16! / 2)",
      "15^2 = 225",
      "Infinite"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Over 10 trillion (16! / 2)'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Over 10 trillion (16! / 2)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "بالنسبة للألغاز الأكبر المكونة من 15 لغزًا (شبكة 4×4)، يكون عدد الحالات التي يمكن الوصول إليها تقريبًا:",
    "optionsAr": [
      "1.8 * 10^5",
      "أكثر من 10 تريليون (16!/2)",
      "15^2 = 225",
      "لانهائي"
    ]
  },
  {
    "id": 102,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Donald Knuth's 4-problem illustrates how infinite state spaces can arise in search problems by applying which set of mathematical operations to the number 4?",
    "options": [
      "Addition, subtraction, multiplication, and division",
      "Square root, floor, and factorial",
      "Modulo, exponentiation, and logarithms",
      "Derivatives, integrals, and limits"
    ],
    "correctAnswer": 1,
    "explanationAr": "مساحة الحالات تمثل جميع التكوينات الممكنة للمسألة، بينما شجرة البحث تمثل المسارات المحددة التي يستكشفها الوكيل والتي قد تتضمن حالات مكررة في فروع مختلفة.",
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata.",
    "questionAr": "توضح مشكلة دونالد كنوث 4 كيف يمكن أن تنشأ مساحات الحالة اللانهائية في مشاكل البحث من خلال تطبيق أي مجموعة من العمليات الرياضية على الرقم 4؟",
    "optionsAr": [
      "الجمع والطرح والضرب والقسمة",
      "الجذر التربيعي والأرضي والمضروب",
      "الوحدات والأسيات واللوغاريتمات",
      "المشتقات والتكاملات والحدود"
    ]
  },
  {
    "id": 103,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the Sokoban grid-world puzzle, what is the agent's primary objective?",
    "options": [
      "Clean all dirty squares with suction",
      "Push scattered boxes to designated storage locations",
      "Destroy enemy pieces on a board",
      "Travel to Bucharest with minimum mileage"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Push scattered boxes to designated storage locations'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Push scattered boxes to designated storage locations' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في لغز عالم شبكة سوكوبان، ما هو الهدف الأساسي للعميل؟",
    "optionsAr": [
      "تنظيف جميع المربعات المتسخة بالشفط",
      "ادفع الصناديق المتناثرة إلى مواقع التخزين المخصصة",
      "تدمير قطع العدو على اللوح",
      "سافر إلى بوخارست بأقل عدد من الأميال"
    ]
  },
  {
    "id": 104,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The Traveling Salesperson Problem (TSP) is formally categorized as which type of search problem?",
    "options": [
      "Single-destination path problem",
      "Touring problem where every city must be visited",
      "Continuous reflex problem",
      "Softbot parsing problem"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Touring problem where every city must be visited'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Touring problem where every city must be visited' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "يتم تصنيف مشكلة مندوب المبيعات المتجول (TSP) رسميًا على أنها نوع مشكلة البحث؟",
    "optionsAr": [
      "مشكلة مسار الوجهة الواحدة",
      "مشكلة التجول حيث يجب زيارة كل مدينة",
      "مشكلة الانعكاس المستمر",
      "مشكلة في تحليل سوفت بوت"
    ]
  },
  {
    "id": 105,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In electronic circuit design, the VLSI layout problem is typically decomposed into which two sequential subproblems?",
    "options": [
      "Cell layout and channel routing",
      "Gate soldering and wire splicing",
      "Logic synthesis and power charging",
      "Clock timing and instruction decoding"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'Cell layout and channel routing'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Cell layout and channel routing' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في تصميم الدوائر الإلكترونية، تنقسم مشكلة تخطيط VLSI عادةً إلى أي مشكلتين فرعيتين متسلسلتين؟",
    "optionsAr": [
      "تخطيط الخلية وتوجيه القناة",
      "لحام البوابة وربط الأسلاك",
      "التوليف المنطقي وشحن الطاقة",
      "توقيت الساعة وفك التعليمات"
    ]
  },
  {
    "id": 106,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is robot motion planning for a robot arm with multiple joints significantly more complex than 2D grid pathfinding?",
    "options": [
      "The search space has one continuous dimension for each joint angle",
      "Robot arms cannot execute rotation actions",
      "Robot arms have no initial state",
      "The cost of arm movement is always negative"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'The search space has one continuous dimension for each joint angle'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'The search space has one continuous dimension for each joint angle' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "لماذا يعتبر تخطيط حركة الروبوت لذراع الروبوت ذات المفاصل المتعددة أكثر تعقيدًا بكثير من تحديد مسار الشبكة ثنائية الأبعاد؟",
    "optionsAr": [
      "مساحة البحث لها بعد واحد مستمر لكل زاوية مشتركة",
      "لا يمكن لأذرع الروبوت تنفيذ إجراءات التدوير",
      "أذرع الروبوت ليس لها حالة أولية",
      "تكلفة حركة الذراع دائما سلبية"
    ]
  },
  {
    "id": 107,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In automatic assembly sequencing for manufacturing objects, what makes finding legal actions particularly computationally expensive?",
    "options": [
      "Parts cannot be painted beforehand",
      "Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning",
      "Assembly lines always have zero-cost actions",
      "The state space is always completely acyclic"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في تسلسل التجميع التلقائي لأشياء التصنيع، ما الذي يجعل العثور على الإجراءات القانونية مكلفًا من الناحية الحسابية بشكل خاص؟",
    "optionsAr": [
      "لا يمكن طلاء الأجزاء مسبقًا",
      "يتطلب اختبار إمكانية إضافة جزء مادي دون تصادم هندسي تفكيرًا مكانيًا معقدًا",
      "خطوط التجميع لها دائمًا إجراءات بدون تكلفة",
      "مساحة الحالة دائمًا ما تكون غير دورية تمامًا"
    ]
  },
  {
    "id": 108,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In computational biology, which search problem aims to find a sequence of amino acids that folds into a specific 3D structure to cure diseases?",
    "options": [
      "Protein design",
      "Sokoban routing",
      "Touring problem",
      "Grid world navigation"
    ],
    "correctAnswer": 0,
    "explanationAr": "البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية للبحث بالعرض، ويعد الطريقة المفضلة عند جهل عمق الحل.",
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits.",
    "questionAr": "في علم الأحياء الحسابي، ما هي مشكلة البحث التي تهدف إلى العثور على سلسلة من الأحماض الأمينية التي يمكن طيها في بنية ثلاثية الأبعاد محددة لعلاج الأمراض؟",
    "optionsAr": [
      "تصميم البروتين",
      "توجيه سوكوبان",
      "مشكلة التجول",
      "شبكة الملاحة العالمية"
    ]
  },
  {
    "id": 109,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the key conceptual distinction between a state space graph and a search tree?",
    "options": [
      "The state space describes physical configurations of the world, while the search tree describes search paths between states",
      "The search tree contains physical cities, while the state space contains abstract nodes",
      "State space graphs can never contain loops, while search trees always contain loops",
      "There is no difference; the two terms are identical"
    ],
    "correctAnswer": 0,
    "explanationAr": "مساحة الحالات تمثل جميع التكوينات الممكنة للمسألة، بينما شجرة البحث تمثل المسارات المحددة التي يستكشفها الوكيل والتي قد تتضمن حالات مكررة في فروع مختلفة.",
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata.",
    "questionAr": "ما هو الفرق المفاهيمي الرئيسي بين الرسم البياني الفضائي للحالة وشجرة البحث؟",
    "optionsAr": [
      "تصف مساحة الحالة التكوينات المادية للعالم، بينما تصف شجرة البحث مسارات البحث بين الحالات",
      "تحتوي شجرة البحث على مدن فعلية، بينما تحتوي مساحة الحالة على عقد مجردة",
      "لا يمكن أبدًا أن تحتوي الرسوم البيانية الفضائية للحالة على حلقات، بينما تحتوي أشجار البحث دائمًا على حلقات",
      "لا يوجد فرق. المصطلحين متطابقان"
    ]
  },
  {
    "id": 110,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In search algorithms, each node in the search tree is represented by a data structure containing how many core components?",
    "options": [
      "Two components",
      "Three components",
      "Four components",
      "Six components"
    ],
    "correctAnswer": 2,
    "explanationAr": "مساحة الحالات تمثل جميع التكوينات الممكنة للمسألة، بينما شجرة البحث تمثل المسارات المحددة التي يستكشفها الوكيل والتي قد تتضمن حالات مكررة في فروع مختلفة.",
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata.",
    "questionAr": "في خوارزميات البحث، يتم تمثيل كل عقدة في شجرة البحث بواسطة بنية بيانات تحتوي على عدد المكونات الأساسية؟",
    "optionsAr": [
      "مكونين",
      "ثلاثة مكونات",
      "أربعة مكونات",
      "ستة مكونات"
    ]
  },
  {
    "id": 111,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Which of the following correctly lists the four components of a search tree node data structure?",
    "options": [
      "STATE, PARENT, ACTION, PATH-COST",
      "SENSOR, ACTUATOR, PROGRAM, REWARD",
      "INPUT, OUTPUT, WEIGHT, BIAS",
      "DEPTH, WIDTH, HEIGHT, VOLUME"
    ],
    "correctAnswer": 0,
    "explanationAr": "مساحة الحالات تمثل جميع التكوينات الممكنة للمسألة، بينما شجرة البحث تمثل المسارات المحددة التي يستكشفها الوكيل والتي قد تتضمن حالات مكررة في فروع مختلفة.",
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata.",
    "questionAr": "أي مما يلي يسرد بشكل صحيح المكونات الأربعة لبنية بيانات عقدة شجرة البحث؟",
    "optionsAr": [
      "الدولة، الوالد، الإجراء، تكلفة المسار",
      "المستشعر، المشغل، البرنامج، المكافأة",
      "المدخلات والمخرجات والوزن والتحيز",
      "العمق، العرض، الارتفاع، الحجم"
    ]
  },
  {
    "id": 112,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the primary function of the PARENT pointer stored inside each node data structure in a search tree?",
    "options": [
      "It allows the algorithm to trace backward from the goal node to recover the complete solution path",
      "It determines the heuristic value h(n)",
      "It calculates the branching factor b",
      "It resets the search when memory runs out"
    ],
    "correctAnswer": 0,
    "explanationAr": "مساحة الحالات تمثل جميع التكوينات الممكنة للمسألة، بينما شجرة البحث تمثل المسارات المحددة التي يستكشفها الوكيل والتي قد تتضمن حالات مكررة في فروع مختلفة.",
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata.",
    "questionAr": "ما هي الوظيفة الأساسية لمؤشر PARENT المخزن داخل كل بنية بيانات عقدة في شجرة البحث؟",
    "optionsAr": [
      "يسمح للخوارزمية بالتتبع للخلف من عقدة الهدف لاستعادة مسار الحل الكامل",
      "إنه يحدد القيمة الإرشادية h(n)",
      "يقوم بحساب عامل التفرع ب",
      "يقوم بإعادة ضبط البحث عند نفاد الذاكرة"
    ]
  },
  {
    "id": 113,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The collection of all nodes that have been generated but not yet expanded in a search tree is called the:",
    "options": [
      "Reached set",
      "Frontier (or open list)",
      "State space",
      "Solution path"
    ],
    "correctAnswer": 1,
    "explanationAr": "مساحة الحالات تمثل جميع التكوينات الممكنة للمسألة، بينما شجرة البحث تمثل المسارات المحددة التي يستكشفها الوكيل والتي قد تتضمن حالات مكررة في فروع مختلفة.",
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata.",
    "questionAr": "مجموعة كافة العقد التي تم إنشاؤها ولكن لم يتم توسيعها بعد في شجرة البحث تسمى:",
    "optionsAr": [
      "وصلت المجموعة",
      "الحدود (أو القائمة المفتوحة)",
      "مساحة الدولة",
      "مسار الحل"
    ]
  },
  {
    "id": 114,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Which frontier queue operation removes and returns the top node according to the queue's ordering strategy?",
    "options": [
      "TOP(frontier)",
      "POP(frontier)",
      "ADD(node, frontier)",
      "IS-EMPTY(frontier)"
    ],
    "correctAnswer": 1,
    "explanationAr": "الحدود (Frontier / Open list) تمثل مجموعة جميع العقد التي تم توليدها ولكن لم يتم التوسع فيها واستكشاف أبنائها بعد.",
    "explanationEn": "The frontier (or open list) is the collection of all leaf nodes generated so far that have not yet been expanded.",
    "questionAr": "ما هي عملية قائمة الانتظار الحدودية التي تقوم بإزالة العقدة العليا وإرجاعها وفقًا لاستراتيجية ترتيب قائمة الانتظار؟",
    "optionsAr": [
      "أعلى (الحدود)",
      "بوب (الحدود)",
      "ADD(عقدة، حدود)",
      "IS-فارغة (الحدود)"
    ]
  },
  {
    "id": 115,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The separation property of graph search illustrates that the frontier acts as a boundary separating which two regions of the state space graph?",
    "options": [
      "The start node and the root node",
      "The interior (fully expanded states) and the exterior (unreached states)",
      "The goal states and the initial states",
      "Admissible states and inadmissible states"
    ],
    "correctAnswer": 1,
    "explanationAr": "الحدود (Frontier / Open list) تمثل مجموعة جميع العقد التي تم توليدها ولكن لم يتم التوسع فيها واستكشاف أبنائها بعد.",
    "explanationEn": "The frontier (or open list) is the collection of all leaf nodes generated so far that have not yet been expanded.",
    "questionAr": "توضح خاصية الفصل للبحث في الرسم البياني أن الحدود تعمل كحدود تفصل بين منطقتين من الرسم البياني الفضائي للحالة؟",
    "optionsAr": [
      "عقدة البداية والعقدة الجذرية",
      "الداخلية (الحالات الموسعة بالكامل) والخارجية (الحالات التي لم يتم الوصول إليها)",
      "حالات الهدف والحالات الأولية",
      "الدول المقبولة والدول غير المقبولة"
    ]
  },
  {
    "id": 116,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In search algorithms, a path that forms a loop by returning to a previously visited state (e.g., Arad -> Sibiu -> Arad) is known as a:",
    "options": [
      "Heuristic path",
      "Cycle (or loopy path)",
      "Optimal branch",
      "Dominant edge"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Cycle (or loopy path)'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Cycle (or loopy path)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في خوارزميات البحث، المسار الذي يشكل حلقة من خلال العودة إلى الحالة التي تمت زيارتها مسبقًا (على سبيل المثال، Arad -> Sibiu -> Arad) يُعرف باسم:",
    "optionsAr": [
      "المسار الإرشادي",
      "دورة (أو مسار مجنون)",
      "الفرع الأمثل",
      "الحافة المهيمنة"
    ]
  },
  {
    "id": 117,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the crucial algorithmic difference between a 'graph search' algorithm and a 'tree-like search' algorithm?",
    "options": [
      "Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not",
      "Graph search only runs on planar maps, while tree-like search runs on trees",
      "Tree-like search always uses a priority queue, while graph search uses a stack",
      "Graph search cannot find optimal paths"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "ما هو الفرق الخوارزمي الحاسم بين خوارزمية \"بحث الرسم البياني\" وخوارزمية \"البحث الشبيه بالشجرة\"؟",
    "optionsAr": [
      "يحتفظ بحث الرسم البياني بجدول تم الوصول إليه لاكتشاف المسارات الزائدة عن الحاجة وإزالتها، في حين أن البحث الشبيه بالشجرة لا",
      "يتم تشغيل بحث الرسم البياني فقط على الخرائط المستوية، بينما يتم تشغيل البحث المشابه للشجرة على الأشجار",
      "يستخدم البحث الشبيه بالشجرة دائمًا قائمة انتظار ذات أولوية، بينما يستخدم البحث في الرسم البياني المكدس",
      "لا يمكن لبحث الرسم البياني العثور على المسارات المثالية"
    ]
  },
  {
    "id": 118,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Search algorithms are formally evaluated along four fundamental dimensions: Completeness, Cost Optimality, Time Complexity, and:",
    "options": [
      "Expandability",
      "Space Complexity",
      "Heuristic Slope",
      "Branching Depth"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Space Complexity'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Space Complexity' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "يتم تقييم خوارزميات البحث رسميًا وفقًا لأربعة أبعاد أساسية: الاكتمال، وتحسين التكلفة، وتعقيد الوقت، و:",
    "optionsAr": [
      "قابلية التوسيع",
      "تعقيد الفضاء",
      "المنحدر الإرشادي",
      "عمق المتفرعة"
    ]
  },
  {
    "id": 119,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A search algorithm is termed 'complete' if it is guaranteed to:",
    "options": [
      "Find a solution in less than one second",
      "Find a solution whenever one exists, and correctly report failure when there is none",
      "Use no more than O(bm) memory",
      "Expand all nodes in the state space graph"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Find a solution whenever one exists, and correctly report failure when there is none'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Find a solution whenever one exists, and correctly report failure when there is none' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "يُطلق على خوارزمية البحث اسم \"كاملة\" إذا تم ضمانها لـ:",
    "optionsAr": [
      "ابحث عن الحل في أقل من ثانية",
      "ابحث عن حل عندما يكون موجودًا، وقم بالإبلاغ بشكل صحيح عن الفشل في حالة عدم وجوده",
      "لا تستخدم أكثر من ذاكرة O(bm)",
      "قم بتوسيع كافة العقد في الرسم البياني الفضائي للحالة"
    ]
  },
  {
    "id": 120,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A search algorithm is described as 'cost-optimal' if it:",
    "options": [
      "Expands the lowest number of total nodes",
      "Always finds a solution path with the lowest path cost among all possible solutions",
      "Operates with linear memory complexity O(bd)",
      "Evaluates only admissible heuristic functions"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Always finds a solution path with the lowest path cost among all possible solutions'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Always finds a solution path with the lowest path cost among all possible solutions' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "توصف خوارزمية البحث بأنها \"التكلفة المثلى\" إذا كانت:",
    "optionsAr": [
      "يوسع أقل عدد من العقد الإجمالية",
      "يجد دائمًا مسار الحل بأقل تكلفة للمسار بين جميع الحلول الممكنة",
      "تعمل مع تعقيد الذاكرة الخطية O(bd)",
      "يقيم فقط وظائف ارشادية مقبولة"
    ]
  },
  {
    "id": 121,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the theoretical complexity analysis of search algorithms, what does the parameter 'b' represent?",
    "options": [
      "The depth of the shallowest goal",
      "The maximum branching factor of the search tree",
      "The total number of cycles in the graph",
      "The straight-line distance to Bucharest"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'The maximum branching factor of the search tree'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'The maximum branching factor of the search tree' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في تحليل التعقيد النظري لخوارزميات البحث، ماذا تمثل المعلمة \"b\"؟",
    "optionsAr": [
      "عمق المرمى الضحل",
      "الحد الأقصى لعامل التفرع لشجرة البحث",
      "إجمالي عدد الدورات في الرسم البياني",
      "مسافة الخط المستقيم إلى بوخارست"
    ]
  },
  {
    "id": 122,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In search complexity formulas, what does the parameter 'd' denote?",
    "options": [
      "The maximum depth of the search tree (can be infinite)",
      "The depth of the shallowest optimal solution",
      "The diameter of the graph",
      "The number of action costs equal to 1"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'The depth of the shallowest optimal solution'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'The depth of the shallowest optimal solution' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في صيغ تعقيد البحث، ما الذي تشير إليه المعلمة \"d\"؟",
    "optionsAr": [
      "أقصى عمق لشجرة البحث (يمكن أن يكون لا نهائي)",
      "عمق الحل الأمثل الضحل",
      "قطر الرسم البياني",
      "عدد تكاليف الإجراء يساوي 1"
    ]
  },
  {
    "id": 123,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In search complexity formulas, what does the parameter 'm' denote?",
    "options": [
      "The maximum length of any path in the state space (which may be infinite)",
      "The number of misplaced tiles in the 8-puzzle",
      "The minimum step cost epsilon",
      "The number of goal states"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'The maximum length of any path in the state space (which may be infinite)'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'The maximum length of any path in the state space (which may be infinite)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في صيغ تعقيد البحث، ما الذي تشير إليه المعلمة \"m\"؟",
    "optionsAr": [
      "الحد الأقصى لطول أي مسار في مساحة الحالة (والذي قد يكون لا نهائيًا)",
      "عدد البلاطات في غير مكانها في اللغز الـ 8",
      "الحد الأدنى لتكلفة الخطوة إبسيلون",
      "عدد حالات الهدف"
    ]
  },
  {
    "id": 124,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The maximum number of steps required to get from any state to any other state along the shortest path between them in a state-space graph is called the:",
    "options": [
      "Radius",
      "Diameter",
      "Perimeter",
      "Branching index"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Diameter'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Diameter' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "الحد الأقصى لعدد الخطوات المطلوبة للانتقال من أي ولاية إلى أي ولاية أخرى على طول أقصر مسار بينهما في الرسم البياني لمساحة الولاية يسمى:",
    "optionsAr": [
      "نصف القطر",
      "القطر",
      "محيط",
      "مؤشر المتفرعة"
    ]
  },
  {
    "id": 125,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In a 10x10 obstacle-free grid world where an agent can move in 8 directions, why is eliminating redundant paths critical for search speed?",
    "options": [
      "The grid has only 100 cells, but the number of paths of length 9 is over 100 million",
      "10x10 grids cannot be solved using breadth-first search",
      "Moving in 8 directions makes the environment continuous",
      "The agent's sensors fail after 9 steps"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في عالم شبكي خالٍ من العوائق 10x10 حيث يمكن للوكيل التحرك في 8 اتجاهات، لماذا يعد التخلص من المسارات الزائدة أمرًا بالغ الأهمية لسرعة البحث؟",
    "optionsAr": [
      "تحتوي الشبكة على 100 خلية فقط، لكن عدد المسارات بطول 9 يزيد عن 100 مليون",
      "لا يمكن حل شبكات 10x10 باستخدام بحث العرض الأول",
      "التحرك في 8 اتجاهات يجعل البيئة مستمرة",
      "أجهزة استشعار الوكيل تفشل بعد 9 خطوات"
    ]
  },
  {
    "id": 126,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What node expansion rule governs Breadth-First Search (BFS)?",
    "options": [
      "Expand the deepest unexpanded node in the frontier",
      "Expand the shallowest unexpanded node in the frontier",
      "Expand the node with the lowest heuristic value h(n)",
      "Expand the node with the largest path cost g(n)"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت تكاليف الخطوات، ولكنه يستهلك ذاكرة أسية O(b^d).",
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d).",
    "questionAr": "ما هي قاعدة توسيع العقدة التي تحكم البحث بالعرض الأول (BFS)؟",
    "optionsAr": [
      "قم بتوسيع أعمق عقدة غير موسعة في الحدود",
      "قم بتوسيع العقدة الضحلة غير الموسعة في الحدود",
      "قم بتوسيع العقدة ذات القيمة الإرشادية الأقل h(n)",
      "قم بتوسيع العقدة ذات تكلفة المسار الأكبر g(n)"
    ]
  },
  {
    "id": 127,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Which data structure is conventionally used to implement the frontier queue in Breadth-First Search (BFS)?",
    "options": [
      "LIFO stack",
      "FIFO queue",
      "Priority queue ordered by h(n)",
      "Hash table"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت تكاليف الخطوات، ولكنه يستهلك ذاكرة أسية O(b^d).",
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d).",
    "questionAr": "ما هي بنية البيانات المستخدمة بشكل تقليدي لتنفيذ قائمة الانتظار الحدودية في بحث العرض الأول (BFS)؟",
    "optionsAr": [
      "مكدس LIFO",
      "قائمة انتظار FIFO",
      "قائمة انتظار الأولوية مرتبة بواسطة h(n)",
      "جدول التجزئة"
    ]
  },
  {
    "id": 128,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why can Breadth-First Search apply an 'early goal test' (checking if a node is a goal as soon as it is generated, rather than when popped)?",
    "options": [
      "Because BFS never expands nodes with equal costs",
      "Because any child generated at depth d is guaranteed to be among the shallowest paths to that state",
      "Because priority queues require early goal testing",
      "Because early goal testing reduces the branching factor to 1"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت تكاليف الخطوات، ولكنه يستهلك ذاكرة أسية O(b^d).",
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d).",
    "questionAr": "لماذا يمكن لبحث العرض الأول تطبيق \"اختبار الهدف المبكر\" (التحقق مما إذا كانت العقدة هدفًا بمجرد إنشائها، وليس عند ظهورها)؟",
    "optionsAr": [
      "لأن BFS لا يقوم أبدًا بتوسيع العقد بتكاليف متساوية",
      "لأن أي طفل يتم إنشاؤه على العمق d يضمن أن يكون من بين المسارات الأكثر ضحالة لتلك الحالة",
      "لأن قوائم الانتظار ذات الأولوية تتطلب اختبار الهدف مبكرًا",
      "لأن اختبار الهدف المبكر يقلل من عامل التفرع إلى 1"
    ]
  },
  {
    "id": 129,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the worst-case space complexity of Breadth-First Search for branching factor b and solution depth d?",
    "options": [
      "O(bd)",
      "O(b^d)",
      "O(bm)",
      "O(d^b)"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت تكاليف الخطوات، ولكنه يستهلك ذاكرة أسية O(b^d).",
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d).",
    "questionAr": "ما هو التعقيد الفضائي الأسوأ في البحث عن العرض الأول لعامل التفرع b وعمق الحل d؟",
    "optionsAr": [
      "يا(دينار بحريني)",
      "يا(ب^د)",
      "يا(بم)",
      "يا (د ^ ب)"
    ]
  },
  {
    "id": 130,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is memory requirement (space complexity) typically considered a far more serious practical bottleneck than execution time for Breadth-First Search?",
    "options": [
      "Memory access is slower than CPU processing",
      "All generated nodes at level d must remain stored in memory, consuming gigabytes or terabytes rapidly",
      "BFS empties the memory buffer after every expansion",
      "FIFO queues can only hold a maximum of 1,000 nodes in modern operating systems"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت تكاليف الخطوات، ولكنه يستهلك ذاكرة أسية O(b^d).",
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d).",
    "questionAr": "لماذا تعتبر متطلبات الذاكرة (تعقيد المساحة) عادةً بمثابة عنق الزجاجة العملي الأكثر خطورة بكثير من وقت التنفيذ للبحث الموسع؟",
    "optionsAr": [
      "الوصول إلى الذاكرة أبطأ من معالجة وحدة المعالجة المركزية",
      "يجب أن تظل كافة العقد التي تم إنشاؤها في المستوى d مخزنة في الذاكرة، مما يؤدي إلى استهلاك الجيجابايت أو التيرابايت بسرعة",
      "يقوم BFS بإفراغ المخزن المؤقت للذاكرة بعد كل توسيع",
      "يمكن أن تحتوي قوائم انتظار FIFO على 1000 عقدة كحد أقصى في أنظمة التشغيل الحديثة"
    ]
  },
  {
    "id": 131,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Which algorithm is equivalent to Dijkstra's shortest path algorithm in the AI search literature?",
    "options": [
      "Depth-First Search",
      "Uniform-Cost Search (UCS)",
      "Greedy Best-First Search",
      "Iterative Deepening Search"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Uniform-Cost Search (UCS)'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Uniform-Cost Search (UCS)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "ما هي الخوارزمية التي تعادل خوارزمية Dijkstra للمسار الأقصر في أدبيات بحث الذكاء الاصطناعي؟",
    "optionsAr": [
      "العمق-البحث الأول",
      "بحث التكلفة الموحدة (UCS)",
      "الجشع أفضل البحث الأول",
      "بحث التعميق التكراري"
    ]
  },
  {
    "id": 132,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In Uniform-Cost Search, which node from the frontier is selected for expansion at each step?",
    "options": [
      "The node with the deepest level in the tree",
      "The node with the lowest path cost g(n) from the start state",
      "The node with the largest number of children",
      "The node generated most recently"
    ],
    "correctAnswer": 1,
    "explanationAr": "بحث التكلفة الموحدة (UCS) يوسع دائماً العقدة ذات أقل تكلفة تراكمية g(n) باستخدام طابور أولوية، ويضمن إيجاد الحل الأمثل متى كانت تكاليف الخطوات موجبة.",
    "explanationEn": "Uniform-Cost Search (UCS) expands the node with lowest path cost g(n) via priority queue, guaranteeing cost-optimality with non-negative step costs.",
    "questionAr": "في بحث التكلفة الموحدة، ما هي العقدة من الحدود التي تم تحديدها للتوسع في كل خطوة؟",
    "optionsAr": [
      "العقدة ذات المستوى الأعمق في الشجرة",
      "العقدة ذات أقل تكلفة للمسار g(n) من حالة البداية",
      "العقدة التي تحتوي على أكبر عدد من الأطفال",
      "العقدة التي تم إنشاؤها مؤخرًا"
    ]
  },
  {
    "id": 133,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why MUST Uniform-Cost Search perform its goal test when a node is POPPED from the frontier (late test), rather than when it is generated (early test)?",
    "options": [
      "To prevent memory overflow in the priority queue",
      "Because a cheaper path to the goal might be discovered later before the goal is expanded",
      "Because priority queues do not support early insertion",
      "Because the start node has cost g(n) = 0"
    ],
    "correctAnswer": 1,
    "explanationAr": "بحث التكلفة الموحدة (UCS) يوسع دائماً العقدة ذات أقل تكلفة تراكمية g(n) باستخدام طابور أولوية، ويضمن إيجاد الحل الأمثل متى كانت تكاليف الخطوات موجبة.",
    "explanationEn": "Uniform-Cost Search (UCS) expands the node with lowest path cost g(n) via priority queue, guaranteeing cost-optimality with non-negative step costs.",
    "questionAr": "لماذا يجب أن يقوم بحث التكلفة الموحدة بإجراء اختبار الهدف الخاص به عند ظهور العقدة من الحدود (اختبار متأخر)، وليس عند إنشائها (اختبار مبكر)؟",
    "optionsAr": [
      "لمنع تجاوز الذاكرة في قائمة الانتظار ذات الأولوية",
      "لأن الطريق الأرخص للوصول إلى الهدف قد يتم اكتشافه لاحقاً قبل توسيع الهدف",
      "لأن قوائم الانتظار ذات الأولوية لا تدعم الإدراج المبكر",
      "لأن تكلفة عقدة البداية g(n) = 0"
    ]
  },
  {
    "id": 134,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What node expansion rule characterizes Depth-First Search (DFS)?",
    "options": [
      "Expand the shallowest unexpanded node",
      "Expand the deepest unexpanded node in the frontier",
      "Expand the node with the highest heuristic value",
      "Expand nodes in random order"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعمق أولاً (DFS) يستكشف الفروع لأعمق حد ممكن عبر مكدس LIFO. ميزته الكبرى هي انخفاض استهلاك الذاكرة الخطي O(bm)، لكنه ليس مثالياً للتكلفة.",
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal.",
    "questionAr": "ما هي قاعدة توسيع العقدة التي تميز البحث العميق الأول (DFS)؟",
    "optionsAr": [
      "قم بتوسيع العقدة الضحلة غير الموسعة",
      "قم بتوسيع أعمق عقدة غير موسعة في الحدود",
      "قم بتوسيع العقدة ذات القيمة الإرشادية الأعلى",
      "قم بتوسيع العقد بترتيب عشوائي"
    ]
  },
  {
    "id": 135,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Which data structure is utilized to maintain the frontier in standard Depth-First Search?",
    "options": [
      "LIFO stack",
      "FIFO queue",
      "Priority queue ordered by g(n)",
      "Binary min-heap"
    ],
    "correctAnswer": 0,
    "explanationAr": "البحث بالعمق أولاً (DFS) يستكشف الفروع لأعمق حد ممكن عبر مكدس LIFO. ميزته الكبرى هي انخفاض استهلاك الذاكرة الخطي O(bm)، لكنه ليس مثالياً للتكلفة.",
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal.",
    "questionAr": "ما هي بنية البيانات المستخدمة للحفاظ على الحدود في البحث القياسي للعمق الأول؟",
    "optionsAr": [
      "مكدس LIFO",
      "قائمة انتظار FIFO",
      "قائمة الانتظار ذات الأولوية مرتبة حسب g(n)",
      "الحد الأدنى الثنائي"
    ]
  },
  {
    "id": 136,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the primary practical advantage of tree-like Depth-First Search over Breadth-First Search?",
    "options": [
      "It is always guaranteed to find the optimal cost solution",
      "It has a modest linear space complexity of O(bm)",
      "It never visits redundant paths or cycles",
      "Its time complexity is always O(d)"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت تكاليف الخطوات، ولكنه يستهلك ذاكرة أسية O(b^d).",
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d).",
    "questionAr": "ما هي الميزة العملية الأساسية لبحث العمق أولاً الشبيه بالشجرة مقارنة ببحث العرض أولًا؟",
    "optionsAr": [
      "نضمن دائمًا إيجاد الحل الأمثل للتكلفة",
      "لها تعقيد فضاء خطي متواضع قدره O(bm)",
      "لا يقوم أبدًا بزيارة المسارات أو الدورات الزائدة عن الحاجة",
      "التعقيد الزمني هو دائمًا O(d)"
    ]
  },
  {
    "id": 137,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is standard tree-like Depth-First Search incomplete in state spaces with infinite depth or cycles?",
    "options": [
      "Because the stack runs out of memory immediately",
      "Because it can follow an infinite branch or cycle forever without ever exploring other alternatives",
      "Because the goal test cannot be performed at depth greater than 10",
      "Because step costs are strictly positive"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث بالعمق أولاً (DFS) يستكشف الفروع لأعمق حد ممكن عبر مكدس LIFO. ميزته الكبرى هي انخفاض استهلاك الذاكرة الخطي O(bm)، لكنه ليس مثالياً للتكلفة.",
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal.",
    "questionAr": "لماذا لا يكتمل البحث القياسي في العمق-الأول الشبيه بالشجرة في مساحات الحالة ذات العمق أو الدورات اللانهائية؟",
    "optionsAr": [
      "لأن الذاكرة المكدسة نفدت على الفور",
      "لأنه يمكن أن يتبع فرعًا أو دورة لا نهائية إلى الأبد دون استكشاف بدائل أخرى",
      "لأنه لا يمكن إجراء اختبار الهدف على عمق أكبر من 10",
      "لأن تكاليف الخطوة إيجابية تمامًا"
    ]
  },
  {
    "id": 138,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In backtracking search (a memory-efficient variant of DFS), how many successor nodes are generated at a time?",
    "options": [
      "Exactly one successor",
      "All b successors",
      "b / 2 successors",
      "Zero successors"
    ],
    "correctAnswer": 0,
    "explanationAr": "البحث بالعمق أولاً (DFS) يستكشف الفروع لأعمق حد ممكن عبر مكدس LIFO. ميزته الكبرى هي انخفاض استهلاك الذاكرة الخطي O(bm)، لكنه ليس مثالياً للتكلفة.",
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal.",
    "questionAr": "في البحث التراجعي (متغير DFS موفر للذاكرة)، ما عدد العقد اللاحقة التي يتم إنشاؤها في المرة الواحدة؟",
    "optionsAr": [
      "خليفة واحد بالضبط",
      "جميع ب خلفاء",
      "ب/ 2 خلفاء",
      "صفر خلفاء"
    ]
  },
  {
    "id": 139,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In Depth-Limited Search (DLS), what occurs when a search branch reaches the predefined depth limit l?",
    "options": [
      "The entire program crashes with failure",
      "Nodes at depth l are treated as if they have no successors",
      "The algorithm switches immediately to BFS",
      "The heuristic function is doubled"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Nodes at depth l are treated as if they have no successors'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Nodes at depth l are treated as if they have no successors' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في البحث المحدود العمق (DLS)، ماذا يحدث عندما يصل فرع البحث إلى حد العمق المحدد مسبقًا؟",
    "optionsAr": [
      "البرنامج بأكمله يتعطل مع الفشل",
      "يتم التعامل مع العقد في العمق l كما لو لم يكن لها خلفاء",
      "تتحول الخوارزمية فورًا إلى BFS",
      "يتم مضاعفة وظيفة الكشف عن مجريات الأمور"
    ]
  },
  {
    "id": 140,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "According to the pseudocode in Figure 3.12, Depth-Limited Search returns which three possible types of values?",
    "options": [
      "Success, Error, Timeout",
      "Solution node, Failure, or Cutoff",
      "True, False, Null",
      "Optimal, Suboptimal, Infeasible"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'Solution node, Failure, or Cutoff'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Solution node, Failure, or Cutoff' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "وفقًا للكود الكاذب في الشكل 3.12، ما هي الأنواع الثلاثة المحتملة من القيم؟",
    "optionsAr": [
      "نجاح، خطأ، مهلة",
      "عقدة الحل أو الفشل أو القطع",
      "صحيح، خطأ، لاغ",
      "الأمثل، دون الأمثل، غير ممكن"
    ]
  },
  {
    "id": 141,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "How does Iterative Deepening Search (IDS) determine the depth limit l during its execution?",
    "options": [
      "It starts at infinity and decreases by 1 each step",
      "It systematically tries increasing depth limits: first 0, then 1, then 2, and so on",
      "It sets the depth limit equal to the heuristic value h(n)",
      "It generates a random depth limit between 1 and 100"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية للبحث بالعرض، ويعد الطريقة المفضلة عند جهل عمق الحل.",
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits.",
    "questionAr": "كيف يحدد بحث التعميق التكراري (IDS) حد العمق l أثناء تنفيذه؟",
    "optionsAr": [
      "يبدأ من ما لا نهاية ويتناقص بمقدار 1 في كل خطوة",
      "فهو يحاول بشكل منهجي زيادة حدود العمق: أولاً 0، ثم 1، ثم 2، وهكذا",
      "يقوم بتعيين حد العمق مساويًا للقيمة الإرشادية h(n)",
      "يقوم بإنشاء حد عمق عشوائي بين 1 و 100"
    ]
  },
  {
    "id": 142,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the memory (space) complexity of Iterative Deepening Search when a solution exists at depth d with branching factor b?",
    "options": [
      "O(b^d)",
      "O(bd)",
      "O(d^b)",
      "O(m!)"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية للبحث بالعرض، ويعد الطريقة المفضلة عند جهل عمق الحل.",
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits.",
    "questionAr": "ما هو تعقيد الذاكرة (المساحة) للبحث التعميق التكراري عندما يوجد حل في العمق d مع عامل التفرع b؟",
    "optionsAr": [
      "يا(ب^د)",
      "يا(دينار بحريني)",
      "يا (د ^ ب)",
      "يا (م!)"
    ]
  },
  {
    "id": 143,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is the repeated generation of upper-level nodes in Iterative Deepening Search not a significant computational waste in trees with branching factor b >= 2?",
    "options": [
      "Because the upper nodes are permanently stored in cache",
      "Because the vast majority of nodes in an exponential tree reside in the bottom level d",
      "Because the processor runs 10 times faster on repeated nodes",
      "Because upper nodes have a cost of zero"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية للبحث بالعرض، ويعد الطريقة المفضلة عند جهل عمق الحل.",
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits.",
    "questionAr": "لماذا لا يعد التوليد المتكرر لعقد المستوى العلوي في بحث التعميق التكراري هدرًا حسابيًا كبيرًا في الأشجار ذات عامل المتفرعة b >= 2؟",
    "optionsAr": [
      "لأن العقد العلوية مخزنة بشكل دائم في ذاكرة التخزين المؤقت",
      "لأن الغالبية العظمى من العقد في الشجرة الأسية تقع في المستوى السفلي d",
      "لأن المعالج يعمل بشكل أسرع 10 مرات على العقد المتكررة",
      "لأن تكلفة العقد العليا صفر"
    ]
  },
  {
    "id": 144,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the fundamental operational principle of Bidirectional Search?",
    "options": [
      "It runs Breadth-First Search and Depth-First Search in alternating turns",
      "It simultaneously searches forward from the initial state and backward from the goal state",
      "It searches the left subtree and right subtree simultaneously",
      "It evaluates both admissible and inadmissible heuristics concurrently"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار الصحيح هو 'It simultaneously searches forward from the initial state and backward from the goal state'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'It simultaneously searches forward from the initial state and backward from the goal state' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "ما هو المبدأ التشغيلي الأساسي للبحث ثنائي الاتجاه؟",
    "optionsAr": [
      "يتم تشغيل بحث العرض الأول وبحث العمق أولاً بالتناوب",
      "يقوم بالبحث في نفس الوقت للأمام من الحالة الأولية وللخلف من حالة الهدف",
      "يقوم بالبحث في الشجرة الفرعية اليسرى والشجرة الفرعية اليمنى في وقت واحد",
      "يقوم بتقييم كل من الاستدلالات المقبولة وغير المقبولة في وقت واحد"
    ]
  },
  {
    "id": 145,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the primary computational motivation for using Bidirectional Search over unidirectional search?",
    "options": [
      "Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)",
      "It completely eliminates the need for sensor data",
      "It requires zero memory because frontiers never store states",
      "It guarantees that all heuristics become strictly consistent"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "ما هو الدافع الحسابي الأساسي لاستخدام البحث ثنائي الاتجاه بدلاً من البحث أحادي الاتجاه؟",
    "optionsAr": [
      "يستغرق البحث عن حدين للعمق d/2 وقتًا O(2 * b^(d/2))، وهو أصغر بشكل كبير من O(b^d)",
      "إنه يلغي تمامًا الحاجة إلى بيانات المستشعر",
      "لا يتطلب أي ذاكرة لأن الحدود لا تخزن الحالات",
      "إنه يضمن أن جميع الاستدلالات تصبح متسقة بشكل صارم"
    ]
  },
  {
    "id": 146,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In informed search algorithms, what does the heuristic function h(n) estimate?",
    "options": [
      "The exact cost of the path from the root node to node n",
      "The estimated cost of the cheapest path from the state at node n to a goal state",
      "The total number of nodes currently stored in the frontier",
      "The time required to execute the next action in seconds"
    ],
    "correctAnswer": 1,
    "explanationAr": "دالة الهيورستك h(n) هي دالة تقديرية تعطي تقديراً لتكلفة أرخص مسار من الحالة الحالية n إلى حالة الهدف، وتستمد معلوماتها من خصائص المسألة.",
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently.",
    "questionAr": "في خوارزميات البحث المستنيرة، ما الذي تقدره الدالة الإرشادية h(n)؟",
    "optionsAr": [
      "التكلفة الدقيقة للمسار من العقدة الجذرية إلى العقدة n",
      "التكلفة المقدرة لأرخص مسار من الحالة عند العقدة n إلى حالة الهدف",
      "إجمالي عدد العقد المخزنة حاليًا في الحدود",
      "الوقت اللازم لتنفيذ الإجراء التالي بالثواني"
    ]
  },
  {
    "id": 147,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "If node n represents a valid goal state, what is the value of its heuristic function h(n)?",
    "options": [
      "h(n) = 0",
      "h(n) = 1",
      "h(n) = infinity",
      "h(n) = g(n)"
    ],
    "correctAnswer": 0,
    "explanationAr": "دالة الهيورستك h(n) هي دالة تقديرية تعطي تقديراً لتكلفة أرخص مسار من الحالة الحالية n إلى حالة الهدف، وتستمد معلوماتها من خصائص المسألة.",
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently.",
    "questionAr": "إذا كانت العقدة n تمثل حالة هدف صالحة، فما هي قيمة دالتها الإرشادية h(n)؟",
    "optionsAr": [
      "ح(ن) = 0",
      "ح(ن) = 1",
      "ح(ن) = ما لا نهاية",
      "ح(ن) = ز(ن)"
    ]
  },
  {
    "id": 148,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the Romania route-finding problem, what heuristic function is commonly used to estimate distance to Bucharest?",
    "options": [
      "Number of toll booths",
      "Straight-line distance (h_SLD)",
      "Manhattan grid distance",
      "Number of intermediate cities"
    ],
    "correctAnswer": 1,
    "explanationAr": "دالة الهيورستك h(n) هي دالة تقديرية تعطي تقديراً لتكلفة أرخص مسار من الحالة الحالية n إلى حالة الهدف، وتستمد معلوماتها من خصائص المسألة.",
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently.",
    "questionAr": "في مشكلة تحديد الطريق في رومانيا، ما هي الوظيفة الإرشادية المستخدمة عادة لتقدير المسافة إلى بوخارست؟",
    "optionsAr": [
      "عدد أكشاك تحصيل الرسوم",
      "مسافة الخط المستقيم (h_SLD)",
      "مسافة شبكة مانهاتن",
      "عدد المدن الوسيطة"
    ]
  },
  {
    "id": 149,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Greedy Best-First Search selects which node from the frontier for expansion at each step?",
    "options": [
      "The node that has the lowest path cost g(n)",
      "The node that has the lowest heuristic value h(n)",
      "The node with the largest evaluation function f(n)",
      "The node that has been in the queue the longest"
    ],
    "correctAnswer": 1,
    "explanationAr": "الحدود (Frontier / Open list) تمثل مجموعة جميع العقد التي تم توليدها ولكن لم يتم التوسع فيها واستكشاف أبنائها بعد.",
    "explanationEn": "The frontier (or open list) is the collection of all leaf nodes generated so far that have not yet been expanded.",
    "questionAr": "هل يختار البحث الجشع الأفضل-الأول أي عقدة من الحدود للتوسع في كل خطوة؟",
    "optionsAr": [
      "العقدة التي لديها أقل تكلفة للمسار g(n)",
      "العقدة التي لها أقل قيمة إرشادية h(n)",
      "العقدة ذات أكبر دالة تقييم f(n)",
      "العقدة التي ظلت في قائمة الانتظار لفترة أطول"
    ]
  },
  {
    "id": 150,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is Greedy Best-First Search NOT cost-optimal in route finding from Arad to Bucharest?",
    "options": [
      "It cannot handle graphs with cycles",
      "It greedily chooses locally promising steps (like Fagaras) that lead to longer overall routes (450 miles vs 418 miles)",
      "Its priority queue reverses the order of cities",
      "It requires straight-line distance to be negative"
    ],
    "correctAnswer": 1,
    "explanationAr": "البحث الطماع (Greedy Best-First) ليس مثالياً من حيث التكلفة لأنه ينخدع بالخطوات التي تبدو واعدة محلياً استناداً لقيمة h(n) فقط دون النظر للتكلفة التراكمية g(n)، مما يؤدي لمسار أطول.",
    "explanationEn": "Greedy Best-First Search is not cost-optimal because it evaluates nodes solely by heuristic distance to goal h(n), ignoring accumulated path cost g(n) and choosing locally appealing detours.",
    "questionAr": "لماذا يعتبر البحث الجشع الأفضل-الأول ليس الأمثل من حيث التكلفة في العثور على الطريق من أراد إلى بوخارست؟",
    "optionsAr": [
      "لا يمكنه التعامل مع الرسوم البيانية ذات الدورات",
      "يختار بجشع خطوات واعدة محليًا (مثل Fagaras) تؤدي إلى مسارات إجمالية أطول (450 ميلًا مقابل 418 ميلًا)",
      "قائمة انتظار الأولوية الخاصة بها تعكس ترتيب المدن",
      "يتطلب أن تكون مسافة الخط المستقيم سالبة"
    ]
  },
  {
    "id": 151,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In A* search, what is the standard evaluation function f(n) used to rank nodes in the frontier?",
    "options": [
      "f(n) = g(n) - h(n)",
      "f(n) = g(n) + h(n)",
      "f(n) = g(n) * h(n)",
      "f(n) = max(g(n), h(n))"
    ],
    "correctAnswer": 1,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "في بحث A*، ما هي وظيفة التقييم القياسية f(n) المستخدمة لترتيب العقد في الحدود؟",
    "optionsAr": [
      "و(ن) = ز(ن) - ح(ن)",
      "و(ن) = ز(ن) + ح(ن)",
      "و(ن) = ز(ن) * ح(ن)",
      "و(ن) = الحد الأقصى(ز(ن)، ح(ن))"
    ]
  },
  {
    "id": 152,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the A* evaluation function f(n) = g(n) + h(n), what does f(n) represent conceptually?",
    "options": [
      "The exact total execution time of the algorithm",
      "The estimated cost of the best path that continues from the start node through node n to a goal",
      "The depth of the search tree divided by branching factor b",
      "The penalty for visiting a redundant state"
    ],
    "correctAnswer": 1,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "في دالة التقييم A* f(n) = g(n) + h(n)، ماذا تمثل f(n) من الناحية المفاهيمية؟",
    "optionsAr": [
      "إجمالي وقت التنفيذ الدقيق للخوارزمية",
      "التكلفة المقدرة لأفضل مسار يستمر من عقدة البداية عبر العقدة n إلى الهدف",
      "عمق شجرة البحث مقسوما على عامل التفرع ب",
      "عقوبة زيارة دولة زائدة عن الحاجة"
    ]
  },
  {
    "id": 153,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A heuristic function h(n) is formally defined as 'admissible' if:",
    "options": [
      "h(n) is always greater than the true cost h*(n)",
      "h(n) never overestimates the true cost to reach a goal, i.e., h(n) <= h*(n)",
      "h(n) is calculated in polynomial time",
      "h(n) is an integer multiple of the branching factor"
    ],
    "correctAnswer": 1,
    "explanationAr": "الهيورستك المقبول (Admissible) هو الذي لا يبالغ إطلاقاً في تقدير التكلفة الحقيقية المتبقية للوصول إلى الهدف؛ أي يحقق دائماً h(n) <= h*(n).",
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path.",
    "questionAr": "يتم تعريف الدالة الإرشادية h(n) رسميًا على أنها \"مقبولة\" إذا:",
    "optionsAr": [
      "h(n) دائمًا أكبر من التكلفة الحقيقية h*(n)",
      "لا تبالغ h(n) أبدًا في تقدير التكلفة الحقيقية للوصول إلى الهدف، أي h(n) <= h*(n)",
      "يتم حساب h(n) في زمن متعدد الحدود",
      "h(n) هو عدد صحيح مضاعف لعامل التفرع"
    ]
  },
  {
    "id": 154,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Because an admissible heuristic never overestimates the true remaining cost to the goal, it is frequently described as being:",
    "options": [
      "Pessimistic",
      "Optimistic",
      "Random",
      "Inconsistent"
    ],
    "correctAnswer": 1,
    "explanationAr": "الهيورستك المقبول (Admissible) هو الذي لا يبالغ إطلاقاً في تقدير التكلفة الحقيقية المتبقية للوصول إلى الهدف؛ أي يحقق دائماً h(n) <= h*(n).",
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path.",
    "questionAr": "نظرًا لأن الاستدلال المقبول لا يبالغ أبدًا في تقدير التكلفة الحقيقية المتبقية للهدف، فإنه كثيرًا ما يوصف بأنه:",
    "optionsAr": [
      "متشائم",
      "متفائل",
      "عشوائي",
      "غير متناسق"
    ]
  },
  {
    "id": 155,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "According to the fundamental theorem of heuristic search, tree-like A* search is guaranteed to be cost-optimal if:",
    "options": [
      "The heuristic function h(n) is admissible",
      "The branching factor b is less than 2",
      "The state space is finite and acyclic",
      "All action costs are equal to zero"
    ],
    "correctAnswer": 0,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "وفقًا للنظرية الأساسية للبحث الإرشادي، فإن بحث A* الشبيه بالشجرة يضمن أن يكون مثاليًا من حيث التكلفة إذا:",
    "optionsAr": [
      "الدالة الإرشادية h(n) مقبولة",
      "عامل التفرع b أقل من 2",
      "مساحة الحالة محدودة وغير دورية",
      "جميع تكاليف العمل تساوي الصفر"
    ]
  },
  {
    "id": 156,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A heuristic function h(n) is 'consistent' (or monotonic) if for every node n and every successor n' generated by action a:",
    "options": [
      "h(n) <= c(n, a, n') + h(n')",
      "h(n) >= c(n, a, n') + h(n')",
      "h(n) = c(n, a, n')",
      "h(n) + h(n') <= c(n, a, n')"
    ],
    "correctAnswer": 0,
    "explanationAr": "الهيورستك المتسق (Consistent) يحقق متباينة المثلث: تقدير العقدة h(n) لا يتجاوز تكلفة الخطوة إلى العقدة التالية c(n, a, n') مضافاً إليها تقدير تلك العقدة h(n').",
    "explanationEn": "A consistent heuristic satisfies the triangle inequality: h(n) <= c(n, a, n') + h(n'), ensuring f-values never decrease along any search path.",
    "questionAr": "تعتبر الدالة الإرشادية h(n) \"متسقة\" (أو رتيبة) إذا تم إنشاء كل عقدة n وكل عقدة لاحقة n بواسطة الإجراء a:",
    "optionsAr": [
      "h(n) <= c(n, a, n') + h(n')",
      "h(n) >= c(n, a, n') + h(n')",
      "h(n) = c(n, a, n')",
      "ح(ن) + ح(ن') <= ج(ن، أ، ن')"
    ]
  },
  {
    "id": 157,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The mathematical condition for heuristic consistency is a direct application of which geometric principle?",
    "options": [
      "Pythagorean theorem",
      "Triangle inequality",
      "Cauchy-Schwarz inequality",
      "Central limit theorem"
    ],
    "correctAnswer": 1,
    "explanationAr": "دالة الهيورستك h(n) هي دالة تقديرية تعطي تقديراً لتكلفة أرخص مسار من الحالة الحالية n إلى حالة الهدف، وتستمد معلوماتها من خصائص المسألة.",
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently.",
    "questionAr": "الشرط الرياضي للاتساق الإرشادي هو تطبيق مباشر لأي مبدأ هندسي؟",
    "optionsAr": [
      "نظرية فيثاغورس",
      "متباينة المثلث",
      "عدم المساواة بين كوشي وشوارتز",
      "نظرية الحد المركزي"
    ]
  },
  {
    "id": 158,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "What is the relationship between consistent heuristics and admissible heuristics?",
    "options": [
      "Every consistent heuristic is admissible, but not every admissible heuristic is consistent",
      "Every admissible heuristic is consistent, but not vice versa",
      "Consistency and admissibility are completely mutually exclusive",
      "An admissible heuristic can never satisfy the triangle inequality"
    ],
    "correctAnswer": 0,
    "explanationAr": "الهيورستك المقبول (Admissible) هو الذي لا يبالغ إطلاقاً في تقدير التكلفة الحقيقية المتبقية للوصول إلى الهدف؛ أي يحقق دائماً h(n) <= h*(n).",
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path.",
    "questionAr": "ما هي العلاقة بين الاستدلال المتسق والاستدلال المقبول؟",
    "optionsAr": [
      "كل إرشادي متسق مقبول، ولكن ليس كل إرشادي مقبول متسق",
      "كل ارشادي مقبول هو متسق، ولكن ليس العكس",
      "الاتساق والمقبولية متنافيان تمامًا",
      "لا يمكن للاستدلال المقبول أبدًا أن يفي بعدم المساواة في المثلث"
    ]
  },
  {
    "id": 159,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "If C* is the cost of the optimal solution path, which set of nodes is guaranteed to be expanded by A* search with a consistent heuristic?",
    "options": [
      "All nodes with f(n) > C*",
      "All reachable nodes with f(n) < C*",
      "Only nodes whose depth is less than d/2",
      "Every node in the state space graph"
    ],
    "correctAnswer": 1,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "إذا كانت C* هي تكلفة مسار الحل الأمثل، فما هي مجموعة العقد المضمونة للتوسيع بواسطة بحث A* باستخدام إرشادي متسق؟",
    "optionsAr": [
      "جميع العقد مع f(n) > C*",
      "جميع العقد التي يمكن الوصول إليها باستخدام f(n) < C*",
      "فقط العقد التي يقل عمقها عن d/2",
      "كل عقدة في الرسم البياني لمساحة الدولة"
    ]
  },
  {
    "id": 160,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A* with a consistent heuristic is described as 'optimally efficient' because:",
    "options": [
      "It uses less memory than Depth-First Search",
      "No other optimal search algorithm using the same heuristic can expand fewer nodes (up to tie- breaking)",
      "Its run time is strictly linear in the solution depth d",
      "It never computes the value of g(n)"
    ],
    "correctAnswer": 1,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "يتم وصف A* ذو الاستدلال المتسق بأنه \"فعال على النحو الأمثل\" للأسباب التالية:",
    "optionsAr": [
      "يستخدم ذاكرة أقل من بحث العمق الأول",
      "لا توجد خوارزمية بحث مثالية أخرى تستخدم نفس الاستدلال يمكنها توسيع عدد أقل من العقد (حتى كسر التعادل)",
      "وقت تشغيله خطي تمامًا في عمق الحل d",
      "لا يحسب أبدًا قيمة g(n)"
    ]
  },
  {
    "id": 161,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the 8-puzzle problem, the heuristic h1(n) is defined as the:",
    "options": [
      "Sum of horizontal and vertical distances of tiles from their goal positions",
      "Number of misplaced tiles (excluding the blank)",
      "Total number of legal moves available to the blank",
      "Direct straight-line Euclidean distance"
    ],
    "correctAnswer": 1,
    "explanationAr": "دالة الهيورستك h(n) هي دالة تقديرية تعطي تقديراً لتكلفة أرخص مسار من الحالة الحالية n إلى حالة الهدف، وتستمد معلوماتها من خصائص المسألة.",
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently.",
    "questionAr": "في مسألة الألغاز الثمانية، يتم تعريف h1(n) الإرشادي على النحو التالي:",
    "optionsAr": [
      "مجموع المسافات الأفقية والرأسية للبلاطات من مواقع أهدافها",
      "عدد البلاطات في غير مكانها (باستثناء الفراغات)",
      "إجمالي عدد التحركات القانونية المتاحة للفراغ",
      "المسافة الإقليدية المستقيمة المباشرة"
    ]
  },
  {
    "id": 162,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In the 8-puzzle problem, the Manhattan distance heuristic h2(n) calculates:",
    "options": [
      "The number of tiles currently in their exact goal squares",
      "The sum of horizontal and vertical grid steps each tile must take to reach its goal square",
      "The straight-line diagonal Euclidean distance of all tiles",
      "The product of row and column indices for each tile"
    ],
    "correctAnswer": 1,
    "explanationAr": "دالة الهيورستك h(n) هي دالة تقديرية تعطي تقديراً لتكلفة أرخص مسار من الحالة الحالية n إلى حالة الهدف، وتستمد معلوماتها من خصائص المسألة.",
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently.",
    "questionAr": "في مسألة الألغاز الثمانية، يتم حساب المسافة الإرشادية في مانهاتن h2(n):",
    "optionsAr": [
      "عدد المربعات الموجودة حاليًا في مربعات الأهداف المحددة",
      "مجموع خطوات الشبكة الأفقية والرأسية التي يجب أن يتخذها كل بلاط للوصول إلى مربع الهدف",
      "المسافة الإقليدية القطرية المستقيمة لجميع البلاطات",
      "حاصل ضرب مؤشرات الصفوف والأعمدة لكل بلاطة"
    ]
  },
  {
    "id": 163,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "If h1 and h2 are both admissible heuristics, and h2(n) >= h1(n) for all nodes n, we say that:",
    "options": [
      "h1 dominates h2",
      "h2 dominates h1",
      "h2 is inadmissible",
      "h1 is strictly monotonic"
    ],
    "correctAnswer": 1,
    "explanationAr": "الهيورستك المقبول (Admissible) هو الذي لا يبالغ إطلاقاً في تقدير التكلفة الحقيقية المتبقية للوصول إلى الهدف؛ أي يحقق دائماً h(n) <= h*(n).",
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path.",
    "questionAr": "إذا كان كل من h1 وh2 استدلالًا مقبولًا، وh2(n) >= h1(n) لجميع العقد n، فإننا نقول:",
    "optionsAr": [
      "h1 يهيمن على h2",
      "h2 يهيمن على h1",
      "h2 غير مقبول",
      "h1 رتيب تمامًا"
    ]
  },
  {
    "id": 164,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is a dominant heuristic h2 preferred over h1 in A* search?",
    "options": [
      "h2 requires less memory to store",
      "A* using h2 will never expand more nodes than A* using h1 (except for tie-breaking)",
      "h2 guarantees that branching factor b becomes 1",
      "h2 eliminates the need to calculate path costs g(n)"
    ],
    "correctAnswer": 1,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "لماذا يتم تفضيل h2 الإرشادي السائد على h1 في بحث A*؟",
    "optionsAr": [
      "يتطلب h2 ذاكرة أقل لتخزين",
      "A* باستخدام h2 لن يقوم أبدًا بتوسيع عقد أكثر من A* باستخدام h1 (باستثناء كسر التعادل)",
      "يضمن h2 أن يصبح عامل التفرع b 1",
      "h2 يلغي الحاجة إلى حساب تكاليف المسار g(n)"
    ]
  },
  {
    "id": 165,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A problem derived by removing one or more constraints on actions from the original problem definition is called a/an:",
    "options": [
      "Relaxed problem",
      "Bounded problem",
      "Factored problem",
      "Dual problem"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'Relaxed problem'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Relaxed problem' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "تسمى المشكلة المشتقة عن طريق إزالة واحد أو أكثر من القيود على الإجراءات من تعريف المشكلة الأصلي a/an:",
    "optionsAr": [
      "مشكلة مريحة",
      "مشكلة محدودة",
      "مشكلة عاملة",
      "مشكلة مزدوجة"
    ]
  },
  {
    "id": 166,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Why is the optimal solution cost of a relaxed problem guaranteed to be an admissible heuristic for the original problem?",
    "options": [
      "Because relaxed problems have no goal states",
      "Because removing action constraints adds edges to the state graph, creating shortcuts that can never increase the optimal cost",
      "Because relaxed problems can only be solved using depth-first search",
      "Because all heuristics generated by relaxation equal zero"
    ],
    "correctAnswer": 1,
    "explanationAr": "الهيورستك المقبول (Admissible) هو الذي لا يبالغ إطلاقاً في تقدير التكلفة الحقيقية المتبقية للوصول إلى الهدف؛ أي يحقق دائماً h(n) <= h*(n).",
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path.",
    "questionAr": "لماذا تكون تكلفة الحل الأمثل لمشكلة مريحة مضمونة لتكون إرشادية مقبولة للمشكلة الأصلية؟",
    "optionsAr": [
      "لأن المشاكل المريحة ليس لها أهداف",
      "لأن إزالة قيود الإجراء تضيف حواف إلى الرسم البياني للحالة، مما يؤدي إلى إنشاء اختصارات لا يمكنها أبدًا زيادة التكلفة المثلى",
      "لأن المشكلات المريحة لا يمكن حلها إلا باستخدام بحث العمق أولاً",
      "لأن جميع الاستدلالات الناتجة عن الاسترخاء تساوي الصفر"
    ]
  },
  {
    "id": 167,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "If we have a collection of admissible heuristics h1, h2, ..., hk, how can we combine them into a single dominant admissible heuristic h(n)?",
    "options": [
      "h(n) = min{h1(n), h2(n), ..., hk(n)}",
      "h(n) = max{h1(n), h2(n), ..., hk(n)}",
      "h(n) = h1(n) * h2(n) * ... * hk(n)",
      "h(n) = (h1(n) + h2(n) + ... + hk(n)) / k"
    ],
    "correctAnswer": 1,
    "explanationAr": "الهيورستك المقبول (Admissible) هو الذي لا يبالغ إطلاقاً في تقدير التكلفة الحقيقية المتبقية للوصول إلى الهدف؛ أي يحقق دائماً h(n) <= h*(n).",
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path.",
    "questionAr": "إذا كان لدينا مجموعة من الاستدلالات المقبولة h1، h2، ...، hk، فكيف يمكننا دمجها في استدلال واحد مقبول ومهيمن h(n)؟",
    "optionsAr": [
      "h(n) = دقيقة{h1(n), h2(n), ..., hk(n)}",
      "h(n) = الحد الأقصى{h1(n), h2(n), ..., hk(n)}",
      "h(n) = h1(n) * h2(n) * ... * hk(n)",
      "h(n) = (h1(n) + h2(n) + ... + hk(n)) / k"
    ]
  },
  {
    "id": 168,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In sliding-tile puzzles, storing the exact precomputed solution costs for all possible subproblem configurations in a lookup table is known as a:",
    "options": [
      "Pattern database",
      "Frontier queue",
      "Reached table",
      "Landmark cache"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار الصحيح هو 'Pattern database'؛ لأنه يعبر عن المعيار الرياضي والخوارزمي الدقيق لتحليل كفاءة خوارزميات البحث وحساب تعقيداتها المكانية والزمنية.",
    "explanationEn": "The correct choice 'Pattern database' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods.",
    "questionAr": "في ألغاز التجانب المنزلق، يُعرف تخزين تكاليف الحل المحسوبة مسبقًا الدقيقة لجميع تكوينات المشكلات الفرعية المحتملة في جدول البحث باسم:",
    "optionsAr": [
      "قاعدة بيانات الأنماط",
      "طابور الحدود",
      "تم الوصول إلى الجدول",
      "ذاكرة التخزين المؤقت التاريخية"
    ]
  },
  {
    "id": 169,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Weighted A* search uses the evaluation function f(n) = g(n) + W * h(n) with W > 1. What is the primary purpose of this weighting?",
    "options": [
      "To ensure that the heuristic becomes strictly consistent",
      "To trade off solution optimality for a significant reduction in the number of expanded nodes",
      "To eliminate the need for priority queues",
      "To convert graph search into tree search"
    ],
    "correctAnswer": 1,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "يستخدم البحث الموزون A* دالة التقييم f(n) = g(n) + W * h(n) مع W > 1. ما هو الغرض الأساسي من هذا الترجيح؟",
    "optionsAr": [
      "للتأكد من أن الاستدلال يصبح متسقًا تمامًا",
      "لمقايضة الحل الأمثل من أجل تقليل كبير في عدد العقد الموسعة",
      "للتخلص من الحاجة إلى قوائم الانتظار ذات الأولوية",
      "لتحويل بحث الرسم البياني إلى بحث شجرة"
    ]
  },
  {
    "id": 170,
    "type": "mcq",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "When memory is completely full, which node does the Simplified Memory-Bounded A* (SMA*) algorithm drop from the search tree?",
    "options": [
      "The root node of the tree",
      "The worst leaf node, which has the highest f-value",
      "The newest child node with the lowest g-value",
      "All nodes residing at depth d"
    ],
    "correctAnswer": 1,
    "explanationAr": "خوارزمية A* تعتمد على دالة التقييم f(n) = g(n) + h(n). تضمن الحل الأمثل بشرط أن يكون الهيورستك مقبولاً (Admissible) في الأشجار أو متسقاً (Consistent) في الرسوم البيانية.",
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search).",
    "questionAr": "عندما تكون الذاكرة ممتلئة تمامًا، ما هي العقدة التي تقوم بإسقاط خوارزمية Simplified Memory-Bounded A* (SMA*) من شجرة البحث؟",
    "optionsAr": [
      "العقدة الجذرية للشجرة",
      "أسوأ عقدة ورقية، والتي لديها أعلى قيمة f",
      "أحدث عقدة فرعية ذات أقل قيمة g",
      "جميع العقد المقيمة في العمق د"
    ]
  },
  {
    "id": 171,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A search problem is formally defined by five components: initial state, actions, transition model, goal states, and action cost function.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يتم تعريف مشكلة البحث رسميًا من خلال خمسة مكونات: الحالة الأولية، والإجراءات، ونموذج الانتقال، وحالات الهدف، ووظيفة تكلفة الإجراء.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 172,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "In a nondeterministic or partially observable environment, an agent can safely execute a search solution using an open-loop system without checking its percepts.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "في بيئة غير حتمية أو يمكن ملاحظتها جزئيًا، يمكن للوكيل تنفيذ حل بحث بأمان باستخدام نظام حلقة مفتوحة دون التحقق من تصوراته.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 173,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A single physical state of the environment can be represented by multiple distinct nodes in a search tree if there are redundant paths to that state.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يمكن تمثيل الحالة المادية الواحدة للبيئة من خلال عدة عقد مميزة في شجرة بحث إذا كانت هناك مسارات زائدة عن الحاجة إلى تلك الحالة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 174,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Each node in a search tree stores a pointer to its parent node, which allows the solution path of actions to be reconstructed once a goal is reached.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "تقوم كل عقدة في شجرة البحث بتخزين مؤشر إلى العقدة الأصلية، مما يسمح بإعادة بناء مسار الحل للإجراءات بمجرد الوصول إلى الهدف.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 175,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Graph search algorithms use a reached table (or closed list) to remember previously explored states and prevent visiting nodes multiple times.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "تستخدم خوارزميات البحث في الرسم البياني جدولًا تم الوصول إليه (أو قائمة مغلقة) لتذكر الحالات التي تم استكشافها مسبقًا ومنع زيارة العقد عدة مرات.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 176,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Tree-like search uses more memory than graph search because it maintains both an open list and a closed list of reached states.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "يستخدم البحث الشبيه بالشجرة ذاكرة أكبر من البحث في الرسم البياني لأنه يحتفظ بقائمة مفتوحة وقائمة مغلقة للحالات التي تم الوصول إليها.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 177,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Breadth-First Search is complete on infinite state spaces, provided that the branching factor b is finite.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يكتمل بحث العرض الأول في مساحات الحالة اللانهائية، بشرط أن يكون عامل التفرع b محدودًا.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 178,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Breadth-First Search is always cost-optimal, regardless of whether step action costs are identical or widely different.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "يعتبر البحث الموسع أولاً هو التكلفة الأمثل دائمًا، بغض النظر عما إذا كانت تكاليف الإجراء المرحلي متطابقة أو مختلفة إلى حد كبير.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 179,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Both the time complexity and space complexity of Breadth-First Search are exponential in the solution depth d, expressed as O(b^d).",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يعد كل من التعقيد الزمني والتعقيد المكاني للبحث العرضي الأول أسيًا في عمق الحل d، معبرًا عنه بـ O(b^d).",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 180,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Uniform-Cost Search expands nodes in increasing order of their path cost g(n) from the initial state.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يقوم بحث التكلفة الموحدة بتوسيع العقد بترتيب متزايد لتكلفة مسارها g(n) من الحالة الأولية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 181,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "If Uniform-Cost Search applies an early goal test upon generating a node, it is still guaranteed to return the cost-optimal solution.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "إذا طبق البحث الموحد للتكلفة اختبارًا مبكرًا للهدف عند إنشاء عقدة، فلا يزال من المضمون إرجاع الحل الأمثل من حيث التكلفة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 182,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Depth-First Search is cost-optimal because it always explores the deepest leaves first.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "يعد البحث في العمق أولاً مثاليًا من حيث التكلفة لأنه يستكشف دائمًا أعمق الأوراق أولاً.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 183,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Tree-like Depth-First Search requires only linear space complexity O(bm), where b is branching factor and m is maximum depth.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "لا يتطلب البحث عن العمق الأول الشبيه بالشجرة سوى تعقيد الفضاء الخطي O(bm)، حيث b هو عامل التفرع وm هو الحد الأقصى للعمق.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 184,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Backtracking search reduces memory requirements even further than standard DFS to just one state description and a path of O(m) actions.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يؤدي البحث التراجعي إلى تقليل متطلبات الذاكرة بشكل أكبر من DFS القياسي إلى وصف حالة واحد فقط ومسار لإجراءات O(m).",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 185,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Depth-Limited Search is complete even if the chosen depth limit l is smaller than the depth d of the optimal solution.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "يكتمل البحث محدود العمق حتى لو كان حد العمق المختار l أصغر من العمق d للحل الأمثل.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 186,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Iterative Deepening Search combines the linear memory benefits of DFS with the completeness and optimality of BFS for unit action costs.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يجمع البحث التكراري العميق بين فوائد الذاكرة الخطية لـ DFS واكتمال BFS وتحسينه بالنسبة لتكاليف عمل الوحدة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 187,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Bidirectional search maintains two frontiers and two reached tables, searching simultaneously from start and goal.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يحافظ البحث ثنائي الاتجاه على حدين وجدولين تم الوصول إليهما، ويبحث في وقت واحد من البداية والهدف.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 188,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Greedy Best-First Search expands the node with the minimum value of evaluation function f(n) = h(n).",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يقوم البحث الجشع الأفضل-الأول بتوسيع العقدة ذات القيمة الدنيا لوظيفة التقييم f(n) = h(n).",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 189,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Greedy Best-First Search is guaranteed to be cost-optimal because it always expands the node that appears closest to the goal.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "يُضمن أن يكون البحث الجشع الأفضل-الأول هو الأمثل من حيث التكلفة لأنه يعمل دائمًا على توسيع العقدة التي تبدو الأقرب إلى الهدف.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 190,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The evaluation function for A* search is f(n) = g(n) + h(n), where g(n) is path cost to n and h(n) is estimated cost from n to goal.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "وظيفة التقييم للبحث A* هي f(n) = g(n) + h(n)، حيث g(n) هي تكلفة المسار إلى n وh(n) هي التكلفة المقدرة من n إلى الهدف.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 191,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "An admissible heuristic is one that never overestimates the true cost to reach a goal state.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "إن الاستدلال المقبول هو الذي لا يبالغ أبدًا في تقدير التكلفة الحقيقية للوصول إلى حالة الهدف.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 192,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A heuristic is consistent if for every node n and successor n', the triangle inequality h(n) <= c(n, a, n') + h(n') is satisfied.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يكون الاستدلال متسقًا إذا كان لكل عقدة n وخليفة n'، تباين المثلث h(n) <= c(n, a, n') + h(n') محققًا.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 193,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Every consistent heuristic is admissible, but an admissible heuristic is not necessarily consistent.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "كل ارشادي متسق مقبول، ولكن ارشادي مقبول ليس بالضرورة متسقا.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 194,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "A* search expands no nodes with an evaluation cost strictly greater than the optimal solution cost C*.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "لا يقوم بحث A* بتوسيع أي عقد بتكلفة تقييم أكبر بشكل صارم من تكلفة الحل الأمثل C*.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 195,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The Manhattan distance heuristic for the 8-puzzle is admissible because any single move can at most decrease one tile's distance by 1 step.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "يعد اختبار مسافة مانهاتن للألغاز الثمانية مقبولًا لأن أي حركة واحدة يمكن أن تقلل على الأكثر مسافة قطعة واحدة بخطوة واحدة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 196,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "If heuristic h2 dominates h1, then A* search using h2 will never expand more nodes than A* search using h1 (except for tie-breaking).",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "إذا كان h2 الإرشادي يهيمن على h1، فلن يقوم بحث A* باستخدام h2 أبدًا بتوسيع عقد أكثر من بحث A* باستخدام h1 (باستثناء كسر التعادل).",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 197,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Given two admissible heuristics h1 and h2, the composite function h(n) = max(h1(n), h2(n)) is also admissible and dominates both h1 and h2.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "بالنظر إلى اثنين من الاستدلالات المقبولة h1 وh2، فإن الوظيفة المركبة h(n) = max(h1(n)، h2(n)) مقبولة أيضًا وتهيمن على كل من h1 وh2.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 198,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "The cost of an optimal solution to a relaxed problem provides an admissible heuristic for the original unrelaxed problem.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "توفر تكلفة الحل الأمثل لمشكلة مريحة إرشادًا مقبولًا للمشكلة الأصلية غير المريحة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 199,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "Weighted A* search with weight W > 1 is guaranteed to find the strictly cost-optimal solution in every search problem.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ لأن تطبيق هذا النهج يؤدي إلى فقدان ضمانات الأمثلية أو الدخول في حلقات لانهائية في غياب التحقق والمراقبة الحركية.",
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions.",
    "questionAr": "يتم ضمان البحث الموزون A* مع الوزن W > 1 للعثور على الحل الأمثل من حيث التكلفة في كل مشكلة بحث.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 200,
    "type": "true_false",
    "chapterId": 3,
    "chapter": "Chapter 3: Solving Problems by Searching",
    "question": "On complex search problems with tight memory limits, SMA* can suffer from thrashing, where it continually regenerates forgotten nodes.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ فالقاعدة الرياضية تشترط هذا البناء لضمان اكتمال وأمثلية خوارزمية البحث وتفادي التكرار أو التجاوز غير المحسوب.",
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces.",
    "questionAr": "في مشكلات البحث المعقدة ذات الحدود الضيقة للذاكرة، يمكن أن يعاني SMA* من الضرب، حيث يقوم باستمرار بتجديد العقد المنسية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 201,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In AIMA Chapter 1, definitions of Artificial Intelligence are historically organized into a 2x2 matrix along which two primary dimensions?",
    "options": [
      "Hardware vs Software, and Theory vs Practice",
      "Thought processes/reasoning vs Behavior, and Human performance vs Ideal rationality",
      "Symbolic systems vs Connectionist systems, and Supervised vs Unsupervised",
      "Discrete time vs Continuous time, and Single-agent vs Multi-agent"
    ],
    "correctAnswer": 1,
    "explanationAr": "صنف رسل ونورفيغ تعريفات الذكاء الاصطناعي في شبكة 2×2 ترتكز على بُعدين: العمليات الذهنية الداخلية مقابل السلوك الخارجي، ومحاكاة الأداء البشري مقابل العقلانية والمثالية.",
    "explanationEn": "Russell & Norvig categorize definitions of AI into a 2x2 matrix along two axes: Thought processes vs. Behavior, and Human performance vs. Ideal rationality.",
    "questionAr": "في الفصل الأول من AIMA، تم تنظيم تعريفات الذكاء الاصطناعي تاريخيًا في مصفوفة 2x2 والتي يوجد على طولها بعدان أساسيان؟",
    "optionsAr": [
      "الأجهزة مقابل البرمجيات، والنظرية مقابل الممارسة",
      "عمليات التفكير/الاستدلال مقابل السلوك، والأداء البشري مقابل العقلانية المثالية",
      "الأنظمة الرمزية مقابل الأنظمة الاتصالية، والأنظمة الخاضعة للإشراف مقابل الأنظمة غير الخاضعة للرقابة",
      "الوقت المنفصل مقابل الوقت المستمر، والوكيل الفردي مقابل الوكيل المتعدد"
    ]
  },
  {
    "id": 202,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The 'Acting Humanly' approach to AI was famously operationalized in 1950 by Alan Turing through which proposed assessment?",
    "options": [
      "The Chinese Room argument",
      "The Imitation Game (Turing Test)",
      "The Winograd Schema Challenge",
      "The Voight-Kampff test"
    ],
    "correctAnswer": 1,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "لقد تم تفعيل منهج \"التصرف بشكل إنساني\" تجاه الذكاء الاصطناعي في عام 1950 على يد آلان تورينج، من خلال أي تقييم مقترح؟",
    "optionsAr": [
      "حجة الغرفة الصينية",
      "لعبة التقليد (اختبار تورينج)",
      "تحدي مخطط فينوغراد",
      "اختبار فويت كامبف"
    ]
  },
  {
    "id": 203,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "To pass the standard Turing Test via a text-based terminal, an AI system needs capabilities in all of the following core disciplines EXCEPT:",
    "options": [
      "Natural Language Processing (NLP)",
      "Knowledge Representation",
      "Physical Robotic Manipulation",
      "Machine Learning"
    ],
    "correctAnswer": 2,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "لاجتياز اختبار تورينج القياسي عبر محطة قائمة على النصوص، يحتاج نظام الذكاء الاصطناعي إلى قدرات في جميع التخصصات الأساسية التالية باستثناء:",
    "optionsAr": [
      "معالجة اللغات الطبيعية (NLP)",
      "تمثيل المعرفة",
      "التلاعب الآلي الفيزيائي",
      "التعلم الآلي"
    ]
  },
  {
    "id": 204,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Which two additional capabilities are specifically required for an agent to pass the Total Turing Test compared to the standard Turing Test?",
    "options": [
      "Calculus and Theorem Proving",
      "Computer Vision and Robotics",
      "Speech synthesis and Web searching",
      "Quantum computing and Cloud storage"
    ],
    "correctAnswer": 1,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "ما الإمكانيتين الإضافيتين المطلوبتين على وجه التحديد للوكيل لاجتياز اختبار تورينج الإجمالي مقارنة باختبار تورينج القياسي؟",
    "optionsAr": [
      "حساب التفاضل والتكامل والنظرية إثبات",
      "الرؤية الحاسوبية والروبوتات",
      "تركيب الكلام والبحث في الويب",
      "الحوسبة الكمومية والتخزين السحابي"
    ]
  },
  {
    "id": 205,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The 'Thinking Humanly' approach to artificial intelligence relies on validating computer programs against empirical human data through which interdisciplinary field?",
    "options": [
      "Operations Research",
      "Cognitive Science",
      "Quantum Mechanics",
      "Control Theory"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Cognitive Science' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Cognitive Science' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "يعتمد نهج \"التفكير الإنساني\" في الذكاء الاصطناعي على التحقق من صحة برامج الكمبيوتر مقابل البيانات البشرية التجريبية، من خلال أي مجال متعدد التخصصات؟",
    "optionsAr": [
      "بحوث العمليات",
      "العلوم المعرفية",
      "ميكانيكا الكم",
      "نظرية التحكم"
    ]
  },
  {
    "id": 206,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In cognitive science, which of the following is NOT one of the three primary methods used to determine how human thoughts operate?",
    "options": [
      "Introspection (catching our own thoughts as they go by)",
      "Psychological experiments (observing people in action)",
      "Brain imaging (observing the neurological brain in action)",
      "Measuring processor clock speeds and memory voltage"
    ],
    "correctAnswer": 3,
    "explanationAr": "الخيار 'Measuring processor clock speeds and memory voltage' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Measuring processor clock speeds and memory voltage' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في العلوم المعرفية، أي مما يلي لا يعد إحدى الطرق الأساسية الثلاثة المستخدمة لتحديد كيفية عمل الأفكار البشرية؟",
    "optionsAr": [
      "الاستبطان (التقاط أفكارنا أثناء مرورها)",
      "تجارب نفسية (ملاحظة الأشخاص أثناء تصرفاتهم)",
      "تصوير الدماغ (ملاحظة عمل الدماغ العصبي)",
      "قياس سرعات ساعة المعالج وجهد الذاكرة"
    ]
  },
  {
    "id": 207,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The 'Thinking Rationally' approach to AI is rooted in the 'laws of thought' tradition, which was pioneered by which ancient Greek philosopher?",
    "options": [
      "Aristotle",
      "Socrates",
      "Pythagoras",
      "Epicurus"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Aristotle' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Aristotle' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "إن منهج \"التفكير العقلاني\" في التعامل مع الذكاء الاصطناعي متجذر في تقليد \"قوانين الفكر\"، الذي كان رائده أي فيلسوف يوناني قديم؟",
    "optionsAr": [
      "أرسطو",
      "سقراط",
      "فيثاغورس",
      "أبيقور"
    ]
  },
  {
    "id": 208,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "What is a major practical obstacle faced by the pure logicist ('laws of thought') approach when applied to real-world artificial intelligence?",
    "options": [
      "Computers cannot perform logical operations like AND and OR",
      "Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable",
      "Aristotelian syllogisms only function in continuous environments",
      "Formal logic cannot be implemented using programming languages"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "ما هي العقبة العملية الرئيسية التي يواجهها النهج المنطقي المحض (\"قوانين الفكر\") عند تطبيقه على الذكاء الاصطناعي في العالم الحقيقي؟",
    "optionsAr": [
      "لا يمكن لأجهزة الكمبيوتر إجراء عمليات منطقية مثل AND وOR",
      "يعد ذكر المعرفة غير الرسمية في العالم الحقيقي بمصطلحات المنطق الرسمي أمرًا صعبًا للغاية، ويمكن أن يكون التفكير الاستنتاجي مستعصيًا حسابيًا",
      "القياسات المنطقية الأرسطية تعمل فقط في البيئات المستمرة",
      "لا يمكن تنفيذ المنطق الرسمي باستخدام لغات البرمجة"
    ]
  },
  {
    "id": 209,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In AIMA, the primary approach adopted as the central organizing theme throughout the textbook is:",
    "options": [
      "Thinking Humanly (Cognitive modeling)",
      "Acting Humanly (Turing test imitation)",
      "Acting Rationally (The rational agent approach)",
      "Thinking Rationally (Pure deductive logic)"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار 'Acting Rationally (The rational agent approach)' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Acting Rationally (The rational agent approach)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في AIMA، النهج الأساسي المعتمد كموضوع تنظيمي مركزي في جميع أنحاء الكتاب المدرسي هو:",
    "optionsAr": [
      "التفكير إنسانياً (النمذجة المعرفية)",
      "التصرف إنسانيا (التقليد باختبار تورينج)",
      "التصرف بعقلانية (منهج الفاعل العقلاني)",
      "التفكير العقلاني (المنطق الاستنتاجي البحت)"
    ]
  },
  {
    "id": 210,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Why is the rational agent approach ('Acting Rationally') advantageous over the 'Thinking Rationally' (laws of thought) approach?",
    "options": [
      "It completely eliminates the need for mathematical representations",
      "Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty",
      "Rational agents do not require sensors or actuators",
      "It guarantees that algorithms always run in O(1) constant time"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "لماذا يعد منهج العامل العقلاني (\"التصرف بعقلانية\") مفيدًا على منهج \"التفكير العقلاني\" (قوانين الفكر)؟",
    "optionsAr": [
      "إنه يلغي تماما الحاجة إلى التمثيلات الرياضية",
      "إن الاستدلال المنطقي الصحيح ليس سوى واحدة من عدة آليات ممكنة لتحقيق العقلانية، مما يسمح بأفعال منعكسة وأفعال في ظل عدم اليقين",
      "لا تتطلب العوامل العقلانية أجهزة استشعار أو مشغلات",
      "إنه يضمن تشغيل الخوارزميات دائمًا في وقت ثابت O (1)."
    ]
  },
  {
    "id": 211,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In AI research, the 'standard model' of AI envisions an agent that is designed to:",
    "options": [
      "Experience human emotional states",
      "Optimize an objective or utility function specified by its human designers",
      "Disobey human commands whenever energy is low",
      "Pass the Turing Test in a minimum of five different languages"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Optimize an objective or utility function specified by its human designers' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Optimize an objective or utility function specified by its human designers' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في أبحاث الذكاء الاصطناعي، يتصور \"النموذج القياسي\" للذكاء الاصطناعي وكيلًا مصممًا من أجل:",
    "optionsAr": [
      "تجربة الحالات العاطفية البشرية",
      "تحسين وظيفة الهدف أو المنفعة المحددة من قبل المصممين البشريين",
      "عصي أوامر الإنسان عندما تكون الطاقة منخفضة",
      "اجتياز اختبار تورينج بخمس لغات مختلفة على الأقل"
    ]
  },
  {
    "id": 212,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "What is the primary modern safety concern with the 'standard model' of AI (the King Midas problem)?",
    "options": [
      "Machines will become too slow to process speech",
      "If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences",
      "Silicon processors will melt when running deep neural networks",
      "Agents will refuse to accept any objectives from users"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "ما هو الاهتمام الرئيسي بالسلامة الحديثة في \"النموذج القياسي\" للذكاء الاصطناعي (مشكلة الملك ميداس)؟",
    "optionsAr": [
      "ستصبح الآلات بطيئة جدًا في معالجة الكلام",
      "إذا قمنا بتحديد وظيفة الهدف الخاطئة، فسيعمل الوكيل ذو القدرة الفائقة على تحسين هذا الهدف المعيب مع عواقب وخيمة محتملة",
      "سوف تذوب معالجات السيليكون عند تشغيل الشبكات العصبية العميقة",
      "سوف يرفض الوكلاء قبول أي أهداف من المستخدمين"
    ]
  },
  {
    "id": 213,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In the original Turing Test protocol, after what duration of conversation does an interrogator decide whether the respondent is a machine or a human?",
    "options": [
      "5 minutes",
      "1 hour",
      "24 hours",
      "10 seconds"
    ],
    "correctAnswer": 0,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "في بروتوكول اختبار تورينج الأصلي، بعد أي مدة من المحادثة يقرر المحقق ما إذا كان المستفتى آلة أم إنسانًا؟",
    "optionsAr": [
      "5 دقائق",
      "ساعة واحدة",
      "24 ساعة",
      "10 ثواني"
    ]
  },
  {
    "id": 214,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Why do mainstream AI researchers generally spend relatively little effort trying to build systems specifically designed to pass the Turing Test?",
    "options": [
      "The test has already been officially solved by pocket calculators",
      "AI researchers focus on studying the underlying principles of intelligence and solving real problems, analogous to how aeronautical engineering focuses on aerodynamics rather than copying birds",
      "Passing the Turing Test is illegal under international law",
      "The Turing Test only applies to analog computers"
    ],
    "correctAnswer": 1,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "لماذا يبذل باحثو الذكاء الاصطناعي السائد عمومًا جهدًا قليلًا نسبيًا في محاولة بناء أنظمة مصممة خصيصًا لاجتياز اختبار تورينج؟",
    "optionsAr": [
      "لقد تم بالفعل حل الاختبار رسميًا بواسطة حاسبات الجيب",
      "يركز باحثو الذكاء الاصطناعي على دراسة المبادئ الأساسية للذكاء وحل المشكلات الحقيقية، على غرار كيفية تركيز هندسة الطيران على الديناميكا الهوائية بدلاً من تقليد الطيور",
      "اجتياز اختبار تورينج أمر غير قانوني بموجب القانون الدولي",
      "ينطبق اختبار تورينج فقط على أجهزة الكمبيوتر التناظرية"
    ]
  },
  {
    "id": 215,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In the context of the Turing Test, the ability to use stored information to answer questions and draw new conclusions is known as:",
    "options": [
      "Computer Vision",
      "Automated Reasoning",
      "Robotics",
      "Natural Language Processing"
    ],
    "correctAnswer": 1,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "في سياق اختبار تورينج، تُعرف القدرة على استخدام المعلومات المخزنة للإجابة على الأسئلة واستخلاص استنتاجات جديدة باسم:",
    "optionsAr": [
      "رؤية الكمبيوتر",
      "الاستدلال الآلي",
      "الروبوتات",
      "معالجة اللغات الطبيعية"
    ]
  },
  {
    "id": 216,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Why is Machine Learning an essential capability for an agent attempting to pass the Turing Test?",
    "options": [
      "To power its cooling fans",
      "To adapt to new circumstances and detect and extrapolate patterns",
      "To calculate mathematical square roots in hardware",
      "To convert AC power to DC power"
    ],
    "correctAnswer": 1,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "لماذا يعتبر التعلم الآلي قدرة أساسية للوكيل الذي يحاول اجتياز اختبار تورينج؟",
    "optionsAr": [
      "لتشغيل مراوح التبريد",
      "التكيف مع الظروف الجديدة وكشف الأنماط واستقراءها",
      "لحساب الجذور التربيعية الرياضية في الأجهزة",
      "لتحويل طاقة التيار المتردد إلى طاقة التيار المستمر"
    ]
  },
  {
    "id": 217,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "A system is defined as rational if it:",
    "options": [
      "Replicates human mistakes and biases",
      "Does the 'right thing' based on what it knows and its performance measure",
      "Runs exclusively on quantum hardware",
      "Discards all past percept history"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Does the 'right thing' based on what it knows and its performance measure' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Does the 'right thing' based on what it knows and its performance measure' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "يتم تعريف النظام على أنه عقلاني إذا كان:",
    "optionsAr": [
      "يكرر أخطاء البشر وتحيزاتهم",
      "يفعل \"الشيء الصحيح\" بناءً على ما يعرفه وقياس أدائه",
      "يعمل حصريًا على الأجهزة الكمومية",
      "يتجاهل كل تاريخ الإدراك الماضي"
    ]
  },
  {
    "id": 218,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Why are human thought processes not always rational?",
    "options": [
      "Humans do not possess biological brains",
      "Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits",
      "Humans cannot communicate in natural language",
      "Human memory capacity is mathematically zero"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "لماذا لا تكون عمليات التفكير البشري عقلانية دائمًا؟",
    "optionsAr": [
      "البشر لا يملكون أدمغة بيولوجية",
      "يخضع المنطق البشري للتحيزات المعرفية المنهجية والتشوهات العاطفية وحدود الموارد الحسابية",
      "لا يستطيع البشر التواصل باللغة الطبيعية",
      "سعة الذاكرة البشرية تساوي صفرًا رياضيًا"
    ]
  },
  {
    "id": 219,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The philosophical doctrine proposed by René Descartes which posits that the mind is fundamentally separate from the physical body is known as:",
    "options": [
      "Materialism",
      "Dualism",
      "Positivism",
      "Empiricism"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Dualism' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Dualism' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "تُعرف العقيدة الفلسفية التي اقترحها رينيه ديكارت والتي تفترض أن العقل منفصل بشكل أساسي عن الجسم المادي بما يلي:",
    "optionsAr": [
      "المادية",
      "الثنائية",
      "الوضعية",
      "التجريبية"
    ]
  },
  {
    "id": 220,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In contrast to dualism, which philosophical school holds that brain operations operating according to the laws of physics constitute the mind?",
    "options": [
      "Materialism (or Physicalism)",
      "Solipsism",
      "Rationalism",
      "Existentialism"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Materialism (or Physicalism)' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Materialism (or Physicalism)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "على النقيض من الثنائية، ما هي المدرسة الفلسفية التي ترى أن عمليات الدماغ التي تعمل وفقا لقوانين الفيزياء تشكل العقل؟",
    "optionsAr": [
      "المادية (أو الفيزيائية)",
      "الأنانية",
      "العقلانية",
      "الوجودية"
    ]
  },
  {
    "id": 221,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The philosophical movement initiated by John Locke's dictum that 'Nothing is in the understanding, which was not first in the sense' is known as:",
    "options": [
      "Empiricism",
      "Idealism",
      "Nativism",
      "Skepticism"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Empiricism' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Empiricism' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "تُعرف الحركة الفلسفية التي بدأها جون لوك بمقولته القائلة بأن \"لا شيء في الفهم لم يكن أولًا بالمعنى\" باسم:",
    "optionsAr": [
      "التجريبية",
      "المثالية",
      "القومية",
      "الشك"
    ]
  },
  {
    "id": 222,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "David Hume famously analyzed the 'principle of induction', which poses what fundamental question relevant to Machine Learning?",
    "options": [
      "How electrical currents induce magnetic fields in computer disks",
      "How general rules and future predictions can be justified on the basis of a finite number of past observations",
      "Why binary logic cannot represent decimal fractions",
      "How processors maintain clock synchronization"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'How general rules and future predictions can be justified on the basis of a finite number of past observations' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'How general rules and future predictions can be justified on the basis of a finite number of past observations' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "اشتهر ديفيد هيوم بتحليل \"مبدأ الاستقراء\"، والذي يطرح ما هو السؤال الأساسي ذو الصلة بالتعلم الآلي؟",
    "optionsAr": [
      "كيف تحفز التيارات الكهربائية المجالات المغناطيسية في أقراص الكمبيوتر",
      "كيف يمكن تبرير القواعد العامة والتنبؤات المستقبلية على أساس عدد محدود من الملاحظات السابقة",
      "لماذا لا يمكن للمنطق الثنائي تمثيل الكسور العشرية",
      "كيف تحافظ المعالجات على تزامن الساعة"
    ]
  },
  {
    "id": 223,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The Vienna Circle of philosophers developed 'logical positivism', which argued that all meaningful knowledge must be connected to:",
    "options": [
      "Divine revelation",
      "Logical theories connected to observable sensory observations",
      "Syllogisms written strictly in ancient Greek",
      "Hardware circuits"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Logical theories connected to observable sensory observations' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Logical theories connected to observable sensory observations' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "طورت دائرة فيينا من الفلاسفة \"الوضعية المنطقية\"، التي جادلت بأن كل المعرفة ذات المعنى يجب أن تكون مرتبطة بما يلي:",
    "optionsAr": [
      "الوحي الإلهي",
      "النظريات المنطقية المرتبطة بالملاحظات الحسية المرصودة",
      "القياسات المنطقية مكتوبة بدقة باللغة اليونانية القديمة",
      "دوائر الأجهزة"
    ]
  },
  {
    "id": 224,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Who introduced formal boolean logic in 1847, establishing that logical reasoning could be calculated mathematically with algebraic manipulation?",
    "options": [
      "Alan Turing",
      "George Boole",
      "Isaac Newton",
      "Gottfried Leibniz"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'George Boole' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'George Boole' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "من الذي قدم المنطق المنطقي الرسمي في عام 1847، معتبرًا أن الاستدلال المنطقي يمكن حسابه رياضيًا من خلال التلاعب الجبري؟",
    "optionsAr": [
      "آلان تورينج",
      "جورج بول",
      "إسحاق نيوتن",
      "جوتفريد لايبنتز"
    ]
  },
  {
    "id": 225,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Gottlob Frege extended Boolean logic in 1879 by introducing objects, relations, and quantifiers, creating:",
    "options": [
      "First-order predicate calculus",
      "Fuzzy logic",
      "Modal logic",
      "Quantum gates"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'First-order predicate calculus' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'First-order predicate calculus' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "قام جوتلوب فريجه بتوسيع المنطق البولياني في عام 1879 من خلال إدخال الأشياء والعلاقات والمحددات الكمية، مما أدى إلى إنشاء:",
    "optionsAr": [
      "حساب التفاضل والتكامل من الدرجة الأولى",
      "منطق غامض",
      "منطق مشروط",
      "بوابات الكم"
    ]
  },
  {
    "id": 226,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1931, Kurt Gödel shocked the mathematical community with his Incompleteness Theorem, which proved that:",
    "options": [
      "No computer could ever be built with more than 100 bytes of memory",
      "In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system",
      "All polynomial-time algorithms are NP-complete",
      "Heuristics are always inadmissible in cyclic graphs"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 1931، صدم كورت جودل المجتمع الرياضي بنظرية عدم الاكتمال، والتي أثبتت أن:",
    "optionsAr": [
      "لا يمكن بناء أي جهاز كمبيوتر بأكثر من 100 بايت من الذاكرة",
      "في أي نظام رياضي رسمي قوي بما يكفي لإجراء العمليات الحسابية، توجد عبارات صحيحة لا يمكن إثباتها داخل النظام",
      "جميع خوارزميات الوقت متعدد الحدود كاملة NP",
      "الاستدلال غير مقبول دائمًا في الرسوم البيانية الدورية"
    ]
  },
  {
    "id": 227,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Alan Turing's 1936 paper introduced the Turing machine and proved that there exist uncomputable problems, notably the:",
    "options": [
      "Traveling Salesperson Problem",
      "Halting Problem",
      "Shortest Path Problem",
      "Sorting Problem"
    ],
    "correctAnswer": 1,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "قدمت ورقة آلان تورينج عام 1936 آلة تورينج وأثبتت وجود مشاكل غير قابلة للحساب، أبرزها:",
    "optionsAr": [
      "مشكلة مندوب المبيعات المتجول",
      "مشكلة التوقف",
      "مشكلة أقصر مسار",
      "مشكلة الفرز"
    ]
  },
  {
    "id": 228,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In computational complexity theory, a computational problem is formally classified as 'intractable' if the time required to solve instances grows:",
    "options": [
      "Linearly with input size O(n)",
      "Logarithmically O(log n)",
      "Exponentially with the size of the problem instances",
      "In constant time O(1)"
    ],
    "correctAnswer": 2,
    "explanationAr": "الخيار 'Exponentially with the size of the problem instances' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Exponentially with the size of the problem instances' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في نظرية التعقيد الحسابي، يتم تصنيف المشكلة الحسابية رسميًا على أنها \"مستعصية على الحل\" إذا زاد الوقت اللازم لحل الحالات:",
    "optionsAr": [
      "خطيًا بحجم الإدخال O(n)",
      "لوغاريتميًا O(log n)",
      "أضعافا مضاعفة مع حجم مثيلات المشكلة",
      "في زمن ثابت O(1)"
    ]
  },
  {
    "id": 229,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Stephen Cook (1971) and Richard Karp (1972) founded the theory of NP-completeness, proving that:",
    "options": [
      "All NP-complete problems can be solved in linear time on single-core computers",
      "A large class of combinatorial search and reasoning problems are likely intractable in the worst case",
      "Computers cannot store floating point numbers",
      "Neural networks cannot compute linear combinations"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "أسس ستيفن كوك (1971) وريتشارد كارب (1972) نظرية اكتمال NP، وأثبتا أن:",
    "optionsAr": [
      "يمكن حل جميع مشاكل NP-Complete في الوقت الخطي على أجهزة الكمبيوتر أحادية النواة",
      "من المحتمل أن تكون هناك فئة كبيرة من مشكلات البحث والاستدلال التوافقي مستعصية على الحل في أسوأ الحالات",
      "لا يمكن لأجهزة الكمبيوتر تخزين أرقام الفاصلة العائمة",
      "لا تستطيع الشبكات العصبية حساب المجموعات الخطية"
    ]
  },
  {
    "id": 230,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Which 18th-century English mathematician formulated the fundamental rule for updating subjective probabilities in light of new evidence?",
    "options": [
      "Isaac Newton",
      "Thomas Bayes",
      "Charles Babbage",
      "Bertrand Russell"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Thomas Bayes' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Thomas Bayes' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "أي عالم رياضيات إنجليزي من القرن الثامن عشر صاغ القاعدة الأساسية لتحديث الاحتمالات الذاتية في ضوء الأدلة الجديدة؟",
    "optionsAr": [
      "إسحاق نيوتن",
      "توماس بايز",
      "تشارلز باباج",
      "برتراند راسل"
    ]
  },
  {
    "id": 231,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The formal mathematical theory of probability was originally developed in 1654 in correspondence between Pierre de Fermat and Blaise Pascal to analyze:",
    "options": [
      "Gambling odds in games of chance",
      "Automated theorem proving",
      "Chess endgames",
      "Computer network packet loss"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Gambling odds in games of chance' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Gambling odds in games of chance' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "تم تطوير النظرية الرياضية الرسمية للاحتمال في الأصل عام 1654 من خلال المراسلات بين بيير دي فيرما وبليز باسكال لتحليل:",
    "optionsAr": [
      "احتمالات القمار في ألعاب الحظ",
      "إثبات النظرية الآلية",
      "نهاية مباريات الشطرنج",
      "فقدان حزمة شبكة الكمبيوتر"
    ]
  },
  {
    "id": 232,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The Church-Turing thesis asserts that:",
    "options": [
      "Any algorithmic computation that can be carried out by any physical machine can be simulated by a Turing machine",
      "Quantum computers cannot solve any mathematical problems",
      "Human intelligence will be exceeded by AI by the year 2000",
      "Brains contain exactly 10 billion neurons"
    ],
    "correctAnswer": 0,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "تؤكد أطروحة الكنيسة-تورينج على أن:",
    "optionsAr": [
      "أي عملية حسابية خوارزمية يمكن إجراؤها بواسطة أي آلة مادية يمكن محاكاتها بواسطة آلة تورينج",
      "لا تستطيع أجهزة الكمبيوتر الكمومية حل أي مسائل رياضية",
      "الذكاء البشري سوف يفوق الذكاء الاصطناعي بحلول عام 2000",
      "يحتوي الدماغ على 10 مليارات خلية عصبية بالضبط"
    ]
  },
  {
    "id": 233,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The formal mathematical foundation of utility theory, showing that any rational preference structure can be modeled with a numeric utility function, was established in 1944 by:",
    "options": [
      "Adam Smith and David Ricardo",
      "John von Neumann and Oskar Morgenstern",
      "John Maynard Keynes and Milton Friedman",
      "Alan Turing and Claude Shannon"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'John von Neumann and Oskar Morgenstern' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'John von Neumann and Oskar Morgenstern' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "الأساس الرياضي الرسمي لنظرية المنفعة، والذي يوضح أن أي بنية تفضيل عقلاني يمكن نمذجتها باستخدام دالة منفعة رقمية، تم تأسيسها في عام 1944 بواسطة:",
    "optionsAr": [
      "آدم سميث وديفيد ريكاردو",
      "جون فون نيومان وأوسكار مورجنسترن",
      "جون ماينارد كينز وميلتون فريدمان",
      "آلان تورينج وكلود شانون"
    ]
  },
  {
    "id": 234,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In economics and artificial intelligence, Decision Theory is formally defined as the combination of:",
    "options": [
      "Logic and Arithmetic",
      "Probability Theory and Utility Theory",
      "Hardware Architecture and Software Code",
      "Robotics and Computer Vision"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Probability Theory and Utility Theory' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Probability Theory and Utility Theory' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في الاقتصاد والذكاء الاصطناعي، يتم تعريف نظرية القرار رسميًا على أنها مزيج من:",
    "optionsAr": [
      "المنطق والحساب",
      "نظرية الاحتمالية ونظرية المنفعة",
      "هندسة الأجهزة ورمز البرمجيات",
      "الروبوتات ورؤية الكمبيوتر"
    ]
  },
  {
    "id": 235,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Herbert Simon won the Nobel Prize in Economics for pioneering work showing that actual human decision makers do not strictly optimize, but rather engage in:",
    "options": [
      "Rational maximization",
      "Satisficing (making decisions that are 'good enough')",
      "Backtracking search",
      "Exhaustive state enumeration"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Satisficing (making decisions that are 'good enough')' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Satisficing (making decisions that are 'good enough')' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "فاز هربرت سايمون بجائزة نوبل في الاقتصاد لعمله الرائد الذي أظهر أن صناع القرار البشريين الفعليين لا يقومون بالتحسين بشكل صارم، بل ينخرطون في:",
    "optionsAr": [
      "التعظيم العقلاني",
      "مرضية (اتخاذ قرارات \"جيدة بما فيه الكفاية\")",
      "البحث التراجعي",
      "تعداد الدولة الشامل"
    ]
  },
  {
    "id": 236,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Richard Bellman pioneered dynamic programming in the 1950s, creating a class of sequential decision problems in economics known as:",
    "options": [
      "Boolean circuits",
      "Markov Decision Processes (MDPs)",
      "Heuristic graphs",
      "Turing machines"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Markov Decision Processes (MDPs)' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Markov Decision Processes (MDPs)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "كان ريتشارد بيلمان رائدًا في البرمجة الديناميكية في الخمسينيات من القرن الماضي، حيث أنشأ فئة من مشاكل القرار المتسلسلة في الاقتصاد المعروفة باسم:",
    "optionsAr": [
      "الدوائر المنطقية",
      "عمليات ماركوف لاتخاذ القرار (MDPs)",
      "الرسوم البيانية الإرشادية",
      "آلات تورينج"
    ]
  },
  {
    "id": 237,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Neuroscience is the study of the nervous system and the brain. What is the fundamental information-processing biological cell in the brain?",
    "options": [
      "Neuron",
      "Glia",
      "Axon terminal",
      "Synaptic cleft"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Neuron' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Neuron' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "علم الأعصاب هو دراسة الجهاز العصبي والدماغ. ما هي الخلية البيولوجية الأساسية لمعالجة المعلومات في الدماغ؟",
    "optionsAr": [
      "العصبون",
      "جليا",
      "محطة اكسون",
      "شق متشابك"
    ]
  },
  {
    "id": 238,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "How does the cycle time of human neurons compare to that of modern silicon computer microprocessors?",
    "options": [
      "Neurons are a million times faster than computer chips",
      "Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds",
      "Biological neurons operate at the exact speed of light",
      "Both have identical cycle times of one microsecond"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "كيف يمكن مقارنة زمن دورة الخلايا العصبية البشرية بمعالجات الكمبيوتر الدقيقة المصنوعة من السيليكون الحديثة؟",
    "optionsAr": [
      "الخلايا العصبية أسرع مليون مرة من رقائق الكمبيوتر",
      "تستغرق معالجات الكمبيوتر أوقات دورة بالنانو ثانية، بينما تعمل الخلايا العصبية البيولوجية بشكل أبطأ بكثير، بالمللي ثانية",
      "تعمل الخلايا العصبية البيولوجية بسرعة الضوء بالضبط",
      "كلاهما لهما أوقات دورة متطابقة تبلغ ميكروثانية واحدة"
    ]
  },
  {
    "id": 239,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Despite having much slower individual cycle times than microprocessors, how does the human brain outperform supercomputers on complex perceptual tasks?",
    "options": [
      "The brain uses liquid nitrogen cooling",
      "The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections",
      "The brain has zero latency between sensors and muscles",
      "Biological neurons do not obey physical laws"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "على الرغم من أن أوقات الدورة الفردية أبطأ بكثير من المعالجات الدقيقة، كيف يتفوق الدماغ البشري على أجهزة الكمبيوتر العملاقة في المهام الإدراكية المعقدة؟",
    "optionsAr": [
      "يستخدم الدماغ التبريد بالنتروجين السائل",
      "يستخدم الدماغ التوازي الهائل عبر ما يقرب من 10^11 خلية عصبية و10^14 وصلة متشابكة",
      "الدماغ لديه الكمون صفر بين أجهزة الاستشعار والعضلات",
      "الخلايا العصبية البيولوجية لا تخضع للقوانين الفيزيائية"
    ]
  },
  {
    "id": 240,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The psychological school of 'Behaviorism' (championed by J.B. Watson and B.F. Skinner) rejected the study of internal mental states, arguing that psychology should only study:",
    "options": [
      "Introspective dreams",
      "Objective measures of external stimuli and observable behavioral responses",
      "Brain surgery images",
      "Mathematical proofs"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Objective measures of external stimuli and observable behavioral responses' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Objective measures of external stimuli and observable behavioral responses' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "رفضت المدرسة النفسية \"السلوكية\" (التي دافع عنها جيه بي واتسون وبي إف سكينر) دراسة الحالات العقلية الداخلية، بحجة أن علم النفس يجب أن يدرس فقط:",
    "optionsAr": [
      "أحلام استبطانية",
      "المقاييس الموضوعية للمثيرات الخارجية والاستجابات السلوكية الملحوظة",
      "صور عمليات المخ",
      "البراهين الرياضية"
    ]
  },
  {
    "id": 241,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Cognitive psychology views the brain as an information-processing system. Who formulated the 1943 three-step mental model (stimulus -> internal representation -> action)?",
    "options": [
      "Kenneth Craik",
      "B.F. Skinner",
      "Sigmund Freud",
      "Ivan Pavlov"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Kenneth Craik' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Kenneth Craik' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "ينظر علم النفس المعرفي إلى الدماغ باعتباره نظامًا لمعالجة المعلومات. من الذي صاغ النموذج العقلي ثلاثي الخطوات لعام 1943 (التحفيز -> التمثيل الداخلي -> الفعل)؟",
    "optionsAr": [
      "كينيث كريك",
      "بي إف سكينر",
      "سيغموند فرويد",
      "إيفان بافلوف"
    ]
  },
  {
    "id": 242,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "At which historic 1956 symposium did Allen Newell, Herbert Simon, Noam Chomsky, and George Miller present landmark papers that sparked the Cognitive Revolution?",
    "options": [
      "MIT Symposium on Information Theory",
      "The Royal Society Meeting in London",
      "The IEEE Standards Convention",
      "The World Economic Forum"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'MIT Symposium on Information Theory' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'MIT Symposium on Information Theory' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في أي ندوة تاريخية عام 1956 قدم ألين نيويل، وهربرت سايمون، ونعوم تشومسكي، وجورج ميلر أوراقًا بحثية تاريخية أشعلت شرارة الثورة المعرفية؟",
    "optionsAr": [
      "ندوة معهد ماساتشوستس للتكنولوجيا حول نظرية المعلومات",
      "اجتماع الجمعية الملكية في لندن",
      "اتفاقية معايير IEEE",
      "المنتدى الاقتصادي العالمي"
    ]
  },
  {
    "id": 243,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "George Miller's famous 1956 psychology paper demonstrated that human short-term working memory capacity is approximately:",
    "options": [
      "7 plus or minus 2 chunks",
      "100 items",
      "1 item only",
      "Infinite"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار '7 plus or minus 2 chunks' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option '7 plus or minus 2 chunks' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "أوضحت ورقة علم النفس الشهيرة لجورج ميلر عام 1956 أن سعة الذاكرة العاملة قصيرة المدى للإنسان تبلغ تقريبًا:",
    "optionsAr": [
      "7 قطع زائد أو ناقص 2",
      "100 عنصر",
      "عنصر واحد فقط",
      "لانهائي"
    ]
  },
  {
    "id": 244,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Why was the decline of behaviorism and the rise of cognitive psychology essential for the growth of modern AI?",
    "options": [
      "It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs",
      "It proved that hardware cannot be built without wooden gears",
      "It banned the use of mathematical logic in computer science",
      "It proved that animals do not possess neural systems"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "لماذا كان تراجع السلوكية وصعود علم النفس المعرفي ضروريًا لنمو الذكاء الاصطناعي الحديث؟",
    "optionsAr": [
      "لقد سمح للباحثين بصياغة الهياكل المعرفية الداخلية والمعتقدات والأهداف بشكل شرعي داخل برامج الكمبيوتر",
      "لقد أثبت أنه لا يمكن بناء الأجهزة بدون التروس الخشبية",
      "حظر استخدام المنطق الرياضي في علوم الكمبيوتر",
      "لقد أثبت أن الحيوانات لا تمتلك أنظمة عصبية"
    ]
  },
  {
    "id": 245,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Who designed the mechanical 'Analytical Engine' in 1834, recognized as the earliest mechanical precursor to the modern programmable general-purpose computer?",
    "options": [
      "Charles Babbage",
      "Blaise Pascal",
      "Gottfried Leibniz",
      "John von Neumann"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Charles Babbage' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Charles Babbage' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "من الذي صمم \"المحرك التحليلي\" الميكانيكي في عام 1834، والذي تم الاعتراف به باعتباره أول مقدمة ميكانيكية للكمبيوتر الحديث متعدد الأغراض القابل للبرمجة؟",
    "optionsAr": [
      "تشارلز باباج",
      "بليز باسكال",
      "جوتفريد لايبنيز",
      "جون فون نيومان"
    ]
  },
  {
    "id": 246,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Ada Lovelace, considered the world's first computer programmer, made which famous objection regarding machine intelligence?",
    "options": [
      "The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform",
      "Machines will definitely destroy humanity within 50 years",
      "Mechanical gears cannot represent prime numbers",
      "Only digital electronic circuits can perform addition"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "أدا لوفلايس، التي تعتبر أول مبرمجة كمبيوتر في العالم، ما هو الاعتراض الشهير فيما يتعلق بذكاء الآلة؟",
    "optionsAr": [
      "ليس لدى المحرك التحليلي أي ادعاءات لإنشاء أي شيء؛ يمكنها أن تفعل كل ما نعرف كيفية تنفيذه",
      "الآلات ستدمر البشرية حتماً خلال 50 عاماً",
      "لا يمكن للتروس الميكانيكية أن تمثل الأعداد الأولية",
      "الدوائر الإلكترونية الرقمية فقط هي التي يمكنها إجراء عملية الجمع"
    ]
  },
  {
    "id": 247,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "During World War II, Alan Turing's codebreaking team at Bletchley Park designed which electro- mechanical machine to decipher German military Enigma communications?",
    "options": [
      "The Bombe",
      "ENIAC",
      "Deep Blue",
      "Analytical Engine"
    ],
    "correctAnswer": 0,
    "explanationAr": "اختبار تورينج (آلان تورينج 1950) يمثل مقاربة 'التصرف كالبشر' (Acting Humanly) من خلال محادثة نصية تقيس قدرة الآلة على توليد استجابات لا يمكن تمييزها عن الإنسان.",
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human.",
    "questionAr": "خلال الحرب العالمية الثانية، صمم فريق آلان تورينج لفك الشفرات في بلتشلي بارك أي آلة كهروميكانيكية يمكنها فك رموز اتصالات إنجما العسكرية الألمانية؟",
    "optionsAr": [
      "القنبلة",
      "اينياك",
      "ديب بلو",
      "المحرك التحليلي"
    ]
  },
  {
    "id": 248,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "What ancient hydraulic device built by Ktesibios of Alexandria (c. 250 BCE) is cited as an early historical self-regulating feedback control system?",
    "options": [
      "A water clock with a float regulator",
      "A steam engine governor",
      "An electric relay circuit",
      "An abacus"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'A water clock with a float regulator' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'A water clock with a float regulator' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "ما هو الجهاز الهيدروليكي القديم الذي بناه كتيسيبيوس السكندري (حوالي 250 قبل الميلاد) والذي تم الاستشهاد به باعتباره نظامًا تاريخيًا مبكرًا للتحكم في التغذية الراجعة ذاتي التنظيم؟",
    "optionsAr": [
      "ساعة مائية بمنظم العوامة",
      "حاكم المحرك البخاري",
      "دائرة التتابع الكهربائي",
      "المعداد"
    ]
  },
  {
    "id": 249,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Norbert Wiener published a foundational 1948 book that formalized feedback loops and control in animals and machines under the title:",
    "options": [
      "Cybernetics",
      "The Computer and the Brain",
      "Mind and Matter",
      "Robot Dynamics"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Cybernetics' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Cybernetics' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "نشر نوربرت وينر كتابًا تأسيسيًا عام 1948 أضفى طابعًا رسميًا على حلقات التغذية الراجعة والتحكم في الحيوانات والآلات تحت عنوان:",
    "optionsAr": [
      "علم التحكم الآلي",
      "الكمبيوتر والدماغ",
      "العقل والمادة",
      "ديناميات الروبوت"
    ]
  },
  {
    "id": 250,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "How did classical control theory historically differ in focus from mainstream artificial intelligence?",
    "options": [
      "Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning",
      "Control theory does not use sensors or actuators",
      "AI only studies games, while control theory only studies astronomy",
      "Control theory was invented after deep learning"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "كيف اختلفت نظرية التحكم الكلاسيكية تاريخياً في التركيز عن الذكاء الاصطناعي السائد؟",
    "optionsAr": [
      "ركزت نظرية التحكم على مساحات الحالة المستمرة التي يحكمها حساب التفاضل والتكامل والمعادلات التفاضلية، بينما ركز الذكاء الاصطناعي المبكر على التفكير المنطقي والرمزي المنفصل",
      "نظرية التحكم لا تستخدم أجهزة الاستشعار أو المحركات",
      "الذكاء الاصطناعي يدرس الألعاب فقط، بينما نظرية التحكم تدرس علم الفلك فقط",
      "تم اختراع نظرية التحكم بعد التعلم العميق"
    ]
  },
  {
    "id": 251,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1957, which linguist published 'Syntactic Structures', showing that human language could not be explained by simple behaviorist Markovian word chains?",
    "options": [
      "Noam Chomsky",
      "B.F. Skinner",
      "Ferdinand de Saussure",
      "Roman Jakobson"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Noam Chomsky' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Noam Chomsky' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 1957، من هو اللغوي الذي نشر كتابه \"البنى النحوية\"، الذي يوضح أن اللغة البشرية لا يمكن تفسيرها من خلال سلاسل كلمات ماركوفية سلوكية بسيطة؟",
    "optionsAr": [
      "نعوم تشومسكي",
      "بي إف سكينر",
      "فرديناند دي سوسير",
      "رومان جاكوبسون"
    ]
  },
  {
    "id": 252,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The intersection of formal linguistics and artificial intelligence gave birth to which major research subfield?",
    "options": [
      "Computational Linguistics (Natural Language Processing)",
      "Computer Graphics",
      "Solid-State Physics",
      "Cryptanalysis"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Computational Linguistics (Natural Language Processing)' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Computational Linguistics (Natural Language Processing)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "أدى التقاطع بين اللغويات الرسمية والذكاء الاصطناعي إلى ولادة أي مجال فرعي رئيسي للبحث؟",
    "optionsAr": [
      "اللغويات الحاسوبية (معالجة اللغات الطبيعية)",
      "رسومات الحاسوب",
      "فيزياء الحالة الصلبة",
      "تحليل الشفرات"
    ]
  },
  {
    "id": 253,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Why did early researchers quickly discover that translating or understanding natural language requires extensive common-sense world knowledge?",
    "options": [
      "Because dictionaries contain no words",
      "Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context",
      "Because computers cannot store alphabet letters",
      "Because grammar rules are identical in all languages"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "لماذا اكتشف الباحثون الأوائل بسرعة أن ترجمة اللغة الطبيعية أو فهمها يتطلب معرفة عالمية واسعة النطاق بالفطرة السليمة؟",
    "optionsAr": [
      "لأن القواميس لا تحتوي على كلمات",
      "لأن الجمل تحتوي على غموض معجمي ونحوي هائل لا يمكن حله إلا باستخدام سياق عالم الخلفية",
      "لأن أجهزة الكمبيوتر لا تستطيع تخزين الحروف الهجائية",
      "لأن القواعد النحوية متطابقة في جميع اللغات"
    ]
  },
  {
    "id": 254,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Gordon Moore's empirical observation (Moore's Law) historically stated that:",
    "options": [
      "The number of transistors on an integrated circuit doubles approximately every 18 to 24 months",
      "Software error rates increase by 50% every year",
      "AI systems will replace all human workers by 1980",
      "Computer screen resolutions double every week"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "ملاحظة جوردون مور التجريبية (قانون مور) تنص تاريخياً على ما يلي:",
    "optionsAr": [
      "عدد الترانزستورات في الدائرة المتكاملة يتضاعف تقريباً كل 18 إلى 24 شهراً",
      "معدلات الأخطاء البرمجية ترتفع بنسبة 50% كل عام",
      "أنظمة الذكاء الاصطناعي ستحل محل جميع العاملين البشريين بحلول عام 1980",
      "تتضاعف دقة شاشة الكمبيوتر كل أسبوع"
    ]
  },
  {
    "id": 255,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The first recognized mathematical and computational model of an artificial neural network was published in 1943 by:",
    "options": [
      "Warren McCulloch and Walter Pitts",
      "John von Neumann and Norbert Wiener",
      "Marvin Minsky and Claude Shannon",
      "Donald Hebb and Frank Rosenblatt"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Warren McCulloch and Walter Pitts' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Warren McCulloch and Walter Pitts' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "تم نشر أول نموذج رياضي وحسابي معترف به للشبكة العصبية الاصطناعية في عام 1943 بواسطة:",
    "optionsAr": [
      "وارن ماكولوتش ووالتر بيتس",
      "جون فون نيومان ونوربرت وينر",
      "مارفن مينسكي وكلود شانون",
      "دونالد هيب وفرانك روزنبلات"
    ]
  },
  {
    "id": 256,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Donald Hebb (1949) introduced an influential neurophysiological learning rule which demonstrated that:",
    "options": [
      "Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')",
      "Memory capacity is strictly limited to 1,000 facts",
      "Neurons transmit signals purely mechanically via fluids",
      "Neural networks cannot learn linear functions"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "قدم دونالد هب (1949) قاعدة تعلم فسيولوجية عصبية مؤثرة أظهرت ما يلي:",
    "optionsAr": [
      "تتقوى الوصلات المتشابكة عندما تنشط خليتان عصبيتان في وقت واحد (\"الخلايا العصبية التي تنطلق معًا، وتتصل ببعضها البعض\")",
      "سعة الذاكرة محدودة بشكل صارم بـ 1000 حقيقة",
      "تنقل الخلايا العصبية الإشارات بطريقة ميكانيكية بحتة عبر السوائل",
      "لا تستطيع الشبكات العصبية تعلم الوظائف الخطية"
    ]
  },
  {
    "id": 257,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1951, Marvin Minsky and Dean Edmonds built the first operational artificial neural network computer, named:",
    "options": [
      "SNARC",
      "ENIAC",
      "Deep Blue",
      "Shakey"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'SNARC' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'SNARC' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 1951، قام مارفن مينسكي ودين إدموندز ببناء أول حاسوب تشغيلي للشبكة العصبية الاصطناعية، وسمي:",
    "optionsAr": [
      "سنارك",
      "اينياك",
      "ديب بلو",
      "هش"
    ]
  },
  {
    "id": 258,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The official birth of Artificial Intelligence as an independent academic discipline occurred at the historic two-month workshop in 1956 held at:",
    "options": [
      "Harvard University",
      "Dartmouth College",
      "Stanford University",
      "Oxford University"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Dartmouth College' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Dartmouth College' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "حدثت الولادة الرسمية للذكاء الاصطناعي كنظام أكاديمي مستقل في ورشة العمل التاريخية التي استمرت لمدة شهرين في عام 1956 والتي عقدت في:",
    "optionsAr": [
      "جامعة هارفارد",
      "كلية دارتموث",
      "جامعة ستانفورد",
      "جامعة أكسفورد"
    ]
  },
  {
    "id": 259,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Which software program, demonstrated by Allen Newell and Herbert Simon at Dartmouth in 1956, is widely celebrated as the first AI program?",
    "options": [
      "Logic Theorist",
      "General Problem Solver",
      "Deep Blue",
      "DENDRAL"
    ],
    "correctAnswer": 0,
    "explanationAr": "ورشة عمل دارتموث الصيفية عام 1956 هي المولد الرسمي لميدان الذكاء الاصطناعي كعلم مستقل، وفيها صاغ جون مكارثي مصطلح 'Artificial Intelligence'.",
    "explanationEn": "The 1956 Dartmouth Summer Research Project officially birthed AI as an academic discipline, organized by John McCarthy who coined the term.",
    "questionAr": "ما هو البرنامج البرمجي، الذي عرضه ألين نيويل وهربرت سيمون في دارتموث عام 1956، والذي يحظى بالاحتفاء به على نطاق واسع باعتباره أول برنامج للذكاء الاصطناعي؟",
    "optionsAr": [
      "المنظر المنطقي",
      "حل المشكلات العامة",
      "ديب بلو",
      "ديندرال"
    ]
  },
  {
    "id": 260,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1952, Arthur Samuel created a landmark program at IBM that played which game, learning to become a better player than its human creator?",
    "options": [
      "Checkers",
      "Chess",
      "Go",
      "Backgammon"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Checkers' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Checkers' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 1952، أنشأ آرثر صموئيل برنامجًا تاريخيًا في شركة IBM لعب أي لعبة، وتعلم كيف يصبح لاعبًا أفضل من مخترعها البشري؟",
    "optionsAr": [
      "لعبة الداما",
      "شطرنج",
      "اذهب",
      "لعبة الطاولة"
    ]
  },
  {
    "id": 261,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Which influential 1973 report published in the UK heavily criticized AI research for failing to achieve its grand promises, triggering severe funding cuts?",
    "options": [
      "The Lighthill Report",
      "The Turing Review",
      "The Dartmouth Manifesto",
      "The ALPAC Report"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'The Lighthill Report' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'The Lighthill Report' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "ما هو التقرير المؤثر الصادر عام 1973 والذي نُشر في المملكة المتحدة والذي انتقد بشدة أبحاث الذكاء الاصطناعي لفشلها في تحقيق وعودها الكبرى، مما أدى إلى تخفيضات حادة في التمويل؟",
    "optionsAr": [
      "تقرير لايتهيل",
      "مراجعة تورينج",
      "بيان دارتموث",
      "تقرير الألباك"
    ]
  },
  {
    "id": 262,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1969, Marvin Minsky and Seymour Papert published the book 'Perceptrons', mathematically proving that single-layer perceptrons could not compute which simple function?",
    "options": [
      "AND",
      "OR",
      "XOR (Exclusive-OR)",
      "NOT"
    ],
    "correctAnswer": 2,
    "explanationAr": "كتاب 'Perceptrons' لمينسكي وبابرت (1969) أثبت رياضياً عجز شبكات البيرسبترون أحادية الطبقة عن تعلم الدوال غير الخطية مثل دالة XOR، مما أدى لأول شتاء للذكاء الاصطناعي.",
    "explanationEn": "Minsky and Papert's 1969 book showed that single-layer perceptrons cannot learn linearly inseparable functions like XOR, triggering the first AI winter.",
    "questionAr": "في عام 1969، نشر مارفن مينسكي وسيمور بابيرت كتابًا بعنوان \"الإدراك الحسي\"، حيث أثبتا رياضيًا أن الإدراك الحسي أحادي الطبقة لا يمكنه حساب أي وظيفة بسيطة؟",
    "optionsAr": [
      "و",
      "أو",
      "XOR (حصريا-OR)",
      "لا"
    ]
  },
  {
    "id": 263,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In the 1970s, expert systems shifted AI focus toward domain-specific knowledge. Which famous expert system diagnosed infectious blood diseases using 450 rules?",
    "options": [
      "MYCIN",
      "DENDRAL",
      "PROSPECTOR",
      "XCON"
    ],
    "correctAnswer": 0,
    "explanationAr": "الأنظمة الخبيرة (Expert Systems) اعتمدت على تمثيل المعرفة المتخصصة عبر قواعد استدلالية تحاكي تفكير الخبراء البشريين في مجالات دقيقة كالطب والكيمياء.",
    "explanationEn": "Expert systems represented a shift from general-purpose problem solvers to domain-specific knowledge bases combining facts and heuristic inference rules.",
    "questionAr": "في السبعينيات، حولت الأنظمة المتخصصة تركيز الذكاء الاصطناعي نحو المعرفة الخاصة بمجال معين. ما هو النظام الخبير الشهير الذي قام بتشخيص أمراض الدم المعدية باستخدام 450 قاعدة؟",
    "optionsAr": [
      "مايسين",
      "دندرال",
      "المنقب",
      "XCON"
    ]
  },
  {
    "id": 264,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The commercial success of expert systems in the 1980s was highlighted by R1 (XCON), an expert system developed for Digital Equipment Corporation (DEC) to:",
    "options": [
      "Translate Chinese into English",
      "Configure customer computer orders for VAX computer systems",
      "Drive an automated delivery truck",
      "Predict international stock market prices"
    ],
    "correctAnswer": 1,
    "explanationAr": "الأنظمة الخبيرة (Expert Systems) اعتمدت على تمثيل المعرفة المتخصصة عبر قواعد استدلالية تحاكي تفكير الخبراء البشريين في مجالات دقيقة كالطب والكيمياء.",
    "explanationEn": "Expert systems represented a shift from general-purpose problem solvers to domain-specific knowledge bases combining facts and heuristic inference rules.",
    "questionAr": "تم تسليط الضوء على النجاح التجاري للأنظمة المتخصصة في الثمانينيات من خلال نظام R1 (XCON)، وهو نظام خبير تم تطويره لصالح شركة Digital Equipment Corporation (DEC) من أجل:",
    "optionsAr": [
      "ترجمة الصينية إلى الإنجليزية",
      "تكوين طلبات كمبيوتر العميل لأنظمة كمبيوتر VAX",
      "قيادة شاحنة توصيل آلية",
      "توقع أسعار أسواق الأسهم العالمية"
    ]
  },
  {
    "id": 265,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1986, the 'Connectionist' renaissance was ignited by Rumelhart, Hinton, and McClelland through the widespread popularization of which learning algorithm?",
    "options": [
      "Backpropagation",
      "A* Search",
      "Uniform-Cost Search",
      "Alpha-Beta Pruning"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Backpropagation' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Backpropagation' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 1986، أشعل روميلهارت وهينتون وماكليلاند نهضة \"الاتصالية\" من خلال النشر الواسع النطاق لأي خوارزمية تعليمية؟",
    "optionsAr": [
      "الانتشار العكسي",
      "أ* بحث",
      "بحث التكلفة الموحدة",
      "تشذيب ألفا بيتا"
    ]
  },
  {
    "id": 266,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1988, Judea Pearl transformed artificial intelligence by introducing which formal framework for reasoning under uncertainty?",
    "options": [
      "Bayesian Networks",
      "Semantic Web",
      "Genetic Algorithms",
      "Predicate Calculus"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Bayesian Networks' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Bayesian Networks' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 1988، قامت شركة جوديا بيرل بتحويل الذكاء الاصطناعي من خلال تقديم أي إطار رسمي للاستدلال في ظل عدم اليقين؟",
    "optionsAr": [
      "الشبكات الافتراضية",
      "الويب الدلالي",
      "الخوارزميات الجينية",
      "حساب التفاضل والتكامل المسند"
    ]
  },
  {
    "id": 267,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 1997, IBM's Deep Blue chess computer made historical headlines by defeating which reigning World Chess Champion in a standard match?",
    "options": [
      "Garry Kasparov",
      "Anatoly Karpov",
      "Magnus Carlsen",
      "Bobby Fischer"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Garry Kasparov' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Garry Kasparov' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 1997، تصدر كمبيوتر الشطرنج Deep Blue التابع لشركة IBM عناوين الأخبار التاريخية بفوزه على أي بطل عالمي للشطرنج في مباراة عادية؟",
    "optionsAr": [
      "غاري كاسباروف",
      "أناتولي كاربوف",
      "ماجنوس كارلسن",
      "بوبي فيشر"
    ]
  },
  {
    "id": 268,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The modern Deep Learning era was dramatically catalyzed in 2012 when AlexNet achieved a historic breakthrough on which large-scale computer vision dataset?",
    "options": [
      "ImageNet",
      "MNIST",
      "CIFAR-10",
      "COCO"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'ImageNet' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'ImageNet' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "تم تحفيز عصر التعلم العميق الحديث بشكل كبير في عام 2012 عندما حققت AlexNet إنجازًا تاريخيًا في أي مجموعة بيانات رؤية حاسوبية واسعة النطاق؟",
    "optionsAr": [
      "إيماج نت",
      "منيست",
      "سيفار-10",
      "كوكو"
    ]
  },
  {
    "id": 269,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "In 2016, DeepMind's AlphaGo defeated world champion Lee Sedol in the ancient board game of Go by combining deep neural networks with:",
    "options": [
      "Monte Carlo Tree Search (MCTS)",
      "Depth-First Search with backtracking",
      "Rule-based expert systems",
      "Linear programming"
    ],
    "correctAnswer": 0,
    "explanationAr": "الخيار 'Monte Carlo Tree Search (MCTS)' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Monte Carlo Tree Search (MCTS)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "في عام 2016، هزم AlphaGo من DeepMind بطل العالم Lee Sedol في لعبة Go اللوحية القديمة من خلال الجمع بين الشبكات العصبية العميقة مع:",
    "optionsAr": [
      "بحث شجرة مونت كارلو (MCTS)",
      "العمق-البحث الأول مع التراجع",
      "النظم الخبيرة المبنية على القواعد",
      "البرمجة الخطية"
    ]
  },
  {
    "id": 270,
    "type": "mcq",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The 'value alignment problem' in modern AI safety research refers to the challenge of:",
    "options": [
      "Aligning columns in database tables",
      "Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions",
      "Setting identical retail prices for AI hardware",
      "Calibrating accelerometer sensors in robots"
    ],
    "correctAnswer": 1,
    "explanationAr": "الخيار 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions' يوضح هذا الحدث أو المبدأ التاريخي بدقة؛ حيث شكل ركيزة أساسية في تطور الذكاء الاصطناعي ومناهجه الفلسفية والرياضية.",
    "explanationEn": "The option 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence.",
    "questionAr": "تشير \"مشكلة محاذاة القيمة\" في أبحاث سلامة الذكاء الاصطناعي الحديثة إلى التحدي المتمثل في:",
    "optionsAr": [
      "محاذاة الأعمدة في جداول قاعدة البيانات",
      "التأكد من أن أنظمة الذكاء الاصطناعي المستقلة تسعى إلى تحقيق أهداف تتوافق حقًا مع القيم والنوايا الإنسانية",
      "تحديد أسعار تجزئة متطابقة لأجهزة الذكاء الاصطناعي",
      "معايرة أجهزة استشعار التسارع في الروبوتات"
    ]
  },
  {
    "id": 271,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The standard Turing Test deliberately avoids direct physical interaction between the interrogator and the computer to ensure that intelligence, not physical appearance, is tested.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة (True). اختبار تورينج القياسي يتجنب التفاعل الجسدي المتعمد ليركز حصرياً على فحص الذكاء التواصلي والإدراكي دون التأثر بالشكل الفيزيائي أو المظهر الخارجي.",
    "explanationEn": "True. The standard Turing Test deliberately avoids physical contact to ensure that intellectual ability, not physical appearance, is being evaluated.",
    "questionAr": "يتجنب اختبار تورينج القياسي عمدا التفاعل الجسدي المباشر بين المحقق والكمبيوتر لضمان اختبار الذكاء، وليس المظهر الجسدي.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 272,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Passing the Total Turing Test requires a machine to possess both computer vision and physical robotics capabilities.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "يتطلب اجتياز اختبار تورينج الشامل أن تمتلك الآلة رؤية الكمبيوتر وقدرات الروبوتات المادية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 273,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Cognitive Science combines computer AI models with experimental psychology techniques to construct testable theories of the human mind.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "تجمع العلوم المعرفية بين نماذج الذكاء الاصطناعي الحاسوبية وتقنيات علم النفس التجريبي لبناء نظريات قابلة للاختبار للعقل البشري.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 274,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Aristotle's syllogisms were designed to provide patterns for argument structures that always yielded correct conclusions whenever the premises were true.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "تم تصميم القياسات المنطقية لأرسطو لتوفير أنماط لبنيات الحجج التي تسفر دائمًا عن استنتاجات صحيحة عندما تكون المقدمات صحيحة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 275,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "A rational agent is one that acts so as to achieve the best outcome or, when there is uncertainty, the best expected outcome.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "العامل العقلاني هو الذي يتصرف لتحقيق أفضل النتائج، أو، عندما يكون هناك عدم يقين، أفضل النتائج المتوقعة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 276,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Under the rational agent approach, making correct logical deductions is the ONLY possible way for an agent to exhibit rational behavior.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "في ظل نهج الوكيل العقلاني، فإن إجراء الاستنتاجات المنطقية الصحيحة هو الطريقة الوحيدة الممكنة للوكيل لإظهار السلوك العقلاني.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 277,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "René Descartes was an advocate of materialism, arguing that the human mind is entirely identical to the physical machinery of the brain.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "كان رينيه ديكارت مدافعًا عن المادية، مجادلًا بأن العقل البشري مطابق تمامًا للآلات الفيزيائية للدماغ.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 278,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Empiricism holds that knowledge is formed primarily through sensory perception and experiential observation rather than innate mental ideas.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "ترى التجريبية أن المعرفة تتشكل في المقام الأول من خلال الإدراك الحسي والملاحظة التجريبية بدلاً من الأفكار العقلية الفطرية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 279,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Kurt Gödel proved that any sufficiently powerful formal mathematical system is both complete and fully decidable.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "أثبت كيرت جودل أن أي نظام رياضي رسمي قوي بما فيه الكفاية هو نظام كامل وقابل للتقرير بالكامل.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 280,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Alan Turing proved that there is no general algorithm capable of deciding whether an arbitrary computer program will eventually halt.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "أثبت آلان تورينج أنه لا توجد خوارزمية عامة قادرة على تحديد ما إذا كان برنامج الكمبيوتر التعسفي سيتوقف في النهاية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 281,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "If a problem is NP-complete, it is widely believed that no algorithm exists that can solve all problem instances in polynomial time.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "إذا كانت المشكلة كاملة NP، فمن المعتقد على نطاق واسع أنه لا توجد خوارزمية يمكنها حل جميع حالات المشكلة في وقت متعدد الحدود.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 282,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Thomas Bayes introduced the mathematical rule that enables prior probabilities to be updated in the presence of new sensory evidence.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "قدم توماس بايز القاعدة الرياضية التي تمكن من تحديث الاحتمالات السابقة في ظل وجود أدلة حسية جديدة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 283,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Von Neumann and Morgenstern proved that any rational agent possessing consistent preferences among uncertain lotteries must behave as if it maximizes expected utility.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "أثبت فون نيومان ومورجنسترن أن أي وكيل عقلاني يمتلك تفضيلات متسقة بين اليانصيب غير المؤكد يجب أن يتصرف كما لو كان يعمل على تعظيم المنفعة المتوقعة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 284,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Herbert Simon's concept of 'satisficing' states that agents should always search until they compute the mathematically optimal solution.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "ينص مفهوم هربرت سيمون عن \"المرضية\" على أنه يجب على الوكلاء البحث دائمًا حتى يحسبوا الحل الأمثل رياضيًا.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 285,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Individual biological neurons in the human brain have significantly faster switching speeds than modern silicon microprocessor transistors.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "تتمتع الخلايا العصبية البيولوجية الفردية في الدماغ البشري بسرعات تحويل أسرع بكثير من ترانزستورات المعالجات الدقيقة السيليكونية الحديثة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 286,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The human brain contains approximately 10^11 neurons, with each neuron connected to thousands of other neurons via synapses.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "يحتوي الدماغ البشري على ما يقرب من 10^11 خلية عصبية، حيث ترتبط كل خلية عصبية بآلاف الخلايا العصبية الأخرى عبر المشابك العصبية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 287,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Psychological behaviorism actively encouraged the study of internal representations, beliefs, and conscious desires.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "شجعت السلوكية النفسية بنشاط دراسة التمثيلات الداخلية والمعتقدات والرغبات الواعية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 288,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Ada Lovelace anticipated that the Analytical Engine would be capable of genuine original thought completely independent of human programming.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "توقعت آدا لوفليس أن يكون المحرك التحليلي قادرًا على التفكير الأصلي الحقيقي والمستقل تمامًا عن البرمجة البشرية.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 289,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Norbert Wiener's work on Cybernetics defined self-regulation in machines through feedback loops designed to minimize error between current state and goal state.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "حدد عمل نوربرت وينر في علم التحكم الآلي التنظيم الذاتي في الآلات من خلال حلقات ردود الفعل المصممة لتقليل الخطأ بين الحالة الحالية وحالة الهدف.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 290,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Noam Chomsky demonstrated that the infinite syntactic creativity of human natural language could be adequately modeled by simple finite-state Markov chains.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "أثبت نعوم تشومسكي أن الإبداع النحوي اللامتناهي للغة الطبيعية البشرية يمكن صياغته بشكل مناسب من خلال سلاسل ماركوف البسيطة ذات الحالة المحدودة.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 291,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The 1943 McCulloch-Pitts neural model demonstrated that suitable networks of interconnected artificial neurons could compute any computable logical function.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "أظهر نموذج ماكولوتش-بيتس العصبي لعام 1943 أن الشبكات المناسبة من الخلايا العصبية الاصطناعية المترابطة يمكنها حساب أي وظيفة منطقية قابلة للحساب.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 292,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The term 'Artificial Intelligence' was officially coined by John McCarthy in the 1955 proposal for the 1956 Dartmouth Summer Research Project.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "تمت صياغة مصطلح \"الذكاء الاصطناعي\" رسميًا من قبل جون مكارثي في ​​​​مقترح عام 1955 لمشروع أبحاث دارتموث الصيفي لعام 1956.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 293,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Newell and Simon's Logic Theorist program proved mathematical theorems so elegantly that it found a shorter proof for one theorem than Russell and Whitehead had originally published.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "أثبت برنامج Newell and Simon's Logic Theorist النظريات الرياضية بشكل رائع لدرجة أنه وجد دليلًا أقصر لنظرية واحدة مما نشره راسل ووايتهيد في الأصل.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 294,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The early failure of literal machine translation projects (such as translating English to Russian) contributed significantly to the first AI Winter.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "ساهم الفشل المبكر لمشاريع الترجمة الآلية الحرفية (مثل الترجمة من الإنجليزية إلى الروسية) بشكل كبير في أول شتاء للذكاء الاصطناعي.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 295,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Minsky and Papert's 1969 book mathematically proved that multi-layer neural networks could never learn nonlinear functions under any circumstances.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "أثبت كتاب مينسكي وبابيرت عام 1969 رياضيًا أن الشبكات العصبية متعددة الطبقات لا يمكنها أبدًا تعلم الوظائف غير الخطية تحت أي ظرف من الظروف.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 296,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The development of expert systems in the 1970s marked a major paradigm shift in AI from general-purpose search algorithms to domain-specific knowledge bases.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "كان تطوير الأنظمة المتخصصة في السبعينيات بمثابة تحول كبير في نموذج الذكاء الاصطناعي من خوارزميات البحث ذات الأغراض العامة إلى قواعد المعرفة الخاصة بالمجال.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 297,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The popularization of the backpropagation algorithm in 1986 solved the problem of training multi-layer neural networks.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "أدى تعميم خوارزمية الانتشار العكسي في عام 1986 إلى حل مشكلة تدريب الشبكات العصبية متعددة الطبقات.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 298,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "Bayesian Networks provide a mathematically principled way to represent conditional dependencies and reason probabilistically under uncertainty.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة؛ حيث تمثل قاعدة فكرية وتاريخية موثقة في تطور الذكاء الاصطناعي ودراسة الآلات الذكية.",
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI.",
    "questionAr": "توفر الشبكات البايزية طريقة مبدئية رياضيًا لتمثيل التبعيات الشرطية والتفكير الاحتمالي في ظل عدم اليقين.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 299,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The breakthrough of modern Deep Learning was driven primarily by novel mathematical theorems rather than the availability of massive datasets and parallel GPU computing power.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationAr": "العبارة خاطئة؛ فالواقع العلمي والتاريخي يثبت عكس ذلك تماماً، سواء في حدود الأنظمة أو الشروط الصارمة للاختبارات المعرفية.",
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities.",
    "questionAr": "كان الاختراق في التعلم العميق الحديث مدفوعًا في المقام الأول بنظريات رياضية جديدة بدلاً من توفر مجموعات البيانات الضخمة وقوة الحوسبة المتوازية لوحدة معالجة الرسومات.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  },
  {
    "id": 300,
    "type": "true_false",
    "chapterId": 1,
    "chapter": "Chapter 1: Introduction to AI",
    "question": "The King Midas problem in AI safety refers to the peril where an agent flawlessly maximizes an objective that was specified incorrectly by its human designer.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationAr": "العبارة صحيحة (True). معضلة الملك ميداس (King Midas problem) تشير إلى الخطر الكامن في تحقيق الآلة للهدف المحدد لها بدقة حرفية مطلقة ولكن الهدف صيغ بطريقة خاطئة أو ناقصة، مسبباً كوارث غير مقصودة.",
    "explanationEn": "True. The King Midas problem describes the AI safety peril where an agent flawlessly optimizes a human-specified objective that was improperly or incompletely stated.",
    "questionAr": "تشير مشكلة King Midas في سلامة الذكاء الاصطناعي إلى الخطر المتمثل في قيام الوكيل بتعظيم الهدف الذي تم تحديده بشكل غير صحيح من قبل المصمم البشري.",
    "optionsAr": [
      "صواب (True)",
      "خطأ (False)"
    ]
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
