import { ELanguage } from '@models/general.enum'
import Image from 'next/image'
import { AppContext } from 'pages/_app'
import React, { useContext } from 'react'

import iconFlagEn from '../../../public/assets/icons/flag-en.svg'
import iconFlagEs from '../../../public/assets/icons/flag-es.svg'

import { LanguageSwitchContainerStyled, LanguageSwitchImg } from './languageSwitch.styled'
import Link from 'next/link'

export function LanguageSwitch() {
  const { language } = useContext(AppContext)
  const currentIconFlag = language === ELanguage.EN ? iconFlagEn : iconFlagEs
  const [currentLocale, setCurrentLocale] = React.useState<boolean>(language === ELanguage.EN)

  function handleChangeLanguage() {
    setCurrentLocale(!currentLocale)
  }

  return (
    <>
      <LanguageSwitchContainerStyled onClick={handleChangeLanguage}>
        <Link href='/' locale={currentLocale ? 'en-US' : 'es-ES'} passHref>
          <LanguageSwitchImg width={40} height={40} src={currentIconFlag?.src} alt='current flag' />
        </Link>
      </LanguageSwitchContainerStyled>
    </>
  )
}
