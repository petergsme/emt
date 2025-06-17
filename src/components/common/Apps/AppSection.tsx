import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './appSection.module.scss';
import { AppCard } from './appCard/AppCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import emticket_app_icon from '@/assets/emticket_app_icon.webp';
import emtvalencia_app_icon from '@/assets/emtvalencia_app_icon.webp';
import app_QR from '@/assets/emt-qr.svg';
import { Icon } from '@/assets/icons/Icon';
import { Button } from '../Button/Button';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';

const cx = classNames.bind(theme);

export const AppSection = () => {
  const { t } = useTranslation('apps');
  const navigate = useNavigate();

  return (
    <>
      <div className={cx('apps__banner')}>
        <h2 className={cn('label-button', 'text__color--onbrand', 'center-text')}>{t('apps.downloadApps')}</h2>
      </div>

      <h3 className={cn('display-large', 'text__color--brand', cx('apps__header'))}>{t('apps.claim')}</h3>

      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className={cx('mySwiper')}
        slidesPerView="auto"
        spaceBetween={20}
        breakpoints={{
          500: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide className={cx('slide-auto')}>
          <AppCard>
            <img className={cx('apps__image')} src={emticket_app_icon} alt={t('apps.emticket.altText')} />

            <div className={cx('apps__content')}>
              <h4 className={cn('display-cards', 'center-text', 'text__color--onbrand')}>{t('apps.emticket.title')}</h4>

              <div className={cx('apps__info')}>
                <span className={cx('apps__bulletpoint')}>
                  <Icon icon="AsteriskLine" color="onbrand" size="small" />
                  <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                    {t('apps.emticket.features.easyPurchase')}
                  </p>
                </span>

                <span className={cx('apps__bulletpoint')}>
                  <Icon icon="AsteriskLine" color="onbrand" size="small" />
                  <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                    {t('apps.emticket.features.virtualWallet')}
                  </p>
                </span>

                <span className={cx('apps__bulletpoint')}>
                  <Icon icon="AsteriskLine" color="onbrand" size="small" />
                  <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                    {t('apps.emticket.features.advancePurchase')}
                  </p>
                </span>
              </div>
            </div>

            <div className={cx('apps__button--hidden')}>
              <Button
                type="button"
                color="onbrand"
                fullWidth={true}
                style="filled"
                onClick={() => navigate('/downloadApp')}
              >
                {t('apps.downloadButton')}
              </Button>
            </div>
          </AppCard>
        </SwiperSlide>

        <SwiperSlide className={cx('slide-auto')}>
          <AppCard>
            <img className={cx('apps__image')} src={emtvalencia_app_icon} alt={t('apps.emtvalencia.altText')} />

            <div className={cx('apps__content')}>
              <h4 className={cn('display-cards', 'center-text', 'text__color--onbrand')}>
                {t('apps.emtvalencia.title')}
              </h4>

              <div className={cx('apps__info')}>
                <span className={cx('apps__bulletpoint')}>
                  <Icon icon="AsteriskLine" color="onbrand" size="small" />
                  <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                    {t('apps.emtvalencia.features.checkTimes')}
                  </p>
                </span>

                <span className={cx('apps__bulletpoint')}>
                  <Icon icon="AsteriskLine" color="onbrand" size="small" />
                  <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                    {t('apps.emtvalencia.features.saveStops')}
                  </p>
                </span>

                <span className={cx('apps__bulletpoint')}>
                  <Icon icon="AsteriskLine" color="onbrand" size="small" />
                  <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                    {t('apps.emtvalencia.features.rechargeCards')}
                  </p>
                </span>
              </div>
            </div>

            <div className={cx('apps__button--hidden')}>
              <Button
                type="button"
                color="onbrand"
                fullWidth={true}
                style="filled"
                onClick={() => navigate('/downloadApp')}
              >
                {t('apps.downloadButton')}
              </Button>
            </div>
          </AppCard>
        </SwiperSlide>
      </Swiper>

      <div className={cx('apps__container-desktop')}>
        <AppCard>
          <img className={cx('apps__image')} src={emticket_app_icon} alt={t('apps.emticket.altText')} />

          <div className={cx('apps__content')}>
            <h4 className={cn('display-cards', 'center-text', 'text__color--onbrand')}>{t('apps.emticket.title')}</h4>

            <div className={cx('apps__info')}>
              <span className={cx('apps__bulletpoint')}>
                <Icon icon="AsteriskLine" color="onbrand" size="small" />
                <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                  {t('apps.emticket.features.easyPurchase')}
                </p>
              </span>

              <span className={cx('apps__bulletpoint')}>
                <Icon icon="AsteriskLine" color="onbrand" size="small" />
                <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                  {t('apps.emticket.features.virtualWallet')}
                </p>
              </span>

              <span className={cx('apps__bulletpoint')}>
                <Icon icon="AsteriskLine" color="onbrand" size="small" />
                <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                  {t('apps.emticket.features.advancePurchase')}
                </p>
              </span>
            </div>
          </div>

          <div className={cx('apps__button--hidden')}>
            <Button
              type="button"
              color="onbrand"
              fullWidth={true}
              style="filled"
              onClick={() => navigate('/downloadApp')}
            >
              {t('apps.downloadButton')}
            </Button>
          </div>
        </AppCard>

        <AppCard>
          <img className={cx('apps__image')} src={emtvalencia_app_icon} alt={t('apps.emtvalencia.altText')} />

          <div className={cx('apps__content')}>
            <h4 className={cn('display-cards', 'center-text', 'text__color--onbrand')}>
              {t('apps.emtvalencia.title')}
            </h4>

            <div className={cx('apps__info')}>
              <span className={cx('apps__bulletpoint')}>
                <Icon icon="AsteriskLine" color="onbrand" size="small" />
                <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                  {t('apps.emtvalencia.features.checkTimes')}
                </p>
              </span>

              <span className={cx('apps__bulletpoint')}>
                <Icon icon="AsteriskLine" color="onbrand" size="small" />
                <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                  {t('apps.emtvalencia.features.saveStops')}
                </p>
              </span>

              <span className={cx('apps__bulletpoint')}>
                <Icon icon="AsteriskLine" color="onbrand" size="small" />
                <p className={cn('paragraph-small', 'text__color--onbrand', 'text-align--left')}>
                  {t('apps.emtvalencia.features.rechargeCards')}
                </p>
              </span>
            </div>
          </div>

          <div className={cx('apps__button--hidden')}>
            <Button
              type="button"
              color="onbrand"
              fullWidth={true}
              style="filled"
              onClick={() => navigate('/downloadApp')}
            >
              {t('apps.downloadButton')}
            </Button>
          </div>
        </AppCard>
      </div>

      <div className={cx('apps__QR')}>
        <h2 className={cn('display-medium', 'text__color--onprimary', 'center-text')}>{t('apps.downloadApps')}</h2>
        <img className={cx('apps__image--QR')} src={app_QR} alt={t('apps.altQR')} />
      </div>
    </>
  );
};
