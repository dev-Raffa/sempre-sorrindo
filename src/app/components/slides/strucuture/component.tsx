'use client';

import Image from 'next/image';
import image1 from '../../../../../public/img/office1.webp';
import image2 from '../../../../../public/img/office2.webp';
import image3 from '../../../../../public/img/office3.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const StructureSlide = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]}
    >
      <CarouselContent className="office__list px-8">
        <CarouselItem className="office__item sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-2">
          <Image
            loading="lazy"
            src={image1}
            alt="foto da fachada de um consultorio"
          />
        </CarouselItem>
        <CarouselItem className="office__item flex sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-2">
          <Image
            loading="lazy"
            src={image2}
            alt="foto da fachada de um consultorio"
          />
        </CarouselItem>
        <CarouselItem className="office__item flex sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-2">
          <Image
            loading="lazy"
            src={image3}
            alt="foto da fachada de um consultorio"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
