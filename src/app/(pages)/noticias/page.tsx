import Link from 'next/link';
import './styles.scss';
import Image from 'next/image';
import { getNews } from './noticias';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias | Sempre Sorrindo',
  description: `Queremos te ver sorrir! Acompanhe nossas notícias e dicas para ter um sorriso ainda mais lindo e saudável.`,
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/noticias`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/noticias`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/noticias`
    }
  }
};

export default async function Page() {
  const news = await getNews();

  return (
    <>
      <ul id="NewsListPage">
        {news &&
          news.map((blog) => {
            return (
              <li key={blog.title}>
                <Link href={`/noticias/${blog.url}`}>
                  <figure>
                    <Image
                      src={`https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${blog.imgUrl}`}
                      alt={blog.title}
                      fill
                      quality={100}
                    ></Image>
                    <figcaption>{blog.title}</figcaption>
                  </figure>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
