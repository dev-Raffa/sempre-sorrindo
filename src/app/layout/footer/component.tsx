import Image from 'next/image';
import whatsapp from '../../../../public/img/whatsapp-white.svg';
import { SocialMedias } from '@/app/components/lists/socialmedias/component';

export const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__links-list">
          <ul>
            <li>
              <a href="">Institucional</a>
            </li>
            <li>
              <a href="/unidades">Clinicas</a>
            </li>
            <li>
              <a href="/tratamentos">Tratamentos</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Notícias</a>
            </li>
            <li>
              <a href="">Fale Conosco</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/premios">Prêmios</a>
            </li>
            <li>
              <a href="">Responsabilidade Social</a>
            </li>
            <li>
              <a href="">Trabalhe Conosco</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer__links-contact">
            <div>
              <a href="https://api.whatsapp.com/send/?phone=5516981651441&text&type=phone_number&app_absent=0">
                Atendimento Whatsapp: (16) 98165-1441
              </a>
              <a href="tel:0800-943-2222">telefone: 0800-943-2222</a>
            </div>
          </div>
          <div className="footer__info">
            <div>
              <p>Segunda à Sexta de 8h às 18h30</p>
              <p>Sábado: 8h30 às 13h30</p>
            </div>
          </div>
        </div>
        <SocialMedias />
      </div>
      <div className="whatsapp__btn_floating">
        <a href="https://api.whatsapp.com/send?phone=5516981651441&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20funciona%20a%20clinica!">
          <Image
            src={whatsapp}
            alt="icone do whatsapp direto para atendimento."
          />
        </a>
      </div>
    </footer>
  );
};
