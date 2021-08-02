import React from 'react';
import Navigation from '../navigation/navigation';
import styled from './header.module.css';

function Header() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  function handleMenu() {
    setOpenMenu(!isOpenMenu);
  }

  return (
    <header className={styled.header}>
      <div className="wrapper">
        <div className={styled.header_content}>
          <div className="header-logo">
            <span>Alec</span>
          </div>
          <Navigation isOpenMenu={isOpenMenu} />
          <div className={styled.header_iconMenu}>
            <div
              className={`${styled.icon_burger} ${
                isOpenMenu && styled.is_active
              }`}
              onClick={handleMenu}
            >
              <div className={styled.line}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
