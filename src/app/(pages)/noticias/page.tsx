import Link from 'next/link';
import './styles.scss';
import Image from 'next/image';
import { getNews } from './noticias';

export default async function Page() {
  const news = await getNews();

  return (
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
                    width={250}
                    height={250}
                    quality={100}
                  ></Image>
                  <figcaption>{blog.title}</figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
