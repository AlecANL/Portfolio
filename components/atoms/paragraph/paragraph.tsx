import { ParagraphStyled } from './paragraph.styled'
import React from 'react'
import classnames from 'classnames'

interface IParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}

export function Paragraph(props: IParagraphProps) {
  const { className, children, ...otherProps } = props

  return (
    <>
      <ParagraphStyled
        className={classnames({
          [className]: className,
        })}
        {...otherProps}
      >
        {children}
      </ParagraphStyled>
    </>
  )
}
