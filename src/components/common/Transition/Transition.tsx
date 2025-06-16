import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import theme from './transition.module.scss';

const cx = classNames.bind(theme);

const Transition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 480);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isTransitioning) {
    return null;
  }

  return <div className={cx('overlay')} />;
};

export default Transition;
