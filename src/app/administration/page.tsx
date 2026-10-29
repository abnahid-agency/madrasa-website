import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { principalMessage, vicePrincipalMessage } from "@/data/madrasa"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { LeadershipCard } from "@/components/home/leadership-cards"
import { UsersRound } from "lucide-react"
import { SectionCard } from "@/components/home/section-card"

export const metadata: Metadata = createPageMetadata({
  title: "প্রশাসন",
  path: "/administration",
})

export default function AdministrationPage() {
  return (
    <InnerPage
      title={{ bn: "প্রশাসন", en: "Administration" }}
      subtitle={{
        bn: "অধ্যক্ষ, উপাধ্যক্ষ ও প্রতিষ্ঠান পরিচালনার দায়িত্বে নিয়োজিত ব্যক্তিবর্গ",
        en: "The principal, vice principal and the people charged with running the institution",
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Anchor targets from the navigation: /administration#principal, #vice-principal */}
        <div id="principal" className="scroll-mt-4">
          <LeadershipCard person={principalMessage} />
        </div>
        <div id="vice-principal" className="scroll-mt-4">
          <LeadershipCard person={vicePrincipalMessage} />
        </div>

        <SectionCard
          headerClassName="bg-[var(--m-sec-vp)]"
          title={{ bn: "গভর্নিং বডি ও ম্যানেজিং কমিটি", en: "Governing Body & Managing Committee" }}
          icon={<UsersRound />}
        >
          <div id="committee" className="p-3.5">
            <PendingNote
              text={{
                bn: "গভর্নিং বডির সদস্য তালিকা প্রশাসনের অনুমোদনের পর এখানে প্রকাশিত হবে।",
                en: "The list of governing body members will be published here once approved by the administration.",
              }}
              variant="soon"
            />
          </div>
        </SectionCard>
      </div>
    </InnerPage>
  )
}
