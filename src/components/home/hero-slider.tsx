"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { heroSlides } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { ChevronLeft, ChevronRight } from "lucide-react"

const AUTOPLAY_MS = 6000

/**
 * Approved-design hero: 4 slides crossfading over a ~250px tall band, with a
 * navy caption panel bottom-left. Autoplays every 6 seconds, pauses while the
 * pointer or keyboard focus is on it, and never autoplays for visitors who
 * prefer reduced motion. Until the administration supplies more photos,
 * slides 2-4 reuse the single approved photo with different crops.
 */
export function HeroSlider() {
  const [active, setActive] = useState(0)
  const pausedRef = useRef(false)
  const reducedMotionRef = useRef(false)

  // Autoplay: never for reduced motion; skip ticks while hovered/focused.
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => {
      reducedMotionRef.current = media.matches
    }
    update()
    media.addEventListener("change", update)

    const timer = window.setInterval(() => {
      if (!pausedRef.current && !reducedMotionRef.current) {
        setActive((current) => (current + 1) % heroSlides.length)
      }
    }, AUTOPLAY_MS)

    return () => {
      media.removeEventListener("change", update)
      window.clearInterval(timer)
    }
  }, [])

  const goTo = useCallback((index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length)
  }, [])

  const buttonBase =
    "grid size-9 place-items-center rounded-full bg-[var(--m-caption)]/60 text-white transition-colors " +
    "hover:bg-[var(--m-caption)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

  return (
    <section
      aria-roledescription="carousel"
      aria-label="মাদরাসার হাইলাইটস / Madrasah highlights"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
      className="relative isolate"
    >
      <div className="relative h-[190px] overflow-hidden sm:h-[220px] lg:h-[250px]">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            aria-hidden={index !== active}
            className={
              "absolute inset-0 transition-opacity duration-700 " +
              (index === active ? "opacity-100" : "pointer-events-none opacity-0")
            }
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 1168px"
              priority={index === 0}
              className="object-cover"
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}

        {/* Caption panel bottom-left */}
        <div className="absolute bottom-3 left-3 max-w-[min(92%,560px)] rounded-md bg-[var(--m-caption)]/95 px-4 py-2.5 text-white shadow-lg sm:bottom-4 sm:left-4 sm:px-5 sm:py-3">
          <p className="whitespace-pre-line text-[15px] font-semibold leading-snug sm:text-[18px] sm:leading-normal">
            <T as="span" t={heroSlides[active].caption} />
          </p>
        </div>

        {/* Prev / next */}
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="পূর্ববর্তী স্লাইড / Previous slide"
          className={buttonBase + " absolute left-2 top-1/2 -translate-y-1/2"}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="পরবর্তী স্লাইড / Next slide"
          className={buttonBase + " absolute right-2 top-1/2 -translate-y-1/2"}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>

        {/* Dots */}
        <div role="tablist" aria-label="স্লাইড নির্বাচন / Slide selection" className="absolute bottom-3 right-3 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              type="button"
              key={index}
              role="tab"
              aria-selected={index === active}
              aria-label={`স্লাইড ${index + 1} / Slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={
                "h-2.5 w-2.5 rounded-full ring-1 ring-white/60 transition-colors " +
                (index === active ? "bg-white" : "bg-white/40 hover:bg-white/70")
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
