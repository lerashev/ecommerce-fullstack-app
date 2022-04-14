// an array of routes to those pages to which only an athorized user has access

import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from "./utils/consts";
export const authRoutes = [
    {
        path: ADMIN_ROUTE, // link
        Component: <Admin />, // actual page
    },
    {
        path: BASKET_ROUTE, // link
        Component: <Basket />, // actual page
    },
];
export const publicRoutes = [
    {
        path: SHOP_ROUTE, // link
        Component: <Shop />, // actual page
    },
    {
        path: LOGIN_ROUTE, // link
        Component: <Auth />, // actual page
    },
    {
        path: REGISTRATION_ROUTE, // link
        Component: <Auth />, // actual page
    },
    {
        path: DEVICE_ROUTE + "/:id", // link
        Component: <DevicePage />, // actual page
    },
];
