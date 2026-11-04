import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { InnerPage } from "@/components/layout/inner-page"
import { GalleryClient } from "@/components/gallery/gallery-client"
import { getContent } from "@/lib/content-store"

export const instant = false

export const metadata: Metadata = createPageMetadata({
  title: "গ্যালারি",
  path: "/gallery",
})

export default async function GalleryPage() {
  const { albums } = await getContent()
  return (
    <InnerPage
      title={{ bn: "ফটো গ্যালারি", en: "Photo Gallery" }}
      subtitle={{
        bn: "মাদরাসার ক্লাসকক্ষ, অনুষ্ঠান ও ক্যাম্পাসের দৃশ্য",
        en: "Views of the madrasah classrooms, events and campus",
      }}
    >
      <GalleryClient albums={albums} />
    </InnerPage>
  )
}
