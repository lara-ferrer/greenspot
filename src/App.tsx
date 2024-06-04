import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SubcategoryFilterProvider } from "./contexts/subcategory-filter-context/subcategory-filter-provider";
import { UserProvider } from "./contexts/user-context/user-provider";
import { routes } from "./routes";
import { LoginProvider } from "./contexts/login-context/login-provider";
import "./app.scss";
import "./styles/index.scss";
import { Loading } from "./components/atoms/loading/loading";
import { Footer } from "./components/organisms/footer/footer";
import { Nav } from "./components/organisms/nav/nav";

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SubcategoryFilterProvider>
        <LoginProvider>
          <UserProvider>
            <BrowserRouter>
              <div className="grsp">
                <Nav />
                <main>
                  <Routes>
                    {routes.map(({ path, Component, name, title }, i) => (
                      <Route
                        path={path}
                        element={<Component title={title} name={name} />}
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
      </SubcategoryFilterProvider>
    </Suspense>
  );
};
