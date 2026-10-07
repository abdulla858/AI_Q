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
    "explanationEn": "An Agent is formally defined as any entity that perceives its environment through sensors and acts upon that environment through actuators."
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
    "explanationEn": "A Percept specifically refers to the agent's perceptual input at any given instant, distinct from the sequence of past inputs."
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
    "explanationEn": "The Percept Sequence represents the complete chronological record of everything the agent has ever perceived over its lifetime."
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
    "explanationEn": "The Agent Function is the abstract mathematical mapping that dictates the selected action for any given sequence of percepts."
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
    "explanationEn": "Mathematically, the agent function maps sequences of percepts (P*, where * is the Kleene star representing history of any length) to actions (A): f: P* -> A."
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
    "explanationEn": "In the formula Agent = Architecture + Program, the Architecture supplies the physical hardware, computing machinery, sensors, and actuators."
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
    "explanationEn": "The agent function is an abstract mathematical concept mapping percept sequences to actions, whereas the agent program is the concrete software implementation running on real hardware."
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
    "explanationEn": "A table-driven agent program requires the entire accumulated percept sequence as its lookup key to find the corresponding action."
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
    "explanationEn": "Table-driven agents fail because the lookup table size grows exponentially with the percept space and lifetime: sum of |P|^t, requiring astronomical memory."
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
    "explanationEn": "In a two-cell vacuum world, there are 2 possible agent locations times 2^2 = 4 possible dirt configurations, yielding 2 * 4 = 8 distinct physical states."
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
    "explanationEn": "With 8 possible states and 2 possible actions, the number of distinct mappings from states to actions is 2^8 = 256 possible functions."
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
    "explanationEn": "In control theory, a closed-loop system regulating a process variable to a set point without manual human intervention is known as a Controller."
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
    "explanationEn": "An agent that exists entirely in software environments (like a web crawler or algorithmic trading bot) is called a Softbot."
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
    "explanationEn": "The complete lookup table must index all possible percept sequences of lengths 1 through T, which sums to Σ(|P|^t) for t=1..T."
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
    "explanationEn": "The standard actions available in the basic two-location vacuum-cleaner world are Left, Right, Suck, and NoOp (No Operation)."
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
    "explanationEn": "Consequentialism evaluates the rationality of an agent's behavior purely based on its consequences—the desirability of the environment states achieved."
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
    "explanationEn": "The Performance Measure is an objective numerical criterion established by the designer to quantify an agent's success in its environment."
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
    "explanationEn": "Rewarding cleaning actions creates a loophole: a rational agent could clean dirt, dump it back out, and clean it again indefinitely to maximize score without keeping the room clean."
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
    "explanationEn": "Performance measures should be designed according to the desired state of the environment, not according to how the designer thinks the agent ought to behave."
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
    "explanationEn": "Rationality depends on four factors: (1) The performance measure, (2) Prior knowledge of the environment, (3) The percept sequence, and (4) The agent's available actions."
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
    "explanationEn": "Omniscience (knowing actual future outcomes) is NOT a factor of rationality. Rationality is about expected success given available information."
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
    "explanationEn": "Rationality maximizes expected performance, whereas perfection requires maximizing actual performance (which is impossible without omniscience in uncertain worlds)."
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
    "explanationEn": "Information gathering is an integral part of rationality because taking actions to modify future percepts helps make better-informed decisions."
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
    "explanationEn": "Exploration refers to an agent performing actions specifically to discover unknown aspects of its environment."
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
    "explanationEn": "Looking both ways is rational information gathering: it modifies future percepts to maximize expected safety rather than scoring direct points."
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
    "explanationEn": "An agent lacks Autonomy if its behavior relies primarily on the designer's built-in prior knowledge rather than learning from its own experience."
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
    "explanationEn": "High autonomy is attained when an agent learns from its percepts over time, compensating for partial or incorrect initial designer knowledge."
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
    "explanationEn": "PEAS stands for Performance measure, Environment, Actuators, and Sensors, formalizing the task environment specification."
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
    "explanationEn": "For an automated taxi driver, the performance measure includes safety, destination arrival speed, legal compliance, passenger comfort, and profit maximization."
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
    "explanationEn": "The principle of maximizing expected utility chooses the action maximizing expected utility: a = argmax_a E(U | a)."
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
    "explanationEn": "The option 'Performance measure, Environment, Actuators, Sensors' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "The option 'Specify the task environment (PEAS) as fully as possible' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment."
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
    "explanationEn": "Sensors for an automated taxi include cameras, radar, sonar, GPS, and speedometers to perceive traffic and surroundings."
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
    "explanationEn": "The option 'Driving smoothly to maximize comfort, safety, and passenger satisfaction' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "The option 'Accuracy in minimizing false positives and false negatives' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment."
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
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment."
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
    "explanationEn": "The option 'Percentage of parts placed into correct sorting bins' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "The option 'Digital cameras and tactile touch sensors' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "Actuators are the output mechanisms (such as steering, accelerators, brakes, or displays) that execute actions in the environment."
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
    "explanationEn": "The option 'The student's improvement and test score' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "An environment is fully observable if the agent's sensors provide complete access to the entire state of the environment at any given time."
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
    "explanationEn": "An environment is partially observable when sensors cannot detect all relevant aspects of the world due to noise or limited range."
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
    "explanationEn": "The option 'Deterministic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "In a deterministic environment, the next state is completely determined by the current state and the action executed by the agent."
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
    "explanationEn": "The option 'Episodic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "In an episodic environment, the agent's experience is divided into independent episodes where past actions do not affect future episodes."
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
    "explanationEn": "The option 'Semidynamic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "An environment is semidynamic if the environment itself does not change while the agent thinks, but the agent's performance score does (e.g. timed chess)."
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
    "explanationEn": "The option 'Discrete' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "Discrete environments have a countable number of distinct states and actions, while continuous environments feature continuous variables like position and time."
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
    "explanationEn": "The option 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "The option 'Maximizing one agent's performance measure minimizes the other's' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "The option 'The outcomes (or outcome probabilities) for all actions are fully given to the agent' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "An environment is partially observable when sensors cannot detect all relevant aspects of the world due to noise or limited range."
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
    "explanationEn": "The option 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "In a deterministic environment, the next state is completely determined by the current state and the action executed by the agent."
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
    "explanationEn": "The option 'Fully observable and Stochastic' is correct because it directly defines the behavioral mechanism and operational requirements of the intelligent agent."
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
    "explanationEn": "In a deterministic environment, the next state is completely determined by the current state and the action executed by the agent."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "True. This statement accurately describes agent architecture and how intelligent systems process percepts and internal representations."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "False. An agent cannot violate causal limits (such as depending on unborn future percepts) or execute open-loop actions in stochastic environments."
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
    "explanationEn": "A problem-solving agent is a goal-based agent that plans ahead by finding a sequence of actions that leads to a goal state before executing them."
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
    "explanationEn": "The correct choice 'Goal formulation' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Goal formulation -> Problem formulation -> Search -> Execution' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Because the predetermined sequence of actions is guaranteed to reach the goal without surprises' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Five components' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Heuristic decay rate' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'The state that results from executing action a in state s' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'a belongs to the set ACTIONS(s)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'A path leading from the initial state to any valid goal state' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'The sum of the individual step costs along the path' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Abstraction' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Is easier than solving the original unabstracted problem' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'A solution path that has the lowest path cost among all possible solutions' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'To provide concise, exact problem descriptions to compare algorithm performance' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata."
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
    "explanationEn": "The correct choice 'Moving the blank space Left, Right, Up, or Down' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Exactly one-half (50%)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "In the 8-puzzle, the permutation state space splits into two parity-separated components; exactly half the configurations (9! / 2 = 181,440) are reachable from any start state."
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
    "explanationEn": "The correct choice 'Over 10 trillion (16! / 2)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata."
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
    "explanationEn": "The correct choice 'Push scattered boxes to designated storage locations' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Touring problem where every city must be visited' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Cell layout and channel routing' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'The search space has one continuous dimension for each joint angle' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits."
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
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata."
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
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata."
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
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata."
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
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata."
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
    "explanationEn": "The state space is the set of all world states, while the search tree is the dynamic set of paths explored by the algorithm, where nodes contain parent and cost metadata."
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
    "explanationEn": "The frontier (or open list) is the collection of all leaf nodes generated so far that have not yet been expanded."
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
    "explanationEn": "The frontier (or open list) is the collection of all leaf nodes generated so far that have not yet been expanded."
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
    "explanationEn": "The correct choice 'Cycle (or loopy path)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Space Complexity' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Find a solution whenever one exists, and correctly report failure when there is none' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Always finds a solution path with the lowest path cost among all possible solutions' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'The maximum branching factor of the search tree' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'The depth of the shallowest optimal solution' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'The maximum length of any path in the state space (which may be infinite)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Diameter' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d)."
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
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d)."
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
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d)."
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
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d)."
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
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d)."
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
    "explanationEn": "The correct choice 'Uniform-Cost Search (UCS)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "Uniform-Cost Search (UCS) expands the node with lowest path cost g(n) via priority queue, guaranteeing cost-optimality with non-negative step costs."
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
    "explanationEn": "Uniform-Cost Search (UCS) expands the node with lowest path cost g(n) via priority queue, guaranteeing cost-optimality with non-negative step costs."
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
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal."
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
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal."
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
    "explanationEn": "Breadth-First Search (BFS) expands the shallowest nodes first using a FIFO queue. It is complete and optimal for uniform step costs, with exponential space O(b^d)."
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
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal."
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
    "explanationEn": "Depth-First Search (DFS) uses a LIFO stack to traverse down single branches. Its main benefit is linear memory complexity O(bm), but it is not cost-optimal."
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
    "explanationEn": "The correct choice 'Nodes at depth l are treated as if they have no successors' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Solution node, Failure, or Cutoff' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits."
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
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits."
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
    "explanationEn": "Iterative Deepening Search (IDS) combines the linear space efficiency of DFS with the completeness and optimality of BFS by repeatedly deepening depth limits."
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
    "explanationEn": "The correct choice 'It simultaneously searches forward from the initial state and backward from the goal state' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "The correct choice 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently."
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
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently."
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
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently."
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
    "explanationEn": "The frontier (or open list) is the collection of all leaf nodes generated so far that have not yet been expanded."
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
    "explanationEn": "Greedy Best-First Search is not cost-optimal because it evaluates nodes solely by heuristic distance to goal h(n), ignoring accumulated path cost g(n) and choosing locally appealing detours."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path."
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
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "A consistent heuristic satisfies the triangle inequality: h(n) <= c(n, a, n') + h(n'), ensuring f-values never decrease along any search path."
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
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently."
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
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently."
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
    "explanationEn": "A heuristic function h(n) estimates the cheapest path cost from node n to a goal state, guiding informed search algorithms efficiently."
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
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "The correct choice 'Relaxed problem' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path."
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
    "explanationEn": "An admissible heuristic never overestimates the true remaining cost to reach the goal: h(n) <= h*(n), guaranteeing that A* finds the optimal path."
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
    "explanationEn": "The correct choice 'Pattern database' accurately reflects the algorithmic rules and computational complexities governing problem-solving search methods."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "A* Search evaluates nodes via f(n) = g(n) + h(n). It guarantees optimal solutions when the heuristic h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "False. Implementing this method compromises optimality guarantees or risks infinite loops due to unmonitored state transitions."
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
    "explanationEn": "True. This represents a proven algorithmic property required to guarantee completeness and cost-optimality in search spaces."
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
    "explanationEn": "Russell & Norvig categorize definitions of AI into a 2x2 matrix along two axes: Thought processes vs. Behavior, and Human performance vs. Ideal rationality."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The option 'Cognitive Science' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Measuring processor clock speeds and memory voltage' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Aristotle' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Acting Rationally (The rational agent approach)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Optimize an objective or utility function specified by its human designers' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The option 'Does the 'right thing' based on what it knows and its performance measure' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Dualism' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Materialism (or Physicalism)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Empiricism' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'How general rules and future predictions can be justified on the basis of a finite number of past observations' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Logical theories connected to observable sensory observations' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'George Boole' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'First-order predicate calculus' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The option 'Exponentially with the size of the problem instances' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Thomas Bayes' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Gambling odds in games of chance' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The option 'John von Neumann and Oskar Morgenstern' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Probability Theory and Utility Theory' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Satisficing (making decisions that are 'good enough')' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Markov Decision Processes (MDPs)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Neuron' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Objective measures of external stimuli and observable behavioral responses' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Kenneth Craik' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'MIT Symposium on Information Theory' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option '7 plus or minus 2 chunks' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Charles Babbage' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The Turing Test (Alan Turing, 1950) defines the 'Acting Humanly' dimension of AI, testing whether machine responses in a text conversation are indistinguishable from a human."
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
    "explanationEn": "The option 'A water clock with a float regulator' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Cybernetics' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Noam Chomsky' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Computational Linguistics (Natural Language Processing)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Warren McCulloch and Walter Pitts' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'SNARC' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Dartmouth College' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The 1956 Dartmouth Summer Research Project officially birthed AI as an academic discipline, organized by John McCarthy who coined the term."
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
    "explanationEn": "The option 'Checkers' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'The Lighthill Report' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "Minsky and Papert's 1969 book showed that single-layer perceptrons cannot learn linearly inseparable functions like XOR, triggering the first AI winter."
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
    "explanationEn": "Expert systems represented a shift from general-purpose problem solvers to domain-specific knowledge bases combining facts and heuristic inference rules."
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
    "explanationEn": "Expert systems represented a shift from general-purpose problem solvers to domain-specific knowledge bases combining facts and heuristic inference rules."
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
    "explanationEn": "The option 'Backpropagation' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Bayesian Networks' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Garry Kasparov' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'ImageNet' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Monte Carlo Tree Search (MCTS)' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "The option 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions' is correct because it identifies the foundational historical, mathematical, or philosophical contribution to artificial intelligence."
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
    "explanationEn": "True. The standard Turing Test deliberately avoids physical contact to ensure that intellectual ability, not physical appearance, is being evaluated."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "True. This statement accurately records the established historical fact and philosophical rationale in the development of AI."
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
    "explanationEn": "False. The historical and scientific evidence contradicts this premise regarding cognitive testing and automated capabilities."
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
    "explanationEn": "True. The King Midas problem describes the AI safety peril where an agent flawlessly optimizes a human-specified objective that was improperly or incompletely stated."
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
