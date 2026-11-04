import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { T } from "@/components/language-provider"
import { postTypeLabels, type Post } from "@/data/posts/posts"

export function PostCard({ post }: { post: Post }) {
  return <article className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm"><Link href={`/posts/${post.slug}`} className="group block"><div className="relative aspect-[16/9] bg-[var(--m-notice-bg)]">{post.coverImage ? <Image src={post.coverImage} alt={post.title.bn} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 360px" className="object-cover transition-transform duration-200 group-hover:scale-105" /> : null}</div><div className="p-3"><div className="flex flex-wrap items-center gap-2 text-xs text-[var(--m-meta)]"><span className="rounded-full bg-[var(--m-notice-bg)] px-2 py-0.5 text-[var(--m-blue-strong)]"><T t={postTypeLabels[post.type]} /></span>{post.date ? <span className="inline-flex items-center gap-1"><CalendarDays className="size-3.5" aria-hidden="true" /><T t={post.date} /></span> : null}</div><h2 className="mt-2 font-semibold text-[var(--m-ink-heading)]"><T t={post.title} /></h2><p className="mt-1 line-clamp-2 text-sm leading-6 text-[var(--m-meta)]"><T t={post.shortDescription} /></p><span className="mt-3 inline-block text-sm font-medium text-[var(--m-blue)]"><T t={{ bn: "বিস্তারিত দেখুন →", en: "View details →" }} /></span></div></Link></article>
}
