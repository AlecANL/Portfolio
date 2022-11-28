import styled from 'styled-components'

export const ProjectsContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 36px;
  padding: 1.5rem;

  @media screen and (min-width: 1024px) {
    padding: 30px 0 125px 0;
  }
`
