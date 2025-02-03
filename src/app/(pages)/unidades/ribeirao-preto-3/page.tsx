import Image from 'next/image';
import facebook from '../../../../../public/img/Facebook-black.svg';
import twittet from '../../../../../public/img/Twitter-black.svg';
import instagram from '../../../../../public/img/Instagram-black.svg';
import whatsapp from '../../../../../public/img/whatsapp-black.svg';
import image from '../../../../../public/img/clinics/ribeirao-preto-3.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/ribeirao-preto-3}`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/ribeirao-preto-3}`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/ribeirao-preto-3}`
    }
  }
};

export default function Ribeirao3() {
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
          <p>Ribeirão Preto</p>
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
          Dr. Juan Antoniazi <br />
          CROSP: 148.975
        </h2>
        <div className="phone__contact">
          <p>Telefone:</p>
          <a href="tel:551636324459">(16) 3632-4459</a>
          <a href="tel:5516997695999">(16) 99769-5999</a>
          <a href="tel:5516982636565">(16) 98263-6565</a>
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
            RR. São Sebastião, 610 - Centro, Ribeirão Preto - SP, 14015-040
          </h3>
        </div>
      </section>
      <article className="clinic__open-info">
        <p>Segunda à Sexta: 8h às 18h30 Sábado: 8h às 13h30</p>
      </article>
      <section id="sess4_single_clinic">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3888575429232!2d-47.81158398506473!3d-21.17670618591841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9befb91d11981%3A0x27b44c76ad50f4bb!2sCl%C3%ADnicas%20Sempre%20Sorrindo!5e0!3m2!1spt-BR!2sbr!4v1617550986714!5m2!1spt-BR!2sbr"
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
