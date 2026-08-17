"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_NAME = "w3ko_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 dias

function hasConsentCookie() {
  return document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

function acceptCookie() {
  document.cookie = `${COOKIE_NAME}=accepted; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

/**
 * Cookie consent banner. Renders nothing during SSR/first paint to avoid a
 * flash — the effect checks for the consent cookie on mount and only then
 * decides whether to show it, so there's no hydration mismatch either.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // document.cookie only exists client-side, so this can't be computed in
    // a useState initializer without desyncing from the SSR-rendered output
    // (server always renders "hidden"). Deferring to an effect keeps the
    // first paint mismatch-free at the cost of one extra render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!hasConsentCookie()) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 border-t border-line bg-background/95 backdrop-blur-xl md:bottom-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-4 sm:flex-row sm:justify-between">
        <p className="text-center text-sm leading-relaxed text-muted sm:text-left">
          Usamos um cookie só para lembrar da sua escolha sobre este aviso —
          nenhuma navegação é rastreada. Saiba mais na{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-medium text-foreground underline decoration-line underline-offset-4 hover:decoration-foreground"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          onClick={() => {
            acceptCookie();
            setVisible(false);
          }}
          className="shrink-0 rounded-full bg-gradient-to-r from-blue to-purple px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
