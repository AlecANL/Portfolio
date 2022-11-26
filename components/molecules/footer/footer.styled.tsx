import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: .5rem 1.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
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
  }
`

export const FooterStyledIcons = styled.img``;
