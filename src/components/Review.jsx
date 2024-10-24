import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Если используете пагинацию
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

function Review() {
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const dropDownBtns = document.querySelectorAll('.dropdown__button');
    const dropDownLists = document.querySelectorAll('.dropdown__list');
    const dropDownItems = document.querySelectorAll('.dropdown__list-item');

    dropDownBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.nextElementSibling.classList.toggle('dropdown__list--visible');
      });
    });

    dropDownItems.forEach((item) => {
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        const dropdown = item.closest('.dropdown');
        dropdown.querySelector('.dropdown__button').innerText = this.innerText;
        setSelectedService(this.dataset.value); // Сохраняем значение выбора
        dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('dropdown__button')) {
        dropDownLists.forEach((list) => list.classList.remove('dropdown__list--visible'));
      }
    });

    return () => {
      dropDownBtns.forEach((btn) => btn.removeEventListener('click', () => {}));
      dropDownItems.forEach((item) => item.removeEventListener('click', () => {}));
    };
  }, []);

  return (
    <section className='review'>
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
              slidesPerView: 2, // Для больших экранов
              loop: true, // Включение бесконечной прокрутки

              spaceBetween: 30, // Расстояние между слайдами
              lazyLoading: true, // Ленивое (отложенное) загружаемое изображение
              centeredSlides: true,
            },
            600: {
              slidesPerView: 1.5, // Для средних экранов
              loop: true, // Включение бесконечной прокрутки

              spaceBetween: 20, // Расстояние между слайдами
              lazyLoading: true, // Ленивое (отложенное) загружаемое изображение
              centeredSlides: true,
            },
            0: {
              slidesPerView: 1.2, // Для мобильных экранов
              loop: true, // Включение бесконечной прокрутки

              spaceBetween: 10, // Расстояние между слайдами
              lazyLoading: true, // Ленивое (отложенное) загружаемое изображение
              centeredSlides: true,
            },
          }}
          modules={[Autoplay]}
        >
          <div class='swiper-wrapper'>
            {/* Слайды с отзывами */}
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

      <div className='container review__inner'>
        <div className='review__content_bloc'>
          <div className='review_text-container'>
            <div className='review_text'>Вам понравилось?</div>
            <div className='review_text'>Есть замечания?</div>
          </div>
          <div className='form'>
            <form className='form__body' action='https://api.web3forms.com/submit' method='POST'>
              <input type='hidden' name='access_key' value='cc51d755-2849-4c62-ba86-62a9cdf0cfbe' />

              <h1 className='form__title'>Оставьте отзыв</h1>
              <div className='review_contact'>
                <div className='form__item'>
                  <input
                    type='text'
                    name='name'
                    className='form__input _req'
                    placeholder='Ваше имя'
                  />
                </div>
                <div className='form__item'>
                  <input
                    type='text'
                    name='phone'
                    className='form__input _req'
                    placeholder='Ваш телефон'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div className='dropdown'>
                  <button type='button' className='dropdown__button'>
                    Выберите услуги
                  </button>
                  <ul className='dropdown__list'>
                    <li className='dropdown__list-item' data-value='1'>
                      SMM-ведение
                    </li>
                    <li className='dropdown__list-item' data-value='2'>
                      Создание сайтов
                    </li>
                    <li className='dropdown__list-item' data-value='3'>
                      Подбор кадров
                    </li>
                    <li className='dropdown__list-item' data-value='4'>
                      Консультации
                    </li>
                  </ul>
                  <input type='hidden' name='service' value={selectedService} />
                </div>
              </div>
              <div className='form__item'>
                <textarea name='message' className='form__input' placeholder='Ваш отзыв'></textarea>
              </div>
              <button type='submit' className='form__button'>
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
