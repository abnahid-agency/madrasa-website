import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { FileText, CalendarDays, Search } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { events, navItems, notices, quickLinks } from "@/data/madrasa"
import type { LocalizedText } from "@/lib/i18n"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "অনুসন্ধান",
  path: "/search",
})

type Entry = {
  href: string
  label: LocalizedText
  type: LocalizedText
  icon: "page" | "notice" | "event"
}

/* A small server-side index built from the shared data module — no new
   client JavaScript; results render on the server for every ?q= request. */
const index: Entry[] = [
  ...navItems.map((item) => ({
    href: item.href,
    label: item.label,
    type: { bn: "পৃষ্ঠা", en: "Page" } satisfies LocalizedText,
    icon: "page" as const,
  })),
  ...quickLinks.map((link) => ({
    href: link.href,
    label: link.label,
    type: { bn: "পৃষ্ঠা", en: "Page" } satisfies LocalizedText,
    icon: "page" as const,
  })),
  ...notices.map((notice, i) => ({
    href: "/notices",
    label: notice.title,
    type: {
      bn: `${notice.day.bn} ${notice.month.bn} নোটিশ #${i + 1}`,
      en: `Notice #${i + 1}, ${notice.day.en} ${notice.month.en}`,
    } satisfies LocalizedText,
    icon: "notice" as const,
  })),
  ...events.map((event, i) => ({
    href: "/events",
    label: event.title,
    type: {
      bn: `${event.day.bn} ${event.month.bn} অনুষ্ঠান #${i + 1}`,
      en: `Event #${i + 1}, ${event.day.en} ${event.month.en}`,
    } satisfies LocalizedText,
    icon: "event" as const,
  })),
]

function matches(entry: Entry, q: string): boolean {
  const needle = q.trim().toLowerCase()
  if (!needle) return false
  return (
    entry.label.bn.toLowerCase().includes(needle) ||
    entry.label.en.toLowerCase().includes(needle)
  )
}

function ResultsFallback() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-2 p-3.5">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-3">
          <div className="size-9 shrink-0 animate-pulse rounded-md bg-slate-100" />
          <div className="min-w-0 flex-1">
            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
            <div className="mt-1.5 h-3 w-1/3 animate-pulse rounded bg-slate-50" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  return (
    <InnerPage
      title={{ bn: "অনুসন্ধান", en: "Search" }}
      subtitle={{
        bn: "মাদরাসার পৃষ্ঠা, নোটিশ ও অনুষ্ঠানের মধ্যে খুঁজুন",
        en: "Find pages, notices and events of the madrasah",
      }}
    >
      <Suspense fallback={<ResultsFallback />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </InnerPage>
  )
}

async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = "" } = await searchParams
  const results = q.trim() ? index.filter((entry) => matches(entry, q)) : []

  return (
    <div className="flex flex-col gap-4">
      <SectionCard
        headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
        title={{ bn: "অনুসন্ধান ফলাফল", en: "Search results" }}
        icon={<Search />}
        action={
          q.trim() ? (
            <span className="flex shrink-0 rounded bg-white/15 px-2 py-1 text-[12px] font-medium text-white">
              {results.length} <T t={{ bn: "টি ফলাফল", en: " result(s)" }} />
            </span>
          ) : null
        }
      >
        <ul className="p-2">
          {q.trim() && results.length === 0 ? (
            <li className="p-2 text-[14px] text-slate-700">
              <T
                t={{
                  bn: `“${q.trim()}” এর জন্য কোনো ফলাফল পাওয়া যায়নি — অন্য শব্দ চেষ্টা করুন।`,
                  en: `No results found for “${q.trim()}” — try a different word.`,
                }}
              />
            </li>
          ) : (
            results.map((entry, i) => (
              <li key={i} className="border-b border-slate-100 last:border-b-0">
                <Link
                  href={entry.href}
                  className="flex min-h-12 items-center gap-3 rounded px-2.5 py-2 transition-colors hover:bg-[var(--m-notice-bg)]"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[var(--m-notice-bg)] text-[var(--m-blue)]">
                    {entry.icon === "event" ? (
                      <CalendarDays className="size-4.5" aria-hidden="true" />
                    ) : (
                      <FileText className="size-4.5" aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14.5px] font-medium text-[var(--m-ink-heading)]">
                      <T as="span" t={entry.label} />
                    </span>
                    <span className="text-[12px] text-[var(--m-meta)]">
                      <T as="span" t={entry.type} />
                    </span>
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
        {!q.trim() ? (
          <div className="p-3.5">
            <PendingNote
              text={{
                bn: "উপরের সার্চ বাক্সে শব্দ লিখে অনুসন্ধান করুন, যেমন: ভর্তি, নোটিশ, রুটিন।",
                en: "Type a word above and search, for example: admission, notice, routine.",
              }}
            />
          </div>
        ) : null}
      </SectionCard>
    </div>
  )
}
