import { useState } from 'react';
import theme from './register.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';
import card_graphics from '@/assets/card_graphics_lock.webp';
import { RegisterForm } from '@/components/forms/RegisterForm/RegisterForm';

const cx = classNames.bind(theme);

interface RegisterProps {
  hasImage?: boolean;
  keepImageOnDesktop?: boolean;
}

export const Register = ({ hasImage = false, keepImageOnDesktop = false }: RegisterProps) => {
  const { t } = useTranslation('register');
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <h2 className="display-large text__color--brand">{t('claim')}</h2>

      {hasImage && (
        <img
          className={cx('register__image', {
            'register__image--stay': keepImageOnDesktop,
          })}
          alt={t('imageAlt')}
          src={card_graphics}
        />
      )}

      <p className="paragraph-small text__color--onbrand text__wrap--balanced">{t('infoText')}</p>

      <Button type="button" style="filled" onClick={() => setIsOpenModal(true)} color="onbrand">
        {t('buttonText')}
      </Button>
      {isOpenModal && <RegisterForm setIsOpenSection={setIsOpenModal} />}
    </>
  );
};
