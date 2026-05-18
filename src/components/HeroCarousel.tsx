import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import heroHeadphones from "@/assets/hero-headphones-rose.jpg";
import heroPhones from "@/assets/hero-phones-rose.jpg";
import heroTablets from "@/assets/hero-tablets-rose.jpg";
import heroAudio from "@/assets/hero-audio-rose.jpg";

const slides = [
  {
    image: heroHeadphones,
    alt: "אוזניות פרימיום במחירים שווים",
    eyebrow: "מבצעי השקה — עד 40% הנחה",
    title: (
      <>
        הטכנולוגיה שאתם אוהבים
        <br />
        במחירים של Onsus
      </>
    ),
    sub: "סלולר, אוזניות, גיימינג ומוצרי חשמל — מהמותגים המובילים",
  },
  {
    image: heroPhones,
    alt: "סמארטפונים חדשים",
    eyebrow: "חדש בחנות — סמארטפונים 2025",
    title: (
      <>
        הסמארטפונים החמים
        <br />
        בתשלומים נוחים
      </>
    ),
    sub: "מבחר רחב מ-Apple, Samsung, Xiaomi ועוד — במחירים שלא תמצאו",
  },
  {
    image: heroTablets,
    alt: "טאבלטים לכל המשפחה",
    eyebrow: "מבצע השבוע — טאבלטים",
    title: (
      <>
        טאבלטים לעבודה,
        <br />
        ללימודים ולפנאי
      </>
    ),
    sub: "iPad, Galaxy Tab ועוד — מלאי מוגבל במחירי מבצע",
  },
  {
    image: heroAudio,
    alt: "מערכות שמע ורמקולים",
    eyebrow: "עולם השמע — עד 35% הנחה",
    title: (
      <>
        סאונד שעוצר נשימה
        <br />
        בבית ובדרכים
      </>
    ),
    sub: "רמקולים, סאונדברים ואוזניות מהמותגים המובילים בעולם",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section dir="rtl" className="w-full">
      <div className="relative overflow-hidden shadow-2xl bg-brand">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[480px]">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt={slide.alt}
              width={1920}
              height={1080}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-3/5 sm:w-1/2 px-3 sm:px-6 md:px-12 lg:px-16 text-right text-white">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-medium">
                {slides[index].eyebrow}
              </p>
              <h2 className="mt-2 md:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-[1.05] text-white">
                {slides[index].title}
              </h2>
              <p className="mt-2 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/90 hidden sm:block">
                {slides[index].sub}
              </p>
              <div className="mt-3 md:mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop-default"
                  className="inline-flex items-center gap-2 bg-white text-brand hover:bg-white/90 transition-colors font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3.5 lg:py-4 rounded-full shadow-lg active:scale-95"
                >
                  קנו עכשיו
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`עבור לשקופית ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
