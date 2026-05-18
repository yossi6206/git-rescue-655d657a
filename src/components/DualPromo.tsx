import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import promoHeadphones from "@/assets/promo-headphones.jpg";
import promoSmartwatch from "@/assets/promo-smartwatch.jpg";

export function DualPromo() {
  return (
    <section dir="rtl" className="w-full px-3 md:px-6 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Headphones promo */}
        <article className="relative overflow-hidden rounded-3xl group h-80 md:h-96">
          <img
            src={promoHeadphones}
            alt="אוזניות אלחוטיות במבצע"
            loading="lazy"
            width={960}
            height={512}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center items-start text-right text-white p-8 md:p-10">
            <span className="text-brand text-sm md:text-base font-bold tracking-widest uppercase">
              מבצע מוגבל
            </span>
            <h3 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight max-w-md">
              אוזניות פרימיום
              <br />
              עד <span className="text-brand">40% הנחה</span>
            </h3>
            <p className="mt-3 text-base md:text-lg text-white/80 max-w-md">
              שמע סטודיו אמיתי, עיצוב חסר פשרות
            </p>
            <Link
              to="/shop-default"
              className="mt-6 inline-flex items-center gap-2 bg-brand text-black font-bold text-base md:text-lg px-8 py-3.5 rounded-full hover:opacity-90 transition active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
              לקנייה
            </Link>
          </div>
        </article>

        {/* Smartwatch promo */}
        <article className="relative overflow-hidden rounded-3xl group h-80 md:h-96">
          <img
            src={promoSmartwatch}
            alt="שעון חכם חדש"
            loading="lazy"
            width={960}
            height={512}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center items-start text-right text-white p-8 md:p-10">
            <span className="text-white/90 text-sm md:text-base font-bold tracking-widest uppercase">
              חדש בחנות
            </span>
            <h3 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight max-w-md">
              שעון חכם
              <br />
              <span className="text-white">דור חדש</span>
            </h3>
            <p className="mt-3 text-base md:text-lg text-white/85 max-w-md">
              בריאות, ספורט וחיבוריות — על פרק היד שלך
            </p>
            <Link
              to="/shop-default"
              className="mt-6 inline-flex items-center gap-2 bg-white text-brand font-bold text-base md:text-lg px-8 py-3.5 rounded-full hover:opacity-90 transition active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
              גלו עכשיו
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
