import { useState } from "react";
import { Search, User, Heart, ShoppingBag, ArrowUpDown, Menu, ChevronDown, Phone, Truck, Settings } from "lucide-react";
import { useCart } from "@/lib/cart";
import { CategoriesModal, allCategories } from "@/components/CategoriesModal";
import { ShopMegaMenu } from "@/components/ShopMegaMenu";
import { ProductsMegaMenu } from "@/components/ProductsMegaMenu";
import { CouponsMegaMenu } from "@/components/CouponsMegaMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "בית" },
  { label: "חנות" },
  { label: "מוצרים" },
  { label: "קופונים" },
  { label: "בלוג" },
  { label: "צור קשר" },
];

const categoryOptions = [
  "עולם הטלוויזיות",
  "מחשוב וסלולר",
  "סלולר",
  "מיזוג ואקלים",
  "מקררים ומקפיאים",
  "מכונות וייבשי כביסה",
  "אפיה ובישול",
  "מדיחי כלים",
  "מוצרי חשמל קטנים למטבח",
  "עולם הקפה",
  "שואבי אבק ומכונות שטיפה",
  "אוזניות וסאונד",
  "עולם הגיימינג",
  "טיפוח ויופי",
  "מגהצים",
  "לבית",
  "לגן",
  "ספורט",
  "מוצרי בית חכם",
  "קורקינט והוברבורד",
];

export function SiteHeader() {
  const { openCart, totalCount } = useCart();
  const [catsOpen, setCatsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("בחר קטגוריה");
  return (
    <header dir="rtl" className="w-full bg-white text-foreground border-b border-border">
      <CategoriesModal open={catsOpen} onOpenChange={setCatsOpen} />
      {/* Top utility bar */}
      <div className="w-full bg-header text-header-foreground text-xs hidden md:block">
        <div className="flex items-center justify-between px-6 h-9">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-brand" />
            <span>משלוח אקספרס חינם בהזמנות מעל 570+</span>
          </div>
          <div className="flex items-center divide-x divide-x-reverse divide-white/15">
            <button className="flex items-center gap-1 px-4 h-9 hover:text-brand transition">
              <span>עברית</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="flex items-center gap-1 px-4 h-9 hover:text-brand transition">
              <span>USD</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="flex items-center gap-1 px-4 h-9 hover:text-brand transition">
              <span>הגדרות</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Top row: logo / search / user actions */}
      <div className="flex items-center gap-3 md:gap-6 px-3 md:px-6 py-3 md:py-4">
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setCatsOpen(true)}
          className="md:hidden h-10 w-10 rounded-md border border-border flex items-center justify-center text-foreground"
          aria-label="פתח קטגוריות"
        >
          <Menu className="h-5 w-5" />
        </button>

        <a href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap text-foreground">
          Onsus<span className="text-brand">.</span>
        </a>

        {/* Search — desktop full, mobile compact */}
        <div className="flex-1 hidden md:flex items-center bg-white border border-border rounded-md overflow-hidden h-12">
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center justify-between gap-2 px-4 h-full border-l border-border text-sm text-muted-foreground whitespace-nowrap hover:text-foreground transition outline-none min-w-[220px]"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="max-h-[28rem] overflow-y-auto w-72 p-1"
            >
              <DropdownMenuItem
                onSelect={() => setSelectedCategory("בחר קטגוריה")}
                className="flex items-center gap-3 px-3 py-2 text-right justify-end font-semibold"
              >
                <div className="h-9 w-9 flex items-center justify-center shrink-0">
                  <Menu className="h-5 w-5 text-brand" />
                </div>
                <span className="flex-1 text-right">כל הקטגוריות</span>
              </DropdownMenuItem>
              {allCategories.map(({ name, img }) => {
                const baseCls =
                  "group flex items-center gap-3 px-3 py-2 text-right justify-end rounded-md transition-colors duration-150 hover:bg-brand/10 hover:text-brand focus:bg-brand/10 focus:text-brand cursor-pointer outline-none";
                return (
                  <DropdownMenuItem
                    key={name}
                    onSelect={() => setSelectedCategory(name)}
                    className={baseCls}
                  >
                    <div className="h-9 w-9 flex items-center justify-center shrink-0 order-first">
                      <img
                        src={img}
                        alt={name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-110"
                      />
                    </div>
                    <span className="flex-1 text-right text-sm">{name}</span>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <input
            type="text"
            placeholder="חפש מוצרים..."
            className="flex-1 h-full bg-transparent text-right text-foreground placeholder:text-muted-foreground outline-none px-4"
          />
          <button className="bg-brand h-full w-14 flex items-center justify-center shrink-0 hover:opacity-90 transition">
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* User actions */}
        <div className="flex items-center gap-3 md:gap-5 md:pl-2 mr-auto md:mr-0">
          <button className="md:hidden hover:opacity-80 transition" aria-label="חיפוש">
            <Search className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <button className="hidden md:flex items-center gap-2 text-sm hover:opacity-80 transition">
            <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center">
              <User className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div className="text-right leading-tight">
              <div className="text-xs text-muted-foreground">שלום,</div>
              <div className="font-semibold text-foreground">התחבר</div>
            </div>
          </button>

          <button className="relative hover:opacity-80 transition hidden sm:block" aria-label="השוואה">
            <ArrowUpDown className="h-6 w-6" strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">0</span>
          </button>

          <button className="relative hover:opacity-80 transition hidden sm:block" aria-label="מועדפים">
            <Heart className="h-6 w-6" strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">0</span>
          </button>

          <button
            type="button"
            onClick={openCart}
            className="relative hover:opacity-80 transition"
            aria-label="עגלה"
          >
            <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
              {totalCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-3 pb-3">
        <div className="flex items-center bg-white border border-border rounded-md overflow-hidden h-11">
          <input
            type="text"
            placeholder="חפש מוצרים..."
            className="flex-1 h-full bg-transparent text-right text-foreground placeholder:text-muted-foreground outline-none px-3 text-sm"
          />
          <button className="bg-brand h-full w-12 flex items-center justify-center shrink-0" aria-label="חפש">
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom nav row — desktop only */}
      <div className="hidden md:flex items-center gap-6 px-6 pb-4">
        {/* Nav links */}
        <nav className="flex items-center gap-7 font-medium text-sm">
          {navLinks.map(({ label }) =>
            label === "חנות" ? (
              <ShopMegaMenu key={label} />
            ) : label === "מוצרים" ? (
              <ProductsMegaMenu key={label} />
            ) : label === "קופונים" ? (
              <CouponsMegaMenu key={label} />
            ) : (
              <button
                key={label}
                className="flex items-center gap-1 text-foreground hover:text-brand transition"
              >
                <span>{label}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            ),
          )}
        </nav>

        {/* Phone — pushed to the far left in RTL */}
        <div className="mr-auto flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
            <Phone className="h-4 w-4" />
          </span>
          <div className="text-right leading-tight">
            <div className="text-muted-foreground text-xs text-zinc-950">​טלפון</div>
            <div className="font-bold text-foreground text-sm" dir="ltr">+(402) 763 282 46</div>
          </div>
        </div>
      </div>
    </header>
  );
}
