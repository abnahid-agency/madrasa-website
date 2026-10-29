import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { events } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "ইভেন্টস",
  path: "/events",
})

export default function EventsPage() {
  return (
    <InnerPage
      title={{ bn: "ইভেন্টস", en: "Events" }}
      subtitle={{
        bn: "মাদরাসার বার্ষিক, ধর্মীয় ও সাংস্কৃতিক অনুষ্ঠানসমূহ",
        en: "The madrasah's annual, religious and cultural programmes",
      }}
    >
      <div className="flex flex-col gap-4">
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
          title={{ bn: "অনুষ্ঠান তালিকা", en: "Programme list" }}
          icon={<CalendarDays />}
        >
          <ul className="flex flex-col">
            {events.map((event, index) => (
              <li key={index} className="flex gap-3 border-b border-slate-100 p-3 last:border-b-0">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.imageAlt?.bn ?? ""}
                    width={160}
                    height={120}
                    sizes="80px"
                    className="hidden h-[80px] w-[80px] shrink-0 rounded object-cover sm:block"
                  />
                ) : null}
                <span className="grid size-14 shrink-0 place-content-center rounded bg-[var(--m-notice-bg)] py-1.5 text-center leading-none ring-1 ring-[#CFE0F5]">
                  <span className="text-[17px] font-bold text-[var(--m-blue-strong)]">
                    <T as="span" t={event.day} />
                  </span>
                  <span className="mt-1 text-[11px] font-medium text-[var(--m-meta)]">
                    <T as="span" t={event.month} />
                  </span>
                </span>
                <div className="min-w-0 flex-1 self-center">
                  <p className="text-[15px] font-semibold text-[var(--m-ink-heading)]">
                    <T as="span" t={event.title} />
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-[var(--m-meta)]">
                    <T t={{ bn: "অনুষ্ঠানসূচিত মাস:", en: "Scheduled month:" }} />{" "}
                    <T as="span" t={event.month} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <PendingNote
          text={{
            bn: "অনুষ্ঠানসমূহের বিস্তারিত সময় ও স্থান নিশ্চিত হওয়ার পর এই তালিকায় সংযুক্ত হবে।",
            en: "Detailed times and venues for each programme will be added to this list once confirmed.",
          }}
          variant="soon"
        />

        <Link href="/notices" className="w-fit text-[14px] font-medium text-[var(--m-blue)] hover:underline">
          <T t={{ bn: "নোটিশ বোর্ড দেখুন →", en: "See the notice board →" }} />
        </Link>
      </div>
    </InnerPage>
  )
}
