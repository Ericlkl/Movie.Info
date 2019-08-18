import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  * {
    flex-grow: 2;
    flex-basis: 0;
  }

  *:nth-child(1) {
    flex-grow: 0.3;
  }

  *:last-child {
    flex-grow: 0.2;
  }
`;

export const Poster = styled.img`
  width: 300px;
  height: 500px;
`;

export const Rating = styled.div`
  display: flex;
`;

export const RatingInfo = styled.div`
  margin: 0rem;
`;

export const RatingCountText = styled.div`
  font-size: 0.75rem;
  color: grey;
`;
