import { NavLink, Link, Outlet } from 'react-router-dom';
import { useScrollToSection } from './hooks/useScrollToSection';
import theme from './App.module.scss';

export const App: React.FC = () => {
  useScrollToSection();

  return (
    <>
      <div className={theme.menu}>
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
      <main>
        <Outlet />
      </main>
    </>
  );
};

//The nav component will be here, in App.tsx. And it will make use of the routers' Link and NavLink. Remember NavLink has className properties relateed to whether it's selected while Link doesn't. The class ".active" is automatically assigned to an active NavLink. Also important, these components prevent page reloads, unlike <a>. For now here's a fake nav to show the usage of those two components.

// Aquí tenemos que meter el footer.
