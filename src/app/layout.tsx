import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Muretto — Departamentos en Temozón Norte, Mérida | Desarrolladora Calume",
  description:
    "Muretto: 70 nuevos departamentos de 1 y 2 recámaras en Temozón Norte, Mérida. Alberca, roof top, pet park y más. Desde $2,020,000 MXN. Un desarrollo de Desarrolladora Calume.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
