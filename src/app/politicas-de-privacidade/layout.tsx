import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Roinfluencer coleta, usa e protege os dados de usuários da plataforma web e do aplicativo mobile, em conformidade com a LGPD.",
  alternates: {
    canonical: "/politicas-de-privacidade",
  },
  openGraph: {
    type: "article",
    title: "Política de Privacidade | ROInfluencer",
    description:
      "Como a Roinfluencer coleta, usa e protege os dados dos usuários, em conformidade com a LGPD.",
    url: "/politicas-de-privacidade",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
