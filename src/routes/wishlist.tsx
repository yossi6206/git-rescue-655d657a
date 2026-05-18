import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart, formatPrice } from "@/lib/cart";
import echoDot from "@/assets/products/echo-dot.png";
import phone from "@/assets/products/phone.png";
import smartwatch from "@/assets/products/smartwatch.png";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "רשימת מועדפים" },
      { name: "description", content: "המוצרים האהובים עליך" },
    ],
  }),
  component: WishlistPage,
});

type WishItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  inStock: boolean;
};

const initialItems: WishItem[] = [
  {
    id: "clock-bronze-30",
    name: "שעון קיר רומי עתיק מברונזה 30\"",
    image: echoDot,
    price: 375,
    oldPrice: 490,
    inStock: true,
  },
  {
    id: "canon-sx70",
    name: "מצלמה דיגיטלית Canon PowerShot SX70 HS",
    image: phone,
    price: 620,
    oldPrice: 750,
    inStock: true,
  },
  {
    id: "alcatel-tcl-a3",
    name: "Net10 Alcatel TCL A3, 32GB סמארטפון Prepaid",
    image: smartwatch,
    price: 425,
    oldPrice: 500,
    inStock: true,
  },
];

function WishlistPage() {
  const { addItem } = useCart();
  const [items, setItems] = useState<WishItem[]>(initialItems);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleAdd = (item: WishItem) => {
    addItem({
      id: item.id,
      title: item.name,
      img: item.image,
      price: formatPrice(item.price),
      priceValue: item.price,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main dir="rtl" className="flex-1 w-full max-w-7xl mx-auto px-6 py-10">
        {/* Page header */}
        <div className="mb-8 text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">רשימת מועדפים</h1>
          <nav className="mt-2 text-sm text-muted-foreground flex items-center gap-2 justify-end">
            <Link to="/" className="hover:text-brand">בית</Link>
            <ChevronLeft className="w-4 h-4" />
            <span>רשימת מועדפים</span>
          </nav>
        </div>

        {items.length === 0 ? (
          <div className="border border-border rounded-lg p-16 text-center">
            <p className="text-lg text-muted-foreground mb-4">רשימת המועדפים שלך ריקה</p>
            <Link
              to="/shop-default"
              className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              המשך בקניות
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="border border-border rounded-lg overflow-hidden bg-white">
            {/* Desktop table */}
            <table className="w-full hidden md:table text-right">
              <thead className="bg-muted/40 text-foreground">
                <tr className="text-sm">
                  <th className="px-4 py-4 w-12"></th>
                  <th className="px-4 py-4 w-24"></th>
                  <th className="px-4 py-4 font-bold">שם המוצר</th>
                  <th className="px-4 py-4 font-bold">מחיר</th>
                  <th className="px-4 py-4 font-bold">מלאי</th>
                  <th className="px-4 py-4 w-44"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-t border-border">
                    <td className="px-4 py-5 align-middle">
                      <button
                        onClick={() => handleRemove(item.id)}
                        aria-label="הסר"
                        className="text-muted-foreground hover:text-brand transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <div className="w-16 h-16 rounded-md bg-muted/30 flex items-center justify-center overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <Link
                        to="/product-detail"
                        className="text-brand font-semibold hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <div className="flex items-baseline gap-2">
                        <span className="text-foreground font-bold text-lg">
                          {formatPrice(item.price)}
                        </span>
                        <span className="text-muted-foreground line-through text-sm">
                          {formatPrice(item.oldPrice)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <span
                        className={
                          item.inStock
                            ? "text-emerald-600 font-medium"
                            : "text-destructive font-medium"
                        }
                      >
                        {item.inStock ? "במלאי" : "אזל"}
                      </span>
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <button
                        onClick={() => handleAdd(item)}
                        disabled={!item.inStock}
                        className="w-full bg-brand text-white font-semibold px-5 py-3 rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        הוסף לעגלה
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-border">
              {items.map((item) => (
                <div key={item.id} className="p-4 flex gap-3">
                  <div className="w-20 h-20 shrink-0 rounded-md bg-muted/30 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link to="/product-detail" className="text-brand font-semibold text-sm leading-tight">
                        {item.name}
                      </Link>
                      <button
                        onClick={() => handleRemove(item.id)}
                        aria-label="הסר"
                        className="text-muted-foreground hover:text-brand"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-foreground font-bold">{formatPrice(item.price)}</span>
                      <span className="text-muted-foreground line-through text-xs">
                        {formatPrice(item.oldPrice)}
                      </span>
                    </div>
                    <div className="mt-1 text-xs">
                      <span className={item.inStock ? "text-emerald-600" : "text-destructive"}>
                        {item.inStock ? "במלאי" : "אזל"}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAdd(item)}
                      disabled={!item.inStock}
                      className="mt-3 w-full bg-brand text-white font-semibold px-4 py-2.5 rounded-md hover:opacity-90 transition text-sm disabled:opacity-50"
                    >
                      הוסף לעגלה
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
