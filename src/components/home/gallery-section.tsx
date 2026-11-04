"use client"

import Image from "next/image"
import Link from "next/link"
import { Images } from "lucide-react"
import { useState } from "react"
import { galleryImages } from "@/data/madrasa"
import { SectionCard } from "@/components/home/section-card"
import { ImageLightbox } from "@/components/gallery/image-lightbox"
import { T } from "@/components/language-provider"

/**
 * Sidebar gallery card: a single row of four square thumbs (as in the approved
 * design) linking to the future `/gallery` route. Photos are reference-screenshot
 * crops until originals are supplied.
 */
export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <SectionCard
      headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
      title={{ bn: "গ্যালারি", en: "Gallery" }}
      icon={<Images />}
      action={<Link href="/gallery" className="rounded bg-white/15 px-2 py-1 text-xs text-white hover:bg-white/25"><T t={{ bn: "সব ছবি", en: "View all gallery" }} /></Link>}
    >
      <div className="grid grid-cols-4 gap-[3px] p-[3px]">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelected(index)}
            className="group relative aspect-square overflow-hidden rounded-sm"
          >
            <Image
              src={image.src}
              alt={image.alt.bn}
              width={160}
              height={160}
              sizes="(max-width: 1280px) 25vw, 70px"
              className="object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <ImageLightbox photos={galleryImages} selectedIndex={selected} onClose={() => setSelected(null)} />
    </SectionCard>
  )
}
