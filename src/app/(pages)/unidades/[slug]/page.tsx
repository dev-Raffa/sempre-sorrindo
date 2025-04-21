import { Metadata } from 'next';
import Image from 'next/image';
import facebook from '../../../../../public/img/Facebook-black.svg';
import twittet from '../../../../../public/img/Twitter-black.svg';
import instagram from '../../../../../public/img/Instagram-black.svg';
import whatsapp from '../../../../../public/img/whatsapp-black.svg';
import { IUnidade, unidades } from '../unidades';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  return {
    alternates: {
      canonical: `https://clinicassempresorrindo.com.br/unidades/${slug}`,
      languages: {
        'pt-BR': `https://clinicassempresorrindo.com.br/unidades/${slug}`,
        'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/unidades/${slug}`
      }
    }
  };
}

export async function generateStaticParams() {
  const pages: IUnidade[] = unidades;

  return pages.map((page) => ({
    slug: page.slug
  }));
}

export default async function DynamicPage({
  params
}: {
  params: { slug: string };
}) {
  const clinica = unidades.find((unidade) => unidade.slug === params.slug);

  if (!clinica) {
    return <h1>404 - Página não encontr ada</h1>;
  }

  return (
    <>
      <section id="sess1_single-clinic" className="h-[85vh] w-full relative">
        <Image
          priority
          src={clinica.imgURl}
          className="object-cover w-full h-full"
          alt="fachada da loja"
          quality={80}
        />
      </section>
      <section id="sess2_single-clinic">
        <h1>
          Clínica <br /> <span>Sempre Sorrindo</span>
        </h1>
        <div className="sess2_single-clinic-content">
          <p>{clinica.cidade}</p>
          <nav>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    clinica.facebook ||
                    'https://www.facebook.com/clinicassempresorrindo'
                  }
                >
                  <Image src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    clinica.twitter || 'https://twitter.com/@csempresorrindo'
                  }
                >
                  <Image src={twittet} alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    clinica.instagram ||
                    'https://www.linkedin.com/in/cl%C3%ADnicassempresorrindo/'
                  }
                >
                  <Image src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    clinica.whatsapp ||
                    'https://api.whatsapp.com/send?phone=5516981651441&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20funciona%20a%20clinica!'
                  }
                >
                  <Image src={whatsapp} alt="whatsapp" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section id="sess3_single-clinic">
        <p>Institucional: </p>
        <h2>CRO SP: {clinica.cro}</h2>
        <br />
        <p>Responsável Técnico:</p>
        <h2>
          {clinica.responsavelTecnico.nome} <br />
          CRO SP: {clinica.responsavelTecnico.cro}
        </h2>
        <div className="phone__contact">
          <p>Telefone:</p>
          {clinica.contato.telefones.map((telefone) => {
            return (
              <a
                key={`${clinica}-telefone-${telefone}`}
                href={`tel:${telefone
                  .replace('(', '')
                  .replace(')', '')
                  .replace('-', '')
                  .replace(' ', '')}`}
              >
                {telefone}
              </a>
            );
          })}
        </div>
        <div className="whatsapp__contact">
          <p>Whatsapp:</p>
          <a
            href={`https://api.whatsapp.com/send/?phone=${clinica.contato.whatsapp}&text&type=phone_number&app_absent=0`}
            target="_blank"
          >
            {clinica.contato.celular}
          </a>
        </div>
        <div className="address__info">
          <p>Nosso endereço:</p>
          <h3>
            {clinica.endereco}, {clinica.cep}
          </h3>
        </div>
      </section>
      <article className="clinic__open-info">
        <p>Segunda à Sexta: 8h às 18h30 Sábado: 8h às 13h30</p>
      </article>
      <section id="sess4_single_clinic">{clinica.mapa}</section>
    </>
  );
}
