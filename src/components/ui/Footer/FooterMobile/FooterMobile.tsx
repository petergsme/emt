import { useTranslation } from 'react-i18next';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';
import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import cn from 'classnames';
import styles from './footerMobile.module.scss';
import emtLogo from '../../../../assets/EMT-white.svg';
import ajuntamentLogo from '../../../../assets/Ayuntamiento-white.svg';
import { Accordion } from '@/components/common/Accordion/Accordion';
import { Button } from '@/components/common/Button/Button';
import { Icon } from '@/assets/icons/Icon';

const cx = classNames.bind(styles);

export const FooterMobile = () => {
  const { t } = useTranslation('footer');
  const { changeLanguage, isActive } = useLanguageSwitcher();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={cx('footer--mobile')}>
      <div className={cx('footer__logos')}>
        <img src={emtLogo} alt={t('navigation.logos.emt')} className={cx('footer__logo-emt')} />
        <img src={ajuntamentLogo} alt={t('navigation.logos.ajuntament')} className={cx('footer__logo-ajuntament')} />
      </div>

      <div className={cx('footer__content')}>
        <Accordion
          text={t('navigation.titlesAndRates.main')}
          textClassName={cn('display-small', cx('text-decoration-none'))}
          variant="onbrand"
          iconSize="small"
          gapSize="large"
        >
          <div className={cx('footer__submenu')}>
            <Link to="/mobilis-cards" className={cn('paragraph-small', cx('text-decoration-none'))}>
              {t('navigation.titlesAndRates.cards')}
            </Link>
            <Link to="/mobilis-cards#recharge" className={cn('paragraph-small', cx('text-decoration-none'))}>
              {t('navigation.titlesAndRates.queries')}
            </Link>
            <Link to="/mobilis-cards#register" className={cn('paragraph-small', cx('text-decoration-none'))}>
              {t('navigation.titlesAndRates.register')}
            </Link>
          </div>
        </Accordion>

        <Accordion
          text={t('navigation.help.main')}
          textClassName={cn('display-small', cx('text-decoration-none'))}
          variant="onbrand"
          iconSize="medium"
          gapSize="large"
        >
          <div className={cx('footer__submenu')}>
            <Link to="/help/rules-guides" className={cn('paragraph-small', cx('text-decoration-none'))}>
              {t('navigation.help.regulations')}
            </Link>
            <Link to="/#faq" className={cn('paragraph-small', cx('text-decoration-none'))}>
              {t('navigation.help.faq')}
            </Link>
          </div>
        </Accordion>

        <Accordion
          text={t('navigation.inPerson.main')}
          textClassName={cn('display-small', cx('text-decoration-none'))}
          variant="onbrand"
          iconSize="medium"
          gapSize="large"
        >
          <div className={cx('footer__submenu')}>
            <p className={cn('paragraph-small')}>
              <span className={cn('questions-small')}>{t('navigation.inPerson.mendoza.address')}</span>
              <br />
              {t('navigation.inPerson.mendoza.schedule')}
            </p>
            <p className={cn('paragraph-small')}>
              <span className={cn('questions-small')}>{t('navigation.inPerson.upv.address')}</span>
              <br />
              {t('navigation.inPerson.upv.schedule')}
            </p>
            <p className={cn('paragraph-small')}>
              <span className={cn('questions-small')}>{t('navigation.inPerson.colon.address')}</span>
              <br />
              {t('navigation.inPerson.colon.schedule')}
            </p>
            <p className={cn('paragraph-small')}>
              {t('navigation.inPerson.appointment.required')}
              <br />
              <a
                href="https://www.emtvalencia.es/ciudadano/index.php?option=com_content&view=article&id=1909:request-for-an-appointment&catid=89&Itemid=185&lang=es"
                target="_blank"
                className={cn('link-small')}
              >
                {t('navigation.inPerson.appointment.request')}
              </a>
            </p>
          </div>
        </Accordion>

        <Accordion
          text={t('navigation.phone.main')}
          textClassName={cn('display-small', cx('text-decoration-none'))}
          variant="onbrand"
          iconSize="medium"
          gapSize="large"
        >
          <div className={cx('footer__submenu')}>
            <a href="tel:963158515" className={cx('questions-small')}>
              {t('navigation.phone.number')}
            </a>
            <p className={cn('paragraph-small')}>
              {t('navigation.phone.schedule.weekdays')}
              <br />
              {t('navigation.phone.schedule.saturday')}
            </p>
          </div>
        </Accordion>

        <Accordion
          text={t('navigation.legal.main')}
          textClassName={cn('display-small', cx('text-decoration-none'))}
          variant="onbrand"
          iconSize="medium"
          gapSize="large"
        >
          <div className={cx('footer__submenu')}>
            <Link to="/privacy" className={cn('paragraph-small', cx('text-decoration-none'))}>
              {t('navigation.legal.privacy')}
            </Link>
            <Link to="/cookies" className={cn('paragraph-small', cx('text-decoration-none'))}>
              {t('navigation.legal.cookies')}
            </Link>
          </div>
        </Accordion>
      </div>

      <div className={cx('footer__social')}>
        <a target="_blank" href="https://wa.me/34658674920">
          <Icon icon="Whatsapp" color="onbrand" size="large" />
        </a>
        <a target="_blank" href="https://t.me/oacemtvalencia">
          <Icon icon="Telegram" color="onbrand" size="large" />
        </a>
        <a target="_blank" href="https://www.facebook.com/emtvalencia/">
          <Icon icon="Facebook" color="onbrand" size="large" />
        </a>
        <a target="_blank" href="https://twitter.com/emtvalencia">
          <Icon icon="Twitter" color="onbrand" size="large" />
        </a>
        <a target="_blank" href="mailto:atencioalaciutadania@emtvalencia.es">
          <Icon icon="Mail" color="onbrand" size="large" />
        </a>
      </div>

      <div className={cx('footer__buttons')}>
        <Button type="button" style="outlined" color="onbrand" fullWidth onClick={() => navigate('/contact')}>
          {t('actions.contact')}
        </Button>
        <Button type="button" style="filled" color="onbrand" fullWidth onClick={() => navigate('/downloadApp')}>
          {t('actions.downloadApps')}
        </Button>
      </div>

      <button type="button" onClick={handleScrollToTop} className={cn('link-small', cx('footer__to-top-link'))}>
        {t('actions.backToTop')}
      </button>

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

      <p className={cn('paragraph-xxsmall', 'center-text')}>{t('legal.copyright')}</p>
    </footer>
  );
};
