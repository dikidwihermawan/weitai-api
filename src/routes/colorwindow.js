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
      .isNumeric()
      .withMessage("Quantity harus angka")
      .notEmpty()
      .withMessage("Quantity tidak boleh kosong"),
    body("customer").notEmpty().withMessage("Customer tidak boleh kosong"),
  ],
  colorWindowController.createColorWindow
);
router.get("/edit/:id", colorWindowController.editColorWindow);
router.put(
  "/update/:id",
  [
    body("material").notEmpty().withMessage("Material tidak boleh kosong"),
    body("code").notEmpty().withMessage("Code tidak boleh kosong"),
    body("color").notEmpty().withMessage("Color tidak boleh kosong"),
    body("date").notEmpty().withMessage("Tanggal tidak boleh kosong"),
    body("qty")
      .isNumeric()
      .withMessage("Quantity harus angka")
      .notEmpty()
      .withMessage("Quantity tidak boleh kosong"),
    body("customer").notEmpty().withMessage("Customer tidak boleh kosong"),
  ],
  colorWindowController.updateColorWindow
);
router.delete("/delete/:id", colorWindowController.deleteColorWindow);
router.get("/forward", colorWindowController.getAllForwardedColorWindow);
router.get("/forward/:id", colorWindowController.forwardToColorWindow);
router.post(
  "/forward/:id",
  [
    body("customer").notEmpty().withMessage("Customer tidak boleh kosong"),
    body("receiver").notEmpty().withMessage("Receiver tidak boleh kosong"),
    body("qty")
      .isNumeric()
      .withMessage("Quantity harus angka")
      .notEmpty()
      .withMessage("Quantity tidak boleh kosong"),
    body("information").notEmpty().withMessage("Informasi tidak boleh kosong"),
    body("date").notEmpty().withMessage("Tanggal tidak boleh kosong"),
  ],
  colorWindowController.forwardToColorWindow
);

module.exports = router;
