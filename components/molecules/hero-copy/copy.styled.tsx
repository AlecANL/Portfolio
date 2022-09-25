import styled from 'styled-components'

export const CopyStyled = styled.div`
  .name {
    color: ${({ theme }) => theme['just-white']};
    padding-block: 0.5rem;
  }

  .position {
    background: linear-gradient(87.84deg, #f77062 17.87%, #fe5196 74.89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;

    .name {
      padding-block: 0;
    }

    p {
      margin-block: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    align-self: center;
    max-inline-size: 40.25rem;
    margin-block: 1.5rem 2.6875rem;
  }
`
