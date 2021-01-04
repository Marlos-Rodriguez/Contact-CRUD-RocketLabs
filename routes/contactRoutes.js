const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const { check } = require("express-validator");

//Create new Contact
router.post("/", contactController.craeteContact);

router.get("/all", contactController.getAllContact);

router.delete("/:id", contactController.deleteContact);

module.exports = router;
