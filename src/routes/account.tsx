import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  User,
  CreditCard,
  Package,
  Home,
  Star,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Eye,
  Truck,
  Headphones,
  FileText,
  RotateCcw,
  Search,
  Camera,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/account")({
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "האזור האישי שלי" },
      { name: "description", content: "אזור אישי לניהול הפרופיל, ההזמנות וההתראות שלך." },
    ],
  }),
});

type Tab = "profile" | "payments" | "orders" | "billing" | "preferences";

const TABS: {
  id: Tab;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  warn?: boolean;
}[] = [
  { id: "profile", label: "פרטים אישיים", icon: User },
  { id: "payments", label: "אמצעי תשלום שמורים", icon: CreditCard, warn: true },
  { id: "orders", label: "ההזמנות שלי", icon: Package },
  { id: "billing", label: "פרטי חיוב ומשלוח", icon: Home },
  { id: "preferences", label: "העדפות", icon: Star },
];

type AccountData = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  notifyEmail: boolean;
  notifySms: boolean;
  avatar: string | null;
};

const DEFAULTS: AccountData = {
  username: "yossi6206",
  email: "yossi6206@gmail.com",
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  city: "",
  zip: "",
  notifyEmail: true,
  notifySms: false,
  avatar: null,
};

const STORAGE_KEY = "onsus_account";

type Order = {
  id: string;
  status: "completed" | "pending" | "cancelled";
  branch: string;
  date: string;
  total: number;
  items: { name: string; sku: string; qty: number; image?: string }[];
};

const ORDERS: Order[] = [
  {
    id: "29109142",
    status: "completed",
    branch: "אתר אינטרנט",
    date: "17/09/2025",
    total: 572,
    items: [
      {
        name: 'מכונת שטיפה ניידת טייפון 175 בר 1800W מבית GTI',
        sku: "296782",
        qty: 1,
      },
    ],
  },
  {
    id: "24010016",
    status: "completed",
    branch: "אתר אינטרנט",
    date: "18/10/2024",
    total: 199,
    items: [
      {
        name: "6 מארזים של 34 חיתולים שלב 5 לתינוק במשקל 12-18 ק\"ג - Huggies Freedom Dry - סך הכל 204 חיתולים",
        sku: "61615",
        qty: 1,
      },
    ],
  },
];

