import { Star } from "lucide-react";
import phone from "@/assets/products/phone.png";
import smartwatch from "@/assets/products/smartwatch.png";
import earbuds from "@/assets/products/earbuds.png";
import echoDot from "@/assets/products/echo-dot.png";
import laptop from "@/assets/products/laptop.png";
import tv from "@/assets/products/tv.png";
import mouse from "@/assets/products/mouse.png";
import coffeeMachine from "@/assets/products/coffee-machine.png";
import robotVacuum from "@/assets/products/robot-vacuum.png";

type Item = {
  category: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  img: string;
};

const onSale: Item[] = [
  { category: "אוזניות", title: "אוזניות אלחוטיות", rating: 5, reviews: 3, price: "₪103.20", img: earbuds },
  { category: "אוזניות", title: "אוזניות גיימינג", rating: 4, reviews: 2, price: "₪123.50", img: echoDot },
  { category: "סמארטפונים וטאבלטים", title: "טאבלט גלקסי אנדרואיד", rating: 5, reviews: 2, price: "₪288.00", img: phone },
];

const recommended: Item[] = [
  { category: "אוזניות", title: "אוזניות עם מיקרופון", rating: 5, reviews: 3, price: "₪110.00", img: smartwatch },
  { category: "סמארטפונים וטאבלטים", title: "אייפון 14 פרו", rating: 4, reviews: 2, price: "₪1,019.15", img: phone },
  { category: "סמארטפונים וטאבלטים", title: "אייפד אייר של אפל", rating: 5, reviews: 2, price: "₪949.05", img: laptop },
];

const bestSellers: Item[] = [
  { category: "אוזניות", title: "אוזניות גיימינג", rating: 4, reviews: 2, price: "₪123.50", img: mouse },
  { category: "אוזניות", title: "אוזניות אלחוטיות", rating: 5, reviews: 3, price: "₪103.20", img: tv },
  { category: "אוזניות", title: "אוזניות עם מיקרופון", rating: 5, reviews: 3, price: "₪110.00", img: coffeeMachine },
];

const columns: { title: string; items: Item[] }[] = [
  { title: "מוצרים במבצע", items: onSale },
  { title: "מוצרים מומלצים", items: recommended },
  { title: "מוצרים נמכרים", items: bestSellers },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function ProductRow({ item }: { item: Item }) {
  return (
    <a
      href="#"
      className="group flex items-center gap-5 py-5 hover:opacity-90 transition"
    >
      <div className="w-32 h-32 shrink-0 rounded-2xl bg-muted/40 flex items-center justify-center overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-contain p-3 transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex-1 text-right min-w-0">
        <p className="text-sm text-muted-foreground truncate">{item.category}</p>
        <h3 className="text-lg font-bold text-foreground truncate">{item.title}</h3>
        <div className="mt-2 flex items-center justify-end gap-2 text-sm text-muted-foreground">
          <span>({item.reviews} ביקורות)</span>
          <Stars rating={item.rating} />
        </div>
        <p className="mt-2 text-lg font-bold text-brand">{item.price}</p>
      </div>
    </a>
  );
}

export function ProductColumns() {
  return (
    <section dir="rtl" className="w-full py-8 md:py-12 px-3 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6 pb-4 border-b-2 border-brand/30">
              {col.title}
            </h2>
            <ul className="divide-y divide-border">
              {col.items.map((item) => (
                <li key={col.title + item.title}>
                  <ProductRow item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
