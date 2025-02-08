import React from 'react';

import pink_oval from '../imges/pink_oval.svg';
import logo from '../imges/logo.svg';
import whatsApp from '../imges/whatsApp.svg';
import telegram from '../imges/telegram.svg';
import instagram from '../imges/instagram.svg';
import { Link } from 'react-router-dom';

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
          <Link to='/Vacancie'>
            <button class='pink_button'>Вакансии</button>
          </Link>
          <nav className='menu header__menu'>
            <ul className='header_meny__list header__menu-list'>
              <li className='menu__list-item'>
                <a href='https://wa.me/79502875807' target='_blank' rel='noopener noreferrer'>
                  <img src={whatsApp} alt='' className='menu__list-link' />
                </a>
              </li>
              <li className='menu__list-item'>
                <a href='https://t.me/staffline1' target='_blank' rel='noopener noreferrer'>
                  <img src={telegram} alt='' className='menu__list-link' />
                </a>
              </li>
              <li className='menu__list-item'>
                <a
                  href='https://www.instagram.com/staffline_vl'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={instagram} alt='' className='menu__list-link' />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
