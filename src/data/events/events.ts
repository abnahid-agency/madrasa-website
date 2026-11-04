import type { LocalizedText } from "@/lib/i18n"

export type CompetitionResult = {
  position: 1 | 2 | 3
  studentName: LocalizedText
  className?: LocalizedText
  rollNumber?: string
  award?: LocalizedText
}

export type Competition = {
  id: string
  name: LocalizedText
  results: CompetitionResult[]
}

export type EventItem = {
  slug: string
  day: LocalizedText
  month: LocalizedText
  date: LocalizedText
  eventType: LocalizedText
  title: LocalizedText
  shortDescription: LocalizedText
  description: LocalizedText
  location?: LocalizedText
  image?: string
  imageAlt?: LocalizedText
  galleryAlbumId?: string
  competitions?: Competition[]
  published: boolean
}

export const events: EventItem[] = [
  {
    slug: "annual-milad-dua-mahfil-2026",
    day: { bn: "১২", en: "12" }, month: { bn: "অক্টো", en: "Oct" }, date: { bn: "১২ অক্টোবর ২০২৬", en: "12 October 2026" }, eventType: { bn: "ধর্মীয় অনুষ্ঠান", en: "Religious Program" },
    title: { bn: "বার্ষিক মিলাদ ও দোয়া মাহফিল ২০২৬", en: "Annual Milad & Dua Mahfil 2026" },
    shortDescription: { bn: "মাদরাসার বার্ষিক মিলাদ ও দোয়া মাহফিল।", en: "The madrasah's annual milad and dua mahfil." },
    description: { bn: "মাদরাসার শিক্ষার্থী, শিক্ষক ও অভিভাবকদের অংশগ্রহণে বার্ষিক মিলাদ ও দোয়া মাহফিল অনুষ্ঠিত হবে।", en: "The annual milad and dua mahfil brings together students, teachers and guardians of the madrasah." },
    location: { bn: "মাদরাসা প্রাঙ্গণ", en: "Madrasah campus" }, image: "/images/event-1.jpg",
    imageAlt: { bn: "মাহফিলে শিক্ষার্থীরা সমবেত", en: "Students gathered at the mahfil" }, galleryAlbumId: "annual-milad-2026", published: true,
  },
  {
    slug: "new-students-reception",
    day: { bn: "০৬", en: "06" }, month: { bn: "অক্টো", en: "Oct" }, date: { bn: "০৬ অক্টোবর", en: "06 October" }, eventType: { bn: "শিক্ষার্থী কার্যক্রম", en: "Student Activity" },
    title: { bn: "নবীন বরণ অনুষ্ঠান", en: "New students' reception" }, shortDescription: { bn: "নতুন শিক্ষার্থীদের স্বাগত জানানোর অনুষ্ঠান।", en: "A welcome programme for new students." },
    description: { bn: "নতুন শিক্ষার্থীদের মাদরাসা পরিবারের সঙ্গে পরিচয় করিয়ে দেওয়ার আয়োজন।", en: "A programme introducing new students to the madrasah family." }, published: true,
  },
  {
    slug: "guardians-assembly",
    day: { bn: "২০", en: "20" }, month: { bn: "ফেব্রুয়ারী", en: "February" }, date: { bn: "২০ ফেব্রুয়ারী", en: "20 February" }, eventType: { bn: "শিক্ষামূলক অনুষ্ঠান", en: "Educational Program" },
    title: { bn: "অভিভাবক সমাবেশ", en: "Guardians' assembly" }, shortDescription: { bn: "শিক্ষার্থীদের অগ্রগতি নিয়ে অভিভাবক সমাবেশ।", en: "A guardians' assembly about student progress." },
    description: { bn: "শিক্ষার্থীদের অগ্রগতি ও মাদরাসার শিক্ষা কার্যক্রম নিয়ে অভিভাবকদের সঙ্গে মতবিনিময়।", en: "A discussion with guardians about student progress and academic activities." }, image: "/images/event-2.jpg",
    imageAlt: { bn: "অভিভাবক সমাবেশে মুসল্লিরা বসে আছেন", en: "Attendees seated at the guardians' assembly" }, published: true,
  },
  {
    slug: "hijri-cultural-programme",
    day: { bn: "২০", en: "20" }, month: { bn: "মুহাররম", en: "Muharram" }, date: { bn: "২০ মুহাররম", en: "20 Muharram" }, eventType: { bn: "সাংস্কৃতিক অনুষ্ঠান", en: "Ceremony" },
    title: { bn: "হিজরি ও সাংস্কৃতিক অনুষ্ঠান", en: "Hijri & cultural programme" }, shortDescription: { bn: "হিজরি বছর উপলক্ষে সাংস্কৃতিক আয়োজন।", en: "A cultural programme marking the Hijri year." },
    description: { bn: "হিজরি বছর উপলক্ষে শিক্ষার্থীদের অংশগ্রহণে সাংস্কৃতিক অনুষ্ঠান।", en: "A cultural programme featuring the participation of students." }, published: true,
  },
]
