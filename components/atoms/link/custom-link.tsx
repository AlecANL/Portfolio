import Link from 'next/link'
import React from 'react'
import { CustomLinkStyled } from './custom-link.styled'
import classnames from 'classnames'

interface ICustomLinkProps {
  url: string
  children: React.ReactNode
  className?: string
  isOpenNewTab?: boolean
}

export function CustomLink(props: ICustomLinkProps) {
  const { url, children, className, isOpenNewTab } = props ?? {}

  return (
    <>
      <Link href={url} passHref>
        <CustomLinkStyled
          target={isOpenNewTab ? '_blank' : '_self'}
          rel={isOpenNewTab ? 'noopener noreferrer' : ''}
          className={classnames({
            [className]: className,
          })}
        >
          {children}
        </CustomLinkStyled>
      </Link>
    </>
  )
}
