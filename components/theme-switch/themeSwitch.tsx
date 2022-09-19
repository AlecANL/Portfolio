import { useContext } from 'react'
import Image from 'next/image'

import { AppContext } from 'pages/_app'

import { ThemeSwitchStyled } from './themeSwitch.styled'

import iconSun from '../../public/assets/icons/icon-sun.svg'
import iconMoon from '../../public/assets/icons/icon-moon.svg'

import { ETheme } from '../../models/general.enum'

export function ThemeSwitch() {
  const { toggleTheme, theme } = useContext(AppContext)
  const currentLogo = theme === ETheme.LIGHT ? iconMoon : iconSun

  return (
    <>
      <ThemeSwitchStyled onClick={toggleTheme}>
        <Image width={40} height={40} src={currentLogo} alt='icon to show for darkMode' />
      </ThemeSwitchStyled>
    </>
  )
}
