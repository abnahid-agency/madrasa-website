import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import { institution } from "@/data/madrasa"
import { InnerPage } from "@/components/layout/inner-page"
import { PendingNote } from "@/components/layout/pending-note"
import { T } from "@/components/language-provider"

export const metadata: Metadata = createPageMetadata({
  title: "শিক্ষক-শিক্ষিকা",
  path: "/teachers",
})

export default function TeachersPage() {
  return (
    <InnerPage
      title={{ bn: "শিক্ষক-শিক্ষিকা", en: "Teachers" }}
      subtitle={{
        bn: "মাদরাসার অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী",
        en: "The dedicated and experienced teachers of the madrasah",
      }}
    >
      <div className="flex flex-col gap-4">
        <PendingNote
          text={{
            bn: "অনুমোদিত শিক্ষক তালিকা প্রশাসন থেকে পাওয়ার পর নাম, পদবি ও বিষয়সমূহ এই পৃষ্ঠায় প্রকাশিত হবে। শিক্ষকমণ্ডলী সম্পর্কে আপাতত মাদরাসা অফিসে যোগাযোগ করুন।",
            en: "The approved teacher names, designations and subjects will be listed here once received from the administration. Contact the madrasah office for teacher information in the meantime.",
          }}
          variant="soon"
        />
        <a
          href={institution.phoneHref}
          className="inline-flex h-10 w-fit items-center gap-2 rounded-md bg-[var(--m-blue)] px-4 text-[14px] font-medium text-white transition-colors hover:bg-[var(--m-blue-strong)]"
        >
          <T t={{ bn: "অফিসে কল করুন", en: "Call the office" }} />
          {institution.phone}
        </a>
      </div>
    </InnerPage>
  )
}
