import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  padding: 12px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ReviewTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
`;

export const ReviewText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const ReviewNoInfo = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: tomato;
`;
