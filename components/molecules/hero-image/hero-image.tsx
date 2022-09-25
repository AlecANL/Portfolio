import Image from 'next/image'

import { HeroImageContainerStyled, HeroImageIcons } from './hero-image.styled'

import computerImage from 'public/assets/images/computer_tech.svg'
import angularIcon from 'public/assets/icons/stack/angular-icon.svg'
import reactIcon from 'public/assets/icons/stack/react-icon.svg'
import typescriptIcon from 'public/assets/icons/stack/typescript-icon.svg'
import tailwindIcon from 'public/assets/icons/stack/tailwind-icon.svg'
import javascriptIcon from 'public/assets/icons/stack/javascript-icon.svg'

export function HeroImage() {
  return (
    <>
      <HeroImageContainerStyled>
        <Image src={computerImage} alt='computer image contain tech stack' />
        <HeroImageIcons className='icon-angular animate' src={angularIcon.src} alt='angular icon' />
        <HeroImageIcons className='icon-react animate' src={reactIcon.src} alt='react icon' />
        <HeroImageIcons className='icon-typescript animate' src={typescriptIcon.src} alt='typescript icon' />
        <HeroImageIcons className='icon-tailwind animate' src={tailwindIcon.src} alt='tailwind icon' />
        <HeroImageIcons className='icon-javascript' src={javascriptIcon.src} alt='javascript icon' />
      </HeroImageContainerStyled>
    </>
  )
}
