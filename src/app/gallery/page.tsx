import type { Metadata } from "next"
import Image from "next/image"
import { Images } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { galleryImages } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "গ্যালারি",
  path: "/gallery",
})

export default function GalleryPage() {
  return (
    <InnerPage
      title={{ bn: "ফটো গ্যালারি", en: "Photo Gallery" }}
      subtitle={{
        bn: "মাদরাসার ক্লাসকক্ষ, অনুষ্ঠান ও ক্যাম্পাসের দৃশ্য",
        en: "Views of the madrasah classrooms, events and campus",
      }}
    >
      <div className="flex flex-col gap-4">
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
          title={{ bn: "চিত্রশালা", en: "Pictures" }}
          icon={<Images />}
        >
          <div className="grid grid-cols-2 gap-[3px] p-[3px] md:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image) => (
              <figure key={image.src} className="group relative overflow-hidden rounded-sm">
                <Image
                  src={image.src}
                  alt={image.alt.bn}
                  width={480}
                  height={480}
                  sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 285px"
                  className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-[var(--m-caption)]/85 px-2.5 py-1.5 text-[12px] leading-snug text-white opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">
                  <T as="span" t={image.alt} />
                </figcaption>
              </figure>
            ))}
          </div>
        </SectionCard>

        <PendingNote
          text={{
            bn: "অনুষ্ঠান ও ক্যাম্পাসের অনুমোদিত আরও ছবি প্রশাসনের প্রদত্ত ফটো অনুযায়ী এই গ্যালারিতে যুক্ত হবে।",
            en: "More approved photos of events and the campus will be added to this gallery as supplied by the administration.",
          }}
          variant="soon"
        />
      </div>
    </InnerPage>
  )
}
