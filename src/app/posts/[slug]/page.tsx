import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"
import { notFound } from "next/navigation"
import { createPageMetadata } from "@/lib/seo"
import { getContent } from "@/lib/content-store"
import { postTypeLabels } from "@/data/posts/posts"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { SectionCard } from "@/components/home/section-card"
import { EventPhotos } from "@/components/gallery/event-photos"

export const instant = false
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const { posts } = await getContent(); const post = posts.find((item) => item.slug === slug); return createPageMetadata({ title: post?.title.bn ?? "পোস্ট", path: `/posts/${post?.slug ?? ""}` }) }

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const { posts } = await getContent(); const post = posts.find((item) => item.slug === slug && item.published && item.status === "published"); if (!post) notFound()
  const related = posts.filter((item) => item.published && item.slug !== post.slug && item.type === post.type).slice(0, 3)
  return <InnerPage title={post.title} subtitle={post.shortDescription}><div className="flex flex-col gap-4"><SectionCard title={post.title} icon={<CalendarDays />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="p-3 md:p-4">{post.coverImage ? <Image src={post.coverImage} alt={post.title.bn} width={1000} height={560} className="max-h-[420px] w-full rounded-lg object-cover" priority /> : null}<div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--m-meta)]"><span className="rounded-full bg-[var(--m-notice-bg)] px-2 py-1 text-[var(--m-blue-strong)]"><T t={postTypeLabels[post.type]} /></span>{post.date ? <span className="inline-flex items-center gap-1"><CalendarDays className="size-4" aria-hidden="true" /><T t={post.date} /></span> : null}{post.location ? <span className="inline-flex items-center gap-1"><MapPin className="size-4" aria-hidden="true" /><T t={post.location} /></span> : null}</div><p className="mt-4 whitespace-pre-line leading-7 text-slate-700"><T t={post.description} /></p>{post.content ? <p className="mt-3 whitespace-pre-line leading-7 text-slate-700"><T t={post.content} /></p> : null}</div></SectionCard>{post.competitions?.length ? <SectionCard title={{ bn: "ফলাফল", en: "Results" }} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="grid gap-3 p-3 md:grid-cols-2">{post.competitions.map((competition) => <div key={competition.id} className="rounded-lg border border-slate-100 p-3"><h2 className="font-semibold text-[var(--m-ink-heading)]"><T t={competition.name} /></h2>{competition.results.length ? <ol className="mt-2 space-y-2 text-sm">{competition.results.sort((a, b) => a.position - b.position).map((result) => <li key={`${competition.id}-${result.position}`}><b>{result.position}.</b> <T t={result.studentName} />{result.className ? <> — <T t={result.className} /></> : null}</li>)}</ol> : null}</div>)}</div></SectionCard> : null}{post.photos.length ? <SectionCard title={{ bn: "ছবি", en: "Photographs" }} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><EventPhotos photos={post.photos} /></SectionCard> : null}{related.length ? <SectionCard title={{ bn: "সম্পর্কিত পোস্ট", en: "Related posts" }} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="grid gap-2 p-3 sm:grid-cols-3">{related.map((item) => <Link key={item.id} href={`/posts/${item.slug}`} className="rounded border border-slate-100 p-3 text-sm hover:bg-[var(--m-notice-bg)]"><T t={item.title} /></Link>)}</div></SectionCard> : null}</div></InnerPage>
}
