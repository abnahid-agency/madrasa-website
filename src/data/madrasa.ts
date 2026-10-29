import type { LocalizedText } from "@/lib/i18n"

/**
 * Institutional data for Ghuradumbur Hafizia Dakhil Madrasah.
 *
 * Sources:
 * - `src/lib/seo.ts` (verified EIIN, code, address, email, founding date)
 * - The approved homepage design (`home website.pdf` screenshot) for display
 *   strings such as the front-desk phone number, notices, events and staff
 *   names. Values marked `// VERIFY` are transcribed from that design and must
 *   be confirmed by the madrasa administration before launch.
 */

export const institution = {
  bengaliName: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা" as const,
  englishName: "Ghuradumbur Hafizia Dakhil Madrasah" as const,
  logo: "/images/madrasah-logo.png" as const,
  logoAlt: {
    bn: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসার প্রতীক",
    en: "Emblem of Ghuradumbur Hafizia Dakhil Madrasah",
  } satisfies LocalizedText,
  // Front-desk number as shown in the approved design. seo.ts lists a different
  // BTCL-profile number with a confirm-before-launch note. // VERIFY
  phone: "+8801713-663289" as const,
  phoneHref: "tel:+8801713663289" as const,
  email: "ghdm139334@gmail.com" as const,
  addressShort: { bn: "গণিপুর, শান্তিগঞ্জ, সুনামগঞ্জ", en: "Ganipur, Shantiganj, Sunamganj" } satisfies LocalizedText,
  addressFull: { bn: "গণিপুর, শান্তিগঞ্জ, সুনামগঞ্জ, বাংলাদেশ", en: "Ganipur, Shantiganj, Sunamganj, Bangladesh" } satisfies LocalizedText,
  eiin: "139334" as const,
  madrasahCode: "20931" as const,
  established: "2007" as const,
}

/* ---------------------------------------------------------------------- */
/* Navigation                                                              */
/* ---------------------------------------------------------------------- */

export type NavChild = { label: LocalizedText; href: string }
export type NavItem = { label: LocalizedText; href: string; children?: NavChild[] }

/**
 * Homepage-facing navigation. Destinations marked "planned" do not exist yet —
 * they intentionally point at their future routes so the UI is ready when those
 * pages are added.
 */
export const navItems: NavItem[] = [
  {
    label: { bn: "আমাদের সম্পর্কে", en: "About Us" },
    href: "/about",
    children: [
      { label: { bn: "মাদরাসা পরিচিতি", en: "Introduction" }, href: "/about" },
      { label: { bn: "লক্ষ্য ও উদ্দেশ্য", en: "Mission & Goals" }, href: "/about#goals" },
    ],
  },
  {
    label: { bn: "প্রশাসন", en: "Administration" },
    href: "/administration",
    children: [
      { label: { bn: "অধ্যক্ষের বাণী", en: "Principal's Message" }, href: "/administration#principal" },
      { label: { bn: "উপাধ্যক্ষের বাণী", en: "Vice Principal's Message" }, href: "/administration#vice-principal" },
    ],
  },
  {
    label: { bn: "একাডেমিক", en: "Academic" },
    href: "/academic",
    children: [
      { label: { bn: "শিক্ষাক্রম", en: "Curriculum" }, href: "/academic#curriculum" },
      { label: { bn: "ক্লাস রুটিন", en: "Class Routine" }, href: "/academic#routine" },
      { label: { bn: "পরীক্ষার রুটিন", en: "Exam Routine" }, href: "/academic#exam-routine" },
    ],
  },
  { label: { bn: "শিক্ষক-শিক্ষিকা", en: "Teachers" }, href: "/teachers" },
  { label: { bn: "তথ্য", en: "Information" }, href: "/information" },
  { label: { bn: "পরীক্ষার ফলাফল", en: "Exam Results" }, href: "/results" },
  {
    label: { bn: "ডাউনলোডস", en: "Downloads" },
    href: "/downloads",
    children: [
      { label: { bn: "ভর্তি ফরম", en: "Admission Form" }, href: "/downloads#admission-form" },
      { label: { bn: "নোটিশ ও সার্কুলার", en: "Notices & Circulars" }, href: "/downloads#circulars" },
    ],
  },
  { label: { bn: "গ্যালারি", en: "Gallery" }, href: "/gallery" },
  { label: { bn: "যোগাযোগ", en: "Contact" }, href: "/contact" },
]

