import Image from 'next/image';
import avatar from '../../../../../public/img/avatar.webp';

export const Avatar = () => {
  return (
    <figure className="sess6__avatar">
      <Image loading="lazy" src={avatar} alt="um avatar em 3d" />
    </figure>
  );
};
