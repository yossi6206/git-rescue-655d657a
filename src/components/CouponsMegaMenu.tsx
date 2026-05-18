import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronLeft,
  Ticket,
  Copy,
  Clock,
  Flame,
  Truck,
  Gift,
  Percent,
  Sparkles,
  Smartphone,
  Laptop,
  Tv,
  ChefHat,
  Coffee,
  Sparkle,
  ArrowLeft,
} from "lucide-react";
import earbudsImg from "@/assets/products/earbuds.png";
import phoneImg from "@/assets/products/phone.png";
import tvImg from "@/assets/products/tv-smart-65.png";
import coffeeImg from "@/assets/products/coffee-machine.png";

type Coupon = {
  code: string;
  title: string;
  desc: string;
  icon: typeof Ticket;
  gradient: string;
  expires: string;
  badge?: string;
  image: string;
  productName: string;
};

const coupons: Coupon[] = [
  {
    code: "WELCOME10",
    title: "10% הנחה למצטרפים",
    desc: "בהזמנה הראשונה — לכל הקטגוריות",
    icon: Sparkles,
    gradient: "from-sky-500 to-indigo-500",
    expires: "תקף עד 31.12",
    badge: "חדש",
    productName: "אוזניות אלחוטיות",
    image: earbudsImg,
  },
  {
    code: "FREESHIP",
    title: "משלוח חינם",
    desc: "בהזמנות מעל ₪199 ללא מוצרים מבצעים",
    icon: Truck,
    gradient: "from-emerald-500 to-teal-500",
    expires: "השבוע בלבד",
    productName: "סמארטפון חדש",
    image: phoneImg,
  },
  {
    code: "HOT25",
    title: "25% הנחה על נבחרת מבצעים",
    desc: "בלעדי לקוד — על מוצרים נבחרים",
    icon: Flame,
    gradient: "from-rose-500 to-pink-500",
    expires: "מוגבל ל-48 שעות",
    badge: "חם",
    productName: "מסך טלוויזיה 4K",
    image: tvImg,
  },
  {
    code: "GIFT50",
    title: "מתנה בשווי ₪50",
    desc: "בהזמנה מעל ₪599 — מוצר מפנק",
    icon: Gift,
    gradient: "from-violet-500 to-fuchsia-500",
    expires: "עד גמר המלאי",
    productName: "מכונת קפה",
    image: coffeeImg,
  },
];

const categoryDeals = [
  { name: "סלולר ואביזרים", discount: "30%", icon: Smartphone, color: "text-sky-500", bg: "bg-sky-50" },
  { name: "מחשבים ניידים", discount: "25%", icon: Laptop, color: "text-violet-600", bg: "bg-violet-50" },
  { name: "טלוויזיות ומסכים", discount: "20%", icon: Tv, color: "text-fuchsia-600", bg: "bg-fuchsia-50" },
  { name: "מוצרי חשמל למטבח", discount: "40%", icon: ChefHat, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "עולם הקפה", discount: "35%", icon: Coffee, color: "text-amber-700", bg: "bg-amber-50" },
  { name: "טיפוח ויופי", discount: "50%", icon: Sparkle, color: "text-rose-500", bg: "bg-rose-50" },
];

