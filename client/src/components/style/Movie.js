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

export const MovieCard = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const CardContent = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardHeader = styled.div`
  border-bottom: 1px soild black;
  display: flex;
`;

export const CardHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardBody = styled.div`
  padding: 1rem;
  margin: auto;
`;

export const CardFooter = styled.div`
  border-top: 1px soild black;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;
