import axios from "axios";

// create 2 instances
// first one will be for a reqular requests (authorization no needed)

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// for a second one --> for each request a header (authorization) and token will be added automatically
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// we need to add a token foe each request automatically
const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`; // when we athorized, we will add token to a local storage
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
