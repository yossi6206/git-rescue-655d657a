import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Star, ChevronLeft, Check, Facebook, Twitter, Linkedin, Youtube, ShoppingBag, Heart, Eye, Shuffle } from "lucide-react";
import { SiPaypal, SiVisa, SiMastercard, SiStripe, SiAmericanexpress, SiApplepay } from "react-icons/si";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart, parsePrice } from "@/lib/cart";
import productImg from "@/assets/products/echo-dot.png";
import laptop from "@/assets/products/laptop.png";
import phone from "@/assets/products/phone.png";
import smartwatch from "@/assets/products/smartwatch.png";
import earbuds from "@/assets/products/earbuds.png";
import mouse from "@/assets/products/mouse.png";

export const Route = createFileRoute("/product-detail")({
  head: () => ({
    meta: [
      { title: 'שעון קיר רומי עתיק מברונזה 30" Baldaud — Onsus' },
      {
        name: "description",
        content:
          'שעון קיר רומי עתיק מברונזה בגודל 30 אינץ\' מבית Baldaud. עיצוב פרימיום, איכות גבוהה ומחיר משתלם — זמין במלאי ב-Onsus.',
      },
      { property: "og:title", content: 'שעון קיר רומי עתיק מברונזה 30" Baldaud' },
      {
        property: "og:description",
        content:
          "שעון קיר עיצובי מברונזה 30 אינץ' — איכות פרימיום במחיר משתלם.",
      },
      { property: "og:type", content: "product" },
      {
        property: "og:url",
        content: "https://your-next-price.lovable.app/product-detail",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://your-next-price.lovable.app/product-detail",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: 'שעון קיר רומי עתיק מברונזה 30" Baldaud',
          description:
            "שעון קיר עיצובי מברונזה 30 אינץ' — איכות פרימיום במחיר משתלם.",
          brand: { "@type": "Brand", name: "Baldaud" },
          offers: {
            "@type": "Offer",
            price: "137.50",
            priceCurrency: "ILS",
            availability: "https://schema.org/InStock",
            url: "https://your-next-price.lovable.app/product-detail",
          },
        }),
      },
    ],
  }),
  component: ProductDetail,
});

const product = {
  category: "מוצרי אלקטרוניקה",
  title: 'שעון קיר רומי עתיק מברונזה 30" – Baldaud',
  rating: 4,
  reviews: 1738,
  sold: 349,
  price: "₪137.50",
  oldPrice: "₪249.00",
  specs: [
    { label: "מותג", value: "Elite Gourmet" },
    { label: "קיבולת", value: "1 ליטר" },
    { label: "חומר", value: "זכוכית" },
    { label: "הספק", value: "1100 וואט" },
  ],
  about: [
    "הדרך המהירה ביותר ליהנות מתה חם וטעים בכל יום.",
    "עיצוב פרימיום ללא BPA – 100% בטיחותי לשימוש יומיומי.",
    "ללא דליפות או תקלות – חוויית שימוש נקייה ונעימה.",
    "קל ונוח לשימוש – מתאים לכל בני המשפחה.",
    "קומקום עוצמתי בהספק 900-1100 וואט עם סימוני קיבולת ברורים.",
    "אחריות לשנה ושירות לקוחות מקצועי לרכישה בביטחון מלא.",
  ],
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground/40"}`}
        />
      ))}
    </div>
  );
}

