const express = require("express")
const storesController = require("../controller/stores")

const router = express.Router()

router.post("/create", storesController.createStore)

router.get("/byCategory/:category_id", storesController.getStoreByCat)

module.exports = router