import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import { cache } from "react";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Create T3 Turbo",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Create T3 Turbo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jullerino",
    creator: "@jullerino",
  },
};

// Lazy load headers
const getHeaders = cache(async () => headers());

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={["font-sans", fontSans.variable].join(" ")}>
        <TRPCReactProvider headersPromise={getHeaders()}>
          {props.children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
