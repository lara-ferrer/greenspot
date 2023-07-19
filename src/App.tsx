import React from 'react';import './app.scss';
import './styles/index.scss';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, BusinessPage } from './views';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="grsp">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business/:businessUrl" element={<BusinessPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

