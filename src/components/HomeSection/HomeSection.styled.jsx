import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeSectionTitle = styled.h1`
  margin-top: 20px;
  position: relative;
  color: #fff;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 1px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 80px;
    width: 200px;
    height: 6px;
    background: #fff;
  }
`;

export const RegisterText = styled.p`
  position: relative;
  margin-top: 200px;
  margin-left: 50px;
  color: #fff;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 1px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 80px;
    width: 170px;
    height: 6px;
    background: #fff;
  }
`;
export const RegisterLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

export const ElWrap = styled.div``;

export const FirstEl = styled.div`
  position: absolute;
  top: 150px;
  right: 50px;
  width: 500px;
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const SecondEl = styled.div`
  position: absolute;
  bottom: 300px;
  left: 660px;
  position: relative;

  width: 500px;
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
`;

export const ThirdEl = styled.div`
  position: absolute;
  bottom: 50px;
  right: 360px;
  width: 500px;
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const FourthEl = styled.div`
  position: absolute;
  top: 250px;
  left: 260px;
  width: 500px;
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const FifthEl = styled.div`
  position: absolute;
  bottom: 150px;
  left: 60px;
  width: 500px;
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const SixthEl = styled.div`
  position: absolute;
  bottom: 350px;
  right: 60px;
  width: 500px;
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const SeventhEl = styled.div`
  position: absolute;
  bottom: 300px;
  right: 160px;
  width: 500px;
  height: 60px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const ElText = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const MyPageLink = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 20px;
  font-size: 20px;
`;

export const MyPageLinkText = styled.p`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20px;
    width: 30px;
    height: 2px;
  }
`;

export const MyPageLinkTextBand = styled.p``;
