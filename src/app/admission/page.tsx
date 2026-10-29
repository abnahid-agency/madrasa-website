import type { Metadata } from "next"
import { GraduationCap, ScrollText } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { institution, tickerNotice } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "ভর্তি তথ্য",
  path: "/admission",
})

export default function AdmissionPage() {
  return (
    <InnerPage
      title={{ bn: "ভর্তি তথ্য", en: "Admission" }}
      subtitle={{
        bn: "শিক্ষাবর্ষের ভর্তি বিজ্ঞপ্তি ও নিয়মাবলি",
        en: "Admission circular and rules for the academic year",
      }}
    >
      <div className="flex flex-col gap-4">
        {/* The currently running admission notice (from the shared ticker data). */}
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-sec-purple-from)] to-[var(--m-sec-purple-to)]"
          title={{ bn: "চলমান ভর্তি বিজ্ঞপ্তি", en: "Current admission circular" }}
          icon={<ScrollText />}
        >
          <div className="p-4">
            <p className="flex flex-wrap items-center gap-2 text-[15px] leading-relaxed text-slate-700">
              <T t={tickerNotice.text} />
              {tickerNotice.isNew ? (
                <span className="inline-flex items-center rounded-full bg-[var(--m-new-pill)] px-2 py-px text-[11px] font-bold text-white">
                  <T t={{ bn: "নতুন", en: "New" }} />
                </span>
              ) : null}
            </p>
            <p className="mt-2 text-[13px] text-[var(--m-meta)]">
              <T t={{ bn: "প্রকাশকাল:", en: "Posted:" }} /> <T as="span" t={tickerNotice.date} />
            </p>
          </div>
        </SectionCard>

        {/* How to apply — office-contact based, no invented process steps. */}
        <SectionCard
          headerClassName="bg-[var(--m-panel-green)]"
          title={{ bn: "ভর্তি প্রক্রিয়া", en: "How to apply" }}
          icon={<GraduationCap />}
        >
          <div className="flex flex-col gap-3 p-4">
            <p className="text-[14.5px] leading-relaxed text-slate-700">
              <T
                t={{
                  bn: "ভর্তি সংক্রান্ত সব আবেদন সরাসরি মাদরাসা অফিসের মাধ্যমে সম্পন্ন হয়। নিচের ফোন বা ইমেইলে যোগাযোগ করে প্রয়োজনীয় কাগজপত্র ও সময়সূচি জেনে নিন।",
                  en: "All admission applications are completed directly through the madrasah office. Call or email using the details below to learn about the required documents and the schedule.",
                }}
              />
            </p>
            <div className="flex flex-col gap-2 text-[14px] sm:flex-row sm:gap-5">
              <a href={institution.phoneHref} className="font-medium text-[var(--m-blue)] hover:underline">
                <T t={{ bn: "ফোন:", en: "Phone:" }} /> {institution.phone}
              </a>
              <a href={`mailto:${institution.email}`} className="font-medium text-[var(--m-blue)] hover:underline">
                <T t={{ bn: "ইমেইল:", en: "Email:" }} /> {institution.email}
              </a>
            </div>
          </div>
        </SectionCard>

        <PendingNote
          text={{
            bn: "শ্রেণিভিত্তিক আসনসংখ্যা ও ভর্তি ফরম ডাউনলোড অংশে প্রকাশিত হলে এখানে লিংক যুক্ত হবে।",
            en: "Seat counts per class and the admission form download will be linked here once published in the downloads section.",
          }}
          variant="soon"
        />
      </div>
    </InnerPage>
  )
}
