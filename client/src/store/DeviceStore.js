import { makeAutoObservable } from "mobx"; // will observe a change of variables (isAuth and user)

export default class DeviceStore {
    constructor() {
        this._types = []; // _ --> means that a variable cannot change
        this._brands = [];
        this._devices = [];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1; // current page, by default is 1
        this._totalCount = 0; // amount of devices that are availabe for a specific request
        this._limit = 3; // amount of devices per page

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    // when clicking on a specific type, we will need to select it

    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this.setPage(1);
        this._selectedBrand = brand;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get totalCount() {
        return this._totalCount;
    }

    get page() {
        return this._page;
    }

    get limit() {
        return this._limit;
    }
}
