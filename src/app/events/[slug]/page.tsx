import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, MapPin, Trophy } from "lucide-react"
import { events } from "@/data/events/events"
import { createPageMetadata } from "@/lib/seo"
import { InnerPage } from "@/components/layout/inner-page"
import { EventPhotos } from "@/components/gallery/event-photos"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"
import { getContent } from "@/lib/content-store"

export const instant = false

export async function generateStaticParams() { return events.map((event) => ({ slug: event.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  return createPageMetadata({ title: event?.title.bn ?? "ইভেন্ট", path: `/events/${event?.slug ?? ""}` })
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { events, albums } = await getContent()
  const event = events.find((item) => item.slug === slug)
  if (!event || !event.published) notFound()
  const album = event.galleryAlbumId ? albums.find((item) => item.id === event.galleryAlbumId) : undefined
  return <InnerPage title={event.title} subtitle={event.shortDescription}>
    <div className="flex flex-col gap-4">
      <SectionCard title={event.title} icon={<CalendarDays />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]">
        <div className="grid gap-4 p-3 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:p-4">
          {event.image ? <Image src={event.image} alt={event.imageAlt?.bn ?? event.title.bn} width={900} height={560} className="h-full max-h-[360px] w-full rounded-lg object-cover" priority /> : null}
          <div className="self-center">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--m-meta)]"><span className="inline-flex items-center gap-1"><CalendarDays className="size-4" aria-hidden="true" /><T t={event.date} /></span>{event.location ? <span className="inline-flex items-center gap-1"><MapPin className="size-4" aria-hidden="true" /><T t={event.location} /></span> : null}<span className="rounded-full bg-[var(--m-notice-bg)] px-2 py-0.5 text-xs text-[var(--m-blue-strong)]"><T t={event.eventType} /></span></div>
            <p className="mt-4 leading-7 text-slate-700"><T t={event.description} /></p>
          </div>
        </div>
      </SectionCard>
      {event.competitions?.length ? <SectionCard title={{ bn: "প্রতিযোগিতার ফলাফল", en: "Competition results" }} icon={<Trophy />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="grid gap-3 p-3 md:grid-cols-2">{event.competitions.map((competition) => <div key={competition.id} className="rounded-lg border border-slate-100 p-3"><h2 className="font-semibold text-[var(--m-ink-heading)]"><T t={competition.name} /></h2>{competition.results.length ? <ol className="mt-2 space-y-2 text-sm">{competition.results.sort((a, b) => a.position - b.position).map((result) => <li key={`${competition.id}-${result.position}`} className="flex gap-2"><b>{result.position}.</b><span><T t={result.studentName} />{result.className ? <> — <T t={result.className} /></> : null}</span></li>)}</ol> : null}</div>)}</div></SectionCard> : null}
      {album?.photos.length ? <SectionCard title={{ bn: "ইভেন্টের ছবি", en: "Event photographs" }} icon={<T t={{ bn: "ছবি", en: "Photos" }} />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><EventPhotos photos={album.photos} /></SectionCard> : null}
      {events.filter((item) => item.published && item.slug !== event.slug).slice(0, 3).length ? <SectionCard title={{ bn: "সম্পর্কিত ইভেন্ট", en: "Related events" }} icon={<CalendarDays />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="grid gap-2 p-3 sm:grid-cols-3">{events.filter((item) => item.published && item.slug !== event.slug).slice(0, 3).map((item) => <Link key={item.slug} href={`/events/${item.slug}`} className="rounded border border-slate-100 p-3 text-sm hover:bg-[var(--m-notice-bg)]"><span className="font-semibold text-[var(--m-ink-heading)]"><T t={item.title} /></span><span className="mt-1 block text-xs text-[var(--m-meta)]"><T t={item.date} /></span></Link>)}</div></SectionCard> : null}
      <Link href="/events" className="w-fit text-sm font-medium text-[var(--m-blue)] hover:underline"><T t={{ bn: "← সব ইভেন্ট", en: "← All events" }} /></Link>
    </div>
  </InnerPage>
}
