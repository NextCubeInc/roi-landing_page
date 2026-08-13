import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem de compartilhamento social gerada no build (sem depender de fontes externas).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1200px 600px at 15% 10%, rgba(226,40,226,0.28), transparent 60%), radial-gradient(900px 600px at 100% 100%, rgba(120,40,160,0.25), transparent 55%), #0a0a0a",
          color: "#f2f2f2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 40,
          }}
        >
          RO<span style={{ color: "#e228e2" }}>Influencer</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Transforme influência em ROI real
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#a3a3a3",
            marginTop: 36,
            maxWidth: 860,
          }}
        >
          Dados reais, transparência total e métricas que importam.
        </div>
      </div>
    ),
    { ...size },
  );
}
