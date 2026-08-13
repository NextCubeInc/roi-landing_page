/**
 * Configuração central de SEO / branding.
 * Reutilizada por layout, sitemap, robots e JSON-LD.
 *
 * ⚠️  Ajuste NEXT_PUBLIC_SITE_URL (ou o fallback abaixo) para o domínio real
 * de produção. É a base de todas as URLs absolutas (canonical, OG, sitemap).
 */
export const siteConfig = {
  name: "ROInfluencer",
  // Título usado como default da home e no template das demais páginas.
  title: "ROInfluencer — Transforme influência em ROI real",
  description:
    "Potencialize o lucro de marcas e influenciadores através de dados reais, transparência total e métricas que importam.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://roinfluencer.com.br").replace(
    /\/$/,
    "",
  ),
  locale: "pt_BR",
  // Palavras-chave da landing (não faz milagre em SEO, mas não custa).
  keywords: [
    "marketing de influência",
    "influenciadores",
    "ROI",
    "cupons rastreáveis",
    "campanhas de influência",
    "métricas de influência",
    "e-commerce",
    "Nuvemshop",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
