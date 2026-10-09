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
    "explanationAr": "🎯 سبب اختيار (B - Agent):\nيُعرَّف الوكيل (Agent) في الذكاء الاصطناعي بأنه أي كيان يدرك بيئته المحيطة عبر أجهزة الاستشعار (Sensors) ويؤثر فيها ويتصرف عبر المشغلات (Actuators).\n\n💡 مثال وتطبيق واقعي:\nسيارة تسلا ذاتية القيادة هي وكيل (Agent)؛ حساساتها هي الكاميرات والرادار لاكتشاف المشاة والسيارات، ومشغلاتها هي المقود والفرامل والمحرك للتحكم في الحركة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Controller)، (C - Model)، (D - Program)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Agent') is the correct choice:\nAn Agent is fundamentally defined in AIMA as anything that perceives its environment through sensors and acts upon that environment through actuators.\n\n💡 Real-World Example & Application:\nA Tesla self-driving car is an Agent; its sensors are cameras/radar detecting pedestrians and traffic, and its actuators are the steering, brakes, and motor.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Controller), (C - Model), (D - Program)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Percept):\nالمُدرَك (Percept) يشير تحديداً إلى المدخلات الحسية للوكيل في لحظة زمنية معينة، بينما تمثل سلسلة المُدركات (Percept Sequence) التاريخ التراكمي الكامل لتلك المدخلات.\n\n💡 مثال وتطبيق واقعي:\nالتقاط كاميرا السيارة لصورة إشارة مرور حمراء في جزء من الثانية هو 'Percept' (مُدرَك لحظي فردي).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Sequence)، (B - Action)، (D - State)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Percept') is the correct choice:\nA Percept refers specifically to the agent's sensory inputs at any given instant of time, whereas the percept sequence is the complete history of all percepts.\n\n💡 Real-World Example & Application:\nA car camera capturing a red traffic light at an exact millisecond is a single 'Percept'.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Sequence), (B - Action), (D - State)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Percept sequence):\nسلسلة المُدركات (Percept Sequence) تمثل السجل التاريخي التراكمي الكامل لكل ما التقطه الوكيل بحواسه منذ بدء تشغيله وحتى اللحظة الحالية.\n\n💡 مثال وتطبيق واقعي:\nالسجل الكامل لكل قراءات الحساسات وصور الكاميرات التي التقطتها السيارة منذ بدء الرحلة وحتى الآن هو سلسلة المُدركات (Percept Sequence).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - State space)، (C - Action history)، (D - Knowledge base)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Percept sequence') is the correct choice:\nThe Percept Sequence is the complete chronological history of everything the agent has ever perceived during its entire operating lifetime.\n\n💡 Real-World Example & Application:\nThe complete video stream and sensor log recorded by an autonomous vehicle from trip start to the present is the Percept Sequence.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - State space), (C - Action history), (D - Knowledge base)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Agent function):\nدالة الوكيل (Agent Function) هي توصيف رياضي مجرد يربط أي سلسلة مُدركات معطاة بالفعل الذي يجب على الوكيل اتخاذه [f: P* -> A].\n\n💡 مثال وتطبيق واقعي:\nبرنامج الشطرنج الذي ينظر في سجل نقلات المباراة ويحدد الحركة التالية الأفضل يمثل دالة الوكيل (Agent Function).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Transition model)، (B - Sensor function)، (D - Utility function)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Agent function') is the correct choice:\nThe Agent Function is the abstract mathematical mapping from every possible percept sequence to an action [f: P* -> A].\n\n💡 Real-World Example & Application:\nA chess program that takes the historical board moves and outputs the best next move implements an Agent Function.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Transition model), (B - Sensor function), (D - Utility function)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - f: P* -> A):\n🎯 سبب اختيار (B - f: P* -> A):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث دالة الوكيل (Agent Function) هي دالة رياضية مجردة تربط سلاسل المُدركات بالأفعال المناسبة (f: P* -> A). 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - f: P -> A)، (C - f: A -> P*)، (D - f: P x A -> P)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n💡 مثال واقعي: دالة الوكيل تربط التاريخ الكامل للمُدركات (P*) بالفعل التالي المناسب (A).\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - f: P -> A)، (C - f: A -> P*)، (D - f: P x A -> P)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nدالة الوكيل f: P* -> A تستقبل أي تسلسل من المشاهدات السابقة (P*) وتختار فعلاً واحداً محدداً للتنفيذ (A).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - f: P -> A)، (C - f: A -> P*)، (D - f: P x A -> P)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'f: P* -> A') is the correct choice:\n🎯 Why (B - 'f: P* -> A') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The Agent Function is the abstract mathematical mapping from percept histories to actions: f: P* -> A. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - f: P -> A), (C - f: A -> P*), (D - f: P x A -> P)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n💡 Real-world Example: The agent function maps any history of percepts (P*) to the appropriate action (A).\n\n❌ Why other options are incorrect:\nThe alternative options [(A - f: P -> A), (C - f: A -> P*), (D - f: P x A -> P)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nThe agent function f: P* -> A maps any historical percept sequence (P*) to a single actionable decision (A).\n\n❌ Why other options are incorrect:\nThe alternative options [(A - f: P -> A), (C - f: A -> P*), (D - f: P x A -> P)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The computing hardware, sensors, and actuators):\n🎯 سبب اختيار (B - The computing hardware, sensors, and actuators):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث بنية الوكيل (Architecture) توفر العتاد الحاسوبي وأجهزة الاستشعار والمشغلات التي يعمل عليها برنامج الوكيل (Program). 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - The condition-action rules)، (C - The heuristic evaluation function)، (D - The objective performance measure)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n💡 مثال واقعي: الهيكل الفيزيائي لطائرة الدرون (المحركات، المراوح، الكاميرات، والمعالج المركزي) يمثل الـ Architecture التي يعمل عليها كود الملاحة.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - The condition-action rules)، (C - The heuristic evaluation function)، (D - The objective performance measure)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nالهيكل الفيزيائي لطائرة الدرون (المحركات، المراوح، الكاميرات، والمعالج المركزي) يمثل بنية الوكيل (Architecture) التي يعمل عليها كود الملاحة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The condition-action rules)، (C - The heuristic evaluation function)، (D - The objective performance measure)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The computing hardware, sensors, and actuators') is the correct choice:\n🎯 Why (B - 'The computing hardware, sensors, and actuators') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The architecture provides the computing platform, physical sensors, and actuators that run the agent program. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - The condition-action rules), (C - The heuristic evaluation function), (D - The objective performance measure)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n💡 Real-world Example: A drone's physical body, rotors, cameras, and onboard processor provide the Architecture executing the flight software.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The condition-action rules), (C - The heuristic evaluation function), (D - The objective performance measure)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nA drone's physical body, rotors, cameras, and onboard processor provide the Architecture executing the flight software.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The condition-action rules), (C - The heuristic evaluation function), (D - The objective performance measure)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The function is an abstract mathematical concept, while the program runs on physical hardware):\nدالة الوكيل هي توصيف رياضي مجرد، بينما برنامج الوكيل (Agent Program) هو الكود البرمجي الملموس الذي يُنفذ فعلياً على العتاد المادي (Architecture).\n\n💡 مثال وتطبيق واقعي:\nالمعادلة الرياضية المجردة هي دالة الوكيل، بينما الكود المكتوب بلغة البرمجة والمنفذ على المعالج هو برنامج الوكيل (Agent Program).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The function takes the current percept, while the program takes the percept history)، (C - The program is always table-driven, while the function is rule-based)، (D - There is no distinction; both terms refer to the same software code)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The function is an abstract mathematical concept, while the program runs on physical hardware') is the correct choice:\nThe agent function is an abstract mathematical concept, whereas the agent program is the concrete software implementation executing on physical hardware.\n\n💡 Real-World Example & Application:\nThe abstract mathematical formula is the agent function, while the concrete software code running on the processor is the agent program.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The function takes the current percept, while the program takes the percept history), (C - The program is always table-driven, while the function is rule-based), (D - There is no distinction; both terms refer to the same software code)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - The entire accumulated percept sequence):\n🎯 سبب اختيار (C - The entire accumulated percept sequence):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث وكلاء الجداول يعانون من النمو الأسي الهائل لحجم الجدول مع تزايد عدد الخطوات والمُدركات، مما يجعلهم غير قابلين للتطبيق في العالم الحقيقي. 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - The current percept only)، (B - The current state only)، (D - The next expected reward)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n💡 مثال واقعي: مكنسة رومبا الذكية يمكنها التحرك يميناً، يساراً، أو تشغيل محرك الشفط لكنس الغبار.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - The current percept only)، (B - The current state only)، (D - The next expected reward)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nمكنسة رومبا الذكية يمكنها التحرك يميناً، يساراً، أو تشغيل محرك الشفط لكنس الغبار (Suck).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The current percept only)، (B - The current state only)، (D - The next expected reward)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'The entire accumulated percept sequence') is the correct choice:\n🎯 Why (C - 'The entire accumulated percept sequence') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: Table-driven agents fail because the lookup table size grows exponentially with the percept space and lifetime. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - The current percept only), (B - The current state only), (D - The next expected reward)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n💡 Real-world Example: A Roomba vacuum can move Left, Right, or turn on its suction motor to Suck dirt.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The current percept only), (B - The current state only), (D - The next expected reward)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nA Roomba vacuum can move Left, Right, or turn on its suction motor to clean dirt.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The current percept only), (B - The current state only), (D - The next expected reward)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The table size grows exponentially with the agent's lifetime and percept set size):\n🎯 سبب اختيار (B - The table size grows exponentially with the agent's lifetime and percept set size):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث الإجابة الصحيحة هي (B): 'The table size grows exponentially with the agent's lifetime and percept set size'. وكلاء الجداول يعانون من النمو الأسي الهائل لحجم الجدول مع تزايد عدد الخطوات والمُدركات، مما يجعلهم غير قابلين للتطبيق في العالم الحقيقي. 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - It cannot implement deterministic agent functions)، (C - Table lookup requires complex recursive algorithms)، (D - Hardware architectures cannot execute lookup tables)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n💡 مثال واقعي: جدول ضخم يحتوي على رد فعل جاهز لكل احتمال، مثل دليل هاتف عملاق يحتوي على اسم كل شخص ورقمه.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - It cannot implement deterministic agent functions)، (C - Table lookup requires complex recursive algorithms)، (D - Hardware architectures cannot execute lookup tables)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nالوكيل المعتمد على جدول يشبه دليلاً هاتفياً عملاقاً يبحث عن رد الفعل المسجل مسبقاً لكل تسلسل مدخلات محتمل.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It cannot implement deterministic agent functions)، (C - Table lookup requires complex recursive algorithms)، (D - Hardware architectures cannot execute lookup tables)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The table size grows exponentially with the agent's lifetime and percept set size') is the correct choice:\n🎯 Why (B - 'The table size grows exponentially with the agent's lifetime and percept set size') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The correct answer is B: 'The table size grows exponentially with the agent's lifetime and percept set size'. Table-driven agents fail because the lookup table size grows exponentially with the percept space and lifetime. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - It cannot implement deterministic agent functions), (C - Table lookup requires complex recursive algorithms), (D - Hardware architectures cannot execute lookup tables)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n💡 Real-world Example: A massive lookup table storing pre-stored reactions for every possible input sequence, like an exhaustive phonebook.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It cannot implement deterministic agent functions), (C - Table lookup requires complex recursive algorithms), (D - Hardware architectures cannot execute lookup tables)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nA table-driven agent operates like an exhaustive phonebook, looking up pre-stored actions for every possible percept sequence.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It cannot implement deterministic agent functions), (C - Table lookup requires complex recursive algorithms), (D - Hardware architectures cannot execute lookup tables)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - 8 states):\nفي عالم المكنسة ذي الخليتين (A و B): هناك موقعان للوكيل وحالتان لكل خلية (نظيفة/متسخة) أي 2^2 = 4 حالات اتساخ، فيكون الإجمالي: 2 * 4 = 8 حالات فيزيائية.\n\n💡 مثال وتطبيق واقعي:\nفي غرفتين (A و B): الروبوت قد يكون في A أو B (احتمالان)، وكل غرفة إما نظيفة أو متسخة (2^2 = 4 احتمالات): 2 × 4 = 8 حالات ممكنة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - 4 states)، (C - 16 states)، (D - 2 states)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - '8 states') is the correct choice:\nWith 2 agent locations and 2 states (clean/dirty) per cell, there are 2 locations * 2^2 dirt configurations = 2 * 4 = 8 possible physical states.\n\n💡 Real-World Example & Application:\nFor 2 rooms: agent location (2) * dirt configurations (2^2 = 4) = 8 total physical world states.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - 4 states), (C - 16 states), (D - 2 states)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - n * 2^n):\nلأي عالم مكنسة به n خلية: يتواجد الوكيل في أي خلية من الـ n، وللخلايا 2^n تشكيلاً محتملاً للاتساخ، مما يعطي n * 2^n حالة فيزيائية ممكنة.\n\n💡 مثال وتطبيق واقعي:\nلكل غرفة من الـ n غرف حالتان (نظيفة/متسخة) أي 2^n تشكيلاً، وموقع المكنسة له n احتمال، فيكون المجموع: n × 2^n.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - 2^n)، (C - n^2)، (D - (n!)^2)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'n * 2^n') is the correct choice:\nFor n cells, the agent can occupy any of the n cells, and there are 2^n independent dirt states, yielding n * 2^n total physical states.\n\n💡 Real-World Example & Application:\nFor n rooms, there are 2^n dirt combinations and n possible agent positions, yielding n * 2^n physical states.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - 2^n), (C - n^2), (D - (n!)^2)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Controller):\nفي نظرية التحكم (Control Theory)، يُطلق مصطلح 'المُتحكم' (Controller) على النظام ذي الحلقة المغلقة الذي يستشعر المخرجات ويصدر إشارات للتحكم في البيئة.\n\n💡 مثال وتطبيق واقعي:\nمنظم حرارة المكيف (Thermostat) الذي يشغل التبريد تلقائياً عند ارتفاع الحرارة هو متحكم (Controller).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Transducer)، (C - Softbot)، (D - Sensor array)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Controller') is the correct choice:\nIn control theory, a closed-loop system that senses environment outputs and regulates behavior to maintain a desired state is called a Controller.\n\n💡 Real-World Example & Application:\nA home AC thermostat that turns on the compressor when room temperature exceeds 24°C is a classic Controller.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Transducer), (C - Softbot), (D - Sensor array)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Softbot):\nيُطلق مصطلح Softbot (وكيل برمجي) على الوكيل الذي يعيش ويعمل كلياً داخل بيئة رقمية أو برمجية، مثل برامج التداول الآلي وزواحف الويب.\n\n💡 مثال وتطبيق واقعي:\nبوت التداول الآلي في البورصة أو زاحف بحث جوجل الذي يفهرس المواقع يعمل بالكامل داخل السوفتوير كـ Softbot.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Robot)، (B - Cyborg)، (D - Transducer)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Softbot') is the correct choice:\nAn agent operating purely in a software environment (such as web crawlers or algorithmic trading bots) is termed a Softbot.\n\n💡 Real-World Example & Application:\nA Wall Street algorithmic trading bot or Google search crawler operating entirely inside cyberspace is a Softbot.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Robot), (B - Cyborg), (D - Transducer)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Sum from t=1 to T of |P|^t):\nلأن الجدول يجب أن يغطي كل تسلسل مُدركات بطول t من 1 إلى T، فإن عدد المدخلات هو مجموع متسلسلة القوى: Sum from t=1 to T of |P|^t.\n\n💡 مثال وتطبيق واقعي:\nكل ثانية إضافية تضاعف حجم الجدول بشكل أُسي؛ فحفظ كل فيديو مدته دقيقة بدقة عالية يحتاج لجدول بحجم فلكي.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - |P| * T)، (C - T^|P|)، (D - |P|!)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Sum from t=1 to T of |P|^t') is the correct choice:\nA complete table must map every possible percept sequence of length 1 to T, requiring the summation of |P|^t for all t from 1 to T.\n\n💡 Real-World Example & Application:\nEvery added second exponentially multiplies rows; storing all possible 1-minute video sequences creates an astronomically huge table.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - |P| * T), (C - T^|P|), (D - |P|!)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Left, Right, Suck, NoOp):\nفي النموذج القياسي للمكنسة بعالم الخليتين في AIMA، يقتصر فضاء أفعال الوكيل على: التحرك يساراً (Left)، التحرك يميناً (Right)، الشفط (Suck)، واللافعل (NoOp).\n\n💡 مثال وتطبيق واقعي:\nحفظ جميع نقلات الشطرنج في جدول يتطلب صفوفاً تفوق عدد ذرات الكون؛ لذلك تحتاج الآلة للذكاء والبحث بدلاً من الجداول.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Forward, Backward, TurnLeft, TurnRight)، (C - Clean, Move, Sleep, Stop)، (D - Search, Scan, Pick, Drop)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Left, Right, Suck, NoOp') is the correct choice:\nThe basic 2-cell vacuum agent in AIMA Chapter 2 has four elementary actions: Left, Right, Suck, and NoOp (do nothing).\n\n💡 Real-World Example & Application:\nStoring all chess moves in a lookup table requires more rows than atoms in the universe; intelligent search is mandatory instead.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Forward, Backward, TurnLeft, TurnRight), (C - Clean, Move, Sleep, Stop), (D - Search, Scan, Pick, Drop)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Consequentialism):\nالنزعة العواقبية (Consequentialism) هي المذهب الفلسفي الذي يقيس عقلانية وصحة السلوك فقط بناءً على النتائج والعواقب المترتبة على أفعال الوكيل في البيئة.\n\n💡 مثال وتطبيق واقعي:\nالوكيل العقلاني يفعل أذكى شيء بناءً على ما يراه الآن، مثل عبور الشارع عند الإشارة الخضراء، حتى لو سقط نيزك فجأة لم يكن متوقعاً.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Deontology)، (C - Rationalism)، (D - Dualism)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Consequentialism') is the correct choice:\nConsequentialism is the philosophical stance that evaluates the rationality of an agent's behavior purely on the consequences and outcomes it produces.\n\n💡 Real-World Example & Application:\nA rational agent does the best expected action given what it senses (e.g. crossing on green), but cannot foresee an impossible meteorite falling.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Deontology), (C - Rationalism), (D - Dualism)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Performance measure):\nمقياس الأداء (Performance Measure) هو المعيار العددي الموضوعي الخارجي الذي يحدده مصمم النظام لتقييم مدى نجاح الوكيل في تحقيق الأهداف المطلوبة.\n\n💡 مثال وتطبيق واقعي:\nالوكيل كلي المعرفة (Omniscient) يعرف نتيجة رمي حجر النرد مسبقاً قبل سقوطه على الأرض في الحقيقة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Agent program)، (C - Sensor model)، (D - Percept history)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Performance measure') is the correct choice:\nA Performance Measure is an objective external criterion defined by the designer to evaluate how successfully an agent achieves its goals.\n\n💡 Real-World Example & Application:\nAn omniscient agent knows the exact real-world outcome of a dice roll before it even hits the table.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Agent program), (C - Sensor model), (D - Percept history)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - A rational agent could maximize score by repeatedly dumping dirt and cleaning it again):\nإذا قسنا الأداء بكمية الأوساخ المكنوسة، يمكن لوكيل عقلاني أن يرمي الأوساخ ثم يعيد شفطها باستمرار لتحقيق أعلى نتيجة دون تنظيف حقيقي للغرفة.\n\n💡 مثال وتطبيق واقعي:\nالنظر يميناً ويساراً قبل عبور الطريق هو جمع معلومات (Information gathering) ضروري لاتخاذ قرار عقلاني سليم.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The agent cannot count the dirt particles accurately)، (C - Dirt sensors are too noisy to provide objective feedback)، (D - Sucking dirt consumes excessive electrical power)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'A rational agent could maximize score by repeatedly dumping dirt and cleaning it again') is the correct choice:\nMeasuring dirt collected encourages perverse incentives: a rational agent could dump dirt and clean it repeatedly to score points without keeping the room clean.\n\n💡 Real-World Example & Application:\nLooking both ways before crossing the street is active information gathering, essential for rational safety.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The agent cannot count the dirt particles accurately), (C - Dirt sensors are too noisy to provide objective feedback), (D - Sucking dirt consumes excessive electrical power)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Design them according to the desired state of the environment):\nالقاعدة الذهبية لتصميم مقاييس الأداء هي قياس 'الحالة المرغوبة للبيئة' (مثل نظافة الغرفة) بدلاً من قياس سلوك أو أفعال الوكيل نفسه.\n\n💡 مثال وتطبيق واقعي:\nالمكنسة الذكية التي تستكشف زوايا الغرفة الجديدة لأول مرة تقوم بعملية استكشاف (Exploration) لبناء خريطة واقعية للمنزل.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Design them according to how you think the agent should behave)، (C - Maximize the number of actions executed per second)، (D - Penalize the agent whenever it visits a previously seen state)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Design them according to the desired state of the environment') is the correct choice:\nPerformance measures should be designed according to the desired state of the environment (e.g., cleanliness) rather than rewarding specific agent actions.\n\n💡 Real-World Example & Application:\nA robot vacuum mapping an unfamiliar room for the first time performs exploration to discover furniture positions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Design them according to how you think the agent should behave), (C - Maximize the number of actions executed per second), (D - Penalize the agent whenever it visits a previously seen state)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Four factors):\nتعتمد عقلانية الوكيل في أي لحظة على 4 عوامل: مقياس الأداء، تسلسل المُدركات السابقة، المعرفة المسبقة بالبيئة، والأفعال المتاحة للوكيل.\n\n💡 مثال وتطبيق واقعي:\nالسيارة الذكية التي تتعلم قيادة الطرق الجليدية بالخبرة تمتلك استقلالية (Autonomy) تفوق سيارة تعتمد فقط على مسار مبرمج مسبقاً.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Two factors)، (B - Three factors)، (D - Six factors)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Four factors') is the correct choice:\nRationality depends on four factors: the performance measure, the prior percept sequence, prior domain knowledge, and the agent's available actions.\n\n💡 Real-World Example & Application:\nA vehicle learning to adjust for slippery icy roads through experience shows autonomy, unlike one rigidly following hardcoded instructions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Two factors), (B - Three factors), (D - Six factors)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - The agent's future percepts that have not yet occurred):\nلا يمكن للوكيل أن يعتمد على المُدركات المستقبلية لأنها لم تحدث بعد؛ العقلانية تُقاس بناءً على ما أدركه الوكيل بالفعل حتى اللحظة الحالية.\n\n💡 مثال وتطبيق واقعي:\nلا يمكن لوم السائق الذكي على حادث ناتج عن سقوط شجرة فجأة بعد ثوانٍ؛ فالعقلانية تحاسب على ما رآه حتى اللحظة فقط.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The external performance measure)، (B - The agent's prior knowledge of the environment)، (D - The agent's percept sequence to date)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'The agent's future percepts that have not yet occurred') is the correct choice:\nAn agent cannot be judged on future unperceived inputs; rationality is strictly conditioned on percepts received up to the present moment.\n\n💡 Real-World Example & Application:\nYou cannot judge an automated driver on an unpredictable tree collapse seconds later; rationality depends only on percepts received so far.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The external performance measure), (B - The agent's prior knowledge of the environment), (D - The agent's percept sequence to date)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Omniscient):\nالوكيل كلي العلم (Omniscient) هو وكيل افتراضي يعرف النتيجة الفعلية لكل فعل مسبقاً بشكل معصوم، وهو مفهوم نظري يختلف عن العقلانية الواقعية.\n\n💡 مثال وتطبيق واقعي:\nنقيس نجاح المكنسة بنظافة الأرضية (النتيجة المرغوبة)، وليس بعدد مرات دوران محركها حتى لا تتعمد تكرار الحركة دون تنظيف فعلي.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Rational)، (C - Autonomous)، (D - Model-based)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Omniscient') is the correct choice:\nAn omniscient agent knows the actual outcome of its actions with infallible foresight, a theoretical ideal impossible in uncertain real-world environments.\n\n💡 Real-World Example & Application:\nWe evaluate a vacuum by clean floor percentage (desired outcome), not brush rotations, preventing the robot from gaming the system.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Rational), (C - Autonomous), (D - Model-based)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Rationality maximizes expected performance, whereas perfection maximizes actual outcome):\nالعقلانية (Rationality) تعني تعظيم الأداء المتوقع بناءً على المعرفة المتاحة، بينما المثالية (Perfection) تتطلب تعظيم النتيجة الفعلية في الواقع.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Perfection applies only to software agents, whereas rationality applies to physical robots)، (C - Rationality requires complete knowledge of the future, whereas perfection does not)، (D - Rational agents make no errors under any circumstances)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Rationality maximizes expected performance, whereas perfection maximizes actual outcome') is the correct choice:\nRationality maximizes expected performance given incomplete information, whereas perfection requires maximizing actual outcome, which is impossible without omniscience.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Perfection applies only to software agents, whereas rationality applies to physical robots), (C - Rationality requires complete knowledge of the future, whereas perfection does not), (D - Rational agents make no errors under any circumstances)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Information gathering):\nأفعال جمع المعلومات (Information Gathering) هي أفعال هدفها الأساسي استقبال مُدركات جديدة ومفيدة لاتخاذ قرارات أفضل مستقبلاً (مثل الاستكشاف).\n\n💡 مثال وتطبيق واقعي:\nأخذ مظلة عند الخروج عندما تشير توقعات الطقس إلى احتمال هطول أمطار بنسبة 90% هو تصرف عقلاني يعظم المنفعة المتوقعة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Reflex actions)، (C - Backtracking)، (D - Pruning)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Information gathering') is the correct choice:\nInformation gathering actions are executed specifically to modify future percepts (e.g., exploring or looking around) rather than directly altering the environment state.\n\n💡 Real-World Example & Application:\nCarrying an umbrella when radar forecasts a 90% chance of rain is a rational action that maximizes expected utility.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Reflex actions), (C - Backtracking), (D - Pruning)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - It modifies future percepts to help make a decision that maximizes expected safety):\nالنظر في كلا الاتجاهين قبل عبور الطريق هو فعل عقلاني لجمع المعلومات؛ فهو يعدل المُدركات المستقبلية لتجنب الخطر وتعظيم السلامة المتوقعة.\n\n💡 مثال وتطبيق واقعي:\nسحب اليد فوراً عند لمس سطح ساخن هو فعل منعكس لا يحتاج لتفكير طويل لتفادي الخطر الفوري.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It provides a delay that slows down the agent's processor)، (C - It immediately changes the positions of approaching vehicles)، (D - Looking is an actuator movement that scores direct utility points)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'It modifies future percepts to help make a decision that maximizes expected safety') is the correct choice:\nLooking both ways before crossing modifies future percepts with critical visual data, maximizing the agent's expected safety and preventing collisions.\n\n💡 Real-World Example & Application:\nPulling your hand back instantly upon touching a hot stove is a reflex action, bypassing deep deliberation to avoid burns.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It provides a delay that slows down the agent's processor), (C - It immediately changes the positions of approaching vehicles), (D - Looking is an actuator movement that scores direct utility points)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Autonomy):\nيفقد الوكيل استقلاليته (Autonomy) إذا اعتمد حصراً على البرمجة والمعرفة المسبقة لمصممه وعجز عن التعلم وتكييف سلوكه بناءً على خبراته الذاتية.\n\n💡 مثال وتطبيق واقعي:\nنموذج PEAS يحدد: معيار الأداء (Performance)، البيئة (Environment)، المشغلات (Actuators)، والحساسات (Sensors).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Mobility)، (C - Determinism)، (D - Continuity)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Autonomy') is the correct choice:\nAn agent lacks Autonomy if it relies solely on its designer's prior built-in knowledge rather than adapting and learning from its own perceptual experience.\n\n💡 Real-World Example & Application:\nPEAS stands for Performance measure, Environment, Actuators, and Sensors.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Mobility), (C - Determinism), (D - Continuity)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - By learning from its percepts to compensate for partial or incorrect prior knowledge):\n🎯 سبب اختيار (B - By learning from its percepts to compensate for partial or incorrect prior knowledge):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث الاستقلالية (Autonomy) تعني قدرة الوكيل على التعلم وتعديل سلوكه بناءً على تجاربه الخاصة بدلاً من الاعتماد المطلق على معرفة المصمم المسبقة. 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - By discarding all sensors and relying solely on its internal clock)، (C - By following a fixed table of condition-action rules created at manufacture)، (D - By refusing to execute actions in unfamiliar environments)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n💡 مثال واقعي: في سيارة الأجرة الذاتية: السلامة هي الأداء، الشوارع والمشاة هي البيئة، المقود والمكابح هي المشغلات، والكاميرات هي الحساسات.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - By discarding all sensors and relying solely on its internal clock)، (C - By following a fixed table of condition-action rules created at manufacture)، (D - By refusing to execute actions in unfamiliar environments)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nفي سيارة الأجرة الذاتية: السلامة هي الأداء، الشوارع والمشاة هي البيئة، المقود والمكابح هي المشغلات، والكاميرات هي الحساسات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - By discarding all sensors and relying solely on its internal clock)، (C - By following a fixed table of condition-action rules created at manufacture)، (D - By refusing to execute actions in unfamiliar environments)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'By learning from its percepts to compensate for partial or incorrect prior knowledge') is the correct choice:\n🎯 Why (B - 'By learning from its percepts to compensate for partial or incorrect prior knowledge') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: An agent possesses autonomy if its behavior is determined by its own learning and experience rather than solely by its designer's initial programming. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - By discarding all sensors and relying solely on its internal clock), (C - By following a fixed table of condition-action rules created at manufacture), (D - By refusing to execute actions in unfamiliar environments)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n💡 Real-world Example: For an automated taxi: Safety is Performance, city roads are Environment, steering/brakes are Actuators, and cameras are Sensors.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - By discarding all sensors and relying solely on its internal clock), (C - By following a fixed table of condition-action rules created at manufacture), (D - By refusing to execute actions in unfamiliar environments)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nFor an automated taxi: Safety is Performance, city roads are Environment, steering/brakes are Actuators, and cameras are Sensors.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - By discarding all sensors and relying solely on its internal clock), (C - By following a fixed table of condition-action rules created at manufacture), (D - By refusing to execute actions in unfamiliar environments)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Innate, rigid behavioral routines that fail when assumptions are violated):\nدبور سبيكس وخنفساء الروث أمثلة بيولوجية كلاسيكية على السلوك الغريزي الصارم (Rigid routines) الذي يفتقر للاستقلالية ويفشل تماماً عند حدوث أي اضطراب غير متوقع.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Highly autonomous utility-based learning agents)، (C - Perfect agents that exhibit complete omniscience)، (D - Multi-agent competitive systems in continuous environments)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Innate, rigid behavioral routines that fail when assumptions are violated') is the correct choice:\nThe sphex wasp and dung beetle illustrate genetically pre-programmed, rigid behavioral routines that fail catastrophically when environmental conditions are altered.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Highly autonomous utility-based learning agents), (C - Perfect agents that exhibit complete omniscience), (D - Multi-agent competitive systems in continuous environments)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Bounded rationality):\nالعقلانية المقيدة (Bounded Rationality) تصف الواقع الحقيقي للوكلاء حيث تكون القدرة على اتخاذ القرار الأمثل مقيدة بالموارد المحدودة من وقت وحساب وذاكرة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Perfect rationality)، (C - Omniscience)، (D - Unobservable logic)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Bounded rationality') is the correct choice:\nBounded Rationality accounts for physical limitations: an agent must make the best decision it can within strict constraints of finite time and computational resources.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Perfect rationality), (C - Omniscience), (D - Unobservable logic)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - a = argmax_a E(U | a)):\nالقرار العقلاني رياضياً يختار الفعل a الذي يعظم المنفعة المتوقعة E(U|a)، ويُعبر عنه بـ: a = argmax_a E(U | a).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - a = argmin_a E(U | a))، (C - a = E(a | U))، (D - a = max_s P(s | a))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'a = argmax_a E(U | a)') is the correct choice:\nA rational agent chooses the action that maximizes expected utility, formally expressed as: a = argmax_a E(U | a).\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - a = argmin_a E(U | a)), (C - a = E(a | U)), (D - a = max_s P(s | a))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Performance measure, Environment, Actuators, Sensors):\nإطار PEAS يحدد بيئة مهمة الوكيل عبر 4 ركائز: مقياس الأداء (Performance)، البيئة (Environment)، المشغلات (Actuators)، وأجهزة الاستشعار (Sensors).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Perception, Environment, Actions, System)، (C - Process, Execution, Agents, State)، (D - Program, Entity, Actuation, Sequence)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Performance measure, Environment, Actuators, Sensors') is the correct choice:\nPEAS specifies an agent's task environment through: Performance measure, Environment, Actuators, and Sensors.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Perception, Environment, Actions, System), (C - Process, Execution, Agents, State), (D - Program, Entity, Actuation, Sequence)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Specify the task environment (PEAS) as fully as possible):\nوفقاً لـ AIMA، الخطوة الأولى الإلزامية عند تصميم أي وكيل ذكي هي توصيف بيئة المهمة بالكامل باستخدام نموذج PEAS.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Write the code for the condition-action rules)، (C - Select a neural network architecture)، (D - Assemble the physical hardware and actuators)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Specify the task environment (PEAS) as fully as possible') is the correct choice:\nThe very first step in designing an intelligent agent is always to specify the task environment (PEAS) as thoroughly and completely as possible.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Write the code for the condition-action rules), (C - Select a neural network architecture), (D - Assemble the physical hardware and actuators)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Steering wheel):\nعجلة القيادة (Steering Wheel) هي أداة تشغيل وإخراج (Actuator) تتيح للتاكسي الذاتي تنفيذ فعل توجيه السيارة وتغيير مسارها فيزيائياً.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Video camera)، (C - Speedometer)، (D - GPS receiver)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Steering wheel') is the correct choice:\nIn an autonomous taxi, the steering wheel (along with accelerator and brakes) acts as an actuator, converting agent commands into physical mechanical motion.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Video camera), (C - Speedometer), (D - GPS receiver)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Lidar / Radar):\nأجهزة الليدار والرادار (Lidar / Radar) هي أجهزة استشعار (Sensors) تقيس المسافات والأجسام المحيطة وتزود وكيل التاكسي بالمُدركات البيئية.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Accelerator)، (B - Brake pedal)، (D - Voice synthesizer)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Lidar / Radar') is the correct choice:\nLidar and radar serve as primary sensors for an automated vehicle, perceiving obstacle distances, vehicles, and pedestrians in the environment.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Accelerator), (B - Brake pedal), (D - Voice synthesizer)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Driving smoothly to maximize comfort, safety, and passenger satisfaction):\nيشمل مقياس أداء التاكسي الذاتي: القيادة بسلاسة، السلامة ومنع الحوادث، سرعة الوصول، والالتزام بقوانين المرور لتحقيق رضا الركاب.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Turning the steering wheel 15 degrees right)، (C - Detecting lane markings with cameras)، (D - Sending coordinate packets over 5G networks)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Driving smoothly to maximize comfort, safety, and passenger satisfaction') is the correct choice:\nThe performance measure for an automated taxi balances safety, journey speed, legal compliance, passenger comfort, and trip smoothness.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Turning the steering wheel 15 degrees right), (C - Detecting lane markings with cameras), (D - Sending coordinate packets over 5G networks)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Accuracy in minimizing false positives and false negatives):\nمقياس الأداء الأساسي لمرشح البريد المزعج (Spam Filter) هو دقة التصنيف وتقليل الإيجابيات الكاذبة (حظر رسالة هامة) والسلبيات الكاذبة (تمرير سبام).\n\n💡 مثال وتطبيق واقعي:\nلعبة الشطرنج بيئة ملاحظة بالكامل؛ لأن رقعة الشطرنج ومواقع جميع القطع مكشوفة لكلا اللاعبين طوال الوقت.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Speed of downloading files)، (C - Number of emails sent per hour)، (D - Disk storage capacity of the server)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Accuracy in minimizing false positives and false negatives') is the correct choice:\nA spam filter's performance measure evaluates classification accuracy, specifically penalizing false positives (marking real emails as spam) and false negatives.\n\n💡 Real-World Example & Application:\nChess is fully observable because the entire 64-square board and all pieces are visible at all times.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Speed of downloading files), (C - Number of emails sent per hour), (D - Disk storage capacity of the server)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Moving an email to the Spam folder):\nنقل البريد المشبوه إلى مجلد المهملات أو السبام هو الفعل التنفيذي (Actuator) الذي يؤثر فيه مرشح البريد على بيئة العمل الخاصة به.\n\n💡 مثال وتطبيق واقعي:\nلعبة البوكر أو القيادة في الضباب بيئة ملاحظة جزئياً؛ لأن كروت المنافسين أو العوائق البعيدة تكون مخفية عنك.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Incoming email headers)، (B - Email text content)، (D - Sender IP address)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Moving an email to the Spam folder') is the correct choice:\nMoving an incoming email message to the Junk/Spam folder is the software actuator through which the spam filter takes action in its environment.\n\n💡 Real-World Example & Application:\nPoker or driving through fog is partially observable because opponent cards or distant road obstacles are hidden.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Incoming email headers), (B - Email text content), (D - Sender IP address)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Touchscreen display of questions, test suggestions, and diagnoses):\nشاشة العرض التي تُظهر الأسئلة المقترحة والتشخيص النهائي للمريض هي أداة الإخراج والتنفيذ (Actuator) لنظام التشخيص الطبي الخبير.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Keyboard entry of patient symptoms)، (C - Patient heart rate sensor)، (D - Hospital billing database)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Touchscreen display of questions, test suggestions, and diagnoses') is the correct choice:\nIn a medical diagnosis system, the user interface display (presenting diagnostic questions, test recommendations, and therapies) serves as the actuator.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Keyboard entry of patient symptoms), (C - Patient heart rate sensor), (D - Hospital billing database)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Percentage of parts placed into correct sorting bins):\nمقياس الأداء لروبوت فرز القطع الصناعية هو النسبة المئوية للقطع التي تم التقاطها ووضعها في صناديق الفرز الصحيحة بنجاح وسرعة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Electrical voltage supplied to the conveyor belt)، (C - Ambient temperature of the warehouse)، (D - Angle of the robotic arm joints)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Percentage of parts placed into correct sorting bins') is the correct choice:\nThe performance measure of a part-picking robot measures accuracy and throughput: the percentage of parts correctly categorized into appropriate bins.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Electrical voltage supplied to the conveyor belt), (C - Ambient temperature of the warehouse), (D - Angle of the robotic arm joints)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Digital cameras and tactile touch sensors):\nتعتمد روبوتات الفرز على الكاميرات الرقمية (لرؤية أشكال وألوان القطع) ومستشعرات اللمس في القبضة (للتحقق من إمساك القطعة) كأجهزة استشعار رئيسية.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Jointed arm and pneumatic gripper)، (C - Electric servomotors and gears)، (D - Conveyor belt rollers)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Digital cameras and tactile touch sensors') is the correct choice:\nA part-picking assembly robot utilizes digital vision cameras to recognize parts and tactile sensors in its gripper to detect grasp force and orientation.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Jointed arm and pneumatic gripper), (C - Electric servomotors and gears), (D - Conveyor belt rollers)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Valves, heaters, pumps, and stirrers):\nالمشغلات في مصفاة التكرير الكيميائي هي الصمامات الهيدروليكية، السخانات، المضخات، والمقلبات التي تتحكم بالتدفق ودرجات الحرارة وضغط التفاعل.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Pressure gauges and temperature sensors)، (C - Purity measurement assays)، (D - Chemical composition reports)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Valves, heaters, pumps, and stirrers') is the correct choice:\nA refinery control agent acts on the physical plant using actuators such as motorized valves, heaters, pumps, and mixers to maintain chemical equilibrium.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Pressure gauges and temperature sensors), (C - Purity measurement assays), (D - Chemical composition reports)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The student's improvement and test score):\n🎯 سبب اختيار (B - The student's improvement and test score):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث الإجابة الصحيحة هي (B): 'The student's improvement and test score'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة. 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - The speed of keystroke logging)، (C - Number of network requests handled)، (D - Audio speaker frequency range)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n💡 مثال واقعي: نعتبر الكيان وكيلاً آخر إذا كان يمتلك أهدافاً خاصة به ويسعى لتحسين أدائه بناءً على تصرفاتنا (مثل الخصم في الشطرنج).\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - The speed of keystroke logging)، (C - Number of network requests handled)، (D - Audio speaker frequency range)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The speed of keystroke logging)، (C - Number of network requests handled)، (D - Audio speaker frequency range)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The student's improvement and test score') is the correct choice:\n🎯 Why (B - 'The student's improvement and test score') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The correct answer is B: 'The student's improvement and test score'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - The speed of keystroke logging), (C - Number of network requests handled), (D - Audio speaker frequency range)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n💡 Real-world Example: An entity is an agent if it optimizes its own performance measure that dynamically interacts with our actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The speed of keystroke logging), (C - Number of network requests handled), (D - Audio speaker frequency range)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The speed of keystroke logging), (C - Number of network requests handled), (D - Audio speaker frequency range)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The agent's sensors give it access to the complete state of the environment at each point in time):\nتكون البيئة قابلة للملاحظة كلياً (Fully Observable) عندما تمنح أجهزة الاستشعار الوكيل وصولاً كاملاً للحالة الدقيقة للبيئة في كل لحظة زمنية.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The agent knows the entire future trajectory of states)، (C - The agent has no need for actuators)، (D - The environment never changes while the agent is deciding)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The agent's sensors give it access to the complete state of the environment at each point in time') is the correct choice:\nAn environment is Fully Observable if an agent's sensors give it access to the complete, exact state of the environment at each point in time.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The agent knows the entire future trajectory of states), (C - The agent has no need for actuators), (D - The environment never changes while the agent is deciding)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Players cannot see the hidden cards held by their opponents):\nلعبة البوكر بيئة قابلة للملاحظة جزئياً (Partially Observable) لأن بطاقات الخصوم مقلوبة ومخفية، فلا يمكن للاعب رؤية كامل حالة اللعبة.\n\n💡 مثال وتطبيق واقعي:\nفي لعبة الشطرنج، إذا قمت بتحريك القلعة للأمام، فموقعها مؤكد 100% دون أي مفاجآت عشوائية (حتمية).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The dealer shuffles cards unpredictably)، (C - The betting rules change after every round)، (D - The chip count is not visible to all players)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Players cannot see the hidden cards held by their opponents') is the correct choice:\nPoker is partially observable because opponents' cards are hidden, meaning the agent lacks sensory access to the complete game state.\n\n💡 Real-World Example & Application:\nIn chess, moving a rook to e4 results in the rook landing on e4 with 100% certainty (deterministic).\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The dealer shuffles cards unpredictably), (C - The betting rules change after every round), (D - The chip count is not visible to all players)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Deterministic):\nالبيئة حتمية (Deterministic) إذا كانت الحالة التالية للبيئة تتحدد كلياً وبشكل مؤكد بواسطة الحالة الحالية والفعل الذي ينفذه الوكيل فقط.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Stochastic)، (C - Dynamic)، (D - Continuous)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Deterministic') is the correct choice:\nAn environment is Deterministic if its next state is completely determined by the current state and the action executed by the agent.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Stochastic), (C - Dynamic), (D - Continuous)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Stochastic explicitly associates probabilities with outcomes, while nondeterministic simply lists possibilities):\nالبيئة العشوائية (Stochastic) تحدد احتمالات صريحة للمخرجات، بينما البيئة غير الحتمية (Nondeterministic) تسرد المخرجات الممكنة دون ترجيحات احتمالية.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Nondeterministic environments are always fully observable, while stochastic environments are not)، (C - Stochastic environments only occur in board games)، (D - There is no mathematical distinction; they are completely interchangeable)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Stochastic explicitly associates probabilities with outcomes, while nondeterministic simply lists possibilities') is the correct choice:\nStochastic environments model uncertainty using explicit probability distributions over outcomes, whereas nondeterministic models list possible outcomes without probabilities.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Nondeterministic environments are always fully observable, while stochastic environments are not), (C - Stochastic environments only occur in board games), (D - There is no mathematical distinction; they are completely interchangeable)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Episodic):\nفي البيئة العرضية (Episodic)، تنقسم تجربة الوكيل إلى نوبات مستقلة؛ وقرار الوكيل في النوبة الحالية لا يؤثر إطلاقاً على النوبات القادمة (مثل فحص عيوب القطع).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Sequential)، (C - Dynamic)، (D - Continuous)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Episodic') is the correct choice:\nIn an Episodic environment, the agent's experience is divided into self-contained episodes where current actions have no bearing on future episodes.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Sequential), (C - Dynamic), (D - Continuous)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Current board moves have long-term consequences that directly affect all future states):\nالشطرنج بيئة تتابعية (Sequential) لأن النقلة الحالية تغير موقع القطع وتترتب عليها عواقب طويلة المدى تؤثر على كل النقلات اللاحقة والنتيجة النهائية.\n\n💡 مثال وتطبيق واقعي:\nنظام فرز البريد: كل رسالة تُفحص وتُفرز بمعزل تام عما حدث للرسالة السابقة دون أي تأثير تراكمي (حلقية - Episodic).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The pieces move in discrete squares)، (C - Each turn is completely independent of who moved previously)، (D - Players are rewarded points for every piece captured)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Current board moves have long-term consequences that directly affect all future states') is the correct choice:\nChess is sequential because early board moves shape the piece configuration, directly impacting all future positions and the final outcome of the match.\n\n💡 Real-World Example & Application:\nMail sorting: classifying one letter's postal code is an isolated episode, having zero effect on subsequent letters.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The pieces move in discrete squares), (C - Each turn is completely independent of who moved previously), (D - Players are rewarded points for every piece captured)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Semidynamic):\nالبيئة شبه الديناميكية (Semidynamic) هي التي لا تتغير فيها الحالة المادية للبيئة أثناء تفكير الوكيل، ولكن درجة أداء الوكيل تتناقص مع مرور الوقت.\n\n💡 مثال وتطبيق واقعي:\nلعبة الشطرنج أو قيادة السيارة تتابعية (Sequential)؛ لأن خطأك في نقلة واحدة الآن سيؤثر على وضعك طوال المباراة القادمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Static)، (B - Dynamic)، (D - Discrete)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Semidynamic') is the correct choice:\nAn environment is Semidynamic if the environment state itself does not change while the agent is deliberating, but the agent's performance score drops with time.\n\n💡 Real-World Example & Application:\nChess or driving is sequential; making a reckless turn now permanently impacts your safety and future path choices.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Static), (B - Dynamic), (D - Discrete)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Playing chess with a running game clock):\nلعب الشطرنج بساعة توقيت مثال على بيئة شبه ديناميكية؛ فرقعة الشطرنج ثابتة أثناء تفكيرك، ولكن وقتك المتبقي يقل، مما قد يعرضك للخسارة بالوقت.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Driving an automated taxi through urban traffic)، (C - Solving a standard crossword puzzle)، (D - Sorting parts on a moving conveyor belt)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Playing chess with a running game clock') is the correct choice:\nChess played with a clock is semidynamic: the board state remains static while you think, but the passage of time consumes your clock allocation.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Driving an automated taxi through urban traffic), (C - Solving a standard crossword puzzle), (D - Sorting parts on a moving conveyor belt)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Discrete):\nتكون البيئة منفصلة (Discrete) إذا كان عدد الحالات والمُدركات والأفعال والخطوات الزمنية محدوداً أو قابلاً للعد (مثل مربعات رقعة الشطرنج).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Continuous)، (C - Dynamic)، (D - Stochastic)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Discrete') is the correct choice:\nA task environment is Discrete if it has a finite or countable number of distinct states, percepts, actions, and time steps.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Continuous), (C - Dynamic), (D - Stochastic)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Speed, location, steering angles, and time vary continuously through real-valued ranges):\nقيادة التاكسي بيئة مستمرة (Continuous) لأن السرعة، والموقع الجغرافي، وزاوية دوران عجلة القيادة، والزمن تتغير عبر قيم حقيقية متصلة غير متقطعة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The taxi operates 24 hours a day without stops)، (C - The rules of the road never change over time)، (D - The taxi visits every city in the country)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Speed, location, steering angles, and time vary continuously through real-valued ranges') is the correct choice:\nAutomated taxi driving is continuous because physical variables such as vehicle speed, position, steering angles, and time range over continuous real numbers.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The taxi operates 24 hours a day without stops), (C - The rules of the road never change over time), (D - The taxi visits every city in the country)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions):\nيُعتبر الكيان 'وكيلاً آخر' إذا كان سلوكه يوصف بتعظيم مقياس أداء خاص به يعتمد على قرارات الوكيل الأصلي، وليس مجرد جسم يطيع قوانين الفيزياء كالموج.\n\n💡 مثال وتطبيق واقعي:\nقيادة السيارة في شوارع مزدحمة بيئة ديناميكية؛ السيارات الأخرى والمشاة يتحركون باستمرار أثناء تفكيرك.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The entity moves faster than the primary agent)، (C - The entity is made of metal and electronic circuits)، (D - The entity communicates using human natural language)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The entity's behavior is best described as maximizing a performance measure that depends on the primary agent's actions') is the correct choice:\nAn entity is classified as an agent if its behavior is best modeled as maximizing an objective or performance measure that interacts with the primary agent's actions.\n\n💡 Real-World Example & Application:\nDriving in heavy city traffic is dynamic; pedestrian and vehicle positions change continuously while the driver decides.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The entity moves faster than the primary agent), (C - The entity is made of metal and electronic circuits), (D - The entity communicates using human natural language)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Maximizing one agent's performance measure minimizes the other's):\n🎯 سبب اختيار (A - Maximizing one agent's performance measure minimizes the other's):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث الإجابة الصحيحة هي (A): 'Maximizing one agent's performance measure minimizes the other's'. مقياس الأداء (Performance Measure) هو معيار موضوعي خارجي يحدده المصمم لقياس مدى نجاح سلوك الوكيل في البيئة. 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(B - Both agents work together to maximize a shared reward)، (C - The agents ignore each other's score entirely)، (D - Both agents receive equal points regardless of outcome)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n💡 مثال واقعي: الشطرنج ذو الساعة الزمنية بيئة شبه ديناميكية؛ وضع القطع لا يتغير، لكن رصيدك الزمني ينقص كل ثانية أثناء تفكيرك.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(B - Both agents work together to maximize a shared reward)، (C - The agents ignore each other's score entirely)، (D - Both agents receive equal points regardless of outcome)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Both agents work together to maximize a shared reward)، (C - The agents ignore each other's score entirely)، (D - Both agents receive equal points regardless of outcome)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Maximizing one agent's performance measure minimizes the other's') is the correct choice:\n🎯 Why (A - 'Maximizing one agent's performance measure minimizes the other's') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The correct answer is A: 'Maximizing one agent's performance measure minimizes the other's'. A performance measure is an objective external standard used to evaluate the desirability of the states achieved by the agent. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(B - Both agents work together to maximize a shared reward), (C - The agents ignore each other's score entirely), (D - Both agents receive equal points regardless of outcome)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n💡 Real-world Example: Speed chess with an active chess clock is semidynamic; board pieces freeze, but your ticking clock penalty increases.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Both agents work together to maximize a shared reward), (C - The agents ignore each other's score entirely), (D - Both agents receive equal points regardless of outcome)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Both agents work together to maximize a shared reward), (C - The agents ignore each other's score entirely), (D - Both agents receive equal points regardless of outcome)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The outcomes (or outcome probabilities) for all actions are fully given to the agent):\nتكون البيئة معلومة (Known) عندما يمتلك الوكيل معرفة كاملة بقواعد وقوانين البيئة واحتمالات نتائج الأفعال المتاحة له مسبقاً.\n\n💡 مثال وتطبيق واقعي:\nرقعة الشطرنج منفصلة؛ هناك 64 مربعاً محدداً وعدد محدد من القطع والنقلات في كل دور.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The agent can see through walls using infrared sensors)، (C - The agent has already reached the goal state)، (D - The state space contains fewer than 100 states)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The outcomes (or outcome probabilities) for all actions are fully given to the agent') is the correct choice:\nAn environment is Known if the agent has complete knowledge of the environment's rules, physics, and action transition probabilities.\n\n💡 Real-World Example & Application:\nChess is discrete; there are exactly 64 distinct squares, discrete turns, and a finite set of legal moves.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The agent can see through walls using infrared sensors), (C - The agent has already reached the goal state), (D - The state space contains fewer than 100 states)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Yes; in solitaire card games the rules are known, but face-down cards cannot be seen):\nنعم؛ لعبة السوليتير بيئة قواعدها معروفة كلياً للوكيل (Known)، ولكنها قابلة للملاحظة جزئياً لأن الأوراق المقلوبة في الكومة لا يمكن رؤيتها مسبقاً.\n\n💡 مثال وتطبيق واقعي:\nقيادة السيارة بيئة مستمرة؛ فالسرعة تتغير بكسور الكيلومتر، وزاوية عجلة القيادة والزمن يتدفقان بشكل مستمر لا نهائي التجزئة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - No, knowing the rules guarantees full observability)، (C - Yes; in crossword puzzles the grid is partially invisible)، (D - No, partial observability only occurs in unknown video games)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Yes; in solitaire card games the rules are known, but face-down cards cannot be seen') is the correct choice:\nYes; solitaire is a known environment because the rules are fully understood, but partially observable because cards in the deck face downward and are unseen.\n\n💡 Real-World Example & Application:\nDriving is continuous; vehicle velocity, steering angles, and trajectories evolve across smooth continuous real numbers.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - No, knowing the rules guarantees full observability), (C - Yes; in crossword puzzles the grid is partially invisible), (D - No, partial observability only occurs in unknown video games)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown):\nأصعب بيئة ذكاء اصطناعي هي: القابلة للملاحظة جزئياً، متعددة الوكلاء، غير الحتمية، التتابعية، الديناميكية، المستمرة، وغير المعروفة (Unknown).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Fully observable, deterministic, static, discrete, single-agent, known)، (C - Fully observable, stochastic, episodic, static, single-agent, known)، (D - Partially observable, deterministic, sequential, static, discrete, known)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, unknown') is the correct choice:\nThe hardest challenge in AI is an environment that is partially observable, multiagent, nondeterministic, sequential, dynamic, continuous, and unknown.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Fully observable, deterministic, static, discrete, single-agent, known), (C - Fully observable, stochastic, episodic, static, single-agent, known), (D - Partially observable, deterministic, sequential, static, discrete, known)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Standard crossword puzzle):\nالكلمات المتقاطعة بيئة ثابتة (لا تتغير الشبكة تلقائياً)، منفصلة (مربعات وحروف محددة)، وحتمية (كتابة حرف تعطي نتيجة مؤكدة).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Taxi driving)، (C - Refinery controller)، (D - Medical diagnosis)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Standard crossword puzzle') is the correct choice:\nA crossword puzzle is static (the grid does not change while you ponder), discrete (finite cells and letters), and deterministic.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Taxi driving), (C - Refinery controller), (D - Medical diagnosis)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Fully observable and Stochastic):\nفي جدول AIMA 2.6، لعبة الطاولة (Backgammon) مصنفة كبيئة قابلة للملاحظة كلياً (الرقعة مكشوفة بالكامل) ولكنها عشوائية بسبب رميات النرد.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Partially observable and Deterministic)، (C - Fully observable and Deterministic)، (D - Partially observable and Continuous)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Fully observable and Stochastic') is the correct choice:\nIn AIMA Figure 2.6, backgammon is classified as Fully Observable (all pieces and dice are visible) and Stochastic (dice rolls introduce probability).\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Partially observable and Deterministic), (C - Fully observable and Deterministic), (D - Partially observable and Continuous)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Backgammon involves dice rolls, which introduce randomness into state transitions):\nالشطرنج حتمي لخلوه من الصدفة، بينما الطاولة عشوائية لأن رمي النرد يدخل عنصراً احتماليا يحدد الحركات القانونية المتاحة في كل دور.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Chess has a smaller board size than backgammon)، (C - In backgammon, the opponent's pieces are hidden from view)، (D - Chess requires timing clocks, while backgammon does not)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Backgammon involves dice rolls, which introduce randomness into state transitions') is the correct choice:\nChess is deterministic because moves have certain outcomes, whereas backgammon is stochastic because dice rolls inject random probabilities into state transitions.\n\n💡 Real-World Example & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Chess has a smaller board size than backgammon), (C - In backgammon, the opponent's pieces are hidden from view), (D - Chess requires timing clocks, while backgammon does not)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث التعريف التأسيسي للوكيل في AIMA يقوم على ركيزتي الإدراك والتأثير: فالمستشعرات تستقبل مدخلات البيئة، والمشغلات ترسل الأوامر لتغيير حالة البيئة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: An agent's foundational architecture rests on perception and action: sensors receive environmental stimuli, while actuators execute physical or digital changes in the environment. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث لا يمكن للوكيل أن يتخذ قراره بناءً على مُدركات مستقبلية لم تقع بعد؛ فاختيار الفعل يعتمد حصرياً على سلسلة المُدركات الماضية والحالية. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: An agent's action can only depend on past and current percepts (percept sequence), never on future percepts. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث دالة الوكيل تربط رياضياً كل سلسلة مدخلات بفعل؛ والجدول يمكنه نظرياً تخزين هذا الاقتران بالكامل لأي دالة، ولكن العائق هو الانفجار الأسي لحجم الجدول في الواقع. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Theoretically, any discrete function f: P* -> A can be tabulated as a key-value mapping. While practically impossible due to combinatorial explosion, it is mathematically universal. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن An omniscient agent is identical in definition to a rational agent, as both terms require maximizing expected utility based on current percepts. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'An omniscient agent is identical in definition to a rational agent, as both terms require maximizing expected utility based on current percepts.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Rationality guarantees perfection; therefore, a rational agent will never suffer an unfortunate outcome due to unobserved external events. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Rationality guarantees perfection; therefore, a rational agent will never suffer an unfortunate outcome due to unobserved external events.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث تقييم الوكيل بما يجب أن يحققه في البيئة (مثل نظافة الأرضية) يمنع السلوكيات الشاذة التي قد يفعلها الوكيل لو كوفئ على أفعاله فقط (مثل إلقاء القمامة ثم تنظيفها تكراراً). 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: If rewarded for behavior (e.g. cleaning), an agent might intentionally soil the floor repeatedly to clean it; evaluating desired environmental state prevents such gaming. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن An agent that relies entirely on built-in prior knowledge and never learns from its sensory experience is said to possess complete autonomy. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'An agent that relies entirely on built-in prior knowledge and never learns from its sensory experience is said to possess complete autonomy.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث وكيل المنعكس البسيط مبني فقط على قواعد (شرط - فعل) تعمل مباشرة على المُدرَك الحالي وتتجاهل كلياً كل ما حدث في الماضي. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Simple reflex agents operate purely on condition-action rules triggered by current percepts, with no memory or internal state to track history. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث في البيئات غير الملاحظة كلياً، قد تتشابه حالتان مختلفتان فتنتجان نفس المُدرَك، مما يدفع الوكيل الحتمي لتكرار نفس الفعل دون إدراك، فيعلق في حلقة لا نهائية. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Partial observability creates perceptual aliasing (different states look identical); a deterministic reflex agent will repeatedly make the identical wrong choice. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث السلوك العشوائي (Randomization) يكسر التماثل والتكرار الآلي، فيمنح الوكيل فرصة لتجربة أفعال مختلفة تخرجه من الحلقة المغلقة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Randomizing actions breaks deterministic symmetry and loops, allowing the agent to escape repetitive cyclic deadlocks. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث وكيل رد الفعل المعتمد على النموذج (Model-based reflex agent) يحتفظ بحالة داخلية لتعقب الجوانب غير المرئية حالياً في البيئة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Model-based agents maintain an internal state to track unseen aspects of the environment over time. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث نموذج الانتقال (Transition model) الداخلي يحاكي فيزياء العالم: كيف تتغير البيئة تلقائياً مع مرور الوقت، وكيف تؤثر أفعال الوكيل المباشرة على مكوناتها. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: The transition model encodes two world dynamics: independent environmental progression (physics/time) and the causal impact of the agent's own actions. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Goal-based agents are less flexible than simple reflex agents because their decision logic cannot be adjusted without rewriting the entire program. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Goal-based agents are less flexible than simple reflex agents because their decision logic cannot be adjusted without rewriting the entire program.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث الأهداف الثنائية (نجاح/فشل) لا توضح الأفضلية؛ بينما دالة المنفعة تسند قيمة عددية مستمرة لدرجة الرضا، مما يسمح بمفاضلة علمية دقيقة بين الأهداف المتعارضة (كالسرعة مقابل الأمان). 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: A utility function maps states to real numbers, quantifying trade-offs when goals conflict (e.g., speed vs. fuel efficiency vs. safety). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن In a learning agent architecture, the critic evaluates the agent's behavior against an external performance standard that the agent itself is allowed to modify. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'In a learning agent architecture, the critic evaluates the agent's behavior against an external performance standard that the agent itself is allowed to modify.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث مولد المشكلات (Problem generator) يتعمد اقتراح أفعال استكشافية غير مألوفة، بدلاً من مجرد تكرار أفضل الأفعال الحالية، لاكتشاف حقائق جديدة عن البيئة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: The problem generator deliberately suggests novel exploratory actions (suboptimal in the short term) to discover better long-term strategies. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن In an atomic representation, each state of the world has an internal structure composed of accessible attribute-value variables called fluents. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'In an atomic representation, each state of the world has an internal structure composed of accessible attribute-value variables called fluents.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث التمثيل المُعامل (Factored representation) يحلل كل حالة إلى متجهات من المتغيرات والخصائص المستقلة (مثل الموقع، السرعة، البطارية)، على عكس التمثيل الذري غير القابل للتجزئة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Unlike atomic states (black boxes), factored representations describe each state as a vector of explicit attribute-value variables. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن An environment is considered dynamic if the physical world remains unchanged while the agent deliberates, but time limits expire. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'An environment is considered dynamic if the physical world remains unchanged while the agent deliberates, but time limits expire.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن An automated taxi driving on a highway operates in a single-agent environment because other cars are merely physical obstacles governed by physics. لا يتوافق مع الأسس العلمية في Chapter 2: Intelligent Agents. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 تطبيق واقعي: أنظمة التحكم الآلي في المصانع الذكية تعتمد هذا المبدأ لموازنة السرعة مع معايير الأمان.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات مثل المكنسة الذكية أو أنظمة التكييف الذكية تطبق هذا المفهوم للتكيف مع المتغيرات البيئية واتخاذ قرارات ملائمة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'An automated taxi driving on a highway operates in a single-agent environment because other cars are merely physical obstacles governed by physics.' is incorrect according to the standard principles in AIMA (Chapter 2: Intelligent Agents). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Application: Automated industrial factory robotics apply this principle to balance cycle throughput with safety.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nApplications like robotic vacuums or smart climate control apply this principle to adapt to environmental changes and select rational actions."
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
    "explanationAr": "🎯 سبب اختيار (B - Problem-solving agent):\nوكيل حل المشكلات (Problem-solving agent) هو وكيل ذري يعتمد على الأهداف ويقوم بالتخطيط المسبق عبر محاكاة تسلسل من الأفعال للوصول إلى الهدف قبل التنفيذ الفعلي.\n\n💡 مثال وتطبيق واقعي:\nتطبيق خرائط جوجل (Google Maps) هو وكيل حل مشكلات؛ يخطط مساراً كاملاً من البداية للوجهة قبل أن تبدأ بالتحرك فعلياً بالسيارة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Reflex agent)، (C - Utility-free agent)، (D - Reactive agent)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Problem-solving agent') is the correct choice:\nA problem-solving agent is a goal-based agent that plans ahead by formulating a sequence of actions leading to a goal state before taking action in the physical world.\n\n💡 Real-World Example & Application:\nGoogle Maps is a problem-solving agent; it computes the entire turn-by-turn route before you ever put the car in drive.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Reflex agent), (C - Utility-free agent), (D - Reactive agent)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Goal formulation):\nصياغة الهدف (Goal formulation) هي الخطوة الأولى الإلزامية لأنها تحدد الحالات المرغوبة التي يسعى الوكيل لتحقيقها، وبدونها لا يمكن تحديد الأفعال أو قياس النجاح.\n\n💡 مثال وتطبيق واقعي:\nعند فتح الملاحة، يجب تحديد الوجهة أولاً (صياغة الهدف) قبل أن تتمكن الخوارزمية من حساب المنعطفات والطرق البديلة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Execution)، (B - Search)، (D - Problem formulation)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Goal formulation') is the correct choice:\nGoal formulation is the first phase because deciding what objectives to achieve is necessary before deciding what actions and states to consider.\n\n💡 Real-World Example & Application:\nIn GPS navigation, specifying the destination (Goal formulation) must occur before the algorithm can plan turns and routes.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Execution), (B - Search), (D - Problem formulation)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Goal formulation -> Problem formulation -> Search -> Execution):\nالترتيب الزمني الصحيح للعملية الرباعية لحل المشكلات هو: صياغة الهدف أولاً، ثم صياغة المشكلة، ثم البحث عن مسار الحل، وأخيراً تنفيذ الحل.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Search -> Goal formulation -> Problem formulation -> Execution)، (C - Problem formulation -> Execution -> Goal formulation -> Search)، (D - Goal formulation -> Search -> Execution -> Problem formulation)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Goal formulation -> Problem formulation -> Search -> Execution') is the correct choice:\nThe canonical four-phase problem-solving sequence is: Goal formulation -> Problem formulation -> Search -> Execution.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Search -> Goal formulation -> Problem formulation -> Execution), (C - Problem formulation -> Execution -> Goal formulation -> Search), (D - Goal formulation -> Search -> Execution -> Problem formulation)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Because the predetermined sequence of actions is guaranteed to reach the goal without surprises):\n🎯 سبب اختيار (B - Because the predetermined sequence of actions is guaranteed to reach the goal without surprises):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث الوكيل (Agent) هو المفهوم الأساسي في الذكاء الاصطناعي لكل ما يدرك بيئته بالمستشعرات (Sensors) ويؤثر فيها بالمشغلات (Actuators). 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - Because the actuators never wear out)، (C - Because open-loop systems are always faster than closed-loop systems)، (D - Because sensors are deactivated during execution to conserve energy)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - Because the actuators never wear out)، (C - Because open-loop systems are always faster than closed-loop systems)، (D - Because sensors are deactivated during execution to conserve energy)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Because the actuators never wear out)، (C - Because open-loop systems are always faster than closed-loop systems)، (D - Because sensors are deactivated during execution to conserve energy)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Because the predetermined sequence of actions is guaranteed to reach the goal without surprises') is the correct choice:\n🎯 Why (B - 'Because the predetermined sequence of actions is guaranteed to reach the goal without surprises') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: An Agent is formally defined as an entity that perceives its environment through sensors and acts upon it through actuators. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - Because the actuators never wear out), (C - Because open-loop systems are always faster than closed-loop systems), (D - Because sensors are deactivated during execution to conserve energy)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Because the actuators never wear out), (C - Because open-loop systems are always faster than closed-loop systems), (D - Because sensors are deactivated during execution to conserve energy)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Because the actuators never wear out), (C - Because open-loop systems are always faster than closed-loop systems), (D - Because sensors are deactivated during execution to conserve energy)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Five components):\nوفقاً لـ AIMA، تتطلب الصياغة الرياضية الرسمية للمشكلة 5 مكونات: الحالة الابتدائية، الأفعال المتاحة، دالة الانتقال/النتيجة، اختبار الهدف، ودالة تكلفة المسار.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Three components)، (B - Four components)، (D - Seven components)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Five components') is the correct choice:\nA search problem is formally defined by five components: initial state, possible actions, transition model (RESULT), goal test, and path cost function.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Three components), (B - Four components), (D - Seven components)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Heuristic decay rate):\n'معدل اضمحلال الحدس' (Heuristic decay rate) ليس من مكونات صياغة المشكلة؛ فالمكونات الخمسة هي الحالة الابتدائية، الأفعال، دالة الانتقال، اختبار الهدف، وتكلفة المسار.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Initial state)، (B - Set of available actions (ACTIONS))، (D - Transition model (RESULT))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Heuristic decay rate') is the correct choice:\n'Heuristic decay rate' is not a component of a search problem. The five formal components are initial state, actions, transition model, goal test, and path cost.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Initial state), (B - Set of available actions (ACTIONS)), (D - Transition model (RESULT))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - The state that results from executing action a in state s):\nدالة الانتقال RESULT(s, a) تأخذ الحالة s والفعل a وتعيد الحالة الناتجة عن تطبيق ذلك الفعل في تلك الحالة المحددة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - A boolean indicating if state s is the goal)، (B - The numerical cost of action a)، (D - The list of all valid actions in state s)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'The state that results from executing action a in state s') is the correct choice:\nThe transition model function RESULT(s, a) returns the specific state that results from executing action a in state s.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - A boolean indicating if state s is the goal), (B - The numerical cost of action a), (D - The list of all valid actions in state s)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - a belongs to the set ACTIONS(s)):\nيكون الفعل a قابلاً للتطبيق (Applicable) في الحالة s إذا وفقط إذا كان ينتمي لمجموعة الأفعال القانونية المسموح بها في تلك الحالة ACTIONS(s).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - a has a cost of zero)، (C - a immediately achieves the goal state)، (D - a has never been performed before)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'a belongs to the set ACTIONS(s)') is the correct choice:\nAn action a is defined as applicable in state s if it is a legal member of the action set ACTIONS(s).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - a has a cost of zero), (C - a immediately achieves the goal state), (D - a has never been performed before)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - A path leading from the initial state to any valid goal state):\nالمسار هو سلسلة متتابعة من الأفعال، ويُعرَّف الحل رسمياً بأنه مسار يبدأ من الحالة الابتدائية وينتهي عند أي حالة تحقق اختبار الهدف.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The shortest path between any two random states)، (C - The entire explored portion of the state space graph)، (D - The minimum spanning tree of the search space)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'A path leading from the initial state to any valid goal state') is the correct choice:\nA solution in search algorithms is formally defined as a complete path of actions from the initial state to a valid goal state.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The shortest path between any two random states), (C - The entire explored portion of the state space graph), (D - The minimum spanning tree of the search space)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - The sum of the individual step costs along the path):\nفي خوارزميات البحث التقليدية، تُفترض تكلفة المسار كخاصية جمعية (Additive)، أي أن التكلفة الإجمالية للمسار تساوي مجموع تكاليف الخطوات الفردية المكونة له.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The maximum cost among all individual action steps)، (B - The product of all individual action costs)، (D - The average of the start and goal node costs)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'The sum of the individual step costs along the path') is the correct choice:\nPath costs are assumed to be additive, meaning the total cost of a path is the algebraic sum of the individual step costs along that path.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The maximum cost among all individual action steps), (B - The product of all individual action costs), (D - The average of the start and goal node costs)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly):\nاشتراط أن تكون تكاليف الخطوات موجبة قطيعاً (c >= ε > 0) يضمن عدم وقوع الخوارزمية في دورات لا نهائية ذات تكلفة صفرية أو سالبة تمنع التقدم نحو الهدف.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - To ensure that computers do not divide by zero during search)، (C - Because real money can never have negative values)، (D - To force BFS and DFS to generate the same number of nodes)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'To avoid infinite loops where the agent traverses zero-cost or negative-cost cycles endlessly') is the correct choice:\nStep costs must be strictly positive (cost >= epsilon > 0) to prevent the search from being trapped in infinite loops of zero-cost or negative-cost cycles.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - To ensure that computers do not divide by zero during search), (C - Because real money can never have negative values), (D - To force BFS and DFS to generate the same number of nodes)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Abstraction):\nالتجريد (Abstraction) هو عملية إزالة التفاصيل غير الجوهرية من تمثيل العالم الحقيقي لإنشاء نموذج مشكلة مبسط ومحدد رياضياً وقابل للحساب.\n\n💡 مثال وتطبيق واقعي:\nخريطة المترو تجرد تفاصيل المباني والأشجار وإشارات المرور، وتبقي فقط المحطات وخطوط الربط لحل مسار التنقل بسهولة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Pruning)، (C - Discretization)، (D - Optimization)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Abstraction') is the correct choice:\nAbstraction is the process of removing irrelevant real-world details to create a manageable, mathematically tractable problem model.\n\n💡 Real-World Example & Application:\nA subway map abstracts away street curves and buildings, retaining only stations and rail connections for easy route finding.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Pruning), (C - Discretization), (D - Optimization)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - If any abstract solution can be elaborated into a concrete solution in the more detailed real world):\nتكون الصياغة المجردة 'صالحة' (Valid) إذا كان كل حل مجرد يمكن تفصيله وتحويله إلى حل ملموس وواقعي في بيئة العالم الحقيقي المعقدة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - If it contains no numbers greater than 1,000)، (C - If it can be solved in polynomial time O(n))، (D - Only if the state space graph is completely planar)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'If any abstract solution can be elaborated into a concrete solution in the more detailed real world') is the correct choice:\nAn abstract problem formulation is valid if every abstract solution path can be elaborated into a concrete, executable solution in the real world.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - If it contains no numbers greater than 1,000), (C - If it can be solved in polynomial time O(n)), (D - Only if the state space graph is completely planar)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Is easier than solving the original unabstracted problem):\nيُعتبر التجريد 'مفيداً' (Useful) إذا كان تنفيذ كل فعل مجرد في الحل أسهل بكثير من حل المشكلة الأصلية بتفاصيلها الكاملة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Generates at least 100 successor states)، (C - Costs exactly one unit of energy)، (D - Eliminates the need for an initial state)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Is easier than solving the original unabstracted problem') is the correct choice:\nAn abstraction is useful if carrying out each abstract action in the solution path is significantly easier than solving the original unabstracted problem.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Generates at least 100 successor states), (C - Costs exactly one unit of energy), (D - Eliminates the need for an initial state)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - A solution path that has the lowest path cost among all possible solutions):\nالحل الأمثل (Optimal solution) هو مسار الحل الذي يحقق أقل تكلفة مسار ممكنة من بين جميع مسارات الحلول الممكنة التي تصل إلى الهدف.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Any path that visits the fewest possible states)، (C - The path that visits every node in the graph exactly once)، (D - A solution discovered without expanding any non-goal nodes)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'A solution path that has the lowest path cost among all possible solutions') is the correct choice:\nAn optimal solution is formally defined as a solution path having the lowest total path cost among all possible valid solutions.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Any path that visits the fewest possible states), (C - The path that visits every node in the graph exactly once), (D - A solution discovered without expanding any non-goal nodes)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - To provide concise, exact problem descriptions to compare algorithm performance):\nالهدف الأساسي من المشاكل المعيارية (Benchmark/Toy problems) هو توفير وصف موجز ومضبوط رياضياً لاختبار ومقارنة كفاءة خوارزميات البحث المختلفة بدقة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - To run actual commercial airline flight reservations)، (C - To control factory hardware on production lines)، (D - To eliminate the need for heuristic functions)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'To provide concise, exact problem descriptions to compare algorithm performance') is the correct choice:\nStandard benchmark problems provide concise, exact, reproducible environments to evaluate and compare the performance of different search algorithms.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - To run actual commercial airline flight reservations), (C - To control factory hardware on production lines), (D - To eliminate the need for heuristic functions)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - 24 states):\nفي عالم 3 خلايا: موقع الوكيل له 3 احتمالات، وكل خلية لها حالتان (نظيفة/متسخة) أي 2^3 = 8 حالات اتساخ، فيكون إجمالي فضاء الحالات: 3 * 8 = 24 حالة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - 12 states)، (C - 16 states)، (D - 64 states)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - '24 states') is the correct choice:\nFor 3 cells, there are 3 possible agent locations and 2^3 = 8 possible dirt configurations, yielding 3 * 8 = 24 distinct physical states.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - 12 states), (C - 16 states), (D - 64 states)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Moving the blank space Left, Right, Up, or Down):\nفي أحجية الأرقام (8-puzzle)، الصياغة الأكثر ملاءمة ونظافة هي اعتبار الأفعال حركة للمربع الفارغ (تحريك الفراغ يساراً أو يميناً أو لأعلى أو لأسفل).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Moving numbered tiles along diagonal tracks)، (C - Shaking the puzzle board to randomize tiles)، (D - Swapping any two arbitrary tiles regardless of position)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Moving the blank space Left, Right, Up, or Down') is the correct choice:\nIn sliding-tile puzzles, actions are most cleanly formalized as moving the single blank space (Left, Right, Up, Down), rather than tracking moving numbers.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Moving numbered tiles along diagonal tracks), (C - Shaking the puzzle board to randomize tiles), (D - Swapping any two arbitrary tiles regardless of position)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Exactly one-half (50%)):\nبسبب خاصية التكافؤ الرياضي (Parity) في تباديل أحجية الألواح المنزلقة، ينقسم فضاء الحالات إلى مكونين منفصلين، مما يجعل 50% فقط من الترتيبات العشوائية قابلة للحل.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Exactly all (100%))، (C - Exactly one-third (33%))، (D - Exactly one-ninth (11%))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Exactly one-half (50%)') is the correct choice:\nDue to the permutation parity property of sliding-tile puzzles, the state space is partitioned into two disjoint halves; exactly 50% of random states can reach the goal.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Exactly all (100%)), (C - Exactly one-third (33%)), (D - Exactly one-ninth (11%))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - 9! / 2 = 181,440):\n🎯 سبب اختيار (B - 9! / 2 = 181,440):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث عدد الحالات التي يمكن الوصول إليها في لغز 8-puzzle هو نصف إجمالي التباديل الممكنة: 9! / 2 = 181,440 حالة. 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - 9! = 362,880)، (C - 8! = 40,320)، (D - 2^8 = 256)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - 9! = 362,880)، (C - 8! = 40,320)، (D - 2^8 = 256)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - 9! = 362,880)، (C - 8! = 40,320)، (D - 2^8 = 256)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - '9! / 2 = 181,440') is the correct choice:\n🎯 Why (B - '9! / 2 = 181,440') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The 8-puzzle state space splits into two disconnected halves of reachability; exactly 9! / 2 = 181,440 states are reachable. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - 9! = 362,880), (C - 8! = 40,320), (D - 2^8 = 256)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - 9! = 362,880), (C - 8! = 40,320), (D - 2^8 = 256)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - 9! = 362,880), (C - 8! = 40,320), (D - 2^8 = 256)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Over 10 trillion (16! / 2)):\n🎯 سبب اختيار (B - Over 10 trillion (16! / 2)):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث في لغز 15-puzzle، عدد الحالات التي يمكن الوصول إليها هو 16! / 2 = تقريباً 1.05 * 10^13 (أو ما يقارب 1.8 * 10^5 في النسخ المصغرة). 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(A - 1.8 * 10^5)، (C - 15^2 = 225)، (D - Infinite)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(A - 1.8 * 10^5)، (C - 15^2 = 225)، (D - Infinite)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - 1.8 * 10^5)، (C - 15^2 = 225)، (D - Infinite)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Over 10 trillion (16! / 2)') is the correct choice:\n🎯 Why (B - 'Over 10 trillion (16! / 2)') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The 15-puzzle has half of 16! reachable configurations due to parity constraints. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(A - 1.8 * 10^5), (C - 15^2 = 225), (D - Infinite)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - 1.8 * 10^5), (C - 15^2 = 225), (D - Infinite)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - 1.8 * 10^5), (C - 15^2 = 225), (D - Infinite)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Square root, floor, and factorial):\nمسألة دونالد كنوث للأربعة تبين نشوء فضاءات حالات لا نهائية من خلال تطبيق ثلاث عمليات رياضية تكرارية على الرقم 4: الجذر التربيعي، دالة الجزء الصحيح (الأرضية)، والمضروب.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Addition, subtraction, multiplication, and division)، (C - Modulo, exponentiation, and logarithms)، (D - Derivatives, integrals, and limits)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Square root, floor, and factorial') is the correct choice:\nKnuth's 4-problem generates an infinite state space from the number 4 by repeatedly applying square root, floor, and factorial operations.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Addition, subtraction, multiplication, and division), (C - Modulo, exponentiation, and logarithms), (D - Derivatives, integrals, and limits)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Push scattered boxes to designated storage locations):\nفي لعبة سوكوبان (Sokoban)، الهدف الأساسي للوكيل هو دفع الصناديق المتفرقة عبر شبكة المتاهة لإيصالها إلى مواقع التخزين المحددة مسبقاً.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Clean all dirty squares with suction)، (C - Destroy enemy pieces on a board)، (D - Travel to Bucharest with minimum mileage)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Push scattered boxes to designated storage locations') is the correct choice:\nIn the Sokoban puzzle, the agent's objective is to push all scattered crates/boxes onto specified storage target squares without getting stuck.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Clean all dirty squares with suction), (C - Destroy enemy pieces on a board), (D - Travel to Bucharest with minimum mileage)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Touring problem where every city must be visited):\nمسألة البائع المتجول (TSP) هي مسألة جولة سياحية (Touring problem)، حيث يُشترط زيارة كل مدينة في الشبكة مرة واحدة والعودة لمدينة الانطلاق بأقل تكلفة.\n\n💡 مثال وتطبيق واقعي:\nمسألة البائع المتجول (TSP) تحاكي شاحنة توصيل طرود أمازون التي يجب أن تزور كل عنوان عميل مرة واحدة وتعود للمستودع بأقصر مسافة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Single-destination path problem)، (C - Continuous reflex problem)، (D - Softbot parsing problem)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Touring problem where every city must be visited') is the correct choice:\nThe Traveling Salesperson Problem (TSP) is a touring problem where every city must be visited exactly once with minimal total travel cost.\n\n💡 Real-World Example & Application:\nThe Traveling Salesperson Problem (TSP) models an Amazon delivery van visiting each delivery stop once with minimal total mileage.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Single-destination path problem), (C - Continuous reflex problem), (D - Softbot parsing problem)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Cell layout and channel routing):\nفي تصميم الدوائر المتكاملة الفائقة (VLSI)، تُقسَّم المشكلة تقليدياً إلى مسألتين فرعيتين: تخطيط مواضع الخلايا (Cell layout)، وتوجيه مسارات القنوات والأسلاك (Channel routing).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Gate soldering and wire splicing)، (C - Logic synthesis and power charging)، (D - Clock timing and instruction decoding)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Cell layout and channel routing') is the correct choice:\nVLSI design is standardly decomposed into two sequential search subproblems: cell layout (positioning components) and channel routing (wiring connections).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Gate soldering and wire splicing), (C - Logic synthesis and power charging), (D - Clock timing and instruction decoding)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The search space has one continuous dimension for each joint angle):\nتخطيط حركة ذراع الروبوت متعدد المفاصل معقد لأن فضاء التكوين يمتلك بعداً مستمراً (Continuous dimension) مستقلاً لكل زاوية من زوايا مفاصل الذراع.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Robot arms cannot execute rotation actions)، (C - Robot arms have no initial state)، (D - The cost of arm movement is always negative)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The search space has one continuous dimension for each joint angle') is the correct choice:\nRobot arm motion planning is complex because the configuration space has continuous degrees of freedom—one continuous dimension per joint angle.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Robot arms cannot execute rotation actions), (C - Robot arms have no initial state), (D - The cost of arm movement is always negative)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning):\nفي مسألة تسلسل التجميع الآلي، اختبار قانونية الفعل مكلف حسابياً لأنه يتطلب اختبارات تصادم هندسية ثلاثية الأبعاد معقدة للتأكد من إمكانية تركيب الجزء دون اصطدام.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Parts cannot be painted beforehand)، (C - Assembly lines always have zero-cost actions)، (D - The state space is always completely acyclic)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Testing whether a physical part can be added without geometrical collision requires complex spatial reasoning') is the correct choice:\nIn assembly sequencing, checking legal actions is expensive because testing whether a physical part can be inserted collision-free requires complex 3D spatial reasoning.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Parts cannot be painted beforehand), (C - Assembly lines always have zero-cost actions), (D - The state space is always completely acyclic)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Protein design):\nفي البيولوجيا الحسابية، مسألة 'تصميم البروتين' (Protein design) تبحث عن تسلسل من الأحماض الأمينية ينطوي في بنية فراغية ثلاثية الأبعاد مرغوبة لمكافحة الأمراض.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Sokoban routing)، (C - Touring problem)، (D - Grid world navigation)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Protein design') is the correct choice:\nProtein design searches for an amino acid sequence that will fold into a specific 3D target structure with desired therapeutic properties.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Sokoban routing), (C - Touring problem), (D - Grid world navigation)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The state space describes physical configurations of the world, while the search tree describes search paths between states):\nالفرق الجوهري هو أن فضاء الحالات يصف التكوينات الفيزيائية الحقيقية للعالم، بينما تصف شجرة البحث مسارات البحث المتولدة لاستكشاف تلك الحالات.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - The search tree contains physical cities, while the state space contains abstract nodes)، (C - State space graphs can never contain loops, while search trees always contain loops)، (D - There is no difference; the two terms are identical)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The state space describes physical configurations of the world, while the search tree describes search paths between states') is the correct choice:\nThe state space graph represents physical world configurations, whereas a search tree represents the search paths explored between those states.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - The search tree contains physical cities, while the state space contains abstract nodes), (C - State space graphs can never contain loops, while search trees always contain loops), (D - There is no difference; the two terms are identical)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Four components):\nتحتوي عقدة شجرة البحث على أربعة مكونات أساسية: الحالة الممثلة (STATE)، العقدة الأم (PARENT)، الفعل المتخذ (ACTION)، وتكلفة المسار (PATH-COST).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Two components)، (B - Three components)، (D - Six components)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Four components') is the correct choice:\nA search tree node data structure comprises four core components: STATE, PARENT, ACTION, and PATH-COST.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Two components), (B - Three components), (D - Six components)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - STATE, PARENT, ACTION, PATH-COST):\nالمكونات الأربعة لعقدة شجرة البحث هي: STATE (الحالة)، PARENT (المؤشر للعقدة الأصلية)، ACTION (الفعل المنفذ)، و PATH-COST (التكلفة التراكمية g).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - SENSOR, ACTUATOR, PROGRAM, REWARD)، (C - INPUT, OUTPUT, WEIGHT, BIAS)، (D - DEPTH, WIDTH, HEIGHT, VOLUME)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'STATE, PARENT, ACTION, PATH-COST') is the correct choice:\nThe four required components of a node in a search tree are STATE, PARENT, ACTION, and PATH-COST.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - SENSOR, ACTUATOR, PROGRAM, REWARD), (C - INPUT, OUTPUT, WEIGHT, BIAS), (D - DEPTH, WIDTH, HEIGHT, VOLUME)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - It allows the algorithm to trace backward from the goal node to recover the complete solution path):\nوظيفة مؤشر العقدة الأم (PARENT) هي تمكين الخوارزمية من تتبع المسار عكسياً من عقدة الهدف حتى الحالة الابتدائية لاستخراج تسلسل الحل الكامل.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - It determines the heuristic value h(n))، (C - It calculates the branching factor b)، (D - It resets the search when memory runs out)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'It allows the algorithm to trace backward from the goal node to recover the complete solution path') is the correct choice:\nThe PARENT pointer enables the search algorithm to backtrack from the goal node to the root, reconstructing the complete solution path.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - It determines the heuristic value h(n)), (C - It calculates the branching factor b), (D - It resets the search when memory runs out)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Frontier (or open list)):\nتسمى مجموعة العقد التي تم توليدها ولكن لم يتم توسيعها بعد باسم 'الجبهة' (Frontier) أو القائمة المفتوحة (Open list).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Reached set)، (C - State space)، (D - Solution path)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Frontier (or open list)') is the correct choice:\nThe frontier (or open list) is the set of all leaf nodes that have been generated but not yet expanded in the search tree.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Reached set), (C - State space), (D - Solution path)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - POP(frontier)):\nعملية POP(frontier) هي العملية القياسية التي تقوم بإزالة واسترجاع العقدة الأولى من طابور الجبهة وفقاً لاستراتيجية ترتيب الطابور.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - TOP(frontier))، (C - ADD(node, frontier))، (D - IS-EMPTY(frontier))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'POP(frontier)') is the correct choice:\nPOP(frontier) is the standard queue operation that removes and returns the top node according to the queue's specific ordering strategy.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - TOP(frontier)), (C - ADD(node, frontier)), (D - IS-EMPTY(frontier))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The interior (fully expanded states) and the exterior (unreached states)):\nخاصية الفصل (Separation property) في بحث المخططات تعني أن الجبهة تشكل حداً فاصلاً بين المنطقة الداخلية (الحالات التي تم فحصها) والمنطقة الخارجية (الحالات غير المستكشفة).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The start node and the root node)، (C - The goal states and the initial states)، (D - Admissible states and inadmissible states)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The interior (fully expanded states) and the exterior (unreached states)') is the correct choice:\nThe separation property states that the frontier acts as a boundary separating the interior (fully explored states) from the exterior (unreached states).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The start node and the root node), (C - The goal states and the initial states), (D - Admissible states and inadmissible states)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Cycle (or loopy path)):\nالمسار الذي يشكل حلقة بالعودة إلى حالة سابقة تم استكشافها بالفعل (مثل Arad -> Sibiu -> Arad) يُسمى دورة (Cycle أو Loopy path).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Heuristic path)، (C - Optimal branch)، (D - Dominant edge)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Cycle (or loopy path)') is the correct choice:\nA search path that returns to a previously visited state is termed a cycle (or loopy path).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Heuristic path), (C - Optimal branch), (D - Dominant edge)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not):\nالبحث في المخططات (Graph search) يحتفظ بجدول الحالات التي تم الوصول إليها (Reached table) لتجنب تكرار المسارات وحلقاتها، بينما لا يفعل البحث الشجري ذلك.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Graph search only runs on planar maps, while tree-like search runs on trees)، (C - Tree-like search always uses a priority queue, while graph search uses a stack)، (D - Graph search cannot find optimal paths)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Graph search maintains a reached table to detect and eliminate redundant paths, whereas tree- like search does not') is the correct choice:\nGraph search maintains a reached table to detect and eliminate redundant paths and cycles, whereas tree-like search does not.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Graph search only runs on planar maps, while tree-like search runs on trees), (C - Tree-like search always uses a priority queue, while graph search uses a stack), (D - Graph search cannot find optimal paths)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Space Complexity):\nتُقيَّم خوارزميات البحث بأربعة أبعاد: الاكتمال (Completeness)، والأمثلية (Cost Optimality)، والتعقيد الزمني (Time)، والتعقيد المكاني (Space Complexity).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Expandability)، (C - Heuristic Slope)، (D - Branching Depth)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Space Complexity') is the correct choice:\nThe four fundamental criteria for evaluating search algorithms are Completeness, Cost Optimality, Time Complexity, and Space Complexity.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Expandability), (C - Heuristic Slope), (D - Branching Depth)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Find a solution whenever one exists, and correctly report failure when there is none):\nتكون الخوارزمية مكتملة (Complete) إذا كانت تضمن إيجاد حل كلما وجد حل للمشكلة، وتعلن الفشل بشكل صحيح إذا لم يكن هناك حل.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Find a solution in less than one second)، (C - Use no more than O(bm) memory)، (D - Expand all nodes in the state space graph)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Find a solution whenever one exists, and correctly report failure when there is none') is the correct choice:\nAn algorithm is complete if it is guaranteed to find a solution when one exists, and correctly report failure if no solution exists.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Find a solution in less than one second), (C - Use no more than O(bm) memory), (D - Expand all nodes in the state space graph)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Always finds a solution path with the lowest path cost among all possible solutions):\nتكون الخوارزمية ذات أمثلية من حيث التكلفة (Cost-optimal) إذا كانت تجد دائماً الحل الأقل تكلفة إجمالية من بين جميع الحلول الممكنة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Expands the lowest number of total nodes)، (C - Operates with linear memory complexity O(bd))، (D - Evaluates only admissible heuristic functions)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Always finds a solution path with the lowest path cost among all possible solutions') is the correct choice:\nA search algorithm is cost-optimal if it always returns a solution path with the lowest possible path cost among all solutions.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Expands the lowest number of total nodes), (C - Operates with linear memory complexity O(bd)), (D - Evaluates only admissible heuristic functions)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The maximum branching factor of the search tree):\nفي تحليل التعقيد النظري لخوارزميات البحث، يمثل الرمز 'b' أقصى معامل تفرع (Branching factor) للشجرة، أي الحد الأقصى لخلفاء أي عقدة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The depth of the shallowest goal)، (C - The total number of cycles in the graph)، (D - The straight-line distance to Bucharest)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The maximum branching factor of the search tree') is the correct choice:\nIn search complexity analysis, 'b' represents the maximum branching factor—the maximum number of successors of any node.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The depth of the shallowest goal), (C - The total number of cycles in the graph), (D - The straight-line distance to Bucharest)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The depth of the shallowest optimal solution):\nفي معادلات التعقيد، يمثل الرمز 'd' عمق (Depth) الحل الأقل عمقاً (الضحل) أو الحل الأمثل في شجرة البحث.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The maximum depth of the search tree (can be infinite))، (C - The diameter of the graph)، (D - The number of action costs equal to 1)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The depth of the shallowest optimal solution') is the correct choice:\nIn search complexity equations, 'd' denotes the depth of the shallowest optimal goal node.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The maximum depth of the search tree (can be infinite)), (C - The diameter of the graph), (D - The number of action costs equal to 1)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The maximum length of any path in the state space (which may be infinite)):\nفي معادلات تعقيد خوارزميات البحث، يمثل 'm' أقصى عمق أو أطول مسار ممكن في فضاء الحالات (والذي قد يكون لانهائياً).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - The number of misplaced tiles in the 8-puzzle)، (C - The minimum step cost epsilon)، (D - The number of goal states)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The maximum length of any path in the state space (which may be infinite)') is the correct choice:\nIn complexity notation, 'm' denotes the maximum length (or depth) of any path in the state space.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - The number of misplaced tiles in the 8-puzzle), (C - The minimum step cost epsilon), (D - The number of goal states)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Diameter):\nيُعرَّف 'قطر' فضاء الحالات (Diameter) بأنه أقصى عدد من الخطوات اللازمة للانتقال بين أي حالتين على أقصر مسار يربط بينهما.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Radius)، (C - Perimeter)، (D - Branching index)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Diameter') is the correct choice:\nThe diameter of a state space is the maximum number of steps required to get from any state to any other state along the shortest path between them.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Radius), (C - Perimeter), (D - Branching index)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The grid has only 100 cells, but the number of paths of length 9 is over 100 million):\nفي شبكة خالية من العوائق 10x10، عدد الخلايا 100 فقط، لكن عدد المسارات بطول 9 يتجاوز 100 مليون، مما يوضح الأثر الكارثي للمسارات المتكررة على سرعة البحث.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - 10x10 grids cannot be solved using breadth-first search)، (C - Moving in 8 directions makes the environment continuous)، (D - The agent's sensors fail after 9 steps)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The grid has only 100 cells, but the number of paths of length 9 is over 100 million') is the correct choice:\nIn a 10x10 grid with only 100 cells, the number of paths of length 9 exceeds 100 million, showing why eliminating redundant paths is essential.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - 10x10 grids cannot be solved using breadth-first search), (C - Moving in 8 directions makes the environment continuous), (D - The agent's sensors fail after 9 steps)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Expand the shallowest unexpanded node in the frontier):\nقاعدة التوسيع في البحث بالعرض أولاً (BFS) هي دائماً توسيع العقدة الأقل عمقاً (الأضحل) غير الموسعة في الجبهة، مستكشفة المستويات طبقة تلو الأخرى.\n\n💡 مثال وتطبيق واقعي:\nخوارزمية BFS تشبه قطرة ماء تسقط في بركة فتنتشر أمواجها دائرياً طبقة تلو الأخرى، مما يضمن العثور على أقرب حل أولاً.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Expand the deepest unexpanded node in the frontier)، (C - Expand the node with the lowest heuristic value h(n))، (D - Expand the node with the largest path cost g(n))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Expand the shallowest unexpanded node in the frontier') is the correct choice:\nBreadth-First Search (BFS) always expands the shallowest unexpanded node in the frontier, exploring nodes level by level.\n\n💡 Real-World Example & Application:\nBFS expands like ripples in a pond, exploring nodes level by level to guarantee finding the shallowest solution first.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Expand the deepest unexpanded node in the frontier), (C - Expand the node with the lowest heuristic value h(n)), (D - Expand the node with the largest path cost g(n))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - FIFO queue):\nيُنفذ طابور الجبهة في خوارزمية البحث بالعرض أولاً (BFS) باستخدام طابور من نوع FIFO (يدخل أولاً يخرج أولاً)، ليضمن توسيع العقد بحسب ترتيب توليدها.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - LIFO stack)، (C - Priority queue ordered by h(n))، (D - Hash table)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'FIFO queue') is the correct choice:\nBFS uses a FIFO (First-In, First-Out) queue for its frontier to ensure that shallower nodes generated earlier are expanded first.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - LIFO stack), (C - Priority queue ordered by h(n)), (D - Hash table)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Because any child generated at depth d is guaranteed to be among the shallowest paths to that state):\nيطبق BFS اختبار الهدف المبكر (عند التوليد) بأمان لأن أي عقدة ابن تُولَّد عند العمق d تضمن أن مسارها هو من بين الأقصر عمقاً لتلك الحالة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Because BFS never expands nodes with equal costs)، (C - Because priority queues require early goal testing)، (D - Because early goal testing reduces the branching factor to 1)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Because any child generated at depth d is guaranteed to be among the shallowest paths to that state') is the correct choice:\nBFS can safely use early goal testing (upon generation) because any child generated at depth d is guaranteed to be along a shortest-hop path to that state.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Because BFS never expands nodes with equal costs), (C - Because priority queues require early goal testing), (D - Because early goal testing reduces the branching factor to 1)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - O(b^d)):\nالتعقيد المكاني لـ BFS في أسوأ الحالات هو O(b^d) لأن جميع العقد عند المستوى d تظل محفوظة في الذاكرة داخل الجبهة في نفس الوقت.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - O(bd))، (C - O(bm))، (D - O(d^b))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'O(b^d)') is the correct choice:\nThe worst-case space complexity of BFS is O(b^d) because all generated nodes at depth d must reside simultaneously in the frontier queue.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - O(bd)), (C - O(bm)), (D - O(d^b))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - All generated nodes at level d must remain stored in memory, consuming gigabytes or terabytes rapidly):\nتعتبر متطلبات الذاكرة العائق الأكبر لـ BFS لأن حفظ جميع عقد المستوى d يتطلب مساحات تخزين بالغيغابايت والتيرابايت تتجاوز سعة الذاكرة بسرعة هائلة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Memory access is slower than CPU processing)، (C - BFS empties the memory buffer after every expansion)، (D - FIFO queues can only hold a maximum of 1,000 nodes in modern operating systems)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'All generated nodes at level d must remain stored in memory, consuming gigabytes or terabytes rapidly') is the correct choice:\nMemory is the critical bottleneck in BFS because storing all generated nodes at depth d rapidly exhausts available RAM long before CPU time expires.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Memory access is slower than CPU processing), (C - BFS empties the memory buffer after every expansion), (D - FIFO queues can only hold a maximum of 1,000 nodes in modern operating systems)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Uniform-Cost Search (UCS)):\nخوارزمية البحث بالتكلفة الموحدة (Uniform-Cost Search) في الذكاء الاصطناعي تكافئ تماماً خوارزمية دكسترا (Dijkstra) لأقصر مسار في نظرية المخططات.\n\n💡 مثال وتطبيق واقعي:\nخوارزمية UCS (وهي نفسها Dijkstra) تستخدمها أنظمة الملاحة لإيجاد المسار الأقل تكلفة بالوقود أو المسافة الموزونة بالكيلومترات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Depth-First Search)، (C - Greedy Best-First Search)، (D - Iterative Deepening Search)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Uniform-Cost Search (UCS)') is the correct choice:\nUniform-Cost Search (UCS) is the artificial intelligence search equivalent of Dijkstra's algorithm for finding shortest paths in non-negative weighted graphs.\n\n💡 Real-World Example & Application:\nUCS (equivalent to Dijkstra) powers turn-by-turn GPS navigation finding the strictly cheapest mileage/toll route.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Depth-First Search), (C - Greedy Best-First Search), (D - Iterative Deepening Search)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The node with the lowest path cost g(n) from the start state):\nتختار خوارزمية البحث بالتكلفة الموحدة (UCS) لتوسيعها العقدة التي تمتلك أقل تكلفة مسار تراكمية g(n) محسوبة من الحالة الابتدائية.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The node with the deepest level in the tree)، (C - The node with the largest number of children)، (D - The node generated most recently)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The node with the lowest path cost g(n) from the start state') is the correct choice:\nUCS always selects for expansion the frontier node with the lowest cumulative path cost g(n) from the start state.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The node with the deepest level in the tree), (C - The node with the largest number of children), (D - The node generated most recently)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Because a cheaper path to the goal might be discovered later before the goal is expanded):\nيجب على UCS تطبيق اختبار الهدف المتأخر (عند السحب من الطابور) لأنه قد يتم اكتشاف مسار بديل أرخص إلى الهدف لاحقاً قبل أن يتم سحب عقدة الهدف وتوسيعها.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - To prevent memory overflow in the priority queue)، (C - Because priority queues do not support early insertion)، (D - Because the start node has cost g(n) = 0)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Because a cheaper path to the goal might be discovered later before the goal is expanded') is the correct choice:\nUCS must test for a goal when a node is POPPED because a lower-cost path to the goal might still be discovered before the goal node is expanded.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - To prevent memory overflow in the priority queue), (C - Because priority queues do not support early insertion), (D - Because the start node has cost g(n) = 0)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Expand the deepest unexpanded node in the frontier):\nقاعدة التوسيع في البحث بالعمق أولاً (DFS) هي دائماً توسيع العقدة الأكثر عمقاً (الأعمق) غير الموسعة في الجبهة للغوص في الفروع.\n\n💡 مثال وتطبيق واقعي:\nخوارزمية DFS تشبه استكشاف متاهة بالسير في ممر واحد حتى النهاية المسدودة قبل التراجع خطوة واحدة لتجربة الممر المجاور.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Expand the shallowest unexpanded node)، (C - Expand the node with the highest heuristic value)، (D - Expand nodes in random order)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Expand the deepest unexpanded node in the frontier') is the correct choice:\nDepth-First Search (DFS) always selects the deepest unexpanded node in the frontier for expansion, driving down a branch until it hits a dead end.\n\n💡 Real-World Example & Application:\nDFS operates like exploring a maze by following a single tunnel to its dead end before backtracking one step to try another.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Expand the shallowest unexpanded node), (C - Expand the node with the highest heuristic value), (D - Expand nodes in random order)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - LIFO stack):\nتُستخدم بنية المكدس LIFO (يدخل آخراً يخرج أولاً) لإدارة الجبهة في البحث بالعمق أولاً (DFS)، مما يضمن استكشاف أحدث الفروع المتولدة أولاً.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - FIFO queue)، (C - Priority queue ordered by g(n))، (D - Binary min-heap)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'LIFO stack') is the correct choice:\nDFS utilizes a LIFO (Last-In, First-Out) stack structure for its frontier, ensuring the most recently generated deepest nodes are processed first.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - FIFO queue), (C - Priority queue ordered by g(n)), (D - Binary min-heap)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - It has a modest linear space complexity of O(bm)):\nالميزة العملية الكبرى للبحث بالعمق أولاً الشجري هي تعقيده المكاني الخطي المعتدل O(bm)، حيث لا يحتاج سوى لتخزين مسار الفرع الحالي وعقد أشقائه.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It is always guaranteed to find the optimal cost solution)، (C - It never visits redundant paths or cycles)، (D - Its time complexity is always O(d))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'It has a modest linear space complexity of O(bm)') is the correct choice:\nThe primary practical advantage of tree-like DFS is its modest linear space complexity of O(bm), storing only the current path and unexplored siblings.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It is always guaranteed to find the optimal cost solution), (C - It never visits redundant paths or cycles), (D - Its time complexity is always O(d))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Because it can follow an infinite branch or cycle forever without ever exploring other alternatives):\nيعتبر البحث بالعمق أولاً الشجري غير مكتمل في الفضاءات ذات العمق اللانهائي أو الحلقات، لأنه قد يتبع فرعاً لا نهائياً دون أن يرجع لتجربة الخيارات الأخرى.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Because the stack runs out of memory immediately)، (C - Because the goal test cannot be performed at depth greater than 10)، (D - Because step costs are strictly positive)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Because it can follow an infinite branch or cycle forever without ever exploring other alternatives') is the correct choice:\nTree-like DFS is incomplete in infinite-depth or cyclical graphs because it can get trapped following an infinite path forever without exploring alternatives.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Because the stack runs out of memory immediately), (C - Because the goal test cannot be performed at depth greater than 10), (D - Because step costs are strictly positive)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Exactly one successor):\nفي بحث التراجع (Backtracking search)، وهو البديل الموفر للذاكرة لـ DFS، يتم توليد خليفة واحد فقط في كل خطوة، مما يقلل استهلاك الذاكرة إلى O(m).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - All b successors)، (C - b / 2 successors)، (D - Zero successors)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Exactly one successor') is the correct choice:\nIn backtracking search, only a single successor node is generated at a time, keeping memory requirements down to O(m).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - All b successors), (C - b / 2 successors), (D - Zero successors)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Nodes at depth l are treated as if they have no successors):\nفي البحث محدود العمق (DLS)، عندما يصل فرع البحث إلى حد العمق المحدد مسبقاً l، تُعامل العقد عند هذا الحد وكأنها لا تمتلك أي خلفاء.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The entire program crashes with failure)، (C - The algorithm switches immediately to BFS)، (D - The heuristic function is doubled)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Nodes at depth l are treated as if they have no successors') is the correct choice:\nIn Depth-Limited Search (DLS), nodes at depth limit l are treated as having no successors, pruning any deeper exploration along that branch.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The entire program crashes with failure), (C - The algorithm switches immediately to BFS), (D - The heuristic function is doubled)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Solution node, Failure, or Cutoff):\nوفقاً لخوارزمية DLS الرسمية، فإنها تعيد إحدى ثلاث قيم محتملة: عقدة الحل إذا وُجد، أو الفشل (Failure) إذا استُنفد الفضاء، أو الانقطاع (Cutoff) إذا بلغت حد العمق.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Success, Error, Timeout)، (C - True, False, Null)، (D - Optimal, Suboptimal, Infeasible)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Solution node, Failure, or Cutoff') is the correct choice:\nDepth-Limited Search returns one of three values: a solution node, failure (no solution exists), or cutoff (depth limit was reached).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Success, Error, Timeout), (C - True, False, Null), (D - Optimal, Suboptimal, Infeasible)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - It systematically tries increasing depth limits: first 0, then 1, then 2, and so on):\nتحدد خوارزمية التعميق التكراري (IDS) حد العمق عبر زيادته تدريجياً وبشكل منهجي: تبدأ بالحد 0، ثم 1، ثم 2، وهكذا حتى تجد الحل.\n\n💡 مثال وتطبيق واقعي:\nخوارزمية IDS تعطي ميزات BFS (الأمثلية وأقصر مسار) مع ميزات DFS (استهلاك ذاكرة منخفض جداً يناسب الحواسيب المحدودة).\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It starts at infinity and decreases by 1 each step)، (C - It sets the depth limit equal to the heuristic value h(n))، (D - It generates a random depth limit between 1 and 100)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'It systematically tries increasing depth limits: first 0, then 1, then 2, and so on') is the correct choice:\nIterative Deepening Search (IDS) systematically increases the depth limit l starting from 0, then 1, 2, and so on until a goal is found.\n\n💡 Real-World Example & Application:\nIDS gives the optimality and completeness of BFS while using the tiny linear memory footprint of DFS.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It starts at infinity and decreases by 1 each step), (C - It sets the depth limit equal to the heuristic value h(n)), (D - It generates a random depth limit between 1 and 100)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - O(bd)):\nالتعقيد المكاني لخوارزمية التعميق التكراري (IDS) هو تعقيد خطي O(bd)، حيث تجمع بين كفاءة ذاكرة DFS وضمانات اكتمال وأمثلية BFS.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - O(b^d))، (C - O(d^b))، (D - O(m!))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'O(bd)') is the correct choice:\nThe space complexity of IDS is O(bd), combining the modest linear memory usage of DFS with the completeness and optimality guarantees of BFS.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - O(b^d)), (C - O(d^b)), (D - O(m!))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Because the vast majority of nodes in an exponential tree reside in the bottom level d):\nإعادة توليد العقد العليا في IDS لا يمثل هدراً كبيراً في الأشجار ذات معامل التفرع b >= 2، لأن الغالبية الساحقة من العقد توجد في الطبقة السفلية d.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Because the upper nodes are permanently stored in cache)، (C - Because the processor runs 10 times faster on repeated nodes)، (D - Because upper nodes have a cost of zero)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Because the vast majority of nodes in an exponential tree reside in the bottom level d') is the correct choice:\nRegenerating upper-level nodes in IDS is not wasteful because for b >= 2, the vast majority of nodes in an exponential tree reside in the bottom level d.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Because the upper nodes are permanently stored in cache), (C - Because the processor runs 10 times faster on repeated nodes), (D - Because upper nodes have a cost of zero)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - It simultaneously searches forward from the initial state and backward from the goal state):\nالمبدأ التشغيلي للبحث ثنائي الاتجاه (Bidirectional Search) هو البحث في وقت متزامن للأمام من الحالة الابتدائية وللخلف من حالة الهدف حتى تلتقي الجبهتان.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It runs Breadth-First Search and Depth-First Search in alternating turns)، (C - It searches the left subtree and right subtree simultaneously)، (D - It evaluates both admissible and inadmissible heuristics concurrently)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'It simultaneously searches forward from the initial state and backward from the goal state') is the correct choice:\nBidirectional search simultaneously runs two searches: forward from the initial state and backward from the goal, stopping when the two frontiers intersect.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It runs Breadth-First Search and Depth-First Search in alternating turns), (C - It searches the left subtree and right subtree simultaneously), (D - It evaluates both admissible and inadmissible heuristics concurrently)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)):\nالدافع الحسابي للبحث ثنائي الاتجاه هو تقليص وقت البحث أسيّاً، حيث يستغرق بحث جبهتين عند العمق d/2 زمناً قدره O(2 * b^(d/2)) مقارنة بـ O(b^d).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - It completely eliminates the need for sensor data)، (C - It requires zero memory because frontiers never store states)، (D - It guarantees that all heuristics become strictly consistent)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Searching two frontiers of depth d/2 takes time O(2 * b^(d/2)), which is exponentially smaller than O(b^d)') is the correct choice:\nBidirectional search drastically cuts time because expanding two frontiers to depth d/2 requires O(2 * b^(d/2)), which is exponentially smaller than O(b^d).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - It completely eliminates the need for sensor data), (C - It requires zero memory because frontiers never store states), (D - It guarantees that all heuristics become strictly consistent)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The estimated cost of the cheapest path from the state at node n to a goal state):\nتقدر الدالة الحدسية h(n) في خوارزميات البحث المستنير التكلفة المتوقعة لأرخص مسار من الحالة عند العقدة n للوصول إلى أقرب حالة هدف.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The exact cost of the path from the root node to node n)، (C - The total number of nodes currently stored in the frontier)، (D - The time required to execute the next action in seconds)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The estimated cost of the cheapest path from the state at node n to a goal state') is the correct choice:\nThe heuristic function h(n) estimates the cost of the cheapest path from the state at node n to reach a goal state.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The exact cost of the path from the root node to node n), (C - The total number of nodes currently stored in the frontier), (D - The time required to execute the next action in seconds)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - h(n) = 0):\nإذا كانت العقدة n تمثل حالة هدف صالحة، فإن التكلفة المتبقية للوصول إلى الهدف تكون صفراً بالضرورة، أي h(n) = 0.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - h(n) = 1)، (C - h(n) = infinity)، (D - h(n) = g(n))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'h(n) = 0') is the correct choice:\nBy definition, if node n is already a goal state, the estimated remaining cost to reach the goal is zero: h(n) = 0.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - h(n) = 1), (C - h(n) = infinity), (D - h(n) = g(n))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Straight-line distance (h_SLD)):\nفي مسألة خرائط رومانيا، الحدس الأكثر شيوعاً لتقدير المسافة إلى بوخارست هو مسافة الخط المستقيم الجوية (Straight-line distance / h_SLD).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Number of toll booths)، (C - Manhattan grid distance)، (D - Number of intermediate cities)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Straight-line distance (h_SLD)') is the correct choice:\nIn the Romania navigation problem, straight-line distance to Bucharest (h_SLD) is the standard heuristic used to guide search.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Number of toll booths), (C - Manhattan grid distance), (D - Number of intermediate cities)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The node that has the lowest heuristic value h(n)):\nيختار البحث الجشع بأفضلية أولاً (Greedy Best-First) لتوسيعه العقدة التي تمتلك أقل قيمة حدسية h(n)، أي التي تبدو الأقرب للهدف محلياً.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The node that has the lowest path cost g(n))، (C - The node with the largest evaluation function f(n))، (D - The node that has been in the queue the longest)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The node that has the lowest heuristic value h(n)') is the correct choice:\nGreedy Best-First Search selects the node with the lowest heuristic value h(n), expanding what appears closest to the goal in the short term.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The node that has the lowest path cost g(n)), (C - The node with the largest evaluation function f(n)), (D - The node that has been in the queue the longest)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - It greedily chooses locally promising steps (like Fagaras) that lead to longer overall routes (450 miles vs 418 miles)):\nالبحث الجشع ليس أمثل التكلفة لأنه يركز على الخطوات المغرية محلياً (مثل الذهاب إلى Fagaras) التي قد تؤدي لمسار إجمالي أطول (450 ميلاً بدلاً من 418).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It cannot handle graphs with cycles)، (C - Its priority queue reverses the order of cities)، (D - It requires straight-line distance to be negative)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'It greedily chooses locally promising steps (like Fagaras) that lead to longer overall routes (450 miles vs 418 miles)') is the correct choice:\nGreedy search is not cost-optimal because local heuristic choices can mislead the search into suboptimal paths (e.g. Arad->Fagaras->Bucharest at cost 450 vs 418).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It cannot handle graphs with cycles), (C - Its priority queue reverses the order of cities), (D - It requires straight-line distance to be negative)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - f(n) = g(n) + h(n)):\nدالة التقييم القياسية في خوارزمية A* هي f(n) = g(n) + h(n)، حيث تمثل g التكلفة الفعلية المنفقة، و h التكلفة المقدرة المتبقية.\n\n💡 مثال وتطبيق واقعي:\nخوارزمية A* تجمع بين المسافة المقطوعة فعلياً g(n) والمسافة الجوية التقديرية المتبقية للهدف h(n)، مثل تقدير GPS لوقت الوصول المتبقي.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - f(n) = g(n) - h(n))، (C - f(n) = g(n) * h(n))، (D - f(n) = max(g(n), h(n)))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'f(n) = g(n) + h(n)') is the correct choice:\nThe A* evaluation function is f(n) = g(n) + h(n), combining the cost already incurred g(n) with the estimated remaining cost h(n).\n\n💡 Real-World Example & Application:\nA* combines actual cost-so-far g(n) with estimated straight-line cost h(n), exactly like GPS ETA estimation.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - f(n) = g(n) - h(n)), (C - f(n) = g(n) * h(n)), (D - f(n) = max(g(n), h(n)))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The estimated cost of the best path that continues from the start node through node n to a goal):\nتمثل f(n) في خوارزمية A* التكلفة الإجمالية المقدرة لأرخص مسار يمر من البداية عبر العقدة n وصولاً إلى الهدف.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The exact total execution time of the algorithm)، (C - The depth of the search tree divided by branching factor b)، (D - The penalty for visiting a redundant state)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The estimated cost of the best path that continues from the start node through node n to a goal') is the correct choice:\nIn A*, f(n) represents the estimated total cost of the best solution path passing from the start node through node n to a goal.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The exact total execution time of the algorithm), (C - The depth of the search tree divided by branching factor b), (D - The penalty for visiting a redundant state)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - h(n) never overestimates the true cost to reach a goal, i.e., h(n) <= h*(n)):\nتكون الدالة الحدسية h(n) مقبولة (Admissible) إذا كانت لا تُبالغ أبداً في تقدير التكلفة الحقيقية للوصول للهدف، أي h(n) <= h*(n).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - h(n) is always greater than the true cost h*(n))، (C - h(n) is calculated in polynomial time)، (D - h(n) is an integer multiple of the branching factor)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'h(n) never overestimates the true cost to reach a goal, i.e., h(n) <= h*(n)') is the correct choice:\nA heuristic h(n) is admissible if it never overestimates the true minimal cost to achieve a goal, satisfying h(n) <= h*(n) for all n.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - h(n) is always greater than the true cost h*(n)), (C - h(n) is calculated in polynomial time), (D - h(n) is an integer multiple of the branching factor)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Optimistic):\nتُوصف الدالة الحدسية المقبولة بأنها 'متفائلة' (Optimistic) لأنها تعتقد دائماً أن تكلفة الوصول للهدف أقل أو مساوية للتكلفة الحقيقية.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Pessimistic)، (C - Random)، (D - Inconsistent)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Optimistic') is the correct choice:\nAn admissible heuristic is called optimistic because it always estimates the cost to reach the goal as being less than or equal to the true cost.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Pessimistic), (C - Random), (D - Inconsistent)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The heuristic function h(n) is admissible):\nتنص النظرية الأساسية للبحث الحدسي على أن بحث A* الشجري يضمن الوصول للحل الأمثل تكلفة إذا كانت الدالة الحدسية h(n) مقبولة (Admissible).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - The branching factor b is less than 2)، (C - The state space is finite and acyclic)، (D - All action costs are equal to zero)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The heuristic function h(n) is admissible') is the correct choice:\nTree-search A* is guaranteed to be cost-optimal if the heuristic function h(n) is admissible.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - The branching factor b is less than 2), (C - The state space is finite and acyclic), (D - All action costs are equal to zero)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - h(n) <= c(n, a, n') + h(n')):\nتكون الدالة الحدسية متسقة (Consistent / Monotonic) إذا تحقق لكل عقدة وخليفتها: h(n) <= c(n, a, n') + h(n').\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - h(n) >= c(n, a, n') + h(n'))، (C - h(n) = c(n, a, n'))، (D - h(n) + h(n') <= c(n, a, n'))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'h(n) <= c(n, a, n') + h(n')') is the correct choice:\nA heuristic is consistent (or monotonic) if for every node n and successor n' via action a, h(n) <= c(n, a, n') + h(n').\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - h(n) >= c(n, a, n') + h(n')), (C - h(n) = c(n, a, n')), (D - h(n) + h(n') <= c(n, a, n'))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Triangle inequality):\nشرط الاتساق الحدسي h(n) <= c(n, a, n') + h(n') هو تطبيق رياضي مباشر لمتباينة المثلث (Triangle inequality) في الهندسة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Pythagorean theorem)، (C - Cauchy-Schwarz inequality)، (D - Central limit theorem)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Triangle inequality') is the correct choice:\nHeuristic consistency is a direct application of the triangle inequality, stating that one side of a triangle cannot exceed the sum of the other two sides.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Pythagorean theorem), (C - Cauchy-Schwarz inequality), (D - Central limit theorem)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Every consistent heuristic is admissible, but not every admissible heuristic is consistent):\nكل دالة حدسية متسقة هي بالضرورة دالة مقبولة، ولكن ليست كل دالة مقبولة متسقة؛ فالاتساق شرط أشد صرامة من القبول.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Every admissible heuristic is consistent, but not vice versa)، (C - Consistency and admissibility are completely mutually exclusive)، (D - An admissible heuristic can never satisfy the triangle inequality)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Every consistent heuristic is admissible, but not every admissible heuristic is consistent') is the correct choice:\nEvery consistent heuristic is admissible, but an admissible heuristic is not necessarily consistent (consistency is a strictly stronger condition).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Every admissible heuristic is consistent, but not vice versa), (C - Consistency and admissibility are completely mutually exclusive), (D - An admissible heuristic can never satisfy the triangle inequality)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - All reachable nodes with f(n) < C*):\nعند استخدام حدس متسق، تضمن خوارزمية A* توسيع جميع العقد التي تحقق f(n) < C*، حيث C* هي تكلفة المسار الأمثل.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - All nodes with f(n) > C*)، (C - Only nodes whose depth is less than d/2)، (D - Every node in the state space graph)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'All reachable nodes with f(n) < C*') is the correct choice:\nWith a consistent heuristic, A* is guaranteed to expand all reachable nodes whose evaluation function satisfies f(n) < C*.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - All nodes with f(n) > C*), (C - Only nodes whose depth is less than d/2), (D - Every node in the state space graph)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - No other optimal search algorithm using the same heuristic can expand fewer nodes (up to tie- breaking)):\nتُوصف A* بالاتساق بأنها 'مثالية الكفاءة' (Optimally efficient) لأنه لا توجد خوارزمية أمثلية أخرى بنفس الحدس يمكنها توسيع عدد عقد أقل دون كسر الأمثلية.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It uses less memory than Depth-First Search)، (C - Its run time is strictly linear in the solution depth d)، (D - It never computes the value of g(n))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'No other optimal search algorithm using the same heuristic can expand fewer nodes (up to tie- breaking)') is the correct choice:\nA* with a consistent heuristic is optimally efficient because no optimal search algorithm using the same heuristic can expand fewer nodes.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It uses less memory than Depth-First Search), (C - Its run time is strictly linear in the solution depth d), (D - It never computes the value of g(n))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Number of misplaced tiles (excluding the blank)):\nفي أحجية الأرقام الثمانية، تُعرَّف الدالة h1(n) بأنها عدد الألواح غير الموجودة في موضعها الصحيح مقارنة بالهدف (مع استبعاد الفراغ).\n\n💡 مثال وتطبيق واقعي:\nفي لغز الأرقام المنزلقة (8-puzzle): حدسية h1 تعد فقط عدد الأرقام غير الموجودة في مربعها الصحيح.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Sum of horizontal and vertical distances of tiles from their goal positions)، (C - Total number of legal moves available to the blank)، (D - Direct straight-line Euclidean distance)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Number of misplaced tiles (excluding the blank)') is the correct choice:\nIn the 8-puzzle, heuristic h1(n) is defined as the number of misplaced tiles (excluding the blank space).\n\n💡 Real-World Example & Application:\nIn the 8-puzzle: heuristic h1 simply counts the number of misplaced number tiles.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Sum of horizontal and vertical distances of tiles from their goal positions), (C - Total number of legal moves available to the blank), (D - Direct straight-line Euclidean distance)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The sum of horizontal and vertical grid steps each tile must take to reach its goal square):\nتحسب حدسية مانهاتن h2(n) مجموع مسافات الخطوات الأفقية والرأسية المطلوبة لتحريك كل لوح من موضعه الحالي إلى موضعه المستهدف.\n\n💡 مثال وتطبيق واقعي:\nحدسية مانهاتن h2 تحسب عدد خطوات الشبكة الأفقية والرأسية المطلوبة لإيصال كل رقم لمكانه كأن لا توجد ألواح تعيقه.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The number of tiles currently in their exact goal squares)، (C - The straight-line diagonal Euclidean distance of all tiles)، (D - The product of row and column indices for each tile)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The sum of horizontal and vertical grid steps each tile must take to reach its goal square') is the correct choice:\nThe Manhattan distance heuristic h2(n) sums the horizontal and vertical grid distances each tile must travel to reach its goal position.\n\n💡 Real-World Example & Application:\nManhattan distance h2 measures the exact horizontal + vertical grid steps each tile must travel to reach its home square.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The number of tiles currently in their exact goal squares), (C - The straight-line diagonal Euclidean distance of all tiles), (D - The product of row and column indices for each tile)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - h2 dominates h1):\nإذا كانت h1 و h2 مقبولين، وكانت h2(n) >= h1(n) لجميع العقد، فإننا نقول رياضياً إن الحدسية h2 تهيمن على h1 (Dominates).\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - h1 dominates h2)، (C - h2 is inadmissible)، (D - h1 is strictly monotonic)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'h2 dominates h1') is the correct choice:\nIf h1 and h2 are both admissible and h2(n) >= h1(n) for all nodes n, we say that h2 dominates h1.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - h1 dominates h2), (C - h2 is inadmissible), (D - h1 is strictly monotonic)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - A* using h2 will never expand more nodes than A* using h1 (except for tie-breaking)):\nيُفضل الحدس المهيمن h2 لأنه يضمن أن A* لن توسع أبداً عقداً أكثر مما توسعها باستخدام h1، مما يقلل الجهد الحسابي ويسرع البحث.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - h2 requires less memory to store)، (C - h2 guarantees that branching factor b becomes 1)، (D - h2 eliminates the need to calculate path costs g(n))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'A* using h2 will never expand more nodes than A* using h1 (except for tie-breaking)') is the correct choice:\nA dominant heuristic h2 is preferred because A* using h2 will never expand more nodes than A* using h1 (except possibly during tie-breaking).\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - h2 requires less memory to store), (C - h2 guarantees that branching factor b becomes 1), (D - h2 eliminates the need to calculate path costs g(n))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Relaxed problem):\nالمشكلة المسترخية (Relaxed problem) هي مشكلة مشتقة من المشكلة الأصلية عن طريق إزالة قيود معينة على الأفعال المسموح بها، مما يجعل حلها أسهل.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Bounded problem)، (C - Factored problem)، (D - Dual problem)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Relaxed problem') is the correct choice:\nA relaxed problem is derived by dropping one or more constraints on actions from the original problem definition.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Bounded problem), (C - Factored problem), (D - Dual problem)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Because removing action constraints adds edges to the state graph, creating shortcuts that can never increase the optimal cost):\nتكلفة حل المشكلة المسترخية مقبولة دائماً لأن إزالة القيود تضيف مسارات مختصرة جديدة في المخطط، مما لا يمكن أن يزيد تكلفة الحل عن الأصل إطلاقاً.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Because relaxed problems have no goal states)، (C - Because relaxed problems can only be solved using depth-first search)، (D - Because all heuristics generated by relaxation equal zero)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Because removing action constraints adds edges to the state graph, creating shortcuts that can never increase the optimal cost') is the correct choice:\nThe optimal solution cost of a relaxed problem is admissible because relaxing constraints adds edges, which can never increase the minimum path cost.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Because relaxed problems have no goal states), (C - Because relaxed problems can only be solved using depth-first search), (D - Because all heuristics generated by relaxation equal zero)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - h(n) = max{h1(n), h2(n), ..., hk(n)}):\nعند توفر عدة حدسيات مقبولة، فإن دالة الحدس المهيمنة المجمعة والمقبولة دائماً هي دالة القيمة العظمى: h(n) = max{h1(n), h2(n), ..., hk(n)}.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - h(n) = min{h1(n), h2(n), ..., hk(n)})، (C - h(n) = h1(n) * h2(n) * ... * hk(n))، (D - h(n) = (h1(n) + h2(n) + ... + hk(n)) / k)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'h(n) = max{h1(n), h2(n), ..., hk(n)}') is the correct choice:\nGiven multiple admissible heuristics, they can be combined into a dominant admissible heuristic using the maximum: h(n) = max{h1(n), ..., hk(n)}.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - h(n) = min{h1(n), h2(n), ..., hk(n)}), (C - h(n) = h1(n) * h2(n) * ... * hk(n)), (D - h(n) = (h1(n) + h2(n) + ... + hk(n)) / k)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Pattern database):\nقاعدة بيانات الأنماط (Pattern database) هي جدول بحث يخزن التكاليف المحسوبة مسبقاً لحلول جميع التهيئات الفرعية الممكنة للمسألة لاستخدامها كحدسيات فائقة الدقة.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Frontier queue)، (C - Reached table)، (D - Landmark cache)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Pattern database') is the correct choice:\nA pattern database is a lookup table storing exact precomputed solution costs for all possible configurations of abstract subproblems.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Frontier queue), (C - Reached table), (D - Landmark cache)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - To trade off solution optimality for a significant reduction in the number of expanded nodes):\nبحث A* الموزون (Weighted A*) يستخدم وزناً W > 1 على h(n) لمقايضة أمثلية الحل بحد أقصى W مقابل تقليص هائل في عدد العقد الموسعة وزمن البحث.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - To ensure that the heuristic becomes strictly consistent)، (C - To eliminate the need for priority queues)، (D - To convert graph search into tree search)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'To trade off solution optimality for a significant reduction in the number of expanded nodes') is the correct choice:\nWeighted A* search uses W > 1 to trade off strict solution optimality for a dramatic reduction in the number of expanded nodes and search time.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - To ensure that the heuristic becomes strictly consistent), (C - To eliminate the need for priority queues), (D - To convert graph search into tree search)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The worst leaf node, which has the highest f-value):\nعند امتلاء الذاكرة بالكامل، تقوم خوارزمية SMA* بحذف أسوأ عقدة ورقية من شجرة البحث، وهي العقدة التي تمتلك أعلى قيمة تقييم f.\n\n💡 مثال وتطبيق واقعي:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The root node of the tree)، (C - The newest child node with the lowest g-value)، (D - All nodes residing at depth d)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The worst leaf node, which has the highest f-value') is the correct choice:\nWhen memory is exhausted, SMA* drops the worst leaf node from the search tree—the one having the highest f-value.\n\n💡 Real-World Example & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The root node of the tree), (C - The newest child node with the lowest g-value), (D - All nodes residing at depth d)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث توصيف مسألة البحث رياضياً يتطلب العناصر الخمسة: الحالة الابتدائية، الأفعال ACTIONS(s)، دالة الانتقال RESULT(s,a)، اختبار الهدف GOAL-TEST(s)، ودالة التكلفة STEP-COST(s,a,s'). 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: A search problem requires: Initial State, Action set, Transition Model, Goal Test predicate, and Path/Step Cost function. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث في البيئات غير الحتمية أو غير الملاحظة بالكامل، لا يمكن استخدام نظام مفتوح (open-loop) دون قراءة الحواس، بل يلزم نظام مغلق (closed-loop) للتحقق من نجاح الأفعال. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: In nondeterministic or partially observable environments, an agent cannot safely execute open-loop; percepts must be monitored (closed-loop execution). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث فضاء الحالات يصف تكوينات العالم، وشجرة البحث تصف مسارات الوصول إليها؛ فإذا وُجد أكثر من مسار لنفس الحالة المادية، فستتولد لها عقد متعددة في شجرة البحث. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Multiple distinct search paths reaching the same physical state generate multiple separate tree nodes in a search tree. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث عقدة الشجرة تحتوي على مؤشر العقدة الأم (Parent pointer) الذي يسمح للخوارزمية بالرجوع إلى الوراء من الهدف إلى الجذر لإعادة بناء تسلسل الأفعال المكون للحل. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: The parent pointer in each search node links back to its predecessor, enabling backward trajectory tracing to reconstruct the solution. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث خوارزميات بحث المخططات تحتفظ بجدول الحالات التي تم الوصول إليها (Reached table / Closed list) لمنع إعادة استكشاف الحالات وإهدار الجهد في دورات مفرغة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Graph search maintains a reached table/closed list to prune redundant paths and eliminate cyclic infinite loops. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Tree-like search uses more memory than graph search because it maintains both an open list and a closed list of reached states. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Tree-like search uses more memory than graph search because it maintains both an open list and a closed list of reached states.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث البحث بالعرض أولاً يستكشف المستويات تدريجياً؛ وإذا كان معامل التفرع b محدوداً، فإن عدد العقد عند كل عمق يكون محدوداً، مما يضمن وصول الخوارزمية للحل عند أي عمق d محدود. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: BFS systematically searches by increasing depth. If b is finite, every depth d contains a finite number of nodes, guaranteeing goal discovery at finite depth. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Breadth-First Search is always cost-optimal, regardless of whether step action costs are identical or widely different. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Breadth-First Search is always cost-optimal, regardless of whether step action costs are identical or widely different.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث كل طبقة في شجرة BFS تتضاعف بمعامل التفرع b؛ وللوصول إلى العمق d يتم توليد وتخزين b^d عقدة في الجبهة، مما يجعل الزمان والمكان O(b^d). 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Branching multiplies nodes at each level, the frontier at depth d contains b^d nodes, yielding O(b^d) time and memory complexity. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث البحث بالتكلفة الموحدة (UCS) يستخدم طابور أولوية مرتباً بتكلفة المسار g(n)، مما يضمن استخراج وتوسيع المسارات الأرخص تكلفة أولاً بأول. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: UCS uses a priority queue ordered by path cost g(n), ensuring the algorithm always expands the globally cheapest unexpanded path first. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن If Uniform-Cost Search applies an early goal test upon generating a node, it is still guaranteed to return the cost-optimal solution. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'If Uniform-Cost Search applies an early goal test upon generating a node, it is still guaranteed to return the cost-optimal solution.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Depth-First Search is cost-optimal because it always explores the deepest leaves first. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Depth-First Search is cost-optimal because it always explores the deepest leaves first.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث البحث بالعمق أولاً يحفظ في ذاكرته فقط مسار الفرع الحالي النشط والعقد الشقيقة غير المستكشفة على طول المسار، مما يعطي تعقيداً خطياً O(bm). 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Tree-like DFS only retains the single active branch from root to leaf plus unexpanded siblings, requiring modest O(bm) linear memory. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث بحث التراجع (Backtracking) يولد خليفة واحداً فقط في كل خطوة ويعدل الحالة في مكانها، فيستهلك مساحة تخزين تكفي حالة واحدة ومسار أفعال بطول O(m). 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Backtracking generates one successor at a time and modifies states in-place, reducing memory to a single state and path of length O(m). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Depth-Limited Search is complete even if the chosen depth limit l is smaller than the depth d of the optimal solution. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Depth-Limited Search is complete even if the chosen depth limit l is smaller than the depth d of the optimal solution.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث خوارزمية IDS تنفذ DFS محدود العمق بتكلفة ذاكرة خطية O(bd)، مع زيادة الحد تدريجياً للعثور على أقصر مسار حل كما يفعل BFS تماماً. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: IDS combines DFS's linear O(bd) memory efficiency with BFS's level-by-level completeness and shallowest-depth optimality. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث البحث ثنائي الاتجاه يعمل من البداية نحو الهدف والعكس، فيتطلب جبهتين (Frontiers) وجدولي حالات تم الوصول إليها (Reached tables) لرصد نقطة التقاء المسارين. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Bidirectional search runs forward from the start and backward from the goal, requiring two separate frontiers and reached tables to detect intersection. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث البحث الجشع بأفضلية أولاً يركز كلياً على تقدير المسافة المتبقية نحو الهدف، فيستخدم الدالة f(n) = h(n) لتوسيع العقدة التي تبدو الأقرب للهدف محلياً. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Greedy Best-First Search evaluates nodes purely by their estimated distance to the goal, setting f(n) = h(n). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Greedy Best-First Search is guaranteed to be cost-optimal because it always expands the node that appears closest to the goal. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Greedy Best-First Search is guaranteed to be cost-optimal because it always expands the node that appears closest to the goal.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث خوارزمية A* تجمع بين التكلفة الفعلية المنفقة g(n) والتكلفة التقديرية المتبقية h(n) لتقدير التكلفة الإجمالية الأرخص للمسار المار عبر العقدة n. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: A* uses f(n) = g(n) + h(n), estimating total path cost by summing cost-so-far g(n) with estimated remaining cost h(n). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث دالة الهيورستك المقبولة (Admissible) لا تبالغ أبداً في تقدير التكلفة للوصول للهدف، أي h(n) <= h*(n). 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: An admissible heuristic never overestimates the true cost to reach the goal. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\nالعبارة صحيحة تماماً؛ حيث يُعرَّف الاتساق رياضياً بمتباينة المثلث: h(n) <= c(n, a, n') + h(n') لكل عقدة n وخليفتها n'.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\nHeuristic consistency requires that for every node n and successor n' via action a, the triangle inequality h(n) <= c(n, a, n') + h(n') holds.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\nالعبارة صحيحة تماماً؛ فكل دالة متسقة هي بالضرورة مقبولة، ولكن يمكن إيجاد دوال مقبولة تخالف شرط الاتساق على بعض الفروع.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\nConsistency is a strictly stronger condition than admissibility: every consistent heuristic is admissible, but the reverse is not always true.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث استخدام حدس متسق ومقبول يضمن أن جميع العقد ذات التكلفة f(n) < C* تُوسع أولاً، وتتوقف الخوارزمية بمجرد سحب الهدف ذي التكلفة C* دون فحص أي عقدة ذات f(n) > C*. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: A* with an admissible/consistent heuristic prunes the search space by never expanding any node whose estimated f-cost strictly exceeds the optimal goal cost C*. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث كل خطوة نقل للبلاطة تغير موضعها بمقدار مربع أفقي أو رأسي واحد كحد أقصى، فلا يمكن تقليص مسافة مانهاتن بأكثر من خطوة واحدة لكل حركة، مما يمنع المبالغة في التقدير. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Any physical tile slide moves one tile by exactly 1 grid step; hence Manhattan distance can never decrease by more than 1 per move, guaranteeing admissibility. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث هيمنة h2 تعني h2(n) >= h1(n)، مما يرفع قيمة f(n) ويجعلها أقرب لـ C*، فيؤدي لتقليص مساحة البحث وتوسيع عدد عقد أقل أو مساوٍ لـ h1. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Dominance (h2 >= h1) gives tighter lower bounds on true costs, pruning more suboptimal nodes and ensuring A* expands no more nodes than with h1. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث دالة القيمة العظمى max تأخذ التقدير الأدق والأعلى بين الحدسين المقبولين دون تجاوز التكلفة الحقيقية، فتضمن القبول والهيمنة على كليهما. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: If h1(n) <= h*(n) and h2(n) <= h*(n), then max(h1, h2) <= h*(n); it remains admissible while being pointwise >= both, dominating them. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث إزالة القيود من المسألة تضيف مسارات جديدة بديلة، مما لا يمكن أن يزيد تكلفة الحل عن المسألة الأصلية، فيكون حل المسألة المسترخية حداً أدنى آمناً ومقبولاً. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Relaxing constraints adds legal transitions, which can never increase optimal path cost, guaranteeing an admissible lower bound. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Weighted A* search with weight W > 1 is guaranteed to find the strictly cost-optimal solution in every search problem. لا يتوافق مع الأسس العلمية في Chapter 3: Solving Problems by Searching. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Weighted A* search with weight W > 1 is guaranteed to find the strictly cost-optimal solution in every search problem.' is incorrect according to the standard principles in AIMA (Chapter 3: Solving Problems by Searching). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث خوارزمية SMA* عند ضيق الذاكرة قد تقع في ظاهرة التخبط (thrashing) بإعادة توليد وحذف العقد نفسها باستمرار. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nتطبيقات الملاحة وتخطيط حركة الروبوتات في المستودعات تعتمد هذا المبدأ لحساب المسارات واختيار أفضل خطة بديلة بأقل تكلفة.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Memory-bounded algorithms like SMA* can suffer from thrashing when memory is insufficient to retain search paths. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nNavigation apps and warehouse robot planners rely on this search strategy to compute obstacle-free paths with minimal operational cost."
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
    "explanationAr": "🎯 سبب اختيار (B - Thought processes/reasoning vs Behavior, and Human performance vs Ideal rationality):\nتُنظَّم تعريفات الذكاء الاصطناعي في AIMA تاريخياً ضمن مصفوفة ثنائية الأبعاد: بُعد (التفكير مقابل السلوك)، وبُعد (الأداء البشري مقابل العقلانية المثالية).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Hardware vs Software, and Theory vs Practice)، (C - Symbolic systems vs Connectionist systems, and Supervised vs Unsupervised)، (D - Discrete time vs Continuous time, and Single-agent vs Multi-agent)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Thought processes/reasoning vs Behavior, and Human performance vs Ideal rationality') is the correct choice:\nAI definitions are historically mapped across two dimensions: thought processes/reasoning vs. behavior, and human performance vs. ideal rationality.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Hardware vs Software, and Theory vs Practice), (C - Symbolic systems vs Connectionist systems, and Supervised vs Unsupervised), (D - Discrete time vs Continuous time, and Single-agent vs Multi-agent)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The Imitation Game (Turing Test)):\nجسد آلان تورينج مدخل 'التصرف كالبشر' (Acting Humanly) عام 1950 عبر 'لعبة المحاكاة' (اختبار تورينج)، كمعيار عملي لقياس الذكاء عبر محادثة نصية.\n\n💡 مثال وتطبيق واقعي:\nاختبار تورينج يقيس ما إذا كان روبوت محادثة نصية يستطيع مجاراة إنسان في الحوار بحيث يعجز المحاور البشري عن التمييز بينهما.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The Chinese Room argument)، (C - The Winograd Schema Challenge)، (D - The Voight-Kampff test)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The Imitation Game (Turing Test)') is the correct choice:\nAlan Turing operationalized the 'Acting Humanly' approach in 1950 through his Imitation Game (the Turing Test), assessing conversational indistinguishability from a human.\n\n💡 Real-World Example & Application:\nThe Turing Test evaluates whether a text-based conversational bot can converse so naturally that an interrogator cannot distinguish it from a human.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The Chinese Room argument), (C - The Winograd Schema Challenge), (D - The Voight-Kampff test)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Physical Robotic Manipulation):\nلا يتطلب اختبار تورينج القياسي عبر الشاشة النصية أي قدرات روبوتية مادية (Robotic Manipulation)؛ فالهدف هو اختبار الذكاء التجريدي بمعزل عن الجسد المادي.\n\n💡 مثال وتطبيق واقعي:\nاختبار تورينج القياسي يجري عبر شاشة نصية معزولة؛ لذا لا يحتاج الروبوت لذراع ميكانيكية أو جسد فيزيائي للمشاركة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Natural Language Processing (NLP))، (B - Knowledge Representation)، (D - Machine Learning)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Physical Robotic Manipulation') is the correct choice:\nThe standard teletype Turing Test deliberately excludes Physical Robotic Manipulation, testing intellectual capabilities without physical embodiment.\n\n💡 Real-World Example & Application:\nThe standard Turing Test operates purely via teletype/screen; physical robotic arms or legs are completely unnecessary.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Natural Language Processing (NLP)), (B - Knowledge Representation), (D - Machine Learning)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Computer Vision and Robotics):\nيتطلب اختبار تورينج الشامل (Total Turing Test) إضافتين جوهريتين للاختبار القياسي: الرؤية الحاسوبية (Computer Vision) لإدراك الأشياء، والروبوتات (Robotics) للتعامل معها ماديّاً.\n\n💡 مثال وتطبيق واقعي:\nاختبار تورينج الشامل (Total Turing Test) يضيف الرؤية الحاسوبية والروبوتات لاختبار قدرة الآلة على رؤية الأشياء ولمسها في الواقع.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Calculus and Theorem Proving)، (C - Speech synthesis and Web searching)، (D - Quantum computing and Cloud storage)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Computer Vision and Robotics') is the correct choice:\nThe Total Turing Test requires two additional capabilities beyond the standard test: Computer Vision (to perceive objects) and Robotics (to manipulate physical objects).\n\n💡 Real-World Example & Application:\nThe Total Turing Test adds Computer Vision and Robotics to test physical perception and object manipulation.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Calculus and Theorem Proving), (C - Speech synthesis and Web searching), (D - Quantum computing and Cloud storage)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Cognitive Science):\nيرتكز مدخل 'التفكير كالبشر' (Thinking Humanly) على مطابقة البرامج الحسابية مع السلوك البشري التجريبي عبر حقل 'العلوم الاستعرافية' (Cognitive Science).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Operations Research)، (C - Quantum Mechanics)، (D - Control Theory)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Cognitive Science') is the correct choice:\nThe 'Thinking Humanly' approach relies on Cognitive Science, which combines computer models with experimental psychology techniques to study the human mind.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Operations Research), (C - Quantum Mechanics), (D - Control Theory)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (D - Measuring processor clock speeds and memory voltage):\nقياس تردد المعالج وسرعة الفولتية ليس من طرق علم النفس الاستعرافي؛ فالطرق الثلاث المعتمدة هي: الاستبطان الذاتي، والتجارب النفسية، والتصوير الدماغي العصبي.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Introspection (catching our own thoughts as they go by))، (B - Psychological experiments (observing people in action))، (C - Brain imaging (observing the neurological brain in action))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (D - 'Measuring processor clock speeds and memory voltage') is the correct choice:\nMeasuring clock speeds and voltage is purely computer hardware profiling; the three cognitive science methods are introspection, psychological experiments, and brain imaging.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Introspection (catching our own thoughts as they go by)), (B - Psychological experiments (observing people in action)), (C - Brain imaging (observing the neurological brain in action))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Aristotle):\nتعود جذور مدخل 'التفكير العقلاني' (Thinking Rationally) إلى تقاليد 'قوانين الفكر' والقياس المنطقي (Syllogisms) التي وضعها الفيلسوف اليوناني أرسطو.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Socrates)، (C - Pythagoras)، (D - Epicurus)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Aristotle') is the correct choice:\nThe 'Thinking Rationally' tradition originated with Aristotle's syllogisms, which initiated the formal 'laws of thought' approach to deductive reasoning.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Socrates), (C - Pythagoras), (D - Epicurus)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable):\nيواجه المدخل المنطقي الصارم عقبتين عمليتين: صعوبة تحويل معارف العالم الواقعي غير المؤكدة إلى رموز منطقية، والاستعصاء الحسابي للاستدلال المنطقي في المسائل الكبيرة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Computers cannot perform logical operations like AND and OR)، (C - Aristotelian syllogisms only function in continuous environments)، (D - Formal logic cannot be implemented using programming languages)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Stating informal real-world knowledge in formal logic terms is extremely difficult, and deductive reasoning can be computationally intractable') is the correct choice:\nThe logicist approach struggles because formalizing informal world knowledge is extremely hard, and pure deductive reasoning can be computationally intractable.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Computers cannot perform logical operations like AND and OR), (C - Aristotelian syllogisms only function in continuous environments), (D - Formal logic cannot be implemented using programming languages)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Acting Rationally (The rational agent approach)):\nالمدخل الأساسي المعتمد في كتاب AIMA كإطار تنظيمي مركزي شامل هو 'التصرف بعقلانية' عبر تصميم الوكلاء العقلانيين (Rational Agents).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Thinking Humanly (Cognitive modeling))، (B - Acting Humanly (Turing test imitation))، (D - Thinking Rationally (Pure deductive logic))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Acting Rationally (The rational agent approach)') is the correct choice:\nAIMA adopts 'Acting Rationally' (the rational agent approach) as its core organizing framework because it is more general and operationally well-defined.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Thinking Humanly (Cognitive modeling)), (B - Acting Humanly (Turing test imitation)), (D - Thinking Rationally (Pure deductive logic))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty):\nيتفوق مدخل الوكيل العقلاني لأن الاستنتاج المنطقي هو مجرد آلية واحدة من بين عدة آليات لتحقيق العقلانية، مما يسمح بالسلوكيات المنعكسة واتخاذ القرارات تحت ظروف عدم اليقين.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - It completely eliminates the need for mathematical representations)، (C - Rational agents do not require sensors or actuators)، (D - It guarantees that algorithms always run in O(1) constant time)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Correct logical inference is only one of several possible mechanisms for achieving rationality, allowing for reflex actions and actions under uncertainty') is the correct choice:\nThe rational agent approach is superior because logical inference is only one mechanism for rationality, accommodating reflex actions and decisions under uncertainty.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - It completely eliminates the need for mathematical representations), (C - Rational agents do not require sensors or actuators), (D - It guarantees that algorithms always run in O(1) constant time)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Optimize an objective or utility function specified by its human designers):\nيُعرَّف 'النموذج القياسي' للذكاء الاصطناعي بأن الوكيل يُصمَّم لتحسين وتحقيق أقصى قيمة لدالة هدف أو منفعة محددة مسبقاً من قِبل مصمميه البشريين.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Experience human emotional states)، (C - Disobey human commands whenever energy is low)، (D - Pass the Turing Test in a minimum of five different languages)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Optimize an objective or utility function specified by its human designers') is the correct choice:\nThe 'standard model' of AI envisions an agent designed to optimize a fixed objective or utility function specified by its human designers.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Experience human emotional states), (C - Disobey human commands whenever energy is low), (D - Pass the Turing Test in a minimum of five different languages)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences):\nتكمن معضلة الملك ميداس (King Midas problem) في أن النظام فائق القدرة قد يحسن دالة هدف غير دقيقة أو معيبة حرفياً، مما يؤدي إلى عواقب كارثية غير مقصودة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Machines will become too slow to process speech)، (C - Silicon processors will melt when running deep neural networks)، (D - Agents will refuse to accept any objectives from users)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'If we specify the wrong objective function, a super-capable agent will optimize that flawed objective with potentially catastrophic consequences') is the correct choice:\nThe King Midas problem warns that if we specify the wrong objective, a highly capable autonomous agent will optimize that flawed goal with catastrophic unintended consequences.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Machines will become too slow to process speech), (C - Silicon processors will melt when running deep neural networks), (D - Agents will refuse to accept any objectives from users)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - 5 minutes):\nفي بروتوكول اختبار تورينج الأصلي لعام 1950، يقضي المحاور البشري مدة 5 دقائق في المحادثة النصية قبل أن يصدر حكمه عما إذا كان الطرف الآخر إنساناً أم آلة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - 1 hour)، (C - 24 hours)، (D - 10 seconds)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - '5 minutes') is the correct choice:\nIn Turing's original 1950 formulation, the interrogator was given 5 minutes of conversational interaction before judging machine vs. human identity.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - 1 hour), (C - 24 hours), (D - 10 seconds)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - AI researchers focus on studying the underlying principles of intelligence and solving real problems, analogous to how aeronautical engineering focuses on aerodynamics rather than copying birds):\nيركز باحثو الذكاء الاصطناعي على دراسة المبادئ العميقة للذكاء وحل المسائل الواقعية، تماماً كما تركز هندسة الطيران على قوانين الديناميكا الهوائية بدلاً من تقليد ريش الطيور.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The test has already been officially solved by pocket calculators)، (C - Passing the Turing Test is illegal under international law)، (D - The Turing Test only applies to analog computers)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'AI researchers focus on studying the underlying principles of intelligence and solving real problems, analogous to how aeronautical engineering focuses on aerodynamics rather than copying birds') is the correct choice:\nResearchers focus on underlying principles of rational decision-making rather than mimicking human idiosyncrasies, just as aeronautics studies aerodynamics rather than bird feathers.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The test has already been officially solved by pocket calculators), (C - Passing the Turing Test is illegal under international law), (D - The Turing Test only applies to analog computers)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Automated Reasoning):\nيُطلق مصطلح 'الاستدلال الآلي' (Automated Reasoning) على قدرة النظام على استخدام المعلومات المخزنة للإجابة عن التساؤلات واستخلاص استنتاجات ومعارف جديدة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Computer Vision)، (C - Robotics)، (D - Natural Language Processing)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Automated Reasoning') is the correct choice:\nAutomated Reasoning is the capability to use stored knowledge to answer queries and derive logically sound new conclusions.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Computer Vision), (C - Robotics), (D - Natural Language Processing)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - To adapt to new circumstances and detect and extrapolate patterns):\nيُعد التعلم الآلي (Machine Learning) ضرورياً في اختبار تورينج لتمكين الوكيل من التكيف مع المواقف والظروف الجديدة واكتشاف الأنماط واستقرائها من التجارب.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - To power its cooling fans)، (C - To calculate mathematical square roots in hardware)، (D - To convert AC power to DC power)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'To adapt to new circumstances and detect and extrapolate patterns') is the correct choice:\nMachine Learning is essential for passing the Turing Test because an intelligent agent must adapt to novel scenarios and extrapolate patterns from experience.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - To power its cooling fans), (C - To calculate mathematical square roots in hardware), (D - To convert AC power to DC power)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Does the 'right thing' based on what it knows and its performance measure):\nيُعرَّف النظام بأنه عقلاني (Rational) إذا كان يفعل 'الشيء الصحيح' الذي يحقق أفضل نتيجة متوقعة استناداً إلى ما يدركه من معلومات ومعيار الأداء المحدد له.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Replicates human mistakes and biases)، (C - Runs exclusively on quantum hardware)، (D - Discards all past percept history)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Does the 'right thing' based on what it knows and its performance measure') is the correct choice:\nA system is defined as rational if it takes actions that maximize expected success given its perceptions and its specified performance measure.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Replicates human mistakes and biases), (C - Runs exclusively on quantum hardware), (D - Discards all past percept history)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits):\nالتفكير البشري ليس عقلانياً دائماً بسبب خضوعه للتحيزات المعرفية المنهجية (Cognitive biases)، والتأثيرات العاطفية، والمحدودية الحسابية لقدرات الدماغ المعرفية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Humans do not possess biological brains)، (C - Humans cannot communicate in natural language)، (D - Human memory capacity is mathematically zero)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Human reasoning is subject to systematic cognitive biases, emotional distortions, and computational resource limits') is the correct choice:\nHuman thought is not strictly rational because human cognition is subject to systematic psychological biases, emotional heuristics, and bounded computational limits.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Humans do not possess biological brains), (C - Humans cannot communicate in natural language), (D - Human memory capacity is mathematically zero)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Dualism):\nالمذهب الفلسفي الذي وضعه رينيه ديكارت والذي يفترض أن العقل كيان غير مادي منفصل جوهرياً عن الجسد المادي يُعرف بـ 'الثنائية' (Dualism).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Materialism)، (C - Positivism)، (D - Empiricism)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Dualism') is the correct choice:\nDescartes' philosophical doctrine positing that the mind is an immaterial substance fundamentally distinct from the physical body is Dualism.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Materialism), (C - Positivism), (D - Empiricism)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Materialism (or Physicalism)):\nتذهب المدرسة 'المادية' أو 'الفيزيائية' (Materialism / Physicalism) إلى أن عمليات الدماغ التي تخضع لقوانين الفيزياء والكيمياء هي بذاتها التي تُشكل وتولد العقل.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Solipsism)، (C - Rationalism)، (D - Existentialism)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Materialism (or Physicalism)') is the correct choice:\nMaterialism (Physicalism) asserts that the operations of the physical brain operating according to physical laws constitute all mental processes.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Solipsism), (C - Rationalism), (D - Existentialism)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Empiricism):\nتُعرف الحركة الفلسفية التي أطلقها جون لوك بمقولته 'لا شيء في العقل لم يكن أولاً في الحواس' بالمذهب التجريبي (Empiricism).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Idealism)، (C - Nativism)، (D - Skepticism)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Empiricism') is the correct choice:\nEmpiricism, championed by John Locke, asserts that all understanding and knowledge originate directly from sensory perception.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Idealism), (C - Nativism), (D - Skepticism)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - How general rules and future predictions can be justified on the basis of a finite number of past observations):\nحلل ديفيد هيوم 'مبدأ الاستقراء' طارحاً التساؤل الجوهري للتعلم الآلي: كيف يمكن تبرير القواعد العامة والتنبؤات المستقبلية استناداً إلى عدد محدود من الملاحظات الماضية؟\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - How electrical currents induce magnetic fields in computer disks)، (C - Why binary logic cannot represent decimal fractions)، (D - How processors maintain clock synchronization)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'How general rules and future predictions can be justified on the basis of a finite number of past observations') is the correct choice:\nDavid Hume's problem of induction asks how general rules and future predictions can be logically justified based on a finite set of past observations.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - How electrical currents induce magnetic fields in computer disks), (C - Why binary logic cannot represent decimal fractions), (D - How processors maintain clock synchronization)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Logical theories connected to observable sensory observations):\nطورت حلقة فيينا مذهب 'الوضعية المنطقية' (Logical Positivism)، مؤكدة أن المعرفة ذات المعنى يجب أن ترتبط بنظريات منطقية متصلة بالملاحظات الحسية القابلة للتحقق.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Divine revelation)، (C - Syllogisms written strictly in ancient Greek)، (D - Hardware circuits)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Logical theories connected to observable sensory observations') is the correct choice:\nThe Vienna Circle's logical positivism asserted that all meaningful knowledge must consist of logical theories grounded in verifiable sensory observations.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Divine revelation), (C - Syllogisms written strictly in ancient Greek), (D - Hardware circuits)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - George Boole):\nقدم جورج بول المنطق البولي (Boolean Logic) عام 1847، مؤسساً إمكانية التفكير المنطقي عبر حسابات ومعادلات جبرية رياضية دقيقة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Alan Turing)، (C - Isaac Newton)، (D - Gottfried Leibniz)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'George Boole') is the correct choice:\nGeorge Boole introduced formal Boolean algebra in 1847, showing that propositional logical reasoning could be calculated mathematically.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Alan Turing), (C - Isaac Newton), (D - Gottfried Leibniz)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - First-order predicate calculus):\nوسع جوتلوب فريجه المنطق في 1879 بإدخال الكائنات والعلاقات والمسورات (Quantifiers)، منشئاً 'حساب المحمولات من الرتبة الأولى' (First-order predicate calculus).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Fuzzy logic)، (C - Modal logic)، (D - Quantum gates)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'First-order predicate calculus') is the correct choice:\nGottlob Frege extended logic in 1879 by introducing objects, relations, and quantifiers, founding first-order predicate logic.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Fuzzy logic), (C - Modal logic), (D - Quantum gates)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system):\nأثبت كورت غودل في مبرهنة عدم الاكتمال (1931) أنه في أي نظام رياضي صوري قادر على تمثيل الحساب، توجد دائماً عبارات صحيحة لا يمكن إثباتها من داخل النظام.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - No computer could ever be built with more than 100 bytes of memory)، (C - All polynomial-time algorithms are NP-complete)، (D - Heuristics are always inadmissible in cyclic graphs)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'In any formal mathematical system powerful enough to do arithmetic, there exist true statements that cannot be proven within the system') is the correct choice:\nGödel's Incompleteness Theorem (1931) proved that any consistent formal system rich enough for arithmetic contains true statements that cannot be proven within it.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - No computer could ever be built with more than 100 bytes of memory), (C - All polynomial-time algorithms are NP-complete), (D - Heuristics are always inadmissible in cyclic graphs)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Halting Problem):\nقدم آلان تورينج عام 1936 'آلة تورينج' وأثبت وجود مسائل غير قابلة للحساب حاسوبياً، وأشهرها 'مسألة التوقف' (The Halting Problem).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Traveling Salesperson Problem)، (C - Shortest Path Problem)، (D - Sorting Problem)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Halting Problem') is the correct choice:\nAlan Turing (1936) proved that certain computational problems are undecidable, most famously the Halting Problem.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Traveling Salesperson Problem), (C - Shortest Path Problem), (D - Sorting Problem)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - Exponentially with the size of the problem instances):\nتُصنف المشكلة الحسابية رسمياً بأنها 'مستعصية' (Intractable) إذا كان وقت حلها ينمو بمعدل أُسي (Exponentially) مع زيادة حجم مدخلات المسألة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Linearly with input size O(n))، (B - Logarithmically O(log n))، (D - In constant time O(1))] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'Exponentially with the size of the problem instances') is the correct choice:\nIn computational complexity theory, a problem is classified as intractable if the time required to solve it scales exponentially with instance size.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Linearly with input size O(n)), (B - Logarithmically O(log n)), (D - In constant time O(1))] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - A large class of combinatorial search and reasoning problems are likely intractable in the worst case):\nأسس ستيفن كوك وريتشارد كارب نظرية NP-completeness، مبرهنين أن فئة واسعة من مسائل البحث التوافقي والاستدلال مستعصية حاسوبياً في أسوأ الحالات.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - All NP-complete problems can be solved in linear time on single-core computers)، (C - Computers cannot store floating point numbers)، (D - Neural networks cannot compute linear combinations)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'A large class of combinatorial search and reasoning problems are likely intractable in the worst case') is the correct choice:\nCook (1971) and Karp (1972) founded NP-completeness theory, proving that large classes of combinatorial search problems are likely intractable in the worst case.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - All NP-complete problems can be solved in linear time on single-core computers), (C - Computers cannot store floating point numbers), (D - Neural networks cannot compute linear combinations)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Thomas Bayes):\nصاغ عالم الرياضيات الإنجليزي توماس بايز (Thomas Bayes) في القرن الثامن عشر القاعدة الأساسية لتحديث الاحتمالات الذاتية في ضوء الأدلة والبيانات الجديدة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Isaac Newton)، (C - Charles Babbage)، (D - Bertrand Russell)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Thomas Bayes') is the correct choice:\nThomas Bayes formulated the fundamental rule for updating subjective probabilities upon observing new evidence (Bayes' Rule).\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Isaac Newton), (C - Charles Babbage), (D - Bertrand Russell)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Gambling odds in games of chance):\nتأسست النظرية الرياضية للاحتمالات عام 1654 في مراسلات بين بيير دي فيرما وبليز باسكال لتحليل احتمالات الرهان في ألعاب القمار والحظ.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Automated theorem proving)، (C - Chess endgames)، (D - Computer network packet loss)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Gambling odds in games of chance') is the correct choice:\nProbability theory was formally established in 1654 correspondence between Fermat and Pascal to calculate betting odds in gambling games.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Automated theorem proving), (C - Chess endgames), (D - Computer network packet loss)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Any algorithmic computation that can be carried out by any physical machine can be simulated by a Turing machine):\nتؤكد أطروحة تشيرش-تورينج (Church-Turing thesis) أن أي حساب خوارزمي يمكن تنفيذه بواسطة أي آلة فيزيائية يمكن محاكاته بواسطة آلة تورينج.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Quantum computers cannot solve any mathematical problems)، (C - Human intelligence will be exceeded by AI by the year 2000)، (D - Brains contain exactly 10 billion neurons)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Any algorithmic computation that can be carried out by any physical machine can be simulated by a Turing machine') is the correct choice:\nThe Church-Turing thesis asserts that any effective algorithmic computation can be simulated by a universal Turing machine.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Quantum computers cannot solve any mathematical problems), (C - Human intelligence will be exceeded by AI by the year 2000), (D - Brains contain exactly 10 billion neurons)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - John von Neumann and Oskar Morgenstern):\nوضع جون فون نيومان وأوسكار مورجنشتيرن عام 1944 الأسس الرياضية لنظرية المنفعة، موضحين إمكانية نمذجة أي تفضيلات عقلانية بدالة منفعة رقمية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Adam Smith and David Ricardo)، (C - John Maynard Keynes and Milton Friedman)، (D - Alan Turing and Claude Shannon)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'John von Neumann and Oskar Morgenstern') is the correct choice:\nVon Neumann and Morgenstern (1944) established the axiomatic foundations of utility theory in 'Theory of Games and Economic Behavior'.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Adam Smith and David Ricardo), (C - John Maynard Keynes and Milton Friedman), (D - Alan Turing and Claude Shannon)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Probability Theory and Utility Theory):\nتُعرَّف نظرية القرار (Decision Theory) في الاقتصاد والذكاء الاصطناعي بأنها الدمج المنهجي بين نظرية الاحتمالات (لتمثيل المعتقدات) ونظرية المنفعة (لتمثيل التفضيلات).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Logic and Arithmetic)، (C - Hardware Architecture and Software Code)، (D - Robotics and Computer Vision)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Probability Theory and Utility Theory') is the correct choice:\nDecision Theory is formally defined as the combination of Probability Theory (for beliefs) and Utility Theory (for preferences).\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Logic and Arithmetic), (C - Hardware Architecture and Software Code), (D - Robotics and Computer Vision)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Satisficing (making decisions that are 'good enough')):\nنال هربرت سايمون جائزة نوبل لأبحاثه التي بينت أن صانعي القرار البشريين يمارسون 'الإرضاء' (Satisficing) باتخاذ قرارات 'جيدة بما يكفي' بدلاً من التحسين المطلق.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Rational maximization)، (C - Backtracking search)، (D - Exhaustive state enumeration)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Satisficing (making decisions that are 'good enough')') is the correct choice:\nHerbert Simon won the Nobel Prize for demonstrating that real agents exhibit bounded rationality and engage in satisficing (choosing 'good enough' options).\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Rational maximization), (C - Backtracking search), (D - Exhaustive state enumeration)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Markov Decision Processes (MDPs)):\nابتكر ريتشارد بيلمان البرمجة الديناميكية في الخمسينيات، مؤطراً فئة من مشاكل القرار التتابعية تُعرف بـ 'عمليات قرار ماركوف' (MDPs).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Boolean circuits)، (C - Heuristic graphs)، (D - Turing machines)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Markov Decision Processes (MDPs)') is the correct choice:\nRichard Bellman founded dynamic programming in the 1950s, formulating Markov Decision Processes (MDPs) for sequential decision problems.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Boolean circuits), (C - Heuristic graphs), (D - Turing machines)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Neuron):\nالخلية العصبية (Neuron) هي الوحدة البيولوجية التشريحية الأساسية المسؤولة عن استقبال ومعالجة ونقل الإشارات والمعلومات داخل الدماغ والجهاز العصبي.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Glia)، (C - Axon terminal)، (D - Synaptic cleft)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Neuron') is the correct choice:\nThe neuron is the fundamental biological information-processing cell of the brain and nervous system.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Glia), (C - Axon terminal), (D - Synaptic cleft)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds):\nتعمل المعالجات الحاسوبية بدورات في زمن النانو ثانية، في حين تعمل الخلايا العصبية البيولوجية بسرعة أبطأ بكثير في نطاق المللي ثانية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Neurons are a million times faster than computer chips)، (C - Biological neurons operate at the exact speed of light)، (D - Both have identical cycle times of one microsecond)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Computer processors have cycle times in nanoseconds, whereas biological neurons operate much slower, in milliseconds') is the correct choice:\nSilicon computer processors operate at cycle times of nanoseconds, whereas biological neurons operate orders of magnitude slower, in milliseconds.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Neurons are a million times faster than computer chips), (C - Biological neurons operate at the exact speed of light), (D - Both have identical cycle times of one microsecond)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections):\nيتفوق الدماغ في المهام الإدراكية بفضل التوازي الهائل (Massive Parallelism) عبر ما يقرب من 10^11 خلية عصبية و10^14 وصلة مشبكية تعمل معاً.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - The brain uses liquid nitrogen cooling)، (C - The brain has zero latency between sensors and muscles)، (D - Biological neurons do not obey physical laws)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'The brain utilizes massive parallelism across roughly 10^11 neurons and 10^14 synaptic connections') is the correct choice:\nThe brain achieves superior perceptual performance despite slower cycle times through massive parallelism across ~10^11 neurons and ~10^14 synapses.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - The brain uses liquid nitrogen cooling), (C - The brain has zero latency between sensors and muscles), (D - Biological neurons do not obey physical laws)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Objective measures of external stimuli and observable behavioral responses):\nرفضت المدرسة السلوكية (Behaviorism) دراسة الحالات الذهنية الداخلية، وقصرت دراستها على القياسات الموضوعية للمثيرات الخارجية والاستجابات السلوكية المرئية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Introspective dreams)، (C - Brain surgery images)، (D - Mathematical proofs)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Objective measures of external stimuli and observable behavioral responses') is the correct choice:\nBehaviorism rejected internal mental concepts, insisting psychology study only observable external stimuli and behavioral responses.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Introspective dreams), (C - Brain surgery images), (D - Mathematical proofs)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Kenneth Craik):\nصاغ كينيث كريك (Kenneth Craik) في عام 1943 النموذج الذهني ثلاثي الخطوات: المثير -> التمثيل الداخلي -> الفعل، مؤسساً لعلم النفس الاستعرافي.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - B.F. Skinner)، (C - Sigmund Freud)، (D - Ivan Pavlov)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Kenneth Craik') is the correct choice:\nKenneth Craik (1943) specified the 3-step cognitive model: stimulus -> internal cognitive representation -> physical action.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - B.F. Skinner), (C - Sigmund Freud), (D - Ivan Pavlov)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - MIT Symposium on Information Theory):\nشهدت ندوة معهد ماساتشوستس للتكنولوجيا (MIT) لنظرية المعلومات عام 1956 تقديم أبحاث نيويل وسايمون وتشومسكي وميلر التي فجرت الثورة الاستعرافية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - The Royal Society Meeting in London)، (C - The IEEE Standards Convention)، (D - The World Economic Forum)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'MIT Symposium on Information Theory') is the correct choice:\nThe 1956 MIT Symposium on Information Theory ignited the Cognitive Revolution through foundational papers by Newell, Simon, Chomsky, and Miller.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - The Royal Society Meeting in London), (C - The IEEE Standards Convention), (D - The World Economic Forum)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - 7 plus or minus 2 chunks):\nأثبت جورج ميلر في ورقته الشهيرة عام 1956 أن سعة الذاكرة العاملة قصيرة المدى لدى الإنسان تبلغ تقريباً 7 وحدات أو كتل (زائد أو ناقص 2).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - 100 items)، (C - 1 item only)، (D - Infinite)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - '7 plus or minus 2 chunks') is the correct choice:\nGeorge Miller's landmark 1956 paper established that human short-term working memory capacity is approximately 7 ± 2 chunks.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - 100 items), (C - 1 item only), (D - Infinite)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs):\nكان تراجع السلوكية وصعود النفس الاستعرافي جوهرياً للذكاء الاصطناعي لأنه شرعن للباحثين نمذجة التراكيب المعرفية الداخلية والأهداف والمعتقدات برمجياً.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - It proved that hardware cannot be built without wooden gears)، (C - It banned the use of mathematical logic in computer science)، (D - It proved that animals do not possess neural systems)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'It allowed researchers to legitimately model internal cognitive structures, beliefs, and goals inside computer programs') is the correct choice:\nThe cognitive revolution was vital for AI because it legitimized computationally modeling internal cognitive representations, goals, and beliefs.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - It proved that hardware cannot be built without wooden gears), (C - It banned the use of mathematical logic in computer science), (D - It proved that animals do not possess neural systems)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Charles Babbage):\nصمم تشارلز باباج 'المحرك التحليلي' الميكانيكي (Analytical Engine) عام 1834، والذي يُعد أول نموذج ميكانيكي للحاسوب القابل للبرمجة للأغراض العامة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Blaise Pascal)، (C - Gottfried Leibniz)، (D - John von Neumann)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Charles Babbage') is the correct choice:\nCharles Babbage designed the mechanical Analytical Engine in 1834, recognized as the earliest precursor to general-purpose programmable computers.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Blaise Pascal), (C - Gottfried Leibniz), (D - John von Neumann)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform):\nاعترضت آدا لوفليس، أول مبرمجة في التاريخ، مؤكدة أن المحرك التحليلي ليس لديه أي ادعاء لابتكار أي شيء، بل يمكنه فقط تنفيذ ما نعرف كيف نأمره بفعله.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Machines will definitely destroy humanity within 50 years)، (C - Mechanical gears cannot represent prime numbers)، (D - Only digital electronic circuits can perform addition)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The Analytical Engine has no pretensions to originate anything; it can do whatever we know how to order it to perform') is the correct choice:\nAda Lovelace famously observed that the Analytical Engine has no pretensions to originate anything; it can only do whatever we know how to order it to perform.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Machines will definitely destroy humanity within 50 years), (C - Mechanical gears cannot represent prime numbers), (D - Only digital electronic circuits can perform addition)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The Bombe):\nصمم فريق آلان تورينج في بليتشلي بارك آلة 'بومب' (The Bombe) الكهروميكانيكية لفك شفرات جهاز إنيجما العسكري الألماني خلال الحرب العالمية الثانية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - ENIAC)، (C - Deep Blue)، (D - Analytical Engine)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The Bombe') is the correct choice:\nAlan Turing's team at Bletchley Park designed The Bombe to automate the cryptanalysis and deciphering of Enigma military ciphers.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - ENIAC), (C - Deep Blue), (D - Analytical Engine)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - A water clock with a float regulator):\nتُعد الساعة المائية ذات المنظم العائم التي بناها كتيسيبيوس السكندري (حوالي 250 ق.م) أول نظام تحكم تاريخي معروف ذاتي التنظيم يعتمد على التغذية الراجعة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - A steam engine governor)، (C - An electric relay circuit)، (D - An abacus)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'A water clock with a float regulator') is the correct choice:\nKtesibios of Alexandria's water clock with a float regulator (c. 250 BCE) is cited as an early historical self-regulating feedback control system.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - A steam engine governor), (C - An electric relay circuit), (D - An abacus)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Cybernetics):\nألف نوربرت وينر كتابه التأسيسي عام 1948 الذي قنن فيه حلقات التغذية الراجعة والتحكم في الحيوانات والآلات تحت عنوان 'السيبرنطيقا' (Cybernetics).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - The Computer and the Brain)، (C - Mind and Matter)، (D - Robot Dynamics)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Cybernetics') is the correct choice:\nNorbert Wiener published 'Cybernetics' in 1948, formalizing feedback control loops and information processing in biological and engineered systems.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - The Computer and the Brain), (C - Mind and Matter), (D - Robot Dynamics)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning):\nركزت نظرية التحكم الكلاسيكية تاريخياً على الفضاءات المستمرة المحكومة بحساب التفاضل والتكامل، بينما ركز الذكاء الاصطناعي المبكر على الاستدلال المنطقي والرمزي المنفصل.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Control theory does not use sensors or actuators)، (C - AI only studies games, while control theory only studies astronomy)، (D - Control theory was invented after deep learning)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Control theory focused on continuous state spaces governed by calculus and differential equations, while early AI focused on discrete logical and symbolic reasoning') is the correct choice:\nControl theory focused on continuous systems governed by differential equations, whereas early AI focused on discrete symbolic logical reasoning.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Control theory does not use sensors or actuators), (C - AI only studies games, while control theory only studies astronomy), (D - Control theory was invented after deep learning)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Noam Chomsky):\nنشر نعوم تشومسكي كتاب 'البنى النحوية' عام 1957، مبيناً أن اللغة البشرية لا يمكن تفسيرها بسلاسل ماركوفية سلوكية بسيطة لأنها تتطلب قواعد توليدية عميقة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - B.F. Skinner)، (C - Ferdinand de Saussure)، (D - Roman Jakobson)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Noam Chomsky') is the correct choice:\nNoam Chomsky published 'Syntactic Structures' (1957), proving human language syntax cannot be explained by simple behaviorist Markovian word chains.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - B.F. Skinner), (C - Ferdinand de Saussure), (D - Roman Jakobson)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Computational Linguistics (Natural Language Processing)):\nنتج عن تلاقي اللسانيات الصورية مع علوم الحاسوب والذكاء الاصطناعي ولادة حقل 'اللسانيات الحاسوبية' أو 'معالجة اللغات الطبيعية' (NLP).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Computer Graphics)، (C - Solid-State Physics)، (D - Cryptanalysis)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Computational Linguistics (Natural Language Processing)') is the correct choice:\nThe intersection of formal linguistics and AI created the field of Computational Linguistics (Natural Language Processing).\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Computer Graphics), (C - Solid-State Physics), (D - Cryptanalysis)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context):\nيتطلب فهم اللغة معارف حسية وعامة واسعة عن العالم لأن الجمل تحتوي على لبس وغموض نحوي ودلالي هائل لا يمكن فضه إلا بسياق المعرفة الخلفية للواقع.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Because dictionaries contain no words)، (C - Because computers cannot store alphabet letters)، (D - Because grammar rules are identical in all languages)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Because sentences contain massive lexical and syntactic ambiguities that can only be resolved using background world context') is the correct choice:\nNatural language understanding requires world knowledge because sentences contain immense lexical and syntactic ambiguities resolvable only via real-world context.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Because dictionaries contain no words), (C - Because computers cannot store alphabet letters), (D - Because grammar rules are identical in all languages)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The number of transistors on an integrated circuit doubles approximately every 18 to 24 months):\nينص قانون مور (Moore's Law) التجريبي على أن عدد الترانزستورات المدمجة على الدائرة المتكاملة يتضاعف تقريباً كل 18 إلى 24 شهراً.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Software error rates increase by 50% every year)، (C - AI systems will replace all human workers by 1980)، (D - Computer screen resolutions double every week)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The number of transistors on an integrated circuit doubles approximately every 18 to 24 months') is the correct choice:\nMoore's Law is the empirical observation that the number of transistors on microchips doubles roughly every 18 to 24 months.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Software error rates increase by 50% every year), (C - AI systems will replace all human workers by 1980), (D - Computer screen resolutions double every week)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Warren McCulloch and Walter Pitts):\nنشر وارن ماكولوتش ووالتر بيتس عام 1943 أول نموذج رياضي وحسابي لشبكة عصبية اصطناعية تعتمد على منطق العتبة للخلايا العصبية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - John von Neumann and Norbert Wiener)، (C - Marvin Minsky and Claude Shannon)، (D - Donald Hebb and Frank Rosenblatt)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Warren McCulloch and Walter Pitts') is the correct choice:\nWarren McCulloch and Walter Pitts (1943) published the first computational mathematical model of artificial neural networks.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - John von Neumann and Norbert Wiener), (C - Marvin Minsky and Claude Shannon), (D - Donald Hebb and Frank Rosenblatt)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')):\nقدم دونالد هب (1949) قاعدة التعلم الهبي الشهيرة التي توضح أن الوصلات المشبكية تزداد قوة عندما تُثار خليتان عصبيتان في وقت متزامن ('تتصل معاً إذا أثيرت معاً').\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Memory capacity is strictly limited to 1,000 facts)، (C - Neurons transmit signals purely mechanically via fluids)، (D - Neural networks cannot learn linear functions)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Synaptic connections strengthen when two neurons fire simultaneously ('neurons that fire together, wire together')') is the correct choice:\nDonald Hebb (1949) introduced Hebbian learning, stating that synaptic connections strengthen when two neurons fire together.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Memory capacity is strictly limited to 1,000 facts), (C - Neurons transmit signals purely mechanically via fluids), (D - Neural networks cannot learn linear functions)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - SNARC):\nبنى مارفن مينسكي ودين إدموندز عام 1951 أول حاسوب شبكات عصبية اصطناعية عامل في التاريخ، وأُطلق عليه اسم SNARC.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - ENIAC)، (C - Deep Blue)، (D - Shakey)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'SNARC') is the correct choice:\nIn 1951, Marvin Minsky and Dean Edmonds built SNARC, the first operational artificial neural network computer.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - ENIAC), (C - Deep Blue), (D - Shakey)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Dartmouth College):\nالميلاد الرسمي المعتمد للذكاء الاصطناعي كتخصص أكاديمي مستقل حدث في ورشة العمل التاريخية التي استمرت شهرين عام 1956 في كلية دارتموث (Dartmouth College).\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Harvard University)، (C - Stanford University)، (D - Oxford University)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Dartmouth College') is the correct choice:\nThe official birth of Artificial Intelligence as an academic field occurred at the Dartmouth College summer workshop organized by John McCarthy in 1956.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Harvard University), (C - Stanford University), (D - Oxford University)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Logic Theorist):\n🎯 سبب اختيار (A - Logic Theorist):\nتم اختيار هذا الخيار تحديداً لأنه يمثل الحل العلمي المباشر والصحيح لمعايير السؤال؛ حيث ورشة عمل دارتموث (1956) هي الحدث التاريخي الذي تأسس فيه علم الذكاء الاصطناعي رسمياً بقيادة جون مكارثي ومارفن مينسكي وشانون. 🧠 التحليل المنطقي والمفهوم العلمي: 🚫 استبعاد الخيارات الأخرى: الخيارات البديلة المطروحة [(B - General Problem Solver)، (C - Deep Blue)، (D - DENDRAL)] غير صحيحة في هذا السياق؛ لأنها تشير إما إلى مفاهيم تخصصية منفصلة، أو تعبر عن مستويات تجريد أخرى لا تحقق الشرط المطلوب بالسؤال.\n\n❌ لماذا الخيارات الأخرى غير صحيحة؟\nالخيارات [(B - General Problem Solver)، (C - Deep Blue)، (D - DENDRAL)] لا تحقق المطلوب لأنها إما تعبر عن مفاهيم مختلفة تماماً أو لا تطابق الشروط الدقيقة المذكورة في السؤال.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - General Problem Solver)، (C - Deep Blue)، (D - DENDRAL)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Logic Theorist') is the correct choice:\n🎯 Why (A - 'Logic Theorist') was chosen:\nThis option is specifically chosen because it directly and accurately satisfies the question criteria: The 1956 Dartmouth workshop officially established Artificial Intelligence as an academic field, organized by John McCarthy. 🧠 Logical Analysis & Core Concept: 🚫 Elimination of Other Options: The alternative options [(B - General Problem Solver), (C - Deep Blue), (D - DENDRAL)] are incorrect in this context because they refer to distinct operations or components that do not satisfy the specific conditions posed in the problem.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - General Problem Solver), (C - Deep Blue), (D - DENDRAL)] are incorrect because they represent distinct concepts or do not satisfy the specific conditions posed in the question.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - General Problem Solver), (C - Deep Blue), (D - DENDRAL)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Checkers):\nابتكر آرثر صموئيل عام 1952 في شركة IBM برنامجاً رائداً للعبة الداما (Checkers)، وتعلم البرنامج ذاتياً ليصبح أفضل مهارة من صانعه البشري.\n\n💡 مثال وتطبيق واقعي:\nبرنامج آرثر صموئيل للعبة الداما (1952) درب نفسه بلعب آلاف المباريات ضد نفسه حتى تفوق على صانعه البشري، مؤسساً للتعلم المعزز.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Chess)، (C - Go)، (D - Backgammon)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Checkers') is the correct choice:\nArthur Samuel (1952) created a groundbreaking Checkers program at IBM that learned through self-play to outperform its creator.\n\n💡 Real-World Example & Application:\nArthur Samuel's 1952 checkers program played thousands of self-play games to beat its creator, pioneering reinforcement learning.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Chess), (C - Go), (D - Backgammon)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - The Lighthill Report):\nوجه 'تقرير لايتهيل' (The Lighthill Report) البريطاني عام 1973 انتقادات حادة لأبحاث الذكاء الاصطناعي لفشلها في تحقيق وعودها الكبرى، مما تسبب بقطع التمويل.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - The Turing Review)، (C - The Dartmouth Manifesto)، (D - The ALPAC Report)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'The Lighthill Report') is the correct choice:\nThe Lighthill Report (1973) in the UK heavily criticized AI research for failing to achieve its grand promises, triggering severe funding cuts and the first AI winter.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - The Turing Review), (C - The Dartmouth Manifesto), (D - The ALPAC Report)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (C - XOR (Exclusive-OR)):\nأثبت مارفن مينسكي وسيمور بابيرت في كتابهما 'Perceptrons' عام 1969 أن البيرسبترون أحادي الطبقة عاجز رياضياً عن حساب دالة XOR غير الخطية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - AND)، (B - OR)، (D - NOT)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (C - 'XOR (Exclusive-OR)') is the correct choice:\nMinsky and Papert's 1969 book 'Perceptrons' proved mathematically that single-layer perceptrons cannot learn the non-linear XOR function.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - AND), (B - OR), (D - NOT)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - MYCIN):\nنظام MYCIN الذي طُوِّر في السبعينيات كان نظاماً خبيراً شهيراً اعتمد على 450 قاعدة لتشخيص الأمراض المعدية في الدم والتوصية بالمضادات الحيوية.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - DENDRAL)، (C - PROSPECTOR)، (D - XCON)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'MYCIN') is the correct choice:\nMYCIN was a famous 1970s medical expert system using roughly 450 rules to diagnose infectious blood diseases and recommend therapies.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - DENDRAL), (C - PROSPECTOR), (D - XCON)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Configure customer computer orders for VAX computer systems):\nأثبت نظام R1 (المعروف بـ XCON) النجاح التجاري للأنظمة الخبيرة في الثمانينيات لشركة DEC عبر أتمتة تكوين وتجميع طلبيات حواسيب VAX المخصصة.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Translate Chinese into English)، (C - Drive an automated delivery truck)، (D - Predict international stock market prices)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Configure customer computer orders for VAX computer systems') is the correct choice:\nR1 (XCON) was a commercially successful expert system at DEC that configured customer orders for VAX computer systems, saving millions annually.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Translate Chinese into English), (C - Drive an automated delivery truck), (D - Predict international stock market prices)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Backpropagation):\nأشعل روميلهارت وهينتون وماكليلاند نهضة الشبكات العصبية (الاتصالية) في 1986 عبر نشر خوارزمية الانتشار العكسي (Backpropagation) لتدريب الشبكات متعددة الطبقات.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - A* Search)، (C - Uniform-Cost Search)، (D - Alpha-Beta Pruning)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Backpropagation') is the correct choice:\nThe Connectionist revival in 1986 was ignited by Rumelhart, Hinton, and McClelland through the widespread popularization of the Backpropagation algorithm.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - A* Search), (C - Uniform-Cost Search), (D - Alpha-Beta Pruning)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Bayesian Networks):\nأحدث جوديا بيرل (Judea Pearl) ثورة في الذكاء الاصطناعي عام 1988 بتقديمه 'الشبكات البايزية' (Bayesian Networks) كإطار رسمي للاستدلال في ظل عدم اليقين.\n\n💡 مثال وتطبيق واقعي:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Semantic Web)، (C - Genetic Algorithms)، (D - Predicate Calculus)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Bayesian Networks') is the correct choice:\nJudea Pearl transformed AI in 1988 by introducing Bayesian Networks as a principled, rigorous framework for probabilistic reasoning under uncertainty.\n\n💡 Real-World Example & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Semantic Web), (C - Genetic Algorithms), (D - Predicate Calculus)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Garry Kasparov):\nحقق حاسوب Deep Blue من شركة IBM إنجازاً تاريخياً في عام 1997 عندما هزم بطل العالم في الشطرنج غاري كاسباروف (Garry Kasparov) في مباراة رسمية.\n\n💡 مثال وتطبيق واقعي:\nفوز حاسوب Deep Blue على غاري كاسباروف عام 1997 أثبت قدرة البحث الذكي وتقييم المواقف في التفوق على أبطال العالم في الشطرنج.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Anatoly Karpov)، (C - Magnus Carlsen)، (D - Bobby Fischer)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Garry Kasparov') is the correct choice:\nIBM's Deep Blue made history in 1997 by defeating reigning World Chess Champion Garry Kasparov in a regulation match.\n\n💡 Real-World Example & Application:\nIBM Deep Blue defeating Garry Kasparov in 1997 proved that heuristic search and position evaluation could triumph in grandmaster chess.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Anatoly Karpov), (C - Magnus Carlsen), (D - Bobby Fischer)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - ImageNet):\nانطلقت حقبة التعلم العميق الحديثة في عام 2012 عندما حققت شبكة AlexNet طفرة استثنائية في التعرف على الصور على مجموعة بيانات ImageNet الضخمة.\n\n💡 مثال وتطبيق واقعي:\nفوز AlexNet في مسابقة ImageNet عام 2012 أطلق ثورة التعلم العميق (Deep Learning) الحديثة بالاعتماد على معالجات GPU والشبكات العصبية الالتفافية.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - MNIST)، (C - CIFAR-10)، (D - COCO)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'ImageNet') is the correct choice:\nThe modern Deep Learning era was catalyzed in 2012 when AlexNet achieved a historic breakthrough on the large-scale ImageNet computer vision dataset.\n\n💡 Real-World Example & Application:\nAlexNet's 2012 ImageNet victory triggered the modern deep learning revolution by leveraging GPUs and convolutional neural networks.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - MNIST), (C - CIFAR-10), (D - COCO)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (A - Monte Carlo Tree Search (MCTS)):\nهزم نظام AlphaGo من شركة DeepMind بطل العالم لي سيدول عام 2016 في لعبة Go المعقدة عبر الجمع بين الشبكات العصبية العميقة وبحث شجرة مونت كارلو (MCTS).\n\n💡 مثال وتطبيق واقعي:\nفوز AlphaGo على لي سيدول عام 2016 جمع بين الشبكات العصبية العميقة وبحث شجرة مونت كارلو (MCTS) لحل لعبة Go فائقة التعقيد.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(B - Depth-First Search with backtracking)، (C - Rule-based expert systems)، (D - Linear programming)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (A - 'Monte Carlo Tree Search (MCTS)') is the correct choice:\nDeepMind's AlphaGo defeated world champion Lee Sedol in 2016 by combining deep neural networks with Monte Carlo Tree Search (MCTS).\n\n💡 Real-World Example & Application:\nDeepMind's AlphaGo defeating Lee Sedol in 2016 combined deep reinforcement learning with Monte Carlo Tree Search (MCTS) to master Go.\n\n❌ Why other options are incorrect:\nThe alternative options [(B - Depth-First Search with backtracking), (C - Rule-based expert systems), (D - Linear programming)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب اختيار (B - Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions):\nتتمثل 'مسألة محاذاة القيم' (Value Alignment Problem) في التحدي الهندسي لضمان أن تسعى أنظمة الذكاء الاصطناعي المستقلة لتحقيق أهداف تتوافق حقاً مع قيم ونوايا البشر.\n\n💡 مثال وتطبيق واقعي:\nمشكلة محاذاة القيم تبحث في كيفية ضمان أن تطيع أنظمة الذكاء الاصطناعي الفائقة قيم البشر ونواياهم الحقيقية دون أضرار غير مقصودة.\n\n❌ استبعاد الخيارات الأخرى:\nالخيارات [(A - Aligning columns in database tables)، (C - Setting identical retail prices for AI hardware)، (D - Calibrating accelerometer sensors in robots)] غير صحيحة لأنها إما تعبر عن مكونات جزئية أو وظائف مختلفة لا تحقق التعريف المطلوب في السؤال.",
    "explanationEn": "🎯 Why (B - 'Ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions') is the correct choice:\nThe value alignment problem focuses on ensuring that autonomous AI systems pursue objectives that are truly aligned with human values and intentions.\n\n💡 Real-World Example & Application:\nThe value alignment problem focuses on ensuring autonomous superintelligent AI systems reliably pursue human values without unintended harms.\n\n❌ Why other options are incorrect:\nThe alternative options [(A - Aligning columns in database tables), (C - Setting identical retail prices for AI hardware), (D - Calibrating accelerometer sensors in robots)] are incorrect because they represent distinct components or functions that do not satisfy the specific question criteria."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\nالعبارة صحيحة تماماً؛ حيث يتعمد اختبار تورينج عزل المظهر والتفاعل المادي لضمان تقييم جوهر الذكاء الاستدلالي دون أن يتأثر بالحكم على الشكل الخارجي للآلة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\nThe standard Turing Test deliberately avoids physical embodiment to evaluate cognitive capability and intelligence rather than physical appearance.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\nالعبارة صحيحة تماماً؛ حيث يشترط اختبار تورينج الشامل (Total Turing Test) امتلاك الرؤية الحاسوبية لإدراك البيئة والروبوتات للتفاعل المادي معها.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\nPassing the Total Turing Test requires physical perception and interaction capabilities via Computer Vision and Robotics.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث العلوم الاستعرافية تدمج نماذج الذكاء الاصطناعي الحاسوبية مع التجارب السيكولوجية لاختبار الفرضيات حول آليات عمل العقل البشري علمياً. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Cognitive Science unifies computational AI architectures with empirical psychology and neuroscience to build verified theories of human mental processing. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث القياس الأرسطي (Syllogism) مصمم كقالب استدلال استنباطي صوري: إذا كانت المقدمات الكبرى والصغرى صحيحة، فإن النتيجة المستخلصة تكون صحيحة حتماً بالضرورة المنطقية. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Aristotelian syllogisms provided formal logical deductive schemas guaranteeing truth-preserving inference from sound premises to valid conclusions. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث العقلانية في الذكاء الاصطناعي تُعرَّف بالسعي لتحقيق أفضل نتيجة متوقعة استناداً إلى دالة المنفعة والمعلومات المتاحة، حتى تحت ظروف الاحتمالات وعدم اليقين. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Rationality is formally defined as acting to maximize expected utility given current percepts and background knowledge under uncertainty. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Under the rational agent approach, making correct logical deductions is the ONLY possible way for an agent to exhibit rational behavior. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Under the rational agent approach, making correct logical deductions is the ONLY possible way for an agent to exhibit rational behavior.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن René Descartes was an advocate of materialism, arguing that the human mind is entirely identical to the physical machinery of the brain. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'René Descartes was an advocate of materialism, arguing that the human mind is entirely identical to the physical machinery of the brain.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث المذهب التجريبي (جون لوك وهيوم) يرى أن العقل يولد كصفحة بيضاء (Tabula Rasa) وأن المعرفة تُبنى تراكمياً من المدخلات الحسية والملاحظات التجريبية. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Empiricism (Locke, Hume) posits that the mind begins as a blank slate, with all concepts and knowledge deriving from sensory perception and experience. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Kurt Gödel proved that any sufficiently powerful formal mathematical system is both complete and fully decidable. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Kurt Gödel proved that any sufficiently powerful formal mathematical system is both complete and fully decidable.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث آلان تورينج أثبت عام 1936 عبر برهان التناقض أن مسألة التوقف (Halting Problem) غير قابلة للحل بحساب عام لأي برنامج ومدخلات تعسفية. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: روبوتات الدردشة مثل ChatGPT تحاول اجتياز اختبار تورينج عبر محادثة نصية تبدو بشرية تماماً.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Alan Turing proved via diagonalization and self-reference that the Halting Problem is undecidable by any universal algorithm. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Modern chatbots like ChatGPT aim to emulate human conversational nuance in text interactions.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث مسائل NP-complete تتطلب وقتاً أسياً في أسوأ الحالات، وما لم يُثبت أن P=NP (وهو مستبعد عالمياً)، فلا توجد خوارزمية قطعية تحلها بزمن متعدد الحدود. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Unless P=NP, NP-complete problems are fundamentally intractable in the worst case and lack polynomial-time solution algorithms. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث مبرهنة بايز P(H|E) = P(E|H)P(H)/P(E) تقدم الصيغة الرياضية الصارمة لكيفية تعديل الاحتمال القبلي لفرضية ما عند استقبال دليل حسي جديد. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Bayes' theorem mathematically formalizes rational belief updating, computing posterior probabilities from priors and conditional evidence likelihoods. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\nالعبارة صحيحة تماماً؛ فقد أثبت فون نيومان ومورجنشتيرن رياضياً أن أي وكيل عقلاني يمتلك تفضيلات متسقة بين اليانصيب يجب أن يتصرف كمعظم للمنفعة المتوقعة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\nVon Neumann and Morgenstern proved axiomatically that rational agents with consistent lottery preferences act as expected utility maximizers.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Herbert Simon's concept of 'satisficing' states that agents should always search until they compute the mathematically optimal solution. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Herbert Simon's concept of 'satisficing' states that agents should always search until they compute the mathematically optimal solution.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Individual biological neurons in the human brain have significantly faster switching speeds than modern silicon microprocessor transistors. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Individual biological neurons in the human brain have significantly faster switching speeds than modern silicon microprocessor transistors.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث التشريح العصبي للدماغ البشري يُظهر وجود نحو 100 مليار عصبون (10^11)، يتصل كل منها بآلاف المشابك، مما يوفر قدرة معالجة متوازية هائلة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Neuroanatomy confirms the brain contains roughly 10^11 neurons, interconnected via ~10^14 synaptic junctions, providing massive biological parallelism. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Psychological behaviorism actively encouraged the study of internal representations, beliefs, and conscious desires. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Psychological behaviorism actively encouraged the study of internal representations, beliefs, and conscious desires.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Ada Lovelace anticipated that the Analytical Engine would be capable of genuine original thought completely independent of human programming. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Ada Lovelace anticipated that the Analytical Engine would be capable of genuine original thought completely independent of human programming.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث السيبرنطيقا (نوربرت وينر 1948) قامت على مبدأ التغذية الراجعة السالبة (Negative feedback): قياس الانحراف عن الهدف وإصدار إشارة تصحيحية لتقليص الخطأ باستمرار. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Cybernetics mathematically formalized negative feedback loops where error between actual state and target state drives corrective control actions. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Noam Chomsky demonstrated that the infinite syntactic creativity of human natural language could be adequately modeled by simple finite-state Markov chains. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Noam Chomsky demonstrated that the infinite syntactic creativity of human natural language could be adequately modeled by simple finite-state Markov chains.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث نموذج ماكولوتش وبيتس (1943) أثبت أن دمج خلايا عصبية منطقية بسيطة يمكنه تمثيل عمليات AND و OR و NOT، وبالتالي محاكاة أي حساب منطقي تورينجي. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: McCulloch and Pitts showed that threshold neural units can implement fundamental logic gates (AND, OR, NOT), making networks capable of universal computation. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث جون مكارثي هو من اقترح صراحة مصطلح 'الذكاء الاصطناعي' (Artificial Intelligence) في مقترح ورشة دارتموث الصيفية لعام 1956 لتمييزه عن السيبرنطيقا. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: John McCarthy explicitly coined 'Artificial Intelligence' in the 1955 funding proposal for the seminal 1956 Dartmouth Summer Research Project. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث برنامج Logic Theorist (نيويل وسايمون 1956) تمكن من إثبات مبرهنة الهندسة في Principia Mathematica بمسار استدلالي أقصر وأكثر أناقة من إثبات رسل ووايتهيد الأصلي. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Newell and Simon's Logic Theorist proved Theorem 2.85 of Principia Mathematica with a shorter, more elegant deduction than Russell and Whitehead's published proof. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث الفشل في ترجمة النصوص الحرفية (بسبب الجهل بالمعنى وسياق العالم) أدى إلى فضائح تمويلية وتقرير ALPAC عام 1966 الذي جمد الدعم الحكومي للذكاء الاصطناعي. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Early literal translation systems produced embarrassingly nonsensical results due to lack of world knowledge, prompting the ALPAC report and triggering the first AI winter. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن Minsky and Papert's 1969 book mathematically proved that multi-layer neural networks could never learn nonlinear functions under any circumstances. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'Minsky and Papert's 1969 book mathematically proved that multi-layer neural networks could never learn nonlinear functions under any circumstances.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث الأنظمة الخبيرة (مثل MYCIN وDENDRAL) أدركت أن محركات البحث العامة وحدها لا تكفي، وأن الذكاء الحقيقي يتطلب قواعد معارف تخصصية مستخلصة من خبراء المجال. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n💡 مثال واقعي: تطبيق خرائط جوجل (Google Maps) يستخدم خوارزميات البحث الذكية لحساب أسرع طريق مع تجنب الاختناقات المرورية.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: The 1970s Knowledge Revolution shifted focus from weak general-purpose search algorithms to encoding massive domain-specific knowledge bases. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n💡 Real-world Example: Google Maps uses heuristic search algorithms to calculate the fastest route while avoiding traffic jams.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث نشر خوارزمية الانتشار العكسي (Backpropagation) في 1986 وفر وسيلة حسابية فعالة لتوزيع الخطأ وضبط الأوزان في الطبقات الخفية، متجاوزاً قيود البيرسبترون أحادي الطبقة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Backpropagation solved the credit assignment problem for hidden layers by computing gradient descent efficiently, enabling multi-layer network training. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث الشبكات البايزية (جوديا بيرل 1988) تستخدم مخططات موجهة لا دورية لتمثيل الاستقلال الشرطي، مما مكن من إجراء حسابات احتمالية متسقة ودقيقة دون الحاجة لجداول كاملة ضخمة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: Bayesian networks use directed acyclic graphs to encode conditional independence relations, enabling mathematically tractable probabilistic inference. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False):\n🎯 سبب الحكم بأن العبارة خاطئة (False): تم اختيار (خاطئة) لأن الادعاء الوارد في نص السؤال يتناقض علمياً ومنطقياً مع المفاهيم المقررة؛ حيث الصواب هو نقيض هذه العبارة لأن The breakthrough of modern Deep Learning was driven primarily by novel mathematical theorems rather than the availability of massive datasets and parallel GPU computing power. لا يتوافق مع الأسس العلمية في Chapter 1: Introduction to AI. 🧠 التحليل المنطقي والتأصيل العلمي: يؤكد مرجع AIMA أن هذا الادعاء يمثل خطأً شائعاً؛ والتأصيل العلمي الصحيح يقتضي الالتزام الصارم بالتعريفات الدقيقة لقيود البيئة وعمليات الاستدلال.\n\n🧠 التصحيح والمنطق العلمي:\nالادعاء خاطئ ومضلل؛ فالقاعدة الصحيحة في الذكاء الاصطناعي تفرض التزام العكس تماماً لضمان سلامة وكفاءة اتخاذ القرار.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is False:\n🎯 Why this statement is False:\nThis statement is evaluated as False because the premise directly contradicts established principles: The claim that 'The breakthrough of modern Deep Learning was driven primarily by novel mathematical theorems rather than the availability of massive datasets and parallel GPU computing power.' is incorrect according to the standard principles in AIMA (Chapter 1: Introduction to AI). 🧠 Logical Analysis & Core Concept: In AIMA, this assertion represents a conceptual misconception; the rigorous academic formulation requires adhering strictly to theoretical constraints and definitions.\n\n🧠 Core Logic & Correction:\nThis assertion is logically flawed; the correct theoretical principle requires the exact opposite condition to maintain sound reasoning.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
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
    "explanationAr": "🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True):\n🎯 سبب الحكم بأن العبارة صحيحة (True): تم اختيار (صحيحة) لأن العبارة تتطابق كلياً مع القواعد والحقائق العلمية المعتمدة؛ حيث مشكلة الملك ميداس في أمان الذكاء الاصطناعي تعني تحقيق الآلة للهدف المحدد لها حرفياً ولكن الهدف صيغ بطريقة غير ملائمة مما يؤدي لعواقب وخيمة غير متوقعة. 🧠 التحليل المنطقي والتأصيل العلمي: تعتبر هذه النتيجة في مرجع AIMA قاعدة أساسية مثبتة رياضياً ومنهجياً، وتؤكد صحة النموذج النظري للوكيل أو خوارزمية البحث المذكورة.\n\n🧠 المنطق العلمي:\nالعبارة دقيقة وتمثل قاعدة راسخة في علم الذكاء الاصطناعي لا تحتمل الاستثناء في ظل الظروف القياسية المحددة.\n\n💡 نظرة واقعية وتطبيق ملموس:\nالأنظمة الحديثة كالروبوتات ومحركات الاستدلال في الأنظمة الطبية تستند إلى هذه المبادئ التأسيسية لمعالجة البيانات واتخاذ القرارات.",
    "explanationEn": "🎯 Why this statement is True:\n🎯 Why this statement is True:\nThis statement is evaluated as True because it accurately represents established theoretical facts: The King Midas problem refers to an agent perfectly optimizing a poorly specified or unintended human objective. 🧠 Logical Analysis & Core Concept: In AIMA, this assertion reflects a mathematically sound and verified foundation governing rational agent behavior and search principles.\n\n🧠 Core Logic:\nThis premise is mathematically and scientifically verified in AI theory and holds true under standard problem constraints.\n\n💡 Real-World Perspective & Application:\nModern intelligent systems like diagnostic medical engines and conversational agents rely on these historical foundations for rational decision-making."
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
