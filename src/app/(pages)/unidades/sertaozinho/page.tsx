import Image from 'next/image';
import facebook from '../../../../../public/img/Facebook-black.svg';
import twittet from '../../../../../public/img/Twitter-black.svg';
import instagram from '../../../../../public/img/Instagram-black.svg';
import whatsapp from '../../../../../public/img/whatsapp-black.svg';
import image from '../../../../../public/img/clinics/sertaozinho.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/unidades/sertaozinho`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/unidades/sertaozinho`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/unidades/sertaozinho`
    }
  }
};

export default function Sertaozinho() {
  return (
    <>
      <section id="sess1_single-clinic" className="h-[85vh] w-full relative">
        <Image
          priority
          src={image}
          className="object-cover w-full h-full"
          alt="fachada da loja"
          quality={80}
        />
      </section>
      <section id="sess2_single-clinic">
        <h1>
          Clinica <br /> <span>Sempre Sorrindo</span>
        </h1>
        <div className="sess2_single-clinic-content">
          <p>Sertãozinho</p>
          <nav>
            <ul>
              <li>
                <a href="">
                  <Image src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={twittet} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={whatsapp} alt="whatsapp" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section id="sess3_single-clinic">
        <p>Responsável Técnico:</p>
        <h2>
          Dra. Lígia Monsef Gavaldão <br />
          CROSP: 100.071
        </h2>
        <div className="phone__contact">
          <p>Telefone:</p>
          <a href="tel:551630414151">(16) 3041-4151</a>
          <a href="tel:5516997993999">(16) 99799-3999</a>
        </div>
        <div className="whatsapp__contact">
          <p>Whatsapp:</p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            (16) 98165-1441
          </a>
        </div>
        <div className="address__info">
          <p>Nosso endereço:</p>
          <h3>
             R. Barão do Rio Branco, 1378 - Centro, Sertãozinho - SP, 14160-600
          </h3>
        </div>
      </section>
      <article className="clinic__open-info">
        <p>Segunda à Sexta: 8h às 18h30 Sábado: 8h às 13h30</p>
      </article>
      <section id="sess4_single_clinic">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.325332035245!2d-47.99042338506544!3d-21.139447485938536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b99924dd7021c7%3A0x1449c137bd82de76!2sCl%C3%ADnicas%20Sempre%20Sorrindo!5e0!3m2!1spt-BR!2sbr!4v1617550475996!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
