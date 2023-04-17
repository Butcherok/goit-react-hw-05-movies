import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TitleHome = styled.h1`
  padding: 24px 48px;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  color: #212121;
  border: 2px solid lightblue;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MoviesTrendList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0 12px;
  width: 100%;
`;

export const MoviesTrendItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 97%;
  padding: 20px 12px;
  border: 1px solid lightblue;
  border-radius: 5px;
  &:nth-of-type(2n) {
    background-color: lightblue;
  }
  &:nth-of-type(2n-1) {
    background-color: #cbf0fd;
  }
  font-size: 22px;
  font-weight: 500;
  `;

export const MovieTrendLink = styled(Link)`
  color: #212121;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: tomato;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
