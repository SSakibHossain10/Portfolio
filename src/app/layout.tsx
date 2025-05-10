import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./app.css";

export const viewport: Viewport = {
  themeColor: "#00bba7",
  colorScheme: "dark",
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 2,
  userScalable: true,
  interactiveWidget: "resizes-visual",
  viewportFit: "auto",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ssakibhossain10.vercel.app"),
  title: "Sakib Hossain | Frontend Developer | React, Next.js Expert",
  description:
    "Hi, I'm Sakib Hossain — a Frontend Developer passionate about building fast, scalable, and high-performance web applications. Specializing in React, Next.js, and modern web technologies. Let's build something great together.",
  openGraph: {
    title: "Sakib Hossain | Frontend Developer | React, Next.js Expert",
    description:
      "Hi, I'm Sakib Hossain — a Frontend Developer passionate about building fast, scalable, and high-performance web applications. Specializing in React, Next.js, and modern web technologies. Let's build something great together.",
    url: "https://ssakibhossain10.vercel.app",
    siteName: "Sakib Hossain Portfolio",
    images: {
      url: "/images/preveiw-image.png",
      width: 1200,
      height: 630,
      alt: "Sakib Hossain Portfolio Website",
      type: "image/png",
    },
    locale: "en_US",
    type: "profile",
    countryName: "Bangladesh",
    determiner: "the",
    emails: "sakibhossain10@gmail.com",
    phoneNumbers: "+8801765626690",
    firstName: "Sakib",
    lastName: "Hossain",
    username: "@SSakibHossain10",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakib Hossain | Frontend Developer | React, Next.js Expert",
    description:
      "Portfolio of Sakib Hossain, a Frontend Developer passionate about building fast, scalable, and high-performance web applications. Specializing in React, Next.js, and modern web technologies. Let's build something great together.",
    images: {
      url: "/images/preveiw-image.png",
      width: 1200,
      height: 630,
      alt: "Sakib Hossain Portfolio Website",
      type: "image/png",
      secureUrl: "https://ssakibhossain10.vercel.app/images/preveiw-image.png",
      username: "@SSakibHossain10",
    },
    creator: "@SSakibHossain10",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Portfolio",
  classification: "Personal Portfolio",
  keywords: [
    "Sakib Hossain",
    "Frontend Developer",
    "Full-stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Programming",
    "Canvas",
  ],
  authors: {
    name: "Sakib Hossain",
    url: "https://www.linkedin.com/in/ssakibhossain10",
  },
  applicationName: "Sakib Hossain Portfolio",
  generator: "Next.js",
  referrer: "no-referrer-when-downgrade",
  creator: "Sakib Hossain",
  publisher: "Sakib Hossain",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sakib Hossain Portfolio",
    startupImage: {
      url: "/apple-touch-icon.png",
    },
  },
  assets: "https://ssakibhossain10.vercel.app/images",
  abstract:
    "Sakib Hossain is a Frontend-focused Full-stack Developer passionate about building fast, scalable, and high-performance web applications. Specializing in React, Next.js, and modern web technologies. Let's build something great together.",
  appLinks: {
    web: {
      url: "https://ssakibhossain10.vercel.app",
    },
  },
  facebook: {
    admins: "SSakibHossain10",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-svw h-lvh flex flex-col bg-primary-gradient text-primary-300 overflow-auto scroll-smooth">
        {children}

        <Analytics />
        <SpeedInsights />

        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5L0D8331Q1"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5L0D8331Q1');`}
        </Script>
      </body>
    </html>
  );
}
