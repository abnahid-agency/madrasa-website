import Link from "next/link"
import { HeartHandshake } from "lucide-react"
import { T } from "@/components/language-provider"
import { SectionCard } from "@/components/home/section-card"

export function DonationSection() {
  return <SectionCard title={{ bn: "মাদরাসায় অনুদান", en: "Support the madrasah" }} icon={<HeartHandshake />} headerClassName="bg-gradient-to-r from-[var(--m-cardblue-from)] to-[var(--m-cardblue-to)]"><div className="p-3"><p className="text-sm leading-6 text-[var(--m-meta)]"><T t={{ bn: "মাদরাসার উন্নয়নে সহায়তার জন্য যাচাইকৃত অনুদান তথ্য দেখুন।", en: "See verified donation information to support the development of the madrasah." }} /></p><Link href="/donate" className="mt-3 inline-flex rounded bg-[var(--m-blue)] px-3 py-2 text-sm font-medium text-white hover:bg-[var(--m-blue-strong)]"><T t={{ bn: "অনুদান তথ্য দেখুন", en: "View donation information" }} /></Link></div></SectionCard>
}
