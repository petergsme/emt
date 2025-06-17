import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import cn from 'classnames';
import styles from './footer.module.scss';
import { FooterMobile } from './FooterMobile/FooterMobile';
import { Icon } from '@/assets/icons/Icon';
import emtQR from '@/assets/emt-qr.svg';
import generalitatLogo from '../../../assets/generalitat-logo.svg';
import fgvLogo from '../../../assets/fgv-logo.svg';
import tramLogo from '../../../assets/tram-logo.svg';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';

const cx = classNames.bind(styles);

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const { t } = useTranslation('footer');
  const { changeLanguage, isActive } = useLanguageSwitcher();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isMobile) return <FooterMobile />;

  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__main')}>
        <div className={cx('footer__content')}>
          <div>
            <Link to="/map" className={cn('display-small', cx('footer__link'))}>
              {t('navigation.map')}
            </Link>
          </div>

          <div className={cx('footer__section')}>
            <div className={cx('footer__section-content')}>
              <h3 className={cn('display-small')}>{t('navigation.titlesAndRates.main')}</h3>
              <Link to="/mobilis-cards" className={cn('paragraph-small', cx('footer__link'))}>
                {t('navigation.titlesAndRates.cards')}
              </Link>
              <Link to="/mobilis-cards#recharge" className={cn('paragraph-small', cx('footer__link'))}>
                {t('navigation.titlesAndRates.queries')}
              </Link>
              <Link to="/mobilis-cards#register" className={cn('paragraph-small', cx('footer__link'))}>
                {t('navigation.titlesAndRates.register')}
              </Link>
            </div>

            <div className={cx('footer__section-content')}>
              <h3 className={cn('display-small')}>{t('navigation.phone.main')}</h3>
              <a href="tel:963158515" className={cn('questions-small', cx('footer__link'))}>
                {t('navigation.phone.number')}
              </a>
              <p className={cn('paragraph-small', cx('footer__text'))}>
                {t('navigation.phone.schedule.weekdays')}
                <br />
                {t('navigation.phone.schedule.saturday')}
              </p>
            </div>
          </div>

          <div className={cx('footer__section')}>
            <div className={cx('footer__section-content')}>
              <h3 className={cn('display-small')}>{t('navigation.help.main')}</h3>
              <Link to="/help/rules-guides" className={cn('paragraph-small', cx('footer__link'))}>
                {t('navigation.help.regulations')}
              </Link>
              <Link to="/faq" className={cn('paragraph-small', cx('footer__link'))}>
                {t('navigation.help.faq')}
              </Link>
            </div>

            <div className={cx('footer__section-content')}>
              <h3 className={cn('display-small')}>{t('navigation.legal.main')}</h3>
              <Link to="/privacy" className={cn('paragraph-small', cx('footer__link'))}>
                {t('navigation.legal.privacy')}
              </Link>
              <Link to="/cookies" className={cn('paragraph-small', cx('footer__link'))}>
                {t('navigation.legal.cookies')}
              </Link>
            </div>
          </div>

          <div className={cx('footer__section')}>
            <div className={cx('footer__section-content')}>
              <h3 className={cn('display-small')}>{t('navigation.inPerson.main')}</h3>
              <p className={cn('paragraph-small', cx('footer__text'))}>
                <span className={cn('questions-small')}>{t('navigation.inPerson.mendoza.address')}</span>
                <br />
                {t('navigation.inPerson.mendoza.schedule')}
              </p>
              <p className={cn('paragraph-small', cx('footer__text'))}>
                <span className={cn('questions-small')}>{t('navigation.inPerson.upv.address')}</span>
                <br />
                {t('navigation.inPerson.upv.schedule')}
              </p>
              <p className={cn('paragraph-small', cx('footer__text'))}>
                <span className={cn('questions-small')}>{t('navigation.inPerson.colon.address')}</span>
                <br />
                {t('navigation.inPerson.colon.schedule')}
              </p>
              <p className={cn('paragraph-small', cx('footer__text'))}>
                <span className={cn('paragraph-small')}>{t('navigation.inPerson.appointment.required')}</span>
                <br />
                <Link to="/appointment" className={cn('link-small')}>
                  {t('navigation.inPerson.appointment.request')}
                </Link>
              </p>
            </div>
          </div>

          <div className={cx('footer__section')}>
            <div className={cx('footer__qr-content')}>
              <img className={cx('footer__qr-image')} src={emtQR} alt={t('navigation.qr.alt')} />
              <h3 className={cn('display-cards')}>{t('actions.downloadApp')}</h3>
            </div>
          </div>
        </div>

        <div className={cx('footer__language-scrollup')}>
          <div className={cx('footer__language-switcher')}>
            <button
              onClick={() => changeLanguage('es')}
              className={cn('paragraph-small', cx('language-button', { 'language-button--active': isActive('es') }))}
            >
              {t('language.es')}
            </button>
            <button
              onClick={() => changeLanguage('ca')}
              className={cn('paragraph-small', cx('language-button', { 'language-button--active': isActive('ca') }))}
            >
              {t('language.val')}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={cn('paragraph-small', cx('language-button', { 'language-button--active': isActive('en') }))}
            >
              {t('language.en')}
            </button>
          </div>
          <button
            type="button"
            onClick={handleScrollToTop}
            className={cn('link-small', 'text__color--onbrand', cx('footer__back-to-top'))}
          >
            {t('actions.backToTop')}
          </button>
        </div>
      </div>

      <div className={cx('footer__bottom')}>
        <div className={cx('footer__collab-logos')}>
          <img className={cx('footer__logo')} src={generalitatLogo} alt={t('navigation.logos.generalitat')} />
          <img className={cx('footer__logo')} src={fgvLogo} alt={t('navigation.logos.fgv')} />
          <img className={cx('footer__logo')} src={tramLogo} alt={t('navigation.logos.tram')} />
        </div>

        <div className={cx('footer__social')}>
          <a target="_blank" href="https://wa.me/34658674920">
            <Icon icon="Whatsapp" color="onprimary-secondary" size="large" />
          </a>
          <a target="_blank" href="https://t.me/oacemtvalencia">
            <Icon icon="Telegram" color="onprimary-secondary" size="large" />
          </a>
          <a target="_blank" href="https://www.facebook.com/emtvalencia/">
            <Icon icon="Facebook" color="onprimary-secondary" size="large" />
          </a>
          <a target="_blank" href="https://twitter.com/emtvalencia">
            <Icon icon="Twitter" color="onprimary-secondary" size="large" />
          </a>
          <a target="_blank" href="mailto:atencioalaciutadania@emtvalencia.es">
            <Icon icon="Mail" color="onprimary-secondary" size="large" />
          </a>
        </div>

        <p className={cn('paragraph-xxsmall', 'text__color--onprimary')}>{t('legal.copyright')}</p>
      </div>
    </footer>
  );
};
