import styled from 'styled-components'

interface INavigationStyled {
  isOpen: boolean
}

export const NavigationStyled = styled.nav<INavigationStyled>`
  position: fixed;
  background-color: ${({ theme }) => theme['body-color']};
  inset-inline: 0;
  inset-block-start: 95px;
  inset-block-end: 0;
  visibility: hidden;
  z-index: 99;
  transition: visibility 0.2s ease-out;

  ${props =>
    props.isOpen &&
    `
        visibility: visible;
    `}

  @media screen and (min-width: 768px) {
    position: static;
    visibility: visible;
    background-color: unset;
  }
`

export const NavigationListStyled = styled.ul<INavigationStyled>`
  li {
    padding: 1rem;
    color: var(--secondary);
  }

  margin: 0;
  padding-inline: 1.5rem;
  background-color: var(--just-white);
  list-style-type: none;
  text-align: center;
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  a {
    text-transform: uppercase;
    font-size: 14px;
  }

  ${props =>
    props.isOpen &&
    `
    transform: translateX(0);
  `}

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    transform: translateX(0);
  }
`
