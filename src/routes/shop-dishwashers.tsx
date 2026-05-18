import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Heart, Eye, Shuffle, ChevronDown, ChevronUp } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { openQuickView } from "@/lib/quick-view";
import { useCart, parsePrice } from "@/lib/cart";
import dishwasher from "@/assets/products/dishwasher.png";

export const Route = createFileRoute("/shop-dishwashers")({
  head: () => ({
    meta: [
      { title: "מדיחי כלים - חנות" },
      { name: "description", content: "מדיחי כלים מובילים במחירים משתלמים" },
    ],
  }),
  component: ShopDishwashers,
});

const products = [
  { category: "מדיחי כלים", title: "מדיח כלים רחב 60 ס\"מ נירוסטה - 14 מערכות כלים", price: "₪2,290", img: dishwasher },
  { category: "מדיחי כלים", title: "מדיח כלים אינטגרלי מלא - שקט במיוחד 42dB", price: "₪3,490", img: dishwasher },
  { category: "מדיחי כלים", title: "מדיח כלים צר 45 ס\"מ - 10 מערכות כלים", price: "₪1,890", img: dishwasher },
  { category: "מדיחי כלים", title: "מדיח כלים שולחני קומפקטי - 6 מערכות כלים", price: "₪1,290", img: dishwasher },
  { category: "מדיחי כלים", title: "מדיח כלים פרימיום עם מסך LED - 15 מערכות", price: "₪4,190", img: dishwasher },
  { category: "מדיחי כלים", title: "מדיח כלים חצי אינטגרלי - חיסכון באנרגיה A+++", price: "₪2,890", img: dishwasher },
  { category: "מדיחי כלים", title: "מדיח כלים חכם WiFi - שליטה מהאפליקציה", price: "₪3,990", img: dishwasher },
  { category: "מדיחי כלים", title: "מדיח כלים נירוסטה Anti-Fingerprint - 13 מערכות", price: "₪2,690", img: dishwasher },
];

const brands = [
  { label: "AEG", count: 10 },
  { label: "Bauknecht", count: 5 },
  { label: "Beko", count: 10 },
  { label: "Blomberg", count: 6 },
  { label: "BOSCH", count: 26 },
  { label: "Candy", count: 3 },
  { label: "COMENDA", count: 1 },
  { label: "Crystal", count: 2 },
  { label: "DeLonghi", count: 6 },
  { label: "Electrolux", count: 1 },
  { label: "General", count: 10 },
  { label: "Gorenje", count: 2 },
  { label: "Hisense", count: 1 },
  { label: "Lenco", count: 2 },
  { label: "LG", count: 2 },
  { label: "Midea", count: 7 },
  { label: "MIELE", count: 8 },
  { label: "Normande", count: 2 },
  { label: "PILOT", count: 1 },
  { label: "Samsung", count: 3 },
  { label: "Sauter", count: 6 },
  { label: "SIEMENS", count: 17 },
  { label: "ZANUSSI", count: 2 },
];

const dishwasherTypes = [
  { label: "מדיח רחב 60 ס\"מ", count: 105 },
  { label: "מדיח צר 45 ס\"מ", count: 26 },
  { label: "מדיח על השיש", count: 2 },
];

const colors = [
  { label: "לבן", count: 34 },
  { label: "דמוי נירוסטה/כסוף", count: 34 },
  { label: "צבעוני", count: 1 },
  { label: "חצי אינטגרלי (ללא דלת)", count: 10 },
  { label: "אינטגרלי מלא (ללא דלת)", count: 42 },
  { label: "שחור", count: 9 },
  { label: "נירוסטה מושחרת", count: 3 },
];

const placeSettings = [
  { label: "עד 6 מערכות כלים", count: 3 },
  { label: "7-9 מערכות כלים", count: 6 },
  { label: "10-12 מערכות כלים", count: 27 },
  { label: "13 מערכות כלים ומעלה", count: 97 },
];

const programs = [
  { label: "עד 3 תוכניות", count: 8 },
  { label: "4-5 תוכניות", count: 29 },
  { label: "6 תוכניות ומעלה", count: 96 },
];

const depth = [
  { label: "עד 55 ס\"מ", count: 34 },
  { label: "56-58 ס\"מ", count: 24 },
  { label: "58-60 ס\"מ", count: 55 },
  { label: "61-65 ס\"מ", count: 4 },
  { label: "מעל 65 ס\"מ", count: 3 },
];

const appConnect = [{ label: "כולל חיבור לאפליקציה", count: 52 }];
const delayTimer = [{ label: "כולל טיימר הפעלה מאוחרת", count: 109 }];

const noiseLevel = [
  { label: "עד 45db", count: 53 },
  { label: "46db-49db", count: 37 },
  { label: "49db-52db", count: 16 },
  { label: "מעל 52db", count: 7 },
];

const waterUsage = [
  { label: "עד 7 ליטר", count: 10 },
  { label: "8-10 ליטר", count: 81 },
  { label: "11-13 ליטר", count: 16 },
];

const thirdRack = [
  { label: "סלסילה", count: 80 },
  { label: "מגירת סכום", count: 21 },
  { label: "ללא", count: 8 },
  { label: "לא צוין", count: 23 },
];

