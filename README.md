# منصة اختبارات الذكاء الاصطناعي التفاعلية — Interactive AI Quiz Platform

منصة اختبارات تفاعلية ذكية ومستقلة تماماً (Static 100%) مبنية باستخدام **HTML5 + CSS3 + Vanilla JavaScript** بدون أي Backend أو Database أو Frameworks.

تعتمد المنصة على بنك أسئلة جامعي متكامل يضم **300 سؤال شامل** مبني على الفصول 1 و 2 و 3 من المرجع العالمي الرائد:
**Artificial Intelligence: A Modern Approach (AIMA)** لمؤلفيه *Stuart Russell & Peter Norvig*.

---

## 🌟 مميزات المنصة

1. **بنك أسئلة شامل (300 سؤال):**
   - **الباب الأول (Chapter 1):** مقدمة في الذكاء الاصطناعي (100 سؤال: 70 MCQ + 30 True/False).
   - **الباب الثاني (Chapter 2):** الوكلاء الأذكياء وبيئات العمل (80 سؤال: 60 MCQ + 20 True/False).
   - **الباب الثالث (Chapter 3):** حل المشكلات باستراتيجيات البحث (120 سؤال: 90 MCQ + 30 True/False).
2. **أوضاع اختبار متعددة:**
   - **وضع جميع الأسئلة (All Questions):** اختبار شامل يمر على بنك الأسئلة بالترتيب الأكاديمي.
   - **وضع الاختبار العشوائي (Random Quiz):** يختار أسئلة عشوائية بنظام Fisher-Yates بدون أي تكرار داخل الاختبار نفسه، مع إمكانية تحديد عدد الأسئلة (10، 20، 30، 50، 100 أو مخصص) وتحديد نطاق الباب الدراسي.
   - **وضع التدرب حسب الباب (Chapter Practice):** التدرب على باب محدد فقط.
   - **متصفح بنك الأسئلة (Question Bank Browser):** قراءة جميع الأسئلة مع البحث السريع وإظهار الإجابات النموذجية والشروحات.
3. **تحقق فوري وشروحات ثنائية اللغة:**
   - عدم كشف الإجابة قبل ضغط الطالب على زر **"تحقق من الإجابة / Check Answer"**.
   - إبراز الإجابة الصحيحة باللون الأخضر والخاطئة باللون الأحمر.
   - شروحات تعليمية دقيقة ومفصلة باللغتين **العربية 🇸🇦 والإنجليزية 🇬🇧** توضح سبب صحة الإجابة ومفهومها الأكاديمي.
4. **قائمة الأسئلة والتنقل السريع (Question Navigator):**
   - شبكة تفاعلية ذكية مرقمة لجميع أسئلة الاختبار تتيح الانتقال الفوري لأي سؤال بنقرة واحدة.
   - تظهر القائمة **افتراضياً (Default: Show)** مع إمكانية التبديل إلى **الإخفاء (Hide)** وإعادة الإظهار بضغطة زر.
   - تمييز لوني دقيق لحالة كل سؤال في الشبكة:
     - السؤال الحالي (Active/Current).
     - الإجابات الصحيحة (Correct ✓ باللون الأخضر).
     - الإجابات الخاطئة (Incorrect ✗ باللون الأحمر).
     - الأسئلة التي تم تحديد إجابة لها (Answered باللون البنفسجي).
     - الأسئلة المتبقية (Unanswered).
5. **نظام نتائج وتقييم دقيق:**
   - حساب النسبة المئوية `Percentage` تلقائياً.
   - تصنيف دراسي فوري:
     - 90–100%: Excellent ⭐ (ممتاز)
     - 80–89%: Very Good 👍 (جيد جداً)
     - 70–79%: Good (جيد)
     - 60–69%: Pass (مقبول)
     - أقل من 60%: Needs More Practice (يحتاج تدريب)
