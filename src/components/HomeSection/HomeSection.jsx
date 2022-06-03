import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { authSelectors } from 'redux/auth';
import {
  FirstEl,
  ElWrap,
  SecondEl,
  ThirdEl,
  FourthEl,
  FifthEl,
  SixthEl,
  SeventhEl,
  ElText,
  HomeSectionTitle,
  RegisterText,
  RegisterLink,
  MyPageLink,
  MyPageLinkText,
} from './HomeSection.styled';

export const HomeSection = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#00d2ff' },
      { opacity: 0, color: '#ff359b' },
    ],
    from: { opacity: 0, color: '#ff359b' },
  });

  return (
    <>
      <HomeSectionTitle>Welcome to the phone book!</HomeSectionTitle>

      {!isLoggedIn && (
        <RegisterText>
          Please
          <RegisterLink to="/register"> register </RegisterLink>
          or
          <RegisterLink to="/login"> login</RegisterLink>!
        </RegisterText>
      )}

      <ElWrap>
        <FirstEl>
          <ElText>Your mother</ElText>
          <ElText>111-11-11</ElText>
        </FirstEl>
        <SecondEl>
          <ElText>Your dad</ElText>
          <ElText>222-22-22</ElText>
        </SecondEl>
        <ThirdEl>
          <ElText>Your best friend</ElText>
          <ElText>333-33-33</ElText>
        </ThirdEl>
        <FourthEl>
          <ElText>Your son</ElText>
          <ElText>444-44-44</ElText>
        </FourthEl>
        <FifthEl>
          <ElText>Your daughter</ElText>
          <ElText>555-55-55</ElText>
        </FifthEl>
        <SixthEl>
          <ElText>Your wife</ElText>
          <ElText>555-55-55</ElText>
        </SixthEl>
        <SeventhEl>
          <ElText>Your husband</ElText>
          <ElText>555-55-55</ElText>
        </SeventhEl>
      </ElWrap>
      <MyPageLink href="https://github.com/MaksymChuraiev">
        <animated.div style={styles}>
          <MyPageLinkText>Designed by Maksym Churaiev.</MyPageLinkText>
        </animated.div>
      </MyPageLink>
    </>
  );
};
