import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "W3 Tech — Tecnologia que move negócios",
  description:
    "W3 Tech desenvolve sites, sistemas, aplicativos e soluções com Inteligência Artificial para empresas que querem crescer, automatizar processos e transformar ideias em resultados.",
  keywords: [
    "W3 Tech",
    "desenvolvimento de sites",
    "sistemas personalizados",
    "aplicativos mobile",
    "inteligência artificial",
    "automação",
    "software house",
  ],
  openGraph: {
    title: "W3 Tech — Tecnologia que move negócios",
    description:
      "Web. Mobile. Intelligence. Soluções digitais sob medida para empresas que querem crescer através da tecnologia.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Marks JS as active so scroll-reveal can hide content before
            animating it in. No-JS visitors never get this class, so
            .reveal sections stay fully visible instead of stuck hidden. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        {children}
      </body>
    </html>
  );
}
