import theme from './register.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';
import card_graphics from '@/assets/card_graphics.webp';

const cx = classNames.bind(theme);

interface RegisterProps {
  hasImage?: boolean;
  keepImageOnDesktop?: boolean;
  setIsOpenModal: (value: boolean) => void;
}

export const Register = ({ hasImage = false, keepImageOnDesktop = false, setIsOpenModal }: RegisterProps) => {
  const { t } = useTranslation('register');

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
    </>
  );
};
