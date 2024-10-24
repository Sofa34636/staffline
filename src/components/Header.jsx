import React from 'react';

import pink_oval from '../imges/pink_oval.svg';
import logo from '../imges/logo.svg';
import whatsApp from '../imges/whatsApp.svg';
import telegram from '../imges/telegram.svg';
import instagram from '../imges/instagram.svg';

function Header() {
  return (
    <div>
      <header className='header'>
        <div className='container header__inner'>
          <div className='header__logo'>
            <div className='pink'>
              <img src={pink_oval} alt='' className='pink_img' />
              <a href='/' className='logo'>
                <img src={logo} alt='' className='logo__img' />
              </a>
            </div>
            <div className='logo_text'>
              <a href='/'>STAFFLINE</a>
            </div>
          </div>
          <a href='/Vacancies'>
            <button class='pink_button'>Вакансии</button>
          </a>
          <nav className='menu header__menu'>
            <ul className='header_meny__list header__menu-list'>
              <li className='menu__list-item'>
                <img src={whatsApp} alt='' className='menu__list-link' />
              </li>
              <li className='menu__list-item'>
                <img src={telegram} alt='' className='menu__list-link' />
              </li>
              <li className='menu__list-item'>
                <img src={instagram} alt='' className='menu__list-link' />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
