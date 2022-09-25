import styled, { keyframes } from 'styled-components'

export const HeroImageContainerStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    &::before {
      content: '';
      position: absolute;
      display: block;
      inline-size: 250px;
      block-size: 250px;
      border-radius: 100%;
      background: linear-gradient(0deg, rgba(106, 17, 203, 0.2), rgba(106, 17, 203, 0.2)),
        conic-gradient(from 180deg at 50% 50%, #21d4fd 0deg, rgba(183, 33, 255, 0) 360deg);
      background-blend-mode: overlay;
      filter: blur(48px);
      inset-inline-end: -40px;
      inset-block-start: 30px;
      z-index: 0;
    }
  }
`

export const slideIn = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20px);
  }
`

export const HeroImageIcons = styled.img`
  --delay: 0s;
  --time: 3s;

  position: absolute;

  &.animate {
    animation: ${slideIn} infinite alternate;
    animation-delay: var(--delay);
    animation-duration: var(--time);
  }

  &.icon-react {
    inset-block-start: 120px;
    inset-inline-start: 0;
  }

  &.icon-angular {
    inset-block-end: 0;
    --delay: 2s;
    inset-inline-start: 100px;
  }

  &.icon-typescript {
    inset-block-start: 50px;
    inset-inline-end: 0;
    --delay: 3s;
  }

  &.icon-tailwind {
    inset-block-end: 50px;
    inset-inline-end: 0;
    --delay: 1s;
  }

  &.icon-javascript {
    display: none;
    inset-inline-start: 150px;
    transform: rotate(345deg);
  }

  @media screen and (min-width: 768px) {
    &.icon-javascript {
      display: block;
    }

    &.icon-typescript {
      inset-block-start: 100px;
      inset-inline-end: 60px;
    }

    &.icon-tailwind {
      inset-block-end: 80px;
      inset-inline-end: 60px;
    }
  }
`
