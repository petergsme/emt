import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import NavbarMobile from './components/mobile/NavbarMobile';
import './App.module.scss';
import '@/styles/mixins.scss';
import './i18n';
import { Icon } from './assets/icons/Icon';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Icon icon="Close" />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
