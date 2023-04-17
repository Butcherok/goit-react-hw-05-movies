import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 24px;
  padding: 24px 48px;
`;

export const InputForm = styled.input`
  padding: 12px;
  border-radius: 10px;
  font-size: 18px;
  min-width: 250px;
`;

export const BtnForm = styled.button`
  padding: 12px;
  border-radius: 10px;
  color: #212121;
  background-color: lightblue;
  font-size: 18px;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
    color: tomato;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
