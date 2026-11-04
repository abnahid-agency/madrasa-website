"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { t, type LocalizedText } from "@/lib/i18n"
import type { GalleryPhoto } from "@/data/gallery/gallery"

export function ImageLightbox({ photos, selectedIndex, onClose }: { photos: GalleryPhoto[]; selectedIndex: number | null; onClose: () => void }) {
  const { lang } = useLanguage()
  const [index, setIndex] = useState(selectedIndex ?? 0)
  const touchStart = useRef<number | null>(null)
  const photo = photos[index]

  useEffect(() => {
    if (selectedIndex === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft") setIndex((value) => (value - 1 + photos.length) % photos.length)
      if (event.key === "ArrowRight") setIndex((value) => (value + 1) % photos.length)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown) }
  }, [onClose, photos.length, selectedIndex])

  if (selectedIndex === null || !photo) return null
  const move = (amount: number) => setIndex((value) => (value + amount + photos.length) % photos.length)
  const localized = (value?: LocalizedText) => value ? t(value, lang) : ""

  return (
    <div role="dialog" aria-modal="true" aria-label={localized(photo.caption) || localized(photo.alt)} className="fixed inset-0 z-50 flex flex-col bg-[#03152c]/95 p-3 text-white sm:p-6" onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = event.changedTouches[0]?.clientX - touchStart.current; if (Math.abs(delta) > 45) move(delta > 0 ? -1 : 1); touchStart.current = null }}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium">{index + 1} / {photos.length}</p>
        <button type="button" onClick={onClose} aria-label={lang === "bn" ? "ছবি বন্ধ করুন" : "Close image"} className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"><X aria-hidden="true" /></button>
      </div>
      <div className="relative min-h-0 flex-1" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
        <Image src={photo.src} alt={localized(photo.alt)} fill sizes="100vw" className="object-contain" priority />
        {photos.length > 1 ? <>
          <button type="button" onClick={() => move(-1)} aria-label={lang === "bn" ? "আগের ছবি" : "Previous image"} className="absolute left-0 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 hover:bg-black/60"><ChevronLeft aria-hidden="true" /></button>
          <button type="button" onClick={() => move(1)} aria-label={lang === "bn" ? "পরের ছবি" : "Next image"} className="absolute right-0 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 hover:bg-black/60"><ChevronRight aria-hidden="true" /></button>
        </> : null}
      </div>
      <div className="mx-auto w-full max-w-3xl pb-2 pt-3 text-center">
        <p className="font-semibold">{localized(photo.caption) || localized(photo.alt)}</p>
        {photo.description ? <p className="mt-1 text-sm text-white/75">{localized(photo.description)}</p> : null}
      </div>
    </div>
  )
}
