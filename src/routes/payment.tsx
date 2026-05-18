import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Lock, Wallet, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useCart, formatPrice } from "@/lib/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "תשלום מאובטח" },
      { name: "description", content: "השלמת תשלום מאובטח להזמנה" },
    ],
  }),
  component: PaymentPage,
});

type Method = "card" | "paypal" | "bank";

function PaymentPage() {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState<Method>("card");
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    saveCard: false,
  });

  const shipping = 20;
  const total = subtotal + shipping;

  const update = (k: keyof typeof form, v: string | boolean) =>
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
    toast.success("התשלום בוצע בהצלחה!");
    setTimeout(() => navigate({ to: "/" }), 1200);
  };

  const inputCls =
    "w-full h-11 px-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-brand transition";
  const labelCls = "block text-sm font-medium text-foreground mb-1.5 text-right";

  const methods: { id: Method; label: string; icon: typeof CreditCard }[] = [
    { id: "card", label: "כרטיס אשראי / חיוב", icon: CreditCard },
    { id: "paypal", label: "PayPal", icon: Wallet },
    { id: "bank", label: "העברה בנקאית", icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main dir="rtl" className="w-full max-w-7xl mx-auto px-6 py-10">
        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">תשלום מאובטח</h1>
            <nav className="mt-2 text-sm text-muted-foreground flex items-center gap-2 justify-end">
              <Link to="/" className="hover:text-foreground">בית</Link>
              <span>•</span>
              <Link to="/checkout" className="hover:text-foreground">מעבר לתשלום</Link>
              <span>•</span>
              <span>תשלום</span>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-brand" />
            תשלום מוצפן SSL
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Details */}
          <section className="border border-border rounded-md p-6 bg-background order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-foreground text-right mb-6">
              בחירת אמצעי תשלום
            </h2>

            {/* Method selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              {methods.map((m) => {
                const Icon = m.icon;
                const active = method === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethod(m.id)}
                    className={`flex items-center justify-center gap-2 h-14 rounded-md border transition text-sm font-semibold ${
                      active
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-border text-foreground hover:border-brand/60"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {m.label}
                  </button>
                );
              })}
            </div>

            {method === "card" && (
              <div className="space-y-4">
                <div>
                  <label className={labelCls}>
                    שם בעל הכרטיס <span className="text-destructive">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.cardName}
                    onChange={(e) => update("cardName", e.target.value)}
                    placeholder="כפי שמופיע על הכרטיס"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>
                    מספר כרטיס <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <input
                      required
                      inputMode="numeric"
                      value={form.cardNumber}
                      onChange={(e) => update("cardNumber", e.target.value)}
                      placeholder="0000 0000 0000 0000"
                      className={`${inputCls} pl-12`}
                    />
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>
                      תוקף <span className="text-destructive">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.expiry}
                      onChange={(e) => update("expiry", e.target.value)}
                      placeholder="MM/YY"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>
                      CVV <span className="text-destructive">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.cvv}
                      onChange={(e) => update("cvv", e.target.value)}
                      placeholder="123"
                      className={inputCls}
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer justify-end pt-2">
                  <span className="text-sm text-foreground">
                    שמור את הכרטיס לרכישה מהירה בעתיד
                  </span>
                  <input
                    type="checkbox"
                    checked={form.saveCard}
                    onChange={(e) => update("saveCard", e.target.checked)}
                    className="accent-brand w-4 h-4"
                  />
                </label>
              </div>
            )}

            {method === "paypal" && (
              <div className="rounded-md border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                לאחר ביצוע ההזמנה תועברו לאתר PayPal לאישור התשלום.
              </div>
            )}

            {method === "bank" && (
              <div className="rounded-md border border-dashed border-border p-6 text-right text-sm text-foreground space-y-1">
                <p>בנק: <span className="font-semibold">לאומי (10)</span></p>
                <p>סניף: <span className="font-semibold">800</span></p>
                <p>מספר חשבון: <span className="font-semibold">123456</span></p>
                <p className="text-muted-foreground pt-2">
                  ההזמנה תאושר לאחר קבלת ההעברה.
                </p>
              </div>
            )}

            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground justify-end">
              <Lock className="w-4 h-4 text-brand" />
              פרטי התשלום מוצפנים ולא נשמרים בשרתינו
            </div>
          </section>

          {/* Order Summary */}
          <aside className="border border-border rounded-md p-6 bg-background h-fit order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-foreground text-right mb-6">סיכום הזמנה</h2>

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

            <div className="grid grid-cols-[1fr_auto] py-3 border-t border-border text-sm">
              <span className="text-right font-semibold text-foreground">משלוח</span>
              <span className="text-left text-foreground">{formatPrice(shipping)}</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] py-3 border-t border-border">
              <span className="text-right font-bold text-foreground">סה״כ לתשלום</span>
              <span className="text-left text-xl font-bold text-foreground">
                {formatPrice(total)}
              </span>
            </div>

            <label className="flex items-center gap-2 mt-5 mb-4 cursor-pointer justify-end">
              <span className="text-sm text-foreground">
                קראתי ואני מסכים/ה לתנאי האתר ולמדיניות הפרטיות.
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
              className="w-full h-12 rounded-md bg-brand text-black font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              שלם {formatPrice(total)}
            </button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              לחיצה על הכפתור תחייב את אמצעי התשלום שבחרת.
            </p>
          </aside>
        </form>
      </main>
    </div>
  );
}
