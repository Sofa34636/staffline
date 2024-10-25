import glass from '../imges/glass.svg';
import Work from './Work';
import pizzas from '../assets/vacancie.json';
import React, { useEffect, useState } from 'react';

function Vacancies() {
  const [value, setValue] = useState(''); // Для поиска по названию вакансии
  const [selectedCity, setSelectedCity] = useState(''); // Для выбора города

  // Уникальные города из базы данных
  const cities = [...new Set(pizzas.map((job) => job.city))]; // Извлекаем уникальные города

  // Фильтрация вакансий по названию и городу
  const filteredJob = pizzas.filter((job) => {
    const matchesTitle = job.job_title.toLowerCase().includes(value.toLowerCase());
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
          <form className='search_form' onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              placeholder='Поиск по вакансиям'
              className='search__input'
              onChange={(event) => setValue(event.target.value)}
            />
            <img src={glass} alt='img' className='search__img' />
          </form>
          <div className='sort_town'>
            <b className='town'>Выберите город:</b>
            <div className='dropdown'>
              <button type='button' className='dropdown__button'>
                {selectedCity ? selectedCity : 'Все города'}
              </button>
              <ul className='dropdown__list'>
                {/* Опция "Все города" */}
                <li className='dropdown__list-item' data-value=''>
                  Все города
                </li>
                {cities.map((city, index) => (
                  <li key={index} className='dropdown__list-item' data-value={city}>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {filteredJob.length > 0 ? (
        filteredJob.map((obj) => (
          <Work
            key={obj.id}
            job_title={obj.job_title}
            company_name={obj.company_name}
            derectionz_dutie={obj.derectionz_dutie}
            address={obj.address}
            city={obj.city}
            schedule={obj.schedule}
            responsibilities={obj.responsibilities}
            pay={obj.pay}
          />
        ))
      ) : (
        <p className='none_vacancies'>Такой вакансии нет</p> // Сообщение, если ничего не найдено
      )}
    </div>
  );
}

export default Vacancies;
