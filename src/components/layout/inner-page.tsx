import type { ReactNode } from "react"
import type { LocalizedText } from "@/lib/i18n"
import { PageHeader } from "@/components/layout/page-header"
import { QuickLinks } from "@/components/home/quick-links"
import { NoticeBoard } from "@/components/home/notice-board"

type InnerPageProps = {
  title: LocalizedText
  subtitle?: LocalizedText
  children: ReactNode
  sidebar?: ReactNode
}

/**
 * Shell for every inner page: gradient page header, a main column with the
 * page content, and a right sidebar (quick links + latest notices by default)
 * — mirroring the approved homepage's arrangement inside the same frame so
 * the tapestry background stays visible on both sides on wide screens.
 * The sidebar collapses below the content under `xl`.
 */
export function InnerPage({ title, subtitle, children, sidebar }: InnerPageProps) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <main className="bg-white pb-10">
        <div className="site-container grid gap-4 px-3 pt-4 sm:px-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">{children}</div>
          <aside
            aria-label="সাইডবার / Sidebar"
            className="flex min-w-0 flex-col gap-3.5 lg:grid lg:grid-cols-2 lg:items-start xl:flex xl:flex-col"
          >
            {sidebar ?? (
              <>
                <QuickLinks />
                <NoticeBoard />
              </>
            )}
          </aside>
        </div>
      </main>
    </>
  )
}
