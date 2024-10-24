import React from 'react';
import iconPrice from '../imges/icon-price.png';

function Base_blog() {
  return (
    <section className='base_blog'>
      <div className='container services__info'>
        <div className='services__info-base'>
          <div className='base_blog_products'>
            <div className='base_blog_products-text'>
              <div className='base_blog-flex'>
                <div className='palka'></div>
                <p>Проведение аналитики аккаунта</p>
              </div>
              <div className='base_blog-flex'>
                <div className='palka'></div>
                <p>Подбор блогеров с подходящей целевой аудиторией из нашей базы</p>
              </div>
              <div className='base_blog-flex'>
                <div className='palka'></div>
                <p>Рекомендации по партнерствам + общие рекомендации</p>
              </div>
              <div className='base_blog-flex'>
                <div className='palka'></div>
                <p>Скрипты для эффективного сотрудничества с Блогерами/партнёрами</p>
              </div>
            </div>
            <div className='base_blog-flex'>
              <div className='palka_1'></div>
              <p className='base_blog_products-text_min'>
                Вероятность повтора исключена, так как предварительно предоставляете список блогеров
                с которыми уже сотрудничали
              </p>
            </div>
          </div>
          <div className='base_blog-money'>
            <h4 className='base_blog_products-price'>5000 ₽</h4>
            <img src={iconPrice} className='base_blog-img' alt='' />
          </div>
        </div>
        <div className='tab__inner_4' id='review'>
          <div className='tab__container_4'>
            <div className='top_tab-text'>
              <span className='tab-text tab-text_color'>Отзывы</span>
              <div className='cut-off pink'></div>
              <span className='tab-text tab-text_color_1'>Отзывы</span>
              <div className='cut-off pink'></div>
              <span className='tab-text tab-text_color_2'>Отзывы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Base_blog;
