import Link from 'next/link'

import { useLanguage } from '../../hooks/useLanguage'

import { NavigationListStyled, NavigationStyled } from './navigation.styled'

import menuEn from '@i18n/common/common-en.json'
import menuEs from '@i18n/common/common-es.json'
import menuJson from '@data/menu.json'

import { IMenuNavigation } from '@models/menu'
import { useRouter } from 'next/router'
import { Attributes, DetailedHTMLProps } from 'react'

function Navigation({ isOpenMenu }) {
  const { currentLanguage } = useLanguage(menuEn, menuEs)
  const { asPath } = useRouter()
  const navMenu: IMenuNavigation[] = menuJson

  function getCurrentPage(href: string) {
    return href === asPath ? 'page' : (undefined as DetailedHTMLProps<any, HTMLAnchorElement>['aria-current'])
  }

  return (
    <NavigationStyled isOpen={isOpenMenu}>
      <NavigationListStyled isOpen={isOpenMenu}>
        {navMenu.map(menuItem => (
          <li key={menuItem.id}>
            <Link href={menuItem.url}>
              <a aria-current={getCurrentPage(menuItem?.url)}> {currentLanguage[menuItem.name]} </a>
            </Link>
          </li>
        ))}
      </NavigationListStyled>
    </NavigationStyled>
  )
}

export default Navigation
