import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    window.scrollTo({ top: 0 });
  }, [location.hash, location.pathname]);
};
