import type { LocalizedText } from "@/lib/i18n";

export const institution = {
  bengaliName: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসা" as const,
  englishName: "Ghuradumbur Hafizia Dakhil Madrasah" as const,
  logo: "/images/madrasah-logo.png" as const,
  logoAlt: {
    bn: "ঘোড়াডুম্বুর হাফিজিয়া দাখিল মাদরাসার প্রতীক",
    en: "Emblem of Ghuradumbur Hafizia Dakhil Madrasah",
  } satisfies LocalizedText,
  phone: "+8801309-139334" as const,
  phoneHref: "tel:+8801309139334" as const,
  email: "ghdm139334@gmail.com" as const,
  addressShort: { bn: "গণিপুর, শান্তিগঞ্জ, সুনামগঞ্জ", en: "Ganipur, Shantiganj, Sunamganj" } satisfies LocalizedText,
  addressFull: { bn: "গণিপুর, শান্তিগঞ্জ, সুনামগঞ্জ, বাংলাদেশ", en: "Ganipur, Shantiganj, Sunamganj, Bangladesh" } satisfies LocalizedText,
  eiin: "139334" as const,
  madrasahCode: "20931" as const,
  established: "2007" as const,
}