6. **مراجعة الإجابات (Review Answers):**
   - مراجعة كاملة لكل سؤال بعد الانتهاء مع إمكانية التصفية (الكل، الصحيحة، الخاطئة) والبحث بالكلمات المفتاحية.
7. **دعم كامل للغتين والاتجاهين (English الافتراضية):**
   - اللغة الإنجليزية هي اللغة الأساسية الافتراضية للمنصة، مع دعم التبديل السلس والفوري إلى العربية (RTL) بضغطة زر وحفظ التفضيل.
8. **المظهر الداكن والفاتح (Dark / Light Mode):**
   - زر تبديل أنيق وحفظ التفضيل عبر `localStorage`.

---

## 📁 بنية ملفات المشروع

```text
Interactive-Quiz/
│
├── index.html       # الواجهة الرئيسية والهيكل الدلالي
├── style.css        # نظام التصميم والألوان والسمات والخطوط
├── script.js        # منطق الاختبار والتحقق العشوائي والنتائج
├── questions.js     # قاعدة بيانات الـ 300 سؤال مع الشروحات
└── README.md        # دليل الاستخدام والتوثيق
```

---

## 🚀 كيفية تشغيل المشروع

المشروع **Static بالكامل** ولا يحتاج لأي خادم أو تثبيت حزم أو أدوات بناء:

1. افتح مجلد `Interactive-Quiz`.
2. انقر نقراً مزدوجاً على ملف:
   ```text
   index.html
   ```
3. سيعمل الاختبار مباشرة في أي متصفح حديث (Chrome, Edge, Firefox, Safari).

---

## ➕ كيفية إضافة سؤال جديد

افتح ملف `questions.js` وأضف كائناً جديداً داخل المصفوفة `questions`:

### مثال سؤال اختيار من متعدد (MCQ):
```javascript
{
  id: 301,
  type: "mcq",
  chapterId: 2,
  chapter: "Chapter 2: Intelligent Agents",
  question: "What is an agent in Artificial Intelligence?",
  options: [
    "A computer program without inputs",
    "An entity that perceives its environment through sensors and acts upon it through actuators",
    "A database server",
    "A static neural network"
  ],
  correctAnswer: 1, // رقم الفهرس (0 للـ A، 1 للـ B، 2 للـ C، 3 للـ D)
  explanationAr: "الوكيل هو أي كيان يدرك بيئته عبر أجهزة الاستشعار ويؤثر فيها بالمشغلات.",
  explanationEn: "An agent is anything that perceives its environment through sensors and acts through actuators."
}
```

### مثال سؤال صح أم خطأ (True / False):
```javascript
{
  id: 302,
  type: "true_false",
  chapterId: 3,
  chapter: "Chapter 3: Solving Problems by Searching",
  question: "Breadth-First Search (BFS) is optimal when step costs are non-uniform.",
  options: ["True", "False"],
  correctAnswer: 1, // 0 لـ True، 1 لـ False
  explanationAr: "خطأ: البحث بالعرض أولاً يكون مثالياً فقط عند تساوي تكاليف الخطوات، أما مع التكاليف المختلفة فالأمثل هو Uniform-Cost Search.",
  explanationEn: "False: BFS is only optimal when all step costs are identical. For non-uniform costs, Uniform-Cost Search is required."
}
```

---

## 🎨 كيفية تعديل التصميم والألوان

افتح ملف `style.css` لتعديل متغيرات التصميم في قسم `:root` أو `[data-theme="dark"]`:
- `--primary`: اللون الأساسي للأزرار والعناصر التفاعلية.
- `--success`: لون الإجابة الصحيحة.
- `--danger`: لون الإجابة الخاطئة.
- `--bg-primary` & `--bg-card`: ألوان الخلفيات والبطاقات.

---

## 🛡️ الاستقلال والأمان

- لا يعتمد المشروع على أي مكتبات خارجية إجبارية.
- يعمل بدون اتصال بالإنترنت (Offline-ready).
- مستقل تماماً وغير مرتبط بأي مشاريع أخرى.
