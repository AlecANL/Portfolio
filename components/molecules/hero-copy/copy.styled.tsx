import styled from 'styled-components'

export const CopyStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .name,
  .position,
  h4,
  p {
    z-index: 1;
  }

  .name {
    color: ${({ theme }) => theme['just-white']};
    padding: 0.5rem 0;
  }

  p {
    margin-block: 1.5rem 1rem;
    text-align: center;
    color: ${({ theme }) => theme['davys-gray']};
  }

  h4 {
    color: ${({ theme }) => theme['davys-gray']};
  }

  .position {
    background: linear-gradient(87.84deg, #f77062 17.87%, #fe5196 74.89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  button {
    padding: 1rem 2.5rem;
    border: 1px solid transparent;
    transition: box-shadow 0.3s ease;
    border-radius: 100px;
  }

  button:hover {
    border: 1px solid ${({ theme }) => theme['darken-soft-gray']};
    box-shadow: 0 0 0 3px ${({ theme }) => theme['darken-soft-gray']}, 0 0 0 5px ${({ theme }) => theme['just-white']};
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    align-self: flex-start;

    .name {
      padding: 0;
    }

    p {
      margin-block: 1.5rem;
      text-align: start;
    }
  }

  @media screen and (min-width: 1024px) {
    align-self: center;
    max-width: 40.25rem;
    margin: 1.5rem 0 2.6875rem 0;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 250px;
      height: 250px;
      border-radius: 100%;
      background: linear-gradient(0deg, rgba(106, 17, 203, 0.2), rgba(106, 17, 203, 0.2)),
        conic-gradient(from 180deg at 50% 50%, #2575fc 0deg, rgba(183, 33, 255, 0) 360deg);
      background-blend-mode: normal, overlay;
      filter: blur(48px);
      left: -100px;
      top: -50px;
      z-index: 0;
    }
  }
`
