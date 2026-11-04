import type { Metadata } from "next"
import { DonationPage } from "@/components/donation/donation-page"
import { getContent } from "@/lib/content-store"
import { createPageMetadata } from "@/lib/seo"

export const instant = false
export const metadata: Metadata = createPageMetadata({ title: "অনুদান", path: "/donate" })
export default async function DonateRoute() { const { donation } = await getContent(); return <DonationPage donation={donation} /> }
