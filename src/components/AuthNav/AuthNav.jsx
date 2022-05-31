import {
  AuthNavList,
  AuthNavLink,
  AuthNavItem,
  RegisterIcon,
  LoginIcon,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <AuthNavLink to="/register">
          <RegisterIcon />
        </AuthNavLink>
      </AuthNavItem>
      <AuthNavItem>
        <AuthNavLink to="/login">
          <LoginIcon />
        </AuthNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};
