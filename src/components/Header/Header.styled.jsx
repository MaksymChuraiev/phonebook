import styled from '@emotion/styled';

export const HeaderSection = styled.header`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    z-index: 10;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
`;
