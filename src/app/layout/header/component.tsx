import { Contacts } from '@/app/components/contacts/component';
import { Logo } from '@/app/components/logo/component';
import { Navigation } from '@/app/components/navigation/component';

export const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <input
          id="mobile__btn"
          className="md:hidden"
          data-mobile="btn"
          type="checkbox"
          name="showMenu"
          defaultChecked={false}
        />
        <Logo />
        <Navigation />
        <Contacts />
      </div>
    </header>
  );
};
