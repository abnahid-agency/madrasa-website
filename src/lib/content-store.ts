import "server-only"

import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { events as seedEvents, type EventItem } from "@/data/events/events"
import { galleryAlbums as seedAlbums, type GalleryAlbum } from "@/data/gallery/gallery"
import type { Post } from "@/data/posts/posts"

export type DonationInfo = {
  published: boolean
  title: { bn: string; en: string }
  description: { bn: string; en: string }
  purpose: { bn: string; en: string }
  bankName?: string
  branch?: string
  accountName?: string
  accountNumber?: string
  routingNumber?: string
  mobileProvider?: string
  mobileNumber?: string
  instructions: { bn: string; en: string }
  contact: { bn: string; en: string }
}

function seedPosts(): Post[] {
  const eventPosts: Post[] = seedEvents.map((event) => ({ id: `event-${event.slug}`, slug: event.slug, type: "event", title: event.title, shortDescription: event.shortDescription, description: event.description, date: event.date, location: event.location, coverImage: event.image, photos: event.galleryAlbumId ? seedAlbums.find((album) => album.id === event.galleryAlbumId)?.photos ?? [] : [], competitions: event.competitions, published: event.published, status: event.published ? "published" : "draft", sourceEventSlug: event.slug }))
  const albumPosts: Post[] = seedAlbums.filter((album) => !album.eventSlug).map((album) => ({ id: `album-${album.id}`, slug: `gallery-${album.id}`, type: "gallery", title: album.title, shortDescription: album.description, description: album.description, date: album.eventDate, coverImage: album.coverImage, photos: album.photos, published: album.published, status: album.published ? "published" : "draft", sourceAlbumId: album.id }))
  return [...eventPosts, ...albumPosts]
}

export type ContentState = { events: EventItem[]; albums: GalleryAlbum[]; posts: Post[]; donation: DonationInfo }
const filePath = path.join(process.cwd(), ".data", "madrasa-content.json")
const emptyDonation: DonationInfo = { published: false, title: { bn: "অনুদান", en: "Donation" }, description: { bn: "", en: "" }, purpose: { bn: "", en: "" }, instructions: { bn: "", en: "" }, contact: { bn: "", en: "" } }

async function ensureState(): Promise<ContentState> {
  try {
    const stored = JSON.parse(await readFile(filePath, "utf8")) as Partial<ContentState>
    const events = (stored.events ?? seedEvents).map((event) => ({ ...seedEvents.find((seed) => seed.slug === event.slug), ...event })) as EventItem[]
    return { events, albums: stored.albums ?? seedAlbums, posts: stored.posts ?? seedPosts(), donation: stored.donation ?? emptyDonation }
  } catch {
    const initial: ContentState = { events: seedEvents, albums: seedAlbums, posts: seedPosts(), donation: emptyDonation }
    await mkdir(path.dirname(filePath), { recursive: true })
    await writeFile(filePath, JSON.stringify(initial, null, 2), "utf8")
    return initial
  }
}

export async function getContent() { return ensureState() }
export async function saveContent(state: ContentState) {
  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, JSON.stringify(state, null, 2), "utf8")
}

export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/[\s-]+/g, "-").replace(/^-|-$/g, "")
}
