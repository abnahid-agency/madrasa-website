import Link from "next/link"
import { tickerNotice } from "@/data/madrasa"
import { UI } from "@/lib/i18n"
import { T } from "@/components/language-provider"
import { Megaphone } from "lucide-react"

/**
 * Notice bar under the navbar: purple "নোটিশ:" label, CSS-only marquee of the
 * running notice with a red "নতুন" pill, and the notice date on the right.
 * The full text stays in the DOM for reduced-motion visitors and screen readers.
 */
export function NoticeTicker() {
  const message = (
    <span className="inline-flex items-center gap-2 whitespace-nowrap px-4">
      <span>
        <T as="span" t={tickerNotice.text} />
      </span>
      {tickerNotice.isNew ? (
        <span className="inline-flex items-center rounded-full bg-[var(--m-new-pill)] px-2 py-px text-[11px] font-bold text-white">
          <T as="span" t={UI.newBadge} />
        </span>
      ) : null}
    </span>
  )

  return (
    <div className="flex items-center gap-3 border-b border-[#CFE0F5] bg-[var(--m-notice-bg)] px-3 py-2 sm:px-4">
      <span className="flex shrink-0 items-center gap-1.5 rounded-sm bg-[var(--m-notice-label)] px-2.5 py-1 text-[12.5px] font-semibold text-white">
        <Megaphone className="size-3.5" aria-hidden="true" />
        <T as="span" t={UI.noticeLabel} />
      </span>

      <Link
        href="/notices"
        className="min-w-0 flex-1 overflow-hidden"
        aria-label="চলমান নোটিশ / Running notice"
      >
        <div className="m-ticker block overflow-hidden">
          <span className="m-ticker-track text-[13px] font-medium text-[var(--m-ink-heading)]">
            {message}
            {message}
          </span>
        </div>
      </Link>

      <span className="hidden shrink-0 text-[12.5px] text-[var(--m-meta)] sm:block">
        <T as="span" t={tickerNotice.date} />
      </span>
    </div>
  )
}
