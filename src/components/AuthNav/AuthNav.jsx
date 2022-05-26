import { AuthNavWrap, AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrap>
      <AuthNavLink to="/register">Registr</AuthNavLink>
      <AuthNavLink to="/login">Login</AuthNavLink>
    </AuthNavWrap>
  );
};
