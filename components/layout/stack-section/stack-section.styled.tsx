import styled from 'styled-components'

export const StackSectionStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3.75rem;
  align-items: center;
  margin: 2.5rem 0 2.5rem 0;

  h2.heading {
    text-transform: capitalize;
    background: linear-gradient(88.61deg, #f77062 -28.93%, #fe5196 97.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font: var(--heading1-mobile);
  }

  @media screen and (min-width: 768px) {
    margin-top: 6.25rem;
    padding-bottom: 250px;
  }

  @media screen and (min-width: 1024px) {
    margin: 14.5rem 0 8rem 0;
  }
`

export const StackSectionImage = styled.img``

export const StackSectionImagePlanet = styled.img`
  position: absolute;
  display: none;

  &.planet1 {
    transform: translateX(-400px);
    left: 0;
    right: -50px;
  }

  &.planet2 {
    transform: translateX(100px);
    right: 0;
    bottom: 0;
  }

  &.planet3 {
    transform: translateX(140px);
    top: -100px;
    right: 0;
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`

export const StackImageContent = styled.div`
  max-width: 47.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;

  & > div {
    border-radius: 100px;
    min-width: 190px;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.5rem 1rem 0.5rem 0.75rem;
    background: ${({ theme }) => theme['darken-soft-gray']};
  }

  span:first-child {
    border-radius: 50%;
    overflow: hidden;
  }

  span.badge-name {
    font-size: 18px;
    font-family: Matter;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme['just-white']};
  }
`
