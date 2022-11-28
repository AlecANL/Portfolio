import styled, { keyframes } from 'styled-components'

const gradientAnimated = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`

export const HeaderStyled = styled.header`
  position: sticky;
  inset-block-start: 0;
  padding-inline: 0.5rem;
  padding-block: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme['body-color']};
  z-index: 99;

  @media screen and (min-width: 375px) {
    padding: 0.8rem 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 6px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: ${gradientAnimated} 15s ease infinite;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const HeaderNavContent = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderWidgetContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
`

interface ISome {
  isOpen: boolean
}

export const HeaderIconMenu = styled.div<ISome>`
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  .line {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2.5px;
    display: block;
    background-color: ${({ theme }) => theme['light-blue']};
    transition: all 0.3s ease-in-out;
  }
  .line::before,
  .line::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 2.5px;
    background-color: ${({ theme }) => theme['light-blue']};
    transition: all 0.3s ease-in-out;
  }
  .line::before {
    top: -0.5rem;
  }
  .line::after {
    top: 0.5rem;
  }

  ${props =>
    props.isOpen &&
    `
    .line {
      background-color: transparent;
    }

    .line::before {
      top: 0;
      transform: rotate(45deg);
    }

    .line::after {
        top: 0;
        transform: rotate(-45deg);
      }
  `}

  @media screen and (min-width: 768px) {
    display: none;
  }
`
