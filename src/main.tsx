import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './i18n';
import './styles/index.scss';

import { App } from './App.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import CardsPage from './pages/CardsPage/CardsPage.tsx';
import RulesPage from './pages/RulesPage/RulesPage.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage.tsx';
import CookiesPage from './pages/CookiesPage/CookiesPage.tsx';
import { DownloadApp } from './pages/DownloadPage/DownloadApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/mobilis-cards" element={<CardsPage />} />
          <Route path="/help/rules-guides" element={<RulesPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/downloadApps" element={<DownloadApp />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

//'Index' on HomePage route signals default route, makes sense.
//Remember that right now every route inside the app routing will include whatever's there, like a nav/footer... If you want a page not to have those, take it out of it.
