import {
  UserMenuWrap,
  UserMenuText,
  UserMenuButton,
  ExitIcon,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <UserMenuWrap>
      <UserMenuText>Hello, {name}</UserMenuText>
      <UserMenuButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <ExitIcon />
      </UserMenuButton>
    </UserMenuWrap>
  );
};
