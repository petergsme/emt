import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCanonical = () => {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = 'https://emtvalencia.netlify.app' + location.pathname;

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }, [location.pathname]);
};
