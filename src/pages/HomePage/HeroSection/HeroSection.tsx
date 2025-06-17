import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './heroSection.module.scss';
import { Button } from '@/components/common/Button/Button';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/assets/icons/Icon';

const cx = classNames.bind(theme);

export const HeroSection = () => {
  const { t } = useTranslation('hero');

  return (
    <>
      <header className={cx('hero__header')}>
        <h1 className={cn('display-large', 'text__color--brand')}>{t('hero.title')}</h1>
        <p className={cn('paragraph-small', 'text__color--onbrand', 'text__wrap--balanced')}>{t('hero.subtitle')}</p>
      </header>

      <div className={cx('hero__search')}>
        <div className={cx('hero__select')}>
          <button className={cn('label-button', cx('hero__button', 'hero__button--selected'))} type="button">
            {t('search.tabs.stop')}
          </button>

          <button className={cn('label-button', cx('hero__button'))} type="button">
            {t('search.tabs.line')}
          </button>
        </div>

        <div className={cx('searchBar')}>
          <div className={cx('searchBar__container')}>
            <input
              disabled={true}
              type="text"
              placeholder={t('search.placeholder')}
              className={cn(cx('searchBar__input'), 'paragraph-small')}
            />
            <button type="button" className={cx('icon__container')}>
              <Icon icon="Search" size="small" color="onbrand" />
            </button>
          </div>
        </div>
      </div>

      <Button type="button" color="onbrand" style="outlined" onClick={() => ''}>
        {t('search.viewMap')}
      </Button>
    </>
  );
};
