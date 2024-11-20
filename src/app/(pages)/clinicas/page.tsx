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
  title: 'Clinicas | Sempre Sorrindo',
  description: `Encontre a clínica mais próxima e cuide do seu sorriso com profissionais especializados. Oferecemos uma ampla variedade de tratamentos odontológicos, como próteses e aparelhos dentários , com a mais alta tecnologia e atendimento personalizado. Agende sua consulta agora mesmo!`
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
            <p>Rua Rui Barbosa, nº 619 - Jaboticabal - CROSP: 137906</p>
            <Link className="book__btn" href="/unidades/jaboticabal">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic2} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>Av. Presidente Vargas, nº 498 Ribeirão Preto - CROSP 111.613</p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-1">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic3} alt="faixada da clinica odontológica" />
            <h2>Bebedouro</h2>
            <p>Rua São João, nº 100 no coração de Bebedouro - CROSP: 119726</p>
            <Link className="book__btn" href="/unidades/bebedouro">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic4} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>Amador Bueno - Centro - CROSP: 105.838</p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-2">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic5} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>São Sebastião - Centro - CROSP: 12121</p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-3">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic6} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>Tibiriçá - Centro - CROSP: 12840</p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-4">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic7} alt="faixada da clinica odontológica" />
            <h2>Ribeirão Preto</h2>
            <p>Av. Dom Pedro I - Ipiranga</p>
            <Link className="book__btn" href="/unidades/ribeirao-preto-5">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic8} alt="faixada da clinica odontológica" />
            <h2>Franca</h2>
            <p>Voluntários da Franca - Centro - CROSP: 145076</p>
            <Link className="book__btn" href="/unidades/franca">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic9} alt="faixada da clinica odontológica" />
            <h2>Sertãozinho</h2>
            <p>Barão do Rio Branco - Centro - CROSP: 15088</p>
            <Link className="book__btn" href="/unidades/sertaozinho">
              Entrar em contato
            </Link>
          </li>
          <li className="clinics_grid-box">
            <Image src={clinic10} alt="faixada da clinica odontológica" />
            <h2>Barretos</h2>
            <p>Calçadão da 21, - Centro - CROSP: 109.485</p>
            <Link className="book__btn" href="/unidades/barretos">
              Entrar em contato
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
