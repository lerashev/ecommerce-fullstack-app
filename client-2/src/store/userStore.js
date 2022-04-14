import { makeAutoObservable } from "mobx"; // will observe a change of variables (isAuth and user)

export default class UserStore {
    constructor() {
        this._isAuth = false; // _ --> means that a variable cannot change
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}
