import type { Metadata } from "next";
import { BackgroundFX } from "../components/BackgroundFX";
import { Navbar } from "../components/Navbar";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Reveal } from "../components/Reveal";
import { LogoLockup } from "../components/Logo";
import { WHATSAPP_HREF } from "../lib/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade — W3KO Tech",
  description:
    "Saiba como a W3KO Tech trata cookies e os dados de quem visita o site e entra em contato pelo WhatsApp.",
};

const LAST_UPDATED = "17 de agosto de 2026";

const SECTIONS = [
  {
    title: "1. Dados coletados por este site",
    body: (
      <>
        <p>
          Este site é uma página institucional: não usamos formulários que
          armazenam dados nem ferramentas de analytics ou rastreamento. Não
          coletamos, armazenamos ou processamos dados pessoais de quem apenas
          navega pelas páginas.
        </p>
        <p>
          Como a maioria dos serviços de hospedagem na internet, o provedor
          deste site pode registrar automaticamente informações técnicas
          básicas de acesso — como endereço IP e navegador — para fins de
          segurança e funcionamento do serviço.
        </p>
      </>
    ),
  },
  {
    title: "2. Cookies",
    body: (
      <p>
        Este site usa um único cookie, estritamente necessário, para lembrar
        que você já viu e aceitou o aviso de cookies exibido na primeira
        visita. Esse cookie não rastreia sua navegação, não é compartilhado
        com terceiros e expira automaticamente em até 180 dias. Você pode
        apagá-lo a qualquer momento nas configurações do seu navegador — o
        aviso volta a aparecer na próxima visita.
      </p>
    ),
  },
  {
    title: "3. Contato pelo WhatsApp",
    body: (
      <p>
        Ao clicar em “Chamar no WhatsApp”, você é redirecionado para fora
        deste site, para o aplicativo WhatsApp. Essa conversa é processada
        pelo WhatsApp/Meta, sujeita à política de privacidade deles. As
        informações que você compartilhar (nome, telefone, mensagens) são
        usadas pela W3KO Tech exclusivamente para responder ao seu contato e
        avaliar o seu projeto.
      </p>
    ),
  },
  {
    title: "4. Seus direitos",
    body: (
      <>
        <p>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você pode
          solicitar, a qualquer momento:
        </p>
        <ul className="mt-3 flex list-none flex-col gap-2">
          {[
            "Confirmação de que existe tratamento dos seus dados",
            "Acesso aos dados que você nos enviou",
            "Correção de dados incompletos ou desatualizados",
            "Eliminação dos dados tratados a partir do seu contato",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-blue to-purple" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "5. Alterações desta política",
    body: (
      <p>
        Podemos atualizar este documento quando o site ou a forma de contato
        mudarem. A data da última atualização está sempre indicada no topo
        desta página.
      </p>
    ),
  },
  {
    title: "6. Fale com a gente",
    body: (
      <p>
        Para dúvidas sobre esta política ou sobre os seus dados, fale com a
        gente pelo{" "}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-line underline-offset-4 hover:decoration-foreground"
        >
          WhatsApp
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <BackgroundFX />
      <Navbar />

      <main className="relative flex-1">
        <Breadcrumbs
          items={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]}
        />

        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue">Legal</span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-sm text-muted">Última atualização: {LAST_UPDATED}</p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-10">
            {SECTIONS.map((section, i) => (
              <Reveal key={section.title} delay={i * 70}>
                <h2 className="font-display text-lg font-semibold">{section.title}</h2>
                <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted">
                  {section.body}
                </div>
              </Reveal>
            ))}
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
