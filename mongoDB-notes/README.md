<style>* {direction: rtl;}</style>

# أساسيات MongoDB

## 🔹 ما هي MongoDB؟

MongoDB هي **قاعدة بيانات NoSQL** مفتوحة المصدر، **مشهور جدًا** وبيستخدم **document-oriented storage** بدلاً من الجداول (زي قواعد البيانات التقليدية). بتستخدم **BSON** كـ **صيغة تخزين**، وهي شبيهة بـ JSON لكنها أكتر كفاءة.

### ✨ مميزاتها:

- بتقدر تتعامل مع **داتا غير مرتبة أو غير مهيئة** في **التطبيقات الريل تايم**.
- مناسبة جدًا لتطبيقات الويب والموبايل.
- بتوفر **أداء عالي وسرعة** في معالجة البيانات.

## 🔹 مفهوم الـ Document والـ Collection

في MongoDB، البيانات بتكون على شكل **Documents**، ودي عبارة عن **JSON Objects**. كل **Document** بيحتوي على **Fields**، ولو عندنا **مجموعة Documents** مع بعض، ده بيتسمى **Collection**.

### مثال على Document في MongoDB:

```json
{
  "_id": ObjectId("d8jhd845lhds"),
  "name": "Mahmoud",
  "age": 19
}
```

📌 **الشرح:**

- `_id`:

  هو **المفتاح الأساسي** لكل document.

- `name` و `age`:

  **Fields** عادية بتحتوي بيانات.

### 🗂️ علاقة الوثائق ببعضها:

| المصطلح        | المعنى                                                         |
| -------------- | -------------------------------------------------------------- |
| **Document**   | هو عبارة عن مجموعة key-value بتمثل سجل بيانات داخل Collection. |
| **Field**      | هو عنصر داخل الـ Document بيحمل قيمة معينة.                    |
| **Collection** | مجموعة من الوثائق المرتبطة ببعضها داخل نفس قاعدة البيانات.     |
| **Database**   | هي المكان اللي بيتخزن فيه الـ Collections.                     |

## 🔹 تثبيت MongoDB على جهازك 🖥️

عشان تبدأ تشتغل على MongoDB، لازم تنزلها الأول على جهازك. 🛠️

1️⃣ **تحميل MongoDB**

- ادخل على اللينك ده:  
  [Download MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- انزل لتحت واختار **MongoDB Community Server**.
- بعد كده، اختار الـ **Version, Platform, Package** وخليهم زي ما هم غالبًا بيكونوا مضبوطين تلقائي.
- اضغط **Download** واستنى التحميل.

2️⃣ **تحميل MongoDB Shell (Mongosh)**

- عشان تشغل أوامر MongoDB من الـ Terminal، لازم تنزل **MongoDB Shell**.
- ادخل هنا:  
  [Download MongoDB Shell](https://www.mongodb.com/try/download/shell)
- اعمل نفس خطوات التحميل زي MongoDB.

🎥 **طريقة التثبيت بالفيديو:**
لو عايز تشوف الشرح عملي، تابع الفيديو ده عشان تعمل كل حاجة صح بدون مشاكل:
[كيفية تثبيت MongoDB](https://youtu.be/1bMy6gPTg-4)

---

**بكده نكون خلصنا الأساسيات، وهنبدأ إن شاء الله ندخل في الشغل الفعلي! 🚀**
