import Image from "next/image"
import Link from "next/link"
import { Images } from "lucide-react"
import { galleryImages } from "@/data/madrasa"
import { SectionCard } from "@/components/home/section-card"

/**
 * Sidebar gallery card: a single row of four square thumbs (as in the approved
 * design) linking to the future `/gallery` route. Photos are reference-screenshot
 * crops until originals are supplied.
 */
export function GallerySection() {
  return (
    <SectionCard
      headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
      title={{ bn: "গ্যালারি", en: "Gallery" }}
      icon={<Images />}
    >
      <div className="grid grid-cols-4 gap-[3px] p-[3px]">
        {galleryImages.map((image) => (
          <Link
            key={image.src}
            href="/gallery"
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
          </Link>
        ))}
      </div>
    </SectionCard>
  )
}
