import Image from 'next/image';
import fivestars from '../../../../../public/img/five_star_rating.svg';
import person1 from '../../../../../public/img/reviews/person1.webp';
import person2 from '../../../../../public/img/reviews/person2.webp';
import person3 from '../../../../../public/img/reviews/person3.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

export const TestemonialsSlide = () => {
  return (
    <Carousel className="review__list">
      <CarouselContent className="px-8 py-8">
        <CarouselItem className="review__box sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-4">
          <div className="review__box-item ">
            <h3>
              {
                '"Antes do implante, eu tinha vergonha quando precisava tirar a prótese."'
              }
            </h3>
            <figcaption>
              <Image
                loading="lazy"
                src={person1}
                alt="foto de perfil de uma pessoa sorrindo"
              />
              <div className="review__box-item-name">
                <p>Sra. Maria de Lourdes Brunello</p>
                <Image src={fivestars} alt="icone de 5 estrelas de avaliação" />
              </div>
            </figcaption>
          </div>
        </CarouselItem>
        <CarouselItem className="review__box sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-4">
          <div className="review__box-item ">
            <h3>{`"Fiz implante, tenho uma mastigação ótima, não sinto mais dores de cabeça."`}</h3>
            <figcaption>
              <Image
                loading="lazy"
                src={person2}
                alt="foto de perfil de uma pessoa sorrindo"
              />
              <div className="review__box-item-name">
                <p>Sr. Marco Aurélio Fernandes</p>
                <Image src={fivestars} alt="icone de 5 estrelas de avaliação" />
              </div>
            </figcaption>
          </div>
        </CarouselItem>
        <CarouselItem className="review__box sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-4">
          <div className="review__box-item ">
            <h3> {'"Com o implante, meu paladar ficou até melhor!"'}</h3>
            <figcaption>
              <Image
                src={person3}
                alt="foto de perfil de uma pessoa sorrindo"
              />
              <div className="review__box-item-name">
                <p>Sr. Alcides Brunello</p>
                <Image src={fivestars} alt="icone de 5 estrelas de avaliação" />
              </div>
            </figcaption>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
