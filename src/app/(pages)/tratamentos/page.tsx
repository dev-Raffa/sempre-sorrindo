import { Metadata } from 'next';
import Image from 'next/image';

import treatment1 from '../../../../public/img/treatment-icons/implants.svg';
import treatment2 from '../../../../public/img/treatment-icons/restauration.svg';
import treatment3 from '../../../../public/img/treatment-icons/ortodonty.svg';
import treatment4 from '../../../../public/img/treatment-icons/whitening.svg';
import treatment5 from '../../../../public/img/treatment-icons/prothesis.svg';
import treatment6 from '../../../../public/img/treatment-icons/periodonty.svg';
import treatment7 from '../../../../public/img/treatment-icons/odontopediatry.svg';
import treatment8 from '../../../../public/img/treatment-icons/harmonization.svg';
import treatment9 from '../../../../public/img/treatment-icons/endodonty.svg';
import treatment10 from '../../../../public/img/treatment-icons/general-care.svg';
import treatment11 from '../../../../public/img/treatment-icons/cirurgy.svg';

export const metadata: Metadata = {
  title: 'Tratamentos | Sempre Sorrindo',
  description: `Transforme seu sorriso! Limpeza, restaurações, canal, implantes, ortodontia, clareamento, próteses e cirurgias. Equipe especializada para um sorriso lindo e saudável.`,
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/tratamentos`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/tratamentos`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/tratamentos`
    }
  }
};

export default function Tratamentos() {
  return (
    <>
      <section id="sess1_treatment">
        <div className="sess1_treatment-wrapper">
          <h1>
            Nossos <br />
            <span>Tratamentos</span>
          </h1>
        </div>
      </section>
      <section id="sess2_treatment">
        <div className="sess2_treatment-wrapper">
          <p>
            Em nossas clínicas, atuamos em todas as áreas da odontologia. Além
            de equipamentos odontológicos de ponta e materiais de alta
            qualidade, todos os serviços são fornecidos em um ambiente
            confortável.
          </p>
          <a
            className="book__btn"
            href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
          >
            Agende agora
          </a>
        </div>
      </section>
      <section id="sess3_treatment">
        <ul className="treatment_grid">
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment1} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                Implantes Dentários <br />| IMPLANTODONTIA
              </h2>
              <p>
                Implantodontia consiste na reconstrução de parte do dente por
                meio de um implante instalado no osso do maxilar ou mandíbula
                por processo cirúrgico, de forma muito simples, rápida e
                indolor, com o objetivo de substituir os dentes perdidos.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment2} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                RESTAURAÇÃO <br />| Faceta de Porcelana
              </h2>
              <p>
                É a área da odontologia voltada a restauração do sorriso não
                somente em seu aspecto visual, mas também funcional,
                dividindo-se em dentística estética e restauradora,
                respectivamente.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment3} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                ORTODONTIA <br />| Aparelho dentário
              </h2>
              <p>
                O tratamento ortodôntico é responsável por corrigir a posição
                dos dentes e também os ossos maxilares. Para isso, ela conta com
                diversas técnicas, como o tratamento ortodôntico, através do uso
                do aparelho.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment4} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                CLAREAMENTO <br />
                DENTÁRIO
              </h2>
              <p>
                Um belo sorriso diz muito mais do que qualquer outra coisa,
                dentes branquinhos trazem de volta a confiança e elevam a
                autoestima em um piscar de olhos. 
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment5} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                PRÓTESES | Coroas <br />| Pontes | Dentaduras
              </h2>
              <p>
                A prótese dentária é responsável pela reposição de tecidos
                bucais, visando restaurar e manter a forma, função, aparência e
                saúde bucal, se propõe a substituir a função original dos dentes
                perdidos ou ausentes.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment6} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                PERIODONTIA <br />| Tratamento da gengivite
              </h2>
              <p>
                A Periodontia se dedica a prevenção e tratamento dos problemas
                que afetam os tecidos periodontais, que são aqueles que
                sustentam e fixam os dentes.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment7} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                ODONTOPEDIATRIA <br />| Odontologia infantil
              </h2>
              <p>
                A especialidade que tem como objetivo o diagnóstico, a
                prevenção, o tratamento e o controle dos problemas de saúde
                bucal do bebê, da criança e do adolescente; a educação para a
                saúde bucal e a integração desses procedimentos com os dos
                outros profissionais da área da saúde.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment8} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                HARMONIZAÇÃO FACIAL <br />| Preenchimento
              </h2>
              <p>
                A Harmonização Facial também faz parte das competências do
                odontólogo, dentre outras profissões, que possui formação em
                anatomia de face tão boa quanto os médicos.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment9} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                ENDODONTIA <br />| Tratamento de canal
              </h2>
              <p>
                A endodontia ou tratamento de canal é a remoção da polpa do
                dente, um pequeno tecido semelhante a um fio que fica no
                interior do dente.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment10} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                CLÍNICA <br />
                GERAL
              </h2>
              <p>
                O clínico geral é, normalmente, o responsável pelo atendimento
                primário dos pacientes odontológicos, sendo encarregado de
                encaminhá-los a outros especialistas ou, em casos menos
                complexos, de resolver o problema encontrado.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
          <li className="treatment_card">
            <div className="treatment_card-img">
              <Image src={treatment11} alt="icone do tratamento" />
            </div>
            <div className="treatment_card-info">
              <h2>
                CIRURGIA <br />
                DENTÁRIA
              </h2>
              <p>
                São consideradas cirurgias odontológicas todos os procedimentos
                 realizados de forma manual, ou com auxílio de instrumentos,
                para tratar traumatismos e doenças que afetam os tecidos bucais,
                a arcada dentária e a face do paciente.
              </p>
            </div>
            <a
              className="book__btn"
              href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            >
              Agendar
            </a>
          </li>
        </ul>
      </section>
      <article className="treatment__open-info">
        <p>Segunda à Sexta: 8h às 18h30 Sábado: 8h às 13h30</p>
      </article>
    </>
  );
}
