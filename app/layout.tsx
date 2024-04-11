import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { AI } from "./action";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";

const meta = {
  title: "Praxis Research",
  description:
    "Praxis Research is a research engine that provides answers to your questions.",
};
export const metadata: Metadata = {
  ...meta,
  title: {
    default: "Praxis Research",
    template: `%s - answer engine`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    ...meta,
    card: "summary_large_image",
    site: "@vercel",
  },
  openGraph: {
    ...meta,
    locale: "en-US",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
        >
          <Toaster />
          <AI>
            <Providers
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex flex-col flex-1  px-4">{children}</main>
              </div>
            </Providers>
          </AI>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}

export const runtime = "edge";
