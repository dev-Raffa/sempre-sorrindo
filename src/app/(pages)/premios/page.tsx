import { Metadata } from 'next';
import Image from 'next/image';

import prize1 from '../../../../public/img/prizes/MELHORES DO ANO NO SEGUIMENTO ODONTOLOGICO 2020.webp';
import prize2 from '../../../../public/img/prizes/PREMIO BRAZIL QUALITY CERTIFICATION 2023 - LATIN AMERICAN QUALITY INSTITUTE.webp';
import prize3 from '../../../../public/img/prizes/PREMIO DE ATENDIMENTO E QUALIDADE 2020.webp';
import prize4 from '../../../../public/img/prizes/PREMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2019.webp';
import prize5 from '../../../../public/img/prizes/PREMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020-2.webp';
import prize6 from '../../../../public/img/prizes/PREMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020.webp';
import prize7 from '../../../../public/img/prizes/PREMIO INTERNACIONAL LATIN AMERICAN QUALITY AWARDS 2020.webp';
import prize8 from '../../../../public/img/prizes/PREMIO ISO QUALITY 2021.webp';
import prize9 from '../../../../public/img/prizes/PREMIO MELHOR DO ANO 2021.webp';
import prize10 from '../../../../public/img/prizes/PREMIO PERSONALITA 2019.webp';
import prize11 from '../../../../public/img/prizes/PREMIO THE DENTISTRY AWARDS 2023 - LATIN AMERICAN QUALITY INSTITUTE.webp';
import prize12 from '../../../../public/img/prizes/PREMIO TOP 3 THE BEST OF THE BEST.webp';
import prize13 from '../../../../public/img/prizes/PREMIO TOP OF MIND 2020.webp';
import prize14 from '../../../../public/img/prizes/PREMIO TOP OF MIND BRAZIL 2022 - INBRAP.webp';

export const metadata: Metadata = {
  title: 'Prêmios | Sempre Sorrindo',
  description: `A mais premiada! Nossa rede odontológica é reconhecida por diversas instituições. Escolha a excelência e agende sua consulta!`,
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/premios`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/premios`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/premios`
    }
  }
};

export default function Premios() {
  return (
    <>
      <section id="sess1_prizes">
        <div className="sess1_prizes-wrapper">
          <h1>Prêmios</h1>
        </div>
      </section>
      <section id="sess2_prizes">
        <p>
          São mais de 12 anos de experiência, somados ao reconhecimento e as
          inúmeras premiações, pelos serviços prestados a população de Ribeirão
          Preto e Região. A Sempre Sorrindo, conquistou o Prêmio Internacional
          {'"Latin American Quality Awards"'}, o certificado The Winner Awards e
          mais um ano consecutivo é TOP of MIND REGIONAL OFICIAL, sendo a marca
          no segmento odontológico, mais lembrada e desejada da nossa região.
        </p>
      </section>
      <section id="sess3_prizes">
        <ul className="prizes_grid">
          <li className="prizes_grid-box">
            <h2>MELHORES DO ANO NO SEGUIMENTO ODONTOLÓGICO 2020</h2>
            <Image
              src={prize1}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>
              PRÊMIO BRAZIL QUALITY CERTIFICATION 2023 - LATIN AMERICAN QUALITY
              INSTITUTE
            </h2>
            <Image
              src={prize2}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO DE ATENDIMENTO E QUALIDADE 2020</h2>
            <Image
              src={prize3}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2019</h2>
            <Image
              src={prize4}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020</h2>
            <Image
              src={prize5}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO DE QUALIDADE EMPRESARIAL E PROFISSIONAL 2020-2</h2>
            <Image
              src={prize6}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO INTERNACIONAL LATIN AMERICAN QUALITY AWARDS 2020</h2>
            <Image
              src={prize7}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO ISO QUALITY 2021</h2>
            <Image
              src={prize8}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO MELHOR DO ANO 2021</h2>
            <Image
              src={prize9}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO PERSONALITÁ 2019</h2>
            <Image
              src={prize10}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>
              PRÊMIO THE DENTISTRY AWARDS 2023 - LATIN AMERICAN QUALITY
              INSTITUTE
            </h2>
            <Image
              src={prize11}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO TOP 3 THE BEST OF THE BEST</h2>
            <Image
              src={prize12}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO TOP OF MIND 2020</h2>
            <Image
              src={prize13}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
          <li className="prizes_grid-box">
            <h2>PRÊMIO TOP OF MIND 2020</h2>
            <Image
              src={prize14}
              alt="foto do certificado de ganhador do prêmio"
            />
          </li>
        </ul>
      </section>
    </>
  );
}
