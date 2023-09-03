import React, { Suspense } from "react";
import "./app.scss";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, BusinessPage, CityPage, CategoryPage } from "./views";
import { Menu, Footer } from "./components/organisms";
import { Loading } from "./components/atoms";

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className="grsp">
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/:cityName/business/:businessUrl"
                element={<BusinessPage />}
              />
              <Route path="/cities/:cityName" element={<CityPage />} />
              <Route
                path="/cities/:cityName/:categoryName"
                element={<CategoryPage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
