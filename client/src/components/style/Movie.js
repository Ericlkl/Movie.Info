import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  * {
    flex-grow: 1;
    flex-basis: 0;
  }

  *:nth-child(1) {
    flex-grow: 0.3;
  }
`;

export const Rating = styled.div`
  display: flex;
`;

export const RatingInfo = styled.div`
  margin: 0.75rem;
`;

export const RatingCountText = styled.div`
  font-size: 0.75rem;
  color: grey;
`;
