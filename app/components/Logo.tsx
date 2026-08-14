import Image from "next/image";

const SYMBOL_RATIO = 523 / 477;
const LOCKUP_RATIO = 956 / 261;

/** The simplified "W3 / KO" stacked mark, no ribbon icon. */
export function LogoSymbol({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-w3ko-simplificada.png"
      alt="W3KO Tech"
      width={Math.round(200 * SYMBOL_RATIO)}
      height={200}
      priority={priority}
      className={`w-auto object-contain ${className}`}
    />
  );
}

/** The full horizontal lockup: ribbon mark + "W3KO TECH" wordmark. */
export function LogoLockup({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-w3ko.png"
      alt="W3KO Tech"
      width={Math.round(80 * LOCKUP_RATIO)}
      height={80}
      priority={priority}
      className={`w-auto object-contain ${className}`}
    />
  );
}
