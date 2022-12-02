import styled from 'styled-components'

export const ProjectSectionStyled = styled.section`
  margin: 80px 0 100px 0;

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

    margin: 80px 0 100px 0;
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

  .link {
    margin-top: 4rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: ${({ theme }) => theme['just-white']};
      font-size: 22px;
      font-family: Matter;
      font-weight: bold;
    }


    .another-circle {
      cursor:pointer;
      stroke-dasharray: 95;
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 900ms ease;
      transform-origin: 0px 0px 0px;
    }

    a:hover .another-circle {
      stroke-dashoffset: -95px;
      stroke:  ${({ theme }) => theme['just-white']};
      transform="translate(5,14)"
    }

    a:hover svg {
      transform: translate(10px, -25%);
    }

    svg {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -5%;
      left: 58%;
      transform: translateY(-25%);
      stroke:  ${({ theme }) => theme['just-white']};
      transition: transform .3s ease;
    }

    circle {
      stroke: hsl(233, 5%, 31%);
    }
  }
`

export const ProjectSectionCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media screen and (min-width: 1024px) {
    gap: 150px;
  }
`
