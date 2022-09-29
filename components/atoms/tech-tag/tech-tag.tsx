import Image from 'next/image'

import { TechTagStyled } from './tech-tag.styled'

import { ITagStack } from '@models/project.interface'


export function TechTag(props: ITagStack) {
  const { icon, name } = props ?? {}

  return (
    <>
      <TechTagStyled>
        <Image width={12} height={12} src={icon} alt={`${name} icon`} />
        <span> {name} </span>
      </TechTagStyled>
    </>
  )
}
