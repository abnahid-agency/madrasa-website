import Image from "next/image"
import Link from "next/link"
import { footerLinks, institution, locationMap, socialLinks } from "@/data/madrasa"
import { UI, type LocalizedText } from "@/lib/i18n"
import { T } from "@/components/language-provider"
import { FooterYear } from "@/components/layout/footer-year"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6"
import type { IconType } from "react-icons"

const socialIcons: Record<(typeof socialLinks)[number]["id"], IconType> = {
  facebook: FaFacebookF,
  youtube: FaYoutube,
  instagram: FaInstagram,
}

const headings = {
  links: { bn: "ওয়েবসাইট লিংক", en: "Website Links" } satisfies LocalizedText,
  contact: { bn: "যোগাযোগ", en: "Contact" } satisfies LocalizedText,
  location: { bn: "আমাদের অবস্থান", en: "Our Location" } satisfies LocalizedText,
}

function FooterHeading({ text }: { text: LocalizedText }) {
  return (
    <h2 className="mb-4 text-[16px] font-bold text-white">
      <T t={text} />
    </h2>
  )
}

/**
 * Dark blue patterned footer: identity block, important links, contact details
 * and the location map.
 */
export function SiteFooter() {
  return (
    <footer className="relative bg-[var(--m-footer)] text-white">
      {/* subtle geometric pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2'%3E%3Ccircle cx='28' cy='28' r='13'/%3E%3Cpath d='M28 2v10M28 44v10M2 28h10M44 28h10'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="site-container relative grid gap-9 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.15fr_0.72fr_0.95fr_1.18fr]">
        {/* Identity */}
        <div className="flex gap-4">
          <Image
            src={institution.logo}
            alt={institution.logoAlt.bn}
            width={84}
            height={84}
            className="size-[84px] shrink-0 rounded-full bg-white p-1"
          />
          <div className="min-w-0">
            <p className="text-[19px] font-bold leading-snug">
              <T as="span" t={{ bn: institution.bengaliName, en: institution.englishName }} />
            </p>
            <p className="text-[13.5px] text-white/85">
              <T as="span" t={{ bn: institution.englishName, en: institution.bengaliName }} />
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/75">
              <T t={institution.addressShort} />
            </p>
            <p className="text-[13.5px] text-white/75">
              EIIN: {institution.eiin} | <T t={{ bn: "মাদরাসা কোড", en: "Madrasah code" }} />:{" "}
              {institution.madrasahCode}
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id]
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — ${institution.englishName}`}
                    className="grid size-9 place-items-center rounded-md bg-[var(--m-social)] text-white transition-colors hover:bg-[var(--m-blue)]"
                  >
                    <Icon className="size-4" aria-label={social.label} role="img" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Important links */}
        <div>
          <FooterHeading text={headings.links} />
          <ul className="space-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-1.5 text-[13.5px] text-white/85 transition-colors hover:text-white"
                >
                  <ChevronRight
                    className="size-3.5 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  <T t={item.label} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <FooterHeading text={headings.contact} />
          <ul className="space-y-3.5 text-[13.5px] text-white/85">
            <li>
              <a
                href={institution.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 opacity-80" aria-hidden="true" />
                {institution.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${institution.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 opacity-80" aria-hidden="true" />
                {institution.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 opacity-80" aria-hidden="true" />
              <T t={institution.addressFull} />
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <FooterHeading text={headings.location} />
          <Link
            href={locationMap.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-md ring-1 ring-white/25 transition-opacity hover:opacity-90"
          >
            <Image
              src={locationMap.image}
              alt={locationMap.imageAlt.bn}
              width={352}
              height={136}
              sizes="(max-width: 1024px) 100vw, 352px"
              className="h-auto w-full max-w-[352px]"
            />
          </Link>
          <a
            href={locationMap.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-9 items-center gap-2 rounded-md bg-[var(--m-blue)] px-4 text-[13.5px] text-white transition-colors hover:bg-[var(--m-blue-strong)]"
          >
            <T t={UI.getDirections} />
            <ChevronRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[var(--m-footer-deep)]">
        <div className="site-container flex flex-wrap items-center justify-between gap-2 px-4 py-3.5 text-[12.5px] text-white/75 sm:px-6">
          <p>
            © <FooterYear />{" "}
            <T t={{ bn: institution.bengaliName, en: institution.englishName }} /> |{" "}
            <T t={UI.allRightsReserved} />।
          </p>
          <p>
            <T t={UI.developedBy} />
          </p>
        </div>
      </div>
    </footer>
  )
}
