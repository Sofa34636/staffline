import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

function Feedback() {
  return (
    <div className='image-slider_text swiper-container2'>
      <Swiper
        autoplay={{
          delay: 20,
          disableOnInteraction: false,
        }}
        effect='slide'
        speed={3000}
        breakpoints={{
          900: {
            slidesPerView: 2,
            loop: true,

            spaceBetween: 30,
            lazyLoading: true,
            centeredSlides: true,
          },
          600: {
            slidesPerView: 1.5,
            loop: true,

            spaceBetween: 20,
            lazyLoading: true,
            centeredSlides: true,
          },
          0: {
            slidesPerView: 1.2,
            loop: true,

            spaceBetween: 10,
            lazyLoading: true,

            centeredSlides: true,
          },
        }}
        modules={[Autoplay]}
      >
        <div class='swiper-wrapper'>
          <SwiperSlide>
            <div className='text-slider__slide'>
              <div className='slider__text-name'>Матвей</div>
              <div className='slider__text-koment'>
                Спасибо за оперативный подбор моделей для нашей фотосессии! Девушки прекрасно
                вписались в концепцию.
              </div>
              <div className='slider__text-star'>★★★★★</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-slider__slide'>
              <div className='slider__text-name'>Елена</div>
              <div className='slider__text-koment'>
                Спасибо за оперативное сотрудничество🫶🏻<p>рекомендую👍🏻</p>
              </div>
              <div className='slider__text-star'>★★★★☆</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-slider__slide'>
              <div className='slider__text-name'>Наталья</div>
              <div className='slider__text-koment'>Всё отлично, быстро и профессионально❤️</div>
              <div className='slider__text-star'>★★★★★</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-slider__slide'>
              <div className='slider__text-name'>Саша</div>
              <div className='slider__text-koment'>Отличный сервис!</div>
              <div className='slider__text-star'>★★★☆☆</div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default Feedback;
