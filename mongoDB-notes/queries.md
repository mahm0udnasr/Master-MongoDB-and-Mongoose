# استعلامات MongoDB بكل بساطة

## 1. إضافة البيانات في MongoDB (Inserting Data)

### استخدام `insertOne`
لو عاوز تضيف Document واحد ل Collection معين، هتستخدم `insertOne` بالشكل ده:
```js
db.collectionName.insertOne(document, options)
```
مثال عملي:
```js
db.users.insertOne({
  "name": "Mahmoud",
  age: 18
})
```

### استخدام `insertMany`
لو عاوز تضيف أكتر من Document في نفس الوقت، هتستخدم `insertMany` مع Array of Objects:
```js
db.users.insertMany([
  { "name": "Mahmoud", age: 18 },
  { "name": "Ali", age: 22 },
  { "name": "Sara", age: 25 }
])
```

---

## 2. البحث عن البيانات (Finding Data)

### جلب كل البيانات من Collection معين
```js
db.collectionName.find()
```

### البحث عن Document معين باستخدام شرط
مثلاً، عاوز تجيب بيانات شخص معين عن طريق الإيميل:
```js
db.users.find({"email": "email@example.com"})
```

### استبعاد أو تحديد بيانات معينة
لو عاوز تعرض بيانات المستخدم بدون الباسورد:
```js
db.users.find({"email": "email@example.com"}, {"password": 0})
```
ولو عاوز تعرض فقط الإيميل والاسم:
```js
db.users.find({}, {"email": 1, "name": 1})
```

---

## 3. الترتيب، التحديد، والتخطي (Sort, Limit & Skip)

### تحديد عدد النتائج اللي بترجع
مثلاً، لو عاوز تجيب أول 2 فقط:
```js
db.users.find().limit(2)
```

### تخطي عدد معين من النتائج
مثلاً، لو عاوز تجيب 2 بس بعد تخطي أول 2:
```js
db.users.find().limit(2).skip(2)
```

### ترتيب النتائج تصاعدي أو تنازلي
مثلاً، ترتيب حسب الاسم تصاعدياً:
```js
db.users.find().sort({"name": 1})
```
ولو عاوز ترتيب تنازلي:
```js
db.users.find().sort({"name": -1})
```

---

## 4. استخدام Operators في البحث

### البحث عن أعمار أقل من 30
```js
db.users.find({age: {$lt : 30}})
```

### البحث عن أعمار أكبر من 25
```js
db.users.find({age: {$gt : 25}})
```

ممكن تبحث بنفس الطريقة باستخدام `$lte`, `$gte`, `$ne` وغيرهم.

---

## 5. تحديث البيانات (Updating Documents)

### تحديث بيانات Document واحد باستخدام `updateOne`
لو عاوز تحدث بيانات شخص معين:
```js
db.users.updateOne({"name": "Mahmoud"}, { $set: {age: 19} })
```

### تحديث بيانات أكتر من Document باستخدام `updateMany`
لو عاوز تغير كل الناس اللي `isActive` عندهم `false` إلى `true`:
```js
db.users.updateMany({isActive: false}, {$set: {isActive: true}})
```

---

## 6. حذف البيانات (Deleting Documents)

### حذف Document واحد باستخدام `deleteOne`
لو عاوز تحذف مستخدم معين:
```js
db.users.deleteOne({"name": "Mahmoud"})
```

### حذف أكتر من Document باستخدام `deleteMany`
مثلاً، حذف كل الناس اللي عمرهم 15:
```js
db.users.deleteMany({age: 15})
```

⚠️ خد بالك إنك لو استخدمت `deleteMany()` بدون أي شرط، هتحذف كل البيانات اللي في ال Collection!

---

كده خلصنا كل الأساسيات في MongoDB، واللي بعدها هنبدأ في Mongoose! 🚀

