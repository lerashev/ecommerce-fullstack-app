require("dotenv").config(); // import config from module .env, so a server could read this file
const express = require("express");
const sequelize = require("./db"); // import an object from db.js
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000; // specify a port

const app = express(); // call express function
app.use(cors()); // so we can send requests from a browser
app.use(express.json()); // so the app can parse a json format
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// errro processing, last Middleware
app.use(errorHandler);

// call a function for a connection to a database
const start = async () => {
    try {
        // with authenticate() we will connect to a database
        await sequelize.authenticate();
        // compare a state of a database
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        // tells server what port it should listen and a callback function that will be executed after server successfully started
    } catch (err) {
        console.log(err);
    }
};

start();
