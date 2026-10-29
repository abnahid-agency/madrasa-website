import type { Metadata } from "next"
import { Download, FileDown } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { infoPanels } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "ডাউনলোডস",
  path: "/downloads",
})

/* Downloadable items are sourced from the shared downloads panel data; files
   themselves will be uploaded once supplied by the administration. */
const downloads = infoPanels.find((panel) => panel.id === "downloads")!

export default function DownloadsPage() {
  return (
    <InnerPage
      title={{ bn: "ডাউনলোডস", en: "Downloads" }}
      subtitle={{
        bn: "ভর্তি ফরম, রুটিন, সার্টিফিকেট ও সার্কুলার",
        en: "Admission forms, routines, certificates and circulars",
      }}
    >
      <div className="flex flex-col gap-4">
        <SectionCard
          headerClassName="bg-[var(--m-panel-red)]"
          title={{ bn: "ডাউনলোড তালিকা", en: "Download list" }}
          icon={<Download />}
        >
          <ul className="flex flex-col p-2">
            {downloads.items.map((item, index) => (
              <li
                /* Anchor targets from the navigation:
                   /downloads#admission-form (first item),
                   /downloads#circulars (Notices & Circulars). */
                id={
                  index === 0
                    ? "admission-form"
                    : item.en === "Notices & circulars"
                      ? "circulars"
                      : undefined
                }
                key={index}
                className="scroll-mt-4 border-b border-slate-100 last:border-b-0"
              >
                <div className="flex min-h-12 items-center gap-2.5 px-2 py-1.5">
                  <FileDown className="size-4.5 shrink-0 text-[var(--m-panel-red)]" aria-hidden="true" />
                  <span className="min-w-0 flex-1 text-[14px] text-slate-700">
                    <T as="span" t={item} />
                  </span>
                  <span className="shrink-0 rounded-full bg-[var(--m-notice-bg)] px-2.5 py-0.5 text-[11.5px] font-medium text-[var(--m-blue-strong)] ring-1 ring-[#CFE0F5]">
                    <T t={{ bn: "শীঘ্রই আপলোড হবে", en: "Uploading soon" }} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <PendingNote
          text={{
            bn: "প্রতিটি ফরম ও সার্কুলার স্ক্যান করে এই তালিকায় ডাউনলোড লিংক হিসেবে সংযুক্ত হবে; আপাতত মাদরাসা অফিস থেকে ফরম সংগ্রহ করুন।",
            en: "Each form and circular will be scanned and attached to this list as a download link; collect forms from the madrasah office in the meantime.",
          }}
        />
      </div>
    </InnerPage>
  )
}
