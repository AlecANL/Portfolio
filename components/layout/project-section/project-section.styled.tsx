import styled from 'styled-components'

export const ProjectSectionStyled = styled.section`
  padding-inline: 1.5rem;

  article:nth-child(even) {
    & > img {
      inset-block-start: -20px;
      inset-inline-start: -130px;
    }

    & > span {
      order: 2;
    }

    & > div {
      order: 1;
    }
  }

  article:nth-child(odd) {
    & > img {
      inset-block-start: -20px;
      inset-inline-end: 40px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-block: 3rem;
  }
`

export const ProjectSectionCardsContainer = styled.div``
