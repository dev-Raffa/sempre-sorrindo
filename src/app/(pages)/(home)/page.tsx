import Link from 'next/link';
import Image from 'next/image';

import { TopSlide } from '../../components/slides/top/components';
import { ClinicImage } from '../../components/pictures/clinic/component';
import { StructureSlide } from '../../components/slides/strucuture/component';
import { Avatar } from '../../components/pictures/avatar/component';
import { PrizesSLide } from '../../components/slides/prizes/component';
import { NewsSlide } from '../../components/slides/news/component';
import { TestemonialsSlide } from '../../components/slides/testemonials/components';
import { GooglePicture } from '../../components/pictures/google/component';
import { TreatmentSlide } from '../../components/slides/treatments/component';
import { Clinics } from '../../components/lists/clinics/component';
import { Metadata } from 'next';
import { SmilesSlide } from '@/app/components/slides/smiles/component';

export const metadata: Metadata = {
  title: 'Sempre Sorrindo',
  description:
    'Sempre Sorrindo: referência em odontologia em SP. Tratamentos completos, estrutura moderna e excelência no atendimento. Confira endereços e prêmios.',
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br`
    }
  }
};

export default function Home() {
  return (
    <>
      <section id="sess1">
        <TopSlide />
      </section>
      <section id="sess2">
        <div className="sess2__wrapper">
          <h2>
            <span>Somos a melhor e mais completa</span> rede de clínicas
            odontológicas do Brasil.
          </h2>
          <div className="sess2__content">
            <p>
              Mais de 65 <span>títulos nacionais</span> e internacionais.
            </p>
            <p>
              Temos mais de <span>120 consultórios</span>
            </p>
            <p>
              <span>15 anos</span> consecutivos como a melhor rede de clínicas
              odontológicas
            </p>
          </div>
        </div>
      </section>
      <section id="sess3">
        <h2>
          conheça nossos <span>tratamentos!</span>
        </h2>
        <div className="bg-gray-50 py-8 sm:py-12 mb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implantes Dentários:{' '}
              <span className="text-yellow-500">
                A Solução Definitiva para seu Sorriso
              </span>
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-lg text-gray-700 mb-6">
                  Perdeu um ou mais dentes? Os
                  <strong> implantes dentários</strong> são a forma mais
                  moderna, segura e natural de recuperar a função mastigatória e
                  a estética do seu sorriso. Na <strong>Sempre Sorrindo</strong>
                  , somos especialistas em implantodontia de alta performance.
                </p>
                <p className="text-gray-600 mb-8">
                  Utilizamos materiais de titânio biocompatíveis e tecnologia de
                  ponta, como planejamento digital e cirurgia guiada, para
                  garantir um procedimento preciso, rápido e com o mínimo de
                  desconforto. Recupere a confiança para sorrir, comer e falar
                  sem medo.
                </p>
              </div>
              <div className="flex-1 relative mt-8 h-96 w-full rounded-sm overflow-hidden lg:mt-0">
                <Image
                  src="https://backup.clinicassempresorrindo.com.br/storage/app/uploads/Mulher com sorriso saudável e completo, demonstrando o resultado de um implante dentário..png"
                  alt="Paciente sorrindo após procedimento de implante dentário na Sempre Sorrindo"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  fill
                  style={{ maxHeight: '450px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <TreatmentSlide />
      </section>
      <section id="sess4">
        <div className="sess4__content">
          <div>
            <h2>Nossa Clínicas</h2>
            <p>Atendemos em diversas cidades do Interior Paulista.</p>
          </div>
          <Clinics />
        </div>
        <ClinicImage />
      </section>
      <section id="sess5">
        <div className="sess5__wrapper">
          <div className="stripe__floating adjust">
            <p>
              Somos a melhor e mais completa rede de Clínicas Odontológicas do
              Brasil.
            </p>
            <a
              className="book__btn adjust"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agende agora
            </a>
          </div>
          <h2>
            Confira nossa <span>estrutura:</span>
          </h2>
          <StructureSlide />
        </div>
      </section>
      <section id="sess6">
        <div className="sess6__wrapper">
          <div className="sess6__content">
            <h2>
              Sorrisos <br /> <span>Transformados</span>
            </h2>
            <p>
              Com nossos implantes dentários de última geração, transformamos
              sorrisos e vidas.
            </p>
            <SmilesSlide />
          </div>
          <Avatar />
        </div>
      </section>
      <article id="artic1">
        <div className="artic1__content">
          <h3>Prêmios</h3>
          <p>
            Para se construir uma Grande Marca, conquistar premiações e
            reconhecimento internacional é preciso oferecer o melhor e cuidar da
            saúde bucal dos nossos clientes com excelência
          </p>
        </div>
        <PrizesSLide />
        <Link className="book__btn" href="/premios">
          confira
        </Link>
      </article>
      <section id="sess7">
        <div className="sess7__wrapper">
          <h3>Notícias</h3>
          <NewsSlide />
        </div>
      </section>
      <section id="sess8">
        <div className="review__wrapper">
          <h3>Viva Sempre Sorrindo</h3>
          <p>confira o que nossos pacientes dizem sobre nós:</p>
          <GooglePicture />
          <h4>Excelente</h4>
          <p>com base em 103 avaliações</p>
        </div>
        <TestemonialsSlide />
        <a className="book__btn" href="">
          Leia Mais
        </a>
      </section>
    </>
  );
}
