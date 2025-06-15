import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import card_graphics from '../../../../public/card_graphics.webp';
import theme from './benefits.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';

const cx = classNames.bind(theme);

export const Benefits = () => {
  const { t } = useTranslation('benefits');

  const navigate = useNavigate();

  const handleNavigateToFAQ = () => {
    navigate('/cards');
  };
  // Que no existe, pero da igual...

  return (
    <>
      <header className={cx('benefits__header')}>
        <div className={cn('header__gap')}>
          <h3 className={cn('display-medium', 'text__color--onprimary')}>{t('header.title')}</h3>
          <h2 className={cn('display-large', 'text__color--brand')}>{t('header.subtitle')}</h2>
        </div>
        <p className={cn('paragraph-small', 'text__wrap--balanced')}>{t('header.description')}</p>
      </header>

      <div className={cx('benefits__container')}>
        <Card>
          <h3 className={cn('display-medium')}>{t('benefits.unique')}</h3>
          <p className={cn('paragraph-small', 'text__wrap--balanced')}>{t('benefits.uniqueText')}</p>
        </Card>
        <Card>
          <h3 className={cn('display-medium')}>{t('benefits.prices')}</h3>
          <p className={cn('paragraph-small', 'text__wrap--balanced')}>{t('benefits.pricesText')}</p>
        </Card>
        <Card>
          <h3 className={cn('display-medium')}>{t('benefits.flexibility')}</h3>
          <p className={cn('paragraph-small', 'text__wrap--balanced')}>{t('benefits.flexibilityText')}</p>
        </Card>
      </div>
      <div className={cx('benefits__gradient')}>
        <h3 className={cn('display-medium', 'text__color--brand')}>{t('footer.claim')}</h3>
        <img className={cx('benefits__image')} alt={t('imageAlt')} src={card_graphics} />
        <Button type="button" style="filled" color="onbrand" onClick={handleNavigateToFAQ}>
          {t('footer.buttonText')}
        </Button>
      </div>
    </>
  );
};
