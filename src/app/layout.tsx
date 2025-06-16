import type { Metadata } from "next";
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J. Brescia Travel Co. | From Dream To Destination",
  description: "Discover stunning travel destinations and plan your next adventure - from Deam to Destination -  with expert tips and guides.",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

        {/* Primary Meta Tags */}
          <meta name="title" content="J. Brescia Travel Co. | From Dream To Destination" />
          <meta name="description" content="Discover stunning travel destinations and plan your next adventure - from Dream to Destination." />

        {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jbtravel.co/" />
          <meta property="og:title" content="J. Brescia Travel Co. | From Dream To Destination" />
          <meta property="og:description" content="Discover stunning travel destinations and plan your next adventure - from Dream to Destination." />
          <meta property="og:image" content="https://www.jbtravel.co/hawaii.jpg" />

        {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://jbtravel.co/" />
          <meta name="twitter:title" content="J. Brescia Travel Co. | From Dream To Destination" />
          <meta name="twitter:description" content="Discover stunning travel destinations and plan your next adventure - from Dream to Destination." />
          <meta name="twitter:image" content="https://www.jbtravel.co/hawaii.jpg" />

        
        {/* Favicon */}
          <link rel="icon" href="/favicon.png" />

        {/* Google Analytics */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=G-Z73P6DTN48"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z73P6DTN48');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100dvh]`}>
        {children}
      </body>
    </html>
  );
}
