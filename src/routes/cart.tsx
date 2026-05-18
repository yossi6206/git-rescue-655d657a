import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, X, ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { BeforeCheckoutProducts } from "@/components/BeforeCheckoutProducts";
import { useCart, formatPrice } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "עגלת קניות" },
      { name: "description", content: "עגלת הקניות שלך" },
    ],
  }),
  component: CartPage,
});

type ShippingOption = "fixed" | "pickup" | "free";

const shippingCosts: Record<ShippingOption, number> = {
  fixed: 20,
  pickup: 25,
  free: 0,
};

function CartPage() {
  const { items, updateQty, removeItem, subtotal, closeCart } = useCart();
  const [shipping, setShipping] = useState<ShippingOption>("fixed");
  const [coupon, setCoupon] = useState("");

  // Make sure the side drawer is closed when viewing the page
  if (typeof window !== "undefined") {
    // run once via effect-free guard
  }

  const total = subtotal + shippingCosts[shipping];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main dir="rtl" className="w-full max-w-7xl mx-auto px-6 py-10">
        {/* Page header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">עגלת קניות</h1>
          <nav className="mt-3 text-sm text-muted-foreground flex items-center gap-2 justify-center">
            <Link to="/" onClick={closeCart} className="hover:text-brand">בית</Link>
            <ChevronLeft className="w-4 h-4" />
            <span>עגלת קניות</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* Items table + coupon */}
          <section>
            {items.length === 0 ? (
              <div className="border border-border rounded-md p-12 text-center text-muted-foreground">
                העגלה ריקה.{" "}
                <Link to="/shop-default" className="text-brand hover:underline">
                  המשך בקניות
                </Link>
              </div>
            ) : (
              <div className="border border-border rounded-md overflow-hidden">
                <div className="grid grid-cols-[1fr_140px_160px_100px] bg-muted/50 px-6 py-3 text-sm font-semibold text-foreground">
                  <span className="text-right">מוצר</span>
                  <span className="text-center">מחיר</span>
                  <span className="text-center">כמות</span>
                  <span className="text-center">פעולה</span>
                </div>
                <ul className="divide-y divide-border">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="grid grid-cols-[1fr_140px_160px_100px] items-center px-6 py-5"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-20 h-20 shrink-0 bg-white border border-border rounded-md flex items-center justify-center">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain p-2"
                          />
                        </div>
                        <a
                          href="#"
                          className="text-base font-medium text-foreground line-clamp-2 hover:text-brand"
                        >
                          {item.title}
                        </a>
                      </div>
                      <span className="text-center text-foreground">{item.price}</span>
                      <div className="flex justify-center">
                        <div className="inline-flex items-center border border-border rounded-full overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-9 h-9 flex items-center justify-center hover:bg-muted transition"
                            aria-label="הפחת"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-9 h-9 flex items-center justify-center hover:bg-muted transition"
                            aria-label="הוסף"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
                      >
                        <X className="w-4 h-4" />
                        <span>הסר</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Coupon + clear */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/shop-default"
                className="inline-flex items-center gap-1 px-6 py-3 border border-border rounded-md text-sm font-medium hover:bg-muted transition"
              >
                <ChevronLeft className="w-4 h-4" />
                ניקוי העגלה
              </Link>

              <div className="flex items-center gap-3 ms-auto">
                <span className="text-sm text-muted-foreground">קוד קופון:</span>
                <div className="flex items-stretch border border-border rounded-md overflow-hidden">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="הזן קוד קופון"
                    className="px-4 py-2.5 text-sm bg-background outline-none w-56 text-right placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    className="px-6 bg-foreground text-background text-sm font-semibold hover:opacity-90 transition"
                  >
                    החל
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <aside className="border border-border rounded-md p-6 h-fit bg-background">
            <div className="flex items-center justify-between pb-5 border-b border-border">
              <span className="text-2xl font-bold text-foreground">{formatPrice(subtotal)}</span>
              <span className="text-lg font-bold text-foreground">סכום ביניים</span>
            </div>

            <div className="py-5 border-b border-border">
              <h3 className="text-base font-bold text-foreground mb-3">משלוח</h3>
              <ul className="space-y-2.5 text-sm">
                {([
                  { id: "fixed", label: "משלוח קבוע", price: 20 },
                  { id: "pickup", label: "איסוף עצמי", price: 25 },
                  { id: "free", label: "משלוח חינם", price: 0 },
                ] as const).map((opt) => (
                  <li key={opt.id}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === opt.id}
                        onChange={() => setShipping(opt.id)}
                        className="accent-brand"
                      />
                      <span className="text-foreground">{opt.label}</span>
                      {opt.price > 0 && (
                        <span className="text-brand font-semibold ms-auto">
                          {formatPrice(opt.price)}
                        </span>
                      )}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="text-2xl font-bold text-foreground">{formatPrice(total)}</span>
              <span className="text-lg font-bold text-foreground">סה״כ</span>
            </div>

            <Link
              to="/checkout"
              className="block w-full h-12 leading-[3rem] text-center rounded-md bg-foreground text-background font-semibold hover:opacity-90 transition"
            >
              מעבר לתשלום
            </Link>
          </aside>
        </div>
      </main>
      <BeforeCheckoutProducts />
    </div>
  );
}
