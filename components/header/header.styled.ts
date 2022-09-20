import styled from 'styled-components'

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
    padding-inline: 1.5rem;
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
  inline-size: 40px;
  block-size: 40px;
  cursor: pointer;
  .line {
    position: absolute;
    inset-block-start: 50%;
    inline-size: 100%;
    block-size: 2.5px;
    display: block;
    background-color: ${({ theme }) => theme['light-blue']};
    transition: all 0.3s ease-in-out;
  }
  .line::before,
  .line::after {
    position: absolute;
    content: '';
    display: block;
    inline-size: 100%;
    block-size: 2.5px;
    background-color: ${({ theme }) => theme['light-blue']};
    transition: all 0.3s ease-in-out;
  }
  .line::before {
    inset-block-start: -0.5rem;
  }
  .line::after {
    inset-block-start: 0.5rem;
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
