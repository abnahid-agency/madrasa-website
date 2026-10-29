import type { Metadata } from "next";
import { createPageMetadata, educationalOrganizationSchema, websiteSchema } from "@/lib/seo";
import { SITE } from "@/lib/seo";
import { NoticeTicker } from "@/components/home/notice-ticker";
import { HeroSlider } from "@/components/home/hero-slider";
import { InstitutionIntro } from "@/components/home/institution-intro";
import { LeadershipCards } from "@/components/home/leadership-cards";
import { InfoPanels } from "@/components/home/info-panels";
import { QuickLinks } from "@/components/home/quick-links";
import { NoticeBoard } from "@/components/home/notice-board";
import { EventsSection } from "@/components/home/events-section";
import { GallerySection } from "@/components/home/gallery-section";

export const metadata: Metadata = createPageMetadata({
  title: SITE.title,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <NoticeTicker />

      <main className="pb-4">
        {/* One shared container wraps the hero and every homepage section so
            they all line up with the header and footer columns. */}
        <div className="site-container px-3 pt-3.5 sm:px-4">
          <HeroSlider />

          <div className="mt-3.5 grid gap-3.5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Left column */}
            <div className="flex min-w-0 flex-col gap-3.5">
              <InstitutionIntro />
              <LeadershipCards />
              <InfoPanels />
            </div>

            {/* Sidebar */}
            <aside aria-label="সাইডবার / Sidebar" className="flex min-w-0 flex-col gap-3.5">
              <QuickLinks />
              <NoticeBoard />
              <EventsSection />
              <GallerySection />
            </aside>
          </div>
        </div>
      </main>

      {/* Structured data: search engines / AEO can resolve the organization and site search. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
    </>
  );
}
