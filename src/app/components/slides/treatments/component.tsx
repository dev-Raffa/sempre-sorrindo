import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

export const TreatmentSlide = () => {
  return (
    <Carousel
      opts={{
        watchDrag: true,
        loop: true
      }}
    >
      <CarouselContent className="px-8">
        <CarouselItem className="treatment__box sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-4">
          <a href="">
            <h3 className="treatment_1">
              Próteses, coroa, pontes e dentaduras
            </h3>
            <p>
              Coroa dentária em porcelana ou prótese dentária é um termo
              utilizado para descrever um dente artificial, colocado muitas
              vezes sobre um dente natural, recuperando assim a forma e tamanho
              original do dente natural, devolvendo estética e função
              mastigatória para o paciente.
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="treatment__box sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-4">
          <a href="">
            <h3 className="treatment_2">Odontopediatria</h3>
            <p>
              A odontopediatria é a área da odontologia que cuida da saúde bucal
              das crianças, desde o momento do nascimento até a adolescência.
              Além disso, os odontopediatras são responsáveis também pela
              higiene bucal dos bebês e das gestantes.
            </p>
          </a>
        </CarouselItem>
        <CarouselItem className="treatment__box sm:basis-1 md:basis-1/2 lg:basis-1/3 ml-4">
          <a href="">
            <h3 className="treatment_3">Ortodontia</h3>
            <p>
              Aparelhos Dentários e Sempre Sorringo Align, Após a instalação, os
              dentes começam a se nivelar e se alinhar. Para concluir o
              nivelamento, em alguns casos, é recomendado fazer extrações
              dentárias ou melhorar o posicionamento dental com giros.
            </p>
          </a>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
