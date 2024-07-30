const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const colorWindowController = require("../controllers/colorwindow");

router.get("/", colorWindowController.getAllColorWindow);
router.post(
  "/create",
  [
    body("material").notEmpty().withMessage("Material tidak boleh kosong"),
    body("code").notEmpty().withMessage("Code tidak boleh kosong"),
    body("color").notEmpty().withMessage("Color tidak boleh kosong"),
    body("date").notEmpty().withMessage("Date tidak boleh kosong"),
    body("qty")
      .notEmpty()
      .withMessage("Quantity tidak boleh kosong")
      .isInt()
      .isNumeric("Quantity harus angka"),
    body("customer").notEmpty().withMessage("Customer tidak boleh kosong"),
  ],
  colorWindowController.createColorWindow
);

module.exports = router;
