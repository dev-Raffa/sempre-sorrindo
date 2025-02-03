import Image from 'next/image';
import facebook from '../../../../../public/img/Facebook-black.svg';
import twittet from '../../../../../public/img/Twitter-black.svg';
import instagram from '../../../../../public/img/Instagram-black.svg';
import whatsapp from '../../../../../public/img/whatsapp-black.svg';
import image from '../../../../../public/img/clinics/barretos.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/barretos}`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/barretos}`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/barretos}`
    }
  }
};

export default function Barretos() {
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
          <p>Barretos</p>
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
          Dra. Júlia Del Bianco Giacon <br />
          CROSP: 145.795
        </h2>
        <div className="phone__contact">
          <p>Telefone:</p>
          <a href="tel:551736120477">(17) 3612-0477</a>
          <a href="tel:5517981090150">(17) 98109-0150</a>
        </div>
        <div className="whatsapp__contact">
          <p>Whatsapp:</p>
          <a
            href="https://api.whatsapp.com/send/?phone=5517981090150&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            (17) 98109-0150
          </a>
        </div>
        <div className="address__info">
          <p>Nosso endereço:</p>
          <h3>Calçadão da 21, 589 - Centro, Barretos - SP, 14780-050</h3>
        </div>
      </section>
      <article className="clinic__open-info">
        <p>Segunda à Sexta: 8h às 18h30 Sábado: 8h às 13h30</p>
      </article>
      <section id="sess4_single_clinic">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14942.972972427977!2d-48.5685809!3d-20.5576837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b282a8d8314eb4c!2sCl%C3%ADnicas%20Sempre%20Sorrindo!5e0!3m2!1spt-BR!2sbr!4v1622136330338!5m2!1spt-BR!2sbr"
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
