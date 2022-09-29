import styled from 'styled-components'

export const TechTagStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding-inline: 0.75rem;
  padding-block: 8px;
  background-color: ${({ theme }) => theme['dark-grey']};
  color: ${({ theme }) => theme['just-white']};
  border-radius: 0.25rem;
  font-size: 0.75rem;
  text-transform: capitalize;
`
