import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: 0.5rem 1.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  span {
    text-transform: capitalize;
    font-weight: bold;
  }

  a:hover span {
    //text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    padding: 2rem 0;
  }
`

export const FooterStyledIcons = styled.img``
