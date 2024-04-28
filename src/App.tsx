import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav, Footer } from "./components/organisms";
import { Loading } from "./components/atoms";
import { CategoryFilterProvider } from "./contexts/category-filter-context/category-filter-provider";
import { UserProvider } from "./contexts/user-context/user-provider";
import { routes } from "./routes";
import { LoginProvider } from "./contexts/login-context/login-provider";
import "./app.scss";
import "./styles/index.scss";

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CategoryFilterProvider>
        <LoginProvider>
          <UserProvider>
            <BrowserRouter>
              <div className="grsp">
                <Nav />
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
        </LoginProvider>
      </CategoryFilterProvider>
    </Suspense>
  );
};
