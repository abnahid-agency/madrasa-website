import { inter, solaimanLipi } from "@/fonts/Fonts";
import type { Metadata, Viewport } from "next";
import { SITE, createPageMetadata } from "@/lib/seo";
import { LanguageProvider } from "@/components/language-provider";
import { TopBar } from "@/components/layout/top-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = createPageMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

export const viewport: Viewport = {
  themeColor: "#0D4B98",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${inter.variable} ${solaimanLipi.variable} antialiased`}>
        <LanguageProvider>
          {/* One centered white frame for the entire portal: header chrome,
              page content and footer all live inside it, and the body's
              decorative tapestry shows in the gutters around it on wide
              screens (never on top of content). */}
          <div className="site-frame flex flex-col">
            <TopBar />
            <SiteHeader />
            <Navbar />
            {children}
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
