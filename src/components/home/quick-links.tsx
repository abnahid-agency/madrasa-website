import Link from "next/link"
import {
  BadgeCheck,
  ChevronRight,
  Download,
  GraduationCap,
  Images,
  Zap,
} from "lucide-react"
import { quickLinks, type QuickLink } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"

const iconByKey: Record<
  QuickLink["icon"],
  React.ComponentType<{ className?: string }>
> = {
  admission: GraduationCap,
  results: BadgeCheck,
  downloads: Download,
  teachers: Zap,
  gallery: Images,
}

/**
 * Sidebar "কুইক লিংক" card: blue gradient header over five crimson gradient
 * action rows, exactly like the approved design.
 */
export function QuickLinks() {
  return (
    <SectionCard
      headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
      title={{ bn: "কুইক লিংক", en: "Quick Links" }}
      icon={<Zap />}
    >
      <ul className="flex flex-col gap-[1px] bg-white">
        {quickLinks.map((link) => {
          const Icon = iconByKey[link.icon]
          return (
            <li key={link.icon}>
              <Link
                href={link.href}
                className="flex min-h-11 items-center gap-2 bg-gradient-to-r from-[var(--m-quick-from)] to-[var(--m-quick-to)] px-3.5 text-white transition-[filter] hover:brightness-110"
              >
                <Icon className="size-[17px] shrink-0" aria-hidden="true" />
                <span className="min-w-0 flex-1 text-[14px] font-medium">
                  <T as="span" t={link.label} />
                </span>
                <ChevronRight className="size-4 shrink-0 opacity-80" aria-hidden="true" />
              </Link>
            </li>
          )
        })}
      </ul>
    </SectionCard>
  )
}
