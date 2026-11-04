/**
 * Backwards-compatible data barrel.
 *
 * New content belongs in its feature folder under `src/data`. Existing imports
 * can continue using `@/data/madrasa` while features are migrated gradually.
 */
export { institution } from "./institution/institution"
export { navItems, footerLinks, type NavChild, type NavItem } from "./navigation/navigation"
export { heroSlides, type HeroSlide } from "./hero/hero"
export { tickerNotice, notices, type NoticeItem } from "./notices/notices"
export { aboutSection } from "./about/about"
export { principalMessage, vicePrincipalMessage, type Leadership } from "./leadership/leadership"
export { quickLinks, type QuickLink } from "./sidebar/sidebar"
export { events, type EventItem, type Competition, type CompetitionResult } from "./events/events"
export { galleryImages, galleryAlbums, type GalleryImage, type GalleryPhoto, type GalleryAlbum } from "./gallery/gallery"
export { infoPanels, type InfoPanel } from "./info-panels/info-panels"
export { locationMap, socialLinks } from "./contact/contact"
