import Image from 'next/image';
import facebook from '../../../../../public/img/Facebook-black.svg';
import twittet from '../../../../../public/img/Twitter-black.svg';
import instagram from '../../../../../public/img/Instagram-black.svg';
import whatsapp from '../../../../../public/img/whatsapp-black.svg';
import image from '../../../../../public/img/clinics/bebedouro.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `https://clinicassempresorrindo.com.br/unidades/bebedouro`,
    languages: {
      'pt-BR': `https://clinicassempresorrindo.com.br/unidades/bebedouro`,
      'pt-BR-alt': `https://beta.clinicassempresorrindo.com.br/unidades/bebedouro`
    }
  }
};

export default function Bebedouro() {
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
          <p>Bebedouro</p>
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
          Dra. Ingrid Antoniazi <br />
          CROSP: 119.726
        </h2>
        <div className="phone__contact">
          <p>Telefone:</p>
          <a href="tel:551621412491">(17) 3342-9331</a>
        </div>
        <div className="whatsapp__contact">
          <p>Whatsapp:</p>
          <a
            href="https://api.whatsapp.com/send/?phone=5517996824209&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            (17) 99682-4209
          </a>
        </div>
        <div className="address__info">
          <p>Nosso endereço:</p>
          <h3>Praça da Matriz, 100 - Centro, Bebedouro - SP, 14700-010</h3>
        </div>
      </section>
      <article className="clinic__open-info">
        <p>Segunda à Sexta: 8h às 18h30 Sábado: 8h às 13h30</p>
      </article>
      <section id="sess4_single_clinic">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.6399936391545!2d-48.480879924327866!3d-20.95010479015554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bbe3fe23cb8f61%3A0x786ce6b1db9af594!2sErmida%20M%C3%A3e%20Rainha!5e0!3m2!1spt-BR!2sbr!4v1652746442814!5m2!1spt-BR!2sbr"
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
