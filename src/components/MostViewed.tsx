import { openQuickView } from "@/lib/quick-view";
import { ShoppingBag, Heart, Eye, Shuffle } from "lucide-react";
import { useCart, parsePrice } from "@/lib/cart";
import tv from "@/assets/products/tv.png";
import phone from "@/assets/products/phone.png";
import laptop from "@/assets/products/laptop.png";
import smartwatch from "@/assets/products/smartwatch.png";
import earbuds from "@/assets/products/earbuds.png";

const products = [
  { category: "טלוויזיות", title: 'טלוויזיה חכמה 65" 4K עם HDR', price: "₪3,290", img: tv },
  { category: "סלולר", title: "סמארטפון פרימיום עם מצלמה מתקדמת", price: "₪2,990", img: phone },
  { category: "מחשבים ניידים", title: "מחשב נייד עוצמתי לעריכה ולגיימינג", price: "₪4,599", img: laptop },
  { category: "שעון חכם", title: "שעון חכם עם מד דופק וניטור שינה", price: "₪1,499", img: smartwatch },
  { category: "אוזניות אלחוטיות", title: "אוזניות אלחוטיות עם איכות סאונד גבוהה", price: "₪599", img: earbuds },
];

export function MostViewed() {
  const { addItem } = useCart();
  return (
    <section dir="rtl" className="w-full py-6 md:py-10 px-3 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        הנצפים ביותר
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group flex flex-col overflow-hidden transition-shadow"
          >
            <div className="relative aspect-square bg-white border border-border rounded-md flex items-center justify-center overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
              />
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
                          openQuickView({ category: p.category, title: p.title, price: p.price, img: p.img });
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
              <span className="text-2xl font-bold text-foreground mt-1">
                {p.price}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
