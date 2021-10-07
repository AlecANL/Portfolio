import Link from 'next/link';
import styled from './navigation.module.css';

function Navigation({ isOpenMenu }) {
  return (
    <nav className={`${styled.navigation} ${isOpenMenu && styled.is_active}`}>
      <ul className={styled.navigation__list}>
        <li>
          <Link href="/">
            <a>hola</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/projects">
            <a>proyectos</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>contacto</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
