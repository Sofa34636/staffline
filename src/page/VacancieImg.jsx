import glass from '../imges/glass.svg';
import Work from './Work';
import pizzas from '../assets/vacancie.json';
import v1 from '../imges/vacancies/1.jpg';
import v2 from '../imges/vacancies/2.jpg';
import v3 from '../imges/vacancies/3.jpg';
import v4 from '../imges/vacancies/4.jpg';
import v5 from '../imges/vacancies/5.jpg';
import v6 from '../imges/vacancies/6.jpg';
import v7 from '../imges/vacancies/7.jpg';
import v8 from '../imges/vacancies/8.jpg';
import v9 from '../imges/vacancies/9.jpg';
import v10 from '../imges/vacancies/10.jpg';
import v11 from '../imges/vacancies/11.jpg';
import React, { useEffect, useState } from 'react';

function VacancieImg() {
  return (
    <div className=''>
      <div className='container'>
        <div className='VacancieImg_grid'>
          <div>
            <img src={v1} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v3} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v2} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v4} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v5} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v6} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v7} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v8} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v9} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v10} alt='' className='vacancie_Img' />
          </div>
          <div>
            <img src={v11} alt='' className='vacancie_Img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancieImg;
