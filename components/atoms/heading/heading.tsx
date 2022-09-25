import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
interface IHeading {
  children: React.ReactNode
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export const Heading = ({ type, children, className, ...props }: IHeading) => {
  const Container = styled(type)`
    margin: 0;
    text-align: center;

    &.heading-h1 {
      font: var(--heading1-mobile);
    }

    &.heading-h2 {
      font: var(--heading2-mobile);
    }

    &.heading-h3,
    &.heading-h4 {
      font: var(--heading3-mobile);
    }

    @media screen and (min-width: 768px) {
      &.heading-h1 {
        font: var(--heading1-tablet);
      }

      &.heading-h2 {
        font: var(--heading2-tablet);
      }

      &.heading-h3,
      &.heading-h4 {
        font: var(--heading3-tablet);
      }
    }

    @media screen and (min-width: 1024px) {
      &.heading-h1 {
        font: var(--heading1-desktop);
      }

      &.heading-h2 {
        font: var(--heading2-desktop);
      }

      &.heading-h3,
      &.heading-h4 {
        font: var(--heading3-desktop);
      }
    }
  `

  return (
    <Container
      className={classnames('heading', {
        [`heading-${type}`]: type,
        [className]: className,
      })}
      {...props}
    >
      {children}
    </Container>
  )
}
