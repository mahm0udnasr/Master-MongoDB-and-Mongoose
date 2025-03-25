# ⚡ تهيئة بيئة MongoDB على الجهاز

بعد ما تنزل MongoDB، ممكن تواجه مشكلة إن السيرفر مش شغال. عشان تحل المشكلة، اتبع الخطوات دي:

## 1️⃣ إضافة MongoDB لـ Environment Variables
- روح للمسار اللي فيه MongoDB على جهازك، وعادةً بيكون بالشكل ده:
  ```
  C:\Program Files\MongoDB\Server\x.x\bin
  ```
  **(غير x.x للإصدار اللي نزلته)**
- خد المسار **Copy**.
- في بحث الويندوز، اكتب **Edit the system environment variables** أو اختصارًا **env**.
- اضغط على **Environment Variables...**.
- في الجزء الأول اللي اسمه **User variables for [DeviceName]**، دور على **Path**، اختارها، واضغط **Edit**.
- اضغط **New**، وحط المسار اللي نسخته.
- اضغط **OK** لحد ما تقفل كل النوافذ المفتوحة.

## 2️⃣ إضافة MongoDB Shell للمسار
- فك ضغط ملف **MongoDB Shell** اللي نزلته.
- حط الملفات في المسار ده:
  ```
  C:\Program Files\MongoDB\
  ```
- بعد كده، ادخل على المجلد اللي فكيت فيه الملف، وخد مسار مجلد **bin**.
- كرر نفس الخطوات اللي فوق لإضافته في **Environment Variables**.

🎥 **فيديو شرح العملية دي:**
[حل مشاكل تشغيل MongoDB](https://youtu.be/jvaBaxlTqU8)