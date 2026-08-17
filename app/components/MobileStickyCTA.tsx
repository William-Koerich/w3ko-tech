import { IconWhatsapp } from "./icons";
import { WHATSAPP_HREF } from "../lib/contact";

/**
 * Fixed bottom action bar, mobile only. Desktop already keeps the CTA
 * visible in the navbar, so this only renders below the md breakpoint.
 * Pairs with the `pb-20 md:pb-0` spacer in the root layout so it never
 * covers the footer's last line.
 */
export function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/85 px-4 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-r from-blue to-purple">
          <IconWhatsapp className="h-4 w-4" />
        </span>
        Chamar no WhatsApp
      </a>
    </div>
  );
}
