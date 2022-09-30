import styled from 'styled-components'

export const StackSectionStyled = styled.section`
  outline: 1px solid red;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3.75rem;
  align-items: center;

  h2.heading {
    text-transform: capitalize;
    background: linear-gradient(88.61deg, #f77062 -28.93%, #fe5196 97.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font: var(--heading1-mobile);
  }

  @media screen and (min-width: 768px) {
    margin-block-start: 6.25rem;
    padding-block-end: 250px;
  }
`

export const StackSectionImage = styled.img``

export const StackSectionImagePlanet = styled.img`
  position: absolute;

  &.planet1 {
    inset-inline-start: -180px;
    inset-block-end: -50px;
  }

  &.planet2 {
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  &.planet3 {
    inset-inline-end: 0;
    inset-block-start: 0;
  }
`

export const StackImageContent = styled.div`
  max-inline-size: 27.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`
