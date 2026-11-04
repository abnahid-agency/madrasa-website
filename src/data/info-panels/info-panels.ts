import type { LocalizedText } from "@/lib/i18n";

export type InfoPanel = {
  id: string
  tone: "green" | "pink" | "red" | "olive"
  icon: "curriculum" | "students" | "downloads" | "links"
  title: LocalizedText
  items: LocalizedText[]
}

export const infoPanels: InfoPanel[] = [
  {
    id: "curriculum",
    tone: "green",
    icon: "curriculum",
    title: { bn: "আমাদের শিক্ষাক্রম", en: "Our Curriculum" },
    items: [
      { bn: "কুরআনুল কারিম শিক্ষা", en: "Qur'an education" },
      { bn: "হাদিস ও ইসলামি শিক্ষা", en: "Hadith & Islamic education" },
      { bn: "সাধারণ বিষয়সমূহ", en: "General subjects" },
      { bn: "নৈতিক ও ধার্মিক শিক্ষা", en: "Moral & religious education" },
      { bn: "আধুনিক শিক্ষা ব্যবস্থা", en: "Modern education system" },
    ],
  },
  {
    id: "students",
    tone: "pink",
    icon: "students",
    title: { bn: "শিক্ষার্থী কেন্দ্র", en: "Students' Centre" },
    items: [
      { bn: "ক্লাস রুটিন", en: "Class routine" },
      { bn: "পরীক্ষার রুটিন", en: "Exam routine" },
      { bn: "পরীক্ষার ফলাফল", en: "Exam results" },
      { bn: "ছুটির তালিকা", en: "Holiday list" },
      { bn: "শিক্ষার্থী লাইব্রেরি", en: "Student library" },
    ],
  },
  {
    id: "downloads",
    tone: "red",
    icon: "downloads",
    title: { bn: "ডাউনলোডস", en: "Downloads" },
    items: [
      { bn: "ভর্তি ফরম", en: "Admission form" },
      { bn: "পরীক্ষার রুটিন", en: "Exam routine" },
      { bn: "সার্টিফিকেট ফরম", en: "Certificate forms" },
      { bn: "নোটিশ ও সার্কুলার", en: "Notices & circulars" },
      { bn: "অন্যান্য ডাউনলোডস", en: "Other downloads" },
    ],
  },
  {
    id: "links",
    tone: "olive",
    icon: "links",
    title: { bn: "ওয়েবসাইট লিংক", en: "Website Links" },
    items: [
      { bn: "একাডেমিক ক্যালেন্ডার", en: "Academic calendar" },
      { bn: "ক্লাস পরিকল্পনা", en: "Class plan" },
      { bn: "শিক্ষক তালিকা", en: "Teachers' list" },
      { bn: "ছুটির তালিকা", en: "Holiday list" },
      { bn: "যোগাযোগ", en: "Contact" },
    ],
  },
]