function ProductDetail() {
  const thumbnails = [productImg, laptop, phone, smartwatch, earbuds, mouse];
  const [selectedImg, setSelectedImg] = useState(thumbnails[0]);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main dir="rtl" className="w-full px-6 py-8 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">בית</Link>
          <ChevronLeft className="w-4 h-4" />
          <Link to="/shop-default" className="hover:text-foreground">חנות</Link>
          <ChevronLeft className="w-4 h-4" />
          <span className="text-foreground">פרטי מוצר</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image + thumbnails */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg flex items-center justify-center p-8 aspect-square">
              <img
                src={selectedImg}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
              />
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

          {/* Details */}
          <div className="flex flex-col">
            <div className="text-sm">
              <span className="font-bold text-foreground">קטגוריות: </span>
              <a href="#" className="text-brand hover:underline">{product.category}</a>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mt-4 pb-5 border-b border-border text-sm">
              <div className="flex items-center gap-2">
                <Stars rating={product.rating} />
                <a href="#" className="text-foreground hover:underline">
                  ביקורות ({product.reviews.toLocaleString("he-IL")})
                </a>
              </div>
              <span className="text-muted-foreground">|</span>
              <span className="text-foreground">נמכרו: {product.sold}</span>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="text-brand hover:underline">צפה בחנות</a>
            </div>

            <div className="flex items-baseline gap-3 mt-5 pb-5 border-b border-border">
              <span className="text-3xl font-bold text-brand">{product.price}</span>
              <span className="text-xl text-muted-foreground line-through">{product.oldPrice}</span>
            </div>

            {/* Add to cart + quantity + Buy now */}
            <div className="mt-5 space-y-3">
              <div className="flex items-stretch gap-3">
                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: product.title,
                      title: product.title,
                      price: product.price,
                      priceValue: parsePrice(product.price),
                      img: selectedImg,
                      qty,
                    })
                  }
                  className="flex-1 h-12 rounded-md border border-border bg-background text-foreground font-semibold text-sm hover:bg-muted transition-colors"
                >
                  הוסף לסל
                </button>
                <div className="flex items-center bg-muted rounded-md overflow-hidden">
                  <button
                    type="button"
                    aria-label="הפחת"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-12 flex items-center justify-center text-foreground hover:bg-muted-foreground/10"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-base font-semibold text-foreground">{qty}</span>
                  <button
                    type="button"
                    aria-label="הוסף"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-12 flex items-center justify-center text-foreground hover:bg-muted-foreground/10"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: product.title,
                    title: product.title,
                    price: product.price,
                    priceValue: parsePrice(product.price),
                    img: selectedImg,
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
                {product.about.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-border space-y-2 text-sm">
              <div><span className="font-bold text-foreground">מק״ט: </span><span className="text-muted-foreground">NTB7SDVX44</span></div>
              <div><span className="font-bold text-foreground">קטגוריה: </span><span className="text-muted-foreground">אוזניות</span></div>
              <div><span className="font-bold text-foreground">תגיות: </span><span className="text-muted-foreground">אוזניות, בלוטות'</span></div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-bold text-foreground text-sm">שיתוף:</span>
              <div className="flex items-center gap-2">
                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm">
              {[
                "30 ימי החזרה ללא תשלום",
                "הזמנות עד 14:30 - משלוח באותו היום",
              ].map((t) => (
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
                  { Icon: SiAmericanexpress, bg: "#2E77BC", label: "American Express" },
                  { Icon: SiPaypal, bg: "#003087", label: "PayPal" },
                  { Icon: SiApplepay, bg: "#000000", label: "Apple Pay" },
                  { Icon: SiStripe, bg: "#635BFF", label: "Stripe" },
                ].map(({ Icon, bg, label }) => (
                  <span
                    key={label}
                    aria-label={label}
                    className="h-7 w-7 rounded-full flex items-center justify-center shadow-sm transition-transform hover:-translate-y-0.5"
                    style={{ background: bg }}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ProductTabs />

        <RelatedProducts />
      </main>
      <SiteFooter />
    </div>
  );
}

const tabs = [
  { id: "desc", label: "תיאור" },
  { id: "info", label: "מידע נוסף" },
  { id: "reviews", label: "ביקורות (3)" },
];

function ProductTabs() {
  const [active, setActive] = useState("desc");
  return (
    <section className="mt-16">
      <div className="flex items-center justify-center gap-10 border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`pb-3 -mb-px text-base transition-colors ${
              active === t.id
                ? "text-foreground font-semibold border-b-2 border-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10 max-w-4xl mx-auto text-center">
        {active === "desc" && (
          <>
            <p className="text-sm text-muted-foreground">אוזניות</p>
            <h3 className="text-3xl font-bold text-foreground mt-2 mb-6">אוזניות אלחוטיות</h3>
            <p className="text-muted-foreground leading-loose text-sm">
              Jabra Evolve2 75 USB-A MS Teams Stereo Headset – אוזניות סטריאו אלחוטיות מתקדמות שמחליפות את תקני העבודה ההיברידית הקודמים.
              איכות שיחות מובילה בתעשייה הודות להנדסת שמע מהשורה הראשונה. עם האוזניות החכמות הללו תישארו מחוברים ופרודוקטיביים מהשיחה הראשונה
              של היום ועד הרכבת האחרונה הביתה. עיצוב כריות אוזניים ארגונומי עם טכנולוגיית קצף כפולה חדשנית מספק נוחות לאורך כל היום, בידוד רעשים
              יוצא דופן וביצועי ביטול רעשים אקטיבי (ANC) ברמה הגבוהה ביותר. זרוע מיקרופון מעוצבת מחדש, קצרה ב-33% מדגם Evolve 75, מאושרת
              ל-MS Teams וכוללת Busylight, שליטה בשיחות, הנחיות קוליות וטווח אלחוטי של עד 30 מטר.
            </p>
          </>
        )}

        {active === "info" && (
          <div className="text-right">
            <h3 className="text-2xl font-bold text-foreground mb-4">מידע נוסף</h3>
            <dl className="divide-y divide-border border border-border rounded-lg overflow-hidden text-sm">
              {[
                ["משקל", "0.4 ק\"ג"],
                ["מימדים", "20 × 18 × 8 ס\"מ"],
                ["צבע", "שחור"],
                ["חיבור", "USB-A / Bluetooth 5.2"],
                ["אחריות", "שנתיים יבואן רשמי"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[160px_1fr] gap-4 px-4 py-3 odd:bg-muted/40">
                  <dt className="font-bold text-foreground">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {active === "reviews" && (
          <div className="text-right space-y-5">
            <h3 className="text-2xl font-bold text-foreground mb-4">ביקורות לקוחות (3)</h3>
            {[
              { name: "דנה כ.", text: "איכות שמע מדהימה ונוחות לאורך כל היום, ממליצה בחום!" },
              { name: "יוסי מ.", text: "ביטול רעשים מצוין, מושלמות לעבודה במשרד הומה." },
              { name: "רות ל.", text: "סוללה מחזיקה הרבה זמן והתחברות מהירה. מרוצה מאוד." },
            ].map((r, i) => (
              <div key={i} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">{r.name}</span>
                  <Stars rating={5} />
                </div>
                <p className="text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


const relatedProducts = [
  { category: "מחשבים ניידים", title: "מחשב נייד 15.6 אינץ' – מעבד עוצמתי לעבודה ולימודים", price: "₪3,799", img: laptop },
  { category: "סלולר", title: "סמארטפון מתקדם – מסך AMOLED ומצלמה איכותית", price: "₪1,990", img: phone },
  { category: "שעון חכם", title: "SUUNTO 9 – שעון GPS לספורטאים עם סוללה ארוכה", price: "₪1,899", img: smartwatch },
  { category: "אוזניות אלחוטיות", title: "Sony ZX Series – אוזניות חוטיות עם נוחות מירבית", price: "₪399", img: earbuds },
  { category: "אלקטרוניקה", title: "Lenovo 400 USB-C – עכבר ארגונומי קומפקטי", price: "₪129", img: mouse },
];

function RelatedProductCard({ p }: { p: typeof relatedProducts[number] }) {
  const { addItem } = useCart();
  return (
    <a href="#" className="group flex flex-col overflow-hidden transition-shadow">
      <div className="relative aspect-square flex items-center justify-center overflow-hidden">
        <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105" />
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
        <span className="text-2xl font-bold text-foreground mt-1">{p.price}</span>
      </div>
    </a>
  );
}

function RelatedProducts() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">מוצרים דומים</h2>
      <div className="border-t border-border pt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {relatedProducts.map((p) => (
            <RelatedProductCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
