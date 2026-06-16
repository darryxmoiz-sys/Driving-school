import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileBottomBar from "@/components/MobileBottomBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.driveconfidentmanchester.co.uk"),
  title: {
    default: "Drive Confident Manchester | DVSA Approved Driving School",
    template: "%s | Drive Confident Manchester",
  },
  description:
    "DVSA Approved driving instructor in Manchester. Manual & automatic lessons, intensive courses, and theory test support. First lesson from £20. Book today!",
  keywords: [
    "driving lessons Manchester",
    "driving school Manchester",
    "DVSA approved instructor Manchester",
    "intensive driving course Manchester",
    "automatic driving lessons Manchester",
    "theory test help Manchester",
    "learn to drive Manchester",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.driveconfidentmanchester.co.uk",
    siteName: "Drive Confident Manchester",
    title: "Drive Confident Manchester | DVSA Approved Driving School",
    description:
      "Learn to drive with confidence in Manchester. DVSA Approved ADI, 96% first-time pass rate, flexible lessons & intensive courses.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Confident Manchester",
    description: "DVSA Approved driving lessons in Manchester. Book your first lesson for just £20.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Drive Confident Manchester",
  description: "DVSA Approved driving school in Manchester offering manual and automatic driving lessons.",
  url: "https://www.driveconfidentmanchester.co.uk",
  telephone: "+44-161-000-1234",
  email: "hello@driveconfidentmanchester.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manchester City Centre",
    addressLocality: "Manchester",
    addressRegion: "Greater Manchester",
    postalCode: "M1 1AA",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 53.4808, longitude: -2.2426 },
  areaServed: [
    "Manchester", "Salford", "Stockport", "Oldham", "Trafford",
    "Rochdale", "Bury", "Bolton", "Wigan", "Tameside",
  ],
  priceRange: "££",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "08:00", closes: "18:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312", bestRating: "5" },
  hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "DVSA Approved Driving Instructor (ADI)" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#003366" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mobile-safe-bottom">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
