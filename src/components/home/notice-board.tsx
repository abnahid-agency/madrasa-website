import Link from "next/link"
import { BellDot, Plus } from "lucide-react"
import { notices } from "@/data/madrasa"
import { UI } from "@/lib/i18n"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"

/**
 * Sidebar notice board: blue gradient header with a "সব লিস্ট" action, then
 * priced rows of date-badge + title. Titles are transcribed from the approved
 * design (see the notices data module) and link to the future
 * `/notices` route.
 */
export function NoticeBoard() {
  return (
    <SectionCard
      headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
      title={{ bn: "নোটিশ বোর্ড", en: "Notice Board" }}
      icon={<BellDot />}
      action={
        <Link
          href="/notices"
          className="flex shrink-0 items-center gap-1 rounded bg-white/15 px-2 py-1 text-[12px] font-medium text-white transition-colors hover:bg-white/25"
        >
          <Plus className="size-3.5" aria-hidden="true" />
          <T as="span" t={UI.viewAllNotices} />
        </Link>
      }
    >
      <ul className="flex flex-col">
        {notices.map((notice, index) => (
          <li key={index} className="border-b border-slate-100 last:border-b-0">
            <Link
              href="/notices"
              className="flex min-h-14 items-center gap-2.5 px-2.5 py-2 transition-colors hover:bg-[var(--m-notice-bg)]"
            >
              <span className="grid w-11 shrink-0 place-content-center rounded bg-[var(--m-notice-bg)] py-1 text-center leading-none ring-1 ring-[#CFE0F5]">
                <span className="text-[15px] font-bold text-[var(--m-blue-strong)]">
                  <T as="span" t={notice.day} />
                </span>
                <span className="mt-0.5 text-[10.5px] font-medium text-[var(--m-meta)]">
                  <T as="span" t={notice.month} />
                </span>
              </span>
              <span className="min-w-0 flex-1 text-[13.5px] leading-snug text-slate-700">
                <T as="span" t={notice.title} />
              </span>
              {notice.isNew ? (
                <span className="shrink-0 rounded-full bg-[var(--m-new-pill)] px-2 py-px text-[11px] font-bold text-white">
                  <T as="span" t={UI.newBadge} />
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}
