import { Link } from "@tanstack/react-router";
import coffee from "@/assets/cat/coffee.png";
import smallAppliances from "@/assets/cat/small-appliances.png";
import dishwasher from "@/assets/cat/dishwasher.png";
import cooking from "@/assets/cat/cooking.png";
import laundry from "@/assets/cat/laundry.png";
import fridge from "@/assets/cat/fridge.png";
import ac from "@/assets/cat/ac.png";
import phone from "@/assets/cat/phone.png";
import laptop from "@/assets/cat/laptop.png";
import tv from "@/assets/cat/tv.png";
import scooter from "@/assets/cat/scooter.png";
import smartHome from "@/assets/cat/smart-home.png";
import sport from "@/assets/cat/sport.png";
import garden from "@/assets/cat/garden.png";
import home from "@/assets/cat/home.png";
import iron from "@/assets/cat/iron.png";
import beauty from "@/assets/cat/beauty.png";
import gaming from "@/assets/cat/gaming.png";
import audio from "@/assets/cat/audio.png";
import vacuum from "@/assets/cat/vacuum.png";

const categories: { label: string; img: string; slug?: string; href?: string }[] = [
  { label: "עולם הקפה", img: coffee, slug: "coffee-world" },
  { label: "מוצרי חשמל קטנים למטבח", img: smallAppliances, slug: "small-kitchen-appliances" },
  { label: "מדיחי כלים", img: dishwasher, href: "/shop-dishwashers" },
  { label: "אפיה ובישול", img: cooking, slug: "cooking-baking" },
  { label: "מכונות וייבשי כביסה", img: laundry, slug: "laundry-dryers" },
  { label: "מקררים ומקפיאים", img: fridge, slug: "fridges-freezers" },
  { label: "מיזוג ואקלים", img: ac, slug: "ac-climate" },
  { label: "סלולר", img: phone, slug: "mobile" },
  { label: "מחשוב וסלולר", img: laptop, slug: "computing-mobile" },
  { label: "עולם הטלוויזיות", img: tv, slug: "tv-world" },
  { label: "קורקינט והוברבורד", img: scooter },
  { label: "מוצרי בית חכם", img: smartHome, slug: "smart-home" },
  { label: "ספורט", img: sport, slug: "sport" },
  { label: "לגן", img: garden, slug: "garden" },
  { label: "לבית", img: home, slug: "home" },
  { label: "מגהצים", img: iron },
  { label: "טיפוח ויופי", img: beauty, slug: "beauty" },
  { label: "עולם הגיימינג", img: gaming },
  { label: "אוזניות וסאונד", img: audio },
  { label: "שואבי אבק ומכונות שטיפה", img: vacuum },
];

export function CategoryGrid() {
  return (
    <section dir="rtl" className="w-full py-6 md:py-10 px-3 md:px-6 my-[26px]">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-3 sm:gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-12">
        {categories.map((c) => {
          const inner = (
            <>
              <div className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-2 md:mt-4 text-xs sm:text-sm md:text-[15px] font-bold text-foreground leading-tight max-w-[8rem]">
                {c.label}
              </span>
            </>
          );
          return c.href ? (
            <Link
              key={c.label}
              to={c.href}
              className="flex flex-col items-center text-center group"
            >
              {inner}
            </Link>
          ) : c.slug ? (
            <Link
              key={c.label}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="flex flex-col items-center text-center group"
            >
              {inner}
            </Link>
          ) : (
            <button
              key={c.label}
              className="flex flex-col items-center text-center group"
            >
              {inner}
            </button>
          );
        })}
      </div>
    </section>
  );
}
