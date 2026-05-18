import { Tag, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

type Post = {
  date: string;
  title: string;
  tags: string;
  excerpt: string;
  img: string;
};

const posts: Post[] = [
  {
    date: "18 בפברואר, 2023",
    title: "הגאדג׳טים הטכנולוגיים הכי שווים לשנת 2023",
    tags: "טכנולוגיה, גאדג׳טים",
    excerpt: "העולם הוא מקום מדהים המציע מגוון עצום של יעדים מרתקים ומוצרים ייחודיים.",
    img: blog1,
  },
  {
    date: "20 בינואר, 2023",
    title: "טרנדי האופנה הגדולים של העונה",
    tags: "אופנה, סטייל",
    excerpt: "העולם הוא מקום מדהים המציע מגוון עצום של יעדים מרתקים ומוצרים ייחודיים.",
    img: blog2,
  },
  {
    date: "18 בפברואר, 2023",
    title: "הגאדג׳טים הטכנולוגיים הכי שווים לשנת 2023",
    tags: "טכנולוגיה, גאדג׳טים",
    excerpt: "העולם הוא מקום מדהים המציע מגוון עצום של יעדים מרתקים ומוצרים ייחודיים.",
    img: blog3,
  },
  {
    date: "5 במרץ, 2023",
    title: "מדריך לרכישת טלוויזיה חכמה לבית",
    tags: "טלוויזיות, בית חכם",
    excerpt: "כל מה שצריך לדעת לפני שבוחרים את הטלוויזיה הבאה — גודל, רזולוציה ומערכת ההפעלה.",
    img: blog1,
  },
];

export function BlogSection() {
  return (
    <section dir="rtl" className="w-full px-3 md:px-6 py-10 md:py-16 bg-background">
      <div className="text-right mb-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          מהבלוג שלנו
        </h2>
        <div className="mt-3 h-1 w-16 bg-brand rounded-full mr-0 ml-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {posts.map((p, i) => (
          <article key={i} className="group flex flex-col">
            <div className="relative overflow-hidden rounded-md mb-5">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded">
                {p.date}
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground text-right mb-2 leading-snug">
              {p.title}
            </h3>

            <div className="flex items-center justify-start gap-2 text-sm text-brand mb-3">
              <Tag className="w-4 h-4" />
              <span>{p.tags}</span>
            </div>

            <p className="text-sm text-muted-foreground text-right leading-relaxed mb-6">
              {p.excerpt}
            </p>

            <div className="mt-auto pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-border hover:border-brand hover:text-brand text-foreground text-sm font-semibold px-6 py-3 rounded-md transition"
              >
                <ArrowLeft className="w-4 h-4" />
                קרא עוד
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
