const express = require("express");
const {questionGeneratorController} = require("../controller/questionGeneratorController");
const router = express.Router();

// Get question paper
router.get("/", questionGeneratorController);

module.exports = router;
