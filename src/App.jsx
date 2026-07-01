import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bus,
  CheckCircle2,
  CloudCog,
  Droplets,
  ExternalLink,
  Landmark,
  LayoutDashboard,
  Library,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Recycle,
  ScanFace,
  ShieldCheck,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

import { getSystemBySlug, systems } from "./data/systems.js";
import {
  privacyPolicyContent,
  privacyPolicyHeadings,
  privacyPolicySummary,
  privacyPolicyTitle,
} from "./data/privacyPolicy.js";
import heroImage from "./assets/hero-bzs-cloud.png";
import logo from "./assets/logo-bzs.png";
import logoWhite from "./assets/logo-bzs-white.png";

const WHATSAPP_PHONE = "554532842212";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/kKkZ9n5iDq3MT7oMA";

const whatsappMessages = {
  header:
    "Olá! Encontrei a empresa de vocês no Google e gostaria de saber mais sobre as suas soluções.",
  contact:
    "Olá! Encontrei a empresa de vocês no Google e gostaria de conversar com a equipe da BZS.",
  systemDemo: (systemName) =>
    `Olá! Encontrei a empresa de vocês no Google e gostaria de falar mais sobre o sistema ${systemName}.`,
  systemCta: (systemName) =>
    `Olá! Encontrei a empresa de vocês no Google e gostaria de ver o sistema ${systemName} funcionando.`,
};

