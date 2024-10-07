'use client';

import Image from 'next/image';
import prize1 from '../../../../../public/img/prizes/MELHORES DO ANO NO SEGUIMENTO ODONTOLÓGICO 2020.webp';
import prize2 from '../../../../../public/img/prizes/PRÊMIO BRAZIL QUALITY CERTIFICATION 2023 - LATIN AMERICAN QUALITY INSTITUTE.webp';
import prize3 from '../../../../../public/img/prizes/PRÊMIO DE ATENDIMENTO E QUALIDADE 2020.webp';
import prize4 from '../../../../../public/img/prizes/PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2019.webp';
import prize5 from '../../../../../public/img/prizes/PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020-2.webp';
import prize6 from '../../../../../public/img/prizes/PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020.webp';
import prize7 from '../../../../../public/img/prizes/PRÊMIO INTERNACIONAL LATIN AMERICAN QUALITY AWARDS 2020.webp';
import prize8 from '../../../../../public/img/prizes/PRÊMIO ISO QUALITY 2021.webp';
import prize9 from '../../../../../public/img/prizes/PRÊMIO MELHOR DO ANO 2021.webp';
import prize10 from '../../../../../public/img/prizes/PRÊMIO PERSONALITÁ 2019.webp';
import prize11 from '../../../../../public/img/prizes/PRÊMIO THE DENTISTRY AWARDS 2023 - LATIN AMERICAN QUALITY INSTITUTE.webp';
import prize12 from '../../../../../public/img/prizes/PRÊMIO TOP 3 THE BEST OF THE BEST.webp';
import prize13 from '../../../../../public/img/prizes/PRÊMIO TOP OF MIND 2020.webp';
import prize14 from '../../../../../public/img/prizes/PRÊMIO TOP OF MIND BRAZIL 2022 - INBRAP.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export const PrizesSLide = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        AutoScroll({
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          speed: 0.5
        })
      ]}
    >
      <CarouselContent className="prize__list">
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4 className="text-sm">
            MELHORES DO ANO NO SEGUIMENTO ODONTOLÓGICO 2020
          </h4>
          <Image
            loading="lazy"
            src={prize1}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4 className="text-sm">
            PRÊMIO BRAZIL QUALITY CERTIFICATION 2023 - LATIN AMERICAN QUALITY
            INSTITUTE
          </h4>
          <Image
            loading="lazy"
            src={prize2}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4>PRÊMIO DE ATENDIMENTO E QUALIDADE 2020</h4>
          <Image
            loading="lazy"
            src={prize3}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4 className="text-sm">
            PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2019
          </h4>
          <Image
            loading="lazy"
            src={prize4}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4 className="text-sm">
            PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020
          </h4>
          <Image
            loading="lazy"
            src={prize5}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4 className="text-sm">
            PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020-2
          </h4>
          <Image
            loading="lazy"
            src={prize6}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4 className="text-sm">
            PRÊMIO INTERNACIONAL LATIN AMERICAN QUALITY AWARDS 2020
          </h4>
          <Image
            loading="lazy"
            src={prize7}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4>PRÊMIO ISO QUALITY 2021</h4>
          <Image
            loading="lazy"
            src={prize8}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4>PRÊMIO MELHOR DO ANO 2021</h4>
          <Image
            loading="lazy"
            src={prize9}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4>PRÊMIO PERSONALITÁ 2019</h4>
          <Image
            loading="lazy"
            src={prize10}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4 className="text-sm">
            PRÊMIO THE DENTISTRY AWARDS 2023 - LATIN AMERICAN QUALITY INSTITUTE
          </h4>
          <Image
            loading="lazy"
            src={prize11}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4>PRÊMIO TOP 3 THE BEST OF THE BEST</h4>
          <Image
            loading="lazy"
            src={prize12}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4>PRÊMIO TOP OF MIND 2020</h4>
          <Image
            loading="lazy"
            src={prize13}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
        <CarouselItem className="prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
          <h4>PRÊMIO TOP OF MIND 2020</h4>
          <Image
            loading="lazy"
            src={prize14}
            alt="foto do certificado de ganhador do prêmio"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    /*
        <div className="splide" data-home="slide_3">
          <div className="splide__track">
            <ul className="splide__list prize__list">
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
              <li className="splide__slide prize-box sm:basis-1 md:basis-1/2 lg:basis-1/3">
                
              </li>
            </ul>
          </div>
        </div>
      */
  );
};
