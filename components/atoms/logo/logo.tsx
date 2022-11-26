import Image from 'next/image'
import { useContext } from 'react'

import { AppContext } from 'pages/_app'

import logoDarkMode from '../../../public/assets/icons/logo_alec_dev-dark.svg'
import logoLightMode from '../../../public/assets/icons/logo_alec_dev-light.svg'

import { ETheme } from '@models/general.enum'
import Link from "next/link";
import {CustomLink} from "@atoms/link";

export function Logo() {
  const { theme } = useContext(AppContext)
  const currentLogo = theme === ETheme.LIGHT ? logoLightMode : logoDarkMode

  return (
    <>
      <CustomLink url={'/'}>
        <Image src={currentLogo} alt='logo include a rocket icon and left side name between curly brackets with alexei name' />
      </CustomLink>
    </>
  )
}
