import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames/bind';
import styles from './floatingBanner.module.scss';
import { useNavigate } from 'react-router-dom';

const cn = cx.bind(styles);

interface FloatingBannerProps {
  targetSectionId: string;
}

export const FloatingBanner = ({ targetSectionId }: FloatingBannerProps) => {
  const { t } = useTranslation('apps');
  const [showBanner, setShowBanner] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        const isVisible = targetSection.getBoundingClientRect().top < window.innerHeight;
        setShowBanner(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetSectionId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showBanner) return;

  return (
    <>
      {isMobile && (
        <button type="button" onClick={() => navigate('/#apps')} className={cn('floatingBanner__banner')}>
          <h2 className={cn('label-button', 'text__color--onbrand', 'center-text')}>{t('apps.downloadApps')}</h2>
        </button>
      )}
    </>
  );
};
