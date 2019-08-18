import styled from 'styled-components';

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
