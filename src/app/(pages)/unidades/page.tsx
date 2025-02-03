import Image from 'next/image';
import Link from 'next/link';

import clinic1 from '../../../../public/img/clinics/jaboticabal.webp';
import clinic2 from '../../../../public/img/clinics/ribeirao-preto-1.webp';
import clinic3 from '../../../../public/img/clinics/bebedouro.webp';
import clinic4 from '../../../../public/img/clinics/ribeirao-preto-2.webp';
import clinic5 from '../../../../public/img/clinics/ribeirao-preto-3.webp';
import clinic6 from '../../../../public/img/clinics/ribeirao-preto-4.webp';
import clinic7 from '../../../../public/img/clinics/ribeirao-preto-5.webp';
import clinic8 from '../../../../public/img/clinics/franca.webp';
import clinic9 from '../../../../public/img/clinics/sertaozinho.webp';
import clinic10 from '../../../../public/img/clinics/barretos.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unidades | Sempre Sorrindo',
  description: `Encontre a clínica mais próxima e cuide do seu sorriso com profissionais especializados. Oferecemos uma ampla variedade de tratamentos odontológicos, como próteses e aparelhos dentários , com a mais alta tecnologia e atendimento personalizado. Agende sua consulta agora mesmo!`,
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/unidades}`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/unidades}`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/unidades}`
    }
  }
};

export default function Clinicas() {
  return (
    <>
      <section id="sess1_clinics">
        <div className="sess1_clinics-wrapper">
          <h1>
            Nossas <br />
            <span>Clinicas</span>
          </h1>
        </div>
      </section>
      <section id="sess2_clinics">
        <div className="sess2_clinics-wrapper">
          <p>
            <span>+ de 65</span>
            <br />
            Títulos Nacionais
          </p>
          <p>
            <span>110</span>
            <br />
            Consultórios
          </p>
          <p>
            <span>14 anos</span>
            <br />
            Consecutivos como melhor rede de clínicas odontológicas
          </p>
        </div>
      </section>
      <section id="sess3_clinics">
        <h2 className="sess3_title">
          Encontre a clínica Sempre Sorrindo <br />
          <span>mais perto de você!</span>
        </h2>
        <ul className="clinics_grid">
          <li className="clinics_grid-box">
            <Image src={clinic1} alt="faixada da clinica odontológica" />
            <h2>Jaboticabal</h2>
            <p>
              R. Rui Barbosa, 619 - Centro, Jaboticabal - SP, 14870-300 - CROSP:
              027.827
            </p>
            <Link className="book__btn" href="/unidades/jaboticabal">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic2} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>
              Av. Pres. Vargas, 498 - Jardim Sumare, Ribeirão Preto - SP,
              14025-405 - CROSP 026.841
            </p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-1">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic3} alt="faixada da clinica odontológica" />
            <h2>Bebedouro</h2>
            <p>
              Praça da Matriz, 100 - Centro, Bebedouro - SP, 14700-010 - CROSP:
              026.887
            </p>
            <Link className="book__btn" href="/unidades/bebedouro">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic4} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>
               R. Amador Bueno, 490 - Centro, Ribeirão Preto - SP, 14010-070 -
              CROSP: 105.838
            </p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-2">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic5} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>
              R. São Sebastião, 610 - Centro, Ribeirão Preto - SP, 14015-040 -
              CROSP: 12.121
            </p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-3">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic6} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>
               R. Tibiriçá, 576 - Centro, Ribeirão Preto - SP, 14010-090 -
              CROSP: 012.840
            </p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-4">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic7} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>
              Av. Dom Pedro I, 709 - Ipiranga, Ribeirão Preto - SP, 14055-620 -
              CROSP: 024.204
            </p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-5">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic8} alt="faixada da clinica odontológica" />
            <h2>Franca</h2>
            <p>
              Rua Voluntários da Franca, 1325 - Centro, Franca - SP, 14400-490 -
              CROSP: 145.076
            </p>
            <Link className="book__btn" href="/unidades/franca">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic8} alt="faixada da clinica odontológica" />
            <h2>Franca</h2>
            <p>
              R. General Telles, 1255 - Centro, Franca - SP, 14400-450 - CROSP:
              032.750
            </p>
            <Link className="book__btn" href="/unidades/franca">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic9} alt="faixada da clinica odontológica" />
            <h2>Sertãozinho</h2>
            <p>
               R. Barão do Rio Branco, 1378 - Centro, Sertãozinho - SP,
              14160-600 - CROSP: 015.088
            </p>
            <Link className="book__btn" href="/unidades/sertaozinho">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic10} alt="faixada da clinica odontológica" />
            <h2>Barretos</h2>
            <p>
              Calçadão da 21, 589 - Centro, Barretos - SP, 14780-050 - CROSP:
              024.411
            </p>
            <Link className="book__btn" href="/unidades/barretos">
              Entrar em contato
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
