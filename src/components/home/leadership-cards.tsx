import Image from "next/image"
import Link from "next/link"
import { principalMessage, vicePrincipalMessage, type Leadership } from "@/data/madrasa"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"
import { MessageSquareQuote } from "lucide-react"

/**
 * Leadership message cards. The blue (principal #442BC7) and indigo (vice
 * principal #3D4AEA) header colors follow the approved design. Names are
 * transcribed from the design; see the // VERIFY note in `src/data/madrasa.ts`.
 */
/** A single leadership message card (used standalone and in the grid). */
export function LeadershipCard({ person }: { person: Leadership }) {
  const headerClass =
    person.id === "principal" ? "bg-[var(--m-sec-principal)]" : "bg-[var(--m-sec-vp)]"

  return (
    <SectionCard
      headerClassName={headerClass}
      title={
        person.id === "principal"
          ? { bn: "অধ্যক্ষের বাণী", en: "Principal's Message" }
          : { bn: "উপাধ্যক্ষের বাণী", en: "Vice Principal's Message" }
      }
      icon={<MessageSquareQuote />}
    >
      <div className="p-3.5">
        <div className="flex flex-wrap items-center gap-3.5">
          <Image
            src={person.image}
            alt={person.imageAlt.bn}
            width={240}
            height={240}
            sizes="112px"
            className="size-[112px] shrink-0 rounded-md object-cover object-top ring-1 ring-slate-200"
          />
          <div className="min-w-0 flex-1 basis-52">
            <p className="text-[14px] leading-relaxed text-slate-700 sm:text-justify">
              <T as="span" t={person.message} />
            </p>
            <p className="mt-2.5 text-[15px] font-bold text-[var(--m-ink-heading)]">
              <T as="span" t={person.name} />
              {" — "}
              <T as="span" t={person.nameSuffix} />
            </p>
          </div>
        </div>
        <Link
          href={`/administration#${person.id}`}
          className="mt-3 inline-flex h-8 items-center rounded-md border border-slate-200 px-3.5 text-[13px] font-medium text-[var(--m-blue)] transition-colors hover:border-[var(--m-blue)] hover:bg-[var(--m-notice-bg)]"
        >
          <T as="span" t={{ bn: "সম্পূর্ণ বাণী", en: "Full message" }} />
        </Link>
      </div>
    </SectionCard>
  )
}

export function LeadershipCards() {
  return (
    <div className="grid gap-3.5 md:grid-cols-2">
      <LeadershipCard person={principalMessage} />
      <LeadershipCard person={vicePrincipalMessage} />
    </div>
  )
}
