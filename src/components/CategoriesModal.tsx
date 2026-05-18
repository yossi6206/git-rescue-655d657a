import { ChevronDown, ChevronLeft, Menu } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import coffee from "@/assets/cat/coffee.png";
import smallAppliances from "@/assets/cat/small-appliances.png";
import dishwasher from "@/assets/cat/dishwasher.png";
import cooking from "@/assets/cat/cooking.png";
import laundry from "@/assets/cat/laundry.png";
import fridge from "@/assets/cat/fridge.png";
import ac from "@/assets/cat/ac.png";
import phone from "@/assets/cat/phone.png";
import laptop from "@/assets/cat/laptop.png";
import tv from "@/assets/cat/tv.png";
import scooter from "@/assets/cat/scooter.png";
import smartHome from "@/assets/cat/smart-home.png";
import sport from "@/assets/cat/sport.png";
import garden from "@/assets/cat/garden.png";
import homeImg from "@/assets/cat/home.png";
import iron from "@/assets/cat/iron.png";
import beauty from "@/assets/cat/beauty.png";
import gaming from "@/assets/cat/gaming.png";
import audio from "@/assets/cat/audio.png";
import vacuum from "@/assets/cat/vacuum.png";

export type CategoryItem = { name: string; img: string; slug?: string };

export const allCategories: CategoryItem[] = [
  { name: "סלולר", img: phone, slug: "mobile" },
  { name: "מחשוב וסלולר", img: laptop, slug: "computing-mobile" },
  { name: "עולם הטלוויזיות", img: tv, slug: "tv-world" },
  { name: "מכונות וייבשי כביסה", img: laundry, slug: "laundry-dryers" },
  { name: "מקררים ומקפיאים", img: fridge, slug: "fridges-freezers" },
  { name: "מיזוג ואקלים", img: ac, slug: "ac-climate" },
  { name: "עולם הקפה", img: coffee, slug: "coffee-world" },
  { name: "מוצרי חשמל קטנים למטבח", img: smallAppliances, slug: "small-kitchen-appliances" },
  { name: "אפיה ובישול", img: cooking, slug: "cooking-baking" },
  { name: "מדיחי כלים", img: dishwasher },
  { name: "שואבי אבק ומכונות שטיפה", img: vacuum },
  { name: "אוזניות וסאונד", img: audio },
  { name: "עולם הגיימינג", img: gaming },
  { name: "טיפוח ויופי", img: beauty, slug: "beauty" },
  { name: "מגהצים", img: iron },
  { name: "לבית", img: homeImg, slug: "home" },
  { name: "לגן", img: garden, slug: "garden" },
  { name: "ספורט", img: sport, slug: "sport" },
  { name: "מוצרי בית חכם", img: smartHome, slug: "smart-home" },
  { name: "קורקינט והוברבורד", img: scooter },
];

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CategoriesModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        dir="rtl"
        className="max-w-md w-[calc(100%-2rem)] max-h-[85vh] overflow-hidden p-0 gap-0 rounded-2xl"
      >
        <DialogHeader className="flex-row items-center justify-between bg-brand text-white px-5 py-4 space-y-0">
          <button
            onClick={() => onOpenChange(false)}
            aria-label="סגור"
            className="h-8 w-8 rounded-full hover:bg-white/15 flex items-center justify-center transition"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <DialogTitle className="text-lg font-bold text-white">כל הקטגוריות</DialogTitle>
            <Menu className="h-5 w-5" />
          </div>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(85vh-64px)] bg-white">
          {allCategories.map(({ name, img }) => (
            <a
              key={name}
              href="#"
              className="group flex items-center gap-3 px-5 py-3 border-b border-border last:border-b-0 hover:bg-muted/40 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-brand transition-colors shrink-0" />
              <span className="flex-1 text-right text-base font-semibold text-foreground group-hover:text-brand transition-colors">
                {name}
              </span>
              <div className="h-14 w-14 flex items-center justify-center shrink-0">
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
