import { NavLink, Link, Outlet } from 'react-router-dom';
import { useScrollToSection } from './hooks/useScrollToSection';
import { useCanonical } from './hooks/useCanonical';

import classNames from 'classnames/bind';
import theme from './App.module.scss';
import { AppSection } from './components/common/Apps/AppSection';
import { SingleBlock } from './components/layout/SingleBlock/SingleBlock';

const cx = classNames.bind(theme);

export const App: React.FC = () => {
  useScrollToSection();
  useCanonical();

  return (
    <>
      <div className={cx('navPrueba')}>
        <NavLink className="a" to="/">
          Home
        </NavLink>
        <Link to="/map">Mapa</Link>

        <Link to="/mobilis-cards">Titulos y tarifas</Link>
        <Link to="/mobilis-cards#recharge">Consultas y recargas</Link>
        <Link to="/mobilis-cards#register">Registra tu tarjeta</Link>

        <Link to="/help/rules-guides">Ayuda</Link>
        <Link to="/help/rules-guides">Uso del bus y normativa</Link>
        <Link to="/faq">Preguntas frecuentes</Link>
      </div>

      <Outlet />
      <SingleBlock backgroundColor="pink" className={cx('extra-padding-top')}>
        <AppSection />
      </SingleBlock>
    </>
  );
};

// Podrias utilizar el navLink en vez de link, que trae unos aria (bueno para accesibilidad) y mas personalizacion.
