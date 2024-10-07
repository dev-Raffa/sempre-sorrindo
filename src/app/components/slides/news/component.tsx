'use client';

import Image from 'next/image';
import news1 from '../../../../../public/img/news/noticia1.webp';
import news2 from '../../../../../public/img/news/noticia2.webp';
import news3 from '../../../../../public/img/news/noticia3.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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
        <CarouselItem className="news__item ml-4">
          <a href="https://www.clinicassempresorrindo.com.br/noticias/199/clinicas-sempre-sorrindo-participa-da-39o-festa-do-quitute-de-jaboticabal-em-comemoracao-ao-aniversario-de-195-anos-da-cidade.html">
            <Image loading="lazy" src={news1} alt="" />
            <h4>NOVA CLÍNICA SEMPRE SORRINDO</h4>
            <p className="news__item-description">
              {' '}
              A Avenida Presidente Vargas está de sorriso novo! A mais nova
              Clínica Sempre Sorrindo já está em pleno funcionamento e nossa
              equipe preparada para receber você do jeito que você merece e com
              o cuidado que só o Grupo Sempre Sorrindo pode oferecer.
            </p>
            <div className="news__item-foot">
              <p>Leia Agora</p>
            </div>
          </a>
        </CarouselItem>
        <CarouselItem className="news__item ml-4">
          <a href="https://www.clinicassempresorrindo.com.br/noticias/198/acao-de-fim-de-ano-para-voce-voltar-a-sorrir.html">
            <Image loading="lazy" src={news2} alt="" />
            <h4>BRUXISMO PODE CAUSAR PROBLEMAS NO ESTÔMAGO?</h4>
            <p className="news__item-description">
              {' '}
              Dentista esclarece a questão e conta quais os melhores tratamentos
              para o problema
            </p>
            <div className="news__item-foot">
              <p>Leia Agora</p>
            </div>
          </a>
        </CarouselItem>
        <CarouselItem className="news__item ml-4">
          <a href="https://www.clinicassempresorrindo.com.br/noticias/197/jaboticabal-recebe-a-mais-nova-sempre-sorrindo.html">
            <Image loading="lazy" src={news3} alt="" />
            <h4>JABOTICABAL RECEBE A MAIS NOVA SEMPRE SORRINDO</h4>
            <p className="news__item-description">
              {' '}
              A cidade de Jaboticabal está de sorriso novo! A mais nova Clínica
              Sempre Sorrindo já está em pleno funcionamento e nossa equipe
              preparada para receber você do jeito que você merece e com o
              cuidado que só o Grupo Sempre Sorrindo pode oferecer.
            </p>
            <div className="news__item-foot">
              <p>Leia Agora</p>
            </div>
          </a>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
