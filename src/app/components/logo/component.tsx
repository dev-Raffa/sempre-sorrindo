import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../../public/img/logo.webp';

export const Logo = () => {
  return (
    <Link href="/">
      <figure className="logo">
        <Image src={logoImg} alt="logo" />
      </figure>
    </Link>
  );
};
