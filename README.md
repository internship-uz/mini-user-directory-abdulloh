# Mini User Directory API Loyihasi

Bu loyiha tashqi API'dan (JSONPlaceholder) ma'lumotlarni qabul qilib, ularni responsiv va chiroyli interfeysda ko'rsatuvchi React ilovadir. Foydalanuvchi ma'lumotlarini qidirish, yuklanish jarayonini kuzatish (loading) va xatoliklarni (error handling) ko'rsatish logikalari to'liq joriy qilingan.

## 🚀 Loyiha Xususiyatlari va O'zgartirishlar

- **Ma'lumotlarni Fetch Qilish:** `api.js` orqali JSONPlaceholder API-dan asinxron tarzda foydalanuvchilar ro'yxati olinadi.
- **Custom Hook:** API so'rovlarni va ularning holatini (data, loading, error) boshqarish uchun maxsus `useUsers` hook yaratilib, kodning qayta ishlatiluvchanligi ta'minlandi.
- **State Management:** Butun ilova bo'ylab holatni boshqarish uchun (masalan qidiruv tizimi natijalari va foydalanuvchilar ro'yxatini uzatish uchun) **React Context API** (`UserContext`) ishlatildi.
- **Qidiruv (Search) Tizimi:** Foydalanuvchilarni ismlari bo'yicha qidiruv filteri logikasi qo'shildi.
- **Responsiv va Chiroyli Dizayn:** Tailwind CSS (v4) yordamida har bir foydalanuvchi chiroyli kartochkalarga joylandi va ular har xil qurilmalarga (`Card`) moslashadigan (`Grid`) qilib yasaldi. 
- **Foydalanuvchi Ma'lumotlari Modali (Modal / Popup):** Foydalanuvchi kartochkasiga bosilganda uning qo'shimcha ma'lumotlarini (veb-sayt, to'liq manzil va kompaniya) ko'rsatuvchi chiroyli va interaktiv `UserDetailsModal` komponenti qo'shildi.
- **Loading va Error UI:** Ma'lumotlar kelgunicha Loading spin, xatolik yuz bersa Error xabarlari maxsus vizual tarzda ko'rsatiladi.

## 🛠 Ishlatilgan Texnologiyalar

- **React.js (v19):** UI komponentlarini qurish uchun.
- **Vite:** Loyihani tezkor build qilish va local development server yaratish uchun.
- **Tailwind CSS (v4):** Styling va responsiv dizayn uchun.
- **React Context / Hooks (`useState`, `useEffect`):** State va life-cycle larni boshqarish uchun.
- **Lucide React:** Zamonaviy ikonkalardan foydalanish uchun.
- **Fetch API:** Backend/External API ga so'rovlar yuborish uchun.

## 📂 Loyiha Strukturasi (Asosiy)

```
src/
 ├── components/     # UI komponentlar (Navbar, Card, Filter, UserDetailsModal)
 ├── context/        # Context API logikalari (UserContext)
 ├── hooks/          # Custom hook'lar (useUsers)
 ├── service/        # Backend yoki tashqi API'lar bilan ishlovchi logikalar (api.js)
 ├── App.jsx         # Asosiy ildiz komponent
 └── main.jsx        # Ilovani DOM'ga render qiluvchi fayl
```

## ⚙️ Loyihani Ishga Tushirish

Loyihani o'zingizning kompyuteringizda ishga tushirish uchun quyidagi qadamlarni bajaring:

1. Modullarni o'rnatish:
   ```bash
   npm install
   ```
2. Loyihani local serverda ishga tushirish:
   ```bash
   npm run dev
   ```
3. Brauzerda berilgan manzilni (odatda `http://localhost:5173/`) oching.