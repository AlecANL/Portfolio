import { WrapperStyled } from './wrapper.styled'

export function Wrapper({ children }) {
  return (
    <>
      <WrapperStyled>{children}</WrapperStyled>
    </>
  )
}
