import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import './styles/index.scss';

import { App } from './App.tsx';
import { HomePage } from './pages/home/HomePage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

//'Index' on HomePage route signals default route, makes sense.

//Remember that right now every route inside the app routing will include whatever's there, like a nav/footer... If you want a page not to have those, take it out of it.
