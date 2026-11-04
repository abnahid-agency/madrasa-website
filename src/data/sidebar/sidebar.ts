import type { LocalizedText } from "@/lib/i18n";

export type QuickLink = { label: LocalizedText; icon: "admission" | "results" | "downloads" | "teachers" | "gallery"; href: string }

export const quickLinks: QuickLink[] = [
  { label: { bn: "ভর্তি তথ্য", en: "Admission Info" }, icon: "admission", href: "/admission" },
  { label: { bn: "পরীক্ষার ফলাফল", en: "Exam Results" }, icon: "results", href: "/results" },
  { label: { bn: "ডাউনলোডস", en: "Downloads" }, icon: "downloads", href: "/downloads" },
  { label: { bn: "শিক্ষকপ্যানেল", en: "Teachers' Panel" }, icon: "teachers", href: "/teachers" },
  { label: { bn: "ফটো গ্যালারি", en: "Photo Gallery" }, icon: "gallery", href: "/gallery" },
]
