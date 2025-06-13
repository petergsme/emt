import { useState } from 'react';
import cn from 'classnames';
import classNames from 'classnames/bind';
import theme from './card.module.scss';
import { Button } from '@/components/common/Button/Button';
import { Icon } from '@/assets/icons/Icon';
import { CardModal } from '../CardModal/CardModal';

import card_graphic from '@/assets/card_graphics.webp';
import { Accordion } from '@/components/common/Accordion/Accordion';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(theme);

export const bonoOro: CardProps = {
  name: 'Bono Oro',
  primaryDescription: 'Viajes ilimitados a precio reducido para mayores de 65 años, pensionistas y discapacitados.',
  categories: ['Personal', 'Renovable', 'ilimitada', 'Venta', 'Anual'],
  secondaryDescription:
    'Tarjeta personalizada ilimitada de renovación anual. De venta en quioscos, estancos y oficinas EMT.',
  hasButton: true,
  additionalInfo: [
    'Coste inicial: 3€.',
    'Recargable en quioscos, estancos y oficinas de EMT.',
    'La tarjeta siempre cubre desde el trimestre de pago hasta fin de año.',
  ],
  hasNorms: false,
  price: [
    'Según trimestre de pago:',
    '20€ (ENE - MAR)\u00A0\u00A0\u00A0 15€ (ABR - JUN) 10€ (JUL - SEP)\u00A0\u00A0\u00A0 5€ (OCT - DIC)',
  ],
  requiredDocuments: [
    'Formulario de solicitud (deberán presentarse dos copias).',
    'Original y fotocopia de DNI en vigor.',
    'Menores de 14, DNI de padre, madre o tutor.',
  ],
  hasForm: true,
  rules: [
    'En caso de pérdida la expedición de un duplicado tendrá un coste de 5€.',
    'Precio bonificado hasta el 31/12 (antes 25€).',
  ],
  hasAppointmentButton: true,
};

export interface CardProps {
  name: string;
  primaryDescription: string;
  categories: string[];
  secondaryDescription: string;
  hasButton: boolean;
  buttonText?: string;
  additionalInfo: string[];
  hasNorms: boolean;
  price: string | string[];
  requiredDocuments?: string[];
  hasForm?: boolean;
  //   formURL?: string;
  rules?: string[];
  //   hasRegulations: boolean;
  //   RegulationsURL?: string;
  hasAppointmentButton?: boolean;
  //   appointmentURL?: string;
}