/* ---------------------------------------------------------------------- */
/* Hero slider                                                             */
/* ---------------------------------------------------------------------- */

export type HeroSlide = {
  image: string
  /** Tailwind object-position varying per slide so the single approved photo is not repeated identically. */
  position: "center" | "top" | "left" | "right"
  caption: LocalizedText
}

/**
 * Only one madrasa photo is available so far; slides 2-4 reuse it with different
 * crops and caption fragments of the approved tagline until more photos are
 * supplied by the administration.
 */
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

/* ---------------------------------------------------------------------- */
/* Notice ticker                                                           */
/* ---------------------------------------------------------------------- */

export const tickerNotice = {
  text: {
    bn: "২০২৬ শিক্ষাবর্ষে ভর্তি আবেদন চলছে — বিস্তারিত জানতে মাদরাসা অফিসে যোগাযোগ করুন।",
    en: "Applications for admission to the 2026 academic year are open — contact the madrasah office for details.",
  } satisfies LocalizedText,
  isNew: true,
  date: { bn: "২০ অক্টোবর ২০২৬", en: "20 October 2026" } satisfies LocalizedText,
}

/* ---------------------------------------------------------------------- */
/* About / leadership                                                      */
/* ---------------------------------------------------------------------- */

export const aboutSection = {
  image: "/images/about-building.jpg",
  imageAlt: {
    bn: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসার একাডেমিক ভবন",
    en: "Academic building of Ghuradumbur Hafizia Dakhil Madrasah",
  } satisfies LocalizedText,
  paragraph: {
    bn: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা গণিপুর, শান্তিগঞ্জ, সুনামগঞ্জ অঞ্চলের একটি উল্লেখযোগ্য ধর্মীয় শিক্ষা প্রতিষ্ঠান। এখানে কুরআন, হাদিস, আরবি, সাধারণ শিক্ষা এবং আধুনিক শিক্ষার সমন্বয়ে শিক্ষার্থীদের আদর্শ মানুষ হিসেবে গড়ে তোলা হয়। আমাদের লক্ষ্য নৈতিকতা, মানবিক মূল্যবোধ ও সৃজনশীল জ্ঞানের সমন্বয়ে শিক্ষার্থীদের প্রস্তুত করে তোলা।",
    en: "Ghuradumbur Hafizia Dakhil Madrasah is a significant religious educational institution in the Ganipur, Shantiganj, Sunamganj area. Students are shaped into exemplary people through a combination of the Qur'an, Hadith, Arabic, general and modern education. Our goal is to prepare students with a blend of morality, human values and creative knowledge.",
  } satisfies LocalizedText,
}

/**
 * Leadership messages. Names are visible in the approved design but must be
 * confirmed by the administration. Message bodies are transcribed from the
 * design and lightly completed where the source text is unreadable. // VERIFY
 */
export type Leadership = {
  id: string
  titleKey: "principalTitle" | "vicePrincipalTitle"
  image: string
  imageAlt: LocalizedText
  message: LocalizedText
  name: LocalizedText
  nameSuffix: LocalizedText
  designation: LocalizedText
}

