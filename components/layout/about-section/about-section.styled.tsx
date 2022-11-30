import styled from 'styled-components'

export const AboutSectionStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
    justify-content: space-between;

    &::before {
      position: absolute;
      top: -20px;
      left: 50px;
      content: '';
      display: block;
      width: 350px;
      height: 350px;
      background: linear-gradient(0deg, rgba(0, 242, 254, 0.2), rgba(0, 242, 254, 0.2)),
        linear-gradient(180deg, #4facfe 0%, rgba(183, 33, 255, 0) 100%);
      background-blend-mode: normal, overlay;
      filter: blur(50px);
      border-radius: 50%;
    }
  }
`

export const AboutSectionDescription = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  max-width: 40.25rem;

  h2.heading {
    color: ${({ theme }) => theme['just-white']};
    font: var(--heading1-mobile);
    text-transform: capitalize;
  }

  p {
    font-family: Matter;
    font-size: 24px;
    color: ${({ theme }) => theme['davys-gray']};
  }

  @media screen and (min-width: 768px) {
    p {
      /* font: var(--body2-regular-desktop); */
    }
  }
`
