const ApiError = require("../error/apiError");

// export function, which is a middleware

module.exports = function (err, req, res, next) {
    // error, request, response and function next()
    // by calling next() we will transfer control to a next middleware in the chain

    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    //if there is an error that is not an instance of ApiError
    return res.status(500).json({ message: "Unexpected error" });
};
