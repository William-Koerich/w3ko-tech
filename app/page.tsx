import { BackgroundFX } from "./components/BackgroundFX";
import { Navbar } from "./components/Navbar";
import { Marquee } from "./components/Marquee";
import { Reveal } from "./components/Reveal";
import { SpotlightCard } from "./components/SpotlightCard";
import { LogoMark, Wordmark } from "./components/Logo";
import {
  IconArrowRight,
  IconCheck,
  IconCloud,
  IconCompass,
  IconFlask,
  IconGlobe,
  IconLayers,
  IconMail,
  IconSmartphone,
  IconSpark,
} from "./components/icons";

const SERVICES = [
  {
    icon: IconGlobe,
    tag: "01 — Web",
    title: "Web",
    description:
      "Sites profissionais, landing pages, e-commerce e plataformas. Sua empresa precisa ser encontrada, compreendida e lembrada.",
  },
  {
    icon: IconLayers,
    tag: "02 — Systems",
    title: "Systems",
    description:
      "Sistemas personalizados e plataformas para empresas. Transformamos processos manuais em sistemas inteligentes.",
  },
  {
    icon: IconSmartphone,
    tag: "03 — Mobile",
    title: "Mobile",
    description:
      "Aplicativos para Android e iOS. Sua solução na mão dos seus clientes, em qualquer lugar.",
  },
  {
    icon: IconSpark,
    tag: "04 — Intelligence",
    title: "Intelligence",
    description:
      "IA, automações, integrações e agentes inteligentes. Automatize tarefas e torne sua empresa mais eficiente.",
  },
];

const W3_MEANING = [
  {
    letter: "W",
    title: "Web",
    description: "Presença digital, sites, plataformas e aplicações que fortalecem sua marca.",
  },
  {
    letter: "M",
    title: "Mobile",
    description: "Aplicativos que colocam sua solução na palma da mão dos seus clientes.",
  },
  {
    letter: "I",
    title: "Intelligence",
    description: "Inteligência artificial, dados e automações que tornam seu negócio mais eficiente.",
  },
];

const METHOD = [
  {
    step: "01",
    title: "Understand",
    verb: "Entender",
    description: "Entendemos o negócio, o contexto e o problema antes de propor qualquer solução.",
  },
  {
    step: "02",
    title: "Design",
    verb: "Planejar",
    description: "Planejamos a arquitetura, a experiência e a melhor rota tecnológica.",
  },
  {
    step: "03",
    title: "Build",
    verb: "Construir",
    description: "Desenvolvemos a tecnologia com qualidade, performance e atenção ao detalhe.",
  },
  {
    step: "04",
    title: "Evolve",
    verb: "Evoluir",
    description: "Acompanhamos, medimos e evoluímos a solução junto com o seu negócio.",
  },
];

const ECOSYSTEM = [
  { icon: IconGlobe, name: "W3 Web", description: "Sites, landing pages e plataformas." },
  { icon: IconLayers, name: "W3 Systems", description: "Sistemas empresariais sob medida." },
  { icon: IconSmartphone, name: "W3 Apps", description: "Aplicativos Android e iOS." },
  { icon: IconSpark, name: "W3 AI", description: "Inteligência artificial e automações." },
  { icon: IconCloud, name: "W3 Cloud", description: "Infraestrutura, APIs e integrações." },
  { icon: IconFlask, name: "W3 Labs", description: "Projetos experimentais e novos produtos." },
];

const VALUES = [
  { title: "Tecnologia com propósito", description: "Não criamos tecnologia porque é moderna. Criamos para resolver problemas." },
  { title: "Simplicidade", description: "Problemas complexos merecem soluções simples." },
  { title: "Evolução constante", description: "A tecnologia muda. Nós também." },
  { title: "Parceria", description: "O sucesso do cliente também é o nosso sucesso." },
  { title: "Qualidade", description: "Cada projeto representa a W3 Tech." },
  { title: "Transparência", description: "Comunicação clara, processos claros, relações claras." },
  { title: "Resultado", description: "Tecnologia precisa gerar impacto real." },
];

