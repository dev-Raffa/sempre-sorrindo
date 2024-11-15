import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './styles/globals.css';

import { Header } from './layout/header/component';
import { Main } from './layout/main/component';
import { Footer } from './layout/footer/component';
import { GoogleTagManager } from '@next/third-parties/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--sora'
});

export const metadata: Metadata = {
  title: 'Sempre Sorrindo',
  description:
    'Atendemos todas as áreas da odontologia para sua família. Todos os tratamentos e serviços são oferecidos em uma clínica confortável, projetada de acordo com padrões de alta qualidade'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId="GTM-P438G7R5" />
      <body className={sora.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
