import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { CategoryGrid } from "@/components/CategoryGrid";
import { PopularProducts } from "@/components/PopularProducts";
import { TopSelling } from "@/components/TopSelling";
import { ProductColumns } from "@/components/ProductColumns";
import { DualPromo } from "@/components/DualPromo";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ProductShowcase } from "@/components/ProductShowcase";
import { NewArrivals } from "@/components/NewArrivals";
import { MostViewed } from "@/components/MostViewed";

import { BlogSection } from "@/components/BlogSection";
import { SiteFooter } from "@/components/SiteFooter";
import { ChevronLeft, Truck, ShieldCheck } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import storeBanner from "@/assets/store-banner.jpg";
import appliancesBanner from "@/assets/appliances-banner.jpg";
import gamingBanner from "@/assets/gaming-banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onsus — חנות הטכנולוגיה והאלקטרוניקה המובילה" },
      {
        name: "description",
        content:
          "מחשבים, סלולר, טלוויזיות, גיימינג ומוצרי חשמל במחירים משתלמים. משלוח מהיר ושירות מקצועי — Onsus.",
      },
      { property: "og:title", content: "Onsus — חנות הטכנולוגיה והאלקטרוניקה" },
      {
        property: "og:description",
        content:
          "מחשבים, סלולר, טלוויזיות וגיימינג במחירים משתלמים. משלוח מהיר ושירות מקצועי.",
      },
      { property: "og:url", content: "https://your-next-price.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://your-next-price.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroCarousel />
      <CategoryGrid />
      <PopularProducts />
      <section dir="rtl" className="w-full px-3 md:px-6 pb-6 md:pb-10">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={storeBanner}
            alt="חנות הטכנולוגיה - מבחר מוצרי אלקטרוניקה"
            width={1920}
            height={640}
            loading="lazy"
            className="w-full h-44 sm:h-64 md:h-80 lg:h-[420px] object-cover"
          />

          {/* Overlay gradient — darken right side for RTL text */}
          <div className="absolute inset-0 bg-gradient-to-l from-brand/90 via-brand/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-1/2 px-4 md:px-12 lg:px-16 text-right text-white">
              <h2 className="mt-4 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                כל הגאדג׳טים שאהבת
                <br />
                <span className="text-white">
                  במקום אחד
                </span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/80 max-w-md">
                אוזניות, סמארטפונים, מחשבים ועוד — מהמותגים המובילים בעולם
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop-default"
                  className="inline-flex items-center gap-2 bg-white text-brand hover:bg-white/90 transition-colors font-bold text-base px-7 py-3.5 rounded-full shadow-lg active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  קנו עכשיו
                </Link>
                <div className="hidden md:flex items-center gap-4 text-xs text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-white" />
                    משלוח חינם מעל ₪199
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-white" />
                    אחריות יבואן רשמי
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopSelling />
      <DualPromo />
      <ProductColumns />
      <NewArrivals />
      <section dir="rtl" className="w-full px-3 md:px-6 pb-6 md:pb-10">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={appliancesBanner}
            alt="מוצרי חשמל לבית - המותגים המובילים"
            width={1920}
            height={640}
            loading="lazy"
            className="w-full h-44 sm:h-64 md:h-80 lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand/90 via-brand/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-1/2 px-4 md:px-12 lg:px-16 text-right text-white">
              <h2 className="mt-4 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                מוצרי החשמל ששדרגו לך את הבית
                <br />
                <span className="text-white">
                  במחירים שווים
                </span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/80 max-w-md">
                מקררים, מכונות כביסה, מדיחי כלים ומוצרי מטבח — מהמותגים המובילים
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop-default"
                  className="inline-flex items-center gap-2 bg-white text-brand hover:bg-white/90 transition-colors font-bold text-base px-7 py-3.5 rounded-full shadow-lg active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  קנו עכשיו
                </Link>
                <div className="hidden md:flex items-center gap-4 text-xs text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-white" />
                    משלוח חינם מעל ₪199
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-white" />
                    אחריות יבואן רשמי
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MostViewed />
      <section dir="rtl" className="w-full px-3 md:px-6 pb-6 md:pb-10">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={gamingBanner}
            alt="עולם הגיימינג - ציוד מקצועי לגיימרים"
            width={1920}
            height={640}
            loading="lazy"
            className="w-full h-44 sm:h-64 md:h-80 lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand/90 via-brand/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-1/2 px-4 md:px-12 lg:px-16 text-right text-white">
              <h2 className="mt-4 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                עולם הגיימינג שלך
                <br />
                <span className="text-white">
                  מתחיל כאן
                </span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/80 max-w-md">
                קונסולות, אוזניות, מקלדות מכניות ובקרים — מהמותגים המובילים בעולם
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop-default"
                  className="inline-flex items-center gap-2 bg-white text-brand hover:bg-white/90 transition-colors font-bold text-base px-7 py-3.5 rounded-full shadow-lg active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  קנו עכשיו
                </Link>
                <div className="hidden md:flex items-center gap-4 text-xs text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-white" />
                    משלוח חינם מעל ₪199
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-white" />
                    אחריות יבואן רשמי
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductShowcase />
      <BrandsMarquee />
      
      <BlogSection />
      <SiteFooter />
    </div>
  );
}
