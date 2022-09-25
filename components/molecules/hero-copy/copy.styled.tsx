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
    padding-block: 0.5rem;
  }

  p {
    margin-block: 1.5rem 1rem;
    text-align: center;
  }

  .position {
    background: linear-gradient(87.84deg, #f77062 17.87%, #fe5196 74.89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    align-self: flex-start;

    .name {
      padding-block: 0;
    }

    p {
      margin-block: 1.5rem;
      text-align: start;
    }
  }

  @media screen and (min-width: 1024px) {
    align-self: center;
    max-inline-size: 40.25rem;
    margin-block: 1.5rem 2.6875rem;

    &::before {
      content: '';
      position: absolute;
      display: block;
      inline-size: 250px;
      block-size: 250px;
      border-radius: 100%;
      background: linear-gradient(0deg, rgba(106, 17, 203, 0.2), rgba(106, 17, 203, 0.2)),
        conic-gradient(from 180deg at 50% 50%, #2575fc 0deg, rgba(183, 33, 255, 0) 360deg);
      background-blend-mode: normal, overlay;
      filter: blur(48px);
      inset-inline-start: -100px;
      inset-block-start: -50px;
      z-index: 0;
    }
  }
`
