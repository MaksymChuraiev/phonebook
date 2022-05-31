import styled from '@emotion/styled';
import { ImExit } from 'react-icons/im';

export const UserMenuWrap = styled.div`
  display: flex;
`;
export const UserMenuImage = styled.img``;
export const UserMenuText = styled.h2`
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 30px;
    width: 80px;
    height: 4px;
    background: #fff;
  }
`;
export const UserMenuButton = styled.button`
  position: relative;
  top: 0;
  width: 80px;
  height: 80px;

  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: top 0.5s, z-index 0s, transform 0.5s;
  transition-delay: 0.5s, 0.5s, 0s;

  &:hover {
    transition-delay: 0s, 0.5s, 0.5s;
    top: -50px;
    transform: translateY(50px);
    z-index: 11;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    transform: skewX(45deg) translateX(150px);
    transition: 0.5s;
  }

  &:hover::before {
    transform: skewX(45deg) translateX(-150px);
  }
`;

export const ExitIcon = styled(ImExit)``;
