"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getContent, saveContent, slugify, type ContentState } from "@/lib/content-store"
import type { EventItem } from "@/data/events/events"

const cookieName = "ghdm-admin"
function authorized() { return process.env.ADMIN_SECRET && cookies().then((jar) => jar.get(cookieName)?.value === process.env.ADMIN_SECRET) }
export async function adminLogin(formData: FormData): Promise<void> {
  const secret = String(formData.get("secret") || "")
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) throw new Error("Invalid admin secret")
  const jar = await cookies(); jar.set(cookieName, secret, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/admin" })
  redirect("/admin/events")
}
export async function requireAdmin() { if (!(await authorized())) throw new Error("Unauthorized") }

export async function saveEvent(formData: FormData) {
  await requireAdmin()
  const state = await getContent()
  const titleBn = String(formData.get("titleBn") || "").trim()
  const titleEn = String(formData.get("titleEn") || "").trim()
  const requestedSlug = String(formData.get("slug") || "").trim()
  const slug = slugify(requestedSlug || titleEn || titleBn)
  if (!titleBn || !titleEn || !slug) throw new Error("Bengali title, English title and slug are required")
  const existing = state.events.find((event) => event.slug === slug && event.slug !== formData.get("originalSlug"))
  if (existing) throw new Error("Slug already exists")
  const originalSlug = String(formData.get("originalSlug") || "")
  const previous = state.events.find((event) => event.slug === originalSlug)
  const event: EventItem = {
    ...(previous || state.events[0]), slug, title: { bn: titleBn, en: titleEn },
    date: { bn: String(formData.get("dateBn") || ""), en: String(formData.get("dateEn") || "") },
    day: { bn: String(formData.get("dayBn") || ""), en: String(formData.get("dayEn") || "") },
    month: { bn: String(formData.get("monthBn") || ""), en: String(formData.get("monthEn") || "") },
    shortDescription: { bn: String(formData.get("shortBn") || ""), en: String(formData.get("shortEn") || "") },
    description: { bn: String(formData.get("descriptionBn") || ""), en: String(formData.get("descriptionEn") || "") },
    location: { bn: String(formData.get("locationBn") || ""), en: String(formData.get("locationEn") || "") },
    published: formData.get("published") === "on",
  }
  const next: ContentState = { ...state, events: previous ? state.events.map((item) => item.slug === originalSlug ? event : item) : [...state.events, event] }
  await saveContent(next)
  revalidatePath("/"); revalidatePath("/events"); revalidatePath("/gallery"); revalidatePath(`/events/${slug}`)
  redirect(`/admin/events?updated=${encodeURIComponent(slug)}`)
}
