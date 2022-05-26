// import { Container } from 'components/Container/Container.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderSection } from './Header.styled';

export const Header = () => {
  return (
    <HeaderSection>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </HeaderSection>
  );
};
