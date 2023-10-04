import { LazyExoticComponent, lazy } from 'react';
import { Route } from 'react-router-dom';

const HomeComponent = lazy(() => import('./views/home'));
const BusinessPageComponent = lazy(() => import('./views/business-page/business-page'));
const CityPageComponent = lazy(() => import('./views/city-page'));
const CategoryPageComponent = lazy(() => import('./views/category-page'));

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
        to: ":cityName/business/:businessUrl",
        path: "/:cityName/business/:businessUrl",
        Component: BusinessPageComponent,
        name: "business-page"
    },
    {
        to: "cities/:cityName",
        path: "/cities/:cityName",
        Component: CityPageComponent,
        name: "city-page"
    },
    {
        to: "cities/:cityName/:categoryName",
        path: "/cities/:cityName/:categoryName",
        Component: CategoryPageComponent,
        name: "category-page"
    }
];