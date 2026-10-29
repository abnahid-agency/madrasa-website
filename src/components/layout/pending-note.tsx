import { Clock3, Info } from "lucide-react"
import type { LocalizedText } from "@/lib/i18n"
import { T } from "@/components/language-provider"

/**
 * Empty-state note for parts of the site the administration will fill with
 * real data later (routines, results, teacher lists, downloadable forms).
 * Renders an icon + localized text inside a soft blue panel; no fake data.
 */
export function PendingNote({
  text,
  variant = "info",
}: {
  text: LocalizedText
  variant?: "info" | "soon"
}) {
  const Icon = variant === "soon" ? Clock3 : Info
  return (
    <div className="flex items-start gap-3 rounded-md bg-[var(--m-notice-bg)] p-4 ring-1 ring-[#CFE0F5]">
      <Icon
        className="mt-0.5 size-5 shrink-0 text-[var(--m-blue)]"
        aria-hidden="true"
      />
      <p className="text-[14px] leading-relaxed text-slate-700">
        <T as="span" t={text} />
      </p>
    </div>
  )
}
