import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexone.netlify.app"),
  title: { default: "VertexOne Technologies | Desarrollo de Software y Soluciones Cloud", template: "%s | VertexOne Technologies" },
  description: "Empresa argentina especializada en desarrollo de software empresarial, aplicaciones web y móviles, integración de APIs, infraestructura cloud, automatización y consultoría tecnológica.",
  keywords: ["desarrollo de software", "soluciones cloud", "aplicaciones web", "integración de APIs", "automatización", "Argentina"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type: "website", locale: "es_AR", url: "https://vertexone.netlify.app/", siteName: "VertexOne Technologies", title: "VertexOne Technologies | Desarrollo de Software y Soluciones Cloud", description: "Soluciones digitales orientadas a optimizar procesos, mejorar la conectividad y acompañar el crecimiento empresarial.", images: [{url:"/og.png",width:1200,height:630,alt:"VertexOne Technologies — Soluciones tecnológicas para impulsar tu negocio"}] },
  twitter: { card:"summary_large_image", title:"VertexOne Technologies", description:"Soluciones tecnológicas para impulsar tu negocio", images:["/og.png"] },
  verification: {
    other: {
      "facebook-domain-verification": "opgb74jy07rn1okjpc90oqv6ybgydd",
    },
  },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html> }
