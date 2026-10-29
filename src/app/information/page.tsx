import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { InnerPage } from "@/components/layout/inner-page"
import { InfoPanels } from "@/components/home/info-panels"

export const metadata: Metadata = createPageMetadata({
  title: "তথ্য",
  path: "/information",
})

export default function InformationPage() {
  return (
    <InnerPage
      title={{ bn: "তথ্য", en: "Information" }}
      subtitle={{
        bn: "শিক্ষার্থী কেন্দ্র, ডাউনলোডস ও ওয়েবসাইট লিংকের সারসংক্ষেপ",
        en: "Students' centre, downloads and website links at a glance",
      }}
    >
      {/* #links anchor target lands inside the "ওয়েবসাইট লিংক" panel below */}
      <div id="links" />
      <InfoPanels />
    </InnerPage>
  )
}
