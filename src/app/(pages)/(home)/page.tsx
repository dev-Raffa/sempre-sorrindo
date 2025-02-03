import Link from 'next/link';

import { TopSlide } from '../../components/slides/top/components';
import { ClinicImage } from '../../components/pictures/clinic/component';
import { StructureSlide } from '../../components/slides/strucuture/component';
import { SmilesSlide } from '../../components/slides/smiles/component';
import { Avatar } from '../../components/pictures/avatar/component';
import { PrizesSLide } from '../../components/slides/prizes/component';
import { NewsSlide } from '../../components/slides/news/component';
import { TestemonialsSlide } from '../../components/slides/testemonials/components';
import { GooglePicture } from '../../components/pictures/google/component';
import { TreatmentSlide } from '../../components/slides/treatments/component';
import { Clinics } from '../../components/lists/clinics/component';
import { Metadata } from 'next';

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
              Temos mais de <span>110 consultórios</span>
            </p>
            <p>
              <span>14 anos</span> consecutivos como a melhor rede de clínicas
              odontológicas
            </p>
          </div>
        </div>
      </section>
      <section id="sess3">
        <h2>
          conheça nossos <span>tratamentos!</span>
        </h2>
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
