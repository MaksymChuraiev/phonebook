import { UserMenuWrap, UserMenuText, UserMenuButton } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserMenuWrap>
      <UserMenuText>Hello boy</UserMenuText>
      <UserMenuButton type="button">Exit</UserMenuButton>
    </UserMenuWrap>
  );
};