function AccountPage() {
  const [tab, setTab] = useState<Tab>("orders");
  const [data, setData] = useState<AccountData>(DEFAULTS);
  const [saved, setSaved] = useState(false);

  // Orders filter state
  const [orderQuery, setOrderQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setData({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {}
  }, []);

  const update = <K extends keyof AccountData>(k: K, v: AccountData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const onAvatar = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update("avatar", reader.result as string);
    reader.readAsDataURL(file);
  };

  const initials = (data.username || "U").slice(0, 2).toUpperCase();

  const filteredOrders = useMemo(() => {
    return ORDERS.filter((o) => {
      if (orderQuery && !o.id.includes(orderQuery.trim())) return false;
      if (statusFilter !== "all" && o.status !== statusFilter) return false;
      return true;
    });
  }, [orderQuery, statusFilter]);

  const resetFilters = () => {
    setOrderQuery("");
    setDateFilter("all");
    setStatusFilter("all");
  };

  return (
    <>
      <SiteHeader />
      <div dir="rtl" className="min-h-screen w-full bg-muted/40 py-8 flex">
        <div className="w-full px-4 flex-1 flex">
          <div className="grid gap-6 md:grid-cols-[260px_1fr] flex-1 w-full">
            {/* Sidebar */}
            <aside className="space-y-3 h-full">
              <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] overflow-hidden h-full flex flex-col">
                <div className="border-b border-[var(--brand)]/20 px-4 py-3">
                  <h2 className="text-lg font-bold text-foreground">אזור אישי</h2>
                  <div className="mt-1 h-1 w-10 rounded bg-[var(--brand)]" />
                </div>
                <ul className="flex flex-col p-2">
                  {TABS.map((t) => {
                    const active = tab === t.id;
                    const Icon = t.icon;
                    return (
                      <li key={t.id}>
                        <button
                          onClick={() => setTab(t.id)}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition",
                            active
                              ? "bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] font-semibold text-[var(--brand)]"
                              : "text-foreground/80 hover:bg-muted",
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            <span>{t.label}</span>
                          </span>
                          {t.warn && (
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                  <li>
                    <button
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition hover:bg-muted"
                    >
                      <LogOut className="h-4 w-4 text-destructive" />
                      <span>התנתקות</span>
                    </button>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main panel */}
            <main className="space-y-6">
              {tab === "orders" && (
                <section className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)]">
                  <div className="border-b px-6 py-4">
                    <h1 className="text-xl font-bold">ההזמנות שלי</h1>
                  </div>

                  {/* Filters */}
                  <div className="grid gap-3 border-b bg-muted/30 p-4 md:grid-cols-[1fr_auto_180px_180px_auto]">
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">
                        חיפוש לפי מספר הזמנה
                      </Label>
                      <Input
                        placeholder="מספר הזמנה"
                        value={orderQuery}
                        onChange={(e) => setOrderQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex items-end">
                      <Button className="bg-[var(--brand)] hover:bg-[var(--brand)]/90 gap-2">
                        <Search className="h-4 w-4" /> חיפוש
                      </Button>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">מועד</Label>
                      <Select value={dateFilter} onValueChange={setDateFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="הכל" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">הכל</SelectItem>
                          <SelectItem value="30">30 ימים אחרונים</SelectItem>
                          <SelectItem value="90">3 חודשים אחרונים</SelectItem>
                          <SelectItem value="365">שנה אחרונה</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">
                        סטטוסי ההזמנה
                      </Label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="הכל" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">הכל</SelectItem>
                          <SelectItem value="completed">שולמה</SelectItem>
                          <SelectItem value="pending">בהמתנה</SelectItem>
                          <SelectItem value="cancelled">בוטלה</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Button
                        variant="outline"
                        onClick={resetFilters}
                        className="gap-2 border-destructive/40 text-destructive hover:bg-destructive/5 hover:text-destructive"
                      >
                        <RotateCcw className="h-4 w-4" /> איפוס
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4 p-4 md:p-6">
                    {filteredOrders.length === 0 ? (
                      <div className="py-16 text-center text-sm text-muted-foreground">
                        לא נמצאו הזמנות
                      </div>
                    ) : (
                      filteredOrders.map((o) => <OrderCard key={o.id} order={o} />)
                    )}
                  </div>
                </section>
              )}

              {tab === "profile" && (
                <ProfilePanel
                  data={data}
                  initials={initials}
                  onAvatar={onAvatar}
                  update={update}
                  saved={saved}
                  save={save}
                />
              )}

              {tab === "payments" && (
                <PanelCard title="אמצעי תשלום שמורים">
                  <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
                    <CreditCard className="h-12 w-12 text-muted-foreground" strokeWidth={1.3} />
                    <p className="font-semibold">אין אמצעי תשלום שמורים</p>
                    <p className="text-sm text-muted-foreground">
                      תוכל להוסיף כרטיס אשראי בעת ביצוע ההזמנה הבאה.
                    </p>
                  </div>
                </PanelCard>
              )}

              {tab === "billing" && (
                <PanelCard title="פרטי חיוב ומשלוח">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="כתובת" value={data.address} onChange={(v) => update("address", v)} />
                    <Field label="עיר" value={data.city} onChange={(v) => update("city", v)} />
                    <Field label="מיקוד" value={data.zip} onChange={(v) => update("zip", v)} />
                    <Field label="טלפון" value={data.phone} onChange={(v) => update("phone", v)} />
                  </div>
                  <SaveBar saved={saved} save={save} />
                </PanelCard>
              )}

              {tab === "preferences" && (
                <PanelCard title="העדפות">
                  <div className="space-y-3">
                    <ToggleRow
                      label="התראות במייל"
                      checked={data.notifyEmail}
                      onChange={(v) => update("notifyEmail", v)}
                    />
                    <ToggleRow
                      label="התראות ב-SMS"
                      checked={data.notifySms}
                      onChange={(v) => update("notifySms", v)}
                    />
                  </div>
                  <SaveBar saved={saved} save={save} />
                </PanelCard>
              )}
            </main>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

function PanelCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)]">
      <div className="border-b px-6 py-4">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="p-6 space-y-6">{children}</div>
    </section>
  );
}

function ProfilePanel({
  data,
  initials,
  onAvatar,
  update,
  saved,
  save,
}: {
  data: AccountData;
  initials: string;
  onAvatar: (f: File | null) => void;
  update: <K extends keyof AccountData>(k: K, v: AccountData[K]) => void;
  saved: boolean;
  save: () => void;
}) {
  return (
    <PanelCard title="פרטים אישיים">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted text-lg font-semibold text-muted-foreground">
            {data.avatar ? (
              <img src={data.avatar} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <label className="absolute -bottom-1 -left-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[var(--brand)] text-white shadow ring-2 ring-card">
            <Camera className="h-3.5 w-3.5" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onAvatar(e.target.files?.[0] ?? null)}
            />
          </label>
        </div>
        <div>
          <h2 className="text-lg font-bold">ברוך הבא, {data.username}!</h2>
          <p className="text-sm text-muted-foreground">{data.email}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="שם פרטי" value={data.firstName} onChange={(v) => update("firstName", v)} />
        <Field label="שם משפחה" value={data.lastName} onChange={(v) => update("lastName", v)} />
        <Field label="שם משתמש" value={data.username} onChange={(v) => update("username", v)} />
        <Field label="אימייל" type="email" value={data.email} onChange={(v) => update("email", v)} />
        <Field label="טלפון" value={data.phone} onChange={(v) => update("phone", v)} />
      </div>

      <SaveBar saved={saved} save={save} />
    </PanelCard>
  );
}

function SaveBar({ saved, save }: { saved: boolean; save: () => void }) {
  return (
    <div className="flex items-center justify-end gap-3 border-t pt-4">
      {saved && <span className="text-sm text-green-600">נשמר בהצלחה</span>}
      <Button onClick={save} className="bg-[var(--brand)] hover:bg-[var(--brand)]/90">
        שמירה
      </Button>
    </div>
  );
}

function OrderCard({ order }: { order: Order }) {
  const statusLabel =
    order.status === "completed" ? "שולמה" : order.status === "pending" ? "בהמתנה" : "בוטלה";

  return (
    <article className="overflow-hidden rounded-xl border bg-background">
      {/* Header */}
      <header className="grid grid-cols-2 gap-4 bg-muted/40 px-4 py-3 text-sm md:grid-cols-5">
        <Cell label="מספר הזמנה" value={order.id} />
        <Cell
          label="סטטוס"
          value={
            <span className="inline-flex items-center gap-1 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              {statusLabel}
            </span>
          }
        />
        <Cell label="סניף" value={order.branch} />
        <Cell label="מועד ביצוע ההזמנה" value={order.date} />
        <Cell label="סך הכל" value={`₪${order.total}`} />
      </header>

      {/* Body */}
      <div className="grid gap-4 p-4 md:grid-cols-[1fr_220px]">
        <div className="space-y-3">
          {order.items.map((it, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border bg-muted/30 text-muted-foreground">
                <Package className="h-8 w-8" strokeWidth={1.4} />
              </div>
              <div className="flex-1 text-sm">
                <p className="font-medium leading-snug">{it.name}</p>
                <p className="text-muted-foreground">מק"ט: {it.sku}</p>
                <p className="text-muted-foreground">כמות בהזמנה: {it.qty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Button className="justify-start gap-2 bg-emerald-600 text-white hover:bg-emerald-600/90">
            <Eye className="h-4 w-4" /> פרטים נוספים
          </Button>
          <Button className="justify-start gap-2 bg-[var(--brand)] hover:bg-[var(--brand)]/90">
            <Truck className="h-4 w-4" /> מעקב הזמנה
          </Button>
          <Button className="justify-start gap-2 bg-amber-400 text-foreground hover:bg-amber-400/90">
            <Headphones className="h-4 w-4" /> פנייה לשירות לקוחות
          </Button>
          <Button variant="outline" className="justify-start gap-2">
            <FileText className="h-4 w-4" /> חשבונית דיגיטלית
          </Button>
          <Button variant="outline" className="justify-start gap-2">
            <RotateCcw className="h-4 w-4" /> קניה חוזרת
          </Button>
        </div>
      </div>
    </article>
  );
}

function Cell({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="space-y-0.5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="text-sm text-foreground">{value}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg border p-4">
      <span className="text-sm font-medium">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 accent-[var(--brand)]"
      />
    </label>
  );
}
