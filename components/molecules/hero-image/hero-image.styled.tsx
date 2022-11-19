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
      width: 250px;
      height: 250px;
      border-radius: 100%;
      background: linear-gradient(0deg, rgba(106, 17, 203, 0.2), rgba(106, 17, 203, 0.2)),
        conic-gradient(from 180deg at 50% 50%, #21d4fd 0deg, rgba(183, 33, 255, 0) 360deg);
      background-blend-mode: overlay;
      filter: blur(48px);
      right: -40px;
      top: 30px;
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
    top: 120px;
    left: 0;
  }

  &.icon-angular {
    --delay: 2s;
    left: 100px;
    bottom: 0;
  }

  &.icon-typescript {
    --delay: 3s;
    top: 50px;
    right: 0;
  }

  &.icon-tailwind {
    --delay: 1s;
    bottom: 50px;
    right: 0;
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
      top: 100px;
      right: 60px;
    }

    &.icon-tailwind {
      bottom: 80px;
      right: 60px;
    }
  }
`