export function CouponsMegaMenu() {
  const [open, setOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      /* noop */
    }
    setCopiedCode(code);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopiedCode(null), 1500);
  };

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
        <span>קופונים</span>
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
              {/* Header strip */}
              <div className="flex items-center justify-between border-b border-border bg-gradient-to-l from-brand/10 via-white to-white px-5 py-3">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      הקופונים השווים של החודש
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      העתק קוד, הדבק בקופה וקבל הנחה מיידית
                    </div>
                  </div>
                </div>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-brand hover:underline flex items-center gap-1"
                >
                  לכל הקופונים
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-[1fr_300px]">
                {/* Coupons grid */}
                <div className="p-6 grid grid-cols-2 gap-3">
                  {coupons.map((c) => {
                    const Icon = c.icon;
                    const isCopied = copiedCode === c.code;
                    return (
                      <div
                        key={c.code}
                        className="group relative flex items-stretch rounded-lg border border-dashed border-border bg-white hover:border-brand hover:shadow-md transition-all overflow-hidden"
                      >
                        {/* Right side: product image with tinted background (RTL first) */}
                        <div className="relative w-24 shrink-0 overflow-hidden">
                          <div
                            className={
                              "absolute inset-0 bg-gradient-to-br " + c.gradient
                            }
                          />
                          <img
                            src={c.image}
                            alt={c.productName}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-contain p-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                          />
                          <span className="absolute top-1 right-1 bg-white/90 text-foreground rounded-full p-1 shadow">
                            <Icon className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          <span className="absolute bottom-1 left-1 bg-white/90 text-foreground rounded-full p-0.5 shadow">
                            <Percent className="h-2.5 w-2.5" strokeWidth={2.5} />
                          </span>
                        </div>

                        {/* Notch */}
                        <div className="relative w-0">
                          <span className="absolute -right-2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border border-border" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-3 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-foreground truncate">
                              {c.title}
                            </h4>
                            {c.badge && (
                              <span className="text-[10px] font-bold bg-brand/10 text-brand px-1.5 py-0.5 rounded shrink-0">
                                {c.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                            {c.desc}
                          </p>
                          <p className="text-[10px] text-muted-foreground/80 mt-0.5 italic truncate">
                            לדוגמה: {c.productName}
                          </p>

                          <div className="mt-2 flex items-center justify-between gap-2">
                            <button
                              type="button"
                              onClick={() => handleCopy(c.code)}
                              className="flex items-center gap-1.5 bg-muted/60 hover:bg-brand/10 text-foreground hover:text-brand text-xs font-bold px-2 py-1 rounded border border-dashed border-border transition-colors"
                            >
                              <Copy className="h-3 w-3" />
                              <span className="font-mono tracking-wider">
                                {isCopied ? "הועתק!" : c.code}
                              </span>
                            </button>
                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {c.expires}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Side panel: category deals */}
                <aside className="relative border-r border-border bg-gradient-to-br from-brand/5 via-white to-brand/10 p-5 flex flex-col overflow-hidden">
                  {/* Decorative blob */}
                  <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-20 -right-10 h-44 w-44 rounded-full bg-pink-300/20 blur-3xl" />

                  <div className="relative mb-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-extrabold text-foreground tracking-tight">
                        הנחות לפי קטגוריה
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand/80">
                        Sale
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      מבצעים בלעדיים בכל מחלקה
                    </p>
                    <div className="mt-3 h-px bg-gradient-to-l from-transparent via-brand/30 to-transparent" />
                  </div>

                  <ul className="relative space-y-1.5 flex-1">
                    {categoryDeals.map((d) => {
                      const Icon = d.icon;
                      return (
                        <li key={d.name}>
                          <Link
                            to="/"
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between gap-2 pr-2 pl-3 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-white hover:border-brand/30 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all text-right"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span
                                className={
                                  "h-9 w-9 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform " +
                                  d.color
                                }
                              >
                                <Icon className="h-6 w-6" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
                              </span>
                              <span className="text-xs font-semibold text-foreground group-hover:text-brand truncate">
                                {d.name}
                              </span>
                            </div>
                            <span className="flex items-center gap-0.5 text-[11px] font-extrabold text-brand bg-gradient-to-l from-brand/15 to-brand/5 px-2 py-1 rounded-full whitespace-nowrap border border-brand/10">
                              <span>עד</span>
                              <span>{d.discount}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="relative mt-4 group inline-flex items-center justify-center gap-2 bg-gradient-to-l from-brand via-rose-500 to-pink-500 text-white text-sm font-bold py-3 rounded-xl shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5 transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                    <Gift className="h-4 w-4" />
                    קבל את כל ההטבות
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
