import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true); // will be responsible for whether a page is loading or not
    // we need to send a request only once, when we open app
    useEffect(() => {
        check()
            .then((data) => {
                user.setUser(true); // user has logged in
                user.setIsAuth(true); // user has logged in
            })
            .finally(() => setLoading(false));
    }, []); // if this array is empty, function will be executed only once

    if (loading) {
        return <Spinner animation="grow" />; // check Spinner, start here!!
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