function getWhatsAppHref(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

const navItems = [
  { to: "/#solucoes", label: "Soluções" },
  { to: "/#diferenciais", label: "Diferenciais" },
  { to: "/#metodo", label: "Método" },
  { to: "/#contato", label: "Contato" },
];

const footerPageLinks = [
  { to: "/", label: "Início" },
  { to: "/#solucoes", label: "Soluções" },
  { to: "/#diferenciais", label: "Diferenciais" },
  { to: "/#metodo", label: "Método" },
  { to: "/#contato", label: "Contato" },
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
];

const iconMap = {
  bus: Bus,
  droplets: Droplets,
  library: Library,
  recycle: Recycle,
  selfie: ScanFace,
};

const features = [
  {
    title: "Servidor em nuvem",
    text: "Portabilidade, disponibilidade e evolução contínua para que o sistema acompanhe a operação.",
    icon: CloudCog,
  },
  {
    title: "Praticidade e segurança",
    text: "Fluxos mais simples, dados protegidos e menos dependência de controles manuais.",
    icon: ShieldCheck,
  },
  {
    title: "Gestão pública",
    text: "Soluções voltadas ao aperfeiçoamento da administração municipal e seus serviços.",
    icon: Landmark,
  },
];

const steps = [
  {
    number: "01",
    title: "Mapeamento",
    text: "Entendimento dos fluxos, usuários, indicadores e pontos de atrito.",
  },
  {
    number: "02",
    title: "Implantação",
    text: "Configuração do sistema, organização de dados e preparação da equipe.",
  },
  {
    number: "03",
    title: "Evolução",
    text: "Acompanhamento para ajustes, novas necessidades e melhoria contínua.",
  },
];

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 18);

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);

    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <nav className="nav-shell" aria-label="Navegação principal">
        <Link className="brand" to="/" aria-label="BZS Tecnologia">
          <img src={logo} alt="BZS Tecnologia" />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <Menu aria-hidden="true" />
          <span className="sr-only">Abrir menu</span>
        </button>

        <div
          className={`nav-links${isMenuOpen ? " is-open" : ""}`}
          id="menu-principal"
        >
          {navItems.map((item) => (
            <Link
              to={item.to}
              key={item.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          className="nav-cta"
          href={getWhatsAppHref(whatsappMessages.header)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" />
          Falar com a BZS
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div
        className="hero-bg"
        role="img"
        aria-label="Ambiente digital com painéis de gestão em nuvem"
        style={{ "--hero-image": `url(${heroImage})` }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow">Tecnologia para gestão com clareza</p>
        <h1 id="hero-title">BZS Tecnologia</h1>
        <p className="hero-copy">
          Sistemas em nuvem para municípios, cooperativas e organizações que
          precisam controlar processos, transformar dados em decisão e entregar
          serviços com mais segurança.
        </p>

        <div className="hero-actions" aria-label="Ações principais">
          <a className="btn btn-primary" href="#solucoes">
            <LayoutDashboard aria-hidden="true" />
            Conhecer soluções
          </a>
          <a
            className="btn btn-secondary"
            href="mailto:bzs@bzs.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <Mail aria-hidden="true" />
            Enviar mensagem
          </a>
        </div>

        <dl className="hero-proof" aria-label="Áreas de atuação">
          <div>
            <dt>5</dt>
            <dd>frentes de software</dd>
          </div>
          <div>
            <dt>Nuvem</dt>
            <dd>acesso seguro e escalável</dd>
          </div>
          <div>
            <dt>PR</dt>
            <dd>atendimento em Marechal C. Rondon</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section
      className="section solutions-section"
      id="solucoes"
      aria-labelledby="solutions-title"
    >
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Soluções</p>
          <h2 id="solutions-title">Sistemas pensados para operações reais</h2>
          <p>
            Produtos que organizam informações, padronizam fluxos e facilitam o
            acompanhamento de ponta a ponta.
          </p>
        </div>

        <div className="solution-grid">
          {systems.map((system) => {
            const Icon = iconMap[system.iconKey];

            return (
              <article
                className={`solution-card${system.slug === "selfie" ? " featured" : ""}`}
                key={system.slug}
              >
                <div className="icon-box">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{system.title}</h3>
                <p>{system.summary}</p>
                <Link to={`/sistemas/${system.slug}`}>
                  Ver página
                  <ArrowRight aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section
      className="section feature-strip"
      id="diferenciais"
      aria-labelledby="features-title"
    >
      <div className="section-inner">
        <div className="section-heading compact">
          <p className="section-kicker">Diferenciais</p>
          <h2 id="features-title">
            Infraestrutura e experiência para crescer com segurança
          </h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="feature-item" key={feature.title}>
                <Icon aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section
      className="section method-section"
      id="metodo"
      aria-labelledby="method-title"
    >
      <div className="section-inner method-grid">
        <div className="method-copy">
          <p className="section-kicker">Método</p>
          <h2 id="method-title">
            Da rotina atual ao sistema que faz sentido para a equipe
          </h2>
          <p>
            Um bom software nasce quando a operação é entendida por inteiro. A
            BZS combina diagnóstico, configuração e acompanhamento para entregar
            sistemas que entram no dia a dia com naturalidade.
          </p>
          <a className="text-link" href="#contato">
            Conversar sobre um projeto
          </a>
        </div>

        <ol className="timeline">
          {steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="section contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="section-inner contact-grid">
        <div>
          <p className="section-kicker">Contato</p>
          <h2 id="contact-title">Vamos modernizar a sua gestão?</h2>
          <p>
            Fale com a equipe da BZS para conhecer as soluções, solicitar uma
            demonstração ou discutir uma necessidade específica da sua
            organização.
          </p>
        </div>

        <div className="contact-panel" aria-label="Informações de contato">
          <a
            className="contact-row"
            href={getWhatsAppHref(whatsappMessages.contact)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            <span>+55 (45) 3284-2212</span>
          </a>
          <a
            className="contact-row"
            href="mailto:bzs@bzs.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <Mail aria-hidden="true" />
            <span>bzs@bzs.com.br</span>
          </a>
          <a
            className="contact-row"
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" />
            <span>
              Avenida Maripá 577, Centro, Marechal Cândido Rondon - PR
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main id="conteudo">
      <Hero />

      <section className="section intro-band" aria-label="Resumo">
        <div className="section-inner intro-grid">
          <div>
            <p className="section-kicker">O que muda na prática</p>
            <h2>
              Menos planilhas soltas. Mais controle, rastreabilidade e tempo
              para decidir.
            </h2>
          </div>
          <p>
            A BZS cria plataformas para rotinas complexas de operação pública e
            privada: reciclagem, transporte escolar, bibliotecas, medições
            individualizadas e diagnósticos municipais.
          </p>
        </div>
      </section>

      <Solutions />
      <Features />
      <Method />
      <Contact />
    </main>
  );
}

function SystemPage() {
  const { slug } = useParams();
  const system = getSystemBySlug(slug);

  if (!system) {
    return <Navigate to="/" replace />;
  }

  const Icon = iconMap[system.iconKey];
  const uniqueGallery = system.gallery.filter(
    (image) => image !== system.secondaryImage,
  );
  const mediaItems = [
    ...(system.videoUrl ? [{ type: "video", src: system.videoUrl }] : []),
    ...(system.secondaryImage
      ? [
          {
            type: "image",
            src: system.secondaryImage,
            alt: `Detalhe visual do ${system.title}`,
          },
        ]
      : []),
    ...uniqueGallery.map((image, index) => ({
      type: "image",
      src: image,
      alt: `${system.title} imagem ${index + 1}`,
    })),
  ];
  const hasContextSection =
    system.contextTitle || system.contextText || system.contextPoints?.length;

  return (
    <main id="conteudo" className="system-page">
      <section className="system-hero" aria-labelledby="system-title">
        <div className="section-inner system-hero-grid">
          <div className="system-hero-copy">
            <Link className="back-link" to="/#solucoes">
              <ArrowLeft aria-hidden="true" />
              Voltar para soluções
            </Link>
            <div className="system-icon-title">
              <span className="system-icon">
                <Icon aria-hidden="true" />
              </span>
              <p className="eyebrow">Sistema BZS</p>
            </div>
            <h1 id="system-title">{system.title}</h1>
            <p>{system.headline}</p>

            <div className="system-tags" aria-label="Temas do sistema">
              {system.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="hero-actions">
              {system.systemUrl ? (
                <a
                  className="btn btn-primary"
                  href={system.systemUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink aria-hidden="true" />
                  Acessar sistema
                </a>
              ) : null}
              <a
                className="btn btn-secondary"
                href={getWhatsAppHref(
                  whatsappMessages.systemDemo(system.title),
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                Solicitar demonstração
              </a>
            </div>
          </div>

          <div className="system-visual">
            <img src={system.image} alt={`Tela do ${system.title}`} />
          </div>
        </div>
      </section>

      <section className="section system-summary">
        <div className="section-inner system-summary-grid">
          <div>
            <p className="section-kicker">Visão geral</p>
            <h2>O que o {system.title} resolve</h2>
          </div>
          <div>
            <p>{system.intro}</p>
            <dl className="system-facts">
              <div>
                <dt>Indicado para</dt>
                <dd>{system.audience}</dd>
              </div>
              <div>
                <dt>Formato</dt>
                <dd>Sistema em nuvem, com acesso seguro e suporte da BZS.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section system-modules" aria-labelledby="modules-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Recursos</p>
            <h2 id="modules-title">Funcionalidades principais</h2>
            <p>{system.summary}</p>
          </div>

          <div className="module-grid">
            {system.modules.map((module) => (
              <article className="module-card" key={module.title}>
                <CheckCircle2 aria-hidden="true" />
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="section-inner outcomes-grid">
          <div>
            <p className="section-kicker">Benefícios</p>
            <h2>Impacto esperado na operação</h2>
          </div>
          <ul className="outcome-list">
            {system.benefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {hasContextSection || mediaItems.length ? (
        <section
          className="section media-section"
          aria-labelledby="media-title"
        >
          <div
            className={`section-inner context-layout${
              mediaItems.length ? "" : " context-layout-text-only"
            }`}
          >
            <div className="context-copy">
              <p className="section-kicker">Detalhes</p>
              <h2 id="media-title">
                {system.contextTitle || "Como o sistema entra no dia a dia"}
              </h2>
              {system.contextText ? <p>{system.contextText}</p> : null}
              {system.contextPoints?.length ? (
                <ul className="context-list">
                  {system.contextPoints.map((point) => (
                    <li key={point}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {mediaItems.length ? (
              <div
                className={`media-showcase${
                  mediaItems.length === 1 ? " media-showcase-single" : ""
                }`}
              >
                {mediaItems.map((item) =>
                  item.type === "video" ? (
                    <div className="video-frame" key={item.src}>
                      <iframe
                        src={item.src}
                        title={`Vídeo do ${system.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <span>
                        <Play aria-hidden="true" />
                        Vídeo institucional
                      </span>
                    </div>
                  ) : (
                    <figure className="system-shot" key={item.src}>
                      <img src={item.src} alt={item.alt} />
                    </figure>
                  ),
                )}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section system-cta">
        <div className="section-inner cta-panel">
          <div>
            <p className="section-kicker">Próximo passo</p>
            <h2>Quer ver o {system.title} funcionando?</h2>
            <p>
              A equipe da BZS pode apresentar a solução, entender o cenário da
              sua organização e indicar o melhor caminho de implantação.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href={getWhatsAppHref(whatsappMessages.systemCta(system.title))}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            Falar com a BZS
          </a>
        </div>
      </section>
    </main>
  );
}

function PrivacyContent() {
  const blocks = privacyPolicyContent
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
  const content = [];
  let bullets = [];

  const flushBullets = () => {
    if (!bullets.length) {
      return;
    }

    content.push(
      <ul className="privacy-list" key={`list-${content.length}`}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  blocks.forEach((block) => {
    if (block.startsWith("* ")) {
      bullets.push(block.slice(2));
      return;
    }

    flushBullets();

    if (privacyPolicyHeadings.includes(block)) {
      content.push(<h2 key={block}>{block}</h2>);
      return;
    }

    content.push(<p key={block}>{block}</p>);
  });

  flushBullets();

  return <article className="privacy-content">{content}</article>;
}

function PrivacyPage() {
  return (
    <main id="conteudo" className="privacy-page">
      <section className="privacy-hero" aria-labelledby="privacy-title">
        <div className="section-inner">
          <Link className="privacy-back-link" to="/">
            <ArrowLeft aria-hidden="true" />
            Voltar ao início
          </Link>
          <p className="eyebrow">Legal e privacidade</p>
          <h1 id="privacy-title">{privacyPolicyTitle}</h1>
          <p>
            Como a BZS trata dados pessoais no site, aplicativos, sistemas em
            nuvem e canais digitais relacionados aos seus serviços.
          </p>
        </div>
      </section>

      <section className="section privacy-section">
        <div className="section-inner privacy-layout">
          <aside className="privacy-overview" aria-label="Resumo da política">
            {privacyPolicySummary.map((item) => (
              <div className="privacy-summary-card" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
            <div className="privacy-note">
              <h2>Observação</h2>
              <p>
                Contratos, termos de uso e documentos específicos de cada
                cliente podem complementar esta Política.
              </p>
            </div>
          </aside>

          <PrivacyContent />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-company">
          <Link className="footer-brand" to="/" aria-label="BZS Tecnologia">
            <img src={logoWhite} alt="BZS Tecnologia" />
          </Link>
          <p>
            Sistemas em nuvem para gestão pública, cooperativas, transporte,
            bibliotecas e operações que precisam de mais controle.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Páginas do site">
          <h2>Páginas</h2>
          {footerPageLinks.map((item) => (
            <Link to={item.to} key={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="footer-nav" aria-label="Páginas dos sistemas">
          <h2>Sistemas</h2>
          {systems.map((system) => (
            <Link to={`/sistemas/${system.slug}`} key={system.slug}>
              {system.title}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <h2>Contato</h2>
          <a
            href={getWhatsAppHref(whatsappMessages.contact)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:bzs@bzs.com.br" target="_blank" rel="noreferrer">
            bzs@bzs.com.br
          </a>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
            Avenida Maripá 577, Centro
          </a>

          <div className="footer-links" aria-label="Redes sociais">
            <a
              href="https://www.facebook.com/bzstecnologia"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/bzs-tecnologia/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/bzstecnologia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Todos os direitos reservados.</p>
        <p>CNPJ 01.151.247/0001-71 BZS INFORMATICA LTDA</p>
      </div>
    </footer>
  );
}

function AppShell() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sistemas/:slug" element={<SystemPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
