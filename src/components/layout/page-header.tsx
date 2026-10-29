import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { LocalizedText } from "@/lib/i18n"
import { t } from "@/lib/i18n"
import { T } from "@/components/language-provider"

type PageHeaderProps = {
  title: LocalizedText
  subtitle?: LocalizedText
}

/**
 * Band at the top of every inner page: gradient title bar with a "হোম / Page"
 * breadcrumb, so all non-home routes share the same entrance exactly like
 * board-style education portals.
 */
export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-[var(--m-nav)] to-[var(--m-nav-home)] text-white">
      <div className="site-container px-4 py-4 sm:px-5 sm:py-5">
        <nav aria-label="ব্রেডক্রাম্ব / Breadcrumb" className="text-[12.5px] text-white/80">
          <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-white">
            <T t={{ bn: "হোম", en: "Home" }} />
          </Link>
          <ChevronRight className="mx-1 inline size-3 opacity-70" aria-hidden="true" />
          <span className="font-medium text-white/95">
            {t(title, "bn")}
          </span>
        </nav>
        <h1 className="mt-1 text-[22px] font-bold leading-tight sm:text-[24px]">
          <T as="span" t={title} />
        </h1>
        {subtitle ? (
          <p className="mt-0.5 text-[13.5px] text-white/85">
            <T as="span" t={subtitle} />
          </p>
        ) : null}
      </div>
    </header>
  )
}
