import type { LocalizedText } from "@/lib/i18n";

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
