import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

// navigation on pages
const AppRouter = () => {
    const { user } = useContext(Context); // this const will show if a user is authorized or not

    console.log(user);
    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(
                    ({ path, Component }) => (
                        <Route
                            exact
                            key={path}
                            path={path}
                            element={Component}
                        />
                    )
                    // exact - a path should match; key - as we iterate throuth an array; path to ech page is unique
                )}
            {publicRoutes.map(({ path, Component }) => (
                <Route exact key={path} path={path} element={Component} /> // exact - a path should match; key - as we iterate throuth an array; path to ech page is unique
            ))}
            <Route path="*" element={SHOP_ROUTE}></Route>
        </Routes>
    );
};

export default AppRouter;
