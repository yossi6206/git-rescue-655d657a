import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { allCategories } from "@/components/CategoriesModal";
import { categoryMap } from "@/routes/category.$slug";

export function ShopMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // pre-select first category that has data
  const initialSlug =
    allCategories.find((c) => c.slug && categoryMap[c.slug])?.slug ?? null;

  const handleOpen = () => {
    cancelClose();
    if (!activeSlug) setActiveSlug(initialSlug);
    setOpen(true);
  };

  const data = activeSlug ? categoryMap[activeSlug] : undefined;

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
    >
      <button className="flex items-center gap-1 text-foreground hover:text-brand transition">
        <span>חנות</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </button>

      {open && (
        <div
          dir="rtl"
          className="fixed inset-x-0 z-50 mt-3"
          style={{ top: "var(--mega-menu-top, 168px)" }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150">
              <div className="grid grid-cols-[280px_1fr] min-h-[460px]">
                {/* Right column (RTL first): category list */}
                <div className="bg-muted/40 border-l border-border p-2 max-h-[520px] overflow-y-auto">
                  {allCategories.map(({ name, img, slug }) => {
                    const hasData = slug && categoryMap[slug];
                    const isActive = slug === activeSlug;
                    const baseCls =
                      "group w-full flex items-center gap-3 px-3 py-3 rounded-md text-base transition-colors cursor-pointer " +
                      (isActive
                        ? "bg-brand/10 text-brand"
                        : "text-foreground hover:bg-brand/10 hover:text-brand");

                    const inner = (
                      <>
                        <div className="h-10 w-10 flex items-center justify-center shrink-0">
                          <img
                            src={img}
                            alt={name}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-110"
                          />
                        </div>
                        <span className="flex-1 text-right">{name}</span>
                        {hasData && (
                          <ChevronLeft className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                        )}
                      </>
                    );

                    if (hasData) {
                      return (
                        <button
                          key={name}
                          type="button"
                          onMouseEnter={() => setActiveSlug(slug!)}
                          onFocus={() => setActiveSlug(slug!)}
                          className={baseCls}
                        >
                          {inner}
                        </button>
                      );
                    }
                    return (
                      <div key={name} className={baseCls + " opacity-70"}>
                        {inner}
                      </div>
                    );
                  })}
                </div>

                {/* Left column: subcategories grid */}
                <div className="p-6 overflow-y-auto max-h-[520px]">
                  {data ? (
                    <>
                      <div className="flex items-end justify-between mb-4 pb-3 border-b border-border">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {data.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {data.subtitle}
                          </p>
                        </div>
                        <Link
                          to="/category/$slug"
                          params={{ slug: activeSlug! }}
                          onClick={() => setOpen(false)}
                          className="text-base font-semibold text-brand hover:underline whitespace-nowrap flex items-center gap-1"
                        >
                          לכל הקטגוריה
                          <ChevronLeft className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className="space-y-6">
                        {data.groups.map((g) => (
                          <div key={g.title}>
                            {data.groups.length > 1 && (
                              <h4 className="text-base font-bold text-foreground mb-3 text-right">
                                {g.title}
                              </h4>
                            )}
                            <div className="grid grid-cols-3 gap-3">
                              {g.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to="/category/$slug"
                                  params={{ slug: activeSlug! }}
                                  onClick={() => setOpen(false)}
                                  className="group flex items-center gap-3 p-2.5 rounded-md hover:bg-brand/5 transition-colors"
                                >
                                  <div className="h-16 w-16 flex items-center justify-center shrink-0 bg-muted/40 rounded-md">
                                    <img
                                      src={item.img}
                                      alt={item.name}
                                      loading="lazy"
                                      className="max-h-14 max-w-14 object-contain transition-transform duration-200 group-hover:scale-110"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 text-right">
                                    <div className="text-sm font-medium text-foreground group-hover:text-brand line-clamp-2 leading-tight">
                                      {item.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                      {item.count} מוצרים
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                      בחר קטגוריה כדי לצפות בפריטים
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
