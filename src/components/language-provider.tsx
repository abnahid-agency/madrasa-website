"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import { t, type Language, type LocalizedText } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "bn",
  setLang: () => {},
})

const STORAGE_KEY = "ghdm-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("bn")

  // Restore the saved preference after hydration so the server HTML (Bengali)
  // always matches the first client render. setState here is the standard
  // hydration-safe way to sync React with localStorage (an external store).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "en" || saved === "bn") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(saved)
    }
  }, [])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  // Keep the document language in sync for accessibility/assistive tech.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

type TProps = {
  t: LocalizedText
  as?: keyof React.JSX.IntrinsicElements
  className?: string
}

const voidish = new Set(["br", "img", "hr", "input", "meta", "link"])

/**
 * Minimal client-side bilingual text node. Used inside otherwise server-rendered
 * sections so a language switch only re-renders these tiny components.
 */
export function T({ t: text, as: Tag = "span", className }: TProps) {
  const { lang } = useLanguage()
  const children = t(text, lang)
  if (typeof Tag === "string" && voidish.has(Tag)) return <Tag className={className} />
  return <Tag className={className}>{children}</Tag>
}
