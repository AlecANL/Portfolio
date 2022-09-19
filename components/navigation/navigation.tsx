import Link from 'next/link'
import styled from './navigation.module.css'

import { useLanguage } from '../../hooks/useLanguage'

import menuEn from '@i18n/menu-en.json'
import menuEs from '@i18n/menu-es.json'
import menuJson from '@data/menu.json'

import { IMenuNavigation } from '@models/menu'
import { NavigationListStyled, NavigationStyled } from './navigation.styled'

function Navigation({ isOpenMenu }) {
  const { currentLanguage } = useLanguage(menuEn, menuEs)
  const navMenu: IMenuNavigation[] = menuJson

  return (
    <NavigationStyled isOpen={isOpenMenu}>
      <NavigationListStyled isOpen={isOpenMenu}>
        {navMenu.map(menuItem => (
          <li key={menuItem.id}>
            <Link href={menuItem.url}>
              <a> {currentLanguage[menuItem.name]} </a>
            </Link>
          </li>
        ))}
      </NavigationListStyled>
    </NavigationStyled>
  )
}

export default Navigation

{
  /* <div>
        <Link href='/' locale='en-US'>
          <a>English</a>
        </Link>
        <Link href='/' locale='es-ES'>
          <a>Spanish</a>
        </Link>
      </div> */
}
