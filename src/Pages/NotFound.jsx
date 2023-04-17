import { MainContainer, MovieTrendLink, NoPage, NoPageText } from 'components/MoviesList/MoviesList.styled';
import React from 'react';

const NotFound = () => {
  return (
    <MainContainer>
      <NoPage>
        <NoPageText>This page does not exist! Please, go to</NoPageText>
        <MovieTrendLink to={'/'}> Home page </MovieTrendLink>
        <NoPageText>and try again.</NoPageText>
      </NoPage>
    </MainContainer>
  );
};

export default NotFound;
