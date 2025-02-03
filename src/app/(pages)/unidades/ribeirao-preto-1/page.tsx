import Image from 'next/image';
import facebook from '../../../../../public/img/Facebook-black.svg';
import twittet from '../../../../../public/img/Twitter-black.svg';
import instagram from '../../../../../public/img/Instagram-black.svg';
import whatsapp from '../../../../../public/img/whatsapp-black.svg';
import image from '../../../../../public/img/clinics/ribeirao-preto-1.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/ribeirao-preto-1}`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/ribeirao-preto-1}`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/ribeirao-preto-1}`
    }
  }
};

export default function Ribeirao1() {
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
          Dr. Caio Guedes Sordi <br />
          CROSP: 111.613
        </h2>
        <div className="phone__contact">
          <p>Telefone:</p>
          <a href="tel:551633253823">(16) 3325-3823</a>
          <a href="tel:5516991474961">(16) 99147-4961</a>
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
          <h3>Av. Presidente Vargas, n°498 - Jardim Sumaré - CEP 14025-405</h3>
        </div>
      </section>
      <article className="clinic__open-info">
        <p>Segunda à Sexta: 8h às 18h30 Sábado: 8h às 13h30</p>
      </article>
      <section id="sess4_single_clinic">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9823352062604!2d-47.80954338454105!3d-21.192860684288878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bedebddfadd5%3A0x60c4719f692a0ff6!2sAv.%20Pres.%20Vargas%2C%20498%20-%20Jardim%20Sumare%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-405!5e0!3m2!1spt-BR!2sbr!4v1655732921371!5m2!1spt-BR!2sbr"
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
