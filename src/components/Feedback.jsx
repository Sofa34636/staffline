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
              <div className='slider__text-name'>Имя 1</div>
              <div className='slider__text-koment'>Комментарий 1: Отличная работа!</div>
              <div className='slider__text-star'>★★★★★</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-slider__slide'>
              <div className='slider__text-name'>Имя 2</div>
              <div className='slider__text-koment'>Комментарий 2: Очень доволен услугами!</div>
              <div className='slider__text-star'>★★★★☆</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-slider__slide'>
              <div className='slider__text-name'>Имя 3</div>
              <div className='slider__text-koment'>Комментарий 3: Рекомендую всем!</div>
              <div className='slider__text-star'>★★★★★</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-slider__slide'>
              <div className='slider__text-name'>Имя 4</div>
              <div className='slider__text-koment'>Комментарий 4: Отличный сервис!</div>
              <div className='slider__text-star'>★★★☆☆</div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default Feedback;
