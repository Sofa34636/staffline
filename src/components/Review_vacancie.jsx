import React, { useEffect, useState } from 'react';
import pizzas from '../assets/vacancie.json';
import stefi_1 from '../imges/stefi_1.png';

function Review_vacancie() {
  const [selectedVacancy, setSelectedVacancy] = useState('');
  const jobTitles = [...new Set(pizzas.map((vacancy) => vacancy.job__search))];
  const cities = [...new Set(pizzas.map((vacancy) => vacancy.city))];
  const handleSelect = (job__search) => {
    setSelectedService(job__search);
  };
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
      <div className='container review__inner'>
        <div className='review__content_bloc'>
          <div className='form'>
            <form className='form__body' onSubmit={handleFormSubmit}>
              <input type='hidden' name='access_key' value='cc51d755-2849-4c62-ba86-62a9cdf0cfbe' />

              <h1 className='form__title'>Оставьте контакты и мы с вами свяжемся</h1>
              <div className='review_contact'>
                <div className='form__item'>
                  <input
                    type='text'
                    name='name'
                    className='form__input _req'
                    placeholder='ФИО'
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
                    {selectedService || 'Выберите вакансию'}
                  </button>
                  <ul className='dropdown__list'>
                    {jobTitles.map((title) => (
                      <li
                        key={title}
                        className='dropdown__list-item'
                        onClick={() => handleSelect(title)}
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                  <input type='hidden' name='service' value={selectedService} />
                </div>
              </div>
              <div className='dropdown'>
                <button type='button' className='dropdown__button'>
                  {selectedService || 'Выберите город'}
                </button>
                <ul className='dropdown__list'>
                  {cities.map((city) => (
                    <li
                      key={city}
                      className='dropdown__list-item'
                      onClick={() => handleSelect(city)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
                <input type='hidden' name='service' value={selectedService} />
              </div>
              <img className='Application_img' src={stefi_1} />
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

export default Review_vacancie;
