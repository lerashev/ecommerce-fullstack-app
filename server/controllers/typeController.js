const { Type } = require("../models/models");
const ApiError = require("../error/apiError");

class TypeController {
    async create(req, res) {
        const { name } = req.body;
        const type = await Type.create({ name }); // error: name is null
        return res.json(type);
    }
    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }
}

module.exports = new TypeController();
