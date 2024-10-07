import Image from 'next/image';
import facebook from '../../../../../public/img/Facebook.svg';
import twitter from '../../../../../public/img/Twitter.svg';
import whatsapp from '../../../../../public/img/whatsapp.svg';
import instagram from '../../../../../public/img/Instagram.svg';
import linkedin from '../../../../../public/img/LinkedIn.svg';
import youtube from '../../../../../public/img/Youtube.svg';

export const SocialMedias = () => {
  return (
    <div className="footer__media">
      <a href="https://www.facebook.com/clinicassempresorrindo">
        <Image src={facebook} alt="icone do facebook" />
      </a>
      <a href="https://twitter.com/@csempresorrindo">
        <Image src={twitter} alt="icone do twitter" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5516981651441&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20funciona%20a%20clinica!">
        <Image src={whatsapp} alt="icone do whatsapp" />
      </a>
      <a href="https://www.instagram.com/clinicassempresorrindo/">
        <Image src={instagram} alt="icone do instagram" />
      </a>
      <a href="https://www.linkedin.com/in/cl%C3%ADnicassempresorrindo/">
        <Image src={linkedin} alt="icone do linkedin" />
      </a>
      <a href="https://www.youtube.com/channel/UCfxR_O4k3dv-Lrcd759OYjw">
        <Image src={youtube} alt="icone do youtube" />
      </a>
    </div>
  );
};
