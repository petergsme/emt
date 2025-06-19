import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import cn from 'classnames';
import { Icon } from '@/assets/icons/Icon';
import { Accordion } from '@/components/common/Accordion/Accordion';
import { Button } from '@/components/common/Button/Button';
import theme from './sidebarMobile.module.scss';
import { useTranslation } from 'react-i18next';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useAppDownload } from '@/hooks/useAppDownload';

const cx = classNames.bind(theme);

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMobile = ({ isOpen, onClose }: SidebarMobileProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('menu');

  const { redirectToStore, isMobile } = useAppDownload();
  useBodyScrollLock({ enabled: isOpen });

  const handleGeneralDownload = () => {
    if (isMobile) {
      redirectToStore('general');
    } else {
      navigate('/downloadApps');
    }
  };
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose();
    }, 400);
  };

  if (!isOpen && !isVisible) return;

  return (
    <>
      <div
        className={cx('sidebar__overlay', {
          'sidebar__overlay--closing': isClosing,
        })}
        onClick={handleClose}
      />

      <aside
        className={cx('sidebar__panel', {
          'sidebar__panel--closing': isClosing,
        })}
        role="dialog"
        aria-modal="true"
        aria-label={t('accessibility.menu')}
      >
        <section>
          <header className={cx('sidebar__topbar')}>
            <button
              className={cx('sidebar__close-button')}
              onClick={handleClose}
              aria-label={t('accessibility.closeMenu')}
            >
              <Icon icon="Close" size="large" color="onbrand" />
            </button>
          </header>

          <main className={cn('accordion__lastChild--border-bottom', cx('sidebar__main-content'))}>
            <section className={cx('sidebar__nav-section')}>
              <NavLink
                to="/"
                className={cn('display-medium', cx('sidebar__nav-link'))}
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    navigate('/#benefits');
                  }, 400);
                }}
              >
                {t('navigation.benefits')}
              </NavLink>
            </section>

            <Accordion
              text={t('navigation.titlesAndRates')}
              textClassName={cn('display-medium')}
              variant="onbrand"
              iconSize="medium"
              gapSize="large"
            >
              <nav className={cx('sidebar__sub-nav')}>
                <NavLink
                  to="/mobilis-cards"
                  className={({ isActive }) =>
                    cn('paragraph-medium', cx('sidebar__nav-link', { 'sidebar__nav-link--active': isActive }))
                  }
                  onClick={handleClose}
                >
                  {t('titlesAndRates.cards')}
                </NavLink>
                <NavLink
                  to="/mobilis-cards"
                  className={({ isActive }) =>
                    cn('paragraph-medium', cx('sidebar__nav-link', { 'sidebar__nav-link--active': isActive }))
                  }
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      navigate('/mobilis-cards#recharge');
                    }, 400);
                  }}
                >
                  {t('titlesAndRates.consultationsAndRecharges')}
                </NavLink>
                <NavLink
                  to="/mobilis-cards"
                  className={({ isActive }) =>
                    cn('paragraph-medium', cx('sidebar__nav-link', { 'sidebar__nav-link--active': isActive }))
                  }
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      navigate('/mobilis-cards#register');
                    }, 400);
                  }}
                >
                  {t('titlesAndRates.registerCard')}
                </NavLink>
              </nav>
            </Accordion>

            <Accordion
              text={t('navigation.help')}
              textClassName={cn('display-medium')}
              variant="onbrand"
              iconSize="medium"
              gapSize="large"
            >
              <nav className={cx('sidebar__sub-nav')}>
                <NavLink
                  to="/help/rules-guides"
                  className={({ isActive }) =>
                    cn('paragraph-medium', cx('sidebar__nav-link', { 'sidebar__nav-link--active': isActive }))
                  }
                  onClick={handleClose}
                >
                  {t('help.busUsageAndRegulations')}
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    cn('paragraph-medium', cx('sidebar__nav-link', { 'sidebar__nav-link--active': isActive }))
                  }
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      navigate('/#faq');
                    }, 400);
                  }}
                >
                  {t('help.frequentQuestions')}
                </NavLink>
              </nav>
            </Accordion>
          </main>
        </section>

        <footer className={cx('sidebar__action-bar')}>
          <Button
            type="button"
            style="outlined"
            color="onbrand"
            fullWidth
            onClick={() => (window.location.href = 'mailto:atencioalaciutadania@emtvalencia.es')}
          >
            {t('actions.contactUs')}
          </Button>

          <Button type="button" style="filled" color="onbrand" fullWidth onClick={() => handleGeneralDownload()}>
            {t('actions.downloadApps')}
          </Button>
        </footer>
      </aside>
    </>
  );
};

export default SidebarMobile;