export const principalMessage: Leadership = {
  id: "principal",
  titleKey: "principalTitle",
  image: "/images/principal.jpg",
  imageAlt: { bn: "অধ্যক্ষ মাওলানা মাছউল্লাহ মাদানী", en: "Principal Mawlana Machhullah Madani" },
  message: {
    bn: "শিক্ষার্থী ও অভিভাবকগণ, আমাদের প্রতিষ্ঠানে আপনাদের স্বাগতম। ইসলামী ও আধুনিক শিক্ষার সমন্বয়ে শিক্ষার্থীদের নৈতিক ও ইসলামী মানসিকতায় গড়ে তোলাই আমাদের অঙ্গীকার। অভিজ্ঞ শিক্ষকমণ্ডলীর সার্বিক তত্পরতায় শিক্ষার্থীদের জ্ঞান ও চরিত্র দুটোই সমৃদ্ধ করে তুলছি।",
    en: "Dear students and guardians, welcome to our institution. Our pledge is to shape students with Islamic ethics and modern education combined. With the devoted support of our experienced teachers we are enriching both the knowledge and the character of our students.",
  } satisfies LocalizedText,
  name: { bn: "মাওলানা মাছউল্লাহ মাদানী", en: "Mawlana Machhullah Madani" } satisfies LocalizedText,
  nameSuffix: { bn: "অধ্যক্ষ", en: "Principal" } satisfies LocalizedText,
  designation: { bn: "অধ্যক্ষ, ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা", en: "Principal, Ghuradumbur Hafizia Dakhil Madrasah" } satisfies LocalizedText,
}

export const vicePrincipalMessage: Leadership = {
  id: "vice-principal",
  titleKey: "vicePrincipalTitle",
  image: "/images/vice-principal.jpg",
  imageAlt: { bn: "উপাধ্যক্ষ মাওলানা রফিকুল ইসলাম", en: "Vice Principal Mawlana Rafiqul Islam" },
  message: {
    bn: "শিক্ষার্থীদের সর্বোত্তভাবে উত্তম শিক্ষা, অভিজ্ঞতা ও সামাজিক সম্পর্কের ক্ষেত্র প্রস্তুত করে, আরসা একটি আদর্শ মাদরাসা হিসেবে প্রতিষ্ঠানটি প্রতিষ্ঠা লাভ করে। আমরা শিক্ষার্থীদের উপযোগী করতে প্রতিশ্রুতিবদ্ধ।",
    en: "Preparing our students with the best education, experience and social grounding, the institution was established as an exemplary madrasah. We are committed to making our students truly capable.",
  } satisfies LocalizedText,
  name: { bn: "মাওলানা রফিকুল ইসলাম", en: "Mawlana Rafiqul Islam" } satisfies LocalizedText,
  nameSuffix: { bn: "উপাধ্যক্ষ", en: "Vice Principal" } satisfies LocalizedText,
  designation: { bn: "উপাধ্যক্ষ, ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা", en: "Vice Principal, Ghuradumbur Hafizia Dakhil Madrasah" } satisfies LocalizedText,
}

/* ---------------------------------------------------------------------- */
/* Sidebar                                                                 */
/* ---------------------------------------------------------------------- */

export type QuickLink = { label: LocalizedText; icon: "admission" | "results" | "downloads" | "teachers" | "gallery"; href: string }

export const quickLinks: QuickLink[] = [
  { label: { bn: "ভর্তি তথ্য", en: "Admission Info" }, icon: "admission", href: "/admission" },
  { label: { bn: "পরীক্ষার ফলাফল", en: "Exam Results" }, icon: "results", href: "/results" },
  { label: { bn: "ডাউনলোডস", en: "Downloads" }, icon: "downloads", href: "/downloads" },
  { label: { bn: "শিক্ষকপ্যানেল", en: "Teachers' Panel" }, icon: "teachers", href: "/teachers" },
  { label: { bn: "ফটো গ্যালারি", en: "Photo Gallery" }, icon: "gallery", href: "/gallery" },
]

export type NoticeItem = { day: LocalizedText; month: LocalizedText; title: LocalizedText; isNew?: boolean }

/* Titles transcribed from the approved design; confirm with administration. // VERIFY */
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

export type EventItem = { day: LocalizedText; month: LocalizedText; title: LocalizedText; image?: string; imageAlt?: LocalizedText }

