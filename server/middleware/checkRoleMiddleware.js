// we need to check if admin is adding new products

const jwt = require("jsonwebtoken");

module.exports = function (role) {
    return function (req, res, next) {
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
            if (decoded.role !== role) {
                res.status(403).json({ message: "No access" });
            }
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).json({ message: "No authorization" });
        }
    };
};
