import type { Metadata } from "next"

/**
 * Central SEO / GEO / AEO configuration for
 * Ghuradumbur Hafizia Dakhil Madrasah.
 *
 * Set NEXT_PUBLIC_SITE_URL to the verified production domain before deployment.
 * The proposed domain must be confirmed with BTCL before it is published.
 */

function normalizeSiteUrl(urlStr?: string): string {
  if (!urlStr?.trim()) return "http://localhost:3000"

  const clean = urlStr.trim().replace(/\/+$/, "")
  return clean
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

export const SITE = {
  name: "Ghuradumbur Hafizia Dakhil Madrasah",
  shortName: "Ghuradumbur Madrasah",
  bengaliName: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা",
  title: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা",
  titleTemplate: "%s | ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা",
  description:
    "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসার অফিসিয়াল ওয়েবসাইট। এখানে মাদরাসার পরিচিতি, নোটিশ, ভর্তি তথ্য, ক্লাস ও পরীক্ষার রুটিন, ফলাফল, সংবাদ, অনুষ্ঠান, ডাউনলোড এবং যোগাযোগের তথ্য পাওয়া যাবে।",
  englishDescription:
    "Official website of Ghuradumbur Hafizia Dakhil Madrasah in Ganipur, Shantiganj, Sunamganj, Bangladesh. Find institutional information, notices, admissions, routines, examination results, news, events, downloads, and contact details.",
  locale: "bn_BD",
  alternateLocale: "en_US",
  url: SITE_URL,
  defaultOgImage: "/images/og-madrasah.png",
  keywords: [
    "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা",
    "Ghuradumbur Hafizia Dakhil Madrasah",
    "Ghuradumbur Madrasah",
    "মাদরাসা",
    "দাখিল মাদরাসা",
    "Ganipur Madrasah",
    "Shantiganj Madrasah",
    "Sunamganj Madrasah",
    "মাদরাসার নোটিশ",
    "মাদরাসার ফলাফল",
    "ভর্তি তথ্য",
    "পরীক্ষার রুটিন",
  ],
} as const

/**
 * Institution details.
 * Confirm the email and phone with the madrasa administration before launch.
 * The project brief and BTCL profile show different contact details.
 */
export const INSTITUTION = {
  name: SITE.name,
  alternateName: SITE.bengaliName,
  email: process.env.NEXT_PUBLIC_INSTITUTION_EMAIL || "ghmd139334@gmail.com",
  telephone: process.env.NEXT_PUBLIC_INSTITUTION_PHONE || "+8801712911672",
  address: {
    streetAddress: "Ganipur",
    addressLocality: "Shantiganj",
    addressRegion: "Sunamganj, Sylhet Division",
    postalCode: "",
    addressCountry: "BD",
  },
  fullAddress: "Ganipur, Shantiganj, Sunamganj, Sylhet Division, Bangladesh",
  eiin: "139334",
  madrasahCode: "20931",
  foundingDate: "2007",
} as const

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

type PageMetadataInput = {
  title: string
  description?: string
  path: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
  follow?: boolean
  type?: "website" | "article"
  locale?: string
}

function buildRobots(noIndex = false, follow = true): Metadata["robots"] {
  return {
    index: !noIndex,
    follow: noIndex ? follow : true,
    googleBot: {
      index: !noIndex,
      follow: noIndex ? follow : true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  }
}

export function createPageMetadata({
  title,
  description = SITE.description,
  path,
  keywords = [...SITE.keywords],
  image = SITE.defaultOgImage,
  noIndex = false,
  follow = true,
  type = "website",
  locale = SITE.locale,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: buildRobots(noIndex, follow),
    openGraph: {
      type,
      locale,
      siteName: SITE.name,
      title,
      description,
      url: canonical,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export function createNoIndexMetadata(
  title: string,
  description: string,
  path: string,
  follow = false
): Metadata {
  return createPageMetadata({
    title,
    description,
    path,
    noIndex: true,
    follow,
  })
}

type JsonLd = Record<string, unknown>

/** Educational organization schema for the madrasa. */
export function educationalOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: INSTITUTION.name,
    alternateName: INSTITUTION.alternateName,
    url: SITE_URL,
    logo: absoluteUrl("/images/madrasah-logo.png"),
    image: absoluteUrl(SITE.defaultOgImage),
    email: INSTITUTION.email,
    telephone: INSTITUTION.telephone,
    foundingDate: INSTITUTION.foundingDate,
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "EIIN",
        value: INSTITUTION.eiin,
      },
      {
        "@type": "PropertyValue",
        propertyID: "Madrasah Code",
        value: INSTITUTION.madrasahCode,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: INSTITUTION.address.streetAddress,
      addressLocality: INSTITUTION.address.addressLocality,
      addressRegion: INSTITUTION.address.addressRegion,
      addressCountry: INSTITUTION.address.addressCountry,
    },
  }
}

/** Website identity and search action. Adjust the search URL to match the app route. */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE.name,
    alternateName: SITE.bengaliName,
    url: SITE_URL,
    inLanguage: ["bn", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}

export type ArticleSchemaInput = {
  title: string
  description: string
  path: string
  publishedAt: string
  updatedAt?: string
  image?: string
  authorName?: string
}

/** Use for public news or articles; only pass dates and author details that are verified. */
export function articleSchema(input: ArticleSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.publishedAt,
    ...(input.updatedAt ? { dateModified: input.updatedAt } : {}),
    ...(input.image ? { image: [absoluteUrl(input.image)] } : {}),
    author: {
      "@type": "Organization",
      name: input.authorName || INSTITUTION.name,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "bn",
  }
}

export type EventSchemaInput = {
  name: string
  description: string
  path: string
  startDate: string
  endDate?: string
  locationName?: string
  image?: string
}

/** Use only for confirmed public events and accurate event dates. */
export function eventSchema(input: EventSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    startDate: input.startDate,
    ...(input.endDate ? { endDate: input.endDate } : {}),
    ...(input.image ? { image: [absoluteUrl(input.image)] } : {}),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: input.locationName || INSTITUTION.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: INSTITUTION.address.streetAddress,
        addressLocality: INSTITUTION.address.addressLocality,
        addressRegion: INSTITUTION.address.addressRegion,
        addressCountry: INSTITUTION.address.addressCountry,
      },
    },
    organizer: { "@id": `${SITE_URL}/#organization` },
  }
}

/** A public notice can be marked up as an Article; do not expose private student data. */
export function noticeSchema(input: {
  title: string
  description: string
  path: string
  publishedAt: string
  updatedAt?: string
}): JsonLd {
  return articleSchema({
    title: input.title,
    description: input.description,
    path: input.path,
    publishedAt: input.publishedAt,
    updatedAt: input.updatedAt,
  })
}
