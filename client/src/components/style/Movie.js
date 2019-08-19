import styled from 'styled-components';
import { device } from './settings/devices';

export const MovieCard = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
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
  margin: 1rem 0;
  flex-direction: column;
`;

export const CardBody = styled.div`
  padding: 0 0.6rem;
  margin: auto;
  overflow: hidden;
  flex-grow: 2;
  > p {
    font-size: 0.7rem;
  }
`;

export const CardFooter = styled.div`
  border-top: 1px soild black;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const MovieBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 2rem;
`;

export const MovieStats = styled.p`
  font-size: ${props => props.size};
  &:hover {
    color: ${props => props.hoverColor};
  }
`;

export const MovieDescription = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4rem 7rem;
  color: white;
`;

export const DescriptionPoster = styled.img`
  width: 100%;
  height: 100%;
`;

export const DescriptionStats = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionTitle = styled.h3`
  color: white;
`;

export const DescriptionOverview = styled.div`
  display: flex;
  flex-direction: column;
  color: #aaa;
`;
