const express = require("express")
const categoriesController = require("../controller/categories")

const router = express.Router()

router.post("/create", categoriesController.createCategory)

router.get("/", categoriesController.getAll)

router.delete("/:category_id", categoriesController.deleteCategory)

module.exports = router