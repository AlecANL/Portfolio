import styled from 'styled-components'

export const ContactSectionStyled = styled.section`
  outline: 1px solid red;
  position: relative;
  display: flex;
  justify-content: center;
  padding-block: 3.125rem;
  margin-block: 200px;

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
`

export const ContactContent = styled.div`
  form {
    margin-block-start: 2.8125rem;
    padding-inline: 40px;
  }
  @media screen and (min-width: 768px) {
    max-inline-size: 515px;
  }
`

export const ContactGraphic = styled.img`
  position: absolute;

  &.headband {
    inset-inline-start: -150px;
    inset-block-start: -100px;
  }

  &.rocket {
    inset-inline-end: -150px;
  }
`
