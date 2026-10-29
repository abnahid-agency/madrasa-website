import { institution } from "@/data/madrasa"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { T } from "@/components/language-provider"
import { Mail, MapPin, Phone } from "lucide-react"
import { Globe } from "lucide-react"

/**
 * Dark blue top information bar: address, phone, email on the left and the
 * language switcher on the right. Language stays reachable on mobile.
 */
export function TopBar() {
  return (
    <div className="bg-[var(--m-topbar)] text-white">
      <div className="site-container flex h-10 items-center justify-between gap-3 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-4 text-[12.5px] leading-none sm:gap-5">
          <span className="hidden items-center gap-1.5 min-[420px]:flex">
            <MapPin className="size-3.5 shrink-0 opacity-90" aria-hidden="true" />
            <T t={institution.addressShort} />
          </span>
          <a
            href={institution.phoneHref}
            className="flex items-center gap-1.5 transition-colors hover:text-white/80"
          >
            <Phone className="size-3.5 shrink-0 opacity-90" aria-hidden="true" />
            {institution.phone}
          </a>
          <a
            href={`mailto:${institution.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-white/80 md:flex"
          >
            <Mail className="size-3.5 shrink-0 opacity-90" aria-hidden="true" />
            {institution.email}
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Globe className="size-4 opacity-90" aria-hidden="true" />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
