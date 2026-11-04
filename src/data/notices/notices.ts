import type { LocalizedText } from "@/lib/i18n";

export const tickerNotice = {
  text: {
    bn: "২০২৬ শিক্ষাবর্ষে ভর্তি আবেদন চলছে — বিস্তারিত জানতে মাদরাসা অফিসে যোগাযোগ করুন।",
    en: "Applications for admission to the 2026 academic year are open — contact the madrasah office for details.",
  } satisfies LocalizedText,
  isNew: true,
  date: { bn: "২০ অক্টোবর ২০২৬", en: "20 October 2026" } satisfies LocalizedText,
}

export type NoticeItem = { day: LocalizedText; month: LocalizedText; title: LocalizedText; isNew?: boolean }

export const notices: NoticeItem[] = [
  {
    day: { bn: "২০", en: "20" },
    month: { bn: "অক্টোবর", en: "Oct" },
    title: { bn: "২০২৬ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি প্রকাশ", en: "Admission circular for the 2026 academic year published" },
    isNew: true,
  },
  {
    day: { bn: "২৫", en: "25" },
    month: { bn: "অক্টোবর", en: "Oct" },
    title: { bn: "বার্ষিক পরীক্ষা সংক্রান্ত নির্দেশনা", en: "Guidelines for the annual examination" },
  },
  {
    day: { bn: "২০", en: "20" },
    month: { bn: "অক্টোবর", en: "Oct" },
    title: { bn: "অভিভাবক সমাবেশের তারিখ নির্ধারণ", en: "Date set for the guardians' assembly" },
  },
  {
    day: { bn: "০৬", en: "06" },
    month: { bn: "অক্টোবর", en: "Oct" },
    title: { bn: "শিক্ষার্থী উপস্থিতি সংক্রান্ত নির্দেশ", en: "Directive on student attendance" },
  },
  {
    day: { bn: "০১", en: "01" },
    month: { bn: "অক্টোবর", en: "Oct" },
    title: { bn: "নবীন শিক্ষার্থী অভিষেক সভা", en: "Welcome assembly for new students" },
  },
]
