import { NavLink, Link, Outlet } from 'react-router-dom';
import theme from './App.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <div className={theme.menu}>
        <NavLink className="a" to="/">
          Home
        </NavLink>
        <Link to="/login">Login</Link>
      </div>
      <Outlet />
    </>
  );
};

//The nav component will be here, in App.tsx. And it will make use of the routers' Link and NavLink. Remember NavLink has className properties relateed to whether it's selected while Link doesn't. The class ".active" is automatically assigned to an active NavLink. Also important, these components prevent page reloads, unlike <a>. For now here's a fake nav to show the usage of those two components.

//Remember an import with @ like this: import '@/styles/mixins.scss'; means that you're searching from the src folder, @ = src.

//Remember the idea is to have a nav and footer component here.
