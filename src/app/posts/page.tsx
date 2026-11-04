import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { getContent } from "@/lib/content-store"
import { postTypeLabels, type PostType } from "@/data/posts/posts"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PostCard } from "@/components/posts/post-card"

export const instant = false
export const metadata: Metadata = createPageMetadata({ title: "পোস্ট", path: "/posts" })
const filters: Array<PostType | "all"> = ["all", "event", "competition", "educational", "gallery"]

export default async function PostsPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams
  const selected = filters.includes(type as PostType) ? type as PostType : "all"
  const { posts } = await getContent()
  const visible = posts.filter((post) => post.published && post.status === "published" && (selected === "all" || post.type === selected))
  return <InnerPage title={{ bn: "পোস্ট", en: "Posts" }} subtitle={{ bn: "মাদরাসার ইভেন্ট, প্রতিযোগিতা, কার্যক্রম ও ফটো গ্যালারি", en: "Madrasah events, competitions, activities and photo galleries" }}><div className="flex flex-col gap-4"><nav aria-label="পোস্ট ফিল্টার / Post filters" className="flex flex-wrap gap-2">{filters.map((filter) => <a key={filter} href={filter === "all" ? "/posts" : `/posts?type=${filter}`} className={(selected === filter ? "bg-[var(--m-blue)] text-white" : "bg-[var(--m-notice-bg)] text-[var(--m-blue-strong)]") + " rounded-full px-3 py-1.5 text-sm"}>{filter === "all" ? <T t={{ bn: "সব পোস্ট", en: "All Posts" }} /> : <T t={postTypeLabels[filter]} />}</a>)}</nav>{visible.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{visible.map((post) => <PostCard key={post.id} post={post} />)}</div> : <p className="rounded-lg bg-white p-6 text-center text-sm text-[var(--m-meta)]"><T t={{ bn: "এই ধরনের কোনো প্রকাশিত পোস্ট নেই।", en: "No published posts found for this type." }} /></p>}</div></InnerPage>
}
