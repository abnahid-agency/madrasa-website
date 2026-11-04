import type { LocalizedText } from "@/lib/i18n";

export const locationMap = {
  image: "/images/location-map.jpg",
  imageAlt: {
    bn: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসার অবস্থান মানচিত্র",
    en: "Location map of Ghuradumbur Hafizia Dakhil Madrasah",
  } satisfies LocalizedText,
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Ghuradumbur+Hafizia+Dakhil+Madrasah+Sunamganj",
}

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
] as const
