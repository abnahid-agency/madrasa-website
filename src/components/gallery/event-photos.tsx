"use client"

import Image from "next/image"
import { useState } from "react"
import type { GalleryPhoto } from "@/data/gallery/gallery"
import { ImageLightbox } from "@/components/gallery/image-lightbox"
import { useLanguage } from "@/components/language-provider"

export function EventPhotos({ photos }: { photos: GalleryPhoto[] }) {
  const { lang } = useLanguage()
  const [selected, setSelected] = useState<number | null>(null)
  return <><div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-3">{photos.map((photo, index) => <button key={photo.id} type="button" onClick={() => setSelected(index)} className="relative aspect-[4/3] overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-[var(--m-blue)]"><Image src={photo.src} alt={photo.alt[lang]} fill sizes="(max-width: 767px) 50vw, 300px" className="object-cover transition-transform hover:scale-105" /></button>)}</div><ImageLightbox key={selected ?? "closed"} photos={photos} selectedIndex={selected} onClose={() => setSelected(null)} /></>
}
