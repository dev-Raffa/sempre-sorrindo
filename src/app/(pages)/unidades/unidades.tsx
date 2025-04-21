import { ReactElement } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import BarretosImage from '@public/img/clinics/barretos.webp';
import BebedoureImage from '@public/img/clinics/bebedouro.webp';
import Franca1Image from '@public/img/clinics/franca.webp';
import JaboticabalImage from '@public/img/clinics/jaboticabal.webp';
import RibeiraoPreto1Image from '@public/img/clinics/ribeirao-preto-1.webp';
import RibeiraoPreto2Image from '@public/img/clinics/ribeirao-preto-2.webp';
import RibeiraoPreto3Image from '@public/img/clinics/ribeirao-preto-3.webp';
import RibeiraoPreto4Image from '@public/img/clinics/ribeirao-preto-4.webp';
import RibeiraoPreto5Image from '@public/img/clinics/ribeirao-preto-5.webp';
import SertaozinhoImage from '@public/img/clinics/sertaozinho.webp';
import AraraquaraImage from '@public/img/clinics/araraquara.jpg';

export interface IUnidade {
  imgURl: StaticImport;
  cidade: string;
  slug: string;
  facebook: string;
  instagram: string;
  twitter: string;
  whatsapp: string;
  cro: string;
  responsavelTecnico: {
    nome: string;
    cro: string;
  };
  contato: {
    telefones: string[];
    whatsapp: string;
    celular: string;
  };
  endereco: string;
  cep: string;
  mapa: ReactElement;
}

