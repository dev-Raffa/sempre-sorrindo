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
  description: `Conheça a Sempre Sorrindo, referência em odontologia em SP. Oferecemos tratamentos completos com estrutura moderna, atendimento de excelência e resultados comprovados. Confira nossos endereços, prêmios e depoimentos de clientes satisfeitos.`,
  verification: { google: 'cOMMVGwllYMovj0HJTdijnWWQ7SpZY5Bfsc-nlh3yUU' }
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
