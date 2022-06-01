import styled from '@emotion/styled';

export const BackGroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom, #ff4f8b, #dff1ff);
`;
export const ColorElement = styled.div`
  position: absolute;
  filter: blur(150px);

  &:first-of-type {
    top: -250px;
    background: #ff359b;
    width: 600px;
    height: 600px;
  }

  &:nth-of-type(2) {
    bottom: -150px;
    left: 100px;
    background: #fffd87;
    width: 600px;
    height: 600px;
  }

  &:last-of-type {
    bottom: 0;
    right: 0;
    background: #00d2ff;
    width: 400px;
    height: 400px;
  }
`;
