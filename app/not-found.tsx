import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundFX } from "./components/BackgroundFX";
import { Navbar } from "./components/Navbar";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { LogoLockup } from "./components/Logo";
import { WHATSAPP_HREF } from "./lib/contact";
import { IconArrowRight, IconWhatsapp } from "./components/icons";

// Next.js automatically injects <meta name="robots" content="noindex" />
// on 404 responses, so no need to set it here too.
export const metadata: Metadata = {
  title: "Página não encontrada — W3KO Tech",
  description: "A página que você procura não existe ou foi movida.",
};

export default function NotFound() {
  return (
    <>
      <BackgroundFX />
      <Navbar />

      <main className="relative flex-1">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Página não encontrada" }]} />

        <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue/25 via-purple/20 to-transparent blur-3xl" />

          <span className="font-display text-8xl font-bold tracking-tight text-gradient sm:text-9xl">
            404
          </span>
          <h1 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-4xl">
            Essa página saiu da rota.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            O endereço que você tentou acessar não existe ou foi movido. Vamos te
            levar de volta pra tecnologia que funciona.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-purple px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(47,107,255,0.7)] transition-transform hover:scale-105"
            >
              Voltar para o início
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              <IconWhatsapp className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-line px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <LogoLockup className="h-7" />
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} W3KO Tech. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
