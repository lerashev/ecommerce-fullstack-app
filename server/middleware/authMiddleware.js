// decode token and check if its valid

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(" ")[1]; // get token from header
        if (!token) {
            res.status(401).json({ message: "No authorization" });
        }
        // check if token is valid with verify()
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "No authorization" });
    }
};
