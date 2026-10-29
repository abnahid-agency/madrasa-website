import Image from "next/image"
import Link from "next/link"
import { aboutSection } from "@/data/madrasa"
import { UI } from "@/lib/i18n"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"
import { Building } from "lucide-react"

const title = {
  bn: "মাদরাসা পরিচিতি",
  en: "About the Madrasah",
}

/** Purple-gradient "মাদরাসা পরিচিতি" card: building photo left, intro text right. */
export function InstitutionIntro() {
  return (
    <SectionCard
      headerClassName="bg-gradient-to-r from-[var(--m-sec-purple-from)] to-[var(--m-sec-purple-to)]"
      title={title}
      icon={<Building />}
    >
      <div className="grid gap-3.5 p-3.5 sm:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr]">
        <Image
          src={aboutSection.image}
          alt={aboutSection.imageAlt.bn}
          width={508}
          height={340}
          sizes="(max-width: 640px) 100vw, 260px"
          className="h-auto w-full rounded-md object-cover"
        />
        <div className="min-w-0">
          <p className="text-justify text-[14px] leading-relaxed text-slate-700 sm:text-[14.5px]">
            <T as="span" t={aboutSection.paragraph} />
          </p>
          <Link
            href="/about"
            className="mt-3 inline-flex h-9 items-center rounded-md bg-[var(--m-blue)] px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-[var(--m-blue-strong)]"
          >
            <T as="span" t={UI.readMore} />
          </Link>
        </div>
      </div>
    </SectionCard>
  )
}
