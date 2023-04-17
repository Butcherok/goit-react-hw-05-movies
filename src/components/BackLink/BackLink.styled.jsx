import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackwardLink = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 24px;
  color: #212121;
  font-size: 22px;
  font-weight: 500;
  &:hover,
  &:focus {
    scale: 1.05;
    color: tomato;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
