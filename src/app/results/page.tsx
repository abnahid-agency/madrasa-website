import type { Metadata } from "next"
import Link from "next/link"
import { BadgeCheck } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"
import { T } from "@/components/language-provider"

export const metadata: Metadata = createPageMetadata({
  title: "পরীক্ষার ফলাফল",
  path: "/results",
})

export default function ResultsPage() {
  return (
    <InnerPage
      title={{ bn: "পরীক্ষার ফলাফল", en: "Exam Results" }}
      subtitle={{
        bn: "বার্ষিক পরীক্ষা ও বোর্ড পরীক্ষার ফলাফল",
        en: "Annual and board examination results",
      }}
    >
      <div className="flex flex-col gap-4">
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
          title={{ bn: "ফলাফল দেখুন", en: "View results" }}
          icon={<BadgeCheck />}
        >
          <div className="flex flex-col gap-3 p-3.5">
            <PendingNote
              text={{
                bn: "প্রতিটি শ্রেণির ফলাফল পূর্বরূপ প্রকাশিত না হওয়া পর্যন্ত এখানে সংযুক্ত হবে। ফলাফল ঘোষণার তথ্য সাধারণত নোটিশ বোর্ডে প্রকাশিত হয়।",
                en: "Class-wise results will be attached here only once they are published. Result announcements are usually posted on the notice board first.",
              }}
              variant="soon"
            />
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/notices"
                className="inline-flex h-9 items-center rounded-md bg-[var(--m-blue)] px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-[var(--m-blue-strong)]"
              >
                <T t={{ bn: "নোটিশ বোর্ড দেখুন", en: "See the notice board" }} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center rounded-md border border-slate-200 px-4 text-[13.5px] font-medium text-[var(--m-blue)] transition-colors hover:border-[var(--m-blue)] hover:bg-[var(--m-notice-bg)]"
              >
                <T t={{ bn: "অফিসে যোগাযোগ", en: "Contact the office" }} />
              </Link>
            </div>
          </div>
        </SectionCard>
      </div>
    </InnerPage>
  )
}
