import { $authHost, $host } from "./index";

// create a type
export const createType = async (type) => {
    // here we will store a response from server
    const { data } = await $authHost.post("api/type", type);
    // after a request has passed and we got data, we will store token in local storage

    return data;
};

// get types
export const fetchTypes = async () => {
    // here we will store a response from server
    const { data } = await $host.get("api/type");

    return data;
};

// create a brand
export const createBrand = async (brand) => {
    // here we will store a response from server
    const { data } = await $authHost.post("api/brand", brand);
    // after a request has passed and we got data, we will store token in local storage

    return data;
};

// get brands
export const fetchBrands = async () => {
    // here we will store a response from server
    const { data } = await $host.get("api/brand");
    return data;
};

// create a device
export const createDevice = async (device) => {
    // here we will store a response from server
    const { data } = await $authHost.post("api/device", device);
    return data;
};

// get devices
export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    // here we will store a response from server
    const { data } = await $host.get("api/device", {
        params: { typeId, brandId, page, limit },
    });
    return data;
};

// get devices
export const fetchOneDevice = async (id) => {
    // here we will store a response from server
    const { data } = await $host.get("api/device/" + id);

    return data;
};
