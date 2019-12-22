import styled from 'styled-components';

export const SectionContainer = styled.div.attrs({
  className: 'container'
})``;

export const Section = styled.div`
  padding: 2rem 0;
  background-color: ${props => props.bgColor};
`;

export const SectionTitle = styled.h1`
  color: ${props => props.color};
  text-align: center;
  margin: 2rem 1rem;
`;
