import Image from 'next/image'
import { Heading } from '@atoms/heading'
import { Paragraph } from '@atoms/paragraph'

import { AboutSectionDescription, AboutSectionStyled } from './about-section.styled'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'

import aboutIcon from '/public/assets/images/about-icon.svg'
import { useLanguage } from '@hooks/useLanguage'

export function AboutSection() {
  const { currentLanguage } = useLanguage(en, es)

  return (
    <>
      <AboutSectionStyled id='about'>
        <Image src={aboutIcon} alt='about icon include a rocket up to planet' />
        <AboutSectionDescription>
          <Heading type='h2'>{currentLanguage['title:about']}</Heading>
          <Paragraph>{currentLanguage['description:about']}</Paragraph>
        </AboutSectionDescription>
      </AboutSectionStyled>
    </>
  )
}
