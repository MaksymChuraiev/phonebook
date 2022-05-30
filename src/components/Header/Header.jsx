import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderSection } from './Header.styled';
import { authSelectors } from 'redux/auth';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetching = useSelector(authSelectors.getIsFetching);

  return (
    <HeaderSection>
      <Navigation />
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && !isFetching && <AuthNav />}
    </HeaderSection>
  );
};
