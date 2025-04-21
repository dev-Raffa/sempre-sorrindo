import Image, { StaticImageData } from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import defaultImage from '../../../../../../public/img/placeholder.svg';
import unitarioImage from '../../../../../../public/img/implante-dentario-unitario.webp';
import multiploImage from '../../../../../../public/img/Implante-dentario-multiplo.png';
import protocoloImage from '../../../../../../public/img/implante-dentario-protocolo.webp';
import overdentureImage from '../../../../../../public/img/implante-dentario-overdenture.webp';

interface IImplant {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image?: StaticImageData;
}

export default function ImplantTypes() {
  const implantTypes: IImplant[] = [
    {
      id: 'unitario',
      title: 'Implante Unitário',
      description:
        'Solução ideal para substituir um único dente perdido. O implante unitário é composto por um parafuso de titânio que é inserido no osso maxilar, funcionando como a raiz do dente, e uma coroa protética que reproduz a parte visível do dente.',
      benefits: [
        'Preserva os dentes vizinhos',
        'Aparência natural',
        'Previne a perda óssea',
        'Fácil higienização'
      ],
      image: unitarioImage
    },
    {
      id: 'multiplo',
      title: 'Implantes Múltiplos',
      description:
        'Quando há a perda de vários dentes adjacentes, os implantes múltiplos são a solução mais indicada. Neste caso, não é necessário um implante para cada dente perdido, pois alguns implantes estrategicamente posicionados podem suportar uma prótese fixa que substitui vários dentes.',
      benefits: [
        'Menor número de implantes necessários',
        'Custo-benefício otimizado',
        'Distribuição adequada das forças mastigatórias',
        'Estética natural'
      ],
      image: multiploImage
    },
    {
      id: 'protocolo',
      title: 'Protocolo (Arcada Completa)',
      description:
        'O protocolo, também conhecido como prótese protocolo ou protocolo Branemark, é indicado para pacientes que perderam todos os dentes de uma arcada. Com apenas 4 a 6 implantes, é possível fixar uma prótese que substitui todos os dentes da arcada superior ou inferior.',
      benefits: [
        'Reabilitação completa com poucos implantes',
        'Procedimento menos invasivo',
        'Recuperação mais rápida',
        'Resultado estético e funcional excelente'
      ],
      image: protocoloImage
    },
    {
      id: 'overdenture',
      title: 'Overdenture',
      description:
        'A overdenture é uma prótese total removível que se fixa sobre implantes através de sistemas de encaixe. É uma excelente opção para pacientes que já usam dentaduras convencionais e desejam mais estabilidade e conforto.',
      benefits: [
        'Maior estabilidade que próteses convencionais',
        'Fácil higienização',
        'Menor custo comparado a próteses fixas',
        'Melhora significativa na qualidade de vida'
      ],
      image: overdentureImage
    }
  ];

  return (
    <section id="tipos" className="bg-sky-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#203c89] md:text-4xl">
            Tipos de Implantes e Próteses
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Oferecemos soluções personalizadas para cada necessidade. Conheça os
            diferentes tipos de implantes disponíveis na Sempre Sorrindo.
          </p>
        </div>

        <Tabs defaultValue="unitario" className="mx-auto w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4">
            {implantTypes.map((type) => (
              <TabsTrigger
                key={type.id}
                value={type.id}
                className="text-sm md:text-base text-[#203c89]"
              >
                {type.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {implantTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <Image
                    src={type.image ? type.image : defaultImage}
                    alt={type.title}
                    width={400}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[#203c89]">
                    {type.title}
                  </h3>
                  <p className="mb-6 text-gray-600">{type.description}</p>
                  <div>
                    <h4 className="mb-2 font-semibold text-[#203c89]">
                      Benefícios:
                    </h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/5516981651441?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(
                        type.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-green-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Saiba mais sobre {type.title}
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Não sabe qual tipo de implante é o mais adequado para o seu caso?
          </p>
          <a
            href="https://wa.me/5516981651441?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20saber%20qual%20tipo%20de%20implante%20é%20mais%20adequado%20para%20mim."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-green-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar avaliação personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
