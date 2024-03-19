const { Router } = require("express");
const express = require("express");
const shoseController = require("../controllers/shoeController");

const router = express.Router();

router.get("/", shoseController.getAll);
router.get("/:id", shoseController.getProductById);
router.post("/create", shoseController.createProduct);
router.put("/updatebyid/:id", shoseController.updateProduct);
router.delete("/delete/:id", shoseController.deleteProduct);

module.exports = router;
