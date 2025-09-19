import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKG Sons Infra - Leading Civil Engineering & Infrastructure Company",
  description: "Building tomorrow's infrastructure today. AKG Sons Infra is a premier civil engineering and construction company delivering world-class roads, bridges, industrial projects, and urban development solutions across India.",
  keywords: "civil engineering, infrastructure, construction, roads, highways, bridges, industrial projects, urban development, water management, environmental projects, India",
  authors: [{ name: "AKG Sons Infra" }],
  creator: "AKG Sons Infra",
  publisher: "AKG Sons Infra",
  robots: "index, follow",
  openGraph: {
    title: "AKG Sons Infra - Leading Civil Engineering & Infrastructure Company",
    description: "Building tomorrow's infrastructure today with 25+ years of engineering excellence, innovation, and commitment to quality.",
    url: "https://akgsonsinfra.com",
    siteName: "AKG Sons Infra",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AKG Sons Infra - Infrastructure Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKG Sons Infra - Leading Civil Engineering & Infrastructure Company",
    description: "Building tomorrow's infrastructure today with 25+ years of engineering excellence.",
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
