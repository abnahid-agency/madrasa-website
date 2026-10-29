import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Clock3, GraduationCap, Hash, IdCard, MapPin } from "lucide-react"
import { createPageMetadata } from "@/lib/seo"
import { aboutSection, institution } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"
import { Building } from "lucide-react"

export const metadata: Metadata = createPageMetadata({
  title: "আমাদের সম্পর্কে",
  path: "/about",
})

/* Goal statements summarised from the approved homepage introduction text. */
const goals = [
  { bn: "কুরআন, হাদিস ও ইসলামী শিক্ষার সঠিক প্রশিক্ষণ", en: "Sound training in the Qur'an, Hadith and Islamic education" },
  { bn: "ইসলামী ও আধুনিক শিক্ষার সমন্বয়", en: "A blend of Islamic and modern education" },
  { bn: "নৈতিকতা ও মানবিক মূল্যবোধ চর্চা", en: "Practice of morality and human values" },
  { bn: "সৃজনশীল জ্ঞান ও চরিত্র উভয়ের সমৃদ্ধি", en: "Enriching both creative knowledge and character" },
] as const

const facts = [
  { icon: Clock3, label: { bn: "প্রতিষ্ঠাকাল", en: "Established" }, value: institution.established },
  { icon: IdCard, label: { bn: "EIIN নম্বর", en: "EIIN number" }, value: institution.eiin },
  { icon: Hash, label: { bn: "মাদরাসা কোড", en: "Madrasah code" }, value: institution.madrasahCode },
  { icon: MapPin, label: { bn: "ঠিকানা", en: "Address" }, value: null },
] as const

export default function AboutPage() {
  return (
    <InnerPage
      title={{ bn: "আমাদের সম্পর্কে", en: "About Us" }}
      subtitle={institution.logoAlt}
    >
      <div className="flex flex-col gap-4">
        <SectionCard
          headerClassName="bg-gradient-to-r from-[var(--m-sec-purple-from)] to-[var(--m-sec-purple-to)]"
          title={{ bn: "মাদরাসা পরিচিতি", en: "Introduction" }}
          icon={<Building />}
        >
          <div className="grid gap-3.5 p-3.5 sm:grid-cols-[220px_1fr]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.imageAlt.bn}
              width={508}
              height={340}
              sizes="(max-width: 640px) 100vw, 220px"
              className="h-auto w-full rounded-md object-cover"
            />
            <p className="text-justify text-[14.5px] leading-relaxed text-slate-700">
              <T as="span" t={aboutSection.paragraph} />
            </p>
          </div>
        </SectionCard>

        {/* Facts */}
        <div className="grid gap-3.5 sm:grid-cols-2" id="facts">
          {facts.map((fact) => (
            <div
              key={fact.label.en}
              className="flex items-center gap-3 rounded-md bg-white p-3.5 shadow-sm ring-1 ring-slate-100"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[var(--m-notice-bg)] text-[var(--m-blue)]">
                <fact.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] text-[var(--m-meta)]">
                  <T as="span" t={fact.label} />
                </p>
                <p className="text-[15px] font-bold text-[var(--m-ink-heading)]">
                  {fact.value ?? <T as="span" t={institution.addressShort} />}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Goals (anchor target: /about#goals) */}
        <SectionCard
          headerClassName="bg-[var(--m-panel-green)]"
          title={{ bn: "লক্ষ্য ও উদ্দেশ্য", en: "Mission & Goals" }}
          icon={<GraduationCap />}
        >
          <div id="goals" className="flex flex-col gap-1 p-2 scroll-mt-3">
            {goals.map((goal) => (
              <p
                key={goal.en}
                className="flex min-h-11 items-center gap-2.5 rounded px-2 text-[14px] text-slate-700"
              >
                <CheckCircle2 className="size-4 shrink-0 text-[var(--m-panel-green)]" aria-hidden="true" />
                <T as="span" t={goal} />
              </p>
            ))}
          </div>
        </SectionCard>

        <PendingNote
          text={{
            bn: "মাদরাসার বিস্তারিত ইতিহাস ও অর্জনসমূহ প্রশাসনের প্রদত্ত তথ্য অনুযায়ী এই পৃষ্ঠায় সংযুক্ত হবে।",
            en: "The full history and achievements of the madrasah will be added to this page based on information supplied by the administration.",
          }}
          variant="soon"
        />

        <Link
          href="/administration"
          className="inline-flex h-10 w-fit items-center rounded-md bg-[var(--m-blue)] px-4 text-[14px] font-medium text-white transition-colors hover:bg-[var(--m-blue-strong)]"
        >
          <T t={{ bn: "অধ্যক্ষ ও উপাধ্যক্ষের বাণী পড়ুন", en: "Read the Principal's & Vice Principal's messages" }} />
        </Link>
      </div>
    </InnerPage>
  )
}
