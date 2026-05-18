import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Heart, Eye, Shuffle, ChevronDown, ChevronUp } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { openQuickView } from "@/lib/quick-view";
import { useCart, parsePrice } from "@/lib/cart";
import playstation from "@/assets/products/playstation.png";
import echoDot from "@/assets/products/echo-dot.png";
import earbuds from "@/assets/products/earbuds.png";
import smartwatch from "@/assets/products/smartwatch.png";
import mouse from "@/assets/products/mouse.png";
import tv from "@/assets/products/tv.png";
import laptop from "@/assets/products/laptop.png";
import phone from "@/assets/products/phone.png";
import coffeeMachine from "@/assets/products/coffee-machine.png";
import robotVacuum from "@/assets/products/robot-vacuum.png";

export const Route = createFileRoute("/shop-default")({
  head: () => ({
    meta: [
      { title: "חנות - Shop Default" },
      { name: "description", content: "דף חנות עם מסננים וכרטיסי מוצרים" },
    ],
  }),
  component: ShopDefault,
});

const products = [
  { category: "קונסולות משחק", title: "PlayStation 4 Slim 1TB – קונסולת גיימינג בעלת ביצועים גבוהים", price: "₪1,499", img: playstation },
  { category: "רמקולים חכמים", title: "Echo Dot (דור 3) – רמקול חכם עם Alexa", price: "₪249", img: echoDot },
  { category: "אוזניות אלחוטיות", title: "Sony ZX Series – אוזניות חוטיות עם נוחות מירבית", price: "₪399", img: earbuds },
  { category: "שעון חכם", title: "SUUNTO 9 – שעון GPS לספורטאים עם סוללה ארוכה", price: "₪1,899", img: smartwatch },
  { category: "אלקטרוניקה", title: "Lenovo 400 USB-C – עכבר ארגונומי קומפקטי", price: "₪129", img: mouse },
  { category: "טלוויזיות", title: "טלוויזיה חכמה 55 אינץ' 4K UHD – חוויית צפייה מרהיבה", price: "₪2,490", img: tv },
  { category: "מחשבים ניידים", title: "מחשב נייד 15.6 אינץ' – מעבד עוצמתי לעבודה ולימודים", price: "₪3,799", img: laptop },
  { category: "סלולר", title: "סמארטפון מתקדם – מסך AMOLED ומצלמה איכותית", price: "₪1,990", img: phone },
  { category: "עולם הקפה", title: "מכונת אספרסו מקצועית – קפה איכותי בבית", price: "₪899", img: coffeeMachine },
  { category: "שואבי אבק", title: "שואב אבק רובוטי חכם – ניקוי אוטומטי לבית", price: "₪1,290", img: robotVacuum },
];

const subCatalog = [
  { label: "טלפונים סלולרים", count: 385, checked: true },
  { label: "טלפונים לגיל השלישי", count: 5 },
];

const manufacturers = [
  { label: "Samsung", count: 138 },
  { label: "Apple", count: 76 },
  { label: "OnePlus", count: 16 },
  { label: "Xiaomi", count: 87 },
  { label: "REDMAGIC", count: 7 },
  { label: "Oppo", count: 24 },
];

const models = [
  { label: "Oppo Find N6 5G", count: 2 },
  { label: "Google Pixel 10a", count: 3 },
  { label: "Nothing Phone (4a)", count: 5 },
  { label: "Xiaomi Poco X8 Pro 5G", count: 9 },
  { label: "Xiaomi Poco X8 Pro Max 5G", count: 6 },
  { label: "Galaxy A37 5G", count: 11 },
];

type FilterItem = { label: string; count: number; checked?: boolean };

function FilterGroup({
  title,
  items,
  showMore,
}: {
  title: string;
  items: FilterItem[];
  showMore?: boolean;
}) {
  const [open, setOpen] = useState(true);
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
      <FilterGroup title="קטלוג משני (1 נבחרו מתוך 2)" items={subCatalog} />
      <FilterGroup title="יצרן (15 אפשרויות)" items={manufacturers} showMore />
      <FilterGroup title="דגם (92 אפשרויות)" items={models} showMore />
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

function ShopDefault() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main dir="rtl" className="w-full px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">חנות</h1>
          <p className="text-sm text-muted-foreground mt-1">דף ברירת מחדל - כל המוצרים</p>
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
