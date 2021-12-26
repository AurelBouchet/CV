import React from 'react';
import { useState } from 'react';
import '../style/menu.css';
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);
  return (
    <div>
      <nav className={`menu ${showMenu ? 'showNav' : 'unshowNav'}`}>
        <button className='burgerButton' onClick={handleShowMenu}>
          <span className='navbarBurger'></span>
        </button>
        <ul className='navbarLinks'>
          <a href='#profil' className='link' onClick={handleShowMenu}>
            <li className='navbarItems'>Profil</li>{' '}
          </a>
          <a href='#realisations' className='link' onClick={handleShowMenu}>
            <li className='navbarItems'>Réalisations</li>
          </a>
          <a href='#formation' className='link' onClick={handleShowMenu}>
            <li className='navbarItems'>Formation</li>
          </a>
          <a href='#experiences' className='link' onClick={handleShowMenu}>
            <li className='navbarItems'>Expériences</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
