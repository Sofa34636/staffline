import React, { useEffect, useState } from 'react';
import Feedback from './Feedback';

function Review() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    rating: '',
  });
  const [result, setResult] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert('Пожалуйста, введите ваше имя');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Пожалуйста, введите ваш телефон');
      return;
    }

    setResult('Пожалуйста, подождите...');

    // Отправка данных формы через fetch
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'cc51d755-2849-4c62-ba86-62a9cdf0cfbe',
        ...formData,
        service: selectedService,
      }),
    })
      .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
          setResult('Ваше сообщение успешно отправлено!');
        } else {
          setResult('Произошла ошибка, попробуйте снова.');
        }
      })
      .catch(() => {
        setResult('Что-то пошло не так! Пожалуйста, попробуйте снова.');
      })
      .finally(() => {
        setTimeout(() => setResult(''), 5000);
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (e) => {
    setFormData({
      ...formData,
      rating: e.target.value,
    });
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
        setSelectedService(this.dataset.value);
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
      <Feedback />
      <div className='container review__inner'>
        <div className='review__content_bloc'>
          <div className='review_text-container'>
            <div className='review_text'>Вам понравилось?</div>
            <div className='review_text'>Есть замечания?</div>
          </div>
          <div className='form'>
            <form className='form__body' onSubmit={handleFormSubmit}>
              <input type='hidden' name='access_key' value='cc51d755-2849-4c62-ba86-62a9cdf0cfbe' />

              <h1 className='form__title'>Оставьте отзыв</h1>
              <div className='review_contact'>
                <div className='form__item'>
                  <input
                    type='text'
                    name='name'
                    className='form__input _req'
                    placeholder='Ваше имя'
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form__item'>
                  <input
                    type='text'
                    name='phone'
                    className='form__input _req'
                    placeholder='Ваш телефон'
                    value={formData.phone}
                    onChange={handleInputChange}
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
                      Маркетинговое сопровождение
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
                <textarea
                  name='message'
                  className='form__input'
                  placeholder='Ваш отзыв'
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className='simple-rating'>
                <div className='simple-rating__items'>
                  <input
                    id='simple-rating__5'
                    type='radio'
                    className='simple-rating__item'
                    name='simple-rating'
                    value='5'
                    onChange={handleRatingChange}
                  />
                  <label htmlFor='simple-rating__5' className='simple-rating__lable'></label>
                  <input
                    id='simple-rating__4'
                    type='radio'
                    className='simple-rating__item'
                    name='simple-rating'
                    value='4'
                    onChange={handleRatingChange}
                  />
                  <label htmlFor='simple-rating__4' className='simple-rating__lable'></label>
                  <input
                    id='simple-rating__3'
                    type='radio'
                    className='simple-rating__item'
                    name='simple-rating'
                    value='3'
                    onChange={handleRatingChange}
                  />
                  <label htmlFor='simple-rating__3' className='simple-rating__lable'></label>
                  <input
                    id='simple-rating__2'
                    type='radio'
                    className='simple-rating__item'
                    name='simple-rating'
                    value='2'
                    onChange={handleRatingChange}
                  />
                  <label htmlFor='simple-rating__2' className='simple-rating__lable'></label>
                  <input
                    id='simple-rating__1'
                    type='radio'
                    className='simple-rating__item'
                    name='simple-rating'
                    value='1'
                    onChange={handleRatingChange}
                  />
                  <label htmlFor='simple-rating__1' className='simple-rating__lable'></label>
                </div>
              </div>
              <button type='submit' className='form__button'>
                Отправить
              </button>
              {result && <p className='form__result'>{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
