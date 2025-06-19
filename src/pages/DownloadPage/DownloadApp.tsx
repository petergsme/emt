import { useEffect } from 'react';
import { useAppDownload } from '@/hooks/useAppDownload';

export const DownloadApp = () => {
  const { redirectToStore } = useAppDownload();

  useEffect(() => {
    redirectToStore('general');
  }, [redirectToStore]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <p>Redirigiendo a la tienda de aplicaciones...</p>
    </div>
  );
};
