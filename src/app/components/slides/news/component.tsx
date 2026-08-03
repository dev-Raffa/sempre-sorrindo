'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PageData } from '@/app/(pages)/noticias/noticias';
import Link from 'next/link';

export const NewsSlide = ({ news }: { news: PageData[] }) => {
  return (
    <Carousel
      className="news__wrapper"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]}
    >
      <CarouselContent className="news__list py-8">
        {news.map((newsItem, index) => {
          return (
            index <= 2 && (
              <CarouselItem
                key={`news-higlight-${newsItem.title}`}
                className="news__item ml-4"
              >
                <Link href={`/noticias/${newsItem.url}`}>
                  <figure>
                    <Image
                      loading="lazy"
                      src={
                        newsItem.imgUrl.startsWith('/')
                          ? newsItem.imgUrl
                          : `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${newsItem.imgUrl}`
                      }
                      alt={newsItem.title}
                      style={{ objectFit: 'cover' }}
                      fill
                    />
                  </figure>
                  <h4>{newsItem.title}</h4>
                  <p className="news__item-description">{newsItem.resume}</p>
                  <div className="news__item-foot">
                    <p>Leia Agora</p>
                  </div>
                </Link>
              </CarouselItem>
            )
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
