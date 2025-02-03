import './styles.scss';
import { getNews, PageData } from '../noticias';
import Image from 'next/image';
import Head from 'next/head';

export async function generateStaticParams() {
  const pages: PageData[] = await getNews();

  return pages.map((page) => ({
    slug: page.url
  }));
}

export default async function DynamicPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const newsPages: PageData[] = await getNews();
  const page = newsPages.find((page) => page.url === slug);

  if (!page) {
    return <h1>404 - Página não encontrada</h1>;
  }

  return (
    <>
      <Head>
        <title>{page.title} | Sempre Sorrindo</title>
        <meta name="description" content={page.text} />
        <link
          rel="canonical"
          href={`https://clinicassempresorrindo.com.br/noticias/${slug}`}
        />
        <link
          rel="alternate"
          href={`https://clinicassempresorrindo.com.br/noticias/${slug}`}
        />
      </Head>
      <div id="NewsPage">
        <section id="bannerNoticia"></section>
        <article>
          <div className="center">
            <figure>
              <Image
                src={`https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${page.imgUrl}`}
                alt={page.title}
                fill
              ></Image>
            </figure>
            <h1 style={{ fontSize: '30px', marginBottom: '20px' }}>
              <strong>{page.title}</strong>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: page.text }}></div>
          </div>
        </article>
      </div>
    </>
  );
}
