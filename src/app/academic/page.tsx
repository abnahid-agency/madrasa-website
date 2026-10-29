import type { Metadata } from "next"
import Link from "next/link"
import { BookOpenCheck, CalendarDays, ClipboardList } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { infoPanels } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "একাডেমিক",
  path: "/academic",
})

/* Curriculum checklist is sourced from the shared info-panels data so both
   the homepage panel and this page stay in sync from one place. */
const curriculum = infoPanels.find((panel) => panel.id === "curriculum")!

export default function AcademicPage() {
  return (
    <InnerPage
      title={{ bn: "একাডেমিক", en: "Academic" }}
      subtitle={{
        bn: "শিক্ষাক্রম, ক্লাস রুটিন ও পরীক্ষার রুটিন",
        en: "Curriculum, class routine and examination routine",
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Curriculum (anchor target: /academic#curriculum) */}
        <SectionCard
          headerClassName="bg-[var(--m-panel-green)]"
          title={{ bn: "আমাদের শিক্ষাক্রম", en: "Our Curriculum" }}
          icon={<BookOpenCheck />}
        >
          <div id="curriculum" className="flex flex-col gap-1 p-2">
            {curriculum.items.map((item, index) => (
              <p
                key={index}
                className="flex min-h-11 items-center gap-2.5 rounded px-2 text-[14px] text-slate-700 hover:bg-[var(--m-notice-bg)]"
              >
                <BookOpenCheck className="size-4 shrink-0 text-[var(--m-panel-green)]" aria-hidden="true" />
                <T as="span" t={item} />
              </p>
            ))}
          </div>
        </SectionCard>

        {/* Class routine (anchor target: /academic#routine) */}
        <SectionCard
          headerClassName="bg-[var(--m-blue)]"
          title={{ bn: "ক্লাস রুটিন", en: "Class Routine" }}
          icon={<CalendarDays />}
        >
          <div id="routine" className="p-3.5">
            <PendingNote
              text={{
                bn: "চলতি শিক্ষাবর্ষের ক্লাস রুটিন প্রশাসনের অনুমোদনের পর এখানে প্রকাশিত হবে।",
                en: "The current year's class routine will be published here once approved by the administration.",
              }}
              variant="soon"
            />
          </div>
        </SectionCard>

        {/* Exam routine (anchor target: /academic#exam-routine) */}
        <SectionCard
          headerClassName="bg-[var(--m-panel-red)]"
          title={{ bn: "পরীক্ষার রুটিন", en: "Exam Routine" }}
          icon={<ClipboardList />}
        >
          <div id="exam-routine" className="flex flex-col gap-3 p-3.5">
            <PendingNote
              text={{
                bn: "পরীক্ষার রুটিন প্রকাশের সময় এখানে সংযুক্ত হবে; প্রয়োজনে অফিসে যোগাযোগ করুন।",
                en: "The examination routine will be attached here when published; contact the office if needed.",
              }}
            />
            <Link
              href="/notices"
              className="inline-flex h-9 w-fit items-center rounded-md bg-[var(--m-blue)] px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-[var(--m-blue-strong)]"
            >
              <T t={{ bn: "নোটিশ বোর্ড দেখুন", en: "See the notice board" }} />
            </Link>
          </div>
        </SectionCard>
      </div>
    </InnerPage>
  )
}
