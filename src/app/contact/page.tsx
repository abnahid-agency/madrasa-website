import type { Metadata } from "next"
import Image from "next/image"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { institution, locationMap } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { SectionCard } from "@/components/home/section-card"
import { PhoneCall } from "lucide-react"

export const metadata: Metadata = createPageMetadata({
  title: "যোগাযোগ",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <InnerPage
      title={{ bn: "যোগাযোগ", en: "Contact" }}
      subtitle={{
        bn: "মাদরাসা অফিসের ঠিকানা, ফোন ও ইমেইল",
        en: "Madrasah office address, phone and email",
      }}
    >
      <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2">
        {/* Contact details */}
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"
          title={{ bn: "যোগাযোগের তথ্য", en: "Contact details" }}
          icon={<PhoneCall />}
        >
          <ul className="flex flex-col gap-4 p-4 text-[15px] text-slate-700">
            <li>
              <a href={institution.phoneHref} className="flex items-center gap-3 transition-colors hover:text-[var(--m-blue)]">
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[var(--m-notice-bg)] text-[var(--m-blue)]">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <T t={{ bn: "ফোন", en: "Phone" }} />
                  <br />
                  <span className="font-bold text-[var(--m-ink-heading)]">{institution.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${institution.email}`} className="flex items-center gap-3 transition-colors hover:text-[var(--m-blue)]">
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[var(--m-notice-bg)] text-[var(--m-blue)]">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <T t={{ bn: "ইমেইল", en: "Email" }} />
                  <br />
                  <span className="font-bold text-[var(--m-ink-heading)]">{institution.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[var(--m-notice-bg)] text-[var(--m-blue)]">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span>
                <T t={{ bn: "ঠিকানা", en: "Address" }} />
                <br />
                <span className="font-bold text-[var(--m-ink-heading)]">
                  <T as="span" t={institution.addressFull} />
                </span>
              </span>
            </li>
          </ul>
        </SectionCard>

        {/* Location map */}
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-sec-purple-from)] to-[var(--m-sec-purple-to)]"
          title={{ bn: "আমাদের অবস্থান", en: "Our Location" }}
          icon={<MapPin />}
        >
          <div className="flex flex-col gap-3.5 p-3.5">
            <Image
              src={locationMap.image}
              alt={locationMap.imageAlt.bn}
              width={352}
              height={136}
              sizes="(max-width: 1279px) 100vw, 540px"
              className="h-auto w-full rounded-md ring-1 ring-slate-200"
            />
            <a
              href={locationMap.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-fit items-center gap-1.5 rounded-md bg-[var(--m-blue)] px-4 text-[14px] font-medium text-white transition-colors hover:bg-[var(--m-blue-strong)]"
            >
              <T t={{ bn: "পথ নির্দেশনা দেখুন", en: "Get directions" }} />
              <ChevronRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </SectionCard>
      </div>
    </InnerPage>
  )
}
