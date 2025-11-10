import './styles.scss';
import { getNews, PageData } from '../noticias';
import Image from 'next/image';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const newsPages: PageData[] = await getNews();
  const page = newsPages.find((page) => page.url === slug);

  return {
    alternates: {
      canonical: `https://clinicassempresorrindo.com.br/noticias/${slug}`,
      languages: {
        'pt-BR': `https://clinicassempresorrindo.com.br/noticias/${slug}`,
        'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/noticias/${slug}`
      }
    },
    description: page?.resume,
    title: page?.title,
    openGraph: {
      type: 'article',
      title: page?.title,
      description: page?.resume,
      images: [
        `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${page?.imgUrl}`
      ]
    }
  };
}

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
