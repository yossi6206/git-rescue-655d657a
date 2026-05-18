import { useState } from "react";
import { Star, Heart, Shuffle, HelpCircle, Minus, Plus } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCart, parsePrice } from "@/lib/cart";

export type QuickViewProduct = {
  category: string;
  title: string;
  price: string;
  img: string;
};

export function QuickViewModal({
  product,
  open,
  onOpenChange,
}: {
  product: QuickViewProduct | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  if (!product) return null;

  const thumbs = [product.img, product.img, product.img, product.img];
  const colors = [
    "#a8b8c2",
    "#2a2d31",
    "#4a4039",
    "#1a1d22",
  ];
  const oldPrice = `₪${Math.round(parsePrice(product.price) * 1.12)}`;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setQty(1);
          setActiveImg(0);
          setActiveColor(0);
        }
      }}
    >
      <DialogContent
        dir="rtl"
        className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-background"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-h-[90vh] overflow-y-auto">
          {/* Image gallery */}
          <div className="bg-muted/30 p-6 flex gap-4">
            <div className="flex flex-col gap-3 w-20 shrink-0">
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    activeImg === i ? "border-foreground" : "border-transparent"
                  } bg-background`}
                >
                  <img src={t} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={thumbs[activeImg]}
                alt={product.title}
                className="max-h-[480px] w-full object-contain"
              />
            </div>
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col gap-4">
            <span className="text-sm text-muted-foreground">{product.category}</span>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
              {product.title}
            </h2>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-brand/10 text-brand">
                במלאי
              </span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-muted-foreground mr-1">(2 ביקורות)</span>
              </div>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">
              {product.title} – מוצר איכותי עם ביצועים מעולים, עיצוב מודרני וחווית
              שימוש מושלמת.{" "}
              <a href="#" className="text-brand underline">
                קרא עוד
              </a>
            </p>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">{product.price}</span>
              <span className="text-base text-muted-foreground line-through">
                {oldPrice}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-foreground">צבע :</span>
              <div className="flex items-center gap-3">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveColor(i)}
                    className={`w-9 h-9 rounded-full border-2 transition ${
                      activeColor === i ? "border-foreground" : "border-transparent"
                    }`}
                    style={{ backgroundColor: c }}
                    aria-label={`צבע ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-foreground">כמות</span>
              <div className="flex items-stretch gap-3">
                <div className="flex items-center border border-border rounded-md">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-12 flex items-center justify-center text-foreground hover:bg-muted"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium tabular-nums">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-12 flex items-center justify-center text-foreground hover:bg-muted"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    for (let i = 0; i < qty; i++) {
                      addItem({
                        id: product.title,
                        title: product.title,
                        price: product.price,
                        priceValue: parsePrice(product.price),
                        img: product.img,
                      });
                    }
                    onOpenChange(false);
                  }}
                  className="flex-1 h-12 rounded-md border border-border bg-background hover:bg-foreground hover:text-background font-medium transition-colors"
                >
                  הוסף לסל
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-3 text-sm text-foreground/80">
              <button type="button" className="inline-flex items-center gap-1.5 hover:text-brand">
                <Shuffle className="w-4 h-4" /> השוואה
              </button>
              <button type="button" className="inline-flex items-center gap-1.5 hover:text-brand">
                <Heart className="w-4 h-4" /> הוסף למועדפים
              </button>
              <button type="button" className="inline-flex items-center gap-1.5 hover:text-brand">
                <HelpCircle className="w-4 h-4" /> שאל שאלה
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
