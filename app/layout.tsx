import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Óptica Nueva Imagen',
  description: 'Landing page de Óptica Nueva Imagen – salud visual con estilo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-darkGray font-sans">
        {children}
      </body>
    </html>
  );
}
