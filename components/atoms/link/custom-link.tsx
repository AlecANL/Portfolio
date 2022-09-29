import Link from 'next/link'
import React from 'react'
import { CustomLinkStyled } from './custom-link.styled'
import classnames from 'classnames'

interface ICustomLinkProps {
  url: string
  children: React.ReactNode
  className?: string
}

export function CustomLink(props: ICustomLinkProps) {
  const { url, children, className } = props ?? {}

  return (
    <>
      <Link href={url} passHref>
        <CustomLinkStyled
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
