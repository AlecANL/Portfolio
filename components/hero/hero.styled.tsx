import styled from 'styled-components'

export const HeroStyled = styled.div`
  padding: 1.5rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
