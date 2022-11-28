import Image from 'next/image'

import { TechTagStyled } from './tech-tag.styled'

import { ITagStack } from '@models/project.interface'

export function TechTag(props: ITagStack) {
  const { icon, name, height, width } = props ?? {}

  return (
    <>
      <TechTagStyled>
        <Image width={height ?? 12} height={width ?? 12} src={icon} alt={`${name} icon`} />
        <span className='badge-name'> {name} </span>
      </TechTagStyled>
    </>
  )
}
