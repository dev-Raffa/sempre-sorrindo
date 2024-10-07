import { Contacts } from '@/app/components/contacts/component';
import { Logo } from '@/app/components/logo/component';
import { Navigation } from '@/app/components/navigation/component';

export const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <a id="mobile__btn" className="md:hidden" href="/" data-mobile="btn">
          {' '}
        </a>
        <Logo />
        <Navigation />
        <Contacts />
      </div>
    </header>
  );
};
