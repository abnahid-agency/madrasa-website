import Link from "next/link"
import {
  BookOpenCheck,
  CheckCircle2,
  Download,
  ExternalLink,
  UsersRound,
} from "lucide-react"
import { infoPanels, type InfoPanel } from "@/data/madrasa"
import { T } from "@/components/language-provider"

const toneClass: Record<InfoPanel["tone"], string> = {
  green: "bg-[var(--m-panel-green)]",
  pink: "bg-[var(--m-panel-pink)]",
  red: "bg-[var(--m-panel-red)]",
  olive: "bg-[var(--m-panel-olive)]",
}

const toneText: Record<InfoPanel["tone"], string> = {
  green: "text-[var(--m-panel-green)]",
  pink: "text-[var(--m-panel-pink)]",
  red: "text-[var(--m-panel-red)]",
  olive: "text-[var(--m-panel-olive)]",
}

const iconByKey: Record<
  InfoPanel["icon"],
  React.ComponentType<{ className?: string }>
> = {
  curriculum: BookOpenCheck,
  students: UsersRound,
  downloads: Download,
  links: ExternalLink,
}

/* The four panel bodies link to their future routes. */
const panelHref: Record<InfoPanel["id"], string> = {
  curriculum: "/academic#curriculum",
  students: "/information",
  downloads: "/downloads",
  links: "/information#links",
}

/**
 * 2×2 grid of coloured information panels (curriculum / students' centre /
 * downloads / website links), each with its own checklist bullets — as in the
 * approved design.
 */
export function InfoPanels() {
  return (
    <div className="grid gap-3.5 sm:grid-cols-2">
      {infoPanels.map((panel) => {
        const Icon = iconByKey[panel.icon]
        return (
          <section key={panel.id} className="overflow-hidden rounded-md bg-white shadow-sm">
            <header className={"flex min-h-[44px] items-center gap-2 px-3.5 text-white " + toneClass[panel.tone]}>
              <Icon className="size-[18px] shrink-0" aria-hidden="true" />
              <h2 className="min-w-0 flex-1 text-[16px] font-bold sm:text-[17px]">
                <T as="span" t={panel.title} />
              </h2>
            </header>
            <ul className="flex flex-col gap-[1px] bg-white p-2">
              {panel.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={panelHref[panel.id]}
                    className="flex min-h-11 items-center gap-2 rounded px-2 text-[13.5px] text-slate-700 transition-colors hover:bg-[var(--m-notice-bg)] hover:text-[var(--m-blue)] sm:min-h-[38px]"
                  >
                    <CheckCircle2
                      className={"size-4 shrink-0 " + toneText[panel.tone]}
                      aria-hidden="true"
                    />
                    <T as="span" t={item} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
