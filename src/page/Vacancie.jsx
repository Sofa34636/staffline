import glass from '../imges/glass.svg';
import Work from './Work';
import pizzas from '../assets/vacancie.json';
import React, { useState } from 'react';

function Vacancies() {
  const [value, setValue] = useState('');

  const filteredJob = pizzas.filter((job) => {
    return job.job_title.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <div class=''>
      <div className='form2'>
        <form className='search_form' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='Поиск по вакансиям'
            className='search__input'
            onChange={(event) => setValue(event.target.value)}
          />
          <img src={glass} alt='img' className='searct__img'></img>
        </form>
      </div>
      {filteredJob.length > 0 ? (
        filteredJob.map((obj) => (
          <Work
            job_title={obj.job_title}
            company_name={obj.company_name}
            derectionz_dutie={obj.derectionz_dutie}
            address={obj.address}
            schedule={obj.schedule}
            responsibilities={obj.responsibilities}
            pay={obj.pay}
          />
        ))
      ) : (
        <p className=''>Такой вакансии нет</p> // сообщение, если ничего не найдено
      )}
    </div>
  );
}

export default Vacancies;
