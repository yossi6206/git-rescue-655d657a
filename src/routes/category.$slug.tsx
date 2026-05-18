import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { TvNewArrivals } from "@/components/TvNewArrivals";
import { SiteFooter } from "@/components/SiteFooter";
import { ChevronLeft, ChevronLeft as ChevLeft } from "lucide-react";
import computingMobileBanner from "@/assets/category-computing-mobile.webp";
import laptop from "@/assets/cat/laptop.png";
import phone from "@/assets/cat/phone.png";
import gaming from "@/assets/cat/gaming.png";
import tablets from "@/assets/cat/sub/tablets.png";
import monitors from "@/assets/cat/sub/monitors.png";
import laptops from "@/assets/cat/sub/laptops.png";
import ink from "@/assets/cat/sub/ink.png";
import printer from "@/assets/cat/sub/printer.png";
import cables from "@/assets/cat/sub/cables.png";
import mouse from "@/assets/cat/sub/mouse.png";
import keyboard from "@/assets/cat/sub/keyboard.png";
import shredder from "@/assets/cat/sub/shredder.png";
import ereader from "@/assets/cat/sub/ereader.png";
import pcSpeakers from "@/assets/cat/sub/pc-speakers.png";
import scanner from "@/assets/cat/sub/scanner.png";
import webcam from "@/assets/cat/sub/webcam.png";
import router from "@/assets/cat/sub/router.png";
import refurbDesktop from "@/assets/cat/sub/refurb-desktop.png";
import refurbLaptop from "@/assets/cat/sub/refurb-laptop.png";
import aio from "@/assets/cat/sub/aio.png";
import dock from "@/assets/cat/sub/dock.png";
import soundCard from "@/assets/cat/sub/sound-card.png";
import network from "@/assets/cat/sub/network.png";
import presenter from "@/assets/cat/sub/presenter.png";
import ups from "@/assets/cat/sub/ups.png";
import dictionary from "@/assets/cat/sub/dictionary.png";
import hdd from "@/assets/cat/sub/hdd.png";
import caseApple from "@/assets/cat/sub/case-apple.png";
import caseAndroid from "@/assets/cat/sub/case-android.png";
import smartphones from "@/assets/cat/sub/smartphones.png";
import smartwatch from "@/assets/cat/sub/smartwatch.png";
import phoneCharger from "@/assets/cat/sub/phone-charger.png";
import chargingCable from "@/assets/cat/sub/charging-cable.png";
import powerbank from "@/assets/cat/sub/powerbank.png";
import phoneAccessories from "@/assets/cat/sub/phone-accessories.png";
import kidsWatch from "@/assets/cat/sub/kids-watch.png";
import refurbPhone from "@/assets/cat/sub/refurb-phone.png";
import gamingChair from "@/assets/cat/sub/gaming-chair.png";
import gamingKb from "@/assets/cat/sub/gaming-kb.png";
import gamingHeadset from "@/assets/cat/sub/gaming-headset.png";
import gamingDesk from "@/assets/cat/sub/gaming-desk.png";
import psAccessories from "@/assets/cat/sub/ps-accessories.png";
import gamingAccessories from "@/assets/cat/sub/gaming-accessories.png";
import console from "@/assets/cat/sub/console.png";
import games from "@/assets/cat/sub/games.png";
import gamingBundle from "@/assets/cat/sub/gaming-bundle.png";
import mousepad from "@/assets/cat/sub/mousepad.png";
import consoleAccessories from "@/assets/cat/sub/console-accessories.png";
import tvWorldBanner from "@/assets/category-tv-world.webp";
import tvTelevisions from "@/assets/cat/sub/tv-televisions.png";
import tvMounts from "@/assets/cat/sub/tv-mounts.png";
import tvProjectors from "@/assets/cat/sub/tv-projectors.png";
import tvProjectionScreens from "@/assets/cat/sub/tv-projection-screens.png";
import tvBluelightGlasses from "@/assets/cat/sub/tv-bluelight-glasses.png";
import tvStreamers from "@/assets/cat/sub/tv-streamers.png";
import tvAccessories from "@/assets/cat/sub/tv-accessories.png";
import tvFloorStands from "@/assets/cat/sub/tv-floor-stands.png";
import tvDvdPlayers from "@/assets/cat/sub/tv-dvd-players.png";
import coffeeWorldBanner from "@/assets/category-coffee-world.webp";
import coffeeIcon from "@/assets/cat/coffee.png";
import coffeeEspressoBeans from "@/assets/cat/sub/coffee-espresso-beans.png";
import coffeeMilkFrotherElectric from "@/assets/cat/sub/coffee-milk-frother-electric.png";
import coffeeGrinder from "@/assets/cat/sub/coffee-grinder.png";
import coffeeCapsuleMachine from "@/assets/cat/sub/coffee-capsule-machine.png";
import coffeeMoka from "@/assets/cat/sub/coffee-moka.png";
import coffeeCapsules from "@/assets/cat/sub/coffee-capsules.png";
import coffeeFilterTurkish from "@/assets/cat/sub/coffee-filter-turkish.png";
import coffeeTeaKettles from "@/assets/cat/sub/coffee-tea-kettles.png";
import coffeeAccessories from "@/assets/cat/sub/coffee-accessories.png";
import coffeeGroundBeans from "@/assets/cat/sub/coffee-ground-beans.png";
import coffeeMilkFrotherManual from "@/assets/cat/sub/coffee-milk-frother-manual.png";
import smallKitchenBanner from "@/assets/category-small-kitchen.webp";
import smallAppliancesIcon from "@/assets/cat/small-appliances.png";
import kMicrowave from "@/assets/cat/sub/kitchen-microwave.png";
import kFoodProcessor from "@/assets/cat/sub/kitchen-food-processor.png";
import kKettle from "@/assets/cat/sub/kitchen-kettle.png";
import kPopToaster from "@/assets/cat/sub/kitchen-pop-toaster.png";
import kBreadMaker from "@/assets/cat/sub/kitchen-bread-maker.png";
import kMeatGrinder from "@/assets/cat/sub/kitchen-meat-grinder.png";
import kMulticooker from "@/assets/cat/sub/kitchen-multicooker.png";
import kStandMixer from "@/assets/cat/sub/kitchen-stand-mixer.png";
import kIceCreamMaker from "@/assets/cat/sub/kitchen-ice-cream-maker.png";
import kSpecialty from "@/assets/cat/sub/kitchen-specialty.png";
import kMiniChopper from "@/assets/cat/sub/kitchen-mini-chopper.png";
import kHandMixer from "@/assets/cat/sub/kitchen-hand-mixer.png";
import kSandwichPress from "@/assets/cat/sub/kitchen-sandwich-press.png";
import kToasterOven from "@/assets/cat/sub/kitchen-toaster-oven.png";
import kAccessories from "@/assets/cat/sub/kitchen-accessories.png";
import kGriddle from "@/assets/cat/sub/kitchen-griddle.png";
import kSweetsMaker from "@/assets/cat/sub/kitchen-sweets-maker.png";
import kUrn from "@/assets/cat/sub/kitchen-urn.png";
import kDrinkSolutions from "@/assets/cat/sub/kitchen-drink-solutions.png";
import kWaterBar from "@/assets/cat/sub/kitchen-water-bar.png";
import kProMachines from "@/assets/cat/sub/kitchen-pro-machines.png";
import kStickBlender from "@/assets/cat/sub/kitchen-stick-blender.png";
import kElectricGrill from "@/assets/cat/sub/kitchen-electric-grill.png";
import kMixerAccessories from "@/assets/cat/sub/kitchen-mixer-accessories.png";
import kIceMaker from "@/assets/cat/sub/kitchen-ice-maker.png";
import kGarbageDisposal from "@/assets/cat/sub/kitchen-garbage-disposal.png";
import kBlender from "@/assets/cat/sub/kitchen-blender.png";
import kJuicer from "@/assets/cat/sub/kitchen-juicer.png";
import cookingBakingBanner from "@/assets/category-cooking-baking.webp";
import cookingIcon from "@/assets/cat/cooking-icon.png";
import cookCombinedOven from "@/assets/cat/sub/cook-combined-oven.png";
import cookBuiltinOven from "@/assets/cat/sub/cook-builtin-oven.png";
import cookGasCooktop from "@/assets/cat/sub/cook-gas-cooktop.png";
import cookInductionCooktop from "@/assets/cat/sub/cook-induction-cooktop.png";
import cookRangeHood from "@/assets/cat/sub/cook-range-hood.png";
import cookCountertopStove from "@/assets/cat/sub/cook-countertop-stove.png";
import cookAccessories from "@/assets/cat/sub/cook-accessories.png";
import cookWarmingDrawer from "@/assets/cat/sub/cook-warming-drawer.png";
import cookPizzaAccessories from "@/assets/cat/sub/cook-pizza-accessories.png";
import cookPizzaOven from "@/assets/cat/sub/cook-pizza-oven.png";
import laundryBanner from "@/assets/category-laundry.webp";
import laundryIcon from "@/assets/cat/laundry-icon.png";
import laundryDryingRack from "@/assets/cat/sub/laundry-drying-rack.png";
import laundryFrontWasher from "@/assets/cat/sub/laundry-front-washer.png";
import laundryDryer from "@/assets/cat/sub/laundry-dryer.png";
import laundryComboMachine from "@/assets/cat/sub/laundry-washer-dryer-combo.png";
import laundryAccessories from "@/assets/cat/sub/laundry-accessories.png";
import laundryTopWasher from "@/assets/cat/sub/laundry-top-washer.png";
import laundryBaskets from "@/assets/cat/sub/laundry-baskets.png";
import laundryIron from "@/assets/cat/sub/laundry-iron.png";
import fridgesBanner from "@/assets/category-fridges.webp";
import fridgesIcon from "@/assets/cat/fridges-icon.png";
import fridgeTopFreezer from "@/assets/cat/sub/fridge-top-freezer.png";
import fridgeBottomFreezer from "@/assets/cat/sub/fridge-bottom-freezer.png";
import fridgeSideBySide from "@/assets/cat/sub/fridge-side-by-side.png";
import fridge3Door from "@/assets/cat/sub/fridge-3-door.png";
import fridgeOffice from "@/assets/cat/sub/fridge-office.png";
import fridge45Door from "@/assets/cat/sub/fridge-4-5-door.png";
import fridgeIntegrated from "@/assets/cat/sub/fridge-integrated.png";
import fridgeDisplay from "@/assets/cat/sub/fridge-display.png";
import fridgeNoFreezer from "@/assets/cat/sub/fridge-no-freezer.png";
import fridgeWine from "@/assets/cat/sub/fridge-wine.png";
import fridgeFreezer from "@/assets/cat/sub/fridge-freezer.png";
import acClimateBanner from "@/assets/category-ac-climate.webp";
import acClimateIcon from "@/assets/cat/ac-climate-icon.png";
import acCooling from "@/assets/cat/sub/ac-cooling.png";
import acHeating from "@/assets/cat/sub/ac-heating.png";
import mobileBanner from "@/assets/category-mobile.webp";
import mobileIcon from "@/assets/cat/mobile-icon.png";
import smartHomeBanner from "@/assets/category-smart-home.webp";
import smartHomeIcon from "@/assets/cat/smart-home-icon.png";
import smartSwitch from "@/assets/cat/sub/smart-switch.png";
import smartBoilerSwitch from "@/assets/cat/sub/smart-boiler-switch.png";
import smartIntercom from "@/assets/cat/sub/smart-intercom.png";
import smartSensors from "@/assets/cat/sub/smart-sensors.png";
import smartCamera from "@/assets/cat/sub/smart-camera.png";
import smartLock from "@/assets/cat/sub/smart-lock.png";
import smartDoorbell from "@/assets/cat/sub/smart-doorbell.png";
import smartPlug from "@/assets/cat/sub/smart-plug.png";
import smartLight from "@/assets/cat/sub/smart-light.png";
import smartController from "@/assets/cat/sub/smart-controller.png";
import smartSpeaker from "@/assets/cat/sub/smart-speaker.png";
import sportBanner from "@/assets/category-sport.webp";
import sportIcon from "@/assets/cat/sport-icon.png";
import sportScooter from "@/assets/cat/sub/sport-scooter.png";
import sportCamping from "@/assets/cat/sub/sport-camping.png";
import sportFitness from "@/assets/cat/sub/sport-fitness.png";
import gardenBanner from "@/assets/category-garden.webp";
import gardenIcon from "@/assets/cat/garden-icon.png";
import gardenKitchenware from "@/assets/cat/sub/garden-kitchenware.png";
import gardenSurgeProtector from "@/assets/cat/sub/garden-surge-protector.png";
import gardenBath from "@/assets/cat/sub/garden-bath.png";
import gardenSousvide from "@/assets/cat/sub/garden-sousvide.png";
import gardenLighting from "@/assets/cat/sub/garden-lighting.png";
import gardenCookware from "@/assets/cat/sub/garden-cookware.png";
import gardenHousehold from "@/assets/cat/sub/garden-household.png";
import gardenCleaning from "@/assets/cat/sub/garden-cleaning.png";
import gardenOutdoor from "@/assets/cat/sub/garden-outdoor.png";
import gardenFurniture from "@/assets/cat/sub/garden-furniture.png";
import gardenTextiles from "@/assets/cat/sub/garden-textiles.png";
import homeBanner from "@/assets/category-home.webp";
import homeIcon from "@/assets/cat/home-icon.png";
import homeFurniture from "@/assets/cat/sub/home-furniture.png";
import homeDecor from "@/assets/cat/sub/home-decor.png";
import beautyBanner from "@/assets/category-beauty.webp";
import beautyIcon from "@/assets/cat/beauty-icon.png";
import beautyHairdryer from "@/assets/cat/sub/beauty-hairdryer.png";
import beautyShaver from "@/assets/cat/sub/beauty-shaver.png";
import beautyStraightener from "@/assets/cat/sub/beauty-straightener.png";
import beautyEpilator from "@/assets/cat/sub/beauty-epilator.png";
import beautyClipper from "@/assets/cat/sub/beauty-clipper.png";
import beautyBeard from "@/assets/cat/sub/beauty-beard.png";
import beautyMassager from "@/assets/cat/sub/beauty-massager.png";
import beautyAccessories from "@/assets/cat/sub/beauty-accessories.png";
import beautyShaverAccessories from "@/assets/cat/sub/beauty-shaver-accessories.png";
import beautyAntiaging from "@/assets/cat/sub/beauty-antiaging.png";
import beautyHairloss from "@/assets/cat/sub/beauty-hairloss.png";
import beautyNoseTrimmer from "@/assets/cat/sub/beauty-nose-trimmer.png";

