import React from 'react';
import logo from '../imges/logo.svg';
import icon_whatsapp from '../imges/icon-whatsapp.svg';
import icon_telegram from '../imges/icon-telegram.svg';
import icon_instagram from '../imges/icon-instagram.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__inner'>
        <div className='footer_logo-text'>
          <a href='/' className='logo_footer'>
            <img alt='' className='logo_img' src={logo} />
          </a>
          <div>
            <a href='/'>STAFFLINE</a>{' '}
          </div>
        </div>

        <nav className='menu footer__menu'>
          <ul className='meny__list'>
            <li className='menu__list-item'>
              <a href='#service' className='menu__list-link'>
                Услуги
              </a>
            </li>
            <li className='menu__list-item'>
              <a href='#model_base' className='menu__list-link'>
                База моделей
              </a>
            </li>
            <li className='menu__list-item'>
              <a href='#selection' className='menu__list-link'>
                База блогеров
              </a>
            </li>
            <li className='menu__list-item'>
              <a href='#review' className='menu__list-link'>
                Отзывы
              </a>
            </li>
            <li className='menu__list-item'>
              <Link to='/Vacancie'>Вакансии</Link>
            </li>
          </ul>
        </nav>
        <div className='footer__contacts'>
          <ul className='footer__social'>
            <li className='footer__social-item'>
              <a href='https://t.me/staffline1' className='footer__social-link'>
                <img src={icon_telegram} alt='' className='footer__social-img' />
              </a>
            </li>
            <li className='footer__social-item'>
              <a href='https://wa.me/79502875807' className='footer__social-link'>
                <img src={icon_whatsapp} alt='' className='footer__social-img' />
              </a>
            </li>
            <li className='footer__social-item'>
              <a href='https://www.instagram.com/staffline_vl' className='footer__social-link'>
                <img src={icon_instagram} alt='' className='footer__social-img' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
