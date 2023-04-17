import styled from '@emotion/styled';

export const BaseMovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;
  margin-bottom: 24px;
`;

export const MoviePoster = styled.img`
  max-width: 320px;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const AdditionalInfoTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  font-weight: bold;
`;

export const AdditionalList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0 12px;
  width: 100%;
`;

export const AdditionalItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 97%;
  padding: 6px;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
`;
