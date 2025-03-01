import React from 'react';
import stefi_2 from '../imges/stefi_2.png';
import stefi_3 from '../imges/stefi_3.png';
import stefi_4 from '../imges/stefi_4.png';
import { gsap } from 'gsap';
import { useEffect } from 'react';

function Application() {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: false });
    const screenWidth = window.innerWidth;
    // Анимация для блока animation_bloc1
    if (screenWidth > 1224) {
      timeline
        .to('.animation_bloc1', {
          x: 300, // Вправо
          y: 460, // Вниз
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: -300, // Влево
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: 0, // Восстановление по оси X
          y: 0, // Вверх на 45
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 700) {
      timeline
        .to('.animation_bloc1', {
          x: 160, // Вправо
          y: 340, // Вниз
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: -160, // Влево
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: 0, // Восстановление по оси X
          y: 0, // Вверх на 45
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 390) {
      timeline
        .to('.animation_bloc1', {
          x: 105, // Вправо
          y: 330, // Вниз
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: -105, // Влево
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: 0, // Восстановление по оси X
          y: 0, // Вверх на 45
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 0) {
      timeline
        .to('.animation_bloc1', {
          x: 90, // Вправо
          y: 260, // Вниз
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: -90, // Влево
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc1', {
          x: 0, // Восстановление по оси X
          y: 0, // Вверх на 45
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    }

    const timeline2 = gsap.timeline({ repeat: -1, yoyo: false });

    if (screenWidth > 1224) {
      timeline2
        .to('.animation_bloc2', {
          x: 300, // Вправо на 45px
          y: -470, // Вверх на 45px
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 600, // Вправо еще на 45px (диагональ)
          y: 0, // Вниз на 45px (возвращается в линию)
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 0, // Возвращение в исходную точку по оси X
          y: 0, // Возвращение в исходную точку по оси Y
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 700) {
      timeline2
        .to('.animation_bloc2', {
          x: 160, // Вправо на 45px
          y: -340, // Вверх на 45px
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 320, // Вправо еще на 45px (диагональ)
          y: 0, // Вниз на 45px (возвращается в линию)
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 0, // Возвращение в исходную точку по оси X
          y: 0, // Возвращение в исходную точку по оси Y
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 390) {
      timeline2
        .to('.animation_bloc2', {
          x: 105, // Вправо на 45px
          y: -300, // Вверх на 45px
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 210, // Вправо еще на 45px (диагональ)
          y: 0, // Вниз на 45px (возвращается в линию)
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 0, // Возвращение в исходную точку по оси X
          y: 0, // Возвращение в исходную точку по оси Y
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 0) {
      timeline2
        .to('.animation_bloc2', {
          x: 90, // Вправо на 45px
          y: -260, // Вверх на 45px
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 180, // Вправо еще на 45px (диагональ)
          y: 0, // Вниз на 45px (возвращается в линию)
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc2', {
          x: 0, // Возвращение в исходную точку по оси X
          y: 0, // Возвращение в исходную точку по оси Y
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    }
    const timeline3 = gsap.timeline({ repeat: -1, yoyo: false });
    if (screenWidth > 1224) {
      timeline3
        .to('.animation_bloc3', {
          x: -600, // Вправо на 45px

          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: -300,
          y: -460,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: 0,
          y: 0,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 700) {
      timeline3
        .to('.animation_bloc3', {
          x: -320, // Вправо на 45px

          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: -160,
          y: -340,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: 0,
          y: 0,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 400) {
      timeline3
        .to('.animation_bloc3', {
          x: -210, // Вправо на 45px

          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: -105,
          y: -350,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: 0,
          y: 0,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    } else if (screenWidth > 0) {
      timeline3
        .to('.animation_bloc3', {
          x: -180, // Вправо на 45px

          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: -90,
          y: -260,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        })
        .to('.animation_bloc3', {
          x: 0,
          y: 0,
          duration: 2,
          ease: 'power1.inOut',
          delay: 2,
        });
    }
  }, []);

  return (
    <section className='base_blog'>
      <div className='container services__info'>
        <div className='Application_bloc'>
          <div className='Application_content app_bloc animation_bloc1'>
            <img className='Application_img' src={stefi_4} alt='' />
            <div className='Application_bloc-item Application_bloc-item_1'>
              <div className='Application_bloc-text '>
                При наличии более 5 вакансий стоимость закрытия одной — 13 500 ₽."общепит"
              </div>
            </div>
          </div>
          <div className='Application_content_bloc'>
            <div className='Application_content animation_bloc2'>
              <img className='Application_img' src={stefi_2} alt='' />
              <div className='Application_bloc-item'>
                <div className='Application_bloc-text'>
                  При покупке «базы блогеров» во Владивостоке доступ к базе моделей — 2500₽ вместо
                  5000₽.
                </div>
              </div>
            </div>
            <div className=' animation_bloc3'>
              <img className='Application_img' src={stefi_3} alt='' />
              <div className='Application_bloc-item'>
                <div className='Application_bloc-text'>
                  От 3х актуальных вакансий - стоимость закрытия одной 15.000 ₽.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
