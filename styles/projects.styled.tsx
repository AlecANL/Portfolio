import styled from 'styled-components'

export const ProjectsContentStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;

  article {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    padding: 90px 0 125px 0;
  }
`
