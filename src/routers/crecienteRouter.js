const express = require("express");
const router = express.Router();
const crecienteController = require("../controller/crecienteController");
router.get("/",crecienteController.inicio);

module.exports = router;