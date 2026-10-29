"use client"

import { useEffect, useState } from "react"

const digitsBn = "০১২৩৪৫৬৭৮৯"

function toBengaliDigits(year: number): string {
  return String(year)
    .split("")
    .map((d) => digitsBn[Number(d)] ?? d)
    .join("")
}

/**
 * Copyright year. Rendered on the client because `new Date()` is a dynamic
 * value that must not block prerendering (Next.js `cacheComponents`).
 * The server prerenders the current Bengali numeral year, and hydrates from there.
 */
export function FooterYear() {
  // `useState` initializer deliberately renders a fallback; the exact year is
  // confirmed below on the client.
  const [year, setYear] = useState<string>("২০২৬")

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(toBengaliDigits(new Date().getFullYear()))
  }, [])

  return <span suppressHydrationWarning>{year}</span>
}
