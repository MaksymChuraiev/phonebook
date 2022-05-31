import styled from '@emotion/styled';

export const ContactTitle = styled.h2`
  margin-top: 20px;
`;
export const ContactNameList = styled.ul`
  height: 600px;
  list-style-type: none;
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
  overflow: scroll;
`;
