import styled from '@emotion/styled';

export const ContactFilterLabel = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20px;
    width: 20px;
    height: 1px;
    background: #fff;
  }
`;
export const ContactFilterInput = styled.input`
  width: 100%;
  height: 60px;

  border: none;
  outline: none;
  padding: 10px 20px;

  margin-top: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
