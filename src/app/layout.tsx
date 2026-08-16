import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SiteAlert from "@/components/layout/SiteAlert";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unitedtrainingfacility.com"),

  title: {
    default: "United Training Facility | Wrestling Training in Athens, PA",
    template: "%s | United Training Facility",
  },

  description:
    "United Training Facility provides wrestling training, coaching, camps, clinics, and athlete development in Athens, Pennsylvania.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unitedtrainingfacility.com",
    siteName: "United Training Facility",
    title: "United Training Facility | Wrestling Training in Athens, PA",
    description:
      "Wrestling training, coaching, camps, clinics, and athlete development in Athens, Pennsylvania.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "United Training Facility",
  url: "https://unitedtrainingfacility.com",
  description:
    "United Training Facility provides wrestling training, coaching, camps, clinics, and athlete development in Athens, Pennsylvania.",
  sport: "Wrestling",
  address: {
    "@type": "PostalAddress",
    streetAddress: "310 S Main St",
    addressLocality: "Athens",
    addressRegion: "PA",
    postalCode: "18810",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/unitedtrainingfacility?igsh=MXdlb2R1Z2pqYTJmcg==&igsi=MXdlb2R1Z2pqYTJmcg==",
    "https://www.facebook.com/p/United-Training-Facility-100092605913030/",
    "https://www.tiktok.com/@united.training.facility?_r=1&_t=ZP-98ueayII3CR",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <ScrollToTop />
        <div className="sticky top-0 z-[70]">
          <SiteAlert />
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
