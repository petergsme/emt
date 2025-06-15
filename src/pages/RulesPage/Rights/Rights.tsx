import { useTranslation } from 'react-i18next';
import { Card } from '@/components/common/Card/Card';
import theme from './rights.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';

const cx = classNames.bind(theme);

export const Rights = () => {
  const { t } = useTranslation('rights');

  return (
    <>
      <header className={cx('rights__header')}>
        <div className={cn('header__gap')}>
          <h3 className={cn('display-medium', 'text__color--onprimary')}>{t('header.title')}</h3>
          <h2 className={cn('display-large', 'text__color--brand')}>{t('header.subtitle')}</h2>
        </div>
        <p className={cn('paragraph-small', 'text__wrap--balanced')}>{t('header.description')}</p>
      </header>

      <div className={cx('rights__container')}>
        <Card>
          <h3 className={cn('display-medium')}>{t('rights.title')}</h3>
          <ol className={cx('rights__list')}>
            <li className={cn('questions-small')}>{t('rights.item1')}</li>
            <li className={cn('questions-small')}>{t('rights.item2')}</li>
            <li className={cn('questions-small')}>{t('rights.item3')}</li>
            <li className={cn('questions-small')}>{t('rights.item4')}</li>
            <li className={cn('questions-small')}>{t('rights.item5')}</li>
            <li className={cn('questions-small')}>{t('rights.item6')}</li>
          </ol>
        </Card>

        <Card>
          <h3 className={cn('display-medium')}>{t('duties.title')}</h3>
          <ol className={cx('rights__list')}>
            <li className={cn('questions-small')}>{t('duties.item1')}</li>
            <li className={cn('questions-small')}>{t('duties.item2')}</li>
            <li className={cn('questions-small')}>{t('duties.item3')}</li>
            <li className={cn('questions-small')}>{t('duties.item4')}</li>
            <li className={cn('questions-small')}>{t('duties.item5')}</li>
          </ol>
        </Card>
      </div>
    </>
  );
};
