import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToSection } from './hooks/useScrollToSection';
import { useCanonical } from './hooks/useCanonical';

import classNames from 'classnames/bind';
import theme from './App.module.scss';
import { Navbar } from './components/ui/Navbar/Navbar';
import { AppSection } from './components/common/Apps/AppSection';
import { SingleBlock } from './components/layout/SingleBlock/SingleBlock';
import { Footer } from './components/ui/Footer/Footer';
import { FloatingBanner } from './components/common/Apps/floatingBanner/FloatingBanner';

const cx = classNames.bind(theme);

export const App: React.FC = () => {
  useScrollToSection();
  useCanonical();
  useLocation();

  return (
    <>
      <Navbar />

      <Outlet />

      {location.pathname === '/' && <FloatingBanner targetSectionId="apps" />}

      {location.pathname !== '/error' && (
        <SingleBlock id="apps" backgroundColor="pink" className={cx('extra-padding-top')}>
          <AppSection />
        </SingleBlock>
      )}

      <Footer />
    </>
  );
};
