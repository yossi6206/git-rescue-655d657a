import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, formatPrice } from "@/lib/cart";
import { X, Truck } from "lucide-react";
import { Link } from "@tanstack/react-router";

const FREE_SHIPPING_THRESHOLD = 250;

export function CartSheet() {
  const { items, isOpen, setOpen, removeItem, subtotal, closeCart } = useCart();
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="left"
        dir="rtl"
        className="w-full sm:max-w-xs flex flex-col p-0 gap-0"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle className="text-2xl font-bold text-foreground text-right">
            עגלת קניות
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center mt-12">
              העגלה שלך ריקה
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white rounded-md flex items-center justify-center border border-border">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <a
                      href="#"
                      className="text-base font-semibold leading-snug line-clamp-2"
                      style={{ color: "#2A4DAD" }}
                    >
                      {item.title}
                    </a>
                    <div className="text-xl font-bold text-foreground mt-1">
                      {item.price}
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      x{item.qty}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-foreground/70 hover:text-foreground transition-colors p-1"
                    aria-label="הסר פריט"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 pt-4 pb-6 bg-background">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-bold text-foreground">סכום ביניים:</span>
            <span className="text-xl font-bold text-brand">
              {formatPrice(subtotal)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/cart"
              onClick={closeCart}
              className="h-12 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition flex items-center justify-center"
            >
              צפייה בסל
            </Link>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="h-12 rounded-xl bg-brand text-white font-semibold hover:opacity-90 transition flex items-center justify-center"
            >
              לתשלום
            </Link>
          </div>

          <div className="mt-4">
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-brand transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center gap-2 mt-3 text-sm text-foreground">
              <Truck className="w-5 h-5 shrink-0" />
              <span>
                משלוח חינם בכל ההזמנות מעל{" "}
                <span className="font-bold">{formatPrice(FREE_SHIPPING_THRESHOLD)}</span>
              </span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
