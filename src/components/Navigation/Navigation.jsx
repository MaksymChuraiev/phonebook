import { NavigationWrap, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationWrap>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/contacts">Contacts</NavigationLink>
    </NavigationWrap>
  );
};
