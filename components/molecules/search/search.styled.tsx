import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  input, select {
    padding: 12px;
    font-size: 16px;
    border-radius: 4px;
    background: ${({theme}) => theme["black-currant"]};
    border-color: transparent;
    color: ${({theme}) => theme['just-white']};
    
    &::placeholder {
      color: ${({theme}) => theme['just-white']};
    }
  }
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    padding: 64px 0 1.5rem 0;
    
    input {
      min-width: 364px;
    }
    
    select {
      min-width: 158px;
    }
  }
`;
