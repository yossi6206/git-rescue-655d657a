import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Boxes,
  ShoppingCart,
  ShoppingBag,
  Tag,
  FileText,
  Settings,
  User,
  Users,
  ShieldCheck,
  UserCog,
  Store,
  TicketPercent,
  Star,
  Bell,
  Search,
  Moon,
  Menu,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Award,
  DollarSign,
} from "lucide-react";
import {
  BarChart,
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "אזור אישי | Onsus." },
      { name: "description", content: "האזור האישי שלך - סקירה, נתונים וביצועים" },
    ],
  }),
});

const navGeneral = [
  { icon: LayoutDashboard, label: "אנליטיקס" },
  { icon: Package, label: "מוצרים", children: ["רשימה", "עריכה", "יצירה"] },
  { icon: FolderTree, label: "קטגוריות", children: ["רשימה", "עריכה", "יצירה"] },
  { icon: Boxes, label: "מלאי", children: ["מחסן", "הזמנות שהתקבלו"] },
  { icon: ShoppingCart, label: "הזמנות", children: ["רשימה", "פרטים", "עגלה", "תשלום"] },
  { icon: ShoppingBag, label: "רכישות", children: ["רשימה", "הזמנה", "החזרה"] },
  { icon: Tag, label: "מאפיינים", children: ["רשימה", "עריכה", "יצירה"] },
  { icon: FileText, label: "חשבוניות", children: ["רשימה", "פרטי חשבונית"] },
  { icon: Settings, label: "הגדרות" },
];

const navUsers = [
  { icon: User, label: "פרופיל" },
  { icon: Users, label: "תפקידים", children: ["רשימה", "יצירה"] },
  { icon: ShieldCheck, label: "הרשאות" },
  { icon: UserCog, label: "לקוחות", children: ["רשימה", "פרטים"] },
  { icon: Store, label: "מוכרים", children: ["רשימה", "פרטים"] },
];

const navOthers = [
  { icon: TicketPercent, label: "קופונים", children: ["רשימה", "יצירה"] },
  { icon: Star, label: "ביקורות" },
];

const perfData = [
  { m: "ינו", bar: 10, line: 1000 },
  { m: "פבר", bar: 20, line: 2000 },
  { m: "מרץ", bar: 14, line: 1500 },
  { m: "אפר", bar: 8, line: 900 },
  { m: "מאי", bar: 18, line: 1800 },
  { m: "יונ", bar: 5, line: 600 },
  { m: "יול", bar: 30, line: 3500 },
  { m: "אוג", bar: 20, line: 2400 },
  { m: "ספט", bar: 40, line: 4200 },
  { m: "אוק", bar: 60, line: 6000 },
  { m: "נוב", bar: 54, line: 5500 },
  { m: "דצמ", bar: 38, line: 3300 },
];

const conversionsData = [
  { name: "דוד", value: 38, color: "oklch(0.65 0.18 240)" },
  { name: "סטיב", value: 15, color: "oklch(0.55 0.16 20)" },
  { name: "ג׳ק", value: 21, color: "oklch(0.75 0.14 30)" },
  { name: "אחר", value: 26, color: "oklch(0.85 0.12 80)" },
];

const topPages = [
  { path: "onsus/ecommerce", views: 465 },
  { path: "onsus/dashboard", views: 426 },
  { path: "onsus/chat", views: 254 },
  { path: "onsus/auth-login", views: 3369 },
  { path: "onsus/email", views: 985 },
];

const cities = [
  { name: "סיאטל", time: "08:15:24", top: "44%", right: "78%" },
  { name: "גרינלנד", time: "01:15:24", top: "20%", right: "55%" },
  { name: "באלם", time: "12:15:24", top: "62%", right: "65%" },
  { name: "הרארה", time: "05:15:24", top: "70%", right: "40%" },
  { name: "דלהי", time: "08:45:24", top: "48%", right: "22%" },
  { name: "יקוצק", time: "12:15:24", top: "22%", right: "12%" },
  { name: "בריסביין", time: "01:15:24", top: "78%", right: "8%" },
];

function DashboardPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-muted/40 flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-[oklch(0.22_0.02_260)] text-white min-h-screen flex flex-col">
        <div className="px-6 py-5 flex items-center gap-2">
          <span className="text-2xl font-extrabold italic">
            Onsus<span className="text-brand">.</span>
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-6 text-sm">
          <SectionLabel>כללי</SectionLabel>
          {navGeneral.map((i) => <NavItem key={i.label} {...i} />)}

          <SectionLabel>משתמשים</SectionLabel>
          {navUsers.map((i) => <NavItem key={i.label} {...i} />)}

          <SectionLabel>אחר</SectionLabel>
          {navOthers.map((i) => <NavItem key={i.label} {...i} />)}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Topbar */}
        <header className="bg-card border-b border-border px-6 h-16 flex items-center gap-4">
          <button className="p-2 rounded hover:bg-muted">
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold tracking-wide">ברוך הבא!</h1>

          <div className="flex-1" />

          <div className="hidden md:flex items-center bg-muted rounded-md h-10 px-3 w-72">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              placeholder="חיפוש..."
              className="bg-transparent outline-none px-3 text-sm w-full"
            />
          </div>

          <button className="p-2 rounded hover:bg-muted"><Moon className="w-5 h-5" /></button>
          <button className="p-2 rounded hover:bg-muted relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand rounded-full" />
          </button>
          <button className="p-2 rounded hover:bg-muted"><Settings className="w-5 h-5" /></button>
          <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand">
            א
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Banner */}
          <div className="bg-brand/15 text-foreground rounded-lg px-5 py-4 text-sm">
            אנו מצטערים להודיע כי השרת שלנו חווה תקלה זמנית. הצוות שלנו עובד על פתרון.
          </div>

          {/* Stats + Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard icon={ShoppingCart} label="סך הזמנות" value="13,647" delta="2.3%" up />
              <StatCard icon={Award} label="לידים חדשים" value="9,526" delta="8.1%" up />
              <StatCard icon={ShoppingBag} label="עסקאות" value="976" delta="0.3%" />
              <StatCard icon={DollarSign} label="הכנסה צפויה" value="₪123.6K" delta="10.6%" />
            </div>

            <div className="bg-card rounded-lg border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">ביצועים</h3>
                <div className="flex items-center bg-muted rounded-md p-1 text-xs">
                  {["הכל", "1ח", "6ח", "1ש"].map((t, i) => (
                    <button
                      key={t}
                      className={`px-3 py-1 rounded ${i === 0 ? "bg-brand text-white" : "text-muted-foreground"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={perfData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 260)" vertical={false} />
                    <XAxis dataKey="m" tick={{ fontSize: 11 }} reversed />
                    <YAxis yAxisId="l" orientation="right" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="r" orientation="left" tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar yAxisId="l" dataKey="bar" fill="oklch(0.7 0.18 35)" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="r" type="monotone" dataKey="line" stroke="oklch(0.65 0.13 180)" strokeWidth={2} dot={{ r: 3 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversions */}
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-bold text-lg mb-2">המרות</h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={conversionsData}
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                    >
                      {conversionsData.map((c, i) => (
                        <Cell key={i} fill={c.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-around text-center text-sm pt-2 border-t border-border">
                <div>
                  <p className="text-muted-foreground">השבוע</p>
                  <p className="font-bold text-lg">23.5K</p>
                </div>
                <div className="border-r border-border" />
                <div>
                  <p className="text-muted-foreground">השבוע שעבר</p>
                  <p className="font-bold text-lg">41.05K</p>
                </div>
              </div>
            </div>

            {/* Sessions Map */}
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-bold text-lg mb-4">סשנים לפי מדינה</h3>
              <div className="relative h-56 bg-muted/50 rounded overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,oklch(0.7_0.02_260)_0,transparent_30%),radial-gradient(circle_at_70%_60%,oklch(0.7_0.02_260)_0,transparent_30%),radial-gradient(circle_at_50%_70%,oklch(0.7_0.02_260)_0,transparent_25%)]" />
                {cities.map((c) => (
                  <div
                    key={c.name}
                    className="absolute text-[10px] text-center"
                    style={{ top: c.top, right: c.right, transform: "translate(50%,-50%)" }}
                  >
                    <div className="w-2 h-2 bg-brand rounded-full mx-auto shadow-[0_0_0_4px_oklch(0.7_0.18_35/0.25)]" />
                    <p className="font-semibold mt-1">{c.name}</p>
                    <p className="text-muted-foreground">{c.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top pages */}
            <div className="bg-card rounded-lg border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">עמודים מובילים</h3>
                <button className="text-xs bg-brand/15 text-brand px-3 py-1.5 rounded-md font-semibold">
                  צפה בהכל
                </button>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-muted-foreground border-b border-border">
                    <th className="text-right font-medium py-2">נתיב</th>
                    <th className="text-left font-medium py-2">צפיות</th>
                  </tr>
                </thead>
                <tbody>
                  {topPages.map((p) => (
                    <tr key={p.path} className="border-b border-border/50 last:border-0">
                      <td className="py-3 text-foreground">{p.path}</td>
                      <td className="py-3 text-left font-semibold">{p.views.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-widest text-white/40 px-3 mt-5 mb-2">{children}</p>
  );
}

function NavItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof LayoutDashboard;
  label: string;
  children?: string[];
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!children?.length;
  const isOpen = open && hasChildren;

  return (
    <div>
      <button
        onClick={() => hasChildren && setOpen((v) => !v)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 ${
          isOpen ? "text-brand border-r-2 border-brand bg-white/5" : "text-white/80 hover:text-white"
        }`}
      >
        <Icon className={`w-4 h-4 ${isOpen ? "text-brand" : "text-brand"}`} />
        <span className="flex-1 text-right">{label}</span>
        {hasChildren && (
          <ChevronDown
            className={`w-3.5 h-3.5 opacity-60 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>
      {isOpen && (
        <ul className="pr-10 py-1 space-y-1">
          {children!.map((c) => (
            <li key={c}>
              <button className="w-full text-right text-white/70 hover:text-white py-1.5 text-sm">
                {c}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  up,
}: {
  icon: typeof ShoppingCart;
  label: string;
  value: string;
  delta: string;
  up?: boolean;
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-5 flex flex-col justify-between min-h-[140px]">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-md bg-brand/15 flex items-center justify-center">
          <Icon className="w-6 h-6 text-brand" />
        </div>
        <div className="text-left">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border mt-3 text-xs">
        <button className="text-muted-foreground hover:text-foreground">צפה בעוד</button>
        <span className={`flex items-center gap-1 font-semibold ${up ? "text-emerald-500" : "text-red-500"}`}>
          {up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
          {delta} אחרון
        </span>
      </div>
    </div>
  );
}
