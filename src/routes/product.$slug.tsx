import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Minus, Plus, Star, ChevronLeft, Check,
  Facebook, Twitter, Linkedin, Youtube,
  ShoppingBag, Heart, Eye, Shuffle,
} from "lucide-react";
import { SiPaypal, SiVisa, SiMastercard, SiStripe, SiAmericanexpress, SiApplepay } from "react-icons/si";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart, parsePrice } from "@/lib/cart";
import { POPULAR_PRODUCTS, getProductBySlug, type ProductData } from "@/lib/products-data";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Onsus` },
        { name: "description", content: p.description.slice(0, 160) },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description.slice(0, 160) },
        { property: "og:image", content: p.img },
        { property: "og:type", content: "product" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">המוצר לא נמצא</h1>
      <Link to="/" className="text-brand hover:underline">חזרה לעמוד הבית</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-muted-foreground">{error.message}</p>
      <Link to="/" className="text-brand hover:underline">חזרה לעמוד הבית</Link>
    </div>
  ),
  component: ProductDetailPage,
});

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`w-4 h-4 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground/40"}`} />
      ))}
    </div>
  );
}

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const thumbnails = [product.img, ...POPULAR_PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 5).map((p) => p.img)];
  const [selectedImg, setSelectedImg] = useState(product.img);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main dir="rtl" className="w-full px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">בית</Link>
          <ChevronLeft className="w-4 h-4" />
          <Link to="/shop-default" className="hover:text-foreground">חנות</Link>
          <ChevronLeft className="w-4 h-4" />
          <span className="text-foreground line-clamp-1">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg flex items-center justify-center p-8 aspect-square">
              <img src={selectedImg} alt={product.title} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {thumbnails.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImg(img)}
                  className={`shrink-0 w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2 border transition-colors ${
                    selectedImg === img ? "border-foreground" : "border-border hover:border-foreground/40"
                  }`}
                >
                  <img src={img} alt="" className="max-w-full max-h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm">
              <span className="font-bold text-foreground">קטגוריות: </span>
              <span className="text-brand">{product.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">{product.title}</h1>

            <div className="flex items-center gap-4 mt-4 pb-5 border-b border-border text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Stars rating={product.rating} />
                <span className="text-foreground">ביקורות ({product.reviews.toLocaleString("he-IL")})</span>
              </div>
              <span className="text-muted-foreground">|</span>
              <span className="text-foreground">נמכרו: {product.sold}</span>
            </div>

            <div className="flex items-baseline gap-3 mt-5 pb-5 border-b border-border">
              <span className="text-3xl font-bold text-brand">{product.price}</span>
              {product.oldPrice && <span className="text-xl text-muted-foreground line-through">{product.oldPrice}</span>}
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-stretch gap-3">
                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: product.slug,
                      title: product.title,
                      price: product.price,
                      priceValue: parsePrice(product.price),
                      img: product.img,
                      qty,
                    })
                  }
                  className="flex-1 h-12 rounded-md border border-border bg-background text-foreground font-semibold text-sm hover:bg-muted transition-colors"
                >
                  הוסף לסל
                </button>
                <div className="flex items-center bg-muted rounded-md overflow-hidden">
                  <button type="button" aria-label="הפחת" onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-12 flex items-center justify-center text-foreground hover:bg-muted-foreground/10">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-base font-semibold text-foreground">{qty}</span>
                  <button type="button" aria-label="הוסף" onClick={() => setQty((q) => q + 1)} className="w-10 h-12 flex items-center justify-center text-foreground hover:bg-muted-foreground/10">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: product.slug,
                    title: product.title,
                    price: product.price,
                    priceValue: parsePrice(product.price),
                    img: product.img,
                    qty,
                  })
                }
                className="w-full h-12 rounded-md bg-brand text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                קנה עכשיו
              </button>
            </div>

            <dl className="mt-6 pb-5 border-b border-border space-y-2 text-sm">
              {product.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[120px_1fr] gap-4">
                  <dt className="font-bold text-foreground">{s.label}</dt>
                  <dd className="text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-foreground mb-3">על המוצר</h2>
              <ul className="space-y-2 text-sm text-foreground list-disc pr-5 marker:text-foreground">
                {product.about.map((line, i) => (<li key={i}>{line}</li>))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-border space-y-2 text-sm">
              <div><span className="font-bold text-foreground">מק״ט: </span><span className="text-muted-foreground">{product.sku}</span></div>
              <div><span className="font-bold text-foreground">קטגוריה: </span><span className="text-muted-foreground">{product.category}</span></div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-bold text-foreground text-sm">שיתוף:</span>
              <div className="flex items-center gap-2">
                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm">
              {["30 ימי החזרה ללא תשלום", "הזמנות עד 14:30 - משלוח באותו היום"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-foreground">
                  <Check className="w-4 h-4 text-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 bg-muted rounded-md p-4 flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-foreground leading-tight">תשלום בטוח<br />ומאובטח</span>
              <div className="flex items-center gap-2">
                {[
                  { Icon: SiVisa, bg: "#1A1F71", label: "Visa" },
                  { Icon: SiMastercard, bg: "#EB001B", label: "Mastercard" },
                  { Icon: SiAmericanexpress, bg: "#2E77BC", label: "Amex" },
                  { Icon: SiPaypal, bg: "#003087", label: "PayPal" },
                  { Icon: SiApplepay, bg: "#000000", label: "Apple Pay" },
                  { Icon: SiStripe, bg: "#635BFF", label: "Stripe" },
                ].map(({ Icon, bg, label }) => (
                  <span key={label} aria-label={label} className="h-7 w-7 rounded-full flex items-center justify-center shadow-sm" style={{ background: bg }}>
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">תיאור המוצר</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground leading-loose text-sm">{product.description}</p>
          </div>
        </section>

        <RelatedProducts current={product} />
      </main>
      <SiteFooter />
    </div>
  );
}

function RelatedProducts({ current }: { current: ProductData }) {
  const { addItem } = useCart();
  const related = POPULAR_PRODUCTS.filter((p) => p.slug !== current.slug).slice(0, 5);
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">מוצרים דומים</h2>
      <div className="border-t border-border pt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {related.map((p) => (
            <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group flex flex-col overflow-hidden transition-shadow">
              <div className="relative aspect-square flex items-center justify-center overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105" />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {[
                    { Icon: ShoppingBag, label: "הוסף לסל", action: "cart" as const },
                    { Icon: Heart, label: "מועדפים", action: "fav" as const },
                    { Icon: Eye, label: "צפייה", action: "view" as const },
                    { Icon: Shuffle, label: "השוואה", action: "compare" as const },
                  ].map(({ Icon, label, action }, i) => (
                    <div key={i} className="relative group/btn flex items-center justify-end">
                      <span className="absolute right-full mr-2 whitespace-nowrap bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-md opacity-0 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200 pointer-events-none">{label}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (action === "cart") {
                            addItem({ id: p.slug, title: p.title, price: p.price, priceValue: parsePrice(p.price), img: p.img });
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
                <h3 className="text-lg font-bold leading-snug line-clamp-2 group-hover:underline" style={{ color: "#C2747D" }}>{p.title}</h3>
                <span className="text-2xl font-bold text-foreground mt-1">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
