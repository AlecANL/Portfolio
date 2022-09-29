import styled from 'styled-components'

export const CardProjectStyled = styled.article`
  outline: 1px solid red;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-block: 1.5rem;
  }
`

export const CardProjectDescription = styled.div`
  outline: 1px solid blue;

  @media screen and (min-width: 1024px) {
    max-inline-size: 28.4375rem;
    align-self: center;

    h3.heading {
      outline: 1px solid red;
      text-align: start;
      color: ${({ theme }) => theme['just-white']};
      text-transform: capitalize;
    }

    h3.heading {
      font: var(--heading1-desktop);
    }

    p {
      margin-block: 1.5rem;
      font-size: 1.25rem;
    }
  }
`

export const CardProjectButtons = styled.div``

export const CardTagContent = styled.div``
