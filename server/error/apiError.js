// error handler; if id is required and a user have not entered it, the error should come out

class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    // create static functions (see notes.js)
    static badRequest(message) {
        return new ApiError(400, message);
    }
    static internal(message) {
        return new ApiError(500, message);
    }
    static forbidden(message) {
        return new ApiError(403, message);
    }
}

module.exports = ApiError;
