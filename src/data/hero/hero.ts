import type { LocalizedText } from "@/lib/i18n";

export type HeroSlide = {
  image: string
  position: "center" | "top" | "left" | "right"
  caption: LocalizedText
}

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero-1.jpg",
    position: "center",
    caption: {
      bn: "ঈমান • আমল • শিক্ষার আলোতে\nআদর্শ মানুষ গঠন",
      en: "In the light of faith, action & education\nwe build exemplary people",
    },
  },
  {
    image: "/images/hero-1.jpg",
    position: "left",
    caption: { bn: "ঈমান • আমল • শিক্ষা", en: "Faith • Action • Education" },
  },
  {
    image: "/images/hero-1.jpg",
    position: "top",
    caption: { bn: "শিক্ষার আলোতে", en: "In the light of education" },
  },
  {
    image: "/images/hero-1.jpg",
    position: "right",
    caption: { bn: "আদর্শ মানুষ গঠন", en: "Building exemplary people" },
  },
]
