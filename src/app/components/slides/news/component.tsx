'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { pagesLocal } from '@/app/(pages)/noticias/noticias';
import Link from 'next/link';

export const NewsSlide = () => {
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
        {pagesLocal.map((news, index) => {
          return (
            index <= 2 && (
              <CarouselItem
                key={`news-higlight-${index}`}
                className="news__item ml-4"
              >
                <Link href={`/noticias/${news.url}`}>
                  <figure>
                    <Image
                      loading="lazy"
                      src={`https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${news.imgUrl}`}
                      alt={news.title}
                      style={{ objectFit: 'cover' }}
                      fill
                    />
                  </figure>
                  <h4>{news.title}</h4>
                  <p className="news__item-description">{news.resume}</p>
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
