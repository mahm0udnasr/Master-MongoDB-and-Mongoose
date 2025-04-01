# مقدمة عن Mongoose

## يعني ايه Mongoose؟
ببساطه Mongoose هو **Object Data Modeling (ODM)** ل **Node.js** و **MongoDB**، وبيسهل التعامل مع البيانات جوه المشروع بتاعك.

## ليه نستخدم Mongoose؟
عشان Mongoose بيحل مشاكل كتير لما تيجي تتعامل مع MongoDB، زي:
- **إدارة العلاقات بين البيانات** 
- **توفير Schema Validation** 
- **ترجمة البيانات بين الكود وقاعدة البيانات** 

## ازاي Mongoose بيسهل الشغل مع MongoDB؟
- **توفير API سهل الاستخدام**: بدل ما تكتب Queries كتير، Mongoose بيبسط الحاجات دي 
- **تعريف Schema للبيانات**: عشان تضمن إن كل البيانات اللي بتدخل تكون بنفس الشكل 
- **التحقق من البيانات (Validation)**: قبل ما تحفظ البيانات، بيتم التأكد إنها صح 
- **دعم Middleware**: تقدر تنفذ أكواد معينة في مراحل مختلفة من التعامل مع البيانات 

## ازاي تنزل Mongoose؟
كل اللي عليك تعمله إنك تشغل الأمر ده في مشروعك:
```sh
npm i mongoose
```

كده جهزنا Mongoose عندك، واللي جاي هندخل على الأساسيات واستخداماته بالأمثلة! 

# شوية حجات هتحتاج تكون عارفها

### يعني إيه Schema في Mongoose؟
**الـ Schema** هو المخطط اللي بيحدد شكل الـ Document جوه **MongoDB Collection**. يعني هو اللي بيقولك كل Document جواه إيه بالظبط، وبيحدد **الـ Fields، أنواع البيانات، القيم الافتراضية، قواعد التحقق، الفهارس (Indexes)، وغيرهم**.

### إزاي بنعمل Schema في Mongoose؟
ببساطة، بنستخدم `mongoose.Schema()` بالشكل ده:

```js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // الاسم مطلوب
  age: { type: Number, min: 18 }, // العمر مينفعش يكون أقل من 18
  email: { type: String, required: true, unique: true }, // الإيميل لازم يكون موجود وميكونش مكرر
  isActive: { type: Boolean, default: true }, // الحالة الافتراضية للمستخدم انه يكون نشط
  hobbies: { type: [String] } // مصفوفة بتحتوي على هوايات المستخدم
});
```

---

### أنواع البيانات اللي ممكن نستخدمها في Schema
في Mongoose، عندك أنواع كتير للبيانات، وأشهرهم:
- **String** → نصوص  
- **Number** → أرقام  
- **Boolean** → صح أو غلط  
- **Array** → مصفوفات  
- **Date** → للتواريخ  
- **mongoose.Decimal128** → للأرقام العشرية الدقيقة  
- **mongoose.ObjectId** → للـ **IDs** الخاصة بالـ Documents التانية  

مثال لاستخدام أنواع مختلفة:
```js
const productSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  price: { type: mongoose.Decimal128, required: true },
  inStock: { type: Boolean, default: true },
  tags: { type: [String] }, // مصفوفة
  createdAt: { type: Date, default: Date.now }
});
```

---

### خصائص إضافية ممكن تضيفها للـ Schema
حاجه حلوه ان Mongoose بيديلك شوية خواص مهمة تضبط بيها البيانات بتاعتك:

| الخاصية | وظيفتها |
|---------|--------|
| `required: true` | لازم يكون فيه قيمة للحقل ده |
| `unique: true` | القيم متكررش (مفيد في الإيميل مثلاً) |
| `default: value` | لو المستخدم مدخلش قيمة، يستخدم الافتراضي |
| `min: value` | أقل قيمة مسموح بيها (للأرقام) |
| `max: value` | أعلى قيمة مسموح بيها |
| `enum: [values]` | القيم لازم تكون من القيم اللي انت محددها |

مثال:
```js
const orderSchema = new mongoose.Schema({
  status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" },
  quantity: { type: Number, min: 1, required: true }
});
```