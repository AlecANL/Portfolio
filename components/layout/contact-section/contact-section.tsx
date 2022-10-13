import { Heading } from '@atoms/heading'
import { ContactContent, ContactGraphic, ContactSectionStyled } from './contact-section.styled'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'
import { useLanguage } from '@hooks/useLanguage'
import { Paragraph } from '@atoms/paragraph'
import { Form } from '@molecules/form'

import headbandImage from '/public/assets/icons/graphic/had-up-icon.svg'
import rocketImage from '/public/assets/icons/graphic/rokcet-icon.svg'
import Image from 'next/image'

export function ContactSection() {
  const { currentLanguage } = useLanguage(en, es)

  return (
    <>
      <ContactSectionStyled>
        <ContactGraphic className='headband' src={headbandImage.src} alt='headband icon' />
        <ContactGraphic className='rocket' src={rocketImage.src} alt='rocket icon' />
        {/* <Image src={headbandImage} alt='headband icon' /> */}
        {/* <Image src={rocketImage} alt='rocket icon' /> */}
        <ContactContent>
          <Heading type='h3'>{currentLanguage['title:contact']}</Heading>
          <Paragraph>{currentLanguage['description:contact']}</Paragraph>
          <Form />
        </ContactContent>
      </ContactSectionStyled>
    </>
  )
}
