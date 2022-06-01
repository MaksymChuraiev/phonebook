import styled from '@emotion/styled';
import { IoPersonAdd } from 'react-icons/io5';

export const ContactPageWrap = styled.div`
  margin: 0 auto;
  width: 1280px;
  display: flex;
  padding: 10px;
`;

export const FormWrap = styled.div`
  flex-basis: calc(50% - 20px);
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

export const Form = styled.form``;
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
  margin-top: 10px;
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  padding: 10px 20px;
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
export const FormButton = styled.button`
  cursor: pointer;
  position: relative;
  top: 0;
  width: 60px;
  height: 60px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);

  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    transform: skewX(45deg) translateX(150px);
    transition: 0.5s;
  }

  &:hover::before {
    transform: skewX(45deg) translateX(-150px);
  }
`;

export const AddIcon = styled(IoPersonAdd)``;
