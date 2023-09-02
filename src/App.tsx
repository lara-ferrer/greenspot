import React from 'react';import './app.scss';
import './styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, BusinessPage, CityPage, CategoryPage } from './views';
import { Menu, Footer } from './components/organisms';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="grsp">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business/:businessUrl" element={<BusinessPage />} />
            <Route path="/cities/:cityName" element={<CityPage />} />
            <Route path="/cities/:cityName/:categoryName" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

