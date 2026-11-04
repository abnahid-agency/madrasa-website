/**
 * Lightweight bilingual (Bengali default / English) support.
 *
 * The project has no existing i18n system or locale-prefixed routes, so we keep
 * one small translation helper instead of adding a library. Bengali content is
 * server-rendered by default; the language switcher toggles between the two
 * variants on the client.
 */

export type Language = "bn" | "en"

/** A piece of content that exists in both languages. */
export type LocalizedText = {
  bn: string
  en: string
}

/** Pick the variant for the active language, falling back to Bengali. */
export function t(text: LocalizedText, lang: Language): string {
  return lang === "en" ? text.en || text.bn : text.bn
}

/**
 * UI chrome labels reused across components.
 * Institutional content lives in the feature folders under `src/data`.
 */
export const UI = {
  searchPlaceholder: { bn: "সার্চটি খুঁজুন…", en: "Search here…" } as LocalizedText,
  search: { bn: "অনুসন্ধান", en: "Search" } as LocalizedText,
  menu: { bn: "মেনু", en: "Menu" } as LocalizedText,
  closeMenu: { bn: "মেনু বন্ধ", en: "Close menu" } as LocalizedText,
  readMore: { bn: "বিস্তারিত পড়ুন", en: "Read more" } as LocalizedText,
  viewAllNotices: { bn: "সব লিস্ট", en: "View all" } as LocalizedText,
  viewAllEvents: { bn: "সব ইভেন্ট", en: "All events" } as LocalizedText,
  viewAllPhotos: { bn: "সব ছবি দেখুন", en: "View all photos" } as LocalizedText,
  allRightsReserved: { bn: "সর্বস্বত্ব সংরক্ষিত", en: "All rights reserved" } as LocalizedText,
  developedBy: { bn: "Designed & Developed by Ab Nahid Agency", en: "Designed & Developed by Ab Nahid Agency" } as LocalizedText,
  getDirections: { bn: "পথ নির্দেশনা দেখুন", en: "Get directions" } as LocalizedText,
  newBadge: { bn: "নতুন", en: "New" } as LocalizedText,
  slidePrev: { bn: "পূর্ববর্তী স্লাইড", en: "Previous slide" } as LocalizedText,
  slideNext: { bn: "পরবর্তী স্লাইড", en: "Next slide" } as LocalizedText,
  gotoSlide: { bn: "স্লাইডে যান", en: "Go to slide" } as LocalizedText,
  noticeLabel: { bn: "নোটিশ:", en: "Notice:" } as LocalizedText,
  tickerRegion: { bn: "চলমান নোটিশ", en: "Running notice" } as LocalizedText,
} satisfies Record<string, LocalizedText>
