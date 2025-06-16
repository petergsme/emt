import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './appSection.module.scss';
import { AppCard } from './appCard/appCard';
// import Swiper from 'swiper';
import emticket_app_icon from '@/assets/emticket_app_icon.webp';
import emtvalencia_app_icon from '@/assets/emtvalencia_app_icon.webp';
import { Icon } from '@/assets/icons/Icon';
import { Button } from '../Button/Button';

const cx = classNames.bind(theme);

export const AppSection = () => {
  const { t } = useTranslation('apps');

  return (
    <>
      <div className={cx('apps__banner')}>
        <h2 className={cn('label-button', 'text__color--onbrand', 'center-text')}>{t('apps.downloadApps')}</h2>
      </div>

      <h3 className={cn('display-large', 'text__color--brand')}>{t('apps.claim')}</h3>

      <AppCard>
        <img className={cx('apps__image')} src={emticket_app_icon} alt={t('apps.emticket.altText')} />

        <div className={cx('apps__content')}>
          <h4 className={cn('display-cards', 'center-text', 'text__color--onbrand')}>{t('apps.emticket.title')}</h4>

          <div className={cx('apps__info')}>
            <span className={cx('apps__bulletpoint')}>
              <Icon icon="AsteriskLine" color="onbrand" size="small" />
              <p className={cn('paragraph-small', 'text__color--onbrand')}>
                {t('apps.emticket.features.easyPurchase')}
              </p>
            </span>

            <span className={cx('apps__bulletpoint')}>
              <Icon icon="AsteriskLine" color="onbrand" size="small" />
              <p className={cn('paragraph-small', 'text__color--onbrand')}>
                {t('apps.emticket.features.virtualWallet')}
              </p>
            </span>

            <span className={cx('apps__bulletpoint')}>
              <Icon icon="AsteriskLine" color="onbrand" size="small" />
              <p className={cn('paragraph-small', 'text__color--onbrand')}>
                {t('apps.emticket.features.advancePurchase')}
              </p>
            </span>
          </div>
        </div>

        <div className={cx('apps__button--hidden')}>
          <Button type="button" color="onbrand" fullWidth={true} style="filled" onClick={() => console.log('enlace')}>
            {t('apps.downloadButton')}
          </Button>
        </div>
      </AppCard>

      <AppCard>
        <img className={cx('apps__image')} src={emtvalencia_app_icon} alt={t('apps.emtvalencia.altText')} />

        <div className={cx('apps__content')}>
          <h4 className={cn('display-cards', 'center-text', 'text__color--onbrand')}>{t('apps.emtvalencia.title')}</h4>

          <div className={cx('apps__info')}>
            <span className={cx('apps__bulletpoint')}>
              <Icon icon="AsteriskLine" color="onbrand" size="small" />
              <p className={cn('paragraph-small', 'text__color--onbrand')}>
                {t('apps.emtvalencia.features.checkTimes')}
              </p>
            </span>

            <span className={cx('apps__bulletpoint')}>
              <Icon icon="AsteriskLine" color="onbrand" size="small" />
              <p className={cn('paragraph-small', 'text__color--onbrand')}>
                {t('apps.emtvalencia.features.saveStops')}
              </p>
            </span>

            <span className={cx('apps__bulletpoint')}>
              <Icon icon="AsteriskLine" color="onbrand" size="small" />
              <p className={cn('paragraph-small', 'text__color--onbrand')}>
                {t('apps.emtvalencia.features.rechargeCards')}
              </p>
            </span>
          </div>
        </div>

        <div className={cx('apps__button--hidden')}>
          <Button type="button" color="onbrand" fullWidth={true} style="filled" onClick={() => console.log('enlace')}>
            {t('apps.downloadButton')}
          </Button>
        </div>
      </AppCard>
    </>
  );
};