export const unidades: IUnidade[] = [
  {
    imgURl: BarretosImage,
    cidade: 'Barretos',
    slug: 'barretos',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '024.411',
    responsavelTecnico: {
      nome: 'Dra. Júlia Del Bianco Giacon',
      cro: '145.795'
    },
    contato: {
      telefones: ['(17) 3612-0477', '(17) 98109-0150'],
      whatsapp: '5517981090150',
      celular: '(17) 98109-0150'
    },
    endereco: 'Calçadão da 21, 589 - Centro, Barretos - SP',
    cep: '14780-050',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14942.972972427977!2d-48.5685809!3d-20.5576837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b282a8d8314eb4c!2sCl%C3%ADnicas%20Sempre%20Sorrindo!5e0!3m2!1spt-BR!2sbr!4v1622136330338!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: BebedoureImage,
    cidade: 'Bebedouro',
    slug: 'bebedouro',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '026.887',
    responsavelTecnico: {
      nome: 'Dra. Ingrid Antoniazi',
      cro: '119.726'
    },
    contato: {
      telefones: ['(17) 3342-9331'],
      whatsapp: '5517996824209',
      celular: '(17) 99682-4209'
    },
    endereco: 'Praça da Matriz, 100 - Centro, Bebedouro - SP,',
    cep: '14700-010',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.6399936391545!2d-48.480879924327866!3d-20.95010479015554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bbe3fe23cb8f61%3A0x786ce6b1db9af594!2sErmida%20M%C3%A3e%20Rainha!5e0!3m2!1spt-BR!2sbr!4v1652746442814!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: Franca1Image,
    cidade: 'Franca',
    slug: 'franca-1',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '014.507',
    responsavelTecnico: {
      nome: 'Dr IVAN FERREIRA TEIXEIRA',
      cro: '155.056'
    },
    contato: {
      telefones: ['(16) 3701-4040', '(16) 99628-8999'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'Rua Voluntários da Franca, nº 1325 - Centro ',
    cep: '14400-490',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.264573678684!2d-47.40473218507569!3d-20.536352986267193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a630532c416b%3A0xa7b0bc526cc0bcf4!2sRua%20Volunt%C3%A1rios%20da%20Franca%2C%201325%20-%20Centro%2C%20Franca%20-%20SP%2C%2014400-490!5e0!3m2!1spt-BR!2sbr!4v1617550769864!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: Franca1Image,
    cidade: 'Franca',
    slug: 'franca-2',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '032.750',
    responsavelTecnico: {
      nome: 'Dr. Andrey Henrique Peres Fachineli',
      cro: '101.327'
    },
    contato: {
      telefones: ['(16) 3701-4040', '(16) 99628-8999'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'R. General Telles, 1255 - Centro - SP',
    cep: '14400-450',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.2645736786836!2d-47.40473218507569!3d-20.536352986267193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a65aa3c6b517%3A0xf8adf0b567278b36!2sR.%20Gen.%20Telles%2C%201255%20-%20Centro%2C%20Franca%20-%20SP%2C%2014400-450!5e0!3m2!1spt-BR!2sbr!4v1617550769864!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: JaboticabalImage,
    cidade: 'Jaboticabal',
    slug: 'jaboticabal',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '027.827',
    responsavelTecnico: {
      nome: 'Dra. Caroline Cabrera Silva',
      cro: '137.906'
    },
    contato: {
      telefones: ['(16) 2141-2491', '(16) 99717-4362'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'R. Rui Barbosa, 619 - Centro, Jaboticabal - SP',
    cep: '14870-300',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.37048641161!2d-48.3184414!3d-21.256797499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b96c82afd287c9%3A0x1edc52030f7f9a78!2sR.%20Rui%20Barbosa%2C%20619%20-%20Centro%2C%20Jaboticabal%20-%20SP%2C%2014870-300!5e0!3m2!1spt-BR!2sbr!4v1664908253703!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: RibeiraoPreto1Image,
    cidade: 'Ribeirão Preto',
    slug: 'ribeirao-preto-1',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '026.841',
    responsavelTecnico: {
      nome: 'Dr. Caio Guedes Sordi',
      cro: '111.163'
    },
    contato: {
      telefones: ['(16) 3325-3823', '(16) 99147-4961'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'Av. Presidente Vargas, n°498 - Jardim Sumaré - SP',
    cep: '14025-405',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9823352062604!2d-47.80954338454105!3d-21.192860684288878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bedebddfadd5%3A0x60c4719f692a0ff6!2sAv.%20Pres.%20Vargas%2C%20498%20-%20Jardim%20Sumare%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-405!5e0!3m2!1spt-BR!2sbr!4v1655732921371!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: RibeiraoPreto2Image,
    cidade: 'Ribeirão Preto',
    slug: 'ribeirao-preto-2',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '010.968',
    responsavelTecnico: {
      nome: 'Dr. CAIO FRANCESCHINI QUATROCHI',
      cro: '130.225'
    },
    contato: {
      telefones: ['(16) 3632-3366', '(16) 99619-3999', '(16) 98146-0459'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'R. Amador Bueno, 490 - Centro, Ribeirão Preto - SP',
    cep: '14010-070',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.440826384863!2d-47.81332358506483!3d-21.174640185919554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bef9a2e95555%3A0x34dbcad60b2026ce!2sCl%C3%ADnicas%20Sempre%20Sorrindo!5e0!3m2!1spt-BR!2sbr!4v1617551126090!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: RibeiraoPreto3Image,
    cidade: 'Ribeirão Preto',
    slug: 'ribeirao-preto-3',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '012.121',
    responsavelTecnico: {
      nome: 'Dr. Juan Antoniazi',
      cro: '148.975'
    },
    contato: {
      telefones: ['(16) 3632-4459', '(16) 99769-5999', '(16) 98263-6565'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'R. São Sebastião, 610 - Centro, Ribeirão Preto - SP',
    cep: '14015-040',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3888575429232!2d-47.81158398506473!3d-21.17670618591841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9befb91d11981%3A0x27b44c76ad50f4bb!2sCl%C3%ADnicas%20Sempre%20Sorrindo!5e0!3m2!1spt-BR!2sbr!4v1617550986714!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: RibeiraoPreto4Image,
    cidade: 'Ribeirão Preto',
    slug: 'ribeirao-preto-4',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '012.840',
    responsavelTecnico: {
      nome: 'Dr. Bruno Adolpho De Oliveira',
      cro: '137.315'
    },
    contato: {
      telefones: ['(16) 3632-4459', '(16) 99769-5999', '(16) 98263-6565'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'R. Tibiriçá, 576 - Centro, Ribeirão Preto - SP',
    cep: '14010-090',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3888575429232!2d-47.81158398506473!3d-21.17670618591841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9befa9f7e1a9d%3A0xb8a0d0a3a94dc784!2sR.%20Tibiri%C3%A7%C3%A1%2C%20576%20-%20Centro%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014010-090!5e0!3m2!1spt-BR!2sbr!4v1617550986714!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: RibeiraoPreto5Image,
    cidade: 'Ribeirão Preto',
    slug: 'ribeirao-preto-5',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '024.204',
    responsavelTecnico: {
      nome: 'Dr. Rodrigo José Ciampaglia Sacchini',
      cro: '091.669'
    },
    contato: {
      telefones: ['(16) 3966-6088', '(16) 98254-1800'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'Av. Dom Pedro I, 709 - Ipiranga, Ribeirão Preto - SP',
    cep: '14055-620',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.904261958359!2d-47.82145118544257!3d-21.156207983067016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be40dd5e353b%3A0xe4d9371477a13096!2sAv.%20Dom%20Pedro%20I%2C%20709%20-%20Ipiranga%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014055-620!5e0!3m2!1spt-BR!2sbr!4v1617550925769!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: SertaozinhoImage,
    cidade: 'Sertãozinho',
    slug: 'sertaozinho',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '015.088',
    responsavelTecnico: {
      nome: 'Dra. Lígia Monsef Gavaldão',
      cro: '100.071'
    },
    contato: {
      telefones: ['(16) 3041-4151', '(16) 99799-3999'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'R. Barão do Rio Branco, 1378 - Centro, Sertãozinho - SP',
    cep: '14160-600',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.325332035245!2d-47.99042338506544!3d-21.139447485938536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b99924dd7021c7%3A0x1449c137bd82de76!2sCl%C3%ADnicas%20Sempre%20Sorrindo!5e0!3m2!1spt-BR!2sbr!4v1617550475996!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  },
  {
    imgURl: AraraquaraImage,
    cidade: 'Araraquara',
    slug: 'araraquara',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
    cro: '032.875',
    responsavelTecnico: {
      nome: 'Dr. Felipe Alves DA S. Geradelli',
      cro: '131.333'
    },
    contato: {
      telefones: ['(16) 98261-0040'],
      whatsapp: '5516981651441',
      celular: '(16) 98165-1441'
    },
    endereco: 'R. Nove de Julho, 602 - Centro, Araraquara - SP',
    cep: '14801-295',
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.6741490878508!2d-48.17703512549209!3d-21.792868799011234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3e5de932a89%3A0xa34478829d28bfc3!2sR.%20Nove%20de%20Julho%2C%20602%20-%20Araraquara%2C%20SP%2C%2014801-295!5e0!3m2!1spt-BR!2sbr!4v1740526430654!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    )
  }
];
