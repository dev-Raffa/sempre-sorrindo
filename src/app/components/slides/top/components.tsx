'use client';

import Image from 'next/image';

import imageDesktop1 from '../../../../../public/img/sess1-slide1-desktop.webp';
import imageDesktop2 from '../../../../../public/img/sess1-slide2-desktop.webp';
import imageMobile1 from '../../../../../public/img/sess1-slide1-mobile.webp';
import imageMobile2 from '../../../../../public/img/sess1-slide2-mobile.webp';

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const TopSlide = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]}
      opts={{
        loop: true
      }}
      className="h-full"
    >
      <CarouselContent className="h-full">
        <CarouselItem className="p-0 m-0 h-full">
          <Image
            src={imageMobile1}
            priority
            alt="duas pessoas sorrindo."
            className="object-cover h-full lg:hidden w-full object-top"
          />
          <Image
            src={imageDesktop1}
            priority
            alt="duas pessoas sorrindo."
            className="object-cover h-full hidden lg:flex"
          />
          <div className="banner__mobile-content">
            <h1>
              Realize o sonho do implante dentário{' '}
              <span>em apenas 3 dias.</span>
            </h1>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agende agora
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className="p-0 m-0">
          <Image
            src={imageMobile2}
            loading="lazy"
            alt="selo do ranking great places to work"
            className="lg:hidden"
          />
          <Image
            src={imageDesktop2}
            loading="lazy"
            alt="selo do ranking great places to work"
            className="hidden lg:flex h-full"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
