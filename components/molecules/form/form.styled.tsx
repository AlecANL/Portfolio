import styled from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

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
    font-size: 12px;
    text-transform: capitalize;
  }

  input,
  textarea {
    border: none;
    background-color: ${({theme}) => theme['black-currant']};
    padding: 1rem .5rem;
    border-radius: 4px;
    color: ${({theme}) => theme['soft-gray']};

    &::placeholder {
      color: ${({theme}) => theme['soft-gray']};
    }
  }

  textarea {
    resize: none;
  }
`
