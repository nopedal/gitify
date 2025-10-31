import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "gitify.dev - Git-powered CMS for Agencies",
  description: "Let your clients edit their website content like Notion, while everything stays in Git. One flat price, unlimited sites, 5-minute setup.",
  keywords: ["CMS", "Git", "GitHub", "GitLab", "Notion", "content management", "agencies", "web development", "Next.js"],
  authors: [{ name: "gitify.dev" }],
  creator: "gitify.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gitify.dev",
    title: "gitify.dev - Git-powered CMS for Agencies",
    description: "Notion meets GitHub. Built for agencies.",
    siteName: "gitify.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "gitify.dev - Git-powered CMS for Agencies",
    description: "Notion meets GitHub. Built for agencies.",
    creator: "@gitifydev",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}