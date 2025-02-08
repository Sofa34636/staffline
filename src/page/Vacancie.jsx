import glass from '../imges/glass.svg';
import Work from './Work';
import pizzas from '../assets/vacancie.json';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import icon_whatsapp from '../imges/icon-whatsapp.svg';

function Vacancies() {
  const [value, setValue] = useState(''); // Для поиска по названию вакансии
  const [selectedCity, setSelectedCity] = useState(''); // Для выбора города

  console.log('Загруженные вакансии:', pizzas); // Проверяем, загружается ли JSON

  // Уникальные города из базы данных
  const cities = [...new Set(pizzas.map((job) => job.city))]; // Извлекаем уникальные города

  // Фильтрация вакансий по названию и городу
  const filteredJob = pizzas.filter((job) => {
    const matchesTitle = value ? job.job_title.toLowerCase().includes(value.toLowerCase()) : true; // Фильтрация по названию вакансии
    const matchesCity = selectedCity ? job.city === selectedCity : true; // Фильтрация по городу
    return matchesTitle && matchesCity;
  });

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

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

        // Если выбрана вакансия, сбрасываем город
        if (item.dataset.value === '') {
          setSelectedCity('');
        }
        // Если выбран город, сбрасываем вакансию
        if (!item.dataset.value) {
          setValue('');
        }

        handleCityChange(this.dataset.value);
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
    <div className=''>
      <div className='container'>
        <div className='form2'>
          <div className='sort_town'>
            <b className='town'>Выберите город:</b>
            <div className='dropdown'>
              <button type='button' className='dropdown__button'>
                {selectedCity ? selectedCity : 'Все города'}
              </button>
              <ul className='dropdown__list'>
                <li
                  className='dropdown__list-item'
                  data-value=''
                  onClick={() => {
                    setSelectedCity('');
                    setValue(''); // Сбросить фильтр по вакансиям
                  }}
                >
                  Все города
                </li>
                {cities.map((city, index) => (
                  <li
                    key={index}
                    className='dropdown__list-item'
                    data-value={city}
                    onClick={() => {
                      setSelectedCity(city);
                      setValue(''); // Сбросить фильтр по вакансиям
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='vacancies__item'>
            Все актуальные вакансии
            <p>
              <a href='https://wa.me/79502875807' className='footer__social-link'>
                <img src={icon_whatsapp} alt='' className='footer__social-img' />
              </a>
            </p>
          </div>
          <div className='sort_town'>
            <b className='town'>Выберите вакансию:</b>
            <div className='dropdown'>
              <button type='button' className='dropdown__button'>
                {value ? value : 'Все вакансии'}
              </button>
              <ul className='dropdown__list'>
                <li className='dropdown__list-item' data-value='' onClick={() => setValue('')}>
                  Все вакансии
                </li>
                {pizzas
                  .filter((job) => !selectedCity || job.city === selectedCity) // Фильтрация по городу
                  .map((job, index) => (
                    <li
                      key={index}
                      className='dropdown__list-item'
                      data-value={job.job_title}
                      onClick={() => setValue(job.job_title)}
                    >
                      {job.job_title}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='vacancies_swiper'>
        {filteredJob.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            loop={true}
            slidesPerView={1} // Измените на 2 или 3, если нужно несколько карточек
          >
            {filteredJob.map((obj) => (
              <SwiperSlide key={obj.id}>
                <Work
                  job_title={obj.job_title}
                  company_name={obj.company_name}
                  derectionz_dutie={obj.derectionz_dutie}
                  address={obj.address}
                  city={obj.city}
                  schedule={obj.schedule}
                  responsibilities={obj.responsibilities}
                  pay={obj.pay}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className='none_vacancies'>Такой вакансии нет</p>
        )}
      </div>
    </div>
  );
}

export default Vacancies;
