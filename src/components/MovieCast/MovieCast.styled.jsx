import styled from '@emotion/styled';

export const CastContainer = styled.div`
  padding: 12px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 12px;
  max-width: 180px;
`;

export const CastName = styled.p`
font-size: 18px;
    font-weight: bold;
`;

export const CastChar = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
