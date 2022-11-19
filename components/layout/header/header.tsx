import React from 'react'
import Navigation from '../../navigation/navigation'

import { Logo } from '@atoms/logo/logo'
import { ThemeSwitch } from '@atoms/theme-switch/themeSwitch'
import { LanguageSwitch } from '@atoms/language-switch/languageSwitch'
import { Wrapper } from '@atoms/wrapper/wrapper'

import { HeaderContent, HeaderIconMenu, HeaderNavContent, HeaderStyled, HeaderWidgetContent } from './header.styled'

function Header() {
  const [isOpenMenu, setOpenMenu] = React.useState(false)

  function handleMenu() {
    setOpenMenu(!isOpenMenu)
  }

  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContent>
          <HeaderNavContent>
            <Logo />
            <Navigation isOpenMenu={isOpenMenu} />
          </HeaderNavContent>
          <HeaderWidgetContent>
            <ThemeSwitch />
            <LanguageSwitch />
            <HeaderIconMenu isOpen={isOpenMenu} onClick={handleMenu}>
              <div className='line'></div>
            </HeaderIconMenu>
          </HeaderWidgetContent>
        </HeaderContent>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
