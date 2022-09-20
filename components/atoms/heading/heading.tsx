import React from 'react'
import styled from 'styled-components'

interface IHeading {
  children: React.ReactNode
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({ type, children, ...props }: IHeading) => {
  const Container = styled(type)`
    margin: 0;
    text-align: center;
  `
  return <Container {...props}>{children}</Container>
}
