"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { getContent, saveContent } from "@/lib/content-store"
import { requireAdmin } from "@/app/admin/events/actions"

export async function saveDonation(formData: FormData): Promise<void> {
  await requireAdmin()
  const state = await getContent()
  const text = (name: string) => String(formData.get(name) || "").trim()
  await saveContent({ ...state, donation: { published: formData.get("published") === "on", title: { bn: text("titleBn") || "অনুদান", en: text("titleEn") || "Donation" }, description: { bn: text("descriptionBn"), en: text("descriptionEn") }, purpose: { bn: text("purposeBn"), en: text("purposeEn") }, bankName: text("bankName"), branch: text("branch"), accountName: text("accountName"), accountNumber: text("accountNumber"), routingNumber: text("routingNumber"), mobileProvider: text("mobileProvider"), mobileNumber: text("mobileNumber"), instructions: { bn: text("instructionsBn"), en: text("instructionsEn") }, contact: { bn: text("contactBn"), en: text("contactEn") } } })
  revalidatePath("/donate"); revalidatePath("/en/donate")
  redirect("/admin/donation?updated=1")
}
