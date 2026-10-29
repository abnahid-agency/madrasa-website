"use client"

import { UI } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"
import { Search } from "lucide-react"
import { useRef } from "react"

/**
 * Header search field. Submits to `/search` (planned route) so it starts working
 * as soon as the search page is implemented.
 */
export function SearchBox() {
  const { lang } = useLanguage()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form action="/search" method="get" role="search" className="flex w-full max-w-[300px]">
      <input
        ref={inputRef}
        type="search"
        name="q"
        aria-label={UI.search[lang]}
        placeholder={UI.searchPlaceholder[lang]}
        className="h-10 w-full rounded-l-md border border-r-0 border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus-visible:border-[var(--m-blue)] focus-visible:ring-2 focus-visible:ring-[var(--m-blue)]/30"
      />
      <button
        type="submit"
        aria-label={UI.search[lang]}
        className="grid size-10 shrink-0 place-items-center rounded-r-md bg-[var(--m-blue)] text-white transition-colors hover:bg-[var(--m-blue-strong)]"
      >
        <Search className="size-4.5" aria-hidden="true" />
      </button>
    </form>
  )
}
