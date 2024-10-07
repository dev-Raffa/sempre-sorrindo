'use client';

import Image from 'next/image';
import image1 from '../../../../../public/img/smiles/smile1.webp';
import image2 from '../../../../../public/img/smiles/smile2.webp';
import image3 from '../../../../../public/img/smiles/smile3.webp';
import image4 from '../../../../../public/img/smiles/smile4.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const SmilesSlide = () => {
  return (
    <Carousel
      opts={{ loop: true, watchDrag: true }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]}
    >
      <CarouselContent className="smiles__list">
        <CarouselItem className="smile__list-item">
          <Image
            src={image1}
            alt="foto de antes e depois do sorriso de um dos pacientes."
          />
        </CarouselItem>
        <CarouselItem className="smile__list-item">
          <Image
            src={image2}
            loading="lazy"
            alt="foto de antes e depois do sorriso de um dos pacientes."
          />
        </CarouselItem>
        <CarouselItem className="smile__list-item">
          <Image
            src={image3}
            loading="lazy"
            alt="foto de antes e depois do sorriso de um dos pacientes."
          />
        </CarouselItem>
        <CarouselItem className="smile__list-item">
          <Image
            src={image4}
            loading="lazy"
            alt="foto de antes e depois do sorriso de um dos pacientes."
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
