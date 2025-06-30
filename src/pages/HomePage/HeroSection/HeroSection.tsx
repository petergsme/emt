import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './heroSection.module.scss';
import { Button } from '@/components/common/Button/Button';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/assets/icons/Icon';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(theme);

export const HeroSection = () => {
  const { t } = useTranslation('hero');
  const navigate = useNavigate();

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      navigate('/searched');
    }
  };

  return (
    <>
      <header className={cx('hero__header')}>
        <h1 className={cn('display-large', 'text__color--brand')}>{t('hero.title')}</h1>
        <p className={cn('paragraph-small', 'text__color--onbrand', 'text__wrap--balanced')}>{t('hero.subtitle')}</p>
      </header>

      <div className={cx('hero__search')}>
        <div className={cx('hero__select')}>
          <article className={cn('label-button', cx('hero__button', 'hero__button--selected'))}>
            {t('search.tabs.stop')}
          </article>

          <article className={cn('label-button', cx('hero__button'))}>{t('search.tabs.line')}</article>
        </div>

        <div className={cx('searchBar')}>
          <div className={cx('searchBar__container')}>
            <input
              onKeyDown={handleEnter}
              type="text"
              placeholder={t('search.placeholder')}
              className={cn(cx('searchBar__input'), 'paragraph-small')}
            />
            <button type="button" className={cx('icon__container')} onClick={() => navigate('/map')}>
              <Icon icon="Search" size="small" color="onbrand" />
            </button>
          </div>
        </div>
      </div>

      <Button type="button" color="onbrand" style="outlined" onClick={() => navigate('/map')}>
        {t('search.viewMap')}
      </Button>
    </>
  );
};
