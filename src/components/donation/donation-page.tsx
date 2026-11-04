import { Banknote, CircleHelp, Landmark, Smartphone } from "lucide-react"
import { T } from "@/components/language-provider"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { SectionCard } from "@/components/home/section-card"
import type { DonationInfo } from "@/lib/content-store"

export function DonationPage({ donation }: { donation: DonationInfo }) {
  return <InnerPage title={donation.title} subtitle={{ bn: "মাদরাসার উন্নয়নে আপনার সহায়তা", en: "Support the development of the madrasah" }}>
    {!donation.published ? <PendingNote variant="soon" text={{ bn: "অনুদানের যাচাইকৃত তথ্য প্রশাসনের অনুমোদনের পর প্রকাশ করা হবে।", en: "Verified donation information will be published after approval by the administration." }} /> : <div className="flex flex-col gap-4">
      {donation.description.bn || donation.description.en ? <SectionCard title={{ bn: "অনুদান সম্পর্কে", en: "About donation" }} icon={<Banknote />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="space-y-3 p-4 text-sm leading-7 text-slate-700"><T t={donation.description} />{donation.purpose.bn || donation.purpose.en ? <p><strong><T t={{ bn: "উদ্দেশ্য: ", en: "Purpose: " }} /></strong><T t={donation.purpose} /></p> : null}</div></SectionCard> : null}
      {donation.bankName || donation.accountName || donation.accountNumber ? <SectionCard title={{ bn: "ব্যাংক হিসাব", en: "Bank account" }} icon={<Landmark />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><dl className="grid gap-3 p-4 text-sm sm:grid-cols-2">{[["Bank name", donation.bankName], ["Branch", donation.branch], ["Account name", donation.accountName], ["Account number", donation.accountNumber], ["Routing number", donation.routingNumber]].filter(([, value]) => value).map(([label, value]) => <div key={label}><dt className="text-xs text-[var(--m-meta)]">{label}</dt><dd className="font-medium text-[var(--m-ink-heading)]">{value}</dd></div>)}</dl></SectionCard> : null}
      {donation.mobileProvider || donation.mobileNumber ? <SectionCard title={{ bn: "মোবাইল ব্যাংকিং", en: "Mobile banking" }} icon={<Smartphone />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="p-4 text-sm"><p className="font-medium">{donation.mobileProvider}</p><p className="mt-1">{donation.mobileNumber}</p></div></SectionCard> : null}
      {donation.instructions.bn || donation.instructions.en ? <SectionCard title={{ bn: "অনুদান প্রদানের নির্দেশনা", en: "Donation instructions" }} icon={<CircleHelp />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="p-4 text-sm leading-7 text-slate-700"><T t={donation.instructions} /></div></SectionCard> : null}
      {donation.contact.bn || donation.contact.en ? <p className="text-sm text-[var(--m-meta)]"><strong><T t={{ bn: "যোগাযোগ: ", en: "Contact: " }} /></strong><T t={donation.contact} /></p> : null}
    </div>}
  </InnerPage>
}
