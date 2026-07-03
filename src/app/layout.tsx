import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdadnan.vercel.app"),
  title: {
    default: "Mohammad Adnan | Backend Engineer",
    template: "%s | Mohammad Adnan",
  },
  description: "Backend Engineer with 3 years of experience building scalable backend systems, microservices, APIs, and cloud-native products with Node.js, TypeScript, NestJS, PostgreSQL, MongoDB, Docker, and AWS.",
  keywords: [
    "Mohammad Adnan",
    "Backend Engineer",
    "Node.js Developer",
    "TypeScript",
    "NestJS",
    "REST API",
    "Microservices",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "System Design",
    "Backend Development",
  ],
  authors: [{ name: "Mohammad Adnan" }],
  creator: "Mohammad Adnan",
  applicationName: "Mohammad Adnan Portfolio",
  alternates: {
    canonical: "https://mdadnan.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdadnan.vercel.app",
    title: "Mohammad Adnan | Backend Engineer",
    description: "Senior backend engineer crafting scalable systems, API platforms, and cloud-native services.",
    siteName: "Mohammad Adnan Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mohammad Adnan - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Adnan | Backend Engineer",
    description: "Backend engineer with 3 years of experience building resilient APIs and cloud-native platforms.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Adnan",
    jobTitle: "Backend Engineer",
    description: "Backend engineer specializing in scalable APIs, microservices, and cloud-native systems.",
    url: "https://mdadnan.vercel.app",
    sameAs: [
      "https://github.com/mdadnan2",
      "https://www.linkedin.com/in/mohammadadnan01/",
    ],
    email: "adnanmd2410@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <SmoothScrollProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
