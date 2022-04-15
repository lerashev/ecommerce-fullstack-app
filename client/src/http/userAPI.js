// here we will create functions for registration, authorization and check if token is valid

import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    // here we will store a response from server
    const { data } = await $host.post("api/user/registration", {
        email,
        password,
        role: "ADMIN",
    });
    // after a request has passed and we got data, we will store token in local storage
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
};

export const login = async (email, password) => {
    // here we will store a response from server
    const { data } = await $host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
};

// user has logged in, token has been saved and every time page has beed reloaded, function check will be called and if token is not valid, user will be logged out
export const check = async () => {
    // here we will store a response from server
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
};
