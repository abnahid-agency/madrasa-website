import Image from "next/image"
import { institution } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { SearchBox } from "@/components/layout/search-box"
import { Building2, IdCard, MapPin } from "lucide-react"

/**
 * White institutional header: real madrasa emblem, bilingual name, institutional
 * identifiers and the search field.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="site-container flex flex-wrap items-center gap-x-5 gap-y-3 px-3 py-3.5 sm:px-4 lg:flex-nowrap lg:py-3">
        <Image
          src={institution.logo}
          alt={institution.logoAlt.bn}
          width={78}
          height={78}
          priority
          className="size-[72px] shrink-0 lg:size-[78px]"
        />

        <div className="min-w-0 flex-1 basis-[calc(100%-112px)] lg:basis-0">
          <p className="text-[22px] font-bold leading-tight text-[var(--m-ink-heading)] sm:text-[25px] lg:text-[27px]">
            <T as="span" t={{ bn: institution.bengaliName, en: institution.englishName }} />
          </p>
          <p className="text-[14px] font-semibold text-[var(--m-blue)] sm:text-[15px]">
            <T as="span" t={{ bn: institution.englishName, en: institution.bengaliName }} />
          </p>

          <ul className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-[var(--m-meta)]">
            <li className="flex items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0 text-[var(--m-blue)]" aria-hidden="true" />
              <T t={institution.addressShort} />
            </li>
            <li className="flex items-center gap-1.5">
              <IdCard className="size-3.5 shrink-0 text-[var(--m-blue)]" aria-hidden="true" />
              <span>
                EIIN: {institution.eiin}
              </span>
            </li>
            <li className="flex items-center gap-1.5">
              <Building2 className="size-3.5 shrink-0 text-[var(--m-blue)]" aria-hidden="true" />
              <span>
                <T t={{ bn: "মাদরাসা কোড", en: "Madrasah code" }} />
                : {institution.madrasahCode}
              </span>
            </li>
          </ul>
        </div>

        <div className="order-first w-full lg:order-none lg:w-auto">
          <SearchBox />
        </div>
      </div>
    </header>
  )
}
