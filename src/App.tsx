import React, { Suspense } from "react";
import "./app.scss";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu, Footer } from "./components/organisms";
import { Loading } from "./components/atoms";
import { CategoryFilterProvider } from "./contexts/CategoryFilterContext/CategoryFilterProvider";
import { UserProvider } from "./contexts/UserContext/UserProvider";
import { routes } from "./routes";

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CategoryFilterProvider>
        <UserProvider>
          <BrowserRouter>
            <div className="grsp">
              <Menu />
              <main>
                <Routes>
                  {routes.map(({ path, Component }, i) => (
                    <Route
                      path={path}
                      element={<Component />}
                      key={`route-${i}`}
                    />
                  ))}
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </UserProvider>
      </CategoryFilterProvider>
    </Suspense>
  );
};