type SubCategory = { name: string; count: number; img: string };
type Group = { title: string; img: string; items: SubCategory[] };

type CategoryData = {
  title: string;
  subtitle: string;
  banner: string;
  groups: Group[];
};

const computingItems: SubCategory[] = [
  { name: "מחשבי לוח וטאבלטים", count: 281, img: tablets },
  { name: "מסכי מחשב", count: 240, img: monitors },
  { name: "מחשבים ניידים", count: 211, img: laptops },
  { name: "דיו וטונרים", count: 131, img: ink },
  { name: "מדפסות", count: 82, img: printer },
  { name: "כבלים מטענים ומתאמים", count: 44, img: cables },
  { name: "עכברים", count: 37, img: mouse },
  { name: "מקלדות ולוחות אלקטרוניים", count: 27, img: keyboard },
  { name: "מגרסות נייר", count: 23, img: shredder },
  { name: "קוראי ספרים אלקטרוניים", count: 23, img: ereader },
  { name: "רמקולים למחשב", count: 22, img: pcSpeakers },
  { name: "סורקים", count: 22, img: scanner },
  { name: "מצלמות אינטרנט", count: 18, img: webcam },
  { name: "ראוטרים/נתבים", count: 15, img: router },
  { name: "מחשבים נייחים מחודשים ועודפים", count: 14, img: refurbDesktop },
  { name: "מחשבים ניידים מחודשים ועודפי מלאי", count: 12, img: refurbLaptop },
  { name: "מחשבים נייחים ומחשבי All in one", count: 11, img: aio },
  { name: "תחנות עגינה", count: 11, img: dock },
  { name: "כרטיסי קול", count: 6, img: soundCard },
  { name: "מוצרי תקשורת", count: 5, img: network },
  { name: "שלטי מצגות", count: 4, img: presenter },
  { name: "אל פסק", count: 3, img: ups },
  { name: "מילונים אלקטרוניים", count: 2, img: dictionary },
  { name: "כוננים קשיחים", count: 1, img: hdd },
];

