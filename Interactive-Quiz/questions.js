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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Agent'. يُعرَّف الوكيل (Agent) في الذكاء الاصطناعي بأنه أي كيان يدرك بيئته المحيطة عبر أجهزة الاستشعار (Sensors) ويؤثر فيها ويتصرف عبر المشغلات (Actuators).",
    "explanationEn": "The correct answer is B: 'Agent'. An Agent is fundamentally defined in AIMA as anything that perceives its environment through sensors and acts upon that environment through actuators."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Percept'. المُدرَك (Percept) يشير تحديداً إلى المدخلات الحسية للوكيل في لحظة زمنية معينة، بينما تمثل سلسلة المُدركات (Percept Sequence) التاريخ التراكمي الكامل لتلك المدخلات.",
    "explanationEn": "The correct answer is C: 'Percept'. A Percept refers specifically to the agent's sensory inputs at any given instant of time, whereas the percept sequence is the complete history of all percepts."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Percept sequence'. سلسلة المُدركات (Percept Sequence) تمثل السجل التاريخي التراكمي الكامل لكل ما التقطه الوكيل بحواسه منذ بدء تشغيله وحتى اللحظة الحالية.",
    "explanationEn": "The correct answer is B: 'Percept sequence'. The Percept Sequence is the complete chronological history of everything the agent has ever perceived during its entire operating lifetime."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Agent function'. دالة الوكيل (Agent Function) هي توصيف رياضي مجرد يربط أي سلسلة مُدركات معطاة بالفعل الذي يجب على الوكيل اتخاذه [f: P* -> A].",
    "explanationEn": "The correct answer is C: 'Agent function'. The Agent Function is the abstract mathematical mapping from every possible percept sequence to an action [f: P* -> A]."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'f: P* -> A'. دالة الوكيل (Agent Function) هي دالة رياضية مجردة تربط سلاسل المُدركات بالأفعال المناسبة (f: P* -> A).",
    "explanationEn": "The correct answer is B: 'f: P* -> A'. The Agent Function is the abstract mathematical mapping from percept histories to actions: f: P* -> A."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The computing hardware, sensors, and actuators'. بنية الوكيل (Architecture) توفر العتاد الحاسوبي وأجهزة الاستشعار والمشغلات التي يعمل عليها برنامج الوكيل (Program).",
    "explanationEn": "The correct answer is B: 'The computing hardware, sensors, and actuators'. The architecture provides the computing platform, physical sensors, and actuators that run the agent program."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The function is an abstract mathematical concept, while the program runs on physical hardware'. دالة الوكيل هي توصيف رياضي مجرد، بينما برنامج الوكيل (Agent Program) هو الكود البرمجي الملموس الذي يُنفذ فعلياً على العتاد المادي (Architecture).",
    "explanationEn": "The correct answer is B: 'The function is an abstract mathematical concept, while the program runs on physical hardware'. The agent function is an abstract mathematical concept, whereas the agent program is the concrete software implementation executing on physical hardware."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'The entire accumulated percept sequence'. وكلاء الجداول يعانون من النمو الأسي الهائل لحجم الجدول مع تزايد عدد الخطوات والمُدركات، مما يجعلهم غير قابلين للتطبيق في العالم الحقيقي.",
    "explanationEn": "The correct answer is C: 'The entire accumulated percept sequence'. Table-driven agents fail because the lookup table size grows exponentially with the percept space and lifetime."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The table size grows exponentially with the agent's lifetime and percept set size'. وكلاء الجداول يعانون من النمو الأسي الهائل لحجم الجدول مع تزايد عدد الخطوات والمُدركات، مما يجعلهم غير قابلين للتطبيق في العالم الحقيقي.",
    "explanationEn": "The correct answer is B: 'The table size grows exponentially with the agent's lifetime and percept set size'. Table-driven agents fail because the lookup table size grows exponentially with the percept space and lifetime."
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
    "explanationAr": "الإجابة الصحيحة هي (B): '8 states'. في عالم المكنسة ذي الخليتين (A و B): هناك موقعان للوكيل وحالتان لكل خلية (نظيفة/متسخة) أي 2^2 = 4 حالات اتساخ، فيكون الإجمالي: 2 * 4 = 8 حالات فيزيائية.",
    "explanationEn": "The correct answer is B: '8 states'. With 2 agent locations and 2 states (clean/dirty) per cell, there are 2 locations * 2^2 dirt configurations = 2 * 4 = 8 possible physical states."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'n * 2^n'. لأي عالم مكنسة به n خلية: يتواجد الوكيل في أي خلية من الـ n، وللخلايا 2^n تشكيلاً محتملاً للاتساخ، مما يعطي n * 2^n حالة فيزيائية ممكنة.",
    "explanationEn": "The correct answer is B: 'n * 2^n'. For n cells, the agent can occupy any of the n cells, and there are 2^n independent dirt states, yielding n * 2^n total physical states."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Controller'. في نظرية التحكم (Control Theory)، يُطلق مصطلح 'المُتحكم' (Controller) على النظام ذي الحلقة المغلقة الذي يستشعر المخرجات ويصدر إشارات للتحكم في البيئة.",
    "explanationEn": "The correct answer is A: 'Controller'. In control theory, a closed-loop system that senses environment outputs and regulates behavior to maintain a desired state is called a Controller."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Softbot'. يُطلق مصطلح Softbot (وكيل برمجي) على الوكيل الذي يعيش ويعمل كلياً داخل بيئة رقمية أو برمجية، مثل برامج التداول الآلي وزواحف الويب.",
    "explanationEn": "The correct answer is C: 'Softbot'. An agent operating purely in a software environment (such as web crawlers or algorithmic trading bots) is termed a Softbot."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Sum from t=1 to T of |P|^t'. لأن الجدول يجب أن يغطي كل تسلسل مُدركات بطول t من 1 إلى T، فإن عدد المدخلات هو مجموع متسلسلة القوى: Sum from t=1 to T of |P|^t.",
    "explanationEn": "The correct answer is B: 'Sum from t=1 to T of |P|^t'. A complete table must map every possible percept sequence of length 1 to T, requiring the summation of |P|^t for all t from 1 to T."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Left, Right, Suck, NoOp'. في النموذج القياسي للمكنسة بعالم الخليتين في AIMA، يقتصر فضاء أفعال الوكيل على: التحرك يساراً (Left)، التحرك يميناً (Right)، الشفط (Suck)، واللافعل (NoOp).",
    "explanationEn": "The correct answer is B: 'Left, Right, Suck, NoOp'. The basic 2-cell vacuum agent in AIMA Chapter 2 has four elementary actions: Left, Right, Suck, and NoOp (do nothing)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Consequentialism'. النزعة العواقبية (Consequentialism) هي المذهب الفلسفي الذي يقيس عقلانية وصحة السلوك فقط بناءً على النتائج والعواقب المترتبة على أفعال الوكيل في البيئة.",
    "explanationEn": "The correct answer is B: 'Consequentialism'. Consequentialism is the philosophical stance that evaluates the rationality of an agent's behavior purely on the consequences and outcomes it produces."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Performance measure'. مقياس الأداء (Performance Measure) هو المعيار العددي الموضوعي الخارجي الذي يحدده مصمم النظام لتقييم مدى نجاح الوكيل في تحقيق الأهداف المطلوبة.",
    "explanationEn": "The correct answer is B: 'Performance measure'. A Performance Measure is an objective external criterion defined by the designer to evaluate how successfully an agent achieves its goals."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A rational agent could maximize score by repeatedly dumping dirt and cleaning it again'. إذا قسنا الأداء بكمية الأوساخ المكنوسة، يمكن لوكيل عقلاني أن يرمي الأوساخ ثم يعيد شفطها باستمرار لتحقيق أعلى نتيجة دون تنظيف حقيقي للغرفة.",
    "explanationEn": "The correct answer is B: 'A rational agent could maximize score by repeatedly dumping dirt and cleaning it again'. Measuring dirt collected encourages perverse incentives: a rational agent could dump dirt and clean it repeatedly to score points without keeping the room clean."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Design them according to the desired state of the environment'. القاعدة الذهبية لتصميم مقاييس الأداء هي قياس 'الحالة المرغوبة للبيئة' (مثل نظافة الغرفة) بدلاً من قياس سلوك أو أفعال الوكيل نفسه.",
    "explanationEn": "The correct answer is B: 'Design them according to the desired state of the environment'. Performance measures should be designed according to the desired state of the environment (e.g., cleanliness) rather than rewarding specific agent actions."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Four factors'. تعتمد عقلانية الوكيل في أي لحظة على 4 عوامل: مقياس الأداء، تسلسل المُدركات السابقة، المعرفة المسبقة بالبيئة، والأفعال المتاحة للوكيل.",
    "explanationEn": "The correct answer is C: 'Four factors'. Rationality depends on four factors: the performance measure, the prior percept sequence, prior domain knowledge, and the agent's available actions."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'The agent's future percepts that have not yet occurred'. لا يمكن للوكيل أن يعتمد على المُدركات المستقبلية لأنها لم تحدث بعد؛ العقلانية تُقاس بناءً على ما أدركه الوكيل بالفعل حتى اللحظة الحالية.",
    "explanationEn": "The correct answer is C: 'The agent's future percepts that have not yet occurred'. An agent cannot be judged on future unperceived inputs; rationality is strictly conditioned on percepts received up to the present moment."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Omniscient'. الوكيل كلي العلم (Omniscient) هو وكيل افتراضي يعرف النتيجة الفعلية لكل فعل مسبقاً بشكل معصوم، وهو مفهوم نظري يختلف عن العقلانية الواقعية.",
    "explanationEn": "The correct answer is B: 'Omniscient'. An omniscient agent knows the actual outcome of its actions with infallible foresight, a theoretical ideal impossible in uncertain real-world environments."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Rationality maximizes expected performance, whereas perfection maximizes actual outcome'. العقلانية (Rationality) تعني تعظيم الأداء المتوقع بناءً على المعرفة المتاحة، بينما المثالية (Perfection) تتطلب تعظيم النتيجة الفعلية في الواقع.",
    "explanationEn": "The correct answer is A: 'Rationality maximizes expected performance, whereas perfection maximizes actual outcome'. Rationality maximizes expected performance given incomplete information, whereas perfection requires maximizing actual outcome, which is impossible without omniscience."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Information gathering'. أفعال جمع المعلومات (Information Gathering) هي أفعال هدفها الأساسي استقبال مُدركات جديدة ومفيدة لاتخاذ قرارات أفضل مستقبلاً (مثل الاستكشاف).",
    "explanationEn": "The correct answer is B: 'Information gathering'. Information gathering actions are executed specifically to modify future percepts (e.g., exploring or looking around) rather than directly altering the environment state."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It modifies future percepts to help make a decision that maximizes expected safety'. النظر في كلا الاتجاهين قبل عبور الطريق هو فعل عقلاني لجمع المعلومات؛ فهو يعدل المُدركات المستقبلية لتجنب الخطر وتعظيم السلامة المتوقعة.",
    "explanationEn": "The correct answer is B: 'It modifies future percepts to help make a decision that maximizes expected safety'. Looking both ways before crossing modifies future percepts with critical visual data, maximizing the agent's expected safety and preventing collisions."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Autonomy'. يفقد الوكيل استقلاليته (Autonomy) إذا اعتمد حصراً على البرمجة والمعرفة المسبقة لمصممه وعجز عن التعلم وتكييف سلوكه بناءً على خبراته الذاتية.",
    "explanationEn": "The correct answer is B: 'Autonomy'. An agent lacks Autonomy if it relies solely on its designer's prior built-in knowledge rather than adapting and learning from its own perceptual experience."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'By learning from its percepts to compensate for partial or incorrect prior knowledge'. الاستقلالية (Autonomy) تعني قدرة الوكيل على التعلم وتعديل سلوكه بناءً على تجاربه الخاصة بدلاً من الاعتماد المطلق على معرفة المصمم المسبقة.",
    "explanationEn": "The correct answer is B: 'By learning from its percepts to compensate for partial or incorrect prior knowledge'. An agent possesses autonomy if its behavior is determined by its own learning and experience rather than solely by its designer's initial programming."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Innate, rigid behavioral routines that fail when assumptions are violated'. دبور سبيكس وخنفساء الروث أمثلة بيولوجية كلاسيكية على السلوك الغريزي الصارم (Rigid routines) الذي يفتقر للاستقلالية ويفشل تماماً عند حدوث أي اضطراب غير متوقع.",
    "explanationEn": "The correct answer is B: 'Innate, rigid behavioral routines that fail when assumptions are violated'. The sphex wasp and dung beetle illustrate genetically pre-programmed, rigid behavioral routines that fail catastrophically when environmental conditions are altered."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Bounded rationality'. العقلانية المقيدة (Bounded Rationality) تصف الواقع الحقيقي للوكلاء حيث تكون القدرة على اتخاذ القرار الأمثل مقيدة بالموارد المحدودة من وقت وحساب وذاكرة.",
    "explanationEn": "The correct answer is A: 'Bounded rationality'. Bounded Rationality accounts for physical limitations: an agent must make the best decision it can within strict constraints of finite time and computational resources."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'a = argmax_a E(U | a)'. القرار العقلاني رياضياً يختار الفعل a الذي يعظم المنفعة المتوقعة E(U|a)، ويُعبر عنه بـ: a = argmax_a E(U | a).",
    "explanationEn": "The correct answer is A: 'a = argmax_a E(U | a)'. A rational agent chooses the action that maximizes expected utility, formally expressed as: a = argmax_a E(U | a)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Performance measure, Environment, Actuators, Sensors'. إطار PEAS يحدد بيئة مهمة الوكيل عبر 4 ركائز: مقياس الأداء (Performance)، البيئة (Environment)، المشغلات (Actuators)، وأجهزة الاستشعار (Sensors).",
    "explanationEn": "The correct answer is B: 'Performance measure, Environment, Actuators, Sensors'. PEAS specifies an agent's task environment through: Performance measure, Environment, Actuators, and Sensors."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Specify the task environment (PEAS) as fully as possible'. وفقاً لـ AIMA، الخطوة الأولى الإلزامية عند تصميم أي وكيل ذكي هي توصيف بيئة المهمة بالكامل باستخدام نموذج PEAS.",
    "explanationEn": "The correct answer is B: 'Specify the task environment (PEAS) as fully as possible'. The very first step in designing an intelligent agent is always to specify the task environment (PEAS) as thoroughly and completely as possible."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Steering wheel'. عجلة القيادة (Steering Wheel) هي أداة تشغيل وإخراج (Actuator) تتيح للتاكسي الذاتي تنفيذ فعل توجيه السيارة وتغيير مسارها فيزيائياً.",
    "explanationEn": "The correct answer is B: 'Steering wheel'. In an autonomous taxi, the steering wheel (along with accelerator and brakes) acts as an actuator, converting agent commands into physical mechanical motion."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Lidar / Radar'. أجهزة الليدار والرادار (Lidar / Radar) هي أجهزة استشعار (Sensors) تقيس المسافات والأجسام المحيطة وتزود وكيل التاكسي بالمُدركات البيئية.",
    "explanationEn": "The correct answer is C: 'Lidar / Radar'. Lidar and radar serve as primary sensors for an automated vehicle, perceiving obstacle distances, vehicles, and pedestrians in the environment."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Driving smoothly to maximize comfort, safety, and passenger satisfaction'. يشمل مقياس أداء التاكسي الذاتي: القيادة بسلاسة، السلامة ومنع الحوادث، سرعة الوصول، والالتزام بقوانين المرور لتحقيق رضا الركاب.",
    "explanationEn": "The correct answer is A: 'Driving smoothly to maximize comfort, safety, and passenger satisfaction'. The performance measure for an automated taxi balances safety, journey speed, legal compliance, passenger comfort, and trip smoothness."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Accuracy in minimizing false positives and false negatives'. مقياس الأداء الأساسي لمرشح البريد المزعج (Spam Filter) هو دقة التصنيف وتقليل الإيجابيات الكاذبة (حظر رسالة هامة) والسلبيات الكاذبة (تمرير سبام).",
    "explanationEn": "The correct answer is B: 'Accuracy in minimizing false positives and false negatives'. A spam filter's performance measure evaluates classification accuracy, specifically penalizing false positives (marking real emails as spam) and false negatives."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Moving an email to the Spam folder'. نقل البريد المشبوه إلى مجلد المهملات أو السبام هو الفعل التنفيذي (Actuator) الذي يؤثر فيه مرشح البريد على بيئة العمل الخاصة به.",
    "explanationEn": "The correct answer is C: 'Moving an email to the Spam folder'. Moving an incoming email message to the Junk/Spam folder is the software actuator through which the spam filter takes action in its environment."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Touchscreen display of questions, test suggestions, and diagnoses'. شاشة العرض التي تُظهر الأسئلة المقترحة والتشخيص النهائي للمريض هي أداة الإخراج والتنفيذ (Actuator) لنظام التشخيص الطبي الخبير.",
    "explanationEn": "The correct answer is A: 'Touchscreen display of questions, test suggestions, and diagnoses'. In a medical diagnosis system, the user interface display (presenting diagnostic questions, test recommendations, and therapies) serves as the actuator."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Percentage of parts placed into correct sorting bins'. مقياس الأداء لروبوت فرز القطع الصناعية هو النسبة المئوية للقطع التي تم التقاطها ووضعها في صناديق الفرز الصحيحة بنجاح وسرعة.",
    "explanationEn": "The correct answer is A: 'Percentage of parts placed into correct sorting bins'. The performance measure of a part-picking robot measures accuracy and throughput: the percentage of parts correctly categorized into appropriate bins."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Digital cameras and tactile touch sensors'. تعتمد روبوتات الفرز على الكاميرات الرقمية (لرؤية أشكال وألوان القطع) ومستشعرات اللمس في القبضة (للتحقق من إمساك القطعة) كأجهزة استشعار رئيسية.",
    "explanationEn": "The correct answer is B: 'Digital cameras and tactile touch sensors'. A part-picking assembly robot utilizes digital vision cameras to recognize parts and tactile sensors in its gripper to detect grasp force and orientation."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Valves, heaters, pumps, and stirrers'. المشغلات في مصفاة التكرير الكيميائي هي الصمامات الهيدروليكية، السخانات، المضخات، والمقلبات التي تتحكم بالتدفق ودرجات الحرارة وضغط التفاعل.",
    "explanationEn": "The correct answer is B: 'Valves, heaters, pumps, and stirrers'. A refinery control agent acts on the physical plant using actuators such as motorized valves, heaters, pumps, and mixers to maintain chemical equilibrium."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The student's improvement and test score'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة.",
    "explanationEn": "The correct answer is B: 'The student's improvement and test score'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The agent's sensors give it access to the complete state of the environment at each point in time'. تكون البيئة قابلة للملاحظة كلياً (Fully Observable) عندما تمنح أجهزة الاستشعار الوكيل وصولاً كاملاً للحالة الدقيقة للبيئة في كل لحظة زمنية.",
    "explanationEn": "The correct answer is B: 'The agent's sensors give it access to the complete state of the environment at each point in time'. An environment is Fully Observable if an agent's sensors give it access to the complete, exact state of the environment at each point in time."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Players cannot see the hidden cards held by their opponents'. لعبة البوكر بيئة قابلة للملاحظة جزئياً (Partially Observable) لأن بطاقات الخصوم مقلوبة ومخفية، فلا يمكن للاعب رؤية كامل حالة اللعبة.",
    "explanationEn": "The correct answer is B: 'Players cannot see the hidden cards held by their opponents'. Poker is partially observable because opponents' cards are hidden, meaning the agent lacks sensory access to the complete game state."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Deterministic'. البيئة حتمية (Deterministic) إذا كانت الحالة التالية للبيئة تتحدد كلياً وبشكل مؤكد بواسطة الحالة الحالية والفعل الذي ينفذه الوكيل فقط.",
    "explanationEn": "The correct answer is B: 'Deterministic'. An environment is Deterministic if its next state is completely determined by the current state and the action executed by the agent."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Stochastic explicitly associates probabilities with outcomes, while nondeterministic simply lists possibilities'. البيئة العشوائية (Stochastic) تحدد احتمالات صريحة للمخرجات، بينما البيئة غير الحتمية (Nondeterministic) تسرد المخرجات الممكنة دون ترجيحات احتمالية.",
    "explanationEn": "The correct answer is A: 'Stochastic explicitly associates probabilities with outcomes, while nondeterministic simply lists possibilities'. Stochastic environments model uncertainty using explicit probability distributions over outcomes, whereas nondeterministic models list possible outcomes without probabilities."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Episodic'. في البيئة العرضية (Episodic)، تنقسم تجربة الوكيل إلى نوبات مستقلة؛ وقرار الوكيل في النوبة الحالية لا يؤثر إطلاقاً على النوبات القادمة (مثل فحص عيوب القطع).",
    "explanationEn": "The correct answer is B: 'Episodic'. In an Episodic environment, the agent's experience is divided into self-contained episodes where current actions have no bearing on future episodes."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Current board moves have long-term consequences that directly affect all future states'. الشطرنج بيئة تتابعية (Sequential) لأن النقلة الحالية تغير موقع القطع وتترتب عليها عواقب طويلة المدى تؤثر على كل النقلات اللاحقة والنتيجة النهائية.",
    "explanationEn": "The correct answer is B: 'Current board moves have long-term consequences that directly affect all future states'. Chess is sequential because early board moves shape the piece configuration, directly impacting all future positions and the final outcome of the match."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Semidynamic'. البيئة شبه الديناميكية (Semidynamic) هي التي لا تتغير فيها الحالة المادية للبيئة أثناء تفكير الوكيل، ولكن درجة أداء الوكيل تتناقص مع مرور الوقت.",
    "explanationEn": "The correct answer is C: 'Semidynamic'. An environment is Semidynamic if the environment state itself does not change while the agent is deliberating, but the agent's performance score drops with time."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Playing chess with a running game clock'. لعب الشطرنج بساعة توقيت مثال على بيئة شبه ديناميكية؛ فرقعة الشطرنج ثابتة أثناء تفكيرك، ولكن وقتك المتبقي يقل، مما قد يعرضك للخسارة بالوقت.",
    "explanationEn": "The correct answer is B: 'Playing chess with a running game clock'. Chess played with a clock is semidynamic: the board state remains static while you think, but the passage of time consumes your clock allocation."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Discrete'. تكون البيئة منفصلة (Discrete) إذا كان عدد الحالات والمُدركات والأفعال والخطوات الزمنية محدوداً أو قابلاً للعد (مثل مربعات رقعة الشطرنج).",
    "explanationEn": "The correct answer is B: 'Discrete'. A task environment is Discrete if it has a finite or countable number of distinct states, percepts, actions, and time steps."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Speed, location, steering angles, and time vary continuously through real-valued ranges'. قيادة التاكسي بيئة مستمرة (Continuous) لأن السرعة، والموقع الجغرافي، وزاوية دوران عجلة القيادة، والزمن تتغير عبر قيم حقيقية متصلة غير متقطعة.",
    "explanationEn": "The correct answer is B: 'Speed, location, steering angles, and time vary continuously through real-valued ranges'. Automated taxi driving is continuous because physical variables such as vehicle speed, position, steering angles, and time range over continuous real numbers."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions'. يُعتبر الكيان 'وكيلاً آخر' إذا كان سلوكه يوصف بتعظيم مقياس أداء خاص به يعتمد على قرارات الوكيل الأصلي، وليس مجرد جسم يطيع قوانين الفيزياء كالموج.",
    "explanationEn": "The correct answer is B: 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions'. An entity is classified as an agent if its behavior is best modeled as maximizing an objective or performance measure that interacts with the primary agent's actions."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Maximizing one agent's performance measure minimizes the other's'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة.",
    "explanationEn": "The correct answer is A: 'Maximizing one agent's performance measure minimizes the other's'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The outcomes (or outcome probabilities) for all actions are fully given to the agent'. تكون البيئة معلومة (Known) عندما يمتلك الوكيل معرفة كاملة بقواعد وقوانين البيئة واحتمالات نتائج الأفعال المتاحة له مسبقاً.",
    "explanationEn": "The correct answer is B: 'The outcomes (or outcome probabilities) for all actions are fully given to the agent'. An environment is Known if the agent has complete knowledge of the environment's rules, physics, and action transition probabilities."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Yes; in solitaire card games the rules are known, but face-down cards cannot be seen'. نعم؛ لعبة السوليتير بيئة قواعدها معروفة كلياً للوكيل (Known)، ولكنها قابلة للملاحظة جزئياً لأن الأوراق المقلوبة في الكومة لا يمكن رؤيتها مسبقاً.",
    "explanationEn": "The correct answer is B: 'Yes; in solitaire card games the rules are known, but face-down cards cannot be seen'. Yes; solitaire is a known environment because the rules are fully understood, but partially observable because cards in the deck face downward and are unseen."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown'. أصعب بيئة ذكاء اصطناعي هي: القابلة للملاحظة جزئياً، متعددة الوكلاء، غير الحتمية، التتابعية، الديناميكية، المستمرة، وغير المعروفة (Unknown).",
    "explanationEn": "The correct answer is B: 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown'. The hardest challenge in AI is an environment that is partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, and unknown."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Standard crossword puzzle'. الكلمات المتقاطعة بيئة ثابتة (لا تتغير الشبكة تلقائياً)، منفصلة (مربعات وحروف محددة)، وحتمية (كتابة حرف تعطي نتيجة مؤكدة).",
    "explanationEn": "The correct answer is B: 'Standard crossword puzzle'. A crossword puzzle is static (the grid does not change while you ponder), discrete (finite cells and letters), and deterministic."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Fully observable and Stochastic'. في جدول AIMA 2.6، لعبة الطاولة (Backgammon) مصنفة كبيئة قابلة للملاحظة كلياً (الرقعة مكشوفة بالكامل) ولكنها عشوائية بسبب رميات النرد.",
    "explanationEn": "The correct answer is B: 'Fully observable and Stochastic'. In AIMA Figure 2.6, backgammon is classified as Fully Observable (all pieces and dice are visible) and Stochastic (dice rolls introduce probability)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Backgammon involves dice rolls, which introduce randomness into state transitions'. الشطرنج حتمي لخلوه من الصدفة، بينما الطاولة عشوائية لأن رمي النرد يدخل عنصراً احتماليا يحدد الحركات القانونية المتاحة في كل دور.",
    "explanationEn": "The correct answer is A: 'Backgammon involves dice rolls, which introduce randomness into state transitions'. Chess is deterministic because moves have certain outcomes, whereas backgammon is stochastic because dice rolls inject random probabilities into state transitions."
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
    "explanationAr": "العبارة صحيحة (True). لأن التعريف التأسيسي للوكيل في AIMA يقوم على ركيزتي الإدراك والتأثير: فالمستشعرات تستقبل مدخلات البيئة، والمشغلات ترسل الأوامر لتغيير حالة البيئة.",
    "explanationEn": "This statement is True. Because an agent's foundational architecture rests on perception and action: sensors receive environmental stimuli, while actuators execute physical or digital changes in the environment."
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
    "explanationAr": "العبارة خاطئة (False). لا يمكن للوكيل أن يتخذ قراره بناءً على مُدركات مستقبلية لم تقع بعد؛ فاختيار الفعل يعتمد حصرياً على سلسلة المُدركات الماضية والحالية.",
    "explanationEn": "False. An agent's action can only depend on past and current percepts (percept sequence), never on future percepts."
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
    "explanationAr": "العبارة صحيحة (True). لأن دالة الوكيل تربط رياضياً كل سلسلة مدخلات بفعل؛ والجدول يمكنه نظرياً تخزين هذا الاقتران بالكامل لأي دالة، ولكن العائق هو الانفجار الأسي لحجم الجدول في الواقع.",
    "explanationEn": "This statement is True. Theoretically, any discrete function f: P* -> A can be tabulated as a key-value mapping. While practically impossible due to combinatorial explosion, it is mathematically universal."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن An omniscient agent is identical in definition to a rational agent, as both terms require maximizing expected utility based on current percepts. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'An omniscient agent is identical in definition to a rational agent, as both terms require maximizing expected utility based on current percepts.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Rationality guarantees perfection; therefore, a rational agent will never suffer an unfortunate outcome due to unobserved external events. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'Rationality guarantees perfection; therefore, a rational agent will never suffer an unfortunate outcome due to unobserved external events.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). لأن تقييم الوكيل بما يجب أن يحققه في البيئة (مثل نظافة الأرضية) يمنع السلوكيات الشاذة التي قد يفعلها الوكيل لو كوفئ على أفعاله فقط (مثل إلقاء القمامة ثم تنظيفها تكراراً).",
    "explanationEn": "This statement is True. If rewarded for behavior (e.g. cleaning), an agent might intentionally soil the floor repeatedly to clean it; evaluating desired environmental state prevents such gaming."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن An agent that relies entirely on built-in prior knowledge and never learns from its sensory experience is said to possess complete autonomy. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'An agent that relies entirely on built-in prior knowledge and never learns from its sensory experience is said to possess complete autonomy.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). لأن وكيل المنعكس البسيط مبني فقط على قواعد (شرط - فعل) تعمل مباشرة على المُدرَك الحالي وتتجاهل كلياً كل ما حدث في الماضي.",
    "explanationEn": "This statement is True. Simple reflex agents operate purely on condition-action rules triggered by current percepts, with no memory or internal state to track history."
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
    "explanationAr": "العبارة صحيحة (True). في البيئات غير الملاحظة كلياً، قد تتشابه حالتان مختلفتان فتنتجان نفس المُدرَك، مما يدفع الوكيل الحتمي لتكرار نفس الفعل دون إدراك، فيعلق في حلقة لا نهائية.",
    "explanationEn": "This statement is True. Partial observability creates perceptual aliasing (different states look identical); a deterministic reflex agent will repeatedly make the identical wrong choice."
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
    "explanationAr": "العبارة صحيحة (True). لأن السلوك العشوائي (Randomization) يكسر التماثل والتكرار الآلي، فيمنح الوكيل فرصة لتجربة أفعال مختلفة تخرجه من الحلقة المغلقة.",
    "explanationEn": "This statement is True. Randomizing actions breaks deterministic symmetry and loops, allowing the agent to escape repetitive cyclic deadlocks."
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
    "explanationAr": "العبارة صحيحة (True). وكيل رد الفعل المعتمد على النموذج (Model-based reflex agent) يحتفظ بحالة داخلية لتعقب الجوانب غير المرئية حالياً في البيئة.",
    "explanationEn": "True. Model-based agents maintain an internal state to track unseen aspects of the environment over time."
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
    "explanationAr": "العبارة صحيحة (True). لأن نموذج الانتقال (Transition model) الداخلي يحاكي فيزياء العالم: كيف تتغير البيئة تلقائياً مع مرور الوقت، وكيف تؤثر أفعال الوكيل المباشرة على مكوناتها.",
    "explanationEn": "This statement is True. The transition model encodes two world dynamics: independent environmental progression (physics/time) and the causal impact of the agent's own actions."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Goal-based agents are less flexible than simple reflex agents because their decision logic cannot be adjusted without rewriting the entire program. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'Goal-based agents are less flexible than simple reflex agents because their decision logic cannot be adjusted without rewriting the entire program.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). لأن الأهداف الثنائية (نجاح/فشل) لا توضح الأفضلية؛ بينما دالة المنفعة تسند قيمة عددية مستمرة لدرجة الرضا، مما يسمح بمفاضلة علمية دقيقة بين الأهداف المتعارضة (كالسرعة مقابل الأمان).",
    "explanationEn": "This statement is True. A utility function maps states to real numbers, quantifying trade-offs when goals conflict (e.g., speed vs. fuel efficiency vs. safety)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن In a learning agent architecture, the critic evaluates the agent's behavior against an external performance standard that the agent itself is allowed to modify. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'In a learning agent architecture, the critic evaluates the agent's behavior against an external performance standard that the agent itself is allowed to modify.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). لأن مولد المشكلات (Problem generator) يتعمد اقتراح أفعال استكشافية غير مألوفة، بدلاً من مجرد تكرار أفضل الأفعال الحالية، لاكتشاف حقائق جديدة عن البيئة.",
    "explanationEn": "This statement is True. The problem generator deliberately suggests novel exploratory actions (suboptimal in the short term) to discover better long-term strategies."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن In an atomic representation, each state of the world has an internal structure composed of accessible attribute-value variables called fluents. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'In an atomic representation, each state of the world has an internal structure composed of accessible attribute-value variables called fluents.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). لأن التمثيل المُعامل (Factored representation) يحلل كل حالة إلى متجهات من المتغيرات والخصائص المستقلة (مثل الموقع، السرعة، البطارية)، على عكس التمثيل الذري غير القابل للتجزئة.",
    "explanationEn": "This statement is True. Unlike atomic states (black boxes), factored representations describe each state as a vector of explicit attribute-value variables."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن An environment is considered dynamic if the physical world remains unchanged while the agent deliberates, but time limits expire. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'An environment is considered dynamic if the physical world remains unchanged while the agent deliberates, but time limits expire.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن An automated taxi driving on a highway operates in a single-agent environment because other cars are merely physical obstacles governed by physics. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents.",
    "explanationEn": "This statement is False. The claim that 'An automated taxi driving on a highway operates in a single-agent environment because other cars are merely physical obstacles governed by physics.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Problem-solving agent'. وكيل حل المشكلات (Problem-solving agent) هو وكيل ذري يعتمد على الأهداف ويقوم بالتخطيط المسبق عبر محاكاة تسلسل من الأفعال للوصول إلى الهدف قبل التنفيذ الفعلي.",
    "explanationEn": "The correct answer is B: 'Problem-solving agent'. A problem-solving agent is a goal-based agent that plans ahead by formulating a sequence of actions leading to a goal state before taking action in the physical world."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Goal formulation'. صياغة الهدف (Goal formulation) هي الخطوة الأولى الإلزامية لأنها تحدد الحالات المرغوبة التي يسعى الوكيل لتحقيقها، وبدونها لا يمكن تحديد الأفعال أو قياس النجاح.",
    "explanationEn": "The correct answer is C: 'Goal formulation'. Goal formulation is the first phase because deciding what objectives to achieve is necessary before deciding what actions and states to consider."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Goal formulation -> Problem formulation -> Search -> Execution'. الترتيب الزمني الصحيح للعملية الرباعية لحل المشكلات هو: صياغة الهدف أولاً، ثم صياغة المشكلة، ثم البحث عن مسار الحل، وأخيراً تنفيذ الحل.",
    "explanationEn": "The correct answer is B: 'Goal formulation -> Problem formulation -> Search -> Execution'. The canonical four-phase problem-solving sequence is: Goal formulation -> Problem formulation -> Search -> Execution."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because the predetermined sequence of actions is guaranteed to reach the goal without surprises'. الوكيل (Agent) هو المفهوم الأساسي في الذكاء الاصطناعي لكل ما يدرك بيئته بالمستشعرات (Sensors) ويؤثر فيها بالمشغلات (Actuators).",
    "explanationEn": "The correct answer is B: 'Because the predetermined sequence of actions is guaranteed to reach the goal without surprises'. An Agent is formally defined as an entity that perceives its environment through sensors and acts upon it through actuators."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Five components'. وفقاً لـ AIMA، تتطلب الصياغة الرياضية الرسمية للمشكلة 5 مكونات: الحالة الابتدائية، الأفعال المتاحة، دالة الانتقال/النتيجة، اختبار الهدف، ودالة تكلفة المسار.",
    "explanationEn": "The correct answer is C: 'Five components'. A search problem is formally defined by five components: initial state, possible actions, transition model (RESULT), goal test, and path cost function."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Heuristic decay rate'. 'معدل اضمحلال الحدس' (Heuristic decay rate) ليس من مكونات صياغة المشكلة؛ فالمكونات الخمسة هي الحالة الابتدائية، الأفعال، دالة الانتقال، اختبار الهدف، وتكلفة المسار.",
    "explanationEn": "The correct answer is C: 'Heuristic decay rate'. 'Heuristic decay rate' is not a component of a search problem. The five formal components are initial state, actions, transition model, goal test, and path cost."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'The state that results from executing action a in state s'. دالة الانتقال RESULT(s, a) تأخذ الحالة s والفعل a وتعيد الحالة الناتجة عن تطبيق ذلك الفعل في تلك الحالة المحددة.",
    "explanationEn": "The correct answer is C: 'The state that results from executing action a in state s'. The transition model function RESULT(s, a) returns the specific state that results from executing action a in state s."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'a belongs to the set ACTIONS(s)'. يكون الفعل a قابلاً للتطبيق (Applicable) في الحالة s إذا وفقط إذا كان ينتمي لمجموعة الأفعال القانونية المسموح بها في تلك الحالة ACTIONS(s).",
    "explanationEn": "The correct answer is A: 'a belongs to the set ACTIONS(s)'. An action a is defined as applicable in state s if it is a legal member of the action set ACTIONS(s)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A path leading from the initial state to any valid goal state'. المسار هو سلسلة متتابعة من الأفعال، ويُعرَّف الحل رسمياً بأنه مسار يبدأ من الحالة الابتدائية وينتهي عند أي حالة تحقق اختبار الهدف.",
    "explanationEn": "The correct answer is B: 'A path leading from the initial state to any valid goal state'. A solution in search algorithms is formally defined as a complete path of actions from the initial state to a valid goal state."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'The sum of the individual step costs along the path'. في خوارزميات البحث التقليدية، تُفترض تكلفة المسار كخاصية جمعية (Additive)، أي أن التكلفة الإجمالية للمسار تساوي مجموع تكاليف الخطوات الفردية المكونة له.",
    "explanationEn": "The correct answer is C: 'The sum of the individual step costs along the path'. Path costs are assumed to be additive, meaning the total cost of a path is the algebraic sum of the individual step costs along that path."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly'. اشتراط أن تكون تكاليف الخطوات موجبة قطيعاً (c >= ε > 0) يضمن عدم وقوع الخوارزمية في دورات لا نهائية ذات تكلفة صفرية أو سالبة تمنع التقدم نحو الهدف.",
    "explanationEn": "The correct answer is B: 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly'. Step costs must be strictly positive (cost >= epsilon > 0) to prevent the search from being trapped in infinite loops of zero-cost or negative-cost cycles."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Abstraction'. التجريد (Abstraction) هو عملية إزالة التفاصيل غير الجوهرية من تمثيل العالم الحقيقي لإنشاء نموذج مشكلة مبسط ومحدد رياضياً وقابل للحساب.",
    "explanationEn": "The correct answer is B: 'Abstraction'. Abstraction is the process of removing irrelevant real-world details to create a manageable, mathematically tractable problem model."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world'. تكون الصياغة المجردة 'صالحة' (Valid) إذا كان كل حل مجرد يمكن تفصيله وتحويله إلى حل ملموس وواقعي في بيئة العالم الحقيقي المعقدة.",
    "explanationEn": "The correct answer is B: 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world'. An abstract problem formulation is valid if every abstract solution path can be elaborated into a concrete, executable solution in the real world."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Is easier than solving the original unabstracted problem'. يُعتبر التجريد 'مفيداً' (Useful) إذا كان تنفيذ كل فعل مجرد في الحل أسهل بكثير من حل المشكلة الأصلية بتفاصيلها الكاملة.",
    "explanationEn": "The correct answer is A: 'Is easier than solving the original unabstracted problem'. An abstraction is useful if carrying out each abstract action in the solution path is significantly easier than solving the original unabstracted problem."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A solution path that has the lowest path cost among all possible solutions'. الحل الأمثل (Optimal solution) هو مسار الحل الذي يحقق أقل تكلفة مسار ممكنة من بين جميع مسارات الحلول الممكنة التي تصل إلى الهدف.",
    "explanationEn": "The correct answer is B: 'A solution path that has the lowest path cost among all possible solutions'. An optimal solution is formally defined as a solution path having the lowest total path cost among all possible valid solutions."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To provide concise, exact problem descriptions to compare algorithm performance'. الهدف الأساسي من المشاكل المعيارية (Benchmark/Toy problems) هو توفير وصف موجز ومضبوط رياضياً لاختبار ومقارنة كفاءة خوارزميات البحث المختلفة بدقة.",
    "explanationEn": "The correct answer is B: 'To provide concise, exact problem descriptions to compare algorithm performance'. Standard benchmark problems provide concise, exact, reproducible environments to evaluate and compare the performance of different search algorithms."
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
    "explanationAr": "الإجابة الصحيحة هي (B): '24 states'. في عالم 3 خلايا: موقع الوكيل له 3 احتمالات، وكل خلية لها حالتان (نظيفة/متسخة) أي 2^3 = 8 حالات اتساخ، فيكون إجمالي فضاء الحالات: 3 * 8 = 24 حالة.",
    "explanationEn": "The correct answer is B: '24 states'. For 3 cells, there are 3 possible agent locations and 2^3 = 8 possible dirt configurations, yielding 3 * 8 = 24 distinct physical states."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Moving the blank space Left, Right, Up, or Down'. في أحجية الأرقام (8-puzzle)، الصياغة الأكثر ملاءمة ونظافة هي اعتبار الأفعال حركة للمربع الفارغ (تحريك الفراغ يساراً أو يميناً أو لأعلى أو لأسفل).",
    "explanationEn": "The correct answer is B: 'Moving the blank space Left, Right, Up, or Down'. In sliding-tile puzzles, actions are most cleanly formalized as moving the single blank space (Left, Right, Up, Down), rather than tracking moving numbers."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Exactly one-half (50%)'. بسبب خاصية التكافؤ الرياضي (Parity) في تباديل أحجية الألواح المنزلقة، ينقسم فضاء الحالات إلى مكونين منفصلين، مما يجعل 50% فقط من الترتيبات العشوائية قابلة للحل.",
    "explanationEn": "The correct answer is B: 'Exactly one-half (50%)'. Due to the permutation parity property of sliding-tile puzzles, the state space is partitioned into two disjoint halves; exactly 50% of random states can reach the goal."
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
    "explanationAr": "الإجابة الصحيحة هي (B): '9! / 2 = 181,440'. عدد الحالات التي يمكن الوصول إليها في لغز 8-puzzle هو نصف إجمالي التباديل الممكنة: 9! / 2 = 181,440 حالة.",
    "explanationEn": "The correct answer is B: '9! / 2 = 181,440'. The 8-puzzle state space splits into two disconnected halves of reachability; exactly 9! / 2 = 181,440 states are reachable."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Over 10 trillion (16! / 2)'. في لغز 15-puzzle، عدد الحالات التي يمكن الوصول إليها هو 16! / 2 = تقريباً 1.05 * 10^13 (أو ما يقارب 1.8 * 10^5 في النسخ المصغرة).",
    "explanationEn": "The correct answer is B: 'Over 10 trillion (16! / 2)'. The 15-puzzle has half of 16! reachable configurations due to parity constraints."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Square root, floor, and factorial'. مسألة دونالد كنوث للأربعة تبين نشوء فضاءات حالات لا نهائية من خلال تطبيق ثلاث عمليات رياضية تكرارية على الرقم 4: الجذر التربيعي، دالة الجزء الصحيح (الأرضية)، والمضروب.",
    "explanationEn": "The correct answer is B: 'Square root, floor, and factorial'. Knuth's 4-problem generates an infinite state space from the number 4 by repeatedly applying square root, floor, and factorial operations."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Push scattered boxes to designated storage locations'. في لعبة سوكوبان (Sokoban)، الهدف الأساسي للوكيل هو دفع الصناديق المتفرقة عبر شبكة المتاهة لإيصالها إلى مواقع التخزين المحددة مسبقاً.",
    "explanationEn": "The correct answer is B: 'Push scattered boxes to designated storage locations'. In the Sokoban puzzle, the agent's objective is to push all scattered crates/boxes onto specified storage target squares without getting stuck."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Touring problem where every city must be visited'. مسألة البائع المتجول (TSP) هي مسألة جولة سياحية (Touring problem)، حيث يُشترط زيارة كل مدينة في الشبكة مرة واحدة والعودة لمدينة الانطلاق بأقل تكلفة.",
    "explanationEn": "The correct answer is B: 'Touring problem where every city must be visited'. The Traveling Salesperson Problem (TSP) is a touring problem where every city must be visited exactly once with minimal total travel cost."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Cell layout and channel routing'. في تصميم الدوائر المتكاملة الفائقة (VLSI)، تُقسَّم المشكلة تقليدياً إلى مسألتين فرعيتين: تخطيط مواضع الخلايا (Cell layout)، وتوجيه مسارات القنوات والأسلاك (Channel routing).",
    "explanationEn": "The correct answer is A: 'Cell layout and channel routing'. VLSI design is standardly decomposed into two sequential search subproblems: cell layout (positioning components) and channel routing (wiring connections)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The search space has one continuous dimension for each joint angle'. تخطيط حركة ذراع الروبوت متعدد المفاصل معقد لأن فضاء التكوين يمتلك بعداً مستمراً (Continuous dimension) مستقلاً لكل زاوية من زوايا مفاصل الذراع.",
    "explanationEn": "The correct answer is A: 'The search space has one continuous dimension for each joint angle'. Robot arm motion planning is complex because the configuration space has continuous degrees of freedom—one continuous dimension per joint angle."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning'. في مسألة تسلسل التجميع الآلي، اختبار قانونية الفعل مكلف حسابياً لأنه يتطلب اختبارات تصادم هندسية ثلاثية الأبعاد معقدة للتأكد من إمكانية تركيب الجزء دون اصطدام.",
    "explanationEn": "The correct answer is B: 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning'. In assembly sequencing, checking legal actions is expensive because testing whether a physical part can be inserted collision-free requires complex 3D spatial reasoning."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Protein design'. في البيولوجيا الحسابية، مسألة 'تصميم البروتين' (Protein design) تبحث عن تسلسل من الأحماض الأمينية ينطوي في بنية فراغية ثلاثية الأبعاد مرغوبة لمكافحة الأمراض.",
    "explanationEn": "The correct answer is A: 'Protein design'. Protein design searches for an amino acid sequence that will fold into a specific 3D target structure with desired therapeutic properties."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The state space describes physical configurations of the world, while the search tree describes search paths between states'. الفرق الجوهري هو أن فضاء الحالات يصف التكوينات الفيزيائية الحقيقية للعالم، بينما تصف شجرة البحث مسارات البحث المتولدة لاستكشاف تلك الحالات.",
    "explanationEn": "The correct answer is A: 'The state space describes physical configurations of the world, while the search tree describes search paths between states'. The state space graph represents physical world configurations, whereas a search tree represents the search paths explored between those states."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Four components'. تحتوي عقدة شجرة البحث على أربعة مكونات أساسية: الحالة الممثلة (STATE)، العقدة الأم (PARENT)، الفعل المتخذ (ACTION)، وتكلفة المسار (PATH-COST).",
    "explanationEn": "The correct answer is C: 'Four components'. A search tree node data structure comprises four core components: STATE, PARENT, ACTION, and PATH-COST."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'STATE, PARENT, ACTION, PATH-COST'. المكونات الأربعة لعقدة شجرة البحث هي: STATE (الحالة)، PARENT (المؤشر للعقدة الأصلية)، ACTION (الفعل المنفذ)، و PATH-COST (التكلفة التراكمية g).",
    "explanationEn": "The correct answer is A: 'STATE, PARENT, ACTION, PATH-COST'. The four required components of a node in a search tree are STATE, PARENT, ACTION, and PATH-COST."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'It allows the algorithm to trace backward from the goal node to recover the complete solution path'. وظيفة مؤشر العقدة الأم (PARENT) هي تمكين الخوارزمية من تتبع المسار عكسياً من عقدة الهدف حتى الحالة الابتدائية لاستخراج تسلسل الحل الكامل.",
    "explanationEn": "The correct answer is A: 'It allows the algorithm to trace backward from the goal node to recover the complete solution path'. The PARENT pointer enables the search algorithm to backtrack from the goal node to the root, reconstructing the complete solution path."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Frontier (or open list)'. تسمى مجموعة العقد التي تم توليدها ولكن لم يتم توسيعها بعد باسم 'الجبهة' (Frontier) أو القائمة المفتوحة (Open list).",
    "explanationEn": "The correct answer is B: 'Frontier (or open list)'. The frontier (or open list) is the set of all leaf nodes that have been generated but not yet expanded in the search tree."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'POP(frontier)'. عملية POP(frontier) هي العملية القياسية التي تقوم بإزالة واسترجاع العقدة الأولى من طابور الجبهة وفقاً لاستراتيجية ترتيب الطابور.",
    "explanationEn": "The correct answer is B: 'POP(frontier)'. POP(frontier) is the standard queue operation that removes and returns the top node according to the queue's specific ordering strategy."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The interior (fully expanded states) and the exterior (unreached states)'. خاصية الفصل (Separation property) في بحث المخططات تعني أن الجبهة تشكل حداً فاصلاً بين المنطقة الداخلية (الحالات التي تم فحصها) والمنطقة الخارجية (الحالات غير المستكشفة).",
    "explanationEn": "The correct answer is B: 'The interior (fully expanded states) and the exterior (unreached states)'. The separation property states that the frontier acts as a boundary separating the interior (fully explored states) from the exterior (unreached states)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Cycle (or loopy path)'. المسار الذي يشكل حلقة بالعودة إلى حالة سابقة تم استكشافها بالفعل (مثل Arad -> Sibiu -> Arad) يُسمى دورة (Cycle أو Loopy path).",
    "explanationEn": "The correct answer is B: 'Cycle (or loopy path)'. A search path that returns to a previously visited state is termed a cycle (or loopy path)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not'. البحث في المخططات (Graph search) يحتفظ بجدول الحالات التي تم الوصول إليها (Reached table) لتجنب تكرار المسارات وحلقاتها، بينما لا يفعل البحث الشجري ذلك.",
    "explanationEn": "The correct answer is A: 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not'. Graph search maintains a reached table to detect and eliminate redundant paths and cycles, whereas tree-like search does not."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Space Complexity'. تُقيَّم خوارزميات البحث بأربعة أبعاد: الاكتمال (Completeness)، والأمثلية (Cost Optimality)، والتعقيد الزمني (Time)، والتعقيد المكاني (Space Complexity).",
    "explanationEn": "The correct answer is B: 'Space Complexity'. The four fundamental criteria for evaluating search algorithms are Completeness, Cost Optimality, Time Complexity, and Space Complexity."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Find a solution whenever one exists, and correctly report failure when there is none'. تكون الخوارزمية مكتملة (Complete) إذا كانت تضمن إيجاد حل كلما وجد حل للمشكلة، وتعلن الفشل بشكل صحيح إذا لم يكن هناك حل.",
    "explanationEn": "The correct answer is B: 'Find a solution whenever one exists, and correctly report failure when there is none'. An algorithm is complete if it is guaranteed to find a solution when one exists, and correctly report failure if no solution exists."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Always finds a solution path with the lowest path cost among all possible solutions'. تكون الخوارزمية ذات أمثلية من حيث التكلفة (Cost-optimal) إذا كانت تجد دائماً الحل الأقل تكلفة إجمالية من بين جميع الحلول الممكنة.",
    "explanationEn": "The correct answer is B: 'Always finds a solution path with the lowest path cost among all possible solutions'. A search algorithm is cost-optimal if it always returns a solution path with the lowest possible path cost among all solutions."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The maximum branching factor of the search tree'. في تحليل التعقيد النظري لخوارزميات البحث، يمثل الرمز 'b' أقصى معامل تفرع (Branching factor) للشجرة، أي الحد الأقصى لخلفاء أي عقدة.",
    "explanationEn": "The correct answer is B: 'The maximum branching factor of the search tree'. In search complexity analysis, 'b' represents the maximum branching factor—the maximum number of successors of any node."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The depth of the shallowest optimal solution'. في معادلات التعقيد، يمثل الرمز 'd' عمق (Depth) الحل الأقل عمقاً (الضحل) أو الحل الأمثل في شجرة البحث.",
    "explanationEn": "The correct answer is B: 'The depth of the shallowest optimal solution'. In search complexity equations, 'd' denotes the depth of the shallowest optimal goal node."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The maximum length of any path in the state space (which may be infinite)'. في معادلات تعقيد خوارزميات البحث، يمثل 'm' أقصى عمق أو أطول مسار ممكن في فضاء الحالات (والذي قد يكون لانهائياً).",
    "explanationEn": "The correct answer is A: 'The maximum length of any path in the state space (which may be infinite)'. In complexity notation, 'm' denotes the maximum length (or depth) of any path in the state space."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Diameter'. يُعرَّف 'قطر' فضاء الحالات (Diameter) بأنه أقصى عدد من الخطوات اللازمة للانتقال بين أي حالتين على أقصر مسار يربط بينهما.",
    "explanationEn": "The correct answer is B: 'Diameter'. The diameter of a state space is the maximum number of steps required to get from any state to any other state along the shortest path between them."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million'. في شبكة خالية من العوائق 10x10، عدد الخلايا 100 فقط، لكن عدد المسارات بطول 9 يتجاوز 100 مليون، مما يوضح الأثر الكارثي للمسارات المتكررة على سرعة البحث.",
    "explanationEn": "The correct answer is A: 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million'. In a 10x10 grid with only 100 cells, the number of paths of length 9 exceeds 100 million, showing why eliminating redundant paths is essential."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Expand the shallowest unexpanded node in the frontier'. قاعدة التوسيع في البحث بالعرض أولاً (BFS) هي دائماً توسيع العقدة الأقل عمقاً (الأضحل) غير الموسعة في الجبهة، مستكشفة المستويات طبقة تلو الأخرى.",
    "explanationEn": "The correct answer is B: 'Expand the shallowest unexpanded node in the frontier'. Breadth-First Search (BFS) always expands the shallowest unexpanded node in the frontier, exploring nodes level by level."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'FIFO queue'. يُنفذ طابور الجبهة في خوارزمية البحث بالعرض أولاً (BFS) باستخدام طابور من نوع FIFO (يدخل أولاً يخرج أولاً)، ليضمن توسيع العقد بحسب ترتيب توليدها.",
    "explanationEn": "The correct answer is B: 'FIFO queue'. BFS uses a FIFO (First-In, First-Out) queue for its frontier to ensure that shallower nodes generated earlier are expanded first."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because any child generated at depth d is guaranteed to be among the shallowest paths to that state'. يطبق BFS اختبار الهدف المبكر (عند التوليد) بأمان لأن أي عقدة ابن تُولَّد عند العمق d تضمن أن مسارها هو من بين الأقصر عمقاً لتلك الحالة.",
    "explanationEn": "The correct answer is B: 'Because any child generated at depth d is guaranteed to be among the shallowest paths to that state'. BFS can safely use early goal testing (upon generation) because any child generated at depth d is guaranteed to be along a shortest-hop path to that state."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'O(b^d)'. التعقيد المكاني لـ BFS في أسوأ الحالات هو O(b^d) لأن جميع العقد عند المستوى d تظل محفوظة في الذاكرة داخل الجبهة في نفس الوقت.",
    "explanationEn": "The correct answer is B: 'O(b^d)'. The worst-case space complexity of BFS is O(b^d) because all generated nodes at depth d must reside simultaneously in the frontier queue."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'All generated nodes at level d must remain stored in memory, consuming gigabytes or terabytes rapidly'. تعتبر متطلبات الذاكرة العائق الأكبر لـ BFS لأن حفظ جميع عقد المستوى d يتطلب مساحات تخزين بالغيغابايت والتيرابايت تتجاوز سعة الذاكرة بسرعة هائلة.",
    "explanationEn": "The correct answer is B: 'All generated nodes at level d must remain stored in memory, consuming gigabytes or terabytes rapidly'. Memory is the critical bottleneck in BFS because storing all generated nodes at depth d rapidly exhausts available RAM long before CPU time expires."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Uniform-Cost Search (UCS)'. خوارزمية البحث بالتكلفة الموحدة (Uniform-Cost Search) في الذكاء الاصطناعي تكافئ تماماً خوارزمية دكسترا (Dijkstra) لأقصر مسار في نظرية المخططات.",
    "explanationEn": "The correct answer is B: 'Uniform-Cost Search (UCS)'. Uniform-Cost Search (UCS) is the artificial intelligence search equivalent of Dijkstra's algorithm for finding shortest paths in non-negative weighted graphs."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The node with the lowest path cost g(n) from the start state'. تختار خوارزمية البحث بالتكلفة الموحدة (UCS) لتوسيعها العقدة التي تمتلك أقل تكلفة مسار تراكمية g(n) محسوبة من الحالة الابتدائية.",
    "explanationEn": "The correct answer is B: 'The node with the lowest path cost g(n) from the start state'. UCS always selects for expansion the frontier node with the lowest cumulative path cost g(n) from the start state."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because a cheaper path to the goal might be discovered later before the goal is expanded'. يجب على UCS تطبيق اختبار الهدف المتأخر (عند السحب من الطابور) لأنه قد يتم اكتشاف مسار بديل أرخص إلى الهدف لاحقاً قبل أن يتم سحب عقدة الهدف وتوسيعها.",
    "explanationEn": "The correct answer is B: 'Because a cheaper path to the goal might be discovered later before the goal is expanded'. UCS must test for a goal when a node is POPPED because a lower-cost path to the goal might still be discovered before the goal node is expanded."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Expand the deepest unexpanded node in the frontier'. قاعدة التوسيع في البحث بالعمق أولاً (DFS) هي دائماً توسيع العقدة الأكثر عمقاً (الأعمق) غير الموسعة في الجبهة للغوص في الفروع.",
    "explanationEn": "The correct answer is B: 'Expand the deepest unexpanded node in the frontier'. Depth-First Search (DFS) always selects the deepest unexpanded node in the frontier for expansion, driving down a branch until it hits a dead end."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'LIFO stack'. تُستخدم بنية المكدس LIFO (يدخل آخراً يخرج أولاً) لإدارة الجبهة في البحث بالعمق أولاً (DFS)، مما يضمن استكشاف أحدث الفروع المتولدة أولاً.",
    "explanationEn": "The correct answer is A: 'LIFO stack'. DFS utilizes a LIFO (Last-In, First-Out) stack structure for its frontier, ensuring the most recently generated deepest nodes are processed first."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It has a modest linear space complexity of O(bm)'. الميزة العملية الكبرى للبحث بالعمق أولاً الشجري هي تعقيده المكاني الخطي المعتدل O(bm)، حيث لا يحتاج سوى لتخزين مسار الفرع الحالي وعقد أشقائه.",
    "explanationEn": "The correct answer is B: 'It has a modest linear space complexity of O(bm)'. The primary practical advantage of tree-like DFS is its modest linear space complexity of O(bm), storing only the current path and unexplored siblings."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because it can follow an infinite branch or cycle forever without ever exploring other alternatives'. يعتبر البحث بالعمق أولاً الشجري غير مكتمل في الفضاءات ذات العمق اللانهائي أو الحلقات، لأنه قد يتبع فرعاً لا نهائياً دون أن يرجع لتجربة الخيارات الأخرى.",
    "explanationEn": "The correct answer is B: 'Because it can follow an infinite branch or cycle forever without ever exploring other alternatives'. Tree-like DFS is incomplete in infinite-depth or cyclical graphs because it can get trapped following an infinite path forever without exploring alternatives."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Exactly one successor'. في بحث التراجع (Backtracking search)، وهو البديل الموفر للذاكرة لـ DFS، يتم توليد خليفة واحد فقط في كل خطوة، مما يقلل استهلاك الذاكرة إلى O(m).",
    "explanationEn": "The correct answer is A: 'Exactly one successor'. In backtracking search, only a single successor node is generated at a time, keeping memory requirements down to O(m)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Nodes at depth l are treated as if they have no successors'. في البحث محدود العمق (DLS)، عندما يصل فرع البحث إلى حد العمق المحدد مسبقاً l، تُعامل العقد عند هذا الحد وكأنها لا تمتلك أي خلفاء.",
    "explanationEn": "The correct answer is B: 'Nodes at depth l are treated as if they have no successors'. In Depth-Limited Search (DLS), nodes at depth limit l are treated as having no successors, pruning any deeper exploration along that branch."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Solution node, Failure, or Cutoff'. وفقاً لخوارزمية DLS الرسمية، فإنها تعيد إحدى ثلاث قيم محتملة: عقدة الحل إذا وُجد، أو الفشل (Failure) إذا استُنفد الفضاء، أو الانقطاع (Cutoff) إذا بلغت حد العمق.",
    "explanationEn": "The correct answer is B: 'Solution node, Failure, or Cutoff'. Depth-Limited Search returns one of three values: a solution node, failure (no solution exists), or cutoff (depth limit was reached)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It systematically tries increasing depth limits: first 0, then 1, then 2, and so on'. تحدد خوارزمية التعميق التكراري (IDS) حد العمق عبر زيادته تدريجياً وبشكل منهجي: تبدأ بالحد 0، ثم 1، ثم 2، وهكذا حتى تجد الحل.",
    "explanationEn": "The correct answer is B: 'It systematically tries increasing depth limits: first 0, then 1, then 2, and so on'. Iterative Deepening Search (IDS) systematically increases the depth limit l starting from 0, then 1, 2, and so on until a goal is found."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'O(bd)'. التعقيد المكاني لخوارزمية التعميق التكراري (IDS) هو تعقيد خطي O(bd)، حيث تجمع بين كفاءة ذاكرة DFS وضمانات اكتمال وأمثلية BFS.",
    "explanationEn": "The correct answer is B: 'O(bd)'. The space complexity of IDS is O(bd), combining the modest linear memory usage of DFS with the completeness and optimality guarantees of BFS."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because the vast majority of nodes in an exponential tree reside in the bottom level d'. إعادة توليد العقد العليا في IDS لا يمثل هدراً كبيراً في الأشجار ذات معامل التفرع b >= 2، لأن الغالبية الساحقة من العقد توجد في الطبقة السفلية d.",
    "explanationEn": "The correct answer is B: 'Because the vast majority of nodes in an exponential tree reside in the bottom level d'. Regenerating upper-level nodes in IDS is not wasteful because for b >= 2, the vast majority of nodes in an exponential tree reside in the bottom level d."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It simultaneously searches forward from the initial state and backward from the goal state'. المبدأ التشغيلي للبحث ثنائي الاتجاه (Bidirectional Search) هو البحث في وقت متزامن للأمام من الحالة الابتدائية وللخلف من حالة الهدف حتى تلتقي الجبهتان.",
    "explanationEn": "The correct answer is B: 'It simultaneously searches forward from the initial state and backward from the goal state'. Bidirectional search simultaneously runs two searches: forward from the initial state and backward from the goal, stopping when the two frontiers intersect."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)'. الدافع الحسابي للبحث ثنائي الاتجاه هو تقليص وقت البحث أسيّاً، حيث يستغرق بحث جبهتين عند العمق d/2 زمناً قدره O(2 * b^(d/2)) مقارنة بـ O(b^d).",
    "explanationEn": "The correct answer is A: 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)'. Bidirectional search drastically cuts time because expanding two frontiers to depth d/2 requires O(2 * b^(d/2)), which is exponentially smaller than O(b^d)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The estimated cost of the cheapest path from the state at node n to a goal state'. تقدر الدالة الحدسية h(n) في خوارزميات البحث المستنير التكلفة المتوقعة لأرخص مسار من الحالة عند العقدة n للوصول إلى أقرب حالة هدف.",
    "explanationEn": "The correct answer is B: 'The estimated cost of the cheapest path from the state at node n to a goal state'. The heuristic function h(n) estimates the cost of the cheapest path from the state at node n to reach a goal state."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'h(n) = 0'. إذا كانت العقدة n تمثل حالة هدف صالحة، فإن التكلفة المتبقية للوصول إلى الهدف تكون صفراً بالضرورة، أي h(n) = 0.",
    "explanationEn": "The correct answer is A: 'h(n) = 0'. By definition, if node n is already a goal state, the estimated remaining cost to reach the goal is zero: h(n) = 0."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Straight-line distance (h_SLD)'. في مسألة خرائط رومانيا، الحدس الأكثر شيوعاً لتقدير المسافة إلى بوخارست هو مسافة الخط المستقيم الجوية (Straight-line distance / h_SLD).",
    "explanationEn": "The correct answer is B: 'Straight-line distance (h_SLD)'. In the Romania navigation problem, straight-line distance to Bucharest (h_SLD) is the standard heuristic used to guide search."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The node that has the lowest heuristic value h(n)'. يختار البحث الجشع بأفضلية أولاً (Greedy Best-First) لتوسيعه العقدة التي تمتلك أقل قيمة حدسية h(n)، أي التي تبدو الأقرب للهدف محلياً.",
    "explanationEn": "The correct answer is B: 'The node that has the lowest heuristic value h(n)'. Greedy Best-First Search selects the node with the lowest heuristic value h(n), expanding what appears closest to the goal in the short term."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It greedily chooses locally promising steps (like Fagaras) that lead to longer overall routes (450 miles vs 418 miles)'. البحث الجشع ليس أمثل التكلفة لأنه يركز على الخطوات المغرية محلياً (مثل الذهاب إلى Fagaras) التي قد تؤدي لمسار إجمالي أطول (450 ميلاً بدلاً من 418).",
    "explanationEn": "The correct answer is B: 'It greedily chooses locally promising steps (like Fagaras) that lead to longer overall routes (450 miles vs 418 miles)'. Greedy search is not cost-optimal because local heuristic choices can mislead the search into suboptimal paths (e.g. Arad->Fagaras->Bucharest at cost 450 vs 418)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'f(n) = g(n) + h(n)'. دالة التقييم القياسية في خوارزمية A* هي f(n) = g(n) + h(n)، حيث تمثل g التكلفة الفعلية المنفقة، و h التكلفة المقدرة المتبقية.",
    "explanationEn": "The correct answer is B: 'f(n) = g(n) + h(n)'. The A* evaluation function is f(n) = g(n) + h(n), combining the cost already incurred g(n) with the estimated remaining cost h(n)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The estimated cost of the best path that continues from the start node through node n to a goal'. تمثل f(n) في خوارزمية A* التكلفة الإجمالية المقدرة لأرخص مسار يمر من البداية عبر العقدة n وصولاً إلى الهدف.",
    "explanationEn": "The correct answer is B: 'The estimated cost of the best path that continues from the start node through node n to a goal'. In A*, f(n) represents the estimated total cost of the best solution path passing from the start node through node n to a goal."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'h(n) never overestimates the true cost to reach a goal, i.e., h(n) <= h*(n)'. تكون الدالة الحدسية h(n) مقبولة (Admissible) إذا كانت لا تُبالغ أبداً في تقدير التكلفة الحقيقية للوصول للهدف، أي h(n) <= h*(n).",
    "explanationEn": "The correct answer is B: 'h(n) never overestimates the true cost to reach a goal, i.e., h(n) <= h*(n)'. A heuristic h(n) is admissible if it never overestimates the true minimal cost to achieve a goal, satisfying h(n) <= h*(n) for all n."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Optimistic'. تُوصف الدالة الحدسية المقبولة بأنها 'متفائلة' (Optimistic) لأنها تعتقد دائماً أن تكلفة الوصول للهدف أقل أو مساوية للتكلفة الحقيقية.",
    "explanationEn": "The correct answer is B: 'Optimistic'. An admissible heuristic is called optimistic because it always estimates the cost to reach the goal as being less than or equal to the true cost."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The heuristic function h(n) is admissible'. تنص النظرية الأساسية للبحث الحدسي على أن بحث A* الشجري يضمن الوصول للحل الأمثل تكلفة إذا كانت الدالة الحدسية h(n) مقبولة (Admissible).",
    "explanationEn": "The correct answer is A: 'The heuristic function h(n) is admissible'. Tree-search A* is guaranteed to be cost-optimal if the heuristic function h(n) is admissible."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'h(n) <= c(n, a, n') + h(n')'. تكون الدالة الحدسية متسقة (Consistent / Monotonic) إذا تحقق لكل عقدة وخليفتها: h(n) <= c(n, a, n') + h(n').",
    "explanationEn": "The correct answer is A: 'h(n) <= c(n, a, n') + h(n')'. A heuristic is consistent (or monotonic) if for every node n and successor n' via action a, h(n) <= c(n, a, n') + h(n')."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Triangle inequality'. شرط الاتساق الحدسي h(n) <= c(n, a, n') + h(n') هو تطبيق رياضي مباشر لمتباينة المثلث (Triangle inequality) في الهندسة.",
    "explanationEn": "The correct answer is B: 'Triangle inequality'. Heuristic consistency is a direct application of the triangle inequality, stating that one side of a triangle cannot exceed the sum of the other two sides."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Every consistent heuristic is admissible, but not every admissible heuristic is consistent'. كل دالة حدسية متسقة هي بالضرورة دالة مقبولة، ولكن ليست كل دالة مقبولة متسقة؛ فالاتساق شرط أشد صرامة من القبول.",
    "explanationEn": "The correct answer is A: 'Every consistent heuristic is admissible, but not every admissible heuristic is consistent'. Every consistent heuristic is admissible, but an admissible heuristic is not necessarily consistent (consistency is a strictly stronger condition)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'All reachable nodes with f(n) < C*'. عند استخدام حدس متسق، تضمن خوارزمية A* توسيع جميع العقد التي تحقق f(n) < C*، حيث C* هي تكلفة المسار الأمثل.",
    "explanationEn": "The correct answer is B: 'All reachable nodes with f(n) < C*'. With a consistent heuristic, A* is guaranteed to expand all reachable nodes whose evaluation function satisfies f(n) < C*."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'No other optimal search algorithm using the same heuristic can expand fewer nodes (up to tie- breaking)'. تُوصف A* بالاتساق بأنها 'مثالية الكفاءة' (Optimally efficient) لأنه لا توجد خوارزمية أمثلية أخرى بنفس الحدس يمكنها توسيع عدد عقد أقل دون كسر الأمثلية.",
    "explanationEn": "The correct answer is B: 'No other optimal search algorithm using the same heuristic can expand fewer nodes (up to tie- breaking)'. A* with a consistent heuristic is optimally efficient because no optimal search algorithm using the same heuristic can expand fewer nodes."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Number of misplaced tiles (excluding the blank)'. في أحجية الأرقام الثمانية، تُعرَّف الدالة h1(n) بأنها عدد الألواح غير الموجودة في موضعها الصحيح مقارنة بالهدف (مع استبعاد الفراغ).",
    "explanationEn": "The correct answer is B: 'Number of misplaced tiles (excluding the blank)'. In the 8-puzzle, heuristic h1(n) is defined as the number of misplaced tiles (excluding the blank space)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The sum of horizontal and vertical grid steps each tile must take to reach its goal square'. تحسب حدسية مانهاتن h2(n) مجموع مسافات الخطوات الأفقية والرأسية المطلوبة لتحريك كل لوح من موضعه الحالي إلى موضعه المستهدف.",
    "explanationEn": "The correct answer is B: 'The sum of horizontal and vertical grid steps each tile must take to reach its goal square'. The Manhattan distance heuristic h2(n) sums the horizontal and vertical grid distances each tile must travel to reach its goal position."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'h2 dominates h1'. إذا كانت h1 و h2 مقبولين، وكانت h2(n) >= h1(n) لجميع العقد، فإننا نقول رياضياً إن الحدسية h2 تهيمن على h1 (Dominates).",
    "explanationEn": "The correct answer is B: 'h2 dominates h1'. If h1 and h2 are both admissible and h2(n) >= h1(n) for all nodes n, we say that h2 dominates h1."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A* using h2 will never expand more nodes than A* using h1 (except for tie-breaking)'. يُفضل الحدس المهيمن h2 لأنه يضمن أن A* لن توسع أبداً عقداً أكثر مما توسعها باستخدام h1، مما يقلل الجهد الحسابي ويسرع البحث.",
    "explanationEn": "The correct answer is B: 'A* using h2 will never expand more nodes than A* using h1 (except for tie-breaking)'. A dominant heuristic h2 is preferred because A* using h2 will never expand more nodes than A* using h1 (except possibly during tie-breaking)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Relaxed problem'. المشكلة المسترخية (Relaxed problem) هي مشكلة مشتقة من المشكلة الأصلية عن طريق إزالة قيود معينة على الأفعال المسموح بها، مما يجعل حلها أسهل.",
    "explanationEn": "The correct answer is A: 'Relaxed problem'. A relaxed problem is derived by dropping one or more constraints on actions from the original problem definition."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because removing action constraints adds edges to the state graph, creating shortcuts that can never increase the optimal cost'. تكلفة حل المشكلة المسترخية مقبولة دائماً لأن إزالة القيود تضيف مسارات مختصرة جديدة في المخطط، مما لا يمكن أن يزيد تكلفة الحل عن الأصل إطلاقاً.",
    "explanationEn": "The correct answer is B: 'Because removing action constraints adds edges to the state graph, creating shortcuts that can never increase the optimal cost'. The optimal solution cost of a relaxed problem is admissible because relaxing constraints adds edges, which can never increase the minimum path cost."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'h(n) = max{h1(n), h2(n), ..., hk(n)}'. عند توفر عدة حدسيات مقبولة، فإن دالة الحدس المهيمنة المجمعة والمقبولة دائماً هي دالة القيمة العظمى: h(n) = max{h1(n), h2(n), ..., hk(n)}.",
    "explanationEn": "The correct answer is B: 'h(n) = max{h1(n), h2(n), ..., hk(n)}'. Given multiple admissible heuristics, they can be combined into a dominant admissible heuristic using the maximum: h(n) = max{h1(n), ..., hk(n)}."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Pattern database'. قاعدة بيانات الأنماط (Pattern database) هي جدول بحث يخزن التكاليف المحسوبة مسبقاً لحلول جميع التهيئات الفرعية الممكنة للمسألة لاستخدامها كحدسيات فائقة الدقة.",
    "explanationEn": "The correct answer is A: 'Pattern database'. A pattern database is a lookup table storing exact precomputed solution costs for all possible configurations of abstract subproblems."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To trade off solution optimality for a significant reduction in the number of expanded nodes'. بحث A* الموزون (Weighted A*) يستخدم وزناً W > 1 على h(n) لمقايضة أمثلية الحل بحد أقصى W مقابل تقليص هائل في عدد العقد الموسعة وزمن البحث.",
    "explanationEn": "The correct answer is B: 'To trade off solution optimality for a significant reduction in the number of expanded nodes'. Weighted A* search uses W > 1 to trade off strict solution optimality for a dramatic reduction in the number of expanded nodes and search time."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The worst leaf node, which has the highest f-value'. عند امتلاء الذاكرة بالكامل، تقوم خوارزمية SMA* بحذف أسوأ عقدة ورقية من شجرة البحث، وهي العقدة التي تمتلك أعلى قيمة تقييم f.",
    "explanationEn": "The correct answer is B: 'The worst leaf node, which has the highest f-value'. When memory is exhausted, SMA* drops the worst leaf node from the search tree—the one having the highest f-value."
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
    "explanationAr": "العبارة صحيحة (True). لأن توصيف مسألة البحث رياضياً يتطلب العناصر الخمسة: الحالة الابتدائية، الأفعال ACTIONS(s)، دالة الانتقال RESULT(s,a)، اختبار الهدف GOAL-TEST(s)، ودالة التكلفة STEP-COST(s,a,s').",
    "explanationEn": "This statement is True. A search problem requires: Initial State, Action set, Transition Model, Goal Test predicate, and Path/Step Cost function."
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
    "explanationAr": "العبارة خاطئة (False). في البيئات غير الحتمية أو غير الملاحظة بالكامل، لا يمكن استخدام نظام مفتوح (open-loop) دون قراءة الحواس، بل يلزم نظام مغلق (closed-loop) للتحقق من نجاح الأفعال.",
    "explanationEn": "False. In nondeterministic or partially observable environments, an agent cannot safely execute open-loop; percepts must be monitored (closed-loop execution)."
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
    "explanationAr": "العبارة صحيحة (True). لأن فضاء الحالات يصف تكوينات العالم، وشجرة البحث تصف مسارات الوصول إليها؛ فإذا وُجد أكثر من مسار لنفس الحالة المادية، فستتولد لها عقد متعددة في شجرة البحث.",
    "explanationEn": "This statement is True. Multiple distinct search paths reaching the same physical state generate multiple separate tree nodes in a search tree."
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
    "explanationAr": "العبارة صحيحة (True). لأن عقدة الشجرة تحتوي على مؤشر العقدة الأم (Parent pointer) الذي يسمح للخوارزمية بالرجوع إلى الوراء من الهدف إلى الجذر لإعادة بناء تسلسل الأفعال المكون للحل.",
    "explanationEn": "This statement is True. The parent pointer in each search node links back to its predecessor, enabling backward trajectory tracing to reconstruct the solution."
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
    "explanationAr": "العبارة صحيحة (True). لأن خوارزميات بحث المخططات تحتفظ بجدول الحالات التي تم الوصول إليها (Reached table / Closed list) لمنع إعادة استكشاف الحالات وإهدار الجهد في دورات مفرغة.",
    "explanationEn": "This statement is True. Graph search maintains a reached table/closed list to prune redundant paths and eliminate cyclic infinite loops."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Tree-like search uses more memory than graph search because it maintains both an open list and a closed list of reached states. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching.",
    "explanationEn": "This statement is False. The claim that 'Tree-like search uses more memory than graph search because it maintains both an open list and a closed list of reached states.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). لأن البحث بالعرض أولاً يستكشف المستويات تدريجياً؛ وإذا كان معامل التفرع b محدوداً، فإن عدد العقد عند كل عمق يكون محدوداً، مما يضمن وصول الخوارزمية للحل عند أي عمق d محدود.",
    "explanationEn": "This statement is True. BFS systematically searches by increasing depth. If b is finite, every depth d contains a finite number of nodes, guaranteeing goal discovery at finite depth."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Breadth-First Search is always cost-optimal, regardless of whether step action costs are identical or widely different. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching.",
    "explanationEn": "This statement is False. The claim that 'Breadth-First Search is always cost-optimal, regardless of whether step action costs are identical or widely different.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). لأن كل طبقة في شجرة BFS تتضاعف بمعامل التفرع b؛ وللوصول إلى العمق d يتم توليد وتخزين b^d عقدة في الجبهة، مما يجعل الزمان والمكان O(b^d).",
    "explanationEn": "This statement is True. Because branching multiplies nodes at each level, the frontier at depth d contains b^d nodes, yielding O(b^d) time and memory complexity."
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
    "explanationAr": "العبارة صحيحة (True). لأن البحث بالتكلفة الموحدة (UCS) يستخدم طابور أولوية مرتباً بتكلفة المسار g(n)، مما يضمن استخراج وتوسيع المسارات الأرخص تكلفة أولاً بأول.",
    "explanationEn": "This statement is True. UCS uses a priority queue ordered by path cost g(n), ensuring the algorithm always expands the globally cheapest unexpanded path first."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن If Uniform-Cost Search applies an early goal test upon generating a node, it is still guaranteed to return the cost-optimal solution. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching.",
    "explanationEn": "This statement is False. The claim that 'If Uniform-Cost Search applies an early goal test upon generating a node, it is still guaranteed to return the cost-optimal solution.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Depth-First Search is cost-optimal because it always explores the deepest leaves first. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching.",
    "explanationEn": "This statement is False. The claim that 'Depth-First Search is cost-optimal because it always explores the deepest leaves first.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). لأن البحث بالعمق أولاً يحفظ في ذاكرته فقط مسار الفرع الحالي النشط والعقد الشقيقة غير المستكشفة على طول المسار، مما يعطي تعقيداً خطياً O(bm).",
    "explanationEn": "This statement is True. Tree-like DFS only retains the single active branch from root to leaf plus unexpanded siblings, requiring modest O(bm) linear memory."
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
    "explanationAr": "العبارة صحيحة (True). لأن بحث التراجع (Backtracking) يولد خليفة واحداً فقط في كل خطوة ويعدل الحالة في مكانها، فيستهلك مساحة تخزين تكفي حالة واحدة ومسار أفعال بطول O(m).",
    "explanationEn": "This statement is True. Backtracking generates one successor at a time and modifies states in-place, reducing memory to a single state and path of length O(m)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Depth-Limited Search is complete even if the chosen depth limit l is smaller than the depth d of the optimal solution. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching.",
    "explanationEn": "This statement is False. The claim that 'Depth-Limited Search is complete even if the chosen depth limit l is smaller than the depth d of the optimal solution.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). لأن خوارزمية IDS تنفذ DFS محدود العمق بتكلفة ذاكرة خطية O(bd)، مع زيادة الحد تدريجياً للعثور على أقصر مسار حل كما يفعل BFS تماماً.",
    "explanationEn": "This statement is True. IDS combines DFS's linear O(bd) memory efficiency with BFS's level-by-level completeness and shallowest-depth optimality."
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
    "explanationAr": "العبارة صحيحة (True). لأن البحث ثنائي الاتجاه يعمل من البداية نحو الهدف والعكس، فيتطلب جبهتين (Frontiers) وجدولي حالات تم الوصول إليها (Reached tables) لرصد نقطة التقاء المسارين.",
    "explanationEn": "This statement is True. Bidirectional search runs forward from the start and backward from the goal, requiring two separate frontiers and reached tables to detect intersection."
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
    "explanationAr": "العبارة صحيحة (True). لأن البحث الجشع بأفضلية أولاً يركز كلياً على تقدير المسافة المتبقية نحو الهدف، فيستخدم الدالة f(n) = h(n) لتوسيع العقدة التي تبدو الأقرب للهدف محلياً.",
    "explanationEn": "This statement is True. Greedy Best-First Search evaluates nodes purely by their estimated distance to the goal, setting f(n) = h(n)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Greedy Best-First Search is guaranteed to be cost-optimal because it always expands the node that appears closest to the goal. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching.",
    "explanationEn": "This statement is False. The claim that 'Greedy Best-First Search is guaranteed to be cost-optimal because it always expands the node that appears closest to the goal.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). لأن خوارزمية A* تجمع بين التكلفة الفعلية المنفقة g(n) والتكلفة التقديرية المتبقية h(n) لتقدير التكلفة الإجمالية الأرخص للمسار المار عبر العقدة n.",
    "explanationEn": "This statement is True. A* uses f(n) = g(n) + h(n), estimating total path cost by summing cost-so-far g(n) with estimated remaining cost h(n)."
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
    "explanationAr": "العبارة صحيحة (True). دالة الهيورستك المقبولة (Admissible) لا تبالغ أبداً في تقدير التكلفة للوصول للهدف، أي h(n) <= h*(n).",
    "explanationEn": "True. An admissible heuristic never overestimates the true cost to reach the goal."
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
    "explanationAr": "العبارة صحيحة (True). حيث يُعرَّف الاتساق رياضياً بمتباينة المثلث: h(n) <= c(n, a, n') + h(n') لكل عقدة n وخليفتها n'.",
    "explanationEn": "True. Heuristic consistency requires that for every node n and successor n' via action a, the triangle inequality h(n) <= c(n, a, n') + h(n') holds."
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
    "explanationAr": "العبارة صحيحة (True). فكل دالة متسقة هي بالضرورة مقبولة، ولكن يمكن إيجاد دوال مقبولة تخالف شرط الاتساق على بعض الفروع.",
    "explanationEn": "True. Consistency is a strictly stronger condition than admissibility: every consistent heuristic is admissible, but the reverse is not always true."
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
    "explanationAr": "العبارة صحيحة (True). لأن استخدام حدس متسق ومقبول يضمن أن جميع العقد ذات التكلفة f(n) < C* تُوسع أولاً، وتتوقف الخوارزمية بمجرد سحب الهدف ذي التكلفة C* دون فحص أي عقدة ذات f(n) > C*.",
    "explanationEn": "This statement is True. A* with an admissible/consistent heuristic prunes the search space by never expanding any node whose estimated f-cost strictly exceeds the optimal goal cost C*."
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
    "explanationAr": "العبارة صحيحة (True). لأن كل خطوة نقل للبلاطة تغير موضعها بمقدار مربع أفقي أو رأسي واحد كحد أقصى، فلا يمكن تقليص مسافة مانهاتن بأكثر من خطوة واحدة لكل حركة، مما يمنع المبالغة في التقدير.",
    "explanationEn": "This statement is True. Any physical tile slide moves one tile by exactly 1 grid step; hence Manhattan distance can never decrease by more than 1 per move, guaranteeing admissibility."
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
    "explanationAr": "العبارة صحيحة (True). لأن هيمنة h2 تعني h2(n) >= h1(n)، مما يرفع قيمة f(n) ويجعلها أقرب لـ C*، فيؤدي لتقليص مساحة البحث وتوسيع عدد عقد أقل أو مساوٍ لـ h1.",
    "explanationEn": "This statement is True. Dominance (h2 >= h1) gives tighter lower bounds on true costs, pruning more suboptimal nodes and ensuring A* expands no more nodes than with h1."
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
    "explanationAr": "العبارة صحيحة (True). لأن دالة القيمة العظمى max تأخذ التقدير الأدق والأعلى بين الحدسين المقبولين دون تجاوز التكلفة الحقيقية، فتضمن القبول والهيمنة على كليهما.",
    "explanationEn": "This statement is True. If h1(n) <= h*(n) and h2(n) <= h*(n), then max(h1, h2) <= h*(n); it remains admissible while being pointwise >= both, dominating them."
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
    "explanationAr": "العبارة صحيحة (True). لأن إزالة القيود من المسألة تضيف مسارات جديدة بديلة، مما لا يمكن أن يزيد تكلفة الحل عن المسألة الأصلية، فيكون حل المسألة المسترخية حداً أدنى آمناً ومقبولاً.",
    "explanationEn": "This statement is True. Relaxing constraints adds legal transitions, which can never increase optimal path cost, guaranteeing an admissible lower bound."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Weighted A* search with weight W > 1 is guaranteed to find the strictly cost-optimal solution in every search problem. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching.",
    "explanationEn": "This statement is False. The claim that 'Weighted A* search with weight W > 1 is guaranteed to find the strictly cost-optimal solution in every search problem.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). خوارزمية SMA* عند ضيق الذاكرة قد تقع في ظاهرة التخبط (thrashing) بإعادة توليد وحذف العقد نفسها باستمرار.",
    "explanationEn": "True. Memory-bounded algorithms like SMA* can suffer from thrashing when memory is insufficient to retain search paths."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Thought processes/reasoning vs Behavior, and Human performance vs Ideal rationality'. تُنظَّم تعريفات الذكاء الاصطناعي في AIMA تاريخياً ضمن مصفوفة ثنائية الأبعاد: بُعد (التفكير مقابل السلوك)، وبُعد (الأداء البشري مقابل العقلانية المثالية).",
    "explanationEn": "The correct answer is B: 'Thought processes/reasoning vs Behavior, and Human performance vs Ideal rationality'. AI definitions are historically mapped across two dimensions: thought processes/reasoning vs. behavior, and human performance vs. ideal rationality."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The Imitation Game (Turing Test)'. جسد آلان تورينج مدخل 'التصرف كالبشر' (Acting Humanly) عام 1950 عبر 'لعبة المحاكاة' (اختبار تورينج)، كمعيار عملي لقياس الذكاء عبر محادثة نصية.",
    "explanationEn": "The correct answer is B: 'The Imitation Game (Turing Test)'. Alan Turing operationalized the 'Acting Humanly' approach in 1950 through his Imitation Game (the Turing Test), assessing conversational indistinguishability from a human."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Physical Robotic Manipulation'. لا يتطلب اختبار تورينج القياسي عبر الشاشة النصية أي قدرات روبوتية مادية (Robotic Manipulation)؛ فالهدف هو اختبار الذكاء التجريدي بمعزل عن الجسد المادي.",
    "explanationEn": "The correct answer is C: 'Physical Robotic Manipulation'. The standard teletype Turing Test deliberately excludes Physical Robotic Manipulation, testing intellectual capabilities without physical embodiment."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Computer Vision and Robotics'. يتطلب اختبار تورينج الشامل (Total Turing Test) إضافتين جوهريتين للاختبار القياسي: الرؤية الحاسوبية (Computer Vision) لإدراك الأشياء، والروبوتات (Robotics) للتعامل معها ماديّاً.",
    "explanationEn": "The correct answer is B: 'Computer Vision and Robotics'. The Total Turing Test requires two additional capabilities beyond the standard test: Computer Vision (to perceive objects) and Robotics (to manipulate physical objects)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Cognitive Science'. يرتكز مدخل 'التفكير كالبشر' (Thinking Humanly) على مطابقة البرامج الحسابية مع السلوك البشري التجريبي عبر حقل 'العلوم الاستعرافية' (Cognitive Science).",
    "explanationEn": "The correct answer is B: 'Cognitive Science'. The 'Thinking Humanly' approach relies on Cognitive Science, which combines computer models with experimental psychology techniques to study the human mind."
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
    "explanationAr": "الإجابة الصحيحة هي (D): 'Measuring processor clock speeds and memory voltage'. قياس تردد المعالج وسرعة الفولتية ليس من طرق علم النفس الاستعرافي؛ فالطرق الثلاث المعتمدة هي: الاستبطان الذاتي، والتجارب النفسية، والتصوير الدماغي العصبي.",
    "explanationEn": "The correct answer is D: 'Measuring processor clock speeds and memory voltage'. Measuring clock speeds and voltage is purely computer hardware profiling; the three cognitive science methods are introspection, psychological experiments, and brain imaging."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Aristotle'. تعود جذور مدخل 'التفكير العقلاني' (Thinking Rationally) إلى تقاليد 'قوانين الفكر' والقياس المنطقي (Syllogisms) التي وضعها الفيلسوف اليوناني أرسطو.",
    "explanationEn": "The correct answer is A: 'Aristotle'. The 'Thinking Rationally' tradition originated with Aristotle's syllogisms, which initiated the formal 'laws of thought' approach to deductive reasoning."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable'. يواجه المدخل المنطقي الصارم عقبتين عمليتين: صعوبة تحويل معارف العالم الواقعي غير المؤكدة إلى رموز منطقية، والاستعصاء الحسابي للاستدلال المنطقي في المسائل الكبيرة.",
    "explanationEn": "The correct answer is B: 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable'. The logicist approach struggles because formalizing informal world knowledge is extremely hard, and pure deductive reasoning can be computationally intractable."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Acting Rationally (The rational agent approach)'. المدخل الأساسي المعتمد في كتاب AIMA كإطار تنظيمي مركزي شامل هو 'التصرف بعقلانية' عبر تصميم الوكلاء العقلانيين (Rational Agents).",
    "explanationEn": "The correct answer is C: 'Acting Rationally (The rational agent approach)'. AIMA adopts 'Acting Rationally' (the rational agent approach) as its core organizing framework because it is more general and operationally well-defined."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty'. يتفوق مدخل الوكيل العقلاني لأن الاستنتاج المنطقي هو مجرد آلية واحدة من بين عدة آليات لتحقيق العقلانية، مما يسمح بالسلوكيات المنعكسة واتخاذ القرارات تحت ظروف عدم اليقين.",
    "explanationEn": "The correct answer is B: 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty'. The rational agent approach is superior because logical inference is only one mechanism for rationality, accommodating reflex actions and decisions under uncertainty."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Optimize an objective or utility function specified by its human designers'. يُعرَّف 'النموذج القياسي' للذكاء الاصطناعي بأن الوكيل يُصمَّم لتحسين وتحقيق أقصى قيمة لدالة هدف أو منفعة محددة مسبقاً من قِبل مصمميه البشريين.",
    "explanationEn": "The correct answer is B: 'Optimize an objective or utility function specified by its human designers'. The 'standard model' of AI envisions an agent designed to optimize a fixed objective or utility function specified by its human designers."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences'. تكمن معضلة الملك ميداس (King Midas problem) في أن النظام فائق القدرة قد يحسن دالة هدف غير دقيقة أو معيبة حرفياً، مما يؤدي إلى عواقب كارثية غير مقصودة.",
    "explanationEn": "The correct answer is B: 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences'. The King Midas problem warns that if we specify the wrong objective, a highly capable autonomous agent will optimize that flawed goal with catastrophic unintended consequences."
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
    "explanationAr": "الإجابة الصحيحة هي (A): '5 minutes'. في بروتوكول اختبار تورينج الأصلي لعام 1950، يقضي المحاور البشري مدة 5 دقائق في المحادثة النصية قبل أن يصدر حكمه عما إذا كان الطرف الآخر إنساناً أم آلة.",
    "explanationEn": "The correct answer is A: '5 minutes'. In Turing's original 1950 formulation, the interrogator was given 5 minutes of conversational interaction before judging machine vs. human identity."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'AI researchers focus on studying the underlying principles of intelligence and solving real problems, analogous to how aeronautical engineering focuses on aerodynamics rather than copying birds'. يركز باحثو الذكاء الاصطناعي على دراسة المبادئ العميقة للذكاء وحل المسائل الواقعية، تماماً كما تركز هندسة الطيران على قوانين الديناميكا الهوائية بدلاً من تقليد ريش الطيور.",
    "explanationEn": "The correct answer is B: 'AI researchers focus on studying the underlying principles of intelligence and solving real problems, analogous to how aeronautical engineering focuses on aerodynamics rather than copying birds'. Researchers focus on underlying principles of rational decision-making rather than mimicking human idiosyncrasies, just as aeronautics studies aerodynamics rather than bird feathers."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Automated Reasoning'. يُطلق مصطلح 'الاستدلال الآلي' (Automated Reasoning) على قدرة النظام على استخدام المعلومات المخزنة للإجابة عن التساؤلات واستخلاص استنتاجات ومعارف جديدة.",
    "explanationEn": "The correct answer is B: 'Automated Reasoning'. Automated Reasoning is the capability to use stored knowledge to answer queries and derive logically sound new conclusions."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To adapt to new circumstances and detect and extrapolate patterns'. يُعد التعلم الآلي (Machine Learning) ضرورياً في اختبار تورينج لتمكين الوكيل من التكيف مع المواقف والظروف الجديدة واكتشاف الأنماط واستقرائها من التجارب.",
    "explanationEn": "The correct answer is B: 'To adapt to new circumstances and detect and extrapolate patterns'. Machine Learning is essential for passing the Turing Test because an intelligent agent must adapt to novel scenarios and extrapolate patterns from experience."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Does the 'right thing' based on what it knows and its performance measure'. يُعرَّف النظام بأنه عقلاني (Rational) إذا كان يفعل 'الشيء الصحيح' الذي يحقق أفضل نتيجة متوقعة استناداً إلى ما يدركه من معلومات ومعيار الأداء المحدد له.",
    "explanationEn": "The correct answer is B: 'Does the 'right thing' based on what it knows and its performance measure'. A system is defined as rational if it takes actions that maximize expected success given its perceptions and its specified performance measure."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits'. التفكير البشري ليس عقلانياً دائماً بسبب خضوعه للتحيزات المعرفية المنهجية (Cognitive biases)، والتأثيرات العاطفية، والمحدودية الحسابية لقدرات الدماغ المعرفية.",
    "explanationEn": "The correct answer is B: 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits'. Human thought is not strictly rational because human cognition is subject to systematic psychological biases, emotional heuristics, and bounded computational limits."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Dualism'. المذهب الفلسفي الذي وضعه رينيه ديكارت والذي يفترض أن العقل كيان غير مادي منفصل جوهرياً عن الجسد المادي يُعرف بـ 'الثنائية' (Dualism).",
    "explanationEn": "The correct answer is B: 'Dualism'. Descartes' philosophical doctrine positing that the mind is an immaterial substance fundamentally distinct from the physical body is Dualism."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Materialism (or Physicalism)'. تذهب المدرسة 'المادية' أو 'الفيزيائية' (Materialism / Physicalism) إلى أن عمليات الدماغ التي تخضع لقوانين الفيزياء والكيمياء هي بذاتها التي تُشكل وتولد العقل.",
    "explanationEn": "The correct answer is A: 'Materialism (or Physicalism)'. Materialism (Physicalism) asserts that the operations of the physical brain operating according to physical laws constitute all mental processes."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Empiricism'. تُعرف الحركة الفلسفية التي أطلقها جون لوك بمقولته 'لا شيء في العقل لم يكن أولاً في الحواس' بالمذهب التجريبي (Empiricism).",
    "explanationEn": "The correct answer is A: 'Empiricism'. Empiricism, championed by John Locke, asserts that all understanding and knowledge originate directly from sensory perception."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'How general rules and future predictions can be justified on the basis of a finite number of past observations'. حلل ديفيد هيوم 'مبدأ الاستقراء' طارحاً التساؤل الجوهري للتعلم الآلي: كيف يمكن تبرير القواعد العامة والتنبؤات المستقبلية استناداً إلى عدد محدود من الملاحظات الماضية؟",
    "explanationEn": "The correct answer is B: 'How general rules and future predictions can be justified on the basis of a finite number of past observations'. David Hume's problem of induction asks how general rules and future predictions can be logically justified based on a finite set of past observations."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Logical theories connected to observable sensory observations'. طورت حلقة فيينا مذهب 'الوضعية المنطقية' (Logical Positivism)، مؤكدة أن المعرفة ذات المعنى يجب أن ترتبط بنظريات منطقية متصلة بالملاحظات الحسية القابلة للتحقق.",
    "explanationEn": "The correct answer is B: 'Logical theories connected to observable sensory observations'. The Vienna Circle's logical positivism asserted that all meaningful knowledge must consist of logical theories grounded in verifiable sensory observations."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'George Boole'. قدم جورج بول المنطق البولي (Boolean Logic) عام 1847، مؤسساً إمكانية التفكير المنطقي عبر حسابات ومعادلات جبرية رياضية دقيقة.",
    "explanationEn": "The correct answer is B: 'George Boole'. George Boole introduced formal Boolean algebra in 1847, showing that propositional logical reasoning could be calculated mathematically."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'First-order predicate calculus'. وسع جوتلوب فريجه المنطق في 1879 بإدخال الكائنات والعلاقات والمسورات (Quantifiers)، منشئاً 'حساب المحمولات من الرتبة الأولى' (First-order predicate calculus).",
    "explanationEn": "The correct answer is A: 'First-order predicate calculus'. Gottlob Frege extended logic in 1879 by introducing objects, relations, and quantifiers, founding first-order predicate logic."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system'. أثبت كورت غودل في مبرهنة عدم الاكتمال (1931) أنه في أي نظام رياضي صوري قادر على تمثيل الحساب، توجد دائماً عبارات صحيحة لا يمكن إثباتها من داخل النظام.",
    "explanationEn": "The correct answer is B: 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system'. Gödel's Incompleteness Theorem (1931) proved that any consistent formal system rich enough for arithmetic contains true statements that cannot be proven within it."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Halting Problem'. قدم آلان تورينج عام 1936 'آلة تورينج' وأثبت وجود مسائل غير قابلة للحساب حاسوبياً، وأشهرها 'مسألة التوقف' (The Halting Problem).",
    "explanationEn": "The correct answer is B: 'Halting Problem'. Alan Turing (1936) proved that certain computational problems are undecidable, most famously the Halting Problem."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Exponentially with the size of the problem instances'. تُصنف المشكلة الحسابية رسمياً بأنها 'مستعصية' (Intractable) إذا كان وقت حلها ينمو بمعدل أُسي (Exponentially) مع زيادة حجم مدخلات المسألة.",
    "explanationEn": "The correct answer is C: 'Exponentially with the size of the problem instances'. In computational complexity theory, a problem is classified as intractable if the time required to solve it scales exponentially with instance size."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case'. أسس ستيفن كوك وريتشارد كارب نظرية NP-completeness، مبرهنين أن فئة واسعة من مسائل البحث التوافقي والاستدلال مستعصية حاسوبياً في أسوأ الحالات.",
    "explanationEn": "The correct answer is B: 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case'. Cook (1971) and Karp (1972) founded NP-completeness theory, proving that large classes of combinatorial search problems are likely intractable in the worst case."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Thomas Bayes'. صاغ عالم الرياضيات الإنجليزي توماس بايز (Thomas Bayes) في القرن الثامن عشر القاعدة الأساسية لتحديث الاحتمالات الذاتية في ضوء الأدلة والبيانات الجديدة.",
    "explanationEn": "The correct answer is B: 'Thomas Bayes'. Thomas Bayes formulated the fundamental rule for updating subjective probabilities upon observing new evidence (Bayes' Rule)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Gambling odds in games of chance'. تأسست النظرية الرياضية للاحتمالات عام 1654 في مراسلات بين بيير دي فيرما وبليز باسكال لتحليل احتمالات الرهان في ألعاب القمار والحظ.",
    "explanationEn": "The correct answer is A: 'Gambling odds in games of chance'. Probability theory was formally established in 1654 correspondence between Fermat and Pascal to calculate betting odds in gambling games."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Any algorithmic computation that can be carried out by any physical machine can be simulated by a Turing machine'. تؤكد أطروحة تشيرش-تورينج (Church-Turing thesis) أن أي حساب خوارزمي يمكن تنفيذه بواسطة أي آلة فيزيائية يمكن محاكاته بواسطة آلة تورينج.",
    "explanationEn": "The correct answer is A: 'Any algorithmic computation that can be carried out by any physical machine can be simulated by a Turing machine'. The Church-Turing thesis asserts that any effective algorithmic computation can be simulated by a universal Turing machine."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'John von Neumann and Oskar Morgenstern'. وضع جون فون نيومان وأوسكار مورجنشتيرن عام 1944 الأسس الرياضية لنظرية المنفعة، موضحين إمكانية نمذجة أي تفضيلات عقلانية بدالة منفعة رقمية.",
    "explanationEn": "The correct answer is B: 'John von Neumann and Oskar Morgenstern'. Von Neumann and Morgenstern (1944) established the axiomatic foundations of utility theory in 'Theory of Games and Economic Behavior'."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Probability Theory and Utility Theory'. تُعرَّف نظرية القرار (Decision Theory) في الاقتصاد والذكاء الاصطناعي بأنها الدمج المنهجي بين نظرية الاحتمالات (لتمثيل المعتقدات) ونظرية المنفعة (لتمثيل التفضيلات).",
    "explanationEn": "The correct answer is B: 'Probability Theory and Utility Theory'. Decision Theory is formally defined as the combination of Probability Theory (for beliefs) and Utility Theory (for preferences)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Satisficing (making decisions that are 'good enough')'. نال هربرت سايمون جائزة نوبل لأبحاثه التي بينت أن صانعي القرار البشريين يمارسون 'الإرضاء' (Satisficing) باتخاذ قرارات 'جيدة بما يكفي' بدلاً من التحسين المطلق.",
    "explanationEn": "The correct answer is B: 'Satisficing (making decisions that are 'good enough')'. Herbert Simon won the Nobel Prize for demonstrating that real agents exhibit bounded rationality and engage in satisficing (choosing 'good enough' options)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Markov Decision Processes (MDPs)'. ابتكر ريتشارد بيلمان البرمجة الديناميكية في الخمسينيات، مؤطراً فئة من مشاكل القرار التتابعية تُعرف بـ 'عمليات قرار ماركوف' (MDPs).",
    "explanationEn": "The correct answer is B: 'Markov Decision Processes (MDPs)'. Richard Bellman founded dynamic programming in the 1950s, formulating Markov Decision Processes (MDPs) for sequential decision problems."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Neuron'. الخلية العصبية (Neuron) هي الوحدة البيولوجية التشريحية الأساسية المسؤولة عن استقبال ومعالجة ونقل الإشارات والمعلومات داخل الدماغ والجهاز العصبي.",
    "explanationEn": "The correct answer is A: 'Neuron'. The neuron is the fundamental biological information-processing cell of the brain and nervous system."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds'. تعمل المعالجات الحاسوبية بدورات في زمن النانو ثانية، في حين تعمل الخلايا العصبية البيولوجية بسرعة أبطأ بكثير في نطاق المللي ثانية.",
    "explanationEn": "The correct answer is B: 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds'. Silicon computer processors operate at cycle times of nanoseconds, whereas biological neurons operate orders of magnitude slower, in milliseconds."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections'. يتفوق الدماغ في المهام الإدراكية بفضل التوازي الهائل (Massive Parallelism) عبر ما يقرب من 10^11 خلية عصبية و10^14 وصلة مشبكية تعمل معاً.",
    "explanationEn": "The correct answer is B: 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections'. The brain achieves superior perceptual performance despite slower cycle times through massive parallelism across ~10^11 neurons and ~10^14 synapses."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Objective measures of external stimuli and observable behavioral responses'. رفضت المدرسة السلوكية (Behaviorism) دراسة الحالات الذهنية الداخلية، وقصرت دراستها على القياسات الموضوعية للمثيرات الخارجية والاستجابات السلوكية المرئية.",
    "explanationEn": "The correct answer is B: 'Objective measures of external stimuli and observable behavioral responses'. Behaviorism rejected internal mental concepts, insisting psychology study only observable external stimuli and behavioral responses."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Kenneth Craik'. صاغ كينيث كريك (Kenneth Craik) في عام 1943 النموذج الذهني ثلاثي الخطوات: المثير -> التمثيل الداخلي -> الفعل، مؤسساً لعلم النفس الاستعرافي.",
    "explanationEn": "The correct answer is A: 'Kenneth Craik'. Kenneth Craik (1943) specified the 3-step cognitive model: stimulus -> internal cognitive representation -> physical action."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'MIT Symposium on Information Theory'. شهدت ندوة معهد ماساتشوستس للتكنولوجيا (MIT) لنظرية المعلومات عام 1956 تقديم أبحاث نيويل وسايمون وتشومسكي وميلر التي فجرت الثورة الاستعرافية.",
    "explanationEn": "The correct answer is A: 'MIT Symposium on Information Theory'. The 1956 MIT Symposium on Information Theory ignited the Cognitive Revolution through foundational papers by Newell, Simon, Chomsky, and Miller."
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
    "explanationAr": "الإجابة الصحيحة هي (A): '7 plus or minus 2 chunks'. أثبت جورج ميلر في ورقته الشهيرة عام 1956 أن سعة الذاكرة العاملة قصيرة المدى لدى الإنسان تبلغ تقريباً 7 وحدات أو كتل (زائد أو ناقص 2).",
    "explanationEn": "The correct answer is A: '7 plus or minus 2 chunks'. George Miller's landmark 1956 paper established that human short-term working memory capacity is approximately 7 ± 2 chunks."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs'. كان تراجع السلوكية وصعود النفس الاستعرافي جوهرياً للذكاء الاصطناعي لأنه شرعن للباحثين نمذجة التراكيب المعرفية الداخلية والأهداف والمعتقدات برمجياً.",
    "explanationEn": "The correct answer is A: 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs'. The cognitive revolution was vital for AI because it legitimized computationally modeling internal cognitive representations, goals, and beliefs."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Charles Babbage'. صمم تشارلز باباج 'المحرك التحليلي' الميكانيكي (Analytical Engine) عام 1834، والذي يُعد أول نموذج ميكانيكي للحاسوب القابل للبرمجة للأغراض العامة.",
    "explanationEn": "The correct answer is A: 'Charles Babbage'. Charles Babbage designed the mechanical Analytical Engine in 1834, recognized as the earliest precursor to general-purpose programmable computers."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform'. اعترضت آدا لوفليس، أول مبرمجة في التاريخ، مؤكدة أن المحرك التحليلي ليس لديه أي ادعاء لابتكار أي شيء، بل يمكنه فقط تنفيذ ما نعرف كيف نأمره بفعله.",
    "explanationEn": "The correct answer is A: 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform'. Ada Lovelace famously observed that the Analytical Engine has no pretensions to originate anything; it can only do whatever we know how to order it to perform."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The Bombe'. صمم فريق آلان تورينج في بليتشلي بارك آلة 'بومب' (The Bombe) الكهروميكانيكية لفك شفرات جهاز إنيجما العسكري الألماني خلال الحرب العالمية الثانية.",
    "explanationEn": "The correct answer is A: 'The Bombe'. Alan Turing's team at Bletchley Park designed The Bombe to automate the cryptanalysis and deciphering of Enigma military ciphers."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'A water clock with a float regulator'. تُعد الساعة المائية ذات المنظم العائم التي بناها كتيسيبيوس السكندري (حوالي 250 ق.م) أول نظام تحكم تاريخي معروف ذاتي التنظيم يعتمد على التغذية الراجعة.",
    "explanationEn": "The correct answer is A: 'A water clock with a float regulator'. Ktesibios of Alexandria's water clock with a float regulator (c. 250 BCE) is cited as an early historical self-regulating feedback control system."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Cybernetics'. ألف نوربرت وينر كتابه التأسيسي عام 1948 الذي قنن فيه حلقات التغذية الراجعة والتحكم في الحيوانات والآلات تحت عنوان 'السيبرنطيقا' (Cybernetics).",
    "explanationEn": "The correct answer is A: 'Cybernetics'. Norbert Wiener published 'Cybernetics' in 1948, formalizing feedback control loops and information processing in biological and engineered systems."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning'. ركزت نظرية التحكم الكلاسيكية تاريخياً على الفضاءات المستمرة المحكومة بحساب التفاضل والتكامل، بينما ركز الذكاء الاصطناعي المبكر على الاستدلال المنطقي والرمزي المنفصل.",
    "explanationEn": "The correct answer is A: 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning'. Control theory focused on continuous systems governed by differential equations, whereas early AI focused on discrete symbolic logical reasoning."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Noam Chomsky'. نشر نعوم تشومسكي كتاب 'البنى النحوية' عام 1957، مبيناً أن اللغة البشرية لا يمكن تفسيرها بسلاسل ماركوفية سلوكية بسيطة لأنها تتطلب قواعد توليدية عميقة.",
    "explanationEn": "The correct answer is A: 'Noam Chomsky'. Noam Chomsky published 'Syntactic Structures' (1957), proving human language syntax cannot be explained by simple behaviorist Markovian word chains."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Computational Linguistics (Natural Language Processing)'. نتج عن تلاقي اللسانيات الصورية مع علوم الحاسوب والذكاء الاصطناعي ولادة حقل 'اللسانيات الحاسوبية' أو 'معالجة اللغات الطبيعية' (NLP).",
    "explanationEn": "The correct answer is A: 'Computational Linguistics (Natural Language Processing)'. The intersection of formal linguistics and AI created the field of Computational Linguistics (Natural Language Processing)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context'. يتطلب فهم اللغة معارف حسية وعامة واسعة عن العالم لأن الجمل تحتوي على لبس وغموض نحوي ودلالي هائل لا يمكن فضه إلا بسياق المعرفة الخلفية للواقع.",
    "explanationEn": "The correct answer is B: 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context'. Natural language understanding requires world knowledge because sentences contain immense lexical and syntactic ambiguities resolvable only via real-world context."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months'. ينص قانون مور (Moore's Law) التجريبي على أن عدد الترانزستورات المدمجة على الدائرة المتكاملة يتضاعف تقريباً كل 18 إلى 24 شهراً.",
    "explanationEn": "The correct answer is A: 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months'. Moore's Law is the empirical observation that the number of transistors on microchips doubles roughly every 18 to 24 months."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Warren McCulloch and Walter Pitts'. نشر وارن ماكولوتش ووالتر بيتس عام 1943 أول نموذج رياضي وحسابي لشبكة عصبية اصطناعية تعتمد على منطق العتبة للخلايا العصبية.",
    "explanationEn": "The correct answer is A: 'Warren McCulloch and Walter Pitts'. Warren McCulloch and Walter Pitts (1943) published the first computational mathematical model of artificial neural networks."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')'. قدم دونالد هب (1949) قاعدة التعلم الهبي الشهيرة التي توضح أن الوصلات المشبكية تزداد قوة عندما تُثار خليتان عصبيتان في وقت متزامن ('تتصل معاً إذا أثيرت معاً').",
    "explanationEn": "The correct answer is A: 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')'. Donald Hebb (1949) introduced Hebbian learning, stating that synaptic connections strengthen when two neurons fire together."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'SNARC'. بنى مارفن مينسكي ودين إدموندز عام 1951 أول حاسوب شبكات عصبية اصطناعية عامل في التاريخ، وأُطلق عليه اسم SNARC.",
    "explanationEn": "The correct answer is A: 'SNARC'. In 1951, Marvin Minsky and Dean Edmonds built SNARC, the first operational artificial neural network computer."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Dartmouth College'. الميلاد الرسمي المعتمد للذكاء الاصطناعي كتخصص أكاديمي مستقل حدث في ورشة العمل التاريخية التي استمرت شهرين عام 1956 في كلية دارتموث (Dartmouth College).",
    "explanationEn": "The correct answer is B: 'Dartmouth College'. The official birth of Artificial Intelligence as an academic field occurred at the Dartmouth College summer workshop organized by John McCarthy in 1956."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Logic Theorist'. ورشة عمل دارتموث (1956) هي الحدث التاريخي الذي تأسس فيه علم الذكاء الاصطناعي رسمياً بقيادة جون مكارثي ومارفن مينسكي وشانون.",
    "explanationEn": "The correct answer is A: 'Logic Theorist'. The 1956 Dartmouth workshop officially established Artificial Intelligence as an academic field, organized by John McCarthy."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Checkers'. ابتكر آرثر صموئيل عام 1952 في شركة IBM برنامجاً رائداً للعبة الداما (Checkers)، وتعلم البرنامج ذاتياً ليصبح أفضل مهارة من صانعه البشري.",
    "explanationEn": "The correct answer is A: 'Checkers'. Arthur Samuel (1952) created a groundbreaking Checkers program at IBM that learned through self-play to outperform its creator."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The Lighthill Report'. وجه 'تقرير لايتهيل' (The Lighthill Report) البريطاني عام 1973 انتقادات حادة لأبحاث الذكاء الاصطناعي لفشلها في تحقيق وعودها الكبرى، مما تسبب بقطع التمويل.",
    "explanationEn": "The correct answer is A: 'The Lighthill Report'. The Lighthill Report (1973) in the UK heavily criticized AI research for failing to achieve its grand promises, triggering severe funding cuts and the first AI winter."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'XOR (Exclusive-OR)'. أثبت مارفن مينسكي وسيمور بابيرت في كتابهما 'Perceptrons' عام 1969 أن البيرسبترون أحادي الطبقة عاجز رياضياً عن حساب دالة XOR غير الخطية.",
    "explanationEn": "The correct answer is C: 'XOR (Exclusive-OR)'. Minsky and Papert's 1969 book 'Perceptrons' proved mathematically that single-layer perceptrons cannot learn the non-linear XOR function."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'MYCIN'. نظام MYCIN الذي طُوِّر في السبعينيات كان نظاماً خبيراً شهيراً اعتمد على 450 قاعدة لتشخيص الأمراض المعدية في الدم والتوصية بالمضادات الحيوية.",
    "explanationEn": "The correct answer is A: 'MYCIN'. MYCIN was a famous 1970s medical expert system using roughly 450 rules to diagnose infectious blood diseases and recommend therapies."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Configure customer computer orders for VAX computer systems'. أثبت نظام R1 (المعروف بـ XCON) النجاح التجاري للأنظمة الخبيرة في الثمانينيات لشركة DEC عبر أتمتة تكوين وتجميع طلبيات حواسيب VAX المخصصة.",
    "explanationEn": "The correct answer is B: 'Configure customer computer orders for VAX computer systems'. R1 (XCON) was a commercially successful expert system at DEC that configured customer orders for VAX computer systems, saving millions annually."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Backpropagation'. أشعل روميلهارت وهينتون وماكليلاند نهضة الشبكات العصبية (الاتصالية) في 1986 عبر نشر خوارزمية الانتشار العكسي (Backpropagation) لتدريب الشبكات متعددة الطبقات.",
    "explanationEn": "The correct answer is A: 'Backpropagation'. The Connectionist revival in 1986 was ignited by Rumelhart, Hinton, and McClelland through the widespread popularization of the Backpropagation algorithm."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Bayesian Networks'. أحدث جوديا بيرل (Judea Pearl) ثورة في الذكاء الاصطناعي عام 1988 بتقديمه 'الشبكات البايزية' (Bayesian Networks) كإطار رسمي للاستدلال في ظل عدم اليقين.",
    "explanationEn": "The correct answer is A: 'Bayesian Networks'. Judea Pearl transformed AI in 1988 by introducing Bayesian Networks as a principled, rigorous framework for probabilistic reasoning under uncertainty."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Garry Kasparov'. حقق حاسوب Deep Blue من شركة IBM إنجازاً تاريخياً في عام 1997 عندما هزم بطل العالم في الشطرنج غاري كاسباروف (Garry Kasparov) في مباراة رسمية.",
    "explanationEn": "The correct answer is A: 'Garry Kasparov'. IBM's Deep Blue made history in 1997 by defeating reigning World Chess Champion Garry Kasparov in a regulation match."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'ImageNet'. انطلقت حقبة التعلم العميق الحديثة في عام 2012 عندما حققت شبكة AlexNet طفرة استثنائية في التعرف على الصور على مجموعة بيانات ImageNet الضخمة.",
    "explanationEn": "The correct answer is A: 'ImageNet'. The modern Deep Learning era was catalyzed in 2012 when AlexNet achieved a historic breakthrough on the large-scale ImageNet computer vision dataset."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Monte Carlo Tree Search (MCTS)'. هزم نظام AlphaGo من شركة DeepMind بطل العالم لي سيدول عام 2016 في لعبة Go المعقدة عبر الجمع بين الشبكات العصبية العميقة وبحث شجرة مونت كارلو (MCTS).",
    "explanationEn": "The correct answer is A: 'Monte Carlo Tree Search (MCTS)'. DeepMind's AlphaGo defeated world champion Lee Sedol in 2016 by combining deep neural networks with Monte Carlo Tree Search (MCTS)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions'. تتمثل 'مسألة محاذاة القيم' (Value Alignment Problem) في التحدي الهندسي لضمان أن تسعى أنظمة الذكاء الاصطناعي المستقلة لتحقيق أهداف تتوافق حقاً مع قيم ونوايا البشر.",
    "explanationEn": "The correct answer is B: 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions'. The value alignment problem focuses on ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions."
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
    "explanationAr": "العبارة صحيحة (True). حيث يتعمد اختبار تورينج عزل المظهر والتفاعل المادي لضمان تقييم جوهر الذكاء الاستدلالي دون أن يتأثر بالحكم على الشكل الخارجي للآلة.",
    "explanationEn": "True. The standard Turing Test deliberately avoids physical embodiment to evaluate cognitive capability and intelligence rather than physical appearance."
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
    "explanationAr": "العبارة صحيحة (True). حيث يشترط اختبار تورينج الشامل (Total Turing Test) امتلاك الرؤية الحاسوبية لإدراك البيئة والروبوتات للتفاعل المادي معها.",
    "explanationEn": "True. Passing the Total Turing Test requires physical perception and interaction capabilities via Computer Vision and Robotics."
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
    "explanationAr": "العبارة صحيحة (True). لأن العلوم الاستعرافية تدمج نماذج الذكاء الاصطناعي الحاسوبية مع التجارب السيكولوجية لاختبار الفرضيات حول آليات عمل العقل البشري علمياً.",
    "explanationEn": "This statement is True. Cognitive Science unifies computational AI architectures with empirical psychology and neuroscience to build verified theories of human mental processing."
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
    "explanationAr": "العبارة صحيحة (True). لأن القياس الأرسطي (Syllogism) مصمم كقالب استدلال استنباطي صوري: إذا كانت المقدمات الكبرى والصغرى صحيحة، فإن النتيجة المستخلصة تكون صحيحة حتماً بالضرورة المنطقية.",
    "explanationEn": "This statement is True. Aristotelian syllogisms provided formal logical deductive schemas guaranteeing truth-preserving inference from sound premises to valid conclusions."
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
    "explanationAr": "العبارة صحيحة (True). لأن العقلانية في الذكاء الاصطناعي تُعرَّف بالسعي لتحقيق أفضل نتيجة متوقعة استناداً إلى دالة المنفعة والمعلومات المتاحة، حتى تحت ظروف الاحتمالات وعدم اليقين.",
    "explanationEn": "This statement is True. Rationality is formally defined as acting to maximize expected utility given current percepts and background knowledge under uncertainty."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Under the rational agent approach, making correct logical deductions is the ONLY possible way for an agent to exhibit rational behavior. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Under the rational agent approach, making correct logical deductions is the ONLY possible way for an agent to exhibit rational behavior.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن René Descartes was an advocate of materialism, arguing that the human mind is entirely identical to the physical machinery of the brain. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'René Descartes was an advocate of materialism, arguing that the human mind is entirely identical to the physical machinery of the brain.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). لأن المذهب التجريبي (جون لوك وهيوم) يرى أن العقل يولد كصفحة بيضاء (Tabula Rasa) وأن المعرفة تُبنى تراكمياً من المدخلات الحسية والملاحظات التجريبية.",
    "explanationEn": "This statement is True. Empiricism (Locke, Hume) posits that the mind begins as a blank slate, with all concepts and knowledge deriving from sensory perception and experience."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Kurt Gödel proved that any sufficiently powerful formal mathematical system is both complete and fully decidable. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Kurt Gödel proved that any sufficiently powerful formal mathematical system is both complete and fully decidable.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). لأن آلان تورينج أثبت عام 1936 عبر برهان التناقض أن مسألة التوقف (Halting Problem) غير قابلة للحل بحساب عام لأي برنامج ومدخلات تعسفية.",
    "explanationEn": "This statement is True. Alan Turing proved via diagonalization and self-reference that the Halting Problem is undecidable by any universal algorithm."
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
    "explanationAr": "العبارة صحيحة (True). لأن مسائل NP-complete تتطلب وقتاً أسياً في أسوأ الحالات، وما لم يُثبت أن P=NP (وهو مستبعد عالمياً)، فلا توجد خوارزمية قطعية تحلها بزمن متعدد الحدود.",
    "explanationEn": "This statement is True. Unless P=NP, NP-complete problems are fundamentally intractable in the worst case and lack polynomial-time solution algorithms."
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
    "explanationAr": "العبارة صحيحة (True). لأن مبرهنة بايز P(H|E) = P(E|H)P(H)/P(E) تقدم الصيغة الرياضية الصارمة لكيفية تعديل الاحتمال القبلي لفرضية ما عند استقبال دليل حسي جديد.",
    "explanationEn": "This statement is True. Bayes' theorem mathematically formalizes rational belief updating, computing posterior probabilities from priors and conditional evidence likelihoods."
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
    "explanationAr": "العبارة صحيحة (True). فقد أثبت فون نيومان ومورجنشتيرن رياضياً أن أي وكيل عقلاني يمتلك تفضيلات متسقة بين اليانصيب يجب أن يتصرف كمعظم للمنفعة المتوقعة.",
    "explanationEn": "True. Von Neumann and Morgenstern proved axiomatically that rational agents with consistent lottery preferences act as expected utility maximizers."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Herbert Simon's concept of 'satisficing' states that agents should always search until they compute the mathematically optimal solution. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Herbert Simon's concept of 'satisficing' states that agents should always search until they compute the mathematically optimal solution.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Individual biological neurons in the human brain have significantly faster switching speeds than modern silicon microprocessor transistors. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Individual biological neurons in the human brain have significantly faster switching speeds than modern silicon microprocessor transistors.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). لأن التشريح العصبي للدماغ البشري يُظهر وجود نحو 100 مليار عصبون (10^11)، يتصل كل منها بآلاف المشابك، مما يوفر قدرة معالجة متوازية هائلة.",
    "explanationEn": "This statement is True. Neuroanatomy confirms the brain contains roughly 10^11 neurons, interconnected via ~10^14 synaptic junctions, providing massive biological parallelism."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Psychological behaviorism actively encouraged the study of internal representations, beliefs, and conscious desires. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Psychological behaviorism actively encouraged the study of internal representations, beliefs, and conscious desires.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Ada Lovelace anticipated that the Analytical Engine would be capable of genuine original thought completely independent of human programming. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Ada Lovelace anticipated that the Analytical Engine would be capable of genuine original thought completely independent of human programming.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). لأن السيبرنطيقا (نوربرت وينر 1948) قامت على مبدأ التغذية الراجعة السالبة (Negative feedback): قياس الانحراف عن الهدف وإصدار إشارة تصحيحية لتقليص الخطأ باستمرار.",
    "explanationEn": "This statement is True. Cybernetics mathematically formalized negative feedback loops where error between actual state and target state drives corrective control actions."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Noam Chomsky demonstrated that the infinite syntactic creativity of human natural language could be adequately modeled by simple finite-state Markov chains. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Noam Chomsky demonstrated that the infinite syntactic creativity of human natural language could be adequately modeled by simple finite-state Markov chains.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). لأن نموذج ماكولوتش وبيتس (1943) أثبت أن دمج خلايا عصبية منطقية بسيطة يمكنه تمثيل عمليات AND و OR و NOT، وبالتالي محاكاة أي حساب منطقي تورينجي.",
    "explanationEn": "This statement is True. McCulloch and Pitts showed that threshold neural units can implement fundamental logic gates (AND, OR, NOT), making networks capable of universal computation."
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
    "explanationAr": "العبارة صحيحة (True). لأن جون مكارثي هو من اقترح صراحة مصطلح 'الذكاء الاصطناعي' (Artificial Intelligence) في مقترح ورشة دارتموث الصيفية لعام 1956 لتمييزه عن السيبرنطيقا.",
    "explanationEn": "This statement is True. John McCarthy explicitly coined 'Artificial Intelligence' in the 1955 funding proposal for the seminal 1956 Dartmouth Summer Research Project."
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
    "explanationAr": "العبارة صحيحة (True). لأن برنامج Logic Theorist (نيويل وسايمون 1956) تمكن من إثبات مبرهنة الهندسة في Principia Mathematica بمسار استدلالي أقصر وأكثر أناقة من إثبات رسل ووايتهيد الأصلي.",
    "explanationEn": "This statement is True. Newell and Simon's Logic Theorist proved Theorem 2.85 of Principia Mathematica with a shorter, more elegant deduction than Russell and Whitehead's published proof."
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
    "explanationAr": "العبارة صحيحة (True). لأن الفشل في ترجمة النصوص الحرفية (بسبب الجهل بالمعنى وسياق العالم) أدى إلى فضائح تمويلية وتقرير ALPAC عام 1966 الذي جمد الدعم الحكومي للذكاء الاصطناعي.",
    "explanationEn": "This statement is True. Early literal translation systems produced embarrassingly nonsensical results due to lack of world knowledge, prompting the ALPAC report and triggering the first AI winter."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن Minsky and Papert's 1969 book mathematically proved that multi-layer neural networks could never learn nonlinear functions under any circumstances. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'Minsky and Papert's 1969 book mathematically proved that multi-layer neural networks could never learn nonlinear functions under any circumstances.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). لأن الأنظمة الخبيرة (مثل MYCIN وDENDRAL) أدركت أن محركات البحث العامة وحدها لا تكفي، وأن الذكاء الحقيقي يتطلب قواعد معارف تخصصية مستخلصة من خبراء المجال.",
    "explanationEn": "This statement is True. The 1970s Knowledge Revolution shifted focus from weak general-purpose search algorithms to encoding massive domain-specific knowledge bases."
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
    "explanationAr": "العبارة صحيحة (True). لأن نشر خوارزمية الانتشار العكسي (Backpropagation) في 1986 وفر وسيلة حسابية فعالة لتوزيع الخطأ وضبط الأوزان في الطبقات الخفية، متجاوزاً قيود البيرسبترون أحادي الطبقة.",
    "explanationEn": "This statement is True. Backpropagation solved the credit assignment problem for hidden layers by computing gradient descent efficiently, enabling multi-layer network training."
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
    "explanationAr": "العبارة صحيحة (True). لأن الشبكات البايزية (جوديا بيرل 1988) تستخدم مخططات موجهة لا دورية لتمثيل الاستقلال الشرطي، مما مكن من إجراء حسابات احتمالية متسقة ودقيقة دون الحاجة لجداول كاملة ضخمة.",
    "explanationEn": "This statement is True. Bayesian networks use directed acyclic graphs to encode conditional independence relations, enabling mathematically tractable probabilistic inference."
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
    "explanationAr": "العبارة خاطئة (False). الصواب هو نقيض هذه العبارة لأن The breakthrough of modern Deep Learning was driven primarily by novel mathematical theorems rather than the availability of massive datasets and parallel GPU computing power. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI.",
    "explanationEn": "This statement is False. The claim that 'The breakthrough of modern Deep Learning was driven primarily by novel mathematical theorems rather than the availability of massive datasets and parallel GPU computing power.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). مشكلة الملك ميداس في أمان الذكاء الاصطناعي تعني تحقيق الآلة للهدف المحدد لها حرفياً ولكن الهدف صيغ بطريقة غير ملائمة مما يؤدي لعواقب وخيمة غير متوقعة.",
    "explanationEn": "True. The King Midas problem refers to an agent perfectly optimizing a poorly specified or unintended human objective."
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
