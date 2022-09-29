import styled from 'styled-components'

export const CardProjectStyled = styled.article`
  outline: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-block: 100px;
  }
`

export const CardProjectDescription = styled.div`
  p {
    margin-block: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    max-inline-size: 28.4375rem;
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
  margin-block-start: 1.5rem;

  a {
    display: flex;
    justify-content: center;
    inline-size: 100%;
    border-radius: 0.25rem;
    padding-block: 8px;
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
    margin-block-start: 2.5625rem;
  }
`

export const CardTagContent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const PatternImage = styled.img`
  inline-size: 278px;
  block-size: 152px;
  position: absolute;
  z-index: 0;
`
