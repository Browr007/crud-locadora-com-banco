const express = require("express")
const router = express. Router()

const GeneroContrller = require("../controllers/generoController")

router.get("/", GeneroContrller.getAllGeneros)
router.post("/", GeneroContrller.createGenero)

module.exports = router