const mobileItems: SubCategory[] = [
  { name: "כיסויים רצועות ומגנים ל-Apple", count: 513, img: caseApple },
  { name: "כיסויים רצועות ומגנים ל-Android", count: 441, img: caseAndroid },
  { name: "טלפונים סלולרים", count: 298, img: smartphones },
  { name: "שעונים וצמידים חכמים", count: 164, img: smartwatch },
  { name: "מטענים לסלולר", count: 131, img: phoneCharger },
  { name: "כבלי טעינה וסנכרון", count: 52, img: chargingCable },
  { name: "סוללות גיבוי", count: 50, img: powerbank },
  { name: "אביזרים לסלולר וטאבלטים", count: 41, img: phoneAccessories },
  { name: "שעונים חכמים לילדים", count: 29, img: kidsWatch },
  { name: "טלפונים סלולרים מחודשים", count: 6, img: refurbPhone },
];

const gamingItems: SubCategory[] = [
  { name: "כסאות גיימינג", count: 219, img: gamingChair },
  { name: "מקלדות ועכברי גיימינג", count: 68, img: gamingKb },
  { name: "אוזניות גיימינג", count: 63, img: gamingHeadset },
  { name: "שולחנות גיימינג", count: 59, img: gamingDesk },
  { name: "אביזרים לPlayStation", count: 35, img: psAccessories },
  { name: "אביזרי גיימינג", count: 31, img: gamingAccessories },
  { name: "קונסולות משחק", count: 29, img: console },
  { name: "משחקים לקונסולות", count: 22, img: games },
  { name: "ערכות גיימינג", count: 16, img: gamingBundle },
  { name: "פדים ומשטחי גיימינג", count: 13, img: mousepad },
  { name: "אביזרים לקונסולות", count: 13, img: consoleAccessories },
];

