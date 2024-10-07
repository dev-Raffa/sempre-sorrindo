import Image from 'next/image';
import image from '../../../../../public/img/clinic3d.webp';

export const ClinicImage = () => {
  return (
    <Image
      className="clinic3d"
      loading="lazy"
      src={image}
      alt="representação em 3d de clinica dentária"
    />
  );
};
