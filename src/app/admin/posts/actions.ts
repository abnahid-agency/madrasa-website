"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { getContent, saveContent, slugify } from "@/lib/content-store"
import { requireAdmin } from "@/app/admin/events/actions"
import type { Post, PostStatus, PostType } from "@/data/posts/posts"

export async function savePost(formData: FormData): Promise<void> {
  await requireAdmin()
  const state = await getContent(); const text = (name: string) => String(formData.get(name) || "").trim()
  const title = { bn: text("titleBn"), en: text("titleEn") }; const slug = slugify(text("slug") || title.en || title.bn)
  if (!title.bn || !title.en || !slug) throw new Error("Bengali title, English title and slug are required")
  if (state.posts.some((post) => post.slug === slug && post.id !== text("id"))) throw new Error("Slug already exists")
  const type = (text("type") || "general") as PostType; const existing = state.posts.find((post) => post.id === text("id"))
  const post: Post = { ...(existing || { id: `post-${Date.now()}`, photos: [] }), slug, type, title, shortDescription: { bn: text("shortBn"), en: text("shortEn") }, description: { bn: text("descriptionBn"), en: text("descriptionEn") }, date: { bn: text("dateBn"), en: text("dateEn") }, location: { bn: text("locationBn"), en: text("locationEn") }, published: formData.get("status") === "published", status: (text("status") || "draft") as PostStatus }
  await saveContent({ ...state, posts: existing ? state.posts.map((item) => item.id === existing.id ? post : item) : [post, ...state.posts] })
  revalidatePath("/posts"); revalidatePath(`/posts/${slug}`); revalidatePath("/")
  redirect(`/admin/posts?updated=${encodeURIComponent(slug)}`)
}
