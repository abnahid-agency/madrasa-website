import type { Metadata } from "next"
import Link from "next/link"
import { BellDot, Plus } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { notices } from "@/data/madrasa"
import { UI } from "@/lib/i18n"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "নোটিশ বোর্ড",
  path: "/notices",
})

export default function NoticesPage() {
  return (
    <InnerPage
      title={{ bn: "নোটিশ বোর্ড", en: "Notice Board" }}
      subtitle={{
        bn: "মাদরাসার সর্বশেষ বিজ্ঞপ্তি ও সিদ্ধান্তসমূহ",
        en: "The latest circulars and decisions of the madrasah",
      }}
    >
      <div className="flex flex-col gap-4">
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
          title={{ bn: "সব নোটিশ", en: "All notices" }}
          icon={<BellDot />}
          action={
            <span className="flex shrink-0 items-center gap-1 rounded bg-white/15 px-2 py-1 text-[12px] font-medium text-white">
              <Plus className="size-3.5" aria-hidden="true" />
              <T as="span" t={UI.viewAllNotices} />
            </span>
          }
        >
          <ul className="flex flex-col">
            {notices.map((notice, index) => (
              <li key={index} className="flex gap-2.5 border-b border-slate-100 px-3 py-3 last:border-b-0">
                <span className="grid w-11 shrink-0 place-content-center rounded bg-[var(--m-notice-bg)] py-1 text-center leading-none ring-1 ring-[#CFE0F5]">
                  <span className="text-[15px] font-bold text-[var(--m-blue-strong)]">
                    <T as="span" t={notice.day} />
                  </span>
                  <span className="mt-0.5 text-[10.5px] font-medium text-[var(--m-meta)]">
                    <T as="span" t={notice.month} />
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[14.5px] leading-snug text-slate-700">
                    <T as="span" t={notice.title} />
                  </p>
                </div>
                {notice.isNew ? (
                  <span className="my-auto shrink-0 rounded-full bg-[var(--m-new-pill)] px-2 py-px text-[11px] font-bold text-white">
                    <T as="span" t={UI.newBadge} />
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </SectionCard>

        <PendingNote
          text={{
            bn: "সংরক্ষিত পুরনো নোটিশসমূহ প্রশাসনের সংগ্রহ থেকে ধাপে ধাপে যুক্ত করা হবে।",
            en: "Archived past notices will be added step by step from the administration's records.",
          }}
          variant="soon"
        />

        <Link
          href="/events"
          className="w-fit text-[14px] font-medium text-[var(--m-blue)] hover:underline"
        >
          <T t={{ bn: "অনুষ্ঠানসমূহ দেখুন →", en: "See the events →" }} />
        </Link>
      </div>
    </InnerPage>
  )
}
