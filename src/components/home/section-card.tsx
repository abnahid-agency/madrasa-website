import type { ReactNode } from "react"
import type { LocalizedText } from "@/lib/i18n"
import { T } from "@/components/language-provider"

type SectionCardProps = {
  /** Full class list for the coloured header bar (gradient/drill per section). */
  headerClassName: string
  title: LocalizedText
  icon?: ReactNode
  action?: ReactNode
  children: ReactNode
  className?: string
}

/**
 * A homepage content block: coloured 44px header bar (as in the approved
 * design) with a white body. Used for the about card, the leadership cards,
 * the sidebar cards and the coloured information panels.
 */
export function SectionCard({ headerClassName, title, icon, action, children, className }: SectionCardProps) {
  return (
    <section className={"overflow-hidden rounded-md bg-white shadow-sm " + (className ?? "")}>
      <header className={"flex min-h-[44px] items-center gap-2 px-3.5 text-white " + headerClassName}>
        {icon ? <span className="shrink-0 [&>svg]:size-[18px]" aria-hidden="true">{icon}</span> : null}
        <h2 className="min-w-0 flex-1 text-[16px] font-bold sm:text-[17px]">
          <T as="span" t={title} />
        </h2>
        {action}
      </header>
      {children}
    </section>
  )
}
