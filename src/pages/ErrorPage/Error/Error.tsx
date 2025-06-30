import cn from 'classnames';
import classNames from 'classnames/bind';
import { Button } from '@/components/common/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import theme from './error.module.scss';

const cx = classNames.bind(theme);

export const Error = () => {
  const { t } = useTranslation('error');
  const navigate = useNavigate();

  return (
    <>
      <header className={cx('error__header')}>
        <h1 className={cn('display-large', 'text__color--onbrand')}>{t('title')}</h1>
        <p className={cn('paragraph-small', 'text__color--onbrand', 'text__wrap--balanced')}>{t('description')}</p>
      </header>

      <div className={cx('error__buttons')}>
        <Button type="button" color="onbrand" style="filled" onClick={() => navigate('/mobilis-cards')}>
          {t('actions.cards')}
        </Button>

        <Button type="button" color="onbrand" style="filled" onClick={() => navigate('/mobilis-cards#recharge')}>
          {t('actions.recharge')}
        </Button>

        <Button type="button" color="onbrand" style="outlined" onClick={() => navigate('/')}>
          {t('actions.home')}
        </Button>
      </div>
    </>
  );
};
