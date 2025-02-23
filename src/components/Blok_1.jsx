import { Navigation, Pagination } from 'swiper/modules';
import q01 from '../imges/01.png';
import q02 from '../imges/02.png';
import q03 from '../imges/03.png';
import selection_blog from '../imges/selection_blog.svg';
import model_base from '../imges/model_base.svg';
import woman from '../imges/woman.png';
import heard from '../imges/heard.svg';
import arrow from '../imges/arrow.svg';
import arrow_2 from '../imges/arrow_2.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

function Blok_1() {
  return (
    <section className='top'>
      <div className='container top__inner'>
        <div className='section__top'>
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Pagination]}
            className='image-slider'
          >
            <SwiperSlide>
              <div className='image-slider__slide'>
                <div className='image-slider__image'>
                  <img src={q01} alt='' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-slider__slide'>
                <div className='image-slider__image'>
                  <img src={q02} alt='' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-slider__slide'>
                <div className='image-slider__image'>
                  <img src={q03} alt='' />
                </div>
              </div>
            </SwiperSlide>

            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </Swiper>

          <div className='section__top-slogan'>
            <p className='top__slogan'>Мы не следуем за трендами</p>
            <p className='top__slogan-text'>- мы их создаем!</p>
          </div>
        </div>
        <div className='top__content'>
          <div className='top__list section--navigation'>
            <div className='top_navigation_2'>
              <img src={selection_blog} alt='' className='top_navigation-link' />
              <div className='selection_blog_horizon-text'>
                <Link to='/Vacancie' className='selection_blog_horizon-text_2'>
                  <span>П</span>
                  <span>О</span>
                  <span>Д</span>
                  <span>Б</span>
                  <span>О</span>
                  <span>Р</span>
                </Link>
              </div>
              <div className='selection_blog-text'>
                <a href='#selection'>БЛОГЕРЫ</a>
              </div>
            </div>

            <a href='#model_base'>
              <div className='top_navigation_1'>
                <img src={model_base} alt='' className='top_navigation-link' />
              </div>
            </a>
            <div className='top_navigation_3'>
              <img src={woman} alt='' className='top_navigation-link' />
            </div>
            <div className='top_navigation_4'>
              <img src={heard} alt='' className='top_navigation-link' />
            </div>
            <Link to='service'>
              <div className='service_button'>
                ВСЕ УСЛУГИ
                <img src={arrow} alt='' className='arrow' />
                <img src={arrow_2} alt='' className='arrow_2' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blok_1;
