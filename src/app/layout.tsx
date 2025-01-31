import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './styles/globals.css';

import { Header } from './layout/header/component';
import { Main } from './layout/main/component';
import { Footer } from './layout/footer/component';
import { GoogleTagManager } from '@next/third-parties/google';
import { headers } from 'next/headers';

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--sora'
});

export const generateMetadata = (): Metadata => {
  const headersList = headers();
  const currentUrl = headersList.get('next-url') || '/';

  return {
    title: 'Sempre Sorrindo',
    description: 'Descrição do meu site',
    verification: { google: 'cOMMVGwllYMovj0HJTdijnWWQ7SpZY5Bfsc-nlh3yUU' },
    icons: { icon: './favicon.ico' },
    alternates: {
      canonical: `https://clinicassempresorrindo.com.br/${currentUrl}`,
      languages: {
        'pt-BR': `https://clinicassempresorrindo.com.br${currentUrl}`,
        'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br${currentUrl}`
      }
    }
  };
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
