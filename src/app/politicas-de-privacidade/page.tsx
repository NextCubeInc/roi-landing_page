"use client";

import * as React from "react";
import { motion } from "motion/react";
import logo from "@/assets/V1 (Roxo)@2x.png";
import {
  ShieldCheck,
  Database,
  Share2,
  Lock,
  Clock,
  UserCog,
  Cookie,
  Baby,
  Mail,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const sections = [
  { id: "s1", num: "01", icon: ShieldCheck, title: "Quem somos" },
  { id: "s2", num: "02", icon: Database,   title: "Dados que coletamos" },
  { id: "s3", num: "03", icon: UserCog,    title: "Como usamos seus dados" },
  { id: "s4", num: "04", icon: Share2,     title: "Compartilhamento" },
  { id: "s5", num: "05", icon: Lock,       title: "Segurança" },
  { id: "s6", num: "06", icon: Clock,      title: "Retenção" },
  { id: "s7", num: "07", icon: UserCog,    title: "Seus direitos (LGPD)" },
  { id: "s8", num: "08", icon: Cookie,     title: "Cookies" },
  { id: "s9", num: "09", icon: Baby,       title: "Menores de idade" },
  { id: "s10", num: "10", icon: Mail,      title: "Contato" },
];

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ── Navbar ─────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo.src} alt="ROInfluencer" className="h-8 w-8" />
            <span className="font-heading text-xl font-bold text-foreground">
              RO<span className="text-primary">Influencer</span>
            </span>
          </a>
          <a
            href="/"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            ← Voltar ao início
          </a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-24 pb-16 section-glow">
        <motion.div
          className="relative z-10 container mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="font-body text-sm text-primary uppercase tracking-widest"
          >
            Legal &amp; Privacidade
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight mt-4 mb-6"
          >
            Política de <span className="text-gradient">Privacidade</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Válida para a plataforma web e o aplicativo mobile Roinfluencer.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            {["Plataforma Web", "Aplicativo Mobile", "Atualizada em Abril de 2025"].map((tag) => (
              <span
                key={tag}
                className="inline-block glass glow-border rounded-full px-4 py-1.5 font-body text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── TOC ────────────────────────────────────── */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-6"
            >
              Conteúdo
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="glass rounded-2xl p-6 grid grid-cols-2 md:grid-cols-5 gap-3"
            >
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/10 transition-colors group text-center"
                >
                  <s.icon className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-body text-xs text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                    {s.title}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro card ─────────────────────────────── */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass rounded-2xl p-8 glow-box border border-primary/20"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              Esta Política de Privacidade descreve como a{" "}
              <strong className="text-foreground">Roinfluencer</strong> coleta, usa e protege
              as informações dos usuários da plataforma web (acessada por empresas e lojistas) e
              do aplicativo mobile (utilizado por influenciadores). Ao usar qualquer um de nossos
              serviços, você concorda com as práticas descritas aqui.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── S1 — Quem somos ────────────────────────── */}
      <PolicySection id="s1" num="01" icon={ShieldCheck} title="Quem somos">
        <p className="font-body text-muted-foreground">
          A <strong className="text-foreground">Roinfluencer</strong> é uma plataforma de marketing
          de influência que conecta empresas e lojistas a influenciadores por meio de cupons de
          desconto rastreáveis. Nossa tecnologia permite que negócios criem campanhas, acompanhem
          vendas geradas por influenciadores e gerenciem comissões de forma automatizada.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <InfoCard
            icon="🖥️"
            label="Painel Web"
            desc="Voltado para empresas e lojistas que gerenciam campanhas, integram lojas (ex.: Nuvemshop) e acompanham relatórios de vendas e ROI."
          />
          <InfoCard
            icon="📱"
            label="Aplicativo Mobile"
            desc="Voltado para influenciadores que visualizam seus cupons, acompanham comissões e gerenciam seu perfil."
          />
        </div>
      </PolicySection>

      {/* ── S2 — Dados ─────────────────────────────── */}
      <PolicySection id="s2" num="02" icon={Database} title="Dados que coletamos" alt>
        <SubHeading>Influenciadores (app mobile)</SubHeading>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <InfoCard icon="👤" label="Dados de perfil"
            desc="Nome, e-mail, telefone, foto de perfil (avatar), código de convite e chave PIX para repasse de comissões." />
          <InfoCard icon="🔑" label="Credenciais de acesso"
            desc="E-mail e senha armazenados de forma criptografada via Supabase Auth. Nunca armazenamos senhas em texto puro." />
          <InfoCard icon="📊" label="Dados de desempenho"
            desc="Cupons utilizados, pedidos gerados, valor total de vendas rastreadas, comissões acumuladas e ranking em campanhas." />
          <InfoCard icon="🔔" label="Token de notificação"
            desc="Token de push (Expo) para alertas de novas comissões e atualizações de campanha. Não coletamos localização GPS." />
        </div>

        <SubHeading className="mt-8">Empresas / Lojistas (plataforma web)</SubHeading>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <InfoCard icon="🏪" label="Dados da empresa"
            desc="Nome, CNPJ, e-mail de contato e tokens de integração com plataformas de e-commerce (ex.: Nuvemshop)." />
          <InfoCard icon="🛒" label="Dados de pedidos"
            desc="Pedidos recebidos via webhook (número, valor, produtos, status), cupons aplicados e comissões calculadas." />
          <InfoCard icon="📣" label="Dados de campanhas"
            desc="Nome, período, regras de comissão e participantes de cada campanha criada na plataforma." />
        </div>

        <SubHeading className="mt-8">Coletados automaticamente</SubHeading>
        <BulletList items={[
          "Logs de acesso (IP, data/hora, ações) para fins de segurança e auditoria.",
          "Dados de uso da plataforma coletados de forma agregada e anonimizada.",
        ]} />
      </PolicySection>

      {/* ── S3 — Como usamos ───────────────────────── */}
      <PolicySection id="s3" num="03" icon={UserCog} title="Como usamos seus dados">
        <BulletList items={[
          "Prestação do serviço: criar e gerenciar contas, processar pedidos e calcular comissões automaticamente.",
          "Rastreamento de vendas: associar pedidos de lojas integradas (via Nuvemshop webhook) aos cupons e influenciadores corretos.",
          "Comunicação: enviar notificações push e e-mails transacionais sobre novas vendas, comissões e atualizações de conta.",
          "Analytics: gerar dashboards de desempenho para empresas (ROI, ranking, evolução de vendas) e influenciadores (comissões, pedidos gerados).",
          "Segurança: detectar e prevenir fraudes, acessos não autorizados e uso indevido da plataforma.",
          "Melhoria do produto: analisar padrões de uso de forma agregada para aprimorar a experiência.",
          "Obrigações legais: cumprir exigências fiscais, contábeis e regulatórias aplicáveis.",
        ]} />
      </PolicySection>

      {/* ── S4 — Compartilhamento ──────────────────── */}
      <PolicySection id="s4" num="04" icon={Share2} title="Compartilhamento de dados" alt>
        <div className="glass rounded-2xl p-6 border border-primary/20 glow-box mb-6">
          <p className="font-body text-muted-foreground">
            <strong className="text-foreground">Não vendemos seus dados pessoais a terceiros.</strong>{" "}
            O compartilhamento ocorre apenas nas situações abaixo:
          </p>
        </div>
        <SubHeading>Dentro da plataforma</SubHeading>
        <p className="font-body text-muted-foreground mt-2">
          Empresas podem visualizar nome, foto e métricas dos influenciadores vinculados às suas
          campanhas. Influenciadores <strong className="text-foreground">não</strong> têm acesso a dados
          financeiros ou operacionais das empresas.
        </p>

        <SubHeading className="mt-6">Prestadores de serviço</SubHeading>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <InfoCard icon="🗄️" label="Supabase"
            desc="Banco de dados, autenticação, armazenamento de arquivos e Edge Functions. Infraestrutura AWS." />
          <InfoCard icon="🛍️" label="Nuvemshop"
            desc="Integração de e-commerce para recebimento de eventos de pedidos via webhook." />
          <InfoCard icon="📲" label="Expo / FCM"
            desc="Envio de notificações push no aplicativo mobile." />
        </div>

        <SubHeading className="mt-6">Obrigação legal</SubHeading>
        <p className="font-body text-muted-foreground mt-2">
          Podemos divulgar informações quando exigido por lei, ordem judicial ou autoridade governamental
          competente, sempre nos limites do estritamente necessário.
        </p>
      </PolicySection>

      {/* ── S5 — Segurança ─────────────────────────── */}
      <PolicySection id="s5" num="05" icon={Lock} title="Segurança dos dados">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "🔐", label: "Senhas criptografadas", desc: "Gerenciadas pelo Supabase Auth com hash bcrypt — jamais armazenamos em texto puro." },
            { icon: "🌐", label: "HTTPS / TLS", desc: "Toda comunicação entre cliente e servidor trafega via protocolo seguro." },
            { icon: "🛡️", label: "Row Level Security", desc: "Cada usuário só acessa os próprios dados via políticas RLS no banco de dados." },
            { icon: "🔑", label: "Tokens protegidos", desc: "Tokens de integração (ex.: Nuvemshop) armazenados com segurança e nunca expostos no frontend." },
            { icon: "👥", label: "Acesso restrito", desc: "Acesso administrativo ao banco limitado à equipe técnica autorizada com MFA." },
            { icon: "💾", label: "Backups automáticos", desc: "Backups gerenciados pela infraestrutura Supabase com retenção configurada." },
          ].map((item) => (
            <InfoCard key={item.label} icon={item.icon} label={item.label} desc={item.desc} />
          ))}
        </div>
        <div className="mt-6 glass rounded-2xl p-6 border border-primary/20">
          <p className="font-body text-sm text-muted-foreground">
            Embora adotemos as melhores práticas disponíveis, nenhum sistema é 100% inviolável.
            Em caso de incidente que afete seus dados, notificaremos você e as autoridades competentes
            conforme exigido pela LGPD.
          </p>
        </div>
      </PolicySection>

      {/* ── S6 — Retenção ──────────────────────────── */}
      <PolicySection id="s6" num="06" icon={Clock} title="Retenção de dados" alt>
        <BulletList items={[
          "Conta ativa: dados mantidos enquanto a conta estiver ativa.",
          "Após encerramento: dados anonimizados ou excluídos em até 90 dias após solicitação, salvo obrigação legal.",
          "Histórico de pedidos: retidos pelo período mínimo exigido pela legislação contábil e fiscal (5 anos).",
          "Logs de segurança: mantidos por até 12 meses para fins de auditoria.",
        ]} />
      </PolicySection>

      {/* ── S7 — LGPD ──────────────────────────────── */}
      <PolicySection id="s7" num="07" icon={UserCog} title="Seus direitos (LGPD)">
        <p className="font-body text-muted-foreground mb-6">
          Em conformidade com a{" "}
          <strong className="text-foreground">Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>,
          você tem os seguintes direitos em relação aos seus dados pessoais:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "👁️", label: "Acesso", desc: "Solicitar confirmação da existência e acesso aos dados que temos sobre você." },
            { icon: "✏️", label: "Correção", desc: "Solicitar a correção de dados incompletos, inexatos ou desatualizados." },
            { icon: "🗑️", label: "Exclusão", desc: "Solicitar a exclusão de dados desnecessários ou coletados em desconformidade com a LGPD." },
            { icon: "📦", label: "Portabilidade", desc: "Solicitar seus dados em formato estruturado para outro fornecedor de serviço." },
            { icon: "🚫", label: "Revogação", desc: "Revogar o consentimento a qualquer momento, sem prejuízo ao tratamento anterior." },
            { icon: "ℹ️", label: "Informação", desc: "Saber com quais entidades seus dados foram compartilhados." },
          ].map((item) => (
            <InfoCard key={item.label} icon={item.icon} label={item.label} desc={item.desc} />
          ))}
        </div>
        <p className="font-body text-sm text-muted-foreground mt-6">
          Para exercer qualquer desses direitos, entre em contato pelo e-mail indicado na seção 10.
          Responderemos em até <strong className="text-foreground">15 dias úteis</strong>.
        </p>
      </PolicySection>

      {/* ── S8 — Cookies ───────────────────────────── */}
      <PolicySection id="s8" num="08" icon={Cookie} title="Cookies e rastreamento" alt>
        <SubHeading>Plataforma web</SubHeading>
        <p className="font-body text-muted-foreground mt-2">
          Utilizamos cookies essenciais para manter a sessão autenticada. Não utilizamos cookies de
          rastreamento publicitário nem ferramentas de analytics de terceiros que identifiquem você
          individualmente.
        </p>
        <BulletList className="mt-4" items={[
          "Cookies de sessão: necessários para manter o login ativo (gerados pelo Supabase Auth via PKCE).",
          "Cookies de preferência: armazenam configurações de interface (ex.: estado do menu lateral).",
        ]} />

        <SubHeading className="mt-6">Aplicativo mobile</SubHeading>
        <p className="font-body text-muted-foreground mt-2">
          O aplicativo não utiliza cookies. O token de autenticação é armazenado de forma segura no
          dispositivo. Utilizamos apenas identificadores técnicos necessários ao funcionamento do app
          (ex.: token de push notification).
        </p>
      </PolicySection>

      {/* ── S9 — Menores ───────────────────────────── */}
      <PolicySection id="s9" num="09" icon={Baby} title="Menores de idade">
        <p className="font-body text-muted-foreground">
          A Roinfluencer é destinada exclusivamente a pessoas maiores de{" "}
          <strong className="text-foreground">18 anos</strong>. Não coletamos intencionalmente dados
          pessoais de menores de idade. Caso identifiquemos que um menor cadastrou-se na plataforma,
          removeremos os dados imediatamente.
        </p>
        <p className="font-body text-muted-foreground mt-4">
          Se você acredita que um menor forneceu dados à nossa plataforma, entre em contato pelo canal
          indicado na seção 10.
        </p>
      </PolicySection>

      {/* ── S10 — Atualizações ─────────────────────── */}
      <PolicySection id="s10" num="10" icon={Mail} title="Atualizações desta política" alt>
        <p className="font-body text-muted-foreground">
          Esta Política pode ser atualizada periodicamente para refletir mudanças nos nossos serviços
          ou na legislação aplicável. Quando houver alterações relevantes, notificaremos por e-mail ou
          por aviso em destaque na plataforma. A data da última atualização está sempre indicada no
          topo desta página.
        </p>
      </PolicySection>

      {/* ── CTA / Contato ──────────────────────────── */}
      <section className="py-24 section-glow">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="glass rounded-3xl p-12 md:p-16 glow-box text-center"
          >
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold">
              Dúvidas sobre <span className="text-gradient">privacidade</span>?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground mt-4 mb-8">
              Nossa equipe está pronta para responder sobre proteção de dados,
              solicitações LGPD ou qualquer outra questão.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:privacidade@roinfluencer.com.br"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              privacidade@roinfluencer.com.br <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo.src} alt="ROInfluencer" className="h-6 w-6" />
            <span className="font-heading text-sm font-semibold text-foreground">
              RO<span className="text-primary">Influencer</span>
            </span>
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Roinfluencer. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ── helpers ──────────────────────────────────────── */

function PolicySection({
  id, num, icon: Icon, title, children, alt,
}: {
  id: string;
  num: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 ${alt ? "bg-muted/20" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10 pb-6 border-b border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-body text-xs text-primary uppercase tracking-widest mb-0.5">{num}</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>{children}</motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SubHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`font-heading text-sm font-semibold text-primary uppercase tracking-widest ${className}`}>
      {children}
    </h3>
  );
}

function InfoCard({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <div className="flex gap-4 glass rounded-xl p-5">
      <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="font-heading text-sm font-semibold text-foreground">{label}</p>
        <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}