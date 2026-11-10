import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--inter" });

export const metadata = {
  title: "Saf-Bridge · Do Figma pro After Effects em 1 clique",
  description: "Plugin que leva frames do Figma para o After Effects camada por camada, com nomes legíveis e textos editáveis. Menos exportar, mais animar.",
};
export const viewport = { themeColor: "#FF4C80" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