const tvItems: SubCategory[] = [
  { name: "טלוויזיות", count: 95, img: tvTelevisions },
  { name: "זרועות ומעמדי תלייה למסכים ומקרנים", count: 19, img: tvMounts },
  { name: "מקרנים", count: 19, img: tvProjectors },
  { name: "מסכי הקרנה", count: 17, img: tvProjectionScreens },
  { name: "משקפי אור כחול", count: 8, img: tvBluelightGlasses },
  { name: "סטרימר ודונגלים", count: 8, img: tvStreamers },
  { name: "אביזרים נלווים למסכים", count: 4, img: tvAccessories },
  { name: "מעמדי רצפה לטלוויזיות", count: 1, img: tvFloorStands },
  { name: "נגני DVD די.וי.די", count: 1, img: tvDvdPlayers },
];

export const categoryMap: Record<string, CategoryData> = {
  "computing-mobile": {
    title: "מחשוב וסלולר",
    subtitle: "המחשבים, הסמארטפונים והאביזרים המובילים — במקום אחד",
    banner: computingMobileBanner,
    groups: [
      { title: "מחשוב", img: laptop, items: computingItems },
      { title: "סלולר", img: phone, items: mobileItems },
      { title: "גיימינג", img: gaming, items: gamingItems },
    ],
  },
  "tv-world": {
    title: "עולם הטלוויזיות",
    subtitle: "טלוויזיות, מקרנים ומסכי הקרנה — חוויית צפייה מושלמת",
    banner: tvWorldBanner,
    groups: [
      { title: "טלוויזיות ומסכים", img: tvTelevisions, items: tvItems },
    ],
  },
  "small-kitchen-appliances": {
    title: "מוצרי חשמל קטנים למטבח",
    subtitle: "מיקסרים, בלנדרים, קומקומים, טוסטרים ועוד — כל מה שצריך למטבח חכם",
    banner: smallKitchenBanner,
    groups: [
      {
        title: "מוצרי חשמל קטנים למטבח",
        img: smallAppliancesIcon,
        items: [
          { name: "מיקרוגלים", count: 147, img: kMicrowave },
          { name: "מעבדי מזון", count: 49, img: kFoodProcessor },
          { name: "קומקומים", count: 212, img: kKettle },
          { name: "טוסטר קופץ - מצנם", count: 87, img: kPopToaster },
          { name: "אופה לחם", count: 5, img: kBreadMaker },
          { name: "מטחנות בשר", count: 25, img: kMeatGrinder },
          { name: "סירים ותנורי בישול אידוי וטיגון", count: 86, img: kMulticooker },
          { name: "מיקסרים", count: 127, img: kStandMixer },
          { name: "מכונות גלידה", count: 24, img: kIceCreamMaker },
          { name: "מוצרים מיוחדים למטבח", count: 29, img: kSpecialty },
          { name: "מיני קוצצים חשמליים", count: 37, img: kMiniChopper },
          { name: "מיקסר יד", count: 39, img: kHandMixer },
          { name: "טוסטר לחיצה", count: 94, img: kSandwichPress },
          { name: "טוסטר אובן", count: 62, img: kToasterOven },
          { name: "אביזרים למוצרים", count: 11, img: kAccessories },
          { name: "פלטות ומחבתות חשמליים", count: 38, img: kGriddle },
          { name: "מכשירי מתוקים וממתקים", count: 53, img: kSweetsMaker },
          { name: "מיחמים", count: 43, img: kUrn },
          { name: "פתרונות שתייה", count: 100, img: kDrinkSolutions },
          { name: "ברי מים", count: 34, img: kWaterBar },
          { name: "מכונות מזון ושתייה מקצועיות", count: 39, img: kProMachines },
          { name: "בלנדר מוט", count: 72, img: kStickBlender },
          { name: "גרילים חשמליים", count: 20, img: kElectricGrill },
          { name: "אביזרים למיקסרים ומעבדי מזון", count: 19, img: kMixerAccessories },
          { name: "מכונות קרח", count: 22, img: kIceMaker },
          { name: "טוחני אשפה", count: 14, img: kGarbageDisposal },
          { name: "בלנדרים", count: 60, img: kBlender },
          { name: "מסחטות מיצים", count: 67, img: kJuicer },
        ],
      },
    ],
  },
  "coffee-world": {
    title: "עולם הקפה",
    subtitle: "מכונות אספרסו, מטחנות, קפסולות ואביזרים — כל מה שצריך לכוס מושלמת",
    banner: coffeeWorldBanner,
    groups: [
      {
        title: "חשמל ואביזרים לקפה",
        img: coffeeIcon,
        items: [
          { name: "מכונות אספרסו פולים", count: 66, img: coffeeEspressoBeans },
          { name: "מקציפי חלב חשמליים", count: 41, img: coffeeMilkFrotherElectric },
          { name: "מטחנות קפה", count: 37, img: coffeeGrinder },
          { name: "מכונות קפה אספרסו – קפסולות", count: 30, img: coffeeCapsuleMachine },
          { name: "מקינטות", count: 14, img: coffeeMoka },
          { name: "קפסולות קפה", count: 9, img: coffeeCapsules },
          { name: "מכונות קפה פילטר, טורקי ופרקולטורים", count: 8, img: coffeeFilterTurkish },
          { name: "תה קנקנים וחליטות", count: 7, img: coffeeTeaKettles },
          { name: "אביזרים לקפה", count: 5, img: coffeeAccessories },
          { name: "קפה טחון ופולים", count: 1, img: coffeeGroundBeans },
          { name: "מקציפי חלב ידניים", count: 1, img: coffeeMilkFrotherManual },
        ],
      },
    ],
  },
  "cooking-baking": {
    title: "אפיה ובישול",
    subtitle: "תנורים, כיריים, קולטי אדים ותנורי פיצה — כל מה שצריך למטבח שלם",
    banner: cookingBakingBanner,
    groups: [
      {
        title: "אפיה ובישול",
        img: cookingIcon,
        items: [
          { name: "תנורים משולבים", count: 59, img: cookCombinedOven },
          { name: "תנורים בנויים", count: 180, img: cookBuiltinOven },
          { name: "כיריים גז", count: 147, img: cookGasCooktop },
          { name: "כיריים אינדוקציה וקרמיות", count: 76, img: cookInductionCooktop },
          { name: "קולטי אדים", count: 47, img: cookRangeHood },
          { name: "כירות על השיש", count: 72, img: cookCountertopStove },
          { name: "אביזרים", count: 10, img: cookAccessories },
          { name: "מגירות חימום", count: 2, img: cookWarmingDrawer },
          { name: "אביזרים לטאבונים ותנורי פיצה", count: 16, img: cookPizzaAccessories },
          { name: "טאבונים ותנורי פיצה", count: 23, img: cookPizzaOven },
        ],
      },
    ],
  },
  "laundry-dryers": {
    title: "מכונות וייבשי כביסה",
    subtitle: "מכונות כביסה, מייבשים, מגהצים ואביזרים — כל פתרונות הכביסה בבית",
    banner: laundryBanner,
    groups: [
      {
        title: "מכונות וייבשי כביסה",
        img: laundryIcon,
        items: [
          { name: "מתקני ייבוש כביסה", count: 4, img: laundryDryingRack },
          { name: "מכונות כביסה חזית", count: 157, img: laundryFrontWasher },
          { name: "מייבשי כביסה", count: 41, img: laundryDryer },
          { name: "מכונות כביסה משולבות", count: 10, img: laundryComboMachine },
          { name: "אביזרים ומתקנים", count: 10, img: laundryAccessories },
          { name: "מכונות כביסה פתח עליון", count: 13, img: laundryTopWasher },
          { name: "סלי כביסה וגיגיות", count: 17, img: laundryBaskets },
          { name: "מגהצים", count: 115, img: laundryIron },
        ],
      },
    ],
  },
  "fridges-freezers": {
    title: "מקררים ומקפיאים",
    subtitle: "מקררים, מקפיאים ומקררי יין — שמירה מושלמת על הטריות",
    banner: fridgesBanner,
    groups: [
      {
        title: "מקררים ומקפיאים",
        img: fridgesIcon,
        items: [
          { name: "מקררי מקפיא עליון", count: 177, img: fridgeTopFreezer },
          { name: "מקרר מקפיא תחתון", count: 94, img: fridgeBottomFreezer },
          { name: "מקררי דלת ליד דלת", count: 6, img: fridgeSideBySide },
          { name: "מקרר 3 דלתות", count: 6, img: fridge3Door },
          { name: "מקרר משרדי", count: 44, img: fridgeOffice },
          { name: "מקררי 4 ו5 דלתות", count: 152, img: fridge45Door },
          { name: "מקרר אינטגרלי", count: 26, img: fridgeIntegrated },
          { name: "מקררי ויטרינה", count: 18, img: fridgeDisplay },
          { name: "מקררים ללא מקפיא", count: 19, img: fridgeNoFreezer },
          { name: "מקררי יין", count: 83, img: fridgeWine },
          { name: "מקפיאים", count: 116, img: fridgeFreezer },
        ],
      },
    ],
  },
  "ac-climate": {
    title: "מיזוג ואקלים",
    subtitle: "מזגנים, מפצלים ופתרונות חימום לבית — אקלים מושלם בכל עונה",
    banner: acClimateBanner,
    groups: [
      {
        title: "מיזוג ואקלים",
        img: acClimateIcon,
        items: [
          { name: "מיזוג ואוורור", count: 672, img: acCooling },
          { name: "חימום הבית", count: 280, img: acHeating },
        ],
      },
    ],
  },
  "mobile": {
    title: "סלולר",
    subtitle: "טלפונים, שעונים חכמים, מטענים וכיסויים — כל עולם הסלולר במקום אחד",
    banner: mobileBanner,
    groups: [
      {
        title: "סלולר",
        img: mobileIcon,
        items: [
          { name: "כיסויים רצועות ומגנים ל-Apple", count: 518, img: caseApple },
          { name: "כיסויים רצועות ומגנים ל-Android", count: 438, img: caseAndroid },
          { name: "טלפונים סלולרים", count: 350, img: smartphones },
          { name: "שעונים וצמידים חכמים", count: 163, img: smartwatch },
          { name: "מטענים לסלולר", count: 128, img: phoneCharger },
          { name: "סוללות גיבוי", count: 57, img: powerbank },
          { name: "כבלי טעינה וסנכרון", count: 50, img: chargingCable },
          { name: "אביזרים לסלולר וטאבלטים", count: 47, img: phoneAccessories },
          { name: "שעונים חכמים לילדים", count: 26, img: kidsWatch },
          { name: "טלפונים סלולרים מחודשים", count: 6, img: refurbPhone },
        ],
      },
    ],
  },
  "smart-home": {
    title: "מוצרי בית חכם",
    subtitle: "מצלמות, מנעולים, מתגים ותאורה חכמה — בית מחובר ובטוח",
    banner: smartHomeBanner,
    groups: [
      {
        title: "מוצרי בית חכם",
        img: smartHomeIcon,
        items: [
          { name: "מצלמות אבטחה", count: 51, img: smartCamera },
          { name: "מנעולים חכמים", count: 31, img: smartLock },
          { name: "מתגים חכמים", count: 28, img: smartSwitch },
          { name: "פעמונים חכמים", count: 21, img: smartDoorbell },
          { name: "מנורות חכמות", count: 20, img: smartLight },
          { name: "מתגים לדוד", count: 17, img: smartBoilerSwitch },
          { name: "שקעים חכמים", count: 12, img: smartPlug },
          { name: "עיניות ואינטרקום", count: 4, img: smartIntercom },
          { name: "רמקולים ועוזר חכם", count: 2, img: smartSpeaker },
          { name: "בקרים, מיזוג ומולטימדיה", count: 1, img: smartController },
          { name: "חיישנים וגלאים", count: 1, img: smartSensors },
        ],
      },
    ],
  },
  "sport": {
    title: "מוצרי ספורט",
    subtitle: "ציוד כושר, קמפינג, קורקינטים והוברבורד — כל עולם הספורט והפעילות בחוץ",
    banner: sportBanner,
    groups: [
      {
        title: "מוצרי ספורט",
        img: sportIcon,
        items: [
          { name: "קמפינג ומחנאות", count: 1092, img: sportCamping },
          { name: "ספורט", count: 340, img: sportFitness },
          { name: "קורקינט והוברבורד", count: 0, img: sportScooter },
        ],
      },
    ],
  },
  "garden": {
    title: "מוצרי לגן",
    subtitle: "ריהוט גן, תאורה, צמחייה וכלי בית — לעיצוב מושלם של החוץ והפנים",
    banner: gardenBanner,
    groups: [
      {
        title: "מוצרי לגן",
        img: gardenIcon,
        items: [
          { name: "עזרים וכלי בית", count: 541, img: gardenHousehold },
          { name: "לגינה ולמרפסת", count: 405, img: gardenOutdoor },
          { name: "ריהוט גן", count: 405, img: gardenFurniture },
          { name: "כלי בישול ואפייה", count: 260, img: gardenCookware },
          { name: "תאורה", count: 238, img: gardenLighting },
          { name: "טקסטיל לבית", count: 210, img: gardenTextiles },
          { name: "כלי מטבח", count: 184, img: gardenKitchenware },
          { name: "עולם האמבט", count: 124, img: gardenBath },
          { name: "עולם הסו-וויד", count: 10, img: gardenSousvide },
          { name: "מגני ברקים", count: 4, img: gardenSurgeProtector },
          { name: "בית וניקיון", count: 2, img: gardenCleaning },
        ],
      },
    ],
  },
  "home": {
    title: "מוצרי לבית",
    subtitle: "ריהוט, עיצוב הבית ואקססוריז — הכל לבית מושלם",
    banner: homeBanner,
    groups: [
      {
        title: "מוצרי לבית",
        img: homeIcon,
        items: [
          { name: "ריהוט ועיצוב הבית", count: 3146, img: homeFurniture },
          { name: "דקורציה וריהוט משלים", count: 202, img: homeDecor },
        ],
      },
    ],
  },
  "beauty": {
    title: "טיפוח ויופי",
    subtitle: "מייבשי שיער, מכונות גילוח, מסירי שיער ומכשירי עיסוי — לטיפוח מושלם",
    banner: beautyBanner,
    groups: [
      {
        title: "טיפוח ויופי",
        img: beautyIcon,
        items: [
          { name: "מכונות תספורת", count: 117, img: beautyClipper },
          { name: "מכשירי עיסוי", count: 114, img: beautyMassager },
          { name: "מחליקים ומסלסלים", count: 62, img: beautyStraightener },
          { name: "מכונות גילוח", count: 61, img: beautyShaver },
          { name: "מייבשי שיער", count: 45, img: beautyHairdryer },
          { name: "מסירי שיער", count: 32, img: beautyEpilator },
          { name: "אנטי אייג'ינג, חיטוב ופילינג", count: 10, img: beautyAntiaging },
          { name: "עזרים לטיפוח", count: 10, img: beautyAccessories },
          { name: "עיצוב ותספורת זקן", count: 8, img: beautyBeard },
          { name: "קוצצי שיער אף, אוזניים וגבות", count: 5, img: beautyNoseTrimmer },
          { name: "פתרונות לנשירה ולהתקרחות", count: 4, img: beautyHairloss },
          { name: "אביזרים למכונות גילוח ותספורת", count: 2, img: beautyShaverAccessories },
        ],
      },
    ],
  },
};

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const data = categoryMap[params.slug];
    const title = data
      ? `${data.title} — קטגוריה ב-Onsus`
      : "קטגוריה — Onsus";
    const description =
      data?.subtitle ??
      "דפדפו במגוון רחב של מוצרי טכנולוגיה ואלקטרוניקה ב-Onsus — מחירים משתלמים, מותגים מובילים ומשלוח מהיר.";
    const url = `https://your-next-price.lovable.app/category/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: data
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: data.title,
                description,
                url,
              }),
            },
          ]
        : [],
    };
  },
  component: CategoryPage,
});

function SubCategoryCard({ item }: { item: SubCategory }) {
  return (
    <a
      href="#"
      className="flex flex-col items-center text-center group"
    >
      <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          width={512}
          height={512}
          className="relative z-10 w-full h-full object-cover drop-shadow-sm transition-transform group-hover:scale-105"
        />
      </div>
      <span className="mt-2 text-sm text-muted-foreground">{item.count}</span>
      <span className="mt-1 text-sm text-foreground leading-tight max-w-[8rem]">
        {item.name}
      </span>
    </a>
  );
}

function CategoryPage() {
  const { slug } = Route.useParams();
  const data = categoryMap[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <section dir="rtl" className="w-full px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">קטגוריה לא נמצאה</h1>
          <Link to="/" className="text-brand underline">חזרה לדף הבית</Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero banner with breadcrumb overlay */}
      <section dir="rtl" className="w-full">
        <div className="relative overflow-hidden">
          <img
            src={data.banner}
            alt={data.title}
            width={1920}
            height={240}
            className="w-full h-52 md:h-64 lg:h-80 object-cover"
          />
          {/* Breadcrumb on top of image */}
          <nav className="absolute top-2 right-4 md:top-3 md:right-8 text-xs md:text-sm text-white/90 flex items-center gap-2 drop-shadow">
            <Link to="/" className="hover:text-white">ראשי</Link>
            <ChevLeft className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{data.title}</span>
          </nav>
          {/* Right-side title block */}
          <div className="absolute bottom-0 right-0 px-6 md:px-10 lg:px-14 pb-4 md:pb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow">
              {data.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Subcategory groups */}
      {data.groups.map((g) => (
        <section key={g.title} dir="rtl" className="w-full px-6 py-8">
          <div className="mb-6 flex items-end justify-between border-b border-border pb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{g.title}</h2>
            <span className="text-sm text-muted-foreground">{g.items.length} קטגוריות</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-2 gap-y-4">
            {g.items.map((item) => (
              <SubCategoryCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}

      {slug === "tv-world" && <TvNewArrivals />}

      <SiteFooter />
    </div>
  );
}
