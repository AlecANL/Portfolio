import styled from 'styled-components'

export const ContactSectionStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3.125rem 0;

  p {
    font-family: Matter;
    font-size: 2rem;
    color: #fff;
    margin-top: 1.5rem;
    /* font: var(--body3-regular-desktop); */
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

  a {
    margin-top: 1.5rem;
    display: block;
    color: #2a89fa;
    font-size: 3rem;
    font-weight: bold;
    text-decoration: underline;
  }

  @media screen and (min-width: 1024px) {
    margin: 80px 0;
  }
`

export const ContactContent = styled.div`
  form {
    margin-top: 2.8125rem;
  }
  @media screen and (min-width: 768px) {
    max-width: 1000px;
    form {
      /* padding: 0 40px; */
    }
  }
`

export const ContactGraphic = styled.img`
  position: absolute;
  display: none;

  &.headband {
    left: -150px;
    top: -145px;
  }

  &.rocket {
    right: -220px;
    top: -35px;
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`
