import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Plus } from "lucide-react"
import { events } from "@/data/madrasa"
import { UI } from "@/lib/i18n"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"

/**
 * Sidebar events card. Following the approved design's pixels, only rows 1 & 3
 * carry photos; rows 2 & 4 are date-badge + title rows. Event photos are
 * reference-screenshot crops awaiting originals from the administration;
 * dates/months are flagged // VERIFY in `src/data/madrasa.ts`.
 */
export function EventsSection() {
  return (
    <SectionCard
      headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
      title={{ bn: "ইভেন্টস", en: "Events" }}
      icon={<CalendarDays />}
      action={
        <Link
          href="/events"
          className="flex shrink-0 items-center gap-1 rounded bg-white/15 px-2 py-1 text-[12px] font-medium text-white transition-colors hover:bg-white/25"
        >
          <Plus className="size-3.5" aria-hidden="true" />
          <T as="span" t={UI.viewAllEvents} />
        </Link>
      }
    >
      <ul className="flex flex-col">
        {events.map((event, index) => (
          <li key={index} className="border-b border-slate-100 last:border-b-0">
            <Link
              href="/events"
              className="flex min-h-14 items-center gap-2.5 px-2.5 py-2 transition-colors hover:bg-[var(--m-notice-bg)]"
            >
              {event.image ? (
                <Image
                  src={event.image}
                  alt={event.imageAlt?.bn ?? ""}
                  width={96}
                  height={72}
                  sizes="52px"
                  className="h-[52px] w-[52px] shrink-0 rounded object-cover"
                />
              ) : null}
              <span className="grid w-11 shrink-0 place-content-center rounded bg-[var(--m-notice-bg)] py-1 text-center leading-none ring-1 ring-[#CFE0F5]">
                <span className="text-[15px] font-bold text-[var(--m-blue-strong)]">
                  <T as="span" t={event.day} />
                </span>
                <span className="mt-0.5 text-[10.5px] font-medium text-[var(--m-meta)]">
                  <T as="span" t={event.month} />
                </span>
              </span>
              <span className="min-w-0 flex-1 text-[13.5px] leading-snug text-slate-700">
                <T as="span" t={event.title} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}
