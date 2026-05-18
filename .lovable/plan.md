# ניהול מוצרים דרך Lovable Cloud (Supabase)

מטרה: להעביר את כל המוצרים מקובץ סטטי בקוד (`src/lib/products-data.ts`) למסד נתונים, כך שתוכל להוסיף/לערוך/למחוק מוצרים בלי לגעת בקוד — דרך פאנל ניהול באתר עצמו.

## מה תקבל בסוף

1. **טבלת `products` במסד נתונים** עם כל שדות המוצר (שם, מחיר, תמונה, מלאי, תיאור, מפרט וכו').
2. **טבלת `categories`** לקטגוריות (סלולר, מחשבים, טלוויזיות וכו').
3. **דף ניהול `/admin`** מאובטח — רק למשתמשים עם תפקיד `admin`:
   - רשימת כל המוצרים בטבלה
   - כפתור "הוסף מוצר" עם טופס מלא
   - עריכה/מחיקה לכל מוצר
   - העלאת תמונות ל-Storage של Cloud
4. **כניסה (Login)** עם אימייל+סיסמה ו-Google כדי שתוכל להזדהות כאדמין.
5. **האתר עצמו** (דף הבית, חנות, מוצר בודד) יקרא את המוצרים מהמסד במקום מהקובץ — כל שינוי שתעשה ב-`/admin` יופיע מיד באתר.

## איך זה יעבוד עבורך

1. נכנס ל-`/login` → מתחבר עם המייל שלך
2. נכנס ל-`/admin` → רואה את כל המוצרים
3. לוחץ "הוסף מוצר" → ממלא טופס (שם, מחיר, קטגוריה, תמונה...) → שומר
4. המוצר מופיע מיד באתר, ללא דיפלוי וללא קוד

## שלבי ביצוע

1. **הפעלת Lovable Cloud** (פעולה אחת, ללא הרשמה חיצונית).
2. **יצירת סכמת מסד נתונים**: `profiles`, `user_roles`, `categories`, `products`, `product_specs`, `product_about` + RLS policies + Storage bucket לתמונות.
3. **מערכת התחברות**: דפי `/login` + `/signup`, קומפוננטת `useAuth`, הגנת ראוטים.
4. **דף ניהול `/admin`** עם CRUD מלא למוצרים וקטגוריות + העלאת תמונות.
5. **חיבור האתר למסד**: החלפת `POPULAR_PRODUCTS` הסטטי בקריאה ל-Cloud בכל הקומפוננטות (PopularProducts, ShopDefault, product/$slug וכו').
6. **סידור ראשוני (Seeding)**: ייבוא 10 המוצרים הקיימים מהקובץ למסד הנתונים, כדי שלא תאבד את מה שיש.

## פרטים טכניים

- **טבלאות עיקריות**:
  - `products(id, slug, category_id, title, price, old_price, image_url, rating, reviews, sold, sku, description, in_stock, created_at)`
  - `product_specs(id, product_id, label, value, sort_order)`
  - `product_about(id, product_id, text, sort_order)`
  - `categories(id, slug, name, sort_order)`
  - `user_roles(user_id, role)` עם enum `app_role = ('admin','user')` + פונקציית `has_role()` (SECURITY DEFINER) למניעת recursion ב-RLS.
- **RLS**:
  - קריאה ל-`products`/`categories`/`product_*` — פתוח לכולם (`USING true`).
  - כתיבה — רק `has_role(auth.uid(), 'admin')`.
- **Storage**: bucket ציבורי `product-images` עם policy שמרשה upload רק לאדמינים.
- **Server functions**: `getProducts`, `getProductBySlug`, `createProduct`, `updateProduct`, `deleteProduct`, `uploadProductImage` — כולן ב-`src/lib/products.functions.ts` עם `requireSupabaseAuth` לפעולות הכתיבה.
- **טיפוסים**: שמירת `ProductData` הקיים כממשק הציבורי, מיפוי משורת DB לאותו צורה כדי שהקומפוננטות הקיימות ימשיכו לעבוד ללא שינוי גדול.

## מה לא נכלל בשלב הזה

- תשלומים בפועל (Stripe/Paddle) — נפרד.
- ניהול הזמנות, משלוחים, קופונים — אפשר להוסיף אחר כך.
- מערכת מלאי מתקדמת (וריאנטים, מידות, צבעים) — נוסיף לפי הצורך.

## עלות

- **Lovable Cloud** — חינם בשימוש בסיסי. אין צורך בחשבון נפרד.
- **ללא** מנוי חודשי קבוע כמו ב-Shopify.
