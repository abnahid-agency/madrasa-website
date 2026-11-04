"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { CalendarDays, Images } from "lucide-react"
import { useLanguage, T } from "@/components/language-provider"
import { ImageLightbox } from "@/components/gallery/image-lightbox"
import type { GalleryAlbum } from "@/data/gallery/gallery"
import { SectionCard } from "@/components/home/section-card"

export function GalleryClient({ albums }: { albums: GalleryAlbum[] }) {
  const { lang } = useLanguage()
  const [active, setActive] = useState<{ photos: GalleryAlbum["photos"]; index: number } | null>(null)
  const close = useCallback(() => setActive(null), [])
  return <>
    <div className="flex flex-col gap-4">
      {albums.filter((album) => album.published).map((album) => <SectionCard key={album.id} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]" title={album.title} icon={<Images />} action={album.eventSlug ? <Link href={`/events/${album.eventSlug}`} className="text-xs text-white underline"><T t={{ bn: "ইভেন্ট দেখুন", en: "View event" }} /></Link> : undefined}>
        <div className="p-3">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-[var(--m-meta)]">{album.description[lang]}</p>
            <span className="rounded-full bg-[var(--m-notice-bg)] px-2.5 py-1 text-xs text-[var(--m-blue-strong)]">{album.photos.length} <T t={{ bn: "টি ছবি", en: "photos" }} /></span>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
            {album.photos.map((photo, index) => <button key={photo.id} type="button" onClick={() => setActive({ photos: album.photos, index })} className="group relative aspect-square overflow-hidden rounded-sm text-left focus-visible:outline-2 focus-visible:outline-[var(--m-blue)]">
              <Image src={photo.src} alt={photo.alt[lang]} fill sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 285px" className="object-cover transition-transform duration-200 group-hover:scale-105" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-[var(--m-caption)]/85 px-2.5 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">{photo.caption?.[lang] || photo.alt[lang]}</span>
            </button>)}
          </div>
          {album.eventDate ? <p className="mt-3 flex items-center gap-1 text-xs text-[var(--m-meta)]"><CalendarDays className="size-3.5" aria-hidden="true" />{album.eventDate[lang]}</p> : null}
        </div>
      </SectionCard>)}
    </div>
    <ImageLightbox key={active ? `${active.photos[0]?.id}-${active.index}` : "closed"} photos={active?.photos ?? []} selectedIndex={active?.index ?? null} onClose={close} />
  </>
}
