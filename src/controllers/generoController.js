const GeneroModel = require("../models/GeneroModel")

const GeneroContrller = {
    async getAllGeneros(req, res) {
        const generos = await GeneroModel.findAll()

        return res.json (generos)
    }

}