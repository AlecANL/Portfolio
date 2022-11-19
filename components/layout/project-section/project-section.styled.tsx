import styled from 'styled-components'

export const ProjectSectionStyled = styled.section`
  @media screen and (min-width: 768px) {
    article:nth-child(even) {
      & > img {
        top: -20px;
        left: -130px;
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
        top: -20px;
        right: 40px;
      }
    }
  }
 
  @media screen and (min-width: 1024px) {
    padding: 3rem 0;
  }
`

export const ProjectSectionCardsContainer = styled.div``
