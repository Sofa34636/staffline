import React from 'react';

import Base_men from '../imges/Base_men.svg';
import Base_wemen from '../imges/Base_wemen.svg';
import Base_men_2 from '../imges/Base_men_2.svg';

function Base_model() {
  return (
    <section className='base_model'>
      <div className='container base_model__inner'>
        <div className='base__content_bloc'>
          <div className='position_oval'>
            <div className='oval'>
              <div className='base_model_circl-img'>
                <img src={Base_men} alt='' className='' />
              </div>
              <div className='base_model_oval-text'>Девушки и парни</div>
            </div>
          </div>

          <div className='position_oval-right'>
            <div className='oval-right'>
              <div className='base_model_oval-text-right'>Любители и профессионалы</div>
              <div className='base_model_circl-img-right'>
                <img src={Base_wemen} alt='' className='' />
              </div>
            </div>
          </div>

          <div className='position_oval'>
            <div className='oval'>
              <div className='base_model_circl-img'>
                <img src={Base_men_2} alt='' className='' />
              </div>
              <div className='base_model_oval-text'>Мы всегда в поиске новых лиц!</div>
            </div>
          </div>
        </div>
        <div className='tab__inner' id='selection'>
          <div className='tab__container_3'>
            <div className='top_tab-text'>
              <span className='tab-text tab-text_color'>БАЗА блогеров</span>
              <div className='cut-off'></div>
              <span className='tab-text tab-text_color_1'>БАЗА блогеров</span>
              <div className='cut-off'></div>
              <span className='tab-text tab-text_color_2'>БАЗА блогеров</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Base_model;
