import { Star, ShoppingBag, Heart, Eye, Shuffle } from "lucide-react";
import { useCart, parsePrice } from "@/lib/cart";
import { openQuickView } from "@/lib/quick-view";
import laptop from "@/assets/products/laptop.png";
import coffeeMachine from "@/assets/products/coffee-machine.png";
import phone from "@/assets/products/phone.png";
import tv from "@/assets/products/tv.png";
import smartwatch from "@/assets/products/smartwatch.png";
import earbuds from "@/assets/products/earbuds.png";
import echoDot from "@/assets/products/echo-dot.png";
import robotVacuum from "@/assets/products/robot-vacuum.png";
import playstation from "@/assets/products/playstation.png";
import mouse from "@/assets/products/mouse.png";

type Product = {
  title: string;
  price: string;
  oldPrice: string;
  available: number;
  total: number;
  img: string;
  isNew?: boolean;
};

const products: Product[] = [
  { title: 'מחשב נייד Chromebook Flip 14"', price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: laptop, isNew: true },
  { title: "מכשיר בישול אורז 4 כוסות", price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: coffeeMachine, isNew: true },
  { title: "Huawei P20 Pro סמארטפון", price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: phone, isNew: true },
  { title: 'טלוויזיה חכמה 50" 4K', price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: tv, isNew: true },
  { title: "סמארטפון Galaxy A13 5G", price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: smartwatch, isNew: true },
  { title: "אוזניות גיימינג Acer", price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: earbuds, isNew: true },
  { title: "Galaxy A13 5G סמארטפון", price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: echoDot, isNew: true },
  { title: 'מסך 75Hz 1080p LED 24"', price: "₪103.20", oldPrice: "₪128.00", available: 334, total: 514, img: robotVacuum, isNew: true },
];

function ProductCard({ p }: { p: Product }) {
  const { addItem } = useCart();
  return (
    <a
      href="#"
      className="group flex flex-col overflow-hidden transition-shadow"
    >
      <div className="relative aspect-square bg-white border border-border rounded-md flex items-center justify-center overflow-hidden">
        {p.isNew && (
          <span className="absolute top-2 right-2 z-10 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full">
            חדש
          </span>
        )}
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          {[
            { Icon: ShoppingBag, label: "הוסף לסל", action: "cart" as const },
            { Icon: Heart, label: "הוסף למועדפים", action: "fav" as const },
            { Icon: Eye, label: "צפייה מהירה", action: "view" as const },
            { Icon: Shuffle, label: "השוואה", action: "compare" as const },
          ].map(({ Icon, label, action }, i) => (
            <div key={i} className="relative group/btn flex items-center justify-start">
              <span className="absolute left-full ml-2 whitespace-nowrap bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-md opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200 pointer-events-none">
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
                    openQuickView({ category: "מומלצים", title: p.title, price: p.price, img: p.img });
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
        <span className="text-sm text-muted-foreground">זמין: {p.available}</span>
        <h3 className="text-base font-bold leading-snug line-clamp-2 group-hover:underline" style={{ color: "#C2747D" }}>
          {p.title}
        </h3>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-xl font-bold text-foreground">{p.price}</span>
          <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>
        </div>
      </div>
    </a>
  );
}

const featured = {
  title: "מצלמת אבטחה Amazon Cloud Cam",
  price: "₪103.20",
  oldPrice: "₪128.00",
  discount: "-34%",
  rating: 5,
  reviews: 126,
  available: 334,
  sold: 180,
  img: coffeeMachine,
  thumbs: [laptop, coffeeMachine, phone],
};

export function ProductShowcase() {
  const left = products.slice(0, 4);
  const right = products.slice(4, 8);

  const sidePctTotal = featured.available + featured.sold;
  const featPct = (featured.available / sidePctTotal) * 100;

  return (
    <section dir="rtl" className="w-full px-3 md:px-6 py-8 md:py-12">
      <div className="mb-6 flex items-end justify-between border-b border-border pb-3">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          ביקורת 5 כוכבים
        </h2>
        <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-brand">סמארטפונים</a>
          <a href="#" className="hover:text-brand">אביזרים</a>
          <a href="#" className="text-brand font-bold border-b-2 border-brand pb-1">
            הכל
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {/* Left side - 2 cols × 2 rows */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {left.map((p, i) => (
            <ProductCard key={`l-${i}`} p={p} />
          ))}
        </div>

        {/* Featured center */}
        <div className="col-span-2 md:col-span-2 row-span-2 border-2 border-brand rounded-xl p-5 bg-card flex flex-col">
          <h3 className="text-lg font-bold text-foreground border-b border-border pb-3 mb-3">
            ביקורת 5 כוכבים
          </h3>
          <div className="flex-1 flex items-center justify-center mb-4">
            <img
              src={featured.img}
              alt={featured.title}
              loading="lazy"
              className="max-h-56 w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>
              זמין: <span className="font-bold text-foreground">{featured.available}</span>
            </span>
            <span>
              נמכר: <span className="font-bold text-foreground">{featured.sold}</span>
            </span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mb-3">
            <div className="h-full bg-brand rounded-full" style={{ width: `${featPct}%` }} />
          </div>
          <h4 className="text-base font-bold text-foreground mb-1">{featured.title}</h4>
          <div className="flex items-center gap-1.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < featured.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground">({featured.reviews})</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-brand">{featured.price}</span>
            <span className="text-xs text-muted-foreground line-through">
              {featured.oldPrice}
            </span>
            <span className="bg-brand text-white text-[10px] font-bold px-2 py-1 rounded">
              {featured.discount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {featured.thumbs.map((t, i) => (
              <button
                key={i}
                type="button"
                className={`w-14 h-14 rounded-md border ${
                  i === 0 ? "border-brand" : "border-border"
                } bg-muted/40 flex items-center justify-center overflow-hidden`}
              >
                <img src={t} alt="" className="w-full h-full object-contain p-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - 2 cols × 2 rows */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {right.map((p, i) => (
            <ProductCard key={`r-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
