import { Headphones, Smartphone, Watch, Laptop, Camera, Gamepad2, Speaker, Tv, Tablet, Mouse } from "lucide-react";

const brands = [
  { name: "SoundWave", Icon: Headphones },
  { name: "PhonePro", Icon: Smartphone },
  { name: "WatchTime", Icon: Watch },
  { name: "LaptopHub", Icon: Laptop },
  { name: "CameraX", Icon: Camera },
  { name: "GameZone", Icon: Gamepad2 },
  { name: "SpeakerLab", Icon: Speaker },
  { name: "ScreenPlay", Icon: Tv },
  { name: "TabWorld", Icon: Tablet },
  { name: "ClickMaster", Icon: Mouse },
];

export function BrandsMarquee() {
  // Duplicate for seamless loop
  const list = [...brands, ...brands];

  return (
    <section dir="ltr" className="w-full px-3 md:px-6 py-10 md:py-16 border-y border-border bg-background">
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-24 items-center">
          {list.map((b, i) => {
            const Icon = b.Icon;
            return (
              <div
                key={`${b.name}-${i}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-brand transition-colors shrink-0"
              >
                <Icon className="w-10 h-10" strokeWidth={1.5} />
                <span className="text-3xl font-bold tracking-wide whitespace-nowrap">
                  {b.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
