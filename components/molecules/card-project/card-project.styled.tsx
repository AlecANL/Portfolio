import styled from 'styled-components'

export const CardProjectStyled = styled.article`
  outline: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 100px 0;
  }
`

export const CardProjectDescription = styled.div`
  p {
    margin: 1.5rem 0;
  }

  @media screen and (min-width: 1024px) {
    max-width: 28.4375rem;
    align-self: center;

    h3.heading {
      text-align: start;
      color: ${({ theme }) => theme['just-white']};
      text-transform: capitalize;
      z-index: 1;
      position: relative;
    }

    h3.heading {
      font: var(--heading1-desktop);
    }

    p {
      font-size: 1.25rem;
      z-index: 1;
      position: relative;
    }
  }
`

export const CardProjectButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 0.25rem;
    padding: 8px 0;
    &:active {
      transform: scale(0.95);
    }
  }

  .primary {
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme['just-white']};
    color: ${({ theme }) => theme['black-currant']};
  }

  .secondary {
    border: 2px solid ${({ theme }) => theme['just-white']};
    color: ${({ theme }) => theme['just-white']};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2.5625rem;
  }
`

export const CardTagContent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const PatternImage = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
  z-index: 0;
  
  @media screen and (min-width: 768px) {
    width: 278px;
    height: 152px;
  }
`
