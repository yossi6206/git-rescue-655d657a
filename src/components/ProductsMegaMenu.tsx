import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, Rocket, Crown, BadgePercent, Star, Gem, Heart } from "lucide-react";
import laptop from "@/assets/products/laptop.png";
import phone from "@/assets/products/phone.png";
import tv from "@/assets/products/tv.png";
import smartwatch from "@/assets/products/smartwatch.png";
import earbuds from "@/assets/products/earbuds.png";
import echoDot from "@/assets/products/echo-dot.png";
import coffeeMachine from "@/assets/products/coffee-machine.png";
import robotVacuum from "@/assets/products/robot-vacuum.png";
import mouse from "@/assets/products/mouse.png";
import playstation from "@/assets/products/playstation.png";

type Product = { title: string; price: string; img: string; oldPrice?: string };

const tabs: {
  id: string;
  label: string;
  icon: typeof Rocket;
  gradient: string;
  products: Product[];
}[] = [
  {
    id: "new",
    label: "חדש בחנות",
    icon: Rocket,
    gradient: "from-sky-500 to-indigo-500",
    products: [
      { title: 'טלוויזיה חכמה 55" 4K', price: "₪2,490", img: tv },
      { title: "סמארטפון AMOLED", price: "₪1,990", img: phone },
      { title: "מחשב נייד דק וקל", price: "₪3,799", img: laptop },
      { title: "שעון ספורט חכם GPS", price: "₪1,899", img: smartwatch },
    ],
  },
  {
    id: "hot",
    label: "הנמכרים ביותר",
    icon: Crown,
    gradient: "from-amber-400 to-orange-500",
    products: [
      { title: "קונסולת גיימינג", price: "₪1,499", img: playstation },
      { title: "שואב אבק רובוטי", price: "₪1,290", img: robotVacuum },
      { title: "אוזניות עם ביטול רעשים", price: "₪399", img: earbuds },
      { title: "רמקול חכם", price: "₪249", img: echoDot },
    ],
  },
  {
    id: "deals",
    label: "מבצעים חמים",
    icon: BadgePercent,
    gradient: "from-rose-500 to-pink-500",
    products: [
      { title: "מכונת אספרסו לבית", price: "₪699", oldPrice: "₪899", img: coffeeMachine },
      { title: "עכבר ארגונומי USB-C", price: "₪99", oldPrice: "₪129", img: mouse },
      { title: 'טלוויזיה חכמה 55" 4K', price: "₪1,990", oldPrice: "₪2,490", img: tv },
      { title: "שעון ספורט חכם GPS", price: "₪1,499", oldPrice: "₪1,899", img: smartwatch },
    ],
  },
  {
    id: "premium",
    label: "פרימיום",
    icon: Gem,
    gradient: "from-violet-500 to-fuchsia-500",
    products: [
      { title: "מחשב נייד דק וקל", price: "₪3,799", img: laptop },
      { title: 'טלוויזיה חכמה 55" 4K', price: "₪2,490", img: tv },
      { title: "שעון ספורט חכם GPS", price: "₪1,899", img: smartwatch },
      { title: "מכונת אספרסו לבית", price: "₪899", img: coffeeMachine },
    ],
  },
  {
    id: "foryou",
    label: "מומלצים בשבילך",
    icon: Heart,
    gradient: "from-emerald-500 to-teal-500",
    products: [
      { title: "אוזניות עם ביטול רעשים", price: "₪399", img: earbuds },
      { title: "רמקול חכם", price: "₪249", img: echoDot },
      { title: "סמארטפון AMOLED", price: "₪1,990", img: phone },
      { title: "עכבר ארגונומי USB-C", price: "₪129", img: mouse },
    ],
  },
];

const brands = ["Apple", "Samsung", "LG", "Sony", "Bosch", "Philips", "Xiaomi", "Lenovo"];

export function ProductsMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button className="flex items-center gap-1 text-foreground hover:text-brand transition">
        <span>מוצרים</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </button>

      {open && (
        <div
          dir="rtl"
          className="fixed inset-x-0 z-50 mt-3"
          style={{ top: "var(--mega-menu-top, 168px)" }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150">
              {/* Tabs */}
              <div className="flex items-center gap-1 border-b border-border bg-muted/30 px-3 py-2">
                {tabs.map((t) => {
                  const Icon = t.icon;
                  const isActive = t.id === activeTab;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onMouseEnter={() => setActiveTab(t.id)}
                      onFocus={() => setActiveTab(t.id)}
                      className={
                        "group flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 " +
                        (isActive
                          ? "bg-white text-foreground shadow-md ring-1 ring-border"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/60")
                      }
                    >
                      <span
                        className={
                          "h-7 w-7 rounded-full flex items-center justify-center text-white shadow-sm bg-gradient-to-br transition-transform duration-200 " +
                          t.gradient +
                          (isActive ? " scale-110" : " group-hover:scale-105")
                        }
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span>{t.label}</span>
                    </button>
                  );
                })}
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="mr-auto text-sm font-semibold text-brand hover:underline flex items-center gap-1"
                >
                  לכל המוצרים
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-[1fr_280px]">
                {/* Products grid */}
                <div className="p-6 grid grid-cols-4 gap-4">
                  {current.products.map((p) => (
                    <Link
                      key={p.title}
                      to="/"
                      onClick={() => setOpen(false)}
                      className="group flex flex-col items-center text-center p-3 rounded-lg border border-transparent hover:border-border hover:shadow-md transition-all"
                    >
                      <div className="h-28 w-full flex items-center justify-center bg-muted/30 rounded-md mb-3 overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                          className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-xs font-medium text-foreground group-hover:text-brand line-clamp-2 leading-snug min-h-[2.5rem]">
                        {p.title}
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-sm font-bold text-brand">{p.price}</span>
                        {p.oldPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {p.oldPrice}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Side panel: promo + brands */}
                <aside className="border-r border-border bg-gradient-to-br from-brand/5 to-brand/10 p-6 flex flex-col gap-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-brand text-white text-[11px] font-bold px-2.5 py-1 rounded-full mb-3">
                      <Star className="h-3 w-3 fill-white" />
                      מומלץ השבוע
                    </div>
                    <h4 className="text-base font-bold text-foreground leading-snug">
                      הטאבלטים המובילים של 2026
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      ביצועים, מסכים מרהיבים וסוללה לכל היום
                    </p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-brand">-10%</span>
                      <span className="text-xs text-muted-foreground">הנחה בלעדית</span>
                    </div>
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-brand hover:underline"
                    >
                      לקנייה
                      <ChevronLeft className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="text-xs font-bold text-foreground mb-2 text-right">
                      מותגים מובילים
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {brands.map((b) => (
                        <Link
                          key={b}
                          to="/"
                          onClick={() => setOpen(false)}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-border text-foreground hover:bg-brand hover:text-white hover:border-brand transition-colors"
                        >
                          {b}
                        </Link>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
