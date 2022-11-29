import styled from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    button {
      width: 162px;
      align-self: flex-end;
      background-color: ${({ theme }) => theme['black-currant']};
      color: ${({ theme }) => theme['just-white']};
    }
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label,
  input,
  textarea {
    display: block;
    width: 100%;
  }

  label {
    font-size: 1.125rem;
    font-family: Matter;
    text-transform: capitalize;
  }

  input,
  textarea {
    border: none;
    background-color: hsl(229, 11%, 20%);
    /* background-color: ${({ theme }) => theme['black-currant']}; */
    padding: 1rem 0.5rem;
    border-radius: 8px;
    color: ${({ theme }) => theme['soft-gray']};
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    font-family: Matter;
    padding: 2rem;

    &::placeholder {
      color: ${({ theme }) => theme['soft-gray']};
      font-size: 18px;
    }
  }

  textarea {
    resize: none;
  }
`
