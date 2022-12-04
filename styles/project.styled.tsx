import styled from 'styled-components'

export const ProjectStyledContainer = styled.main`
  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'description cover';
    gap: 1.5rem;
    padding: 3rem 0;

    > div {
      grid-area: description;
      max-width: 100%;
    }

    > span {
      grid-area: cover;
    }
  }

  > div > a {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 0 0;
    font-weight: bold;
    min-width: 110px;
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme['just-white']};
    }

    i {
      transform: rotate(180deg);
    }
  }
`

export const ProjectStackStyled = styled.div`
  display: flex;
  gap: 1rem;
  div {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    gap: 0.75rem;
  }
`

export const ProjectDetail = styled.div`
  padding: 2rem 0;

  p {
    font-size: 20px;
  }

  h4.heading-h4 {
    text-align: start;
    padding: 1.5rem 0;
    color: #fff;
    font-size: 2rem;
  }
`

export const ProjectContent = styled.div`
  /* max-width: 900px;
  margin: 0 auto; */
`

export const ProjectRequirementContent = styled.div`
  h4.heading-h4 {
    text-align: start;
    padding: 1.5rem 0;
    color: #fff;
    font-size: 2rem;
  }

  ul {
    font-size: 1.25rem;
    margin: 0;
  }

  li {
    padding: 0.5rem 0;
  }
`
