import Image from 'next/image';
import google from '../../../../../public/img/google.webp';

export const GooglePicture = () => {
  return <Image loading="lazy" src={google} alt="" />;
};
