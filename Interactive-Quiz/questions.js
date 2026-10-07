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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Agent'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Agent'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Percept'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Percept'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Percept sequence'. سلسلة المُدركات (Percept Sequence) تمثل التاريخ التراكمي الكامل لكل ما التقطه الوكيل بحواسه منذ بدء عمله.",
    "explanationEn": "The correct answer is B: 'Percept sequence'. The Percept Sequence contains the complete chronological history of everything the agent has ever perceived."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Agent function'. سلسلة المُدركات (Percept Sequence) تمثل التاريخ التراكمي الكامل لكل ما التقطه الوكيل بحواسه منذ بدء عمله.",
    "explanationEn": "The correct answer is C: 'Agent function'. The Percept Sequence contains the complete chronological history of everything the agent has ever perceived."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The function is an abstract mathematical concept, while the program runs on physical hardware'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The function is an abstract mathematical concept, while the program runs on physical hardware'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): '8 states'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: '8 states'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'n * 2^n'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'n * 2^n'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Controller'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Controller'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Softbot'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Softbot'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Sum from t=1 to T of |P|^t'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Sum from t=1 to T of |P|^t'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Left, Right, Suck, NoOp'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Left, Right, Suck, NoOp'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Consequentialism'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Consequentialism'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Performance measure'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Performance measure'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A rational agent could maximize score by repeatedly dumping dirt and cleaning it again'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'A rational agent could maximize score by repeatedly dumping dirt and cleaning it again'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Design them according to the desired state of the environment'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة.",
    "explanationEn": "The correct answer is B: 'Design them according to the desired state of the environment'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Four factors'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Four factors'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'The agent's future percepts that have not yet occurred'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'The agent's future percepts that have not yet occurred'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Omniscient'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Omniscient'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Rationality maximizes expected performance, whereas perfection maximizes actual outcome'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Rationality maximizes expected performance, whereas perfection maximizes actual outcome'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Information gathering'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Information gathering'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It modifies future percepts to help make a decision that maximizes expected safety'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'It modifies future percepts to help make a decision that maximizes expected safety'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Autonomy'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Autonomy'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Innate, rigid behavioral routines that fail when assumptions are violated'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Innate, rigid behavioral routines that fail when assumptions are violated'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Bounded rationality'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Bounded rationality'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'a = argmax_a E(U | a)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'a = argmax_a E(U | a)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Performance measure, Environment, Actuators, Sensors'. مواصفات PEAS تشمل: الأداء (Performance)، البيئة (Environment)، المشغلات (Actuators)، وأجهزة الاستشعار (Sensors).",
    "explanationEn": "The correct answer is B: 'Performance measure, Environment, Actuators, Sensors'. PEAS stands for Performance measure, Environment, Actuators, and Sensors, used to specify a task environment."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Specify the task environment (PEAS) as fully as possible'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Specify the task environment (PEAS) as fully as possible'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Steering wheel'. مواصفات PEAS تشمل: الأداء (Performance)، البيئة (Environment)، المشغلات (Actuators)، وأجهزة الاستشعار (Sensors).",
    "explanationEn": "The correct answer is B: 'Steering wheel'. PEAS stands for Performance measure, Environment, Actuators, and Sensors, used to specify a task environment."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Lidar / Radar'. مواصفات PEAS تشمل: الأداء (Performance)، البيئة (Environment)، المشغلات (Actuators)، وأجهزة الاستشعار (Sensors).",
    "explanationEn": "The correct answer is C: 'Lidar / Radar'. PEAS stands for Performance measure, Environment, Actuators, and Sensors, used to specify a task environment."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Driving smoothly to maximize comfort, safety, and passenger satisfaction'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة.",
    "explanationEn": "The correct answer is A: 'Driving smoothly to maximize comfort, safety, and passenger satisfaction'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Accuracy in minimizing false positives and false negatives'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة.",
    "explanationEn": "The correct answer is B: 'Accuracy in minimizing false positives and false negatives'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Moving an email to the Spam folder'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Moving an email to the Spam folder'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Touchscreen display of questions, test suggestions, and diagnoses'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Touchscreen display of questions, test suggestions, and diagnoses'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Percentage of parts placed into correct sorting bins'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة.",
    "explanationEn": "The correct answer is A: 'Percentage of parts placed into correct sorting bins'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Digital cameras and tactile touch sensors'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Digital cameras and tactile touch sensors'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Valves, heaters, pumps, and stirrers'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Valves, heaters, pumps, and stirrers'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The agent's sensors give it access to the complete state of the environment at each point in time'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The agent's sensors give it access to the complete state of the environment at each point in time'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Players cannot see the hidden cards held by their opponents'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Players cannot see the hidden cards held by their opponents'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Deterministic'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Deterministic'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Stochastic explicitly associates probabilities with outcomes, while nondeterministic simply lists possibilities'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Stochastic explicitly associates probabilities with outcomes, while nondeterministic simply lists possibilities'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Episodic'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Episodic'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Current board moves have long-term consequences that directly affect all future states'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Current board moves have long-term consequences that directly affect all future states'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Semidynamic'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Semidynamic'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Playing chess with a running game clock'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Playing chess with a running game clock'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Discrete'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Discrete'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Speed, location, steering angles, and time vary continuously through real-valued ranges'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Speed, location, steering angles, and time vary continuously through real-valued ranges'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The outcomes (or outcome probabilities) for all actions are fully given to the agent'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The outcomes (or outcome probabilities) for all actions are fully given to the agent'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Yes; in solitaire card games the rules are known, but face-down cards cannot be seen'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Yes; in solitaire card games the rules are known, but face-down cards cannot be seen'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Standard crossword puzzle'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Standard crossword puzzle'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Fully observable and Stochastic'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Fully observable and Stochastic'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Backgammon involves dice rolls, which introduce randomness into state transitions'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 2: Intelligent Agents ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Backgammon involves dice rolls, which introduce randomness into state transitions'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). An agent is anything that can perceive its environment through sensors and act upon that environment through actuators. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. An agent is anything that can perceive its environment through sensors and act upon that environment through actuators. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). A table-driven agent is theoretically capable of implementing any valid agent function, despite being practically infeasible for complex tasks. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. A table-driven agent is theoretically capable of implementing any valid agent function, despite being practically infeasible for complex tasks. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). As a general rule, a performance measure should be designed according to what one actually wants to achieve in the environment, rather than how the agent should behave. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. As a general rule, a performance measure should be designed according to what one actually wants to achieve in the environment, rather than how the agent should behave. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). Simple reflex agents choose actions based solely on the current percept, completely ignoring the historical percept sequence. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Simple reflex agents choose actions based solely on the current percept, completely ignoring the historical percept sequence. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). In partially observable environments, deterministic simple reflex agents are often prone to getting trapped in infinite, unrecoverable loops. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. In partially observable environments, deterministic simple reflex agents are often prone to getting trapped in infinite, unrecoverable loops. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). Randomization of actions can sometimes help a simple reflex agent escape infinite loops in partially observable single-agent environments. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Randomization of actions can sometimes help a simple reflex agent escape infinite loops in partially observable single-agent environments. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). The transition model in a model-based agent reflects knowledge about how the world evolves independently and how the agent's actions change the world. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The transition model in a model-based agent reflects knowledge about how the world evolves independently and how the agent's actions change the world. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). Utility-based agents use an internalized utility function that allows them to make rational trade- offs between conflicting goals. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Utility-based agents use an internalized utility function that allows them to make rational trade- offs between conflicting goals. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). The problem generator component in a learning agent is responsible for suggesting exploratory actions that lead to new experiences. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The problem generator component in a learning agent is responsible for suggesting exploratory actions that lead to new experiences. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "العبارة صحيحة (True). A factored state representation splits each state into a fixed set of variables or attributes, each of which can hold a value. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 2: Intelligent Agents وفق مرجع AIMA.",
    "explanationEn": "This statement is True. A factored state representation splits each state into a fixed set of variables or attributes, each of which can hold a value. - This accurately reflects the core principle defined in AIMA (Chapter 2: Intelligent Agents)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Problem-solving agent'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Problem-solving agent'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Goal formulation'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Goal formulation'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Goal formulation -> Problem formulation -> Search -> Execution'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Goal formulation -> Problem formulation -> Search -> Execution'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Five components'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Five components'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Heuristic decay rate'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Heuristic decay rate'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'The state that results from executing action a in state s'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'The state that results from executing action a in state s'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'a belongs to the set ACTIONS(s)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'a belongs to the set ACTIONS(s)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A path leading from the initial state to any valid goal state'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'A path leading from the initial state to any valid goal state'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'The sum of the individual step costs along the path'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'The sum of the individual step costs along the path'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Abstraction'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Abstraction'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Is easier than solving the original unabstracted problem'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Is easier than solving the original unabstracted problem'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A solution path that has the lowest path cost among all possible solutions'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'A solution path that has the lowest path cost among all possible solutions'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To provide concise, exact problem descriptions to compare algorithm performance'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'To provide concise, exact problem descriptions to compare algorithm performance'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): '24 states'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: '24 states'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Moving the blank space Left, Right, Up, or Down'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Moving the blank space Left, Right, Up, or Down'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Exactly one-half (50%)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Exactly one-half (50%)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Square root, floor, and factorial'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Square root, floor, and factorial'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Push scattered boxes to designated storage locations'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Push scattered boxes to designated storage locations'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Touring problem where every city must be visited'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Touring problem where every city must be visited'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Cell layout and channel routing'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Cell layout and channel routing'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The search space has one continuous dimension for each joint angle'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The search space has one continuous dimension for each joint angle'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Protein design'. البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية كالبحث بالعرض.",
    "explanationEn": "The correct answer is A: 'Protein design'. Iterative Deepening Search (IDS) combines the minimal linear memory of DFS with the completeness and optimality of BFS."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The state space describes physical configurations of the world, while the search tree describes search paths between states'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The state space describes physical configurations of the world, while the search tree describes search paths between states'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Four components'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Four components'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'STATE, PARENT, ACTION, PATH-COST'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'STATE, PARENT, ACTION, PATH-COST'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'It allows the algorithm to trace backward from the goal node to recover the complete solution path'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'It allows the algorithm to trace backward from the goal node to recover the complete solution path'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Frontier (or open list)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Frontier (or open list)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'POP(frontier)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'POP(frontier)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The interior (fully expanded states) and the exterior (unreached states)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The interior (fully expanded states) and the exterior (unreached states)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Cycle (or loopy path)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Cycle (or loopy path)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Space Complexity'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Space Complexity'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Find a solution whenever one exists, and correctly report failure when there is none'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Find a solution whenever one exists, and correctly report failure when there is none'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Always finds a solution path with the lowest path cost among all possible solutions'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Always finds a solution path with the lowest path cost among all possible solutions'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The maximum branching factor of the search tree'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The maximum branching factor of the search tree'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The depth of the shallowest optimal solution'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The depth of the shallowest optimal solution'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The maximum length of any path in the state space (which may be infinite)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The maximum length of any path in the state space (which may be infinite)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Diameter'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Diameter'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Expand the shallowest unexpanded node in the frontier'. البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت التكاليف، وتعقيده المكاني O(b^d).",
    "explanationEn": "The correct answer is B: 'Expand the shallowest unexpanded node in the frontier'. Breadth-First Search (BFS) explores level by level using a FIFO queue. It is complete and optimal for uniform step costs, with O(b^d) memory."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'FIFO queue'. البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت التكاليف، وتعقيده المكاني O(b^d).",
    "explanationEn": "The correct answer is B: 'FIFO queue'. Breadth-First Search (BFS) explores level by level using a FIFO queue. It is complete and optimal for uniform step costs, with O(b^d) memory."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because any child generated at depth d is guaranteed to be among the shallowest paths to that state'. البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت التكاليف، وتعقيده المكاني O(b^d).",
    "explanationEn": "The correct answer is B: 'Because any child generated at depth d is guaranteed to be among the shallowest paths to that state'. Breadth-First Search (BFS) explores level by level using a FIFO queue. It is complete and optimal for uniform step costs, with O(b^d) memory."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'O(b^d)'. البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت التكاليف، وتعقيده المكاني O(b^d).",
    "explanationEn": "The correct answer is B: 'O(b^d)'. Breadth-First Search (BFS) explores level by level using a FIFO queue. It is complete and optimal for uniform step costs, with O(b^d) memory."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'All generated nodes at level d must remain stored in memory, consuming gigabytes or terabytes rapidly'. البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت التكاليف، وتعقيده المكاني O(b^d).",
    "explanationEn": "The correct answer is B: 'All generated nodes at level d must remain stored in memory, consuming gigabytes or terabytes rapidly'. Breadth-First Search (BFS) explores level by level using a FIFO queue. It is complete and optimal for uniform step costs, with O(b^d) memory."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Uniform-Cost Search (UCS)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Uniform-Cost Search (UCS)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The node with the lowest path cost g(n) from the start state'. بحث التكلفة الموحدة (UCS) يختار العقدة ذات أقل تكلفة مسار تراكمية g(n) باستخدام طابور أولويات، ويضمن إيجاد الحل الأمثل للتكاليف الموجبة.",
    "explanationEn": "The correct answer is B: 'The node with the lowest path cost g(n) from the start state'. Uniform-Cost Search (UCS) expands nodes in order of cumulative path cost g(n) via priority queue, guaranteeing optimal cost solutions."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because a cheaper path to the goal might be discovered later before the goal is expanded'. بحث التكلفة الموحدة (UCS) يختار العقدة ذات أقل تكلفة مسار تراكمية g(n) باستخدام طابور أولويات، ويضمن إيجاد الحل الأمثل للتكاليف الموجبة.",
    "explanationEn": "The correct answer is B: 'Because a cheaper path to the goal might be discovered later before the goal is expanded'. Uniform-Cost Search (UCS) expands nodes in order of cumulative path cost g(n) via priority queue, guaranteeing optimal cost solutions."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Expand the deepest unexpanded node in the frontier'. البحث بالعمق أولاً (DFS) يستكشف المسار لأعمق نقطة باستخدام مكدس LIFO. ميزته الكبرى هي استهلاك الذاكرة الخطي O(bm).",
    "explanationEn": "The correct answer is B: 'Expand the deepest unexpanded node in the frontier'. Depth-First Search (DFS) uses a LIFO stack to explore along deep branches. Its primary strength is modest linear space complexity O(bm)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'LIFO stack'. البحث بالعمق أولاً (DFS) يستكشف المسار لأعمق نقطة باستخدام مكدس LIFO. ميزته الكبرى هي استهلاك الذاكرة الخطي O(bm).",
    "explanationEn": "The correct answer is A: 'LIFO stack'. Depth-First Search (DFS) uses a LIFO stack to explore along deep branches. Its primary strength is modest linear space complexity O(bm)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It has a modest linear space complexity of O(bm)'. البحث بالعرض أولاً (BFS) يتوسع في العقد الأقل عمقاً أولاً باستخدام طابور FIFO. وهو كامل ومثالي إذا تساوت التكاليف، وتعقيده المكاني O(b^d).",
    "explanationEn": "The correct answer is B: 'It has a modest linear space complexity of O(bm)'. Breadth-First Search (BFS) explores level by level using a FIFO queue. It is complete and optimal for uniform step costs, with O(b^d) memory."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because it can follow an infinite branch or cycle forever without ever exploring other alternatives'. البحث بالعمق أولاً (DFS) يستكشف المسار لأعمق نقطة باستخدام مكدس LIFO. ميزته الكبرى هي استهلاك الذاكرة الخطي O(bm).",
    "explanationEn": "The correct answer is B: 'Because it can follow an infinite branch or cycle forever without ever exploring other alternatives'. Depth-First Search (DFS) uses a LIFO stack to explore along deep branches. Its primary strength is modest linear space complexity O(bm)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Exactly one successor'. البحث بالعمق أولاً (DFS) يستكشف المسار لأعمق نقطة باستخدام مكدس LIFO. ميزته الكبرى هي استهلاك الذاكرة الخطي O(bm).",
    "explanationEn": "The correct answer is A: 'Exactly one successor'. Depth-First Search (DFS) uses a LIFO stack to explore along deep branches. Its primary strength is modest linear space complexity O(bm)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Nodes at depth l are treated as if they have no successors'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Nodes at depth l are treated as if they have no successors'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Solution node, Failure, or Cutoff'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Solution node, Failure, or Cutoff'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It systematically tries increasing depth limits: first 0, then 1, then 2, and so on'. البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية كالبحث بالعرض.",
    "explanationEn": "The correct answer is B: 'It systematically tries increasing depth limits: first 0, then 1, then 2, and so on'. Iterative Deepening Search (IDS) combines the minimal linear memory of DFS with the completeness and optimality of BFS."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'O(bd)'. البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية كالبحث بالعرض.",
    "explanationEn": "The correct answer is B: 'O(bd)'. Iterative Deepening Search (IDS) combines the minimal linear memory of DFS with the completeness and optimality of BFS."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because the vast majority of nodes in an exponential tree reside in the bottom level d'. البحث التكراري المعمق (IDS) يجمع بين انخفاض استهلاك الذاكرة كالبحث بالعمق O(bd) وميزة الاكتمال والأمثلية كالبحث بالعرض.",
    "explanationEn": "The correct answer is B: 'Because the vast majority of nodes in an exponential tree reside in the bottom level d'. Iterative Deepening Search (IDS) combines the minimal linear memory of DFS with the completeness and optimality of BFS."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It simultaneously searches forward from the initial state and backward from the goal state'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'It simultaneously searches forward from the initial state and backward from the goal state'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The estimated cost of the cheapest path from the state at node n to a goal state'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The estimated cost of the cheapest path from the state at node n to a goal state'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'h(n) = 0'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'h(n) = 0'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Straight-line distance (h_SLD)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Straight-line distance (h_SLD)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The node that has the lowest heuristic value h(n)'. البحث الطماع (Greedy Best-First) يعتمد فقط على قيمة الهيورستك f(n) = h(n)، وهو غير مثالي لأنه قد يختار مسارات مضللة محلياً.",
    "explanationEn": "The correct answer is B: 'The node that has the lowest heuristic value h(n)'. Greedy Best-First Search uses f(n) = h(n) to expand the node nearest to the goal, but is not cost-optimal."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'It greedily chooses locally promising steps (like Fagaras) that lead to longer overall routes (450 miles vs 418 miles)'. البحث الطماع (Greedy Best-First) يعتمد فقط على قيمة الهيورستك f(n) = h(n)، وهو غير مثالي لأنه قد يختار مسارات مضللة محلياً.",
    "explanationEn": "The correct answer is B: 'It greedily chooses locally promising steps (like Fagaras) that lead to longer overall routes (450 miles vs 418 miles)'. Greedy Best-First Search uses f(n) = h(n) to expand the node nearest to the goal, but is not cost-optimal."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'f(n) = g(n) + h(n)'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is B: 'f(n) = g(n) + h(n)'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The estimated cost of the best path that continues from the start node through node n to a goal'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is B: 'The estimated cost of the best path that continues from the start node through node n to a goal'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'h(n) never overestimates the true cost to reach a goal, i.e., h(n) <= h*(n)'. الهيورستك المقبول (Admissible) هو الذي لا يبالغ في تقدير التكلفة الحقيقية للهدف h(n) <= h*(n)، وهو شرط أساسي لأمثلية A*.",
    "explanationEn": "The correct answer is B: 'h(n) never overestimates the true cost to reach a goal, i.e., h(n) <= h*(n)'. An admissible heuristic never overestimates the true remaining cost to the goal: h(n) <= h*(n)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Optimistic'. الهيورستك المقبول (Admissible) هو الذي لا يبالغ في تقدير التكلفة الحقيقية للهدف h(n) <= h*(n)، وهو شرط أساسي لأمثلية A*.",
    "explanationEn": "The correct answer is B: 'Optimistic'. An admissible heuristic never overestimates the true remaining cost to the goal: h(n) <= h*(n)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The heuristic function h(n) is admissible'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is A: 'The heuristic function h(n) is admissible'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'h(n) <= c(n, a, n') + h(n')'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'h(n) <= c(n, a, n') + h(n')'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Triangle inequality'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Triangle inequality'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Every consistent heuristic is admissible, but not every admissible heuristic is consistent'. الهيورستك المقبول (Admissible) هو الذي لا يبالغ في تقدير التكلفة الحقيقية للهدف h(n) <= h*(n)، وهو شرط أساسي لأمثلية A*.",
    "explanationEn": "The correct answer is A: 'Every consistent heuristic is admissible, but not every admissible heuristic is consistent'. An admissible heuristic never overestimates the true remaining cost to the goal: h(n) <= h*(n)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'All reachable nodes with f(n) < C*'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is B: 'All reachable nodes with f(n) < C*'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'No other optimal search algorithm using the same heuristic can expand fewer nodes (up to tie- breaking)'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is B: 'No other optimal search algorithm using the same heuristic can expand fewer nodes (up to tie- breaking)'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Number of misplaced tiles (excluding the blank)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Number of misplaced tiles (excluding the blank)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The sum of horizontal and vertical grid steps each tile must take to reach its goal square'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The sum of horizontal and vertical grid steps each tile must take to reach its goal square'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'h2 dominates h1'. الهيورستك المقبول (Admissible) هو الذي لا يبالغ في تقدير التكلفة الحقيقية للهدف h(n) <= h*(n)، وهو شرط أساسي لأمثلية A*.",
    "explanationEn": "The correct answer is B: 'h2 dominates h1'. An admissible heuristic never overestimates the true remaining cost to the goal: h(n) <= h*(n)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A* using h2 will never expand more nodes than A* using h1 (except for tie-breaking)'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is B: 'A* using h2 will never expand more nodes than A* using h1 (except for tie-breaking)'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Relaxed problem'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Relaxed problem'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because removing action constraints adds edges to the state graph, creating shortcuts that can never increase the optimal cost'. الهيورستك المقبول (Admissible) هو الذي لا يبالغ في تقدير التكلفة الحقيقية للهدف h(n) <= h*(n)، وهو شرط أساسي لأمثلية A*.",
    "explanationEn": "The correct answer is B: 'Because removing action constraints adds edges to the state graph, creating shortcuts that can never increase the optimal cost'. An admissible heuristic never overestimates the true remaining cost to the goal: h(n) <= h*(n)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'h(n) = max{h1(n), h2(n), ..., hk(n)}'. الهيورستك المقبول (Admissible) هو الذي لا يبالغ في تقدير التكلفة الحقيقية للهدف h(n) <= h*(n)، وهو شرط أساسي لأمثلية A*.",
    "explanationEn": "The correct answer is B: 'h(n) = max{h1(n), h2(n), ..., hk(n)}'. An admissible heuristic never overestimates the true remaining cost to the goal: h(n) <= h*(n)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Pattern database'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 3: Solving Problems by Searching ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Pattern database'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To trade off solution optimality for a significant reduction in the number of expanded nodes'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is B: 'To trade off solution optimality for a significant reduction in the number of expanded nodes'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The worst leaf node, which has the highest f-value'. خوارزمية A* تجمع بين التكلفة السابقة والتوقع المستقبلي f(n) = g(n) + h(n). تضمن الحل الأمثل إذا كان الهيورستك مقبولاً (Admissible) أو متسقاً (Consistent).",
    "explanationEn": "The correct answer is B: 'The worst leaf node, which has the highest f-value'. A* search evaluates f(n) = g(n) + h(n). It is provably cost-optimal when h(n) is admissible (tree search) or consistent (graph search)."
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
    "explanationAr": "العبارة صحيحة (True). A search problem is formally defined by five components: initial state, actions, transition model, goal states, and action cost function. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. A search problem is formally defined by five components: initial state, actions, transition model, goal states, and action cost function. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). A single physical state of the environment can be represented by multiple distinct nodes in a search tree if there are redundant paths to that state. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. A single physical state of the environment can be represented by multiple distinct nodes in a search tree if there are redundant paths to that state. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Each node in a search tree stores a pointer to its parent node, which allows the solution path of actions to be reconstructed once a goal is reached. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Each node in a search tree stores a pointer to its parent node, which allows the solution path of actions to be reconstructed once a goal is reached. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Graph search algorithms use a reached table (or closed list) to remember previously explored states and prevent visiting nodes multiple times. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Graph search algorithms use a reached table (or closed list) to remember previously explored states and prevent visiting nodes multiple times. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Breadth-First Search is complete on infinite state spaces, provided that the branching factor b is finite. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Breadth-First Search is complete on infinite state spaces, provided that the branching factor b is finite. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Both the time complexity and space complexity of Breadth-First Search are exponential in the solution depth d, expressed as O(b^d). - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Both the time complexity and space complexity of Breadth-First Search are exponential in the solution depth d, expressed as O(b^d). - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Uniform-Cost Search expands nodes in increasing order of their path cost g(n) from the initial state. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Uniform-Cost Search expands nodes in increasing order of their path cost g(n) from the initial state. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Tree-like Depth-First Search requires only linear space complexity O(bm), where b is branching factor and m is maximum depth. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Tree-like Depth-First Search requires only linear space complexity O(bm), where b is branching factor and m is maximum depth. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Backtracking search reduces memory requirements even further than standard DFS to just one state description and a path of O(m) actions. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Backtracking search reduces memory requirements even further than standard DFS to just one state description and a path of O(m) actions. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Iterative Deepening Search combines the linear memory benefits of DFS with the completeness and optimality of BFS for unit action costs. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Iterative Deepening Search combines the linear memory benefits of DFS with the completeness and optimality of BFS for unit action costs. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Bidirectional search maintains two frontiers and two reached tables, searching simultaneously from start and goal. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Bidirectional search maintains two frontiers and two reached tables, searching simultaneously from start and goal. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Greedy Best-First Search expands the node with the minimum value of evaluation function f(n) = h(n). - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Greedy Best-First Search expands the node with the minimum value of evaluation function f(n) = h(n). - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). The evaluation function for A* search is f(n) = g(n) + h(n), where g(n) is path cost to n and h(n) is estimated cost from n to goal. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The evaluation function for A* search is f(n) = g(n) + h(n), where g(n) is path cost to n and h(n) is estimated cost from n to goal. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). الهيورستك المتسق (Consistent) يحقق متباينة المثلث: h(n) <= c(n, a, n') + h(n').",
    "explanationEn": "True. A consistent heuristic satisfies the triangle inequality: h(n) <= c(n, a, n') + h(n')."
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
    "explanationAr": "العبارة صحيحة (True). الهيورستك المتسق (Consistent) يحقق متباينة المثلث: h(n) <= c(n, a, n') + h(n').",
    "explanationEn": "True. A consistent heuristic satisfies the triangle inequality: h(n) <= c(n, a, n') + h(n')."
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
    "explanationAr": "العبارة صحيحة (True). A* search expands no nodes with an evaluation cost strictly greater than the optimal solution cost C*. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. A* search expands no nodes with an evaluation cost strictly greater than the optimal solution cost C*. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). The Manhattan distance heuristic for the 8-puzzle is admissible because any single move can at most decrease one tile's distance by 1 step. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The Manhattan distance heuristic for the 8-puzzle is admissible because any single move can at most decrease one tile's distance by 1 step. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). If heuristic h2 dominates h1, then A* search using h2 will never expand more nodes than A* search using h1 (except for tie-breaking). - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. If heuristic h2 dominates h1, then A* search using h2 will never expand more nodes than A* search using h1 (except for tie-breaking). - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). Given two admissible heuristics h1 and h2, the composite function h(n) = max(h1(n), h2(n)) is also admissible and dominates both h1 and h2. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Given two admissible heuristics h1 and h2, the composite function h(n) = max(h1(n), h2(n)) is also admissible and dominates both h1 and h2. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "العبارة صحيحة (True). The cost of an optimal solution to a relaxed problem provides an admissible heuristic for the original unrelaxed problem. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 3: Solving Problems by Searching وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The cost of an optimal solution to a relaxed problem provides an admissible heuristic for the original unrelaxed problem. - This accurately reflects the core principle defined in AIMA (Chapter 3: Solving Problems by Searching)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Thought processes/reasoning vs Behavior, and Human performance vs Ideal rationality'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Thought processes/reasoning vs Behavior, and Human performance vs Ideal rationality'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The Imitation Game (Turing Test)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The Imitation Game (Turing Test)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Physical Robotic Manipulation'. اختبار تورينج (1950) يركز على بُعد 'التصرف كالبشر' (Acting Humanly) من خلال حوار نصي يقيس قدرة الحاسوب على محاكاة التفكير البشري.",
    "explanationEn": "The correct answer is C: 'Physical Robotic Manipulation'. The Turing Test tests whether a computer's conversational performance can be distinguished from a human's ('Acting Humanly')."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Computer Vision and Robotics'. اختبار تورينج (1950) يركز على بُعد 'التصرف كالبشر' (Acting Humanly) من خلال حوار نصي يقيس قدرة الحاسوب على محاكاة التفكير البشري.",
    "explanationEn": "The correct answer is B: 'Computer Vision and Robotics'. The Turing Test tests whether a computer's conversational performance can be distinguished from a human's ('Acting Humanly')."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Cognitive Science'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Cognitive Science'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (D): 'Measuring processor clock speeds and memory voltage'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is D: 'Measuring processor clock speeds and memory voltage'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Aristotle'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Aristotle'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Acting Rationally (The rational agent approach)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Acting Rationally (The rational agent approach)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Optimize an objective or utility function specified by its human designers'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Optimize an objective or utility function specified by its human designers'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): '5 minutes'. اختبار تورينج (1950) يركز على بُعد 'التصرف كالبشر' (Acting Humanly) من خلال حوار نصي يقيس قدرة الحاسوب على محاكاة التفكير البشري.",
    "explanationEn": "The correct answer is A: '5 minutes'. The Turing Test tests whether a computer's conversational performance can be distinguished from a human's ('Acting Humanly')."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'AI researchers focus on studying the underlying principles of intelligence and solving real problems, analogous to how aeronautical engineering focuses on aerodynamics rather than copying birds'. اختبار تورينج (1950) يركز على بُعد 'التصرف كالبشر' (Acting Humanly) من خلال حوار نصي يقيس قدرة الحاسوب على محاكاة التفكير البشري.",
    "explanationEn": "The correct answer is B: 'AI researchers focus on studying the underlying principles of intelligence and solving real problems, analogous to how aeronautical engineering focuses on aerodynamics rather than copying birds'. The Turing Test tests whether a computer's conversational performance can be distinguished from a human's ('Acting Humanly')."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Automated Reasoning'. اختبار تورينج (1950) يركز على بُعد 'التصرف كالبشر' (Acting Humanly) من خلال حوار نصي يقيس قدرة الحاسوب على محاكاة التفكير البشري.",
    "explanationEn": "The correct answer is B: 'Automated Reasoning'. The Turing Test tests whether a computer's conversational performance can be distinguished from a human's ('Acting Humanly')."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'To adapt to new circumstances and detect and extrapolate patterns'. اختبار تورينج (1950) يركز على بُعد 'التصرف كالبشر' (Acting Humanly) من خلال حوار نصي يقيس قدرة الحاسوب على محاكاة التفكير البشري.",
    "explanationEn": "The correct answer is B: 'To adapt to new circumstances and detect and extrapolate patterns'. The Turing Test tests whether a computer's conversational performance can be distinguished from a human's ('Acting Humanly')."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Does the 'right thing' based on what it knows and its performance measure'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Does the 'right thing' based on what it knows and its performance measure'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Dualism'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Dualism'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Materialism (or Physicalism)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Materialism (or Physicalism)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Empiricism'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Empiricism'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'How general rules and future predictions can be justified on the basis of a finite number of past observations'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'How general rules and future predictions can be justified on the basis of a finite number of past observations'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Logical theories connected to observable sensory observations'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Logical theories connected to observable sensory observations'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'George Boole'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'George Boole'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'First-order predicate calculus'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'First-order predicate calculus'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Halting Problem'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Halting Problem'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'Exponentially with the size of the problem instances'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'Exponentially with the size of the problem instances'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Thomas Bayes'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Thomas Bayes'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Gambling odds in games of chance'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Gambling odds in games of chance'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Any algorithmic computation that can be carried out by any physical machine can be simulated by a Turing machine'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Any algorithmic computation that can be carried out by any physical machine can be simulated by a Turing machine'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'John von Neumann and Oskar Morgenstern'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'John von Neumann and Oskar Morgenstern'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Probability Theory and Utility Theory'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Probability Theory and Utility Theory'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Satisficing (making decisions that are 'good enough')'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Satisficing (making decisions that are 'good enough')'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Markov Decision Processes (MDPs)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Markov Decision Processes (MDPs)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Neuron'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Neuron'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Objective measures of external stimuli and observable behavioral responses'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Objective measures of external stimuli and observable behavioral responses'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Kenneth Craik'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Kenneth Craik'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'MIT Symposium on Information Theory'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'MIT Symposium on Information Theory'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): '7 plus or minus 2 chunks'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: '7 plus or minus 2 chunks'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Charles Babbage'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Charles Babbage'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The Bombe'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The Bombe'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'A water clock with a float regulator'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'A water clock with a float regulator'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Cybernetics'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Cybernetics'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Noam Chomsky'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Noam Chomsky'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Computational Linguistics (Natural Language Processing)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Computational Linguistics (Natural Language Processing)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Warren McCulloch and Walter Pitts'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Warren McCulloch and Walter Pitts'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'SNARC'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'SNARC'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Dartmouth College'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Dartmouth College'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Checkers'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Checkers'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'The Lighthill Report'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'The Lighthill Report'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (C): 'XOR (Exclusive-OR)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is C: 'XOR (Exclusive-OR)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'MYCIN'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'MYCIN'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Configure customer computer orders for VAX computer systems'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Configure customer computer orders for VAX computer systems'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Backpropagation'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Backpropagation'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Bayesian Networks'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Bayesian Networks'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Garry Kasparov'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Garry Kasparov'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'ImageNet'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'ImageNet'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (A): 'Monte Carlo Tree Search (MCTS)'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is A: 'Monte Carlo Tree Search (MCTS)'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "الإجابة الصحيحة هي (B): 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions'. هذا الخيار يتطابق مباشرة مع المفاهيم المقررة في Chapter 1: Introduction to AI ويوضح الإجابة الصحيحة للسؤال.",
    "explanationEn": "The correct answer is B: 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions'. This option accurately satisfies the question according to the foundational definitions in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). اختبار تورينج القياسي يتجنب التفاعل الجسدي ويركز على محادثة نصية لاختبار الذكاء والقدرات الإدراكية دون المظهر الخارجي.",
    "explanationEn": "True. The Turing Test deliberately avoids physical embodiment to focus purely on intellectual capabilities via text communication."
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
    "explanationAr": "العبارة صحيحة (True). اختبار تورينج القياسي يتجنب التفاعل الجسدي ويركز على محادثة نصية لاختبار الذكاء والقدرات الإدراكية دون المظهر الخارجي.",
    "explanationEn": "True. The Turing Test deliberately avoids physical embodiment to focus purely on intellectual capabilities via text communication."
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
    "explanationAr": "العبارة صحيحة (True). Cognitive Science combines computer AI models with experimental psychology techniques to construct testable theories of the human mind. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Cognitive Science combines computer AI models with experimental psychology techniques to construct testable theories of the human mind. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). Aristotle's syllogisms were designed to provide patterns for argument structures that always yielded correct conclusions whenever the premises were true. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Aristotle's syllogisms were designed to provide patterns for argument structures that always yielded correct conclusions whenever the premises were true. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). A rational agent is one that acts so as to achieve the best outcome or, when there is uncertainty, the best expected outcome. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. A rational agent is one that acts so as to achieve the best outcome or, when there is uncertainty, the best expected outcome. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). Empiricism holds that knowledge is formed primarily through sensory perception and experiential observation rather than innate mental ideas. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Empiricism holds that knowledge is formed primarily through sensory perception and experiential observation rather than innate mental ideas. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). Alan Turing proved that there is no general algorithm capable of deciding whether an arbitrary computer program will eventually halt. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Alan Turing proved that there is no general algorithm capable of deciding whether an arbitrary computer program will eventually halt. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). If a problem is NP-complete, it is widely believed that no algorithm exists that can solve all problem instances in polynomial time. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. If a problem is NP-complete, it is widely believed that no algorithm exists that can solve all problem instances in polynomial time. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). Thomas Bayes introduced the mathematical rule that enables prior probabilities to be updated in the presence of new sensory evidence. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Thomas Bayes introduced the mathematical rule that enables prior probabilities to be updated in the presence of new sensory evidence. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). الهيورستك المتسق (Consistent) يحقق متباينة المثلث: h(n) <= c(n, a, n') + h(n').",
    "explanationEn": "True. A consistent heuristic satisfies the triangle inequality: h(n) <= c(n, a, n') + h(n')."
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
    "explanationAr": "العبارة صحيحة (True). The human brain contains approximately 10^11 neurons, with each neuron connected to thousands of other neurons via synapses. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The human brain contains approximately 10^11 neurons, with each neuron connected to thousands of other neurons via synapses. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). Norbert Wiener's work on Cybernetics defined self-regulation in machines through feedback loops designed to minimize error between current state and goal state. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Norbert Wiener's work on Cybernetics defined self-regulation in machines through feedback loops designed to minimize error between current state and goal state. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). The 1943 McCulloch-Pitts neural model demonstrated that suitable networks of interconnected artificial neurons could compute any computable logical function. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The 1943 McCulloch-Pitts neural model demonstrated that suitable networks of interconnected artificial neurons could compute any computable logical function. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). The term 'Artificial Intelligence' was officially coined by John McCarthy in the 1955 proposal for the 1956 Dartmouth Summer Research Project. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The term 'Artificial Intelligence' was officially coined by John McCarthy in the 1955 proposal for the 1956 Dartmouth Summer Research Project. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). Newell and Simon's Logic Theorist program proved mathematical theorems so elegantly that it found a shorter proof for one theorem than Russell and Whitehead had originally published. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Newell and Simon's Logic Theorist program proved mathematical theorems so elegantly that it found a shorter proof for one theorem than Russell and Whitehead had originally published. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). The early failure of literal machine translation projects (such as translating English to Russian) contributed significantly to the first AI Winter. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The early failure of literal machine translation projects (such as translating English to Russian) contributed significantly to the first AI Winter. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). The development of expert systems in the 1970s marked a major paradigm shift in AI from general-purpose search algorithms to domain-specific knowledge bases. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The development of expert systems in the 1970s marked a major paradigm shift in AI from general-purpose search algorithms to domain-specific knowledge bases. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). The popularization of the backpropagation algorithm in 1986 solved the problem of training multi-layer neural networks. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. The popularization of the backpropagation algorithm in 1986 solved the problem of training multi-layer neural networks. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
    "explanationAr": "العبارة صحيحة (True). Bayesian Networks provide a mathematically principled way to represent conditional dependencies and reason probabilistically under uncertainty. - هذا يمثل حقيقة علمية وقاعدة أساسية مقررة في Chapter 1: Introduction to AI وفق مرجع AIMA.",
    "explanationEn": "This statement is True. Bayesian Networks provide a mathematically principled way to represent conditional dependencies and reason probabilistically under uncertainty. - This accurately reflects the core principle defined in AIMA (Chapter 1: Introduction to AI)."
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
