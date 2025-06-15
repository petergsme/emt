import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './accident.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(theme);

export const Accident = () => {
  const { t } = useTranslation('uses');

  return (
    <>
      <h3 className={cn('display-medium', 'text__color--onbrand')}>{t('accident.title')}</h3>
      <div className={cx('accident__content')}>
        <p className={cn('paragraph-small', 'text__color--onbrand')}>{t('accident.p1')}</p>
        <p className={cn('paragraph-small', 'text__color--onbrand')}>{t('accident.p2')}</p>
      </div>
    </>
  );
};
