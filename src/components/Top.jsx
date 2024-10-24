import React from 'react';
import Services from './Services';
import Base_model from './Base_model';
import Base_blog from './Base_blog';
import Review from './Review';

import Blok_1 from './Blok_1';

function Top() {
  return (
    <div className='meny'>
      <Blok_1 />
      <Services />
      <Base_model />
      <Base_blog />
      <Review />
    </div>
  );
}

export default Top;
