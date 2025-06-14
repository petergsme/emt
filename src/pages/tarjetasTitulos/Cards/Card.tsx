import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classNames from 'classnames/bind';
import theme from './card.module.scss';
import { Button } from '@/components/common/Button/Button';
import { Icon } from '@/assets/icons/Icon';
import { CardModal } from '../CardModal/CardModal';
import { Accordion } from '@/components/common/Accordion/Accordion';
import { CardProps } from '@/models/Card';
import card_graphic from '@/assets/card_graphics.webp';
import ticket_graphic from '../assets/graphic_ticket.webp';

const cx = classNames.bind(theme);

export const Card = (card: CardProps) => {
  const [isRotated, setIsRotated] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { t } = useTranslation('mobilisCards');

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpenModal(false);
      setIsClosing(false);
    }, 300);
  };

  if (isRotated) {
    setTimeout(() => {
      setIsRotated(false);
    }, 30000);
  }

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

            <img
              className={cx('card__image', { 'card__image--small': card.altImage })}
              src={!card.altImage ? card_graphic : ticket_graphic}
              alt={t('altImage')}
            />

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
              {t('buttonTurn')}
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

                    {card.hasNorms && <a className={cn('link-xsmall', 'text__color--onbrand')}>{t('norms')}</a>}
                  </div>
                </div>

                <div className={cx('card__info')}>
                  <Icon icon="Euro" color="onbrand" size="small" />
                  {typeof card.price === 'string' ? (
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
            <Accordion variant="onprimary" text={t('accordionData')} textClassName="display-small" iconSize="medium">
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
                  {t('buttonForm')}
                </Button>
              )}
            </Accordion>
            <Accordion variant="onprimary" text={t('accordionNorms')} textClassName="display-small" iconSize="medium">
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
                {t('norms')}
              </a>
              {card.hasAppointmentButton && (
                <Button type="button" style="filled" color="onprimary" fullWidth={true} onClick={() => {}}>
                  {t('buttonDate')}
                </Button>
              )}
            </Accordion>
          </div>
        </CardModal>
      )}
    </>
  );
};

//  haces 5 de ejemplo variaditas y ya. una con la otra foto y asi pasas fotos como parametros recuerda.
