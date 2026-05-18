import { useState } from "react";
import { Eye } from "lucide-react";
import { openQuickView } from "@/lib/quick-view";
import tv from "@/assets/products/tv.png";
import echoDot from "@/assets/products/echo-dot.png";
import smartwatch from "@/assets/products/smartwatch.png";
import earbuds from "@/assets/products/earbuds.png";
import mouse from "@/assets/products/mouse.png";
import laptop from "@/assets/products/laptop.png";
import phone from "@/assets/products/phone.png";
import robotVacuum from "@/assets/products/robot-vacuum.png";
import coffeeMachine from "@/assets/products/coffee-machine.png";

type Product = {
  category: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  img: string;
};

const categories = [
  { id: "car", label: "אלקטרוניקה לרכב", img: tv },
  { id: "acc", label: "אביזרים", img: echoDot },
  { id: "music", label: "כלי נגינה", img: smartwatch },
  { id: "monitors", label: "מסכים", img: earbuds },
  { id: "drives", label: "אחסון וכוננים", img: coffeeMachine },
  { id: "computers", label: "מחשבים, טאבלטים ומוצרי PC", img: mouse },
];

const products: Product[] = [
  { category: "רמקולים", title: "Harman Kardon Onyx Studio", price: "₪1,450.00", oldPrice: "₪1,215.00", discount: "-30%", img: tv },
  { category: "רמקולים", title: "Harman Kardon Onyx Studio", price: "₪1,215.00", img: earbuds },
  { category: "טלפונים סלולריים", title: "Harman Kardon Onyx Studio", price: "₪1,215.00", img: laptop },
  { category: "מחשבים ואביזרים", title: "Cordless TrackMan Wheel", price: "₪1,215.00", img: mouse },
  { category: "רמקולים", title: 'HP 22er מסך 21.5"', price: "₪1,450.00", oldPrice: "₪1,215.00", img: phone },
  { category: "מצלמות וצילום", title: "Cordless TrackMan Wheel", price: "₪1,215.00", img: robotVacuum },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="relative rounded-xl border border-border bg-card p-3 hover:shadow-lg transition group">
      {p.discount && (
        <span className="absolute top-2 left-2 z-10 w-10 h-10 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shadow-md">
          {p.discount}
        </span>
      )}
      <div className="h-24 flex items-center justify-center mb-2">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="max-h-20 w-auto object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <p className="text-[11px] text-muted-foreground mb-0.5">{p.category}</p>
      <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-1">
        {p.title}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className={`text-sm font-bold ${p.oldPrice ? "text-brand" : "text-foreground"}`}>
            {p.price}
          </span>
          {p.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {p.oldPrice}
            </span>
          )}
        </div>
        <button
          type="button"
          aria-label="צפייה מהירה"
          onClick={() => openQuickView({ category: p.category, title: p.title, price: p.price, img: p.img })}
          className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-brand hover:bg-brand/10 transition"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}

export function CategoryBrowser() {
  const [active, setActive] = useState("car");

  return (
    <section dir="rtl" className="w-full px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <ul className="rounded-xl border border-border overflow-hidden bg-card">
            {categories.map((c) => {
              const isActive = active === c.id;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setActive(c.id)}
                    className={`w-full flex items-center gap-3 p-3 text-right transition relative ${
                      isActive
                        ? "bg-gradient-to-l from-brand to-brand/70 text-white"
                        : "text-foreground hover:bg-muted/50 border-b border-border last:border-b-0"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ${
                        isActive ? "bg-white/20" : "bg-muted/40"
                      }`}
                    >
                      <img
                        src={c.img}
                        alt=""
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <span className="flex-1 font-semibold text-sm">
                      {c.label}
                    </span>
                    {isActive && (
                      <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-brand/70" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Products grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <ProductCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
