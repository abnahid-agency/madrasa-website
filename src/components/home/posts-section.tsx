import Link from "next/link"
import { Newspaper } from "lucide-react"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"
import { getContent } from "@/lib/content-store"
import { postTypeLabels } from "@/data/posts/posts"

export async function PostsSection() {
  const { posts } = await getContent(); const recent = posts.filter((post) => post.published && post.status === "published").slice(0, 4)
  return <SectionCard title={{ bn: "সাম্প্রতিক পোস্ট", en: "Recent posts" }} icon={<Newspaper />} action={<Link href="/posts" className="rounded bg-white/15 px-2 py-1 text-xs text-white hover:bg-white/25"><T t={{ bn: "সব পোস্ট", en: "View all posts" }} /></Link>} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><ul>{recent.map((post) => <li key={post.id} className="border-b border-slate-100 last:border-0"><Link href={`/posts/${post.slug}`} className="block px-3 py-2.5 hover:bg-[var(--m-notice-bg)]"><span className="text-sm font-semibold text-[var(--m-ink-heading)]"><T t={post.title} /></span><span className="mt-0.5 block text-xs text-[var(--m-meta)]"><T t={postTypeLabels[post.type]} /></span></Link></li>)}</ul></SectionCard>
}
