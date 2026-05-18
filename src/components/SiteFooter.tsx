import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Send,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
  Flame,
} from "lucide-react";

const helpLinks = [
  "מידע על משלוחים",
  "תנאי מכירה",
  "החזרות והחזרי כספים",
  "מדיניות פרטיות",
  "שאלות נפוצות",
];

const categories = [
  "מחשבים ניידים",
  "מצלמות וצילום",
  "סמארטפונים וטאבלטים",
  "משחקי וידאו וקונסולות",
  "טלוויזיה ושמע",
  "גאדג׳טים",
  "אוזניות עמידות במים",
];

const careLinks = [
  "החשבון שלי",
  "מעקב אחר הזמנה",
  "שירות לקוחות",
  "החזרות והחלפות",
  "שאלות נפוצות",
  "תמיכה במוצר",
];

const bottomLinks = [
  "חדש באתר",
  "המבצעים החמים",
  "מבצע היום",
  "100 המוצרים המובילים",
  "בלוג",
];

export function SiteFooter() {
  return (
    <footer dir="rtl" className="w-full bg-background border-t border-border">
      {/* Top columns */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + payments */}
          <div>
            <Link to="/" className="inline-block">
              <span className="text-3xl font-extrabold text-foreground">
                Onsus<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="mt-6 text-sm text-muted-foreground">אנחנו מקבלים:</p>
            <div className="mt-3 flex items-center gap-3 flex-wrap">
              {["VISA", "PayPal", "Maestro", "Discover"].map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded border border-border bg-card text-xs font-bold text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Get help */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">קבלת עזרה</h3>
            <ul className="space-y-3 text-sm">
              {helpLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground hover:text-brand transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">קטגוריות פופולריות</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground hover:text-brand transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer care */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">שירות לקוחות</h3>
            <ul className="space-y-3 text-sm">
              {careLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground hover:text-brand transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">צור קשר</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">
                  רחוב הרצל 8500, תל אביב
                  <br />
                  6100055
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                <a href="tel:+97231234567" className="text-brand font-bold hover:underline">
                  03-123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Send className="w-4 h-4 text-muted-foreground shrink-0" />
                <a href="mailto:onsus@support.com" className="text-brand font-bold hover:underline">
                  onsus@support.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter bar */}
      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-6 flex flex-col lg:flex-row items-center gap-4">
          <div className="flex items-center gap-3 lg:flex-1">
            <Mail className="w-6 h-6 text-background" />
            <h4 className="text-xl md:text-2xl font-extrabold whitespace-nowrap">
              10% הנחה על ההזמנה הראשונה
            </h4>
            <p className="hidden md:block text-sm text-background/70 mr-3">
              היו הראשונים לדעת על מבצעים, מוצרים חדשים והנחות
            </p>
          </div>
          <form
            className="flex w-full lg:w-auto items-stretch gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="הזינו את כתובת המייל שלכם"
              className="flex-1 lg:w-80 h-12 px-4 rounded-md bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="h-12 px-8 rounded-md bg-brand text-white font-bold hover:opacity-90 transition"
            >
              הרשמה
            </button>
          </form>
        </div>
      </div>

      {/* Social + bottom nav */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-10">
        <div className="flex justify-center items-center gap-4 mb-8">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-brand hover:text-white hover:border-brand transition"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-semibold text-foreground mb-4">
          {bottomLinks.map((l) => (
            <li key={l}>
              <a href="#" className="hover:text-brand transition">
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-brand"
            >
              <Flame className="w-4 h-4" />
              50% הנחה
            </a>
          </li>
        </ul>

        <p className="text-center text-sm text-muted-foreground">
          Onsus<span className="text-brand">.</span> © 2025. כל הזכויות שמורות.
        </p>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() =>
          typeof window !== "undefined" &&
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="חזרה למעלה"
        className="fixed bottom-6 left-6 w-11 h-11 rounded-md border border-border bg-background hover:bg-brand hover:text-white hover:border-brand transition flex items-center justify-center z-40 shadow-md"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