/* Titles transcribed from the approved design; confirm with administration. // VERIFY */
export const events: EventItem[] = [
  {
    day: { bn: "১২", en: "12" },
    month: { bn: "অক্টো", en: "Oct" },
    title: { bn: "বার্ষিক মিলাদ ও দোয়া মাহফিল ২০২৬", en: "Annual Milad & Dua Mahfil 2026" },
    image: "/images/event-1.jpg",
    imageAlt: { bn: "মাহফিলে শিক্ষার্থীরা সমবেত", en: "Students gathered at the mahfil" },
  },
  {
    day: { bn: "০৬", en: "06" },
    month: { bn: "অক্টো", en: "Oct" },
    title: { bn: "নবীন বরণ অনুষ্ঠান", en: "New students' reception" },
  },
  {
    day: { bn: "২০", en: "20" },
    month: { bn: "ফেব্রুয়ারী", en: "February" },
    title: { bn: "অভিভাবক সমাবেশ", en: "Guardians' assembly" },
    image: "/images/event-2.jpg",
    imageAlt: { bn: "অভিভাবক সমাবেশে মুসল্লিরা বসে আছেন", en: "Attendees seated at the guardians' assembly" },
  },
  {
    day: { bn: "২০", en: "20" },
    month: { bn: "মুহাররম", en: "Muharram" },
    title: { bn: "হিজরি ও সাংস্কৃতিক অনুষ্ঠান", en: "Hijri & cultural programme" },
  },
]

export type GalleryImage = { src: string; alt: LocalizedText }

/* Captions are descriptive placeholders until the administration supplies details. */
export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-1.jpg", alt: { bn: "শিক্ষার্থীদের ক্লাসকক্ষ সমাবেশ", en: "Students gathered in the classroom" } },
  { src: "/images/gallery-2.jpg", alt: { bn: "মাদরাসার একাডেমিক ভবন", en: "The madrasah academic building" } },
  { src: "/images/gallery-3.jpg", alt: { bn: "আনুষ্ঠানিক আসরে শিক্ষার্থীরা", en: "Students at a formal assembly" } },
  { src: "/images/gallery-4.jpg", alt: { bn: "শ্রেণিকক্ষে পাঠদান চলছে", en: "Class in session" } },
]

/* ---------------------------------------------------------------------- */
/* Colored information panels                                              */
/* ---------------------------------------------------------------------- */

export type InfoPanel = {
  id: string
  tone: "green" | "pink" | "red" | "olive"
  icon: "curriculum" | "students" | "downloads" | "links"
  title: LocalizedText
  items: LocalizedText[]
}

/* Checklist items transcribed from the approved design; confirm wording. // VERIFY */
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

/* ---------------------------------------------------------------------- */
/* Footer                                                                  */
/* ---------------------------------------------------------------------- */

export const footerLinks: NavItem[] = [
  { label: { bn: "হোম", en: "Home" }, href: "/" },
  { label: { bn: "আমাদের সম্পর্কে", en: "About Us" }, href: "/about" },
  { label: { bn: "একাডেমিক", en: "Academic" }, href: "/academic" },
  { label: { bn: "তথ্য", en: "Information" }, href: "/information" },
  { label: { bn: "শিক্ষক-শিক্ষিকা", en: "Teachers" }, href: "/teachers" },
  { label: { bn: "ডাউনলোডস", en: "Downloads" }, href: "/downloads" },
  { label: { bn: "গ্যালারি", en: "Gallery" }, href: "/gallery" },
  { label: { bn: "যোগাযোগ", en: "Contact" }, href: "/contact" },
]

export const locationMap = {
  image: "/images/location-map.jpg",
  imageAlt: {
    bn: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসার অবস্থান মানচিত্র",
    en: "Location map of Ghuradumbur Hafizia Dakhil Madrasah",
  } satisfies LocalizedText,
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Ghuradumbur+Hafizia+Dakhil+Madrasah+Sunamganj",
}

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
] as const
