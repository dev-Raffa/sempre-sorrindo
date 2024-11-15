import { Contacts } from '@/app/components/contacts/component';
import { Logo } from '@/app/components/logo/component';
import { DesktopNavigation } from '@/app/components/navigation/desktop/component';
import { MobileNavigation } from '@/app/components/navigation/mobile/component';

export const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <MobileNavigation />
        <Logo />
        <DesktopNavigation />
        <Contacts />
      </div>
    </header>
  );
};
