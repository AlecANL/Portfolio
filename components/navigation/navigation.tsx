import Link from 'next/link'
import styled from './navigation.module.css'

import { useLanguage } from '../../hooks/useLanguage'

import menuEn from '@i18n/menu-en.json'
import menuEs from '@i18n/menu-es.json'
import menuJson from '@data/menu.json'

import { IMenuNavigation } from '@models/menu'

function Navigation({ isOpenMenu }) {
  const { currentLanguage } = useLanguage(menuEn, menuEs)
  const navMenu: IMenuNavigation[] = menuJson

  return (
    <nav className={`${styled.navigation} ${isOpenMenu && styled.is_active}`}>
      <ul className={styled.navigation__list}>
        {navMenu.map(menuItem => (
          <li key={menuItem.id}>
            <Link href={menuItem.url}>
              <a> {currentLanguage[menuItem.name]} </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
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
