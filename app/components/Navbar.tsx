"use client";

import { useEffect, useState } from "react";
import { LogoLockup } from "./Logo";
import { IconMenu, IconX } from "./icons";

const LINKS = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodo", label: "Método" },
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#sobre", label: "Sobre" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-line bg-background/70 px-4 py-2.5 shadow-[0_0_40px_-10px_rgba(47,107,255,0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent px-4 py-2.5"
          }`}
        >
          <a href="#top" className="flex items-center">
            <LogoLockup className="h-7 sm:h-8" priority />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full bg-gradient-to-r from-blue to-purple px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105 md:inline-block"
          >
            Vamos conversar
          </a>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-foreground md:hidden"
          >
            {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-line bg-background/90 p-4 backdrop-blur-xl md:hidden">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-blue to-purple px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Vamos conversar
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
