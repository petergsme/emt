import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDownload } from '@/hooks/useAppDownload';
import classNames from 'classnames/bind';
import theme from './downloadApp.module.scss';

const cx = classNames.bind(theme);

export const DownloadApp = () => {
  const { t } = useTranslation('download');
  const { redirectToStore } = useAppDownload();

  useEffect(() => {
    redirectToStore('general');
  }, [redirectToStore]);

  return (
    <div className={cx('downloadApp')}>
      <p>{t('redirecting')}</p>
    </div>
  );
};
