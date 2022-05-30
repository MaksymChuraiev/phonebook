import {
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationList>
      <NavigationItem>
        <NavigationLink to="/">H</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/contacts">C</NavigationLink>
      </NavigationItem>
    </NavigationList>
  );
};
