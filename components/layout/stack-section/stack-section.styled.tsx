import styled from 'styled-components'

export const StackSectionStyled = styled.section`
  outline: 1px solid red;
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
`

export const StackSectionImage = styled.img``

export const StackSectionImagePlanet = styled.img`
  position: absolute;
  display: none;

  &.planet1 {
    left: -180px;
    right: -50px;
  }

  &.planet2 {
    right: 0;
    bottom: 0;
  }

  &.planet3 {
    top: 0;
    right: 0;
  }
  
  @media screen and (min-width: 1024px) {
    display: block;
  }
  
 
`

export const StackImageContent = styled.div`
  max-width: 27.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`
