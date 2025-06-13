import cn from 'classnames';
import classNames from 'classnames/bind';
import theme from './card.module.scss';
import { Button } from '@/components/common/Button/Button';
import { Icon } from '@/assets/icons/Icon';
import { useState } from 'react';
import card_graphic from '@/assets/card_graphics.webp';
import { Link } from 'react-router-dom';

const cx = classNames.bind(theme);

export interface CardProps {
  name: string;
  //   primaryDescription: string;
  //   tags: string[];
  //   secondaryDescription: string;
  //   hasButton: boolean;
  //   buttonText?: string;
  //   buttonURL?: ((event?: React.MouseEvent) => void) | string; // Función que maneja un evento de clic o string URL
  //   additionalInfo: string[];
  //   price: string | string[];
  //   hasRequiredDocuments: boolean;
  //   requiredDocuments?: string[];
  //   hasForm: boolean;
  //   formURL?: string;
  //   hasRules: boolean;
  //   rules?: string[];
  //   hasRegulations: boolean;
  //   RegulationsURL?: string;
  //   hasAppointmentButton: boolean;
  //   appointmentURL?: string;
}

export const Card = ({ name = 'EMT Jove' }: CardProps) => {
  const [isRotated, setIsRotated] = useState(false);

  // useffect con dependencia en isrotated para añadir la clase o que?

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
              <h3 className={cn('display-cards', 'text__color--onbrand')}>{name}</h3>
              <p className={cn('paragraph-small', 'text__color--onbrand')}>
                Un único viaje con transbordos ilimitados durante una hora.
              </p>
            </header>

            <img src={card_graphic} alt={'imagen'} />

            <div className={cx('card__categories')}>
              <div className={cn('label-tags')}>Personal</div>
              <div className={cn('label-tags')}>Recargable</div>
              <div className={cn('label-tags')}>Venta</div>
              <div className={cn('label-tags')}>Solicitud</div>
              <div className={cn('label-tags')}>Limitada</div>
            </div>

            <Button type="button" style="filled" color="onbrand" onClick={() => setIsRotated(true)}>
              {'Ver más'}
            </Button>
          </div>

          <div className={cx('card__face', 'card__face--back')}>
            <header className={cx('card__header')}>
              <h3 className={cn('display-cards', 'text__color--onbrand')}>{name}</h3>
              <div className={cx('card__content')}>
                <div className={cx('card__info')}>
                  <Icon icon="Information" color="onbrand" size="small" />
                  <p className={cn('paragraph-xsmall', 'text__color--onbrand')}>
                    Tarjeta monedero virtual de uso personal con saldo recargable. Disponible en la app EMTicket.
                  </p>
                </div>

                <Button
                  type="button"
                  fullWidth={true}
                  style="filled"
                  color="onbrand"
                  onClick={() => setIsOpenModal(true)}
                >
                  Requisitos Y Normas
                </Button>

                <div className={cx('card__info')}>
                  <Icon icon="AsteriskFilled" color="onbrand" size="small" />
                  <div className={cx('card__info-container')}>
                    <p className={cn('paragraph-xsmall', 'text__color--onbrand')}>
                      Viajes gratis tras 41 validaciones en el mismo mes.
                    </p>
                    <p className={cn('paragraph-xsmall', 'text__color--onbrand')}>
                      Recargable con tarjeta bancaria entre 5€ y 40€ (en EMTicket).
                    </p>
                    {/* Aqui se hace un map de los asteriscos y un renderizado condicional del link */}
                    <a className={cn('link-xsmall', 'text__color--onbrand')}>{'amen ->'}</a>
                  </div>
                </div>

                <div className={cx('card__info')}>
                  <Icon icon="Euro" color="onbrand" size="small" />
                  {/* <p className={cn('label-price-small', 'text__color--onbrand')}>4,25€ / 10 VIAJES</p> */}
                  <div className={cx('card__info-container')}>
                    {/* <p className={cn('paragraph-xsmall', 'text__color--onbrand')}>Según categoría:</p>
                    <p className={cn('label-price-xsmall', 'text__color--onbrand')}>
                      3,40€ / 10 VIAJEs (C. General) 2,15€ / 10 VIAJEs (C. Especial)
                    </p> */}
                    <p className={cn('paragraph-xsmall', 'text__color--onbrand')}>Según trimestre de pago:</p>
                    <p className={cn('label-price-xsmall', 'text__color--onbrand')}>
                      20€ (ENE - MAR)&nbsp;&nbsp;&nbsp; 15€ (ABR - JUN) 10€ (JUL - SEP)&nbsp;&nbsp;&nbsp; 5€ (OCT - DIC)
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <Button type="button" style="filled" color="onbrand-secondary" onClick={() => setIsRotated(false)}>
              <Icon icon="Turn" color="onbrand" size="medium" extraClass={cx('icon__line-fix')} />
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};
