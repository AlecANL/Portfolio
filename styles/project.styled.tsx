import styled from 'styled-components'

export const ProjectStyledContainer = styled.main`
  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'description cover';
    gap: 1.5rem;
    padding: 3rem 0;

    > div {
      grid-area: description;
      max-width: 100%;
    }

    > span {
      grid-area: cover;
    }
  }
`
