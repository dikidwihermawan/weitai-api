const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const colorWindowController = require("../controllers/colorwindow");

router.get("/", colorWindowController.getAllColorWindow);
router.post(
  "/local/create",
  [
    body("customer").notEmpty().withMessage("Customer tidak boleh kosong"),
    body("material").notEmpty().withMessage("Material tidak boleh kosong"),
    body("color").notEmpty().withMessage("Color tidak boleh kosong"),
    body("type").notEmpty().withMessage("Jenis tidak boleh kosong"),
    body("date").notEmpty().withMessage("Date tidak boleh kosong"),
    body("qty")
      .isNumeric()
      .withMessage("Quantity harus angka")
      .notEmpty()
      .withMessage("Quantity tidak boleh kosong"),
  ],
  colorWindowController.createColorWindow
);
router.get("/local/edit/:id", colorWindowController.editColorWindow);
router.put(
  "/local/update/:id",
  [
    body("customer").notEmpty().withMessage("Customer tidak boleh kosong"),
    body("material").notEmpty().withMessage("Material tidak boleh kosong"),
    body("color").notEmpty().withMessage("Color tidak boleh kosong"),
    body("type").notEmpty().withMessage("Jenis tidak boleh kosong"),
    body("date").notEmpty().withMessage("Date tidak boleh kosong"),
    body("qty")
      .isNumeric()
      .withMessage("Quantity harus angka")
      .notEmpty()
      .withMessage("Quantity tidak boleh kosong"),
  ],
  colorWindowController.updateColorWindow
);
router.get("/local/forward/:id", colorWindowController.getForwardedColorWindow);
router.post(
  "/local/forward/:id",
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
  colorWindowController.createForwardedColorWindow
);
router.delete("/local/delete/:id", colorWindowController.deleteColorWindow);

router.get("/forwarded", colorWindowController.getAllForwardedColorWindow);

module.exports = router;
