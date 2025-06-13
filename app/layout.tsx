import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Sai Srikanth Jayaranjan | Computer Science Portfolio",
  description:
    "Professional portfolio of Sai Srikanth Jayaranjan, Computer Science student specializing in Big Data Analysis at SRM IST, graduating in 2028",
  keywords: [
    "portfolio",
    "big data",
    "computer science",
    "student",
    "SRM IST",
    "Sai Srikanth",
    "data analysis",
    "professional",
  ],
  authors: [{ name: "Sai Srikanth Jayaranjan", url: "https://github.com/Saijayaranjan" }],
  creator: "Sai Srikanth Jayaranjan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saijayaranjan.vercel.app",
    title: "Sai Srikanth Jayaranjan | Computer Science Portfolio",
    description:
      "Professional portfolio of Sai Srikanth Jayaranjan, Computer Science student specializing in Big Data Analysis at SRM IST",
    siteName: "Sai Srikanth Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Srikanth Jayaranjan | Computer Science Portfolio",
    description:
      "Professional portfolio of Sai Srikanth Jayaranjan, Computer Science student specializing in Big Data Analysis at SRM IST",
    creator: "@saijayaranjan",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a14] antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
