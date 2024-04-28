import { LazyExoticComponent, lazy } from 'react';
import { Route } from 'react-router-dom';

const HomeComponent = lazy(() => import('./views/home'));
const BusinessPageComponent = lazy(() => import('./views/business-page/business-page'));
const CityPageComponent = lazy(() => import('./views/city-page'));
const CategoryPageComponent = lazy(() => import('./views/category-page'));
const UserPageComponent = lazy(() => import('./views/user-page'));

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
};

export const routes: Route[] = [
    {
        to: "/",
        path: "/",
        Component: HomeComponent,
        name: "homepage"
    },
    {
        to: "restaurantes/:businessUrl",
        path: "/restaurantes/:businessUrl",
        Component: BusinessPageComponent,
        name: "business-page"
    },
    {
        to: "ciudades/:cityName",
        path: "/ciudades/:cityName",
        Component: CityPageComponent,
        name: "city-page"
    },
    {
        to: ":categoryName/:cityName",
        path: "/:categoryName/:cityName",
        Component: CategoryPageComponent,
        name: "category-page"
    },
    {
        to: "mi-perfil",
        path: "/mi-perfil",
        Component: UserPageComponent,
        name: "user-page"
    }
];