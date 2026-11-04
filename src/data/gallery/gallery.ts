import type { LocalizedText } from "@/lib/i18n"

export type GalleryPhoto = {
  id: string
  src: string
  alt: LocalizedText
  caption?: LocalizedText
  description?: LocalizedText
}

export type GalleryImage = GalleryPhoto

export type GalleryAlbum = {
  id: string
  title: LocalizedText
  description: LocalizedText
  eventSlug?: string
  eventDate?: LocalizedText
  coverImage: string
  photos: GalleryPhoto[]
  published: boolean
}

export const galleryImages: GalleryImage[] = [
  { id: "campus-1", src: "/images/gallery/gallery-1.jpg", alt: { bn: "শিক্ষার্থীদের ক্লাসকক্ষ সমাবেশ", en: "Students gathered in the classroom" } },
  { id: "campus-2", src: "/images/gallery/gallery-2.jpg", alt: { bn: "মাদরাসার একাডেমিক ভবন", en: "The madrasah academic building" } },
  { id: "campus-3", src: "/images/gallery/gallery-3.jpg", alt: { bn: "আনুষ্ঠানিক আসরে শিক্ষার্থীরা", en: "Students at a formal assembly" } },
  { id: "campus-4", src: "/images/gallery/gallery-4.jpg", alt: { bn: "শ্রেণিকক্ষে পাঠদান চলছে", en: "Class in session" } },
]

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "campus-life",
    title: { bn: "মাদরাসা ও শিক্ষাজীবন", en: "Madrasah and student life" },
    description: { bn: "মাদরাসার শ্রেণিকক্ষ, ভবন ও দৈনন্দিন শিক্ষাজীবনের নির্বাচিত ছবি।", en: "Selected photographs of classrooms, buildings and everyday student life." },
    coverImage: galleryImages[0].src,
    photos: galleryImages,
    published: true,
  },
  {
    id: "annual-milad-2026",
    title: { bn: "বার্ষিক মিলাদ ও দোয়া মাহফিল ২০২৬", en: "Annual Milad & Dua Mahfil 2026" },
    description: { bn: "বার্ষিক মিলাদ ও দোয়া মাহফিলের অনুমোদিত ছবি।", en: "Approved photographs from the Annual Milad & Dua Mahfil." },
    eventSlug: "annual-milad-dua-mahfil-2026",
    eventDate: { bn: "১২ অক্টোবর ২০২৬", en: "12 October 2026" },
    coverImage: "/images/event-1.jpg",
    photos: [
      { id: "milad-1", src: "/images/event-1.jpg", alt: { bn: "মিলাদ মাহফিলে শিক্ষার্থীরা সমবেত", en: "Students gathered at the milad mahfil" }, caption: { bn: "বার্ষিক মিলাদ ও দোয়া মাহফিল", en: "Annual Milad & Dua Mahfil" } },
      galleryImages[2],
    ],
    published: true,
  },
]
