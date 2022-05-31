import styled from '@emotion/styled';
import { IoMdDoneAll } from 'react-icons/io';

export const FormTitle = styled.h2`
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-left: 40px;
  margin-bottom: 20px;

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
export const Form = styled.form`
  width: 50%;
  padding: 20px;
  margin: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const FormLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 10px;

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
export const FormInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  padding: 10px 20px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
export const FormButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 80px;
  height: 80px;
  text-decoration: none;
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
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  overflow: hidden;

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

export const RegisterButtonIcon = styled(IoMdDoneAll)``;
