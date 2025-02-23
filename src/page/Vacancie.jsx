import glass from '../imges/glass.svg';
import Work from './Work';
import pizzas from '../assets/vacancie.json';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import icon_whatsapp from '../imges/icon-whatsapp.svg';
import Review_vacancie from '../components/Review_vacancie';
import Application from '../components/Application';

function Vacancies() {
  const [jobSearch, setJobSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [textSearch, setTextSearch] = useState(''); // Поиск только по названию вакансии

  // Извлекаем уникальные вакансии и города
  const jobTitles = [...new Set(pizzas.map((vacancy) => vacancy.job__search))];
  const cities = [...new Set(pizzas.map((vacancy) => vacancy.city))];

  // Фильтрация вакансий
  const filteredVacancies = pizzas.filter((obj) => {
    const jobTitleMatch = obj.job__search.toLowerCase().includes(jobSearch.toLowerCase());
    const cityMatch = obj.city.toLowerCase().includes(citySearch.toLowerCase());
    const textMatch = obj.job_title.toLowerCase().includes(textSearch.toLowerCase()); // Фильтр только по job_title

    return jobTitleMatch && cityMatch && textMatch;
  });

  return (
    <div className=''>
      <div className='container'>
        <div className='form2'>
          {/* Фильтр по городу */}
          <select value={citySearch} onChange={(e) => setCitySearch(e.target.value)}>
            <option value=''>Выберите город</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          {/* Фильтр по вакансии */}
          <select value={jobSearch} onChange={(e) => setJobSearch(e.target.value)}>
            <option value=''>Выберите вакансию</option>
            {jobTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        {/* Поле поиска по названию вакансии */}
        <div className='search_form'>
          <input
            type='text'
            placeholder='Поиск по названию'
            className='search__input'
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
          />
          <img src={glass} alt='Поиск' className='search-icon' />
        </div>
      </div>

      <div className='vacancies_swiper'>
        {filteredVacancies.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            loop={true}
            slidesPerView={1} // Измените на 2 или 3, если нужно несколько карточек
          >
            {filteredVacancies.map((obj) => (
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
        <div className='vacancies__item'>
          Все актуальные вакансии
          <p>
            <a href='https://wa.me/79502875807' className='footer__social-link'>
              <img src={icon_whatsapp} alt='' className='footer__social-img' />
            </a>
          </p>
        </div>
        <Review_vacancie />
      </div>
      <div className='container'>
        <div className='tab__inner' id='selection'>
          <div className='tab__container_3'>
            <div className='top_tab-text'>
              <span className='tab-text tab-text_color'>предложения</span>
              <div className='cut-off'></div>
              <span className='tab-text tab-text_color_1'>предложения</span>
              <div className='cut-off'></div>
              <span className='tab-text tab-text_color_2'>предложения</span>
            </div>
          </div>
        </div>
        <Application />
      </div>
    </div>
  );
}

export default Vacancies;
