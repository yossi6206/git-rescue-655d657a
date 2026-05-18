import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Apple, Facebook, ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import couple from "@/assets/login-couple.png";
import shapes from "@/assets/login-shapes.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "התחברות — Onsus" },
      { name: "description", content: "התחבר לחשבון שלך" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main dir="rtl" className="flex-1 w-full max-w-7xl mx-auto px-6 pt-4 pb-12">
        {/* Page header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">החשבון שלי</h1>
          <nav className="mt-3 text-sm text-muted-foreground flex items-center gap-2 justify-center">
            <Link to="/" className="hover:text-brand">בית</Link>
            <ChevronLeft className="w-4 h-4" />
            <span>התחברות</span>
          </nav>
        </div>

        {/* Card row with side decorations */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-6">
          {/* Left decoration removed */}
          <div className="hidden lg:block" />

          {/* Card */}
          <div className="w-full max-w-xl bg-white border-border rounded-2xl shadow-sm px-[82px] py-[64px] text-justify font-sans font-medium mx-[21px] my-[17px] mb-0 mr-[24px] ml-[133px] mt-[14px] border-2">
            <h2 className="text-2xl font-bold text-foreground text-center">התחברות ל-Onsus</h2>
            <p className="text-sm text-muted-foreground text-center mt-2">
              אין לך חשבון?{" "}
              <Link to="/login" className="text-brand font-semibold hover:underline">
                יצירת חשבון בחינם
              </Link>
            </p>

            {/* Social */}
            <div className="mt-6 grid grid-cols-[auto_auto_1fr] gap-3">
              <button
                type="button"
                aria-label="Apple"
                className="h-12 w-14 border border-border rounded-md flex items-center justify-center hover:bg-muted transition"
              >
                <Apple className="h-5 w-5 text-foreground" />
              </button>
              <button
                type="button"
                aria-label="Facebook"
                className="h-12 w-14 border border-border rounded-md flex items-center justify-center hover:bg-muted transition"
              >
                <Facebook className="h-5 w-5 text-[#1877F2]" />
              </button>
              <button
                type="button"
                className="h-12 border border-border rounded-md flex items-center justify-center gap-2 text-sm font-medium hover:bg-muted transition"
              >
                <span>התחברות עם Google</span>
                <GoogleIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Divider */}
            <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px bg-border flex-1" />
              <span>או התחברות עם אימייל</span>
              <div className="h-px bg-border flex-1" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  כתובת אימייל
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="onsus@mail.com"
                  className="w-full h-12 px-4 border border-border rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  סיסמה
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="לפחות 6 תווים"
                    className="w-full h-12 px-4 pl-11 border border-border rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((v) => !v)}
                    aria-label="הצג/הסתר סיסמה"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPwd ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-brand font-medium hover:underline">
                  שכחת סיסמה?
                </a>
                <label className="flex items-center gap-2 text-foreground cursor-pointer">
                  <span>זכור אותי</span>
                  <input type="checkbox" className="h-4 w-4 accent-brand" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-brand text-white font-semibold rounded-md hover:opacity-90 transition active:scale-[0.99]"
              >
                התחברות
              </button>
            </form>
          </div>

          {/* Right decoration removed */}
          <div className="hidden lg:block" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.7 6.5 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.7 6.5 29.1 4.5 24 4.5c-7.4 0-13.8 4.1-17.7 10.2z" />
      <path fill="#4CAF50" d="M24 43.5c5.1 0 9.7-1.9 13.2-5.1l-6.1-5.1C29 35 26.6 35.5 24 35.5c-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C10 39.4 16.5 43.5 24 43.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.5l6.1 5.1c-.4.4 6.6-4.8 6.6-14.6 0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  );
}
