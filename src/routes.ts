import { LazyExoticComponent, lazy } from 'react';
import { Route } from 'react-router-dom';

const HomeComponent = lazy(() => import('./views/home-page/home-page'));
const BusinessPageComponent = lazy(() => import('./views/business-page/business-page'));
const CityPageComponent = lazy(() => import('./views/city-page/city-page'));
const CategoryPageComponent = lazy(() => import('./views/category-page/category-page'));
const UserPageComponent = lazy(() => import('./views/user-page'));

//type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    //Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    Component: any;
    name: string;
    title?: string;
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
        name: "restaurant",
    },
    {
        to: ":cityName/restaurantes",
        path: "/:cityName/restaurantes",
        Component: CategoryPageComponent,
        name: "restaurant",
        title: "Restaurantes"
    },
    {
        to: "cafeterias/:businessUrl",
        path: "/cafeterias/:businessUrl",
        Component: BusinessPageComponent,
        name: "cafe",
    },
    {
        to: ":cityName/cafeterias",
        path: "/:cityName/cafeterias",
        Component: CategoryPageComponent,
        name: "cafe",
        title: "Cafeterías"
    },
    {
        to: "moda-y-belleza/:businessUrl",
        path: "/moda-y-belleza/:businessUrl",
        Component: BusinessPageComponent,
        name: "fashion"
    },
    {
        to: ":cityName/moda-y-belleza",
        path: "/:cityName/moda-y-belleza",
        Component: CategoryPageComponent,
        name: "fashion",
        title: "Moda y belleza"
    },
    {
        to: "ocio/:businessUrl",
        path: "/ocio/:businessUrl",
        Component: BusinessPageComponent,
        name: "leisure"
    },
    {
        to: ":cityName/ocio",
        path: "/:cityName/ocio",
        Component: CategoryPageComponent,
        name: "leisure",
        title: "Ocio"
    },
    {
        to: "ciudades/:cityName",
        path: "/ciudades/:cityName",
        Component: CityPageComponent,
        name: "city-page"
    },
    {
        to: "mi-perfil",
        path: "/mi-perfil",
        Component: UserPageComponent,
        name: "user-page"
    }
];