import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './floatingBanner.module.scss';
import { useNavigate } from 'react-router-dom';
import app_QR from '@/assets/emt-qr.svg';

const cx = classNames.bind(theme);

interface FloatingBannerProps {
  targetSectionId: string;
}

export const FloatingBanner = ({ targetSectionId }: FloatingBannerProps) => {
  const { t } = useTranslation('apps');
  const [showBanner, setShowBanner] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection && showBanner && !isClosing) {
        const isVisible = targetSection.getBoundingClientRect().top < window.innerHeight;

        if (isVisible) {
          setIsClosing(true);
          setTimeout(() => {
            setShowBanner(false);
          }, 300);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetSectionId, showBanner, isClosing]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showBanner) return null;

  return (
    <>
      {isMobile ? (
        <button
          type="button"
          onClick={() => navigate('/#apps')}
          className={cx('floatingBanner__banner', { 'floatingBanner__banner--exit': isClosing })}
        >
          <h2 className="label-button text__color--onbrand center-text">{t('apps.downloadApps')}</h2>
        </button>
      ) : (
        <div
          className={cx('floatingBanner__desktop', { 'floatingBanner__desktop--exit': isClosing })}
          onClick={() => navigate('/#apps')}
        >
          <h2 className={cn('display-small', 'text__color--onprimary', ' center-text')}>{t('apps.downloadApps')}</h2>
          <img className={cx('floatingBanner__qr')} src={app_QR} alt={t('apps.altQR')} />
        </div>
      )}
    </>
  );
};
