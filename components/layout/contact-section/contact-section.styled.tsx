import styled from 'styled-components'

export const ContactSectionStyled = styled.section`
  outline: 1px solid red;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3.125rem 0;

  p {
    font: var(--body3-regular-desktop);
    color: ${({ theme }) => theme['just-white']};
    text-align: center;
  }

  h3.heading {
    background: linear-gradient(89.14deg, #f77062 16.27%, #fe5196 55.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font: var(--heading1-mobile);
  }
  
  @media screen and (min-width: 1024px) {
    margin: 200px 0;
  }
`

export const ContactContent = styled.div`
  form {
    margin-top: 2.8125rem;
  }
  @media screen and (min-width: 768px) {
    max-width: 515px;
    form {
      padding: 0 40px;
    }
  }
`

export const ContactGraphic = styled.img`
  position: absolute;
  display: none;

  &.headband {
    left: -150px;
    top: -100px;
  }

  &.rocket {
    right: -150px;
  }
  
  @media screen and (min-width: 1024px) {
    display: block;
  }

`
