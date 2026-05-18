import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { useCart, formatPrice } from "@/lib/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "מעבר לתשלום" },
      { name: "description", content: "השלמת ההזמנה ופרטי חיוב" },
    ],
  }),
  component: CheckoutPage,
});

type ShippingOption = "fixed" | "pickup" | "free";
type PaymentOption = "bank" | "check";

const shippingCosts: Record<ShippingOption, number> = {
  fixed: 20,
  pickup: 25,
  free: 0,
};

function CheckoutPage() {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState<ShippingOption>("fixed");
  const [payment, setPayment] = useState<PaymentOption>("bank");
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "ישראל",
    street: "",
    apartment: "",
    city: "",
    region: "",
    postal: "",
    phone: "",
    email: "",
    notes: "",
  });

  const total = subtotal + shippingCosts[shipping];

  const update = (k: keyof typeof form, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      toast.error("יש לאשר את תנאי האתר");
      return;
    }
    if (items.length === 0) {
      toast.error("העגלה ריקה");
      return;
    }
    toast.success("ההזמנה בוצעה בהצלחה!");
    setTimeout(() => navigate({ to: "/" }), 1200);
  };

  const inputCls =
    "w-full h-11 px-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-brand transition";
  const labelCls = "block text-sm font-medium text-foreground mb-1.5 text-right";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main dir="rtl" className="w-full max-w-7xl mx-auto px-6 py-10">
        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">מעבר לתשלום</h1>
            <nav className="mt-2 text-sm text-muted-foreground flex items-center gap-2 justify-end">
              <Link to="/" className="hover:text-foreground">בית</Link>
              <span>•</span>
              <Link to="/cart" className="hover:text-foreground">עגלת קניות</Link>
              <span>•</span>
              <span>מעבר לתשלום</span>
            </nav>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <section className="border border-border rounded-md p-6 bg-background order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-foreground text-right mb-6">פרטי חיוב</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>
                  שם פרטי <span className="text-destructive">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  placeholder="שם פרטי"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>
                  שם משפחה <span className="text-destructive">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  placeholder="שם משפחה"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className={labelCls}>שם חברה (אופציונלי)</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder='לדוגמה בע"מ'
                className={inputCls}
              />
            </div>

            <div className="mt-4">
              <label className={labelCls}>מדינה / אזור</label>
              <input
                type="text"
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                className={inputCls}
              />
            </div>

            <div className="mt-4">
              <label className={labelCls}>כתובת רחוב</label>
              <input
                type="text"
                value={form.street}
                onChange={(e) => update("street", e.target.value)}
                placeholder="רחוב ומספר בית"
                className={inputCls}
              />
              <input
                type="text"
                value={form.apartment}
                onChange={(e) => update("apartment", e.target.value)}
                placeholder="דירה, כניסה, קומה וכו' (אופציונלי)"
                className={`${inputCls} mt-3`}
              />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>עיר / יישוב</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>מחוז / אזור</label>
                <input
                  type="text"
                  value={form.region}
                  onChange={(e) => update("region", e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>מיקוד</label>
                <input
                  type="text"
                  value={form.postal}
                  onChange={(e) => update("postal", e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>
                  טלפון <span className="text-destructive">*</span>
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className={labelCls}>
                כתובת אימייל <span className="text-destructive">*</span>
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls}
              />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-foreground text-right mb-3">
                הערות להזמנה (אופציונלי)
              </h3>
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="הערות לגבי ההזמנה שלך, לדוגמה הוראות משלוח מיוחדות"
                rows={4}
                className="w-full px-3 py-2.5 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-brand transition resize-none"
              />
            </div>
          </section>

          {/* Order Summary */}
          <aside className="border border-border rounded-md p-6 bg-background h-fit order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-foreground text-right mb-6">ההזמנה שלך</h2>

            <div className="grid grid-cols-[1fr_auto] pb-3 border-b border-border text-sm font-bold text-foreground">
              <span className="text-right">מוצר</span>
              <span className="text-left">סה״כ</span>
            </div>

            {items.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                העגלה ריקה.{" "}
                <Link to="/shop-default" className="text-brand hover:underline">
                  המשך בקניות
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li key={item.id} className="grid grid-cols-[1fr_auto] py-3 text-sm">
                    <span className="text-right text-foreground">
                      {item.title} <span className="text-muted-foreground">× {item.qty}</span>
                    </span>
                    <span className="text-left text-foreground">
                      {formatPrice(item.priceValue * item.qty)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="grid grid-cols-[1fr_auto] py-3 border-t border-border text-sm">
              <span className="text-right font-semibold text-foreground">סכום ביניים</span>
              <span className="text-left font-bold text-brand">{formatPrice(subtotal)}</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3 py-3 border-t border-border text-sm items-start">
              <span className="text-right font-semibold text-foreground pt-1">משלוח</span>
              <ul className="text-left space-y-2">
                {([
                  { id: "fixed", label: "משלוח רגיל", price: 20 },
                  { id: "pickup", label: "איסוף עצמי", price: 25 },
                  { id: "free", label: "משלוח חינם", price: 0 },
                ] as const).map((opt) => (
                  <li key={opt.id}>
                    <label className="flex items-center gap-2 cursor-pointer justify-end">
                      {opt.price > 0 ? (
                        <span className="text-brand font-semibold">
                          {opt.label}: {formatPrice(opt.price)}
                        </span>
                      ) : (
                        <span className="text-foreground">{opt.label}</span>
                      )}
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === opt.id}
                        onChange={() => setShipping(opt.id)}
                        className="accent-brand"
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-[1fr_auto] py-3 border-t border-border">
              <span className="text-right font-bold text-foreground">סה״כ</span>
              <span className="text-left text-xl font-bold text-foreground">
                {formatPrice(total)}
              </span>
            </div>

            <div className="pt-3 border-t border-border space-y-2">
              {([
                { id: "bank", label: "העברה בנקאית ישירה" },
                { id: "check", label: "תשלום בצ׳ק" },
              ] as const).map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 cursor-pointer justify-end">
                  <span className="text-foreground text-sm">{opt.label}</span>
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === opt.id}
                    onChange={() => setPayment(opt.id)}
                    className="accent-brand"
                  />
                </label>
              ))}
            </div>

            <label className="flex items-center gap-2 mt-5 mb-4 cursor-pointer justify-end">
              <span className="text-sm text-foreground">
                קראתי ואני מסכים/ה לתנאי האתר.
              </span>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-brand w-4 h-4"
              />
            </label>

            <button
              type="submit"
              className="w-full h-12 rounded-md bg-brand text-black font-bold hover:opacity-90 transition"
            >
              ביצוע הזמנה
            </button>
          </aside>
        </form>
      </main>
    </div>
  );
}
