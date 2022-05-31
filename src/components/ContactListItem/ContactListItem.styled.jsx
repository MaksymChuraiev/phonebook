import styled from '@emotion/styled';

export const ContactNameItem = styled.li`
  position: relative;
  padding: 20px 10px 10px 10px;
  margin-bottom: 10px;
  min-height: 60px;
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
export const ContactTextWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactNameText = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;
export const ContactNumberText = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const ContactListButton = styled.button`
  cursor: pointer;
  position: relative;
  top: 0;
  width: 60px;
  height: 60px;
  margin-left: 10px;
  margin-top: 10px;
  color: #fff;
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

export const Form = styled.form``;

export const FormInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FormInputName = styled.input`
  width: 65%;
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
export const FormInputNumber = styled.input`
  width: 35%;
  margin-left: 10px;
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
  margin-top: 10px;
  color: #fff;
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
