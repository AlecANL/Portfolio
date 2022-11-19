import styled from 'styled-components'
import { IButtonProps } from './button'

export const ButtonStyled = styled.button<IButtonProps>`
  padding: .5rem 1.5rem;
  font: var(--button-regular-mobile);
  border-color: transparent;
  border-radius: 4px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 768px) {
    font: var(--button-regular-desktop);
  }
`
