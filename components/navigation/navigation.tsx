import Link from 'next/link'
import styled from './navigation.module.css'

import menuEn from '@i18n/menu-en.json'
import menuEs from '@i18n/menu-es.json'
import menuJson from '@data/menu.json'

import { useLanguage } from '../../hooks/useLanguage'

function Navigation({ isOpenMenu }) {
  const { currentLanguage } = useLanguage(menuEn, menuEs)

  return (
    <nav className={`${styled.navigation} ${isOpenMenu && styled.is_active}`}>
      {/* <div>
        <Link href='/' locale='en-US'>
          <a>English</a>
        </Link>
        <Link href='/' locale='es-ES'>
          <a>Spanish</a>
        </Link>
      </div> */}
      <ul className={styled.navigation__list}>
        <li>
          <Link href='/'>
            <a> {currentLanguage.menu_projects} </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
