import {
  NavigationList,
  NavigationItem,
  NavigationLink,
  HomeIcon,
  ContactsIcon,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationList>
      <NavigationItem>
        <NavigationLink to="/">
          <HomeIcon />
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/contacts">
          <ContactsIcon />
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  );
};
