import Link from 'next/link'
import React from 'react'
import { CustomLinkStyled } from './custom-link.styled'

interface ICustomLinkProps {
  url: string
  children: React.ReactNode
}

export function CustomLink(props: ICustomLinkProps) {
  const { url, children } = props ?? {}

  return (
    <>
      <Link href={url} passHref>
        <CustomLinkStyled>{children}</CustomLinkStyled>
      </Link>
    </>
  )
}
