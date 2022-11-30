import styled from 'styled-components'

export const SweetProjectStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding: 2rem;
  background-color: ${({ theme }) => theme['darken-soft-gray']};
  font-family: Matter;

  h3.heading-h3 {
    color: ${({ theme }) => theme['just-white']};
    text-align: start;
    font-family: Matter;
    font-weight: 500;
    font-size: 25px;
    margin-top: 12px;
  }

  img {
    border-radius: 0.75rem;
  }

  p {
    color: ${({ theme }) => theme['davys-gray']};
    font-size: 18px;
    line-height: 28px;
    margin: 12px 0 1.5rem 0;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    overflow: hidden;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .primary,
  .secondary {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    align-items: center;

    span {
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .primary {
    justify-content: center;
    padding: 1rem 2.5rem;
    border-radius: 100px;
    width: 100%;
    text-align: center;
    background: ${({ theme }) => theme['just-white']};
    color: ${({ theme }) => theme['just-black']};
    border: 1px solid transparent;
    transition: box-shadow 0.3s ease;

    i {
      font-size: 1rem;
    }
  }

  .secondary {
    width: 100%;
    justify-content: center;
    text-align: right;
    color: ${({ theme }) => theme['just-white']};
    transition: color 0.3s ease;

    &:hover {
      color: hsl(212, 95%, 57%);
    }

    span {
      text-transform: uppercase;
    }

    i {
      font-size: 10px;
      margin-top: 1.8px;
    }
  }

  .primary:hover {
    border: 1px solid ${({ theme }) => theme['darken-soft-gray']};
    box-shadow: 0 0 0 3px ${({ theme }) => theme['darken-soft-gray']}, 0 0 0 5px ${({ theme }) => theme['just-white']};
  }

  @media screen and (min-width: 400px) {
    .primary {
      max-width: 180px;
    }

    .secondary {
      justify-content: flex-end;
    }
  }
`
