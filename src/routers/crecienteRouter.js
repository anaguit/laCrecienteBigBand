const express = require("express");
const router = express.Router();
const crecienteController = require("../controller/crecienteController");


router.get("/",crecienteController.inicio);
router.get("/nosotros",crecienteController.nosotros);
router.get("/trayectoria",crecienteController.trayectoria);
router.get("/propuesta",crecienteController.propuesta);

module.exports = router;