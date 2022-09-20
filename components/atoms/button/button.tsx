import React from 'react'
import { ButtonStyled } from './button.styled'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string
  children: React.ReactNode
  action: 'default' | 'primary' | 'secondary' | 'transparent'
  ariaLabel?: string
}

export function Button(props: IButtonProps) {
  const { children, className, action, ariaLabel, ...otherProps } = props

  return (
    <>
      <ButtonStyled action={action} className={className} aria-label={ariaLabel} {...otherProps}>
        {children}
      </ButtonStyled>
    </>
  )
}
