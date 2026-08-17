import { Reveal } from "./Reveal";
import { IconPlus } from "./icons";

type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Native <details>/<summary> accordion — accessible and interactive
 * with zero client-side JS. Also emits FAQPage JSON-LD for rich results.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-3">
      {items.map((item, i) => (
        <Reveal key={item.question} delay={i * 60}>
          <details className="group rounded-2xl border border-line bg-surface px-6 py-5 open:pb-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <IconPlus className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
          </details>
        </Reveal>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
