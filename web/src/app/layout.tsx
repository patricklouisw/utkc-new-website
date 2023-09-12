import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Affiliations } from "@/components/affiliations";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UTKC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        sizes="any"
        href="/favicon/favicon.png"
      />
      <body
        className={poppins.className + "relative"}
        suppressHydrationWarning={true}
      >
        <Providers>
          <Header />
          {children}
          <Affiliations />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
