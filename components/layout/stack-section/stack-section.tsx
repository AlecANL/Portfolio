import { StackImageContent, StackSectionImage, StackSectionImagePlanet, StackSectionStyled } from './stack-section.styled'

import stackListJson from '@data/stack.json'
import { IStack } from '@models/stack.interface'
import classnames from 'classnames'
import { Heading } from '@atoms/heading'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'
import { useLanguage } from '@hooks/useLanguage'

import planet1Icon from '/public/assets/icons/planets/planet-1.svg'
import planet2Icon from '/public/assets/icons/planets/planet-2.svg'
import planet3Icon from '/public/assets/icons/planets/planet-3.svg'

export function StackSection() {
  const listStack: IStack[] = stackListJson
  const { currentLanguage } = useLanguage(en, es)

  return (
    <>
      <StackSectionStyled>
        <Heading type='h2'>{currentLanguage['title:stack']}</Heading>
        <StackImageContent>
          {listStack.map(stack => (
            <StackSectionImage
              className={classnames({
                [`icon-${stack.name}`]: stack.name,
              })}
              key={stack.id}
              src={stack.icon}
              alt={stack.name}
            />
          ))}
        </StackImageContent>

        <StackSectionImagePlanet className='planet1' src={planet1Icon.src} alt='first planet' />
        <StackSectionImagePlanet className='planet2' src={planet2Icon.src} alt='second planet' />
        <StackSectionImagePlanet className='planet3' src={planet3Icon.src} alt='third planet' />
      </StackSectionStyled>
    </>
  )
}
