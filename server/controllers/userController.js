const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    }); // payload and secret key
};

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Invalid email or passowrd"));
        }
        // check if there is a user with this email in a system
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(
                ApiError.badRequest("User with this email is already exist")
            );
        }
        // If we did not find a user, we can hash a password and create a new user
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        // creating basket for a user
        const basket = await Basket.create({ userId: user.id });
        // generate jwt
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        // if user not found return an error
        if (!user) {
            return next(ApiError.internal("User not found"));
        }
        // check if password that was entered is the same as in the database
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Invalid password"));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }
    //  generate new token and send it back to client
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
}

module.exports = new UserController();
