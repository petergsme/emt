import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import cn from 'classnames';
import { Button } from '@/components/common/Button/Button';
import { Icon } from '@/assets/icons/Icon';
import SidebarMobile from './SidebarMobile/SidebarMobile';
import emtIcon from '@/assets/emt-icon.png';
import theme from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(theme);

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('menu');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={cx('navbar')}>
      <div className={cx('navbar__mobile-container')}>
        <Link to="/" className={cx('navbar__brand')}>
          <img className={cx('navbar__brand-logo')} src={emtIcon} alt={t('accessibility.logoAlt')} />
        </Link>

        {isMobile && (
          <button
            className={cx('navbar__menu-button')}
            onClick={() => setIsSidebarOpen(true)}
            aria-label={t('accessibility.openMenu')}
          >
            <Icon icon="Menu" size="large" color="onprimary" extraClass={cx('navbar__menu-icon')} />
          </button>
        )}
      </div>

      {isMobile ? (
        <SidebarMobile isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      ) : (
        <div className={cx('navbar__desktop-content')}>
          <nav className={cx('navbar__nav')}>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                cn('paragraph-small', cx('navbar__nav-link', { 'navbar__nav-link--active': isActive }))
              }
            >
              {t('navigation.map')}
            </NavLink>
            <NavLink
              to="/mobilis-cards"
              className={({ isActive }) =>
                cn('paragraph-small', cx('navbar__nav-link', { 'navbar__nav-link--active': isActive }))
              }
            >
              {t('navigation.titlesAndRates')}
            </NavLink>
            <NavLink
              to="/rules-guides"
              className={({ isActive }) =>
                cn('paragraph-small', cx('navbar__nav-link', { 'navbar__nav-link--active': isActive }))
              }
            >
              {t('navigation.help')}
            </NavLink>
          </nav>

          <Button type="button" style="filled" color="onprimary" onClick={() => navigate('/contact')}>
            {t('actions.contact')}
          </Button>
        </div>
      )}
    </header>
  );
};
