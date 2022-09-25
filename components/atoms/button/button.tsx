import React from 'react'
import { ButtonStyled } from './button.styled'
import classnames from 'classnames'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  action?: 'default' | 'primary' | 'secondary' | 'transparent'
  ariaLabel?: string
}

export function Button(props: IButtonProps) {
  const { children, className, action = 'default', ariaLabel, ...otherProps } = props

  return (
    <>
      <ButtonStyled
        className={classnames({
          [className]: className,
          [`btn-${action}`]: action,
        })}
        aria-label={ariaLabel}
        {...otherProps}
      >
        {children}
      </ButtonStyled>
    </>
  )
}