const energyRating = [
  { label: "A+", count: 2 },
  { label: "A", count: 14 },
  { label: "B", count: 8 },
  { label: "C", count: 20 },
  { label: "לא צוין", count: 5 },
  { label: "D", count: 40 },
  { label: "E", count: 43 },
  { label: "F", count: 1 },
];

const dryingResult = [
  { label: "A+ (איכותי יותר מ-A)", count: 5 },
  { label: "A", count: 8 },
  { label: "B", count: 1 },
  { label: "C ומעלה", count: 2 },
  { label: "לא צויין", count: 117 },
];

const cleaningResult = [
  { label: "A+ (איכותי יותר מ-A)", count: 1 },
  { label: "A", count: 20 },
  { label: "B", count: 1 },
  { label: "C ומעלה", count: 3 },
  { label: "לא צויין", count: 108 },
];

type FilterItem = { label: string; count: number; checked?: boolean };

function FilterGroup({
  title,
  items,
  showMore,
  defaultOpen = false,
}: {
  title: string;
  items: FilterItem[];
  showMore?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border pb-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between mb-4"
      >
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <span className="text-foreground/70">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>

      {open && (
        <>
          <ul className="space-y-3">
            {items.map((it) => (
              <li key={it.label} className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={it.checked}
                    className="w-4 h-4 accent-brand cursor-pointer"
                  />
                  <span className="text-foreground">{it.label}</span>
                </label>
                <span className="text-muted-foreground tabular-nums">{it.count}</span>
              </li>
            ))}
          </ul>
          {showMore && (
            <div className="mt-4 text-left">
              <a href="#" className="text-sm text-brand underline hover:opacity-80">
                פתחו עוד
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-full lg:w-72 shrink-0 self-start space-y-5">
      <FilterGroup title="סנן לפי מותגים" items={brands} showMore defaultOpen />
      <FilterGroup title="סנן לפי סוג המדיח" items={dishwasherTypes} defaultOpen />
      <FilterGroup title="סנן לפי צבע" items={colors} defaultOpen />
      <FilterGroup title="סנן לפי מערכות כלים" items={placeSettings} />
      <FilterGroup title="סנן לפי מגוון תוכניות" items={programs} />
      <FilterGroup title="סנן לפי עומק" items={depth} />
      <FilterGroup title="סנן לפי חיבור לאפליקציה" items={appConnect} />
      <FilterGroup title="סנן לפי טיימר הפעלה מאוחרת" items={delayTimer} />
      <FilterGroup title="סנן לפי עצמת רעש" items={noiseLevel} />
      <FilterGroup title="סנן לפי צריכת מים להדחה" items={waterUsage} />
      <FilterGroup title="סנן לפי אחסון שלישי לסכום" items={thirdRack} />
      <FilterGroup title="סנן לפי דירוג אנרגטי" items={energyRating} />
      <FilterGroup title="סנן לפי תוצאות ייבוש כלים" items={dryingResult} />
      <FilterGroup title="סנן לפי תוצאות ניקוי" items={cleaningResult} />
    </aside>
  );
}

function ProductCard({ p }: { p: typeof products[number] }) {
  const { addItem } = useCart();
  return (
    <a href="#" className="group flex flex-col overflow-hidden transition-shadow">
      <div className="relative aspect-square flex items-center justify-center overflow-hidden">
        <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105" />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          {[
            { Icon: ShoppingBag, label: "הוסף לסל", action: "cart" as const },
            { Icon: Heart, label: "הוסף למועדפים", action: "fav" as const },
            { Icon: Eye, label: "צפייה מהירה", action: "view" as const },
            { Icon: Shuffle, label: "השוואה", action: "compare" as const },
          ].map(({ Icon, label, action }, i) => (
            <div key={i} className="relative group/btn flex items-center justify-end">
              <span className="absolute right-full mr-2 whitespace-nowrap bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-md opacity-0 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200 pointer-events-none">
                {label}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (action === "cart") {
                    addItem({
                      id: p.title,
                      title: p.title,
                      price: p.price,
                      priceValue: parsePrice(p.price),
                      img: p.img,
                    });
                  } else if (action === "view") {
                    openQuickView(p);
                  }
                }}
                className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-colors"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <Icon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">{p.category}</span>
        <h3 className="text-lg font-bold leading-snug line-clamp-2 group-hover:underline" style={{ color: "#C2747D" }}>
          {p.title}
        </h3>
        <span className="text-2xl font-bold text-foreground mt-1">{p.price}</span>
      </div>
    </a>
  );
}

function ShopDishwashers() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main dir="rtl" className="w-full px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">מדיחי כלים</h1>
          <p className="text-sm text-muted-foreground mt-1">מבחר מדיחי כלים איכותיים</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar />

          <div className="flex-1">
            <div className="border-t border-border pt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((p) => (
                  <ProductCard key={p.title} p={p} />
                ))}
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-6 flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                    n === 1
                      ? "bg-brand text-white"
                      : "bg-muted text-foreground hover:bg-brand/20"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                className="w-9 h-9 rounded-full text-sm font-medium bg-muted text-foreground hover:bg-brand/20 transition-colors"
                aria-label="הבא"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
