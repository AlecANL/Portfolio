import { ELanguage } from '@models/general.enum'
import Image from 'next/image'
import { AppContext } from 'pages/_app'
import { useContext } from 'react'

import iconFlagEn from '../../../public/assets/icons/flag-en.svg'
import iconFlagEs from '../../../public/assets/icons/flag-es.svg'

import { LanguageSwitchContainerStyled } from './languageSwitch.styled'

export function LanguageSwitch() {
  const { language } = useContext(AppContext)
  const currentIconFlag = language === ELanguage.EN ? iconFlagEn : iconFlagEs

  return (
    <>
      <LanguageSwitchContainerStyled>
        <Image width={40} height={40} src={currentIconFlag} alt='current flag' />
      </LanguageSwitchContainerStyled>
    </>
  )
}
