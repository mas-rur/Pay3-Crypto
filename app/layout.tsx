import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhitepaperModal from "@/components/whitepaper-modal";
import { WhitepaperProvider } from "@/components/whitepaper-context";
import { site } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.name} \u2014 ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: `${site.name} \u2014 ${site.tagline}`,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    images: ["/images/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.name} \u2014 ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <WhitepaperProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhitepaperModal />
        </WhitepaperProvider>
      </body>
    </html>
  );
}