export const Card = (card: CardProps) => {
  const [isRotated, setIsRotated] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpenModal(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <article className={cx('card')}>
        <div
          className={cx('card__inner', {
            'is-flipped': isRotated,
          })}
        >
          <div className={cx('card__face', 'card__face--front')}>
            <header className={cx('card__header')}>
              <h3 className={cn('display-cards', 'text__color--onbrand')}>{card.name}</h3>
              <p className={cn('paragraph-small', 'text__color--onbrand')}>{card.primaryDescription}</p>
            </header>

            <img className={cx('card__image')} src={card_graphic} alt={'imagen'} />

            <div className={cx('card__categories')}>
              {card.categories.map((category, index) => {
                return (
                  <div key={index} className={cn('label-tags')}>
                    {category}
                  </div>
                );
              })}
            </div>

            <Button type="button" style="filled" color="onbrand" onClick={() => setIsRotated(true)}>
              {'VER MÁS'}
            </Button>
          </div>

          <div className={cx('card__face', 'card__face--back')}>
            <header className={cx('card__header')}>
              <h3 className={cn('display-cards', 'text__color--onbrand')}>{card.name}</h3>
              <div className={cx('card__content')}>
                <div className={cx('card__info')}>
                  <Icon icon="Information" color="onbrand" size="small" />
                  <p className={cn('paragraph-xsmall', 'text__color--onbrand')}>{card.secondaryDescription}</p>
                </div>

                {card.hasButton && (
                  <Button
                    type="button"
                    fullWidth={true}
                    style="filled"
                    color="onbrand"
                    onClick={() => setIsOpenModal(true)}
                  >
                    {card.buttonText}
                  </Button>
                )}

                <div className={cx('card__info')}>
                  <Icon icon="AsteriskFilled" color="onbrand" size="small" />
                  <div className={cx('card__info-container')}>
                    {card.additionalInfo.map((info, index) => {
                      return (
                        <p key={index} className={cn('paragraph-xsmall', 'text__color--onbrand')}>
                          {info}
                        </p>
                      );
                    })}

                    {card.hasNorms && (
                      <a className={cn('link-xsmall', 'text__color--onbrand')}>{'Normativa vigente ->'}</a>
                    )}
                  </div>
                </div>

                <div className={cx('card__info')}>
                  <Icon icon="Euro" color="onbrand" size="small" />
                  {card.price === 'string' ? (
                    <p className={cn('label-price-small', 'text__color--onbrand')}>{card.price}</p>
                  ) : (
                    <div className={cx('card__info-container')}>
                      <p className={cn('paragraph-xsmall', 'text__color--onbrand')}>{card.price[0]}</p>
                      <p className={cn('label-price-xsmall', 'text__color--onbrand')}>{card.price[1]}</p>
                    </div>
                  )}
                </div>
              </div>
            </header>

            <Button type="button" style="filled" color="onbrand-secondary" onClick={() => setIsRotated(false)}>
              <Icon icon="Turn" color="onbrand" size="medium" extraClass={cx('icon__line-fix')} />
            </Button>
          </div>
        </div>
      </article>
      {isOpenModal && (
        <CardModal onClose={handleCloseModal} isClosing={isClosing}>
          <header className={cx('modal__header')}>
            <h4 className={cn('display-cards', 'text__color--brand')}>{card.name}</h4>
            <button type="button" onClick={() => handleCloseModal()} className={cx('modal__button')}>
              <Icon icon="Close" size="large" color="onprimary-secondary" />
            </button>
          </header>
          <div className={cn('accordion__lastChild--border-bottom')}>
            <Accordion variant="onprimary" text="Documentación" textClassName="display-small" iconSize="medium">
              <div className={cx('card__info-container')}>
                {card.requiredDocuments?.map((requirement, index) => {
                  return (
                    <p key={index} className={cn('paragraph-xsmall', 'text__color--onprimary')}>
                      {requirement}
                    </p>
                  );
                })}
              </div>
              {card.hasForm && (
                <Button type="button" style="filled" color="onprimary" fullWidth={true} onClick={() => {}}>
                  {'Descarga el formulario'}
                </Button>
              )}
            </Accordion>
            <Accordion variant="onprimary" text="Normas y Detalles" textClassName="display-small" iconSize="medium">
              <div className={cx('card__info-container')}>
                {card.rules?.map((requirement, index) => {
                  return (
                    <p key={index} className={cn('paragraph-xsmall', 'text__color--onprimary')}>
                      {requirement}
                    </p>
                  );
                })}
              </div>
              <a className={cn('link-small', 'link__color--brand', cx('align-self-center'))} href="">
                {'Normativa vigente ->'}{' '}
              </a>
              {card.hasAppointmentButton && (
                <Button type="button" style="filled" color="onprimary" fullWidth={true} onClick={() => {}}>
                  {'Pedir cita previa'}
                </Button>
              )}
            </Accordion>
          </div>
        </CardModal>
      )}
    </>
  );
};

// el texto del button de ver mas viene de un namespace traducido aqui. lo mismo para el alt de la imagen. lo mismo para normativa vigente. lo mismo para el modal los nombres de acordeon y los nombres de los botones de dentro.

//  haces 5 de ejemplo variaditas y ya. una con la otra foto y asi pasas fotos como parametros recuerda.
