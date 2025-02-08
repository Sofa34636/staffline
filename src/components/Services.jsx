import React from 'react';

function Services() {
  return (
    <section className='services'>
      <div className='container services__inner'>
        <div className='tab__inner'>
          <div id='service' className='tab__container'>
            <div className='top_tab-text'>
              <span className='tab-text tab-text_color'>Услуги</span>
              <div className='cut-off'></div>
              <span className='tab-text tab-text_color_1'>Услуги</span>
              <div className='cut-off'></div>
              <span className='tab-text tab-text_color_2'>Услуги</span>
            </div>
          </div>
        </div>

        <div className='services__info'>
          <div className='products__content section__content-descr section--decor'>
            <div className='products__content_bloc'>
              <div className='products__item'>
                <h4 className='products__item-title'>SMM-ведение</h4>
                <div className='products__item-text'>
                  <p>-Аналитика</p>
                  <p>-Создание индивидуальной стратегии продвижения</p>
                  <p>-Прописание контент-плана</p>
                  <p>-Организация профессиональных съемок под ключ</p>
                  <p>-Фото и видео-съемка на телефон</p>
                  <p>-Копирайтинг</p>
                  <p>-Прописание эффективного плана постинга</p>
                  <p>-Постинг</p>
                  <p>-Использование разных рекламных каналов</p>
                  <p>-Работа с лидерами мнений</p>
                </div>
                <p className='products__item-text_min'>
                  *индивидуальные условия доступа к базе моделей
                </p>
                <h4 className='products__item-price'>/ от 60.000р</h4>
              </div>

              <div className='products__item'>
                <h4 className='products__item-title'>Подбор кадров</h4>
                <div className='products__item-text'>
                  <p>-Большая база кандидатов любого профиля</p>
                  <p>-Среднее время закрытия вакансии 1-7 дней</p>
                  <p>-Гарантия до 1 года</p>
                </div>
                <h4 className='products__item-price'>/ от 15.000р</h4>
              </div>
            </div>
            <div className='products__content_bloc'>
              {/* <div className='products__item'>
                <h4 className='products__item-title'>Создание и продвижение сайтов</h4>
                <div className='products__item-text'>
                  <p>Создаем крутые сайты для разных целей:</p>
                  <p>-лендинг</p>
                  <p>-корпоративный сайт</p>
                  <p>-сайт-каталог</p>
                  <p>-интернет-магазин</p>
                </div>
                <p className='products__item-text_min'>*базовое сео-продвижение в подарок</p>
                <div className='products__item-text dop'>
                  <p>Настраиваем эффективное продвижение (любой бюджет)</p>
                </div>
                <h4 className='products__item-price'>/ от 20.000р</h4>
              </div> */}

              <div className='products__item'>
                <h4 className='products__item-title'>Консультации</h4>
                <div className='products__item-text'>
                  <p>-Детальный разбор вашего бизнеса</p>
                  <p>-Прописание стратегии для выхода на новый уровень</p>
                  <p>-Возможно сопровождение при реализации стратегии</p>
                </div>
                <p className='products__item-text_min'>
                  *индивидуальные условия доступа ко всем продуктам агентства
                </p>
                <h4 className='products__item-price'>/ от 15.000р</h4>
              </div>
              <div className='products__item'>
                <h4 className='products__item-title'>Маркетинговое сопровождение</h4>
                <div className='products__item-text'>
                  <p>-Аналитика вашего бизнеса (выявление точки А)</p>
                  <p>-Построение плана развития для перехода из точки А в точку В</p>
                  <p>-Подбор маркетинговых активностей под бюджет</p>
                  <p>-⁠Реализация активностей (с привлечением других узких специалистов)</p>
                </div>
                <p className='products__item-text_min'>
                  *база моделей и база блогеров входят в стоимость
                </p>
                <h4 className='products__item-price'>/ от 100.000р</h4>
              </div>

              <a
                href='https://wa.me/79502875807?text=Здравствуйте,%20я%20хочу%20получить%20услугу'
                target='_blank'
                rel='noopener noreferrer'
                className='form__button'
              >
                Получить услугу
              </a>
            </div>
          </div>
          <div id='model_base' className='tab__inner_2'>
            <div className='tab__container_2'>
              <div className='top_tab-text'>
                <span className='tab-text tab-text_color'>БАЗА МОДЕЛЕЙ</span>
                <div className='cut-off pink'></div>
                <span className='tab-text tab-text_color_1'>БАЗА МОДЕЛЕЙ</span>
                <div className='cut-off pink'></div>
                <span className='tab-text tab-text_color_2'>БАЗА МОДЕЛЕЙ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
