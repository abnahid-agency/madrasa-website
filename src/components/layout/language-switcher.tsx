"use client"

import { useLanguage } from "@/components/language-provider"

/**
 * Bengali (default) / English toggler. The active language is persisted in
 * localStorage by the LanguageProvider.
 */
export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="flex items-center rounded-full border border-white/25 p-0.5"
      role="group"
      aria-label="ভাষা নির্বাচন / Language selection"
    >
      <button
        type="button"
        onClick={() => setLang("bn")}
        aria-pressed={lang === "bn"}
        className={
          "h-6 rounded-full px-3 text-[12px] leading-none transition-colors " +
          (lang === "bn"
            ? "bg-white font-semibold text-[var(--m-topbar)]"
            : "text-white hover:bg-white/10")
        }
      >
        বাংলা
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          "h-6 rounded-full px-3 text-[12px] leading-none transition-colors " +
          (lang === "en"
            ? "bg-white font-semibold text-[var(--m-topbar)]"
            : "text-white hover:bg-white/10")
        }
      >
        English
      </button>
    </div>
  )
}
