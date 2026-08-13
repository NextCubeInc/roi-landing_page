"use client"

// export default function(){
//   return(
//     <div>
//       {/* HEADER */}
//       <header className="fixed top-0 left-0 right-0 z-50 glass">
//         j
//       </header>

//       {/* S1 */}
//       <section className="flex flex-row relative h-screen">

//         <div className="w-1/4 p-4 relative pl-24">
//         <text className=" text-6xl font-bold absolute top-1/4">
//           TRANSFORME INFLUENCIA EM ROI REAL
//         </text>
//         <p className=" absolute top-2/4">
//           Potencialize o lucro de marcas e influenciadores através de dados reais, transparência total e métricas que importam.
//         </p>

//         <button className=" absolute top-3/4 bg-[#e228e2] px-3 py-2 rounded-xl font-bold">
//           Escalar meu ROI
//         </button>
//         </div>

//         <img src="hero-bg.jpg" alt="hero" className="w-3/4 object-cover"/>

//       </section>

//       {/* S2 */}

//       <section className="bg-zinc-800 py-8 ">
        

//       </section>

//     </div>
//   )
// }



import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/V1 (Roxo)@2x.png";
import icaro from "@/assets/icaro.webp"
import cierro from "@/assets/IMG 8316.jpg"
import next from "@/assets/NextCubeInc.png"
import {
  BarChart3,
  Bell,
  MessageSquare,
  TrendingUp,
  Users,
  Eye,
  ShieldCheck,
  Zap,
  Target,
  ChevronRight,
  CheckCircle2,
  ChevronDown,
  Building2,
  Smartphone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo.src} alt="ROInfluencer" className="h-8 w-8" />
            <span className="font-heading text-xl font-bold text-foreground">
              RO<span className="text-primary">Influencer</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problema" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Problema</a>
            <a href="#solucao" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Solução</a>
            <a href="#funcionalidades" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#planos" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Planos</a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-body text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                Acessar <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 glass rounded-xl border border-border shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <a
                    href="https://business.roinfluencer.com"
                    className="flex items-center gap-3 px-4 py-3 font-body text-sm text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Building2 className="w-4 h-4 text-primary" />
                    <div>
                      <span className="font-medium">Sou Empresa</span>
                      <p className="text-xs text-muted-foreground">Acessar painel business</p>
                    </div>
                  </a>
                  <a
                    href="https://apps.apple.com/br/app/roinfluencer/id6762000187"
                    className="flex items-center gap-3 px-4 py-3 font-body text-sm text-foreground hover:bg-muted/50 transition-colors border-t border-border"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Smartphone className="w-4 h-4 text-primary" />
                    <div>
                      <span className="font-medium">Sou Influenciador</span>
                      <p className="text-xs text-muted-foreground">Baixar o app</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg.src} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <motion.div
          className="relative z-10 container mx-auto px-6 text-center pt-20"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* <motion.div variants={fadeUp} className="inline-block mb-6 px-4 py-1.5 rounded-full glow-border glass">
            <span className="font-body text-sm text-primary">v0.1 — Plataforma de ROI para Influenciadores</span>
          </motion.div> */}
          <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Transforme influência<br />
            em <span className="text-gradient">ROI real</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Potencialize o lucro de marcas e influenciadores através de dados reais, transparência total e métricas que importam.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contato" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg font-semibold hover:opacity-90 transition-opacity glow-box flex items-center gap-2">
              Quero Escalar Meu ROI <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#solucao" className="glow-border px-8 py-4 rounded-lg font-heading text-lg font-medium text-foreground hover:bg-muted transition-colors">
              Ver Como Funciona
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Problema */}
      <section id="problema" className="min-h-screen flex items-center py-24 section-glow" style={{ background: 'hsl(0 0% 95%)' }}>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="font-body text-sm text-primary uppercase tracking-widest">O Problema</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4 text-background">
              Dores que travam o crescimento
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h3 variants={fadeUp} className="font-heading text-2xl font-semibold mb-6 text-primary">Dores do Influenciador</motion.h3>
              {[
                { icon: MessageSquare, title: "Comunicação", desc: "Dificuldade de comunicação direta e organizada com as marcas." },
                { icon: Eye, title: "Visibilidade", desc: "Não consegue visualizar as vendas em tempo real." },
                { icon: Target, title: "Conversão", desc: "Dificuldade em identificar postagens que convertem mais." },
                { icon: ShieldCheck, title: "Transparência", desc: "Falta de acesso aos números reais de conversão." },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-4 mb-6 rounded-xl p-5 bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-background">{item.title}</h4>
                    <p className="font-body text-sm text-background/60 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h3 variants={fadeUp} className="font-heading text-2xl font-semibold mb-6 text-primary">Dores do Empresário</motion.h3>
              {[
                { icon: Users, title: "Demanda", desc: "Necessidade de equipe complexa e de altos salários para gerenciar influenciadores." },
                { icon: BarChart3, title: "Organização", desc: "Dificuldade de organizar campanhas, prazos e comissões." },
                { icon: TrendingUp, title: "Clareza no ROI", desc: "Falta de clareza no ROI por influenciador." },
                { icon: Zap, title: "Previsibilidade", desc: "Falta de previsibilidade e dificuldade para escalar." },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-4 mb-6 rounded-xl p-5 bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-background">{item.title}</h4>
                    <p className="font-body text-sm text-background/60 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="min-h-screen flex items-center py-24" style={{ background: 'hsl(0 0% 90%)' }}>
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="font-body text-sm text-primary uppercase tracking-widest">A Solução</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4 text-background">
              Nossa entrega muda o jogo
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-background/60 mt-4 max-w-2xl mx-auto">
              Uma plataforma capaz de escalar ROI para empresas e influenciadores simultaneamente, criando um ecossistema onde ambos ganham mais.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Bell, title: "Notificações em Tempo Real", desc: "O influenciador recebe no app a conversão no exato momento em que ela acontece." },
              { icon: BarChart3, title: "Análise de Conversão", desc: "Análise detalhada de conversão por conteúdo postado por parte do influenciador." },
              { icon: MessageSquare, title: "Central de Comunicação", desc: "Canal direto entre marca e influenciador para campanhas, briefings e materiais." },
              { icon: TrendingUp, title: "Métricas Detalhadas", desc: "Relatórios completos com foco em ROI, ticket médio, vendas por ação e evolução." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="rounded-2xl p-6 bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-background mb-2">{item.title}</h3>
                <p className="font-body text-sm text-background/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Funcionalidades / Escalabilidade */}
      <section id="funcionalidades" className="min-h-screen flex items-center py-32 section-glow">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center">
            <motion.span variants={fadeUp} className="font-body text-sm text-primary uppercase tracking-widest">Escalabilidade Real</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Gerencie <span className="text-gradient">+1000 influenciadores</span> com menos equipe
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A estrutura permite que o gestor lidere milhares de influenciadores de forma organizada, com menos equipe e mais controle.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "+150", label: "Influenciadores ativos na Olway" },
              { value: "ROI", label: "Métrica soberana de influência" },
              { value: "24/7", label: "Dados em tempo real" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center glass rounded-2xl p-8">
                <div className="font-heading text-5xl font-bold text-gradient mb-3">{stat.value}</div>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="min-h-screen flex items-center py-24" style={{ background: 'hsl(0 0% 95%)' }}>
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="font-body text-sm text-primary uppercase tracking-widest">Planos</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4 text-background">
              Escolha o plano ideal
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <motion.div variants={fadeUp} className="rounded-2xl p-8 flex flex-col bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-background">Basic</h3>
              <div className="mt-4 mb-6">
                <span className="font-heading text-4xl font-bold text-background">R$497</span>
                <span className="font-body text-sm text-background/60">/mês</span>
              </div>
              <ul className="space-y-3 flex-1">
                {["300 vendas/mês", "30 influenciadores", "Painel de vendas individual"].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-sm text-background/70">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"/> {f}
                  </li>
                ))}
              </ul>
              <a href="#contato" className="mt-8 block text-center border border-primary/30 rounded-lg py-3 font-heading font-medium text-background hover:bg-primary/10 transition-colors">
                Começar
              </a>
            </motion.div>

            {/* ROI Pro */}
            <motion.div variants={fadeUp} className="rounded-2xl p-8 flex flex-col shadow-lg border-2 border-primary/30 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <h3 className="font-heading text-xl font-bold text-background">ROI Pro</h3>
              <div className="mt-4 mb-6">
                <span className="font-heading text-4xl font-bold text-gradient">R$1.870</span>
                <span className="font-body text-sm text-background/60">/mês</span>
              </div>
              <ul className="space-y-3 flex-1">
                {["1.500 vendas/mês", "100 influenciadores", "Notificações Push", "2 disparos personalizados/mês", "Painel completo"].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-sm text-background/70">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contato" className="mt-8 block text-center bg-primary text-primary-foreground rounded-lg py-3 font-heading font-medium hover:opacity-90 transition-opacity">
                Começar Agora
              </a>
            </motion.div>

            {/* Elite */}
            <motion.div variants={fadeUp} className="rounded-2xl p-8 flex flex-col bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-[#CD9000]">ROI Elite</h3>
              <div className="mt-4 mb-6">
                <span className="font-heading text-2xl font-bold text-background">Sob consulta</span>
              </div>
              <ul className="space-y-3 flex-1">
                {["Tudo do Pro", "Benefícios exclusivos", "Suporte prioritário", "Personalização completa"].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-sm text-background/70">
                    <CheckCircle2 className="w-4 h-4 text-[#CD9000] mt-0.5 flex-shrink-0"/> {f}
                  </li>
                ))}
              </ul>
              <a href="#contato" className="mt-8 block text-center border border-primary/30 rounded-lg py-3 font-heading font-medium text-background hover:bg-primary/10 transition-colors">
                Falar com Atendente
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Time */}
      <section className="min-h-screen flex items-center py-32 section-glow">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="font-body text-sm text-primary uppercase tracking-widest">O Time</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Nascidos de uma dor real
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Ícaro Lermen", role: "Co-fundador", desc: "Fundador do Team Icaro, influenciador e especialista em performance.", img: icaro},
              { name: "Mateus Cierro", role: "Co-fundador", desc: "Empreendedor, fundador da Olway, gestor de grandes equipes de influenciadores.", img: cierro},
              //{ name: "NextCubeInc", role: "Developer", desc: "Developer da RoInfluencer", img: next},
            ].map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="glass rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-5 flex items-center justify-center">
                  <img src={member.img.src} alt="" className="h-full w-full rounded-full object-cover"/>
                  {/*<span className="font-heading text-2xl font-bold text-primary">{member.name[0]}</span>*/}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="font-body text-sm text-primary mt-1">{member.role}</p>
                <p className="font-body text-sm text-muted-foreground mt-3">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="min-h-screen flex items-center py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 md:p-16 glow-box"
          >
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold">
              Pronto para escalar seu <span className="text-gradient">ROI</span>?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground mt-4 mb-8">
              Entre em contato e descubra como a ROInfluencer pode transformar seus resultados com influenciadores.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Fale Conosco <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo.src} alt="ROInfluencer" className="h-6 w-6" />
            <span className="font-heading text-sm font-semibold text-foreground">
              RO<span className="text-primary">Influencer</span>
            </span>

          </div>
          <a href="/politicas-de-privacidade"><p className="font-body text-xs text-muted-foreground">Politicas de Privacidade</p></a>
          <p className="font-body text-xs text-muted-foreground">© 2026 ROINFLUENCER SERVIÇOS DIGITAIS LTDA. All Rights Reserved</p>
        </div>
        
      </footer>
    </div>
  );
};

export default Index;
