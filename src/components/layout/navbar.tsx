"use client"

import Link from "next/link"
import { navItems, type NavItem } from "@/data/madrasa"
import { UI } from "@/lib/i18n"
import { T, useLanguage } from "@/components/language-provider"
import { ChevronDown, ChevronRight, Home, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

/**
 * Full-width blue navigation bar. Desktop: horizontal menu with hover/focus
 * dropdowns. Mobile: accessible hamburger menu with accordion sub-menus.
 */
export function Navbar() {
  const { lang } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  const closeAll = () => {
    setOpen(false)
    setExpanded(null)
  }

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <nav aria-label="প্রধান নেভিগেশন / Main navigation" className="bg-[var(--m-nav)]">
      <div className="site-container flex h-[52px] items-stretch justify-between">
        {/* Home button */}
        <Link
          href="/"
          onClick={closeAll}
          aria-label={lang === "en" ? "Home" : "হোম"}
          className={
            "hidden w-14 shrink-0 items-center justify-center text-white transition-colors hover:bg-[var(--m-nav-home)] lg:flex " +
            (pathname === "/" ? "bg-[var(--m-nav-home)]" : "")
          }
        >
          <Home className="size-4.5" aria-hidden="true" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden w-full items-stretch lg:flex">
          {navItems.map((item) => (
            <li key={item.href} className="group relative flex items-stretch">
              <Link
                href={item.href}
                className={
                  "flex items-center gap-1.5 px-3.5 text-[14.5px] leading-none text-white/95 transition-colors group-hover:bg-white/10 hover:bg-white/10 lg:px-4 " +
                  (isActive(item.href) ? "bg-white/10" : "")
                }
              >
                <T t={item.label} />
                {item.children && (
                  <ChevronDown
                    className="size-3.5 opacity-80 transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  />
                )}
              </Link>

              {item.children && (
                <ul className="invisible absolute left-0 top-full z-30 min-w-[220px] rounded-md bg-white py-1.5 opacity-0 shadow-lg ring-1 ring-black/5 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-[13.5px] text-slate-700 transition-colors hover:bg-slate-50 hover:text-[var(--m-blue)]"
                      >
                        <T t={child.label} />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? UI.closeMenu[lang] : UI.menu[lang]}
          className="flex h-[52px] items-center gap-2 px-4 text-white lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="text-[14.5px]">{open ? UI.closeMenu[lang] : UI.menu[lang]}</span>
        </button>

        {/* Mobile spacer keeps the toggle right-aligned */}
        <div aria-hidden="true" className="w-14 lg:hidden" />
      </div>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-nav" className="border-t border-white/10 lg:hidden">
          <MobileMenu
            expanded={expanded}
            onToggle={(href) => setExpanded((cur) => (cur === href ? null : href))}
            onNavigate={closeAll}
          />
        </div>
      )}
    </nav>
  )
}

function MobileMenu({
  expanded,
  onToggle,
  onNavigate,
}: {
  expanded: string | null
  onToggle: (href: string) => void
  onNavigate: () => void
}) {
  const renderItems = (items: NavItem[], depth: number = 0) => (
    <ul className={depth > 0 ? "bg-[var(--m-nav-deep)]" : ""}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length)
        const isOpen = expanded === item.href
        return (
          <li key={`${depth}-${item.href}`}>
            <div className="flex items-stretch border-b border-white/5">
              <Link
                href={item.href}
                onClick={onNavigate}
                className="flex-1 px-4 py-3 text-[14.5px] text-white/95"
                style={depth > 0 ? { paddingLeft: `${16 + depth * 16}px` } : undefined}
              >
                <T t={item.label} />
              </Link>
              {hasChildren && (
                <button
                  type="button"
                  onClick={() => onToggle(item.href)}
                  aria-expanded={isOpen}
                  aria-label="সাব-মেনু"
                  className="grid w-12 place-items-center text-white/85"
                >
                  <ChevronDown className={"size-4 transition-transform " + (isOpen ? "rotate-180" : "")} aria-hidden="true" />
                </button>
              )}
            </div>
            {hasChildren && isOpen && renderItems(item.children!, depth + 1)}
          </li>
        )
      })}
    </ul>
  )

  return (
    <ul>
      <li>
        <Link href="/" onClick={onNavigate} className="flex items-center gap-2 border-b border-white/5 px-4 py-3 text-[14.5px] text-white/95">
          <Home className="size-4" aria-hidden="true" />
          <T t={{ bn: "হোম", en: "Home" }} />
        </Link>
      </li>
      {navItems.map((item) => {
        const isOpen = expanded === item.href
        return (
          <li key={item.href}>
            <div className="flex items-stretch border-b border-white/5">
              <Link
                href={item.href}
                onClick={onNavigate}
                className="flex-1 px-4 py-3 text-[14.5px] text-white/95"
              >
                <T t={item.label} />
              </Link>
              {item.children && (
                <button
                  type="button"
                  onClick={() => onToggle(item.href)}
                  aria-expanded={isOpen}
                  aria-label="সাব-মেনু"
                  className="grid w-12 place-items-center text-white/85"
                >
                  <ChevronDown className={"size-4 transition-transform " + (isOpen ? "rotate-180" : "")} aria-hidden="true" />
                </button>
              )}
            </div>
            {item.children && isOpen && renderItems(item.children, 1)}
          </li>
        )
      })}
      <li className="px-4 py-3 text-[13px] text-white/40" aria-hidden="true">
        <ChevronRight className="hidden" />
      </li>
    </ul>
  )
}