const MARQUEE_ITEMS = ["WEB", "MOBILE", "INTELLIGENCE", "SYSTEMS", "AI", "CLOUD", "AUTOMAÇÃO"];

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Navbar />

      <main id="top" className="relative flex-1">
        {/* ---------------- HERO ---------------- */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-muted uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-cyan" />
            Web · Mobile · Intelligence
          </div>

          <div className="relative mb-10">
            <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue/40 via-purple/30 to-transparent blur-3xl" />
            <div className="relative grid h-28 w-28 place-items-center sm:h-32 sm:w-32">
              <span className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-blue/40" />
              <span className="animate-spin-reverse absolute inset-2 rounded-full border border-dashed border-purple/40" />
              <LogoMark className="h-20 w-20 text-4xl shadow-[0_0_60px_-10px_rgba(168,85,247,0.6)] sm:h-24 sm:w-24" />
            </div>
          </div>

          <h1 className="max-w-4xl text-center font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Tecnologia que{" "}
            <span className="text-gradient">move negócios.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg">
            Desenvolvemos sites, sistemas, aplicativos e soluções com Inteligência
            Artificial para empresas que querem crescer, automatizar processos e
            transformar ideias em resultados.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-purple px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(47,107,255,0.7)] transition-transform hover:scale-105"
            >
              Vamos conversar
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              Conheça nossas soluções
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-y text-muted">
            <div className="h-9 w-5 rounded-full border border-line p-1">
              <div className="h-1.5 w-full rounded-full bg-gradient-to-b from-blue to-purple" />
            </div>
          </div>
        </section>

        <Marquee items={MARQUEE_ITEMS} />

        {/* ---------------- SERVICES ---------------- */}
        <section id="solucoes" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue">Soluções</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              O seu negócio tem desafios.
              <br className="hidden sm:block" /> A tecnologia pode resolvê-los.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 90}>
                <SpotlightCard className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/20">
                  <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-cyan ring-1 ring-white/10">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{service.tag}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- W3 MEANING ---------------- */}
        <section className="relative border-y border-line bg-white/[0.015] py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-purple">O significado</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                W3 = Web. Mobile. <span className="text-gradient">Intelligence.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                O <strong className="text-foreground">W</strong> carrega a assinatura por trás da marca. O{" "}
                <strong className="text-foreground">3</strong> representa as três frentes que sustentam
                cada solução que entregamos.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {W3_MEANING.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-white/[0.04] to-transparent p-8">
                    <span className="font-display text-7xl font-bold text-white/[0.06]">
                      {item.letter}
                    </span>
                    <h3 className="-mt-8 font-display text-2xl font-semibold text-gradient">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- METHOD ---------------- */}
        <section id="metodo" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">O método W3</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Entender → Planejar → Construir → Evoluir
            </h2>
          </Reveal>

          <div className="relative mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-line to-transparent lg:block" />
            {METHOD.map((item, i) => (
              <Reveal key={item.step} delay={i * 110}>
                <div className="relative">
                  <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-line bg-background font-display text-sm font-bold text-gradient">
                    {item.step}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {item.title} <span className="text-muted">/ {item.verb}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- DIFFERENTIATOR / QUOTE ---------------- */}
        <section id="sobre" className="relative border-y border-line bg-white/[0.015] py-28 sm:py-36">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <IconCompass className="mx-auto h-8 w-8 text-purple" />
              <p className="mt-8 font-display text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
                “Nós entendemos como sua empresa funciona e desenvolvemos a{" "}
                <span className="text-gradient">tecnologia necessária</span> para ela
                funcionar melhor.”
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-16 grid gap-8 text-left sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-blue">Missão</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Transformar desafios em soluções digitais que ajudam empresas a
                    crescer, evoluir e operar de forma mais inteligente.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-purple">Visão</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Ser reconhecida como uma empresa de tecnologia que cria produtos e
                    soluções capazes de transformar negócios e gerar impacto real.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- ECOSYSTEM ---------------- */}
        <section id="ecossistema" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue">Ecossistema W3</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Uma marca. Várias frentes de tecnologia.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A arquitetura da W3 Tech foi pensada para crescer — hoje, um estúdio
              multidisciplinar; amanhã, um ecossistema de produtos próprios.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <SpotlightCard className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/20">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue/20 to-purple/20 text-cyan ring-1 ring-white/10">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- VALUES ---------------- */}
        <section className="relative border-y border-line bg-white/[0.015] py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-purple">Valores</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                O que guia cada projeto
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} delay={i * 60}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-surface p-5">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <div>
                      <h3 className="font-display text-sm font-semibold">{value.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{value.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section id="contato" className="relative overflow-hidden px-6 py-28 sm:py-36">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue/25 via-purple/20 to-transparent blur-3xl" />
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Vamos transformar sua ideia em{" "}
              <span className="text-gradient">tecnologia.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Conte pra gente o desafio do seu negócio. Nós cuidamos da tecnologia.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contato@w3tech.com.br"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-purple px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(47,107,255,0.7)] transition-transform hover:scale-105"
              >
                <IconMail className="h-4 w-4" />
                contato@w3tech.com.br
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="relative border-t border-line px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-xl" />
            <div>
              <Wordmark className="text-base" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                Tecnologia que move negócios
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <a href="#solucoes" className="hover:text-foreground">Soluções</a>
            <a href="#metodo" className="hover:text-foreground">Método</a>
            <a href="#ecossistema" className="hover:text-foreground">Ecossistema</a>
            <a href="#contato" className="hover:text-foreground">Contato</a>
          </nav>

          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} W3 Tech. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
