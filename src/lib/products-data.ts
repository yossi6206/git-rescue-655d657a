import playstation from "@/assets/products/playstation.png";
import echoDot from "@/assets/products/echo-dot.png";
import earbuds from "@/assets/products/earbuds.png";
import smartwatch from "@/assets/products/smartwatch.png";
import mouse from "@/assets/products/mouse.png";
import tv from "@/assets/products/tv.png";
import laptop from "@/assets/products/laptop.png";
import phone from "@/assets/products/phone.png";
import coffeeMachine from "@/assets/products/coffee-machine.png";
import robotVacuum from "@/assets/products/robot-vacuum.png";

export type ProductData = {
  slug: string;
  category: string;
  title: string;
  price: string;
  oldPrice?: string;
  img: string;
  rating: number;
  reviews: number;
  sold: number;
  sku: string;
  specs: { label: string; value: string }[];
  about: string[];
  description: string;
};

export const POPULAR_PRODUCTS: ProductData[] = [
  {
    slug: "playstation-4-slim-1tb",
    category: "קונסולות משחק",
    title: "PlayStation 4 Slim 1TB – קונסולת גיימינג בעלת ביצועים גבוהים",
    price: "₪1,499",
    oldPrice: "₪1,799",
    img: playstation,
    rating: 5,
    reviews: 2104,
    sold: 512,
    sku: "PS4-SLIM-1TB",
    specs: [
      { label: "מותג", value: "Sony" },
      { label: "אחסון", value: "1TB" },
      { label: "דגם", value: "Slim" },
      { label: "אחריות", value: "שנה" },
    ],
    about: [
      "קונסולת PS4 Slim עם 1TB אחסון לאלפי שעות משחק.",
      "ביצועים חלקים ב-1080p וגרפיקה עשירה.",
      "תומך בכל משחקי PS4 והרחבות.",
      "כולל בקר DualShock 4 אלחוטי.",
    ],
    description:
      "PlayStation 4 Slim היא קונסולת הגיימינג האידיאלית לכל בית – קומפקטית, שקטה ובעלת ביצועים מרשימים. עם 1TB אחסון, ספריית משחקים ענפה ותמיכה ב-PlayStation Plus, היא מציעה חוויית גיימינג מלאה במחיר משתלם.",
  },
  {
    slug: "echo-dot-3",
    category: "רמקולים חכמים",
    title: "Echo Dot (דור 3) – רמקול חכם עם Alexa",
    price: "₪249",
    oldPrice: "₪349",
    img: echoDot,
    rating: 4,
    reviews: 1532,
    sold: 870,
    sku: "ECHO-DOT-3",
    specs: [
      { label: "מותג", value: "Amazon" },
      { label: "עוזרת קולית", value: "Alexa" },
      { label: "חיבור", value: "Wi-Fi + Bluetooth" },
      { label: "צבע", value: "שחור" },
    ],
    about: [
      "רמקול חכם קומפקטי עם Alexa.",
      "איכות סאונד מלאה ועשירה.",
      "שליטה קולית במכשירי בית חכם.",
      "תזמון, התראות, מוזיקה וחדשות בפקודה.",
    ],
    description:
      "Echo Dot דור 3 מביא את כוחה של Alexa לכל חדר בבית. שאל שאלות, הפעל מוזיקה, שלוט במכשירים חכמים והגדר שגרות יומיות – הכול בפקודה קולית פשוטה.",
  },
  {
    slug: "sony-zx-earbuds",
    category: "אוזניות אלחוטיות",
    title: "Sony ZX Series – אוזניות חוטיות עם נוחות מירבית",
    price: "₪399",
    oldPrice: "₪499",
    img: earbuds,
    rating: 4,
    reviews: 980,
    sold: 421,
    sku: "SONY-ZX-100",
    specs: [
      { label: "מותג", value: "Sony" },
      { label: "סוג", value: "On-Ear" },
      { label: "חיבור", value: "3.5mm" },
      { label: "משקל", value: "120 גרם" },
    ],
    about: [
      "סאונד עוצמתי עם בס עמוק.",
      "כריות אוזניים נוחות לשעות ארוכות.",
      "מתקפלות לנשיאה קלה.",
      "כבל מחוזק עמיד בפני קיפול.",
    ],
    description:
      "אוזניות Sony ZX Series משלבות עיצוב קלאסי עם איכות סאונד מצוינת. אידיאליות להאזנה ביתית, נסיעות וספורט – עם נוחות מירבית ועמידות לאורך זמן.",
  },
  {
    slug: "suunto-9-smartwatch",
    category: "שעון חכם",
    title: "SUUNTO 9 – שעון GPS לספורטאים עם סוללה ארוכה",
    price: "₪1,899",
    oldPrice: "₪2,290",
    img: smartwatch,
    rating: 5,
    reviews: 612,
    sold: 198,
    sku: "SUUNTO-9-GPS",
    specs: [
      { label: "מותג", value: "Suunto" },
      { label: "GPS", value: "כן" },
      { label: "סוללה", value: "עד 170 שעות" },
      { label: "עמידות למים", value: "100 מטר" },
    ],
    about: [
      "שעון ספורט מתקדם עם GPS מובנה.",
      "מעקב אחר 80+ פעילויות ספורט.",
      "סוללה אדירה לאימונים ארוכים.",
      "עמיד למים עד 100 מטר.",
    ],
    description:
      "SUUNTO 9 הוא שעון הספורט האולטימטיבי לאתלטים רציניים. עם GPS מדויק, סוללה שמחזיקה ימים שלמים ומעקב מקיף אחר ביצועים – הוא מלווה כל אימון, מירוץ והרפתקה.",
  },
  {
    slug: "lenovo-400-mouse",
    category: "אלקטרוניקה",
    title: "Lenovo 400 USB-C – עכבר ארגונומי קומפקטי",
    price: "₪129",
    oldPrice: "₪179",
    img: mouse,
    rating: 4,
    reviews: 340,
    sold: 1024,
    sku: "LENOVO-400-USBC",
    specs: [
      { label: "מותג", value: "Lenovo" },
      { label: "חיבור", value: "USB-C אלחוטי" },
      { label: "DPI", value: "1600" },
      { label: "סוללה", value: "AA" },
    ],
    about: [
      "עכבר אלחוטי ארגונומי במיוחד.",
      "חיבור USB-C מהיר ויציב.",
      "רגישות 1600 DPI לדיוק מקסימלי.",
      "תואם Windows, macOS ו-Linux.",
    ],
    description:
      "עכבר Lenovo 400 USB-C מציע נוחות עבודה לאורך כל היום במחיר נגיש. עיצוב ארגונומי, חיבור אלחוטי יציב וביצועים מדויקים – פתרון מושלם למשרד וללימודים.",
  },
  {
    slug: "smart-tv-55-4k",
    category: "טלוויזיות",
    title: "טלוויזיה חכמה 55 אינץ' 4K UHD – חוויית צפייה מרהיבה",
    price: "₪2,490",
    oldPrice: "₪2,990",
    img: tv,
    rating: 5,
    reviews: 1845,
    sold: 304,
    sku: "TV-55-4K-UHD",
    specs: [
      { label: "גודל מסך", value: '55"' },
      { label: "רזולוציה", value: "4K UHD" },
      { label: "סוג", value: "Smart TV" },
      { label: "HDR", value: "כן" },
    ],
    about: [
      "מסך 4K UHD בגודל 55 אינץ'.",
      "תמיכה מלאה בכל אפליקציות הסטרימינג.",
      "HDR לתמונה חיה ועשירה בצבעים.",
      "3 כניסות HDMI + 2 USB.",
    ],
    description:
      "טלוויזיה חכמה 55 אינץ' המביאה את הקולנוע אליכם הביתה. רזולוציית 4K, HDR וממשק חכם נוח – פתרון מושלם לסלון המודרני.",
  },
  {
    slug: "laptop-15-pro",
    category: "מחשבים ניידים",
    title: "מחשב נייד 15.6 אינץ' – מעבד עוצמתי לעבודה ולימודים",
    price: "₪3,799",
    oldPrice: "₪4,490",
    img: laptop,
    rating: 5,
    reviews: 720,
    sold: 156,
    sku: "LAPTOP-156-PRO",
    specs: [
      { label: "מסך", value: '15.6" FHD' },
      { label: "מעבד", value: "Intel Core i5" },
      { label: "זיכרון", value: "16GB RAM" },
      { label: "אחסון", value: "512GB SSD" },
    ],
    about: [
      "מסך 15.6 אינץ' Full HD חד וברור.",
      "מעבד עוצמתי לעבודה ומולטימדיה.",
      "16GB RAM ו-512GB SSD מהיר.",
      "סוללה שמחזיקה עד 8 שעות.",
    ],
    description:
      "מחשב נייד מקצועי המתאים לעבודה, לימודים ובידור. שילוב מעולה של ביצועים, ניידות וערך לכסף – מוכן לכל משימה שתפגוש אותו.",
  },
  {
    slug: "smartphone-amoled-pro",
    category: "סלולר",
    title: "סמארטפון מתקדם – מסך AMOLED ומצלמה איכותית",
    price: "₪1,990",
    oldPrice: "₪2,490",
    img: phone,
    rating: 5,
    reviews: 2310,
    sold: 689,
    sku: "PHONE-AMOLED-PRO",
    specs: [
      { label: "מסך", value: '6.5" AMOLED' },
      { label: "מצלמה", value: "108MP" },
      { label: "סוללה", value: "5000mAh" },
      { label: "אחסון", value: "128GB" },
    ],
    about: [
      "מסך AMOLED מרהיב 6.5 אינץ'.",
      "מצלמה ראשית 108MP לתמונות מקצועיות.",
      "סוללת 5000mAh ליום שלם של שימוש.",
      "טעינה מהירה ו-5G מובנה.",
    ],
    description:
      "סמארטפון פרימיום במחיר נגיש. מסך AMOLED מהמם, מצלמה מתקדמת וסוללה אדירה – הכול במכשיר אחד עוצמתי וקל לשימוש.",
  },
  {
    slug: "espresso-pro-machine",
    category: "עולם הקפה",
    title: "מכונת אספרסו מקצועית – קפה איכותי בבית",
    price: "₪899",
    oldPrice: "₪1,199",
    img: coffeeMachine,
    rating: 4,
    reviews: 540,
    sold: 287,
    sku: "ESPRESSO-PRO",
    specs: [
      { label: "סוג", value: "אספרסו ידנית" },
      { label: "לחץ", value: "15 bar" },
      { label: "מכל מים", value: "1.5 ליטר" },
      { label: "מקציף חלב", value: "כן" },
    ],
    about: [
      "מכונת אספרסו במכשיר ביתי קומפקטי.",
      "לחץ 15 בר לחילוץ קפה מושלם.",
      "מקציף חלב אינטגרלי לקפוצ'ינו ולאטה.",
      "מתאים לפולים טחונים ולקפסולות ESE.",
    ],
    description:
      "הביאו את חוויית בית הקפה הביתה. מכונה מקצועית עם כל מה שצריך כדי להכין אספרסו, קפוצ'ינו ולאטה ברמה של ברמן – פשוט, נקי ומהיר.",
  },
  {
    slug: "robot-vacuum-smart",
    category: "שואבי אבק",
    title: "שואב אבק רובוטי חכם – ניקוי אוטומטי לבית",
    price: "₪1,290",
    oldPrice: "₪1,690",
    img: robotVacuum,
    rating: 5,
    reviews: 1102,
    sold: 433,
    sku: "ROBOT-VAC-SMART",
    specs: [
      { label: "סוג", value: "רובוטי" },
      { label: "סוללה", value: "עד 120 דקות" },
      { label: "מכל אבק", value: "0.6 ליטר" },
      { label: "אפליקציה", value: "כן" },
    ],
    about: [
      "ניקוי אוטומטי של כל הבית.",
      "מיפוי חכם וניווט מדויק.",
      "שליטה דרך אפליקציה ייעודית.",
      "מתאים לפרקט, אריחים ושטיחים.",
    ],
    description:
      "שואב אבק רובוטי שיחסוך לכם זמן יקר. עם מיפוי חכם, סוללה ארוכה ושליטה מהסמארטפון – הבית נקי גם כשאתם לא בו.",
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return POPULAR_PRODUCTS.find((p) => p.slug === slug);
}
