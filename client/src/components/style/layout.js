import styled from 'styled-components';

export const SectionContainer = styled.div.attrs({
  className: 'container'
})``;

export const Section = styled.div`
  background-color: ${props => props.bgColor};
`;

export const SectionTitle = styled.h1`
  color: ${props => props.color};
  text-align: center;
  margin: 1rem;
`;
