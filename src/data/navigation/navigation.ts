import type { LocalizedText } from "@/lib/i18n";

export type NavChild = { label: LocalizedText; href: string }
export type NavItem = { label: LocalizedText; href: string; children?: NavChild[] }

export const navItems: NavItem[] = [
  {
    label: { bn: "আমাদের সম্পর্কে", en: "About Us" },
    href: "/about",
    children: [
      { label: { bn: "মাদরাসা পরিচিতি", en: "Introduction" }, href: "/about" },
      { label: { bn: "ইতিহাস", en: "History" }, href: "/about" },
      { label: { bn: "লক্ষ্য ও উদ্দেশ্য", en: "Mission & Vision" }, href: "/about#goals" },
      { label: { bn: "অবকাঠামো", en: "Infrastructure" }, href: "/about" },
    ],
  },
  {
    label: { bn: "প্রশাসন", en: "Administration" },
    href: "/administration",
    children: [
      { label: { bn: "পরিচালনা কমিটি", en: "Managing Committee" }, href: "/administration" },
      { label: { bn: "অধ্যক্ষের বাণী", en: "Principal's Message" }, href: "/administration#principal" },
      { label: { bn: "উপাধ্যক্ষের বাণী", en: "Vice Principal's Message" }, href: "/administration#vice-principal" },
      
      { label: { bn: "কর্মচারী", en: "Staff" }, href: "/administration#staffs" },
    ],
  },
  {
    label: { bn: "একাডেমিক", en: "Academic" },
    href: "/academic",
    children: [
      { label: { bn: "একাডেমিক তথ্য", en: "Academic Information" }, href: "/academic" },
      { label: { bn: "শ্রেণিসমূহ", en: "Classes" }, href: "/academic" },
      { label: { bn: "ভর্তি", en: "Admission" }, href: "/admission" },
      { label: { bn: "একাডেমিক ডকুমেন্টস", en: "Academic Documents" }, href: "/downloads" },
    ],
  },
  { label: { bn: "শিক্ষক-শিক্ষিকা", en: "Teachers" }, href: "/teachers" },
  { label: { bn: "পরীক্ষার ফলাফল", en: "Exam Results" }, href: "/results" },
  {
    label: { bn: "পোস্ট", en: "Posts" },
    href: "/posts",
    children: [
      { label: { bn: "সব পোস্ট", en: "All Posts" }, href: "/posts" },
      { label: { bn: "ইভেন্ট", en: "Events" }, href: "/posts?type=event" },
      { label: { bn: "প্রতিযোগিতা", en: "Competitions" }, href: "/posts?type=competition" },
      { label: { bn: "শিক্ষামূলক কার্যক্রম", en: "Educational Activities" }, href: "/posts?type=educational" },
      { label: { bn: "ফটো গ্যালারি", en: "Photo Galleries" }, href: "/posts?type=gallery" },
      { label: { bn: "নোটিশ", en: "Notices" }, href: "/notices" },
    ],
  },
  { label: { bn: "ডাউনলোড", en: "Downloads" }, href: "/downloads" },
  { label: { bn: "গ্যালারি", en: "Gallery" }, href: "/gallery" },
  { label: { bn: "অনুদান", en: "Donation" }, href: "/donate" },
  { label: { bn: "যোগাযোগ", en: "Contact" }, href: "/contact" },
]

export const footerLinks: NavItem[] = [
  { label: { bn: "হোম", en: "Home" }, href: "/" },
  { label: { bn: "আমাদের সম্পর্কে", en: "About Us" }, href: "/about" },
  { label: { bn: "একাডেমিক", en: "Academic" }, href: "/academic" },
  { label: { bn: "প্রশাসন", en: "Administration" }, href: "/administration" },
  { label: { bn: "ইভেন্ট", en: "Events" }, href: "/events" },
  { label: { bn: "শিক্ষক-শিক্ষিকা", en: "Teachers" }, href: "/teachers" },
  { label: { bn: "পরীক্ষার ফলাফল", en: "Exam Results" }, href: "/results" },
  { label: { bn: "পোস্ট", en: "Posts" }, href: "/posts" },
  { label: { bn: "গ্যালারি", en: "Gallery" }, href: "/gallery" },
  { label: { bn: "অনুদান", en: "Donation" }, href: "/donate" },
  { label: { bn: "যোগাযোগ", en: "Contact" }, href: "/contact" },
]
