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

  .heading-h2 {
    text-transform: capitalize;
    letter-spacing: 1px;
    background: linear-gradient(87.84deg, #f77062 17.87%, #fe5196 74.89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const ProjectSectionCardsContainer = styled.div`
  @media screen and (min-width: 1024px) {
    article {
      margin: 150px 0;
    }
  }
`
