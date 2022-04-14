const uuid = require("uuid"); // generate random ids
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/apiError");

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));

            // create device
            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName,
            });

            if (info) {
                info = JSON.parse(info); // if we transfer data via form-data (postamn), they come back as strings
                info.forEach((i) => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id,
                    });
                });
            }

            return res.json(device);
        } catch (err) {
            next(ApiError.badRequest(JSON.stringify(err)));
        }
    }
    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query; // current page and limit (the amount of devices on 1 page)
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit; // how much products we need to skip;
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset });
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({
                where: { brandId },
                limit,
                offset,
            }); // where: {brandId} --> field where to search
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({
                where: { typeId },
                limit,
                offset,
            });
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({
                where: { typeId, brandId },
                limit,
                offset,
            });
        }
        return res.json(devices);
    }
    // function for getting a one specific device; we will get devices by their ids
    async getOne(req, res) {
        //first get an id of that device
        const { id } = req.params; // from deviceRouter, we specified that param in there
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo, as: "info" }],
        }); // get an array of characteristics

        return res.json(device);
    }
}

module.exports = new DeviceController();
