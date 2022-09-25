import Image from 'next/image'

import { HeroImageContainerStyled } from './hero-image.styled'

import computerImage from 'public/assets/images/computer_tech.svg'

export function HeroImage() {
  return (
    <>
      <HeroImageContainerStyled>
        <Image src={computerImage} alt='computer image contain tech stack' />
      </HeroImageContainerStyled>
    </>
  )
}
