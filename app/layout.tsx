import "./globals.css";

export const metadata = {
  title: "Portafolio CV",
  
  description: "Portafolio profesional interactivo construido con React y Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
