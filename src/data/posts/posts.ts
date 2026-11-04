import type { Competition } from "@/data/events/events"
import type { GalleryPhoto } from "@/data/gallery/gallery"
import type { LocalizedText } from "@/lib/i18n"

export type PostType = "general" | "event" | "competition" | "educational" | "gallery"
export type PostStatus = "draft" | "published" | "archived"

export type Post = {
  id: string
  slug: string
  type: PostType
  title: LocalizedText
  shortDescription: LocalizedText
  description: LocalizedText
  content?: LocalizedText
  date?: LocalizedText
  location?: LocalizedText
  coverImage?: string
  photos: GalleryPhoto[]
  competitions?: Competition[]
  published: boolean
  status: PostStatus
  category?: LocalizedText
  sourceEventSlug?: string
  sourceAlbumId?: string
}

export const postTypeLabels: Record<PostType, LocalizedText> = {
  general: { bn: "সাধারণ পোস্ট", en: "General Post" },
  event: { bn: "ইভেন্ট", en: "Event" },
  competition: { bn: "প্রতিযোগিতা", en: "Competition" },
  educational: { bn: "শিক্ষামূলক কার্যক্রম", en: "Educational Activity" },
  gallery: { bn: "ফটো গ্যালারি", en: "Photo Gallery" },
}
