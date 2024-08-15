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
router.get("/local/send/:id", colorWindowController.getSendColorWindow);
router.post(
  "/local/send/:id",
  [
    body("recipient_customer")
      .notEmpty()
      .withMessage("Customer tidak boleh kosong"),
    body("recipient_name").notEmpty().withMessage("Nama tidak boleh kosong"),
    body("recipient_qty")
      .isNumeric()
      .withMessage("Quantity harus angka")
      .notEmpty()
      .withMessage("Quantity tidak boleh kosong"),
    body("recipient_information")
      .notEmpty()
      .withMessage("Informasi tidak boleh kosong"),
    body("recipient_date").notEmpty().withMessage("Tanggal tidak boleh kosong"),
    body("recipient_status")
      .notEmpty()
      .withMessage("Status tidak boleh kosong"),
  ],
  colorWindowController.createSendColorWindow
);
router.delete("/local/delete/:id", colorWindowController.deleteColorWindow);

router.get("/send", colorWindowController.getAllSendColorWindow);
router.post(
  "/send/confirm/:id",
  [body("returned").notEmpty().withMessage("Tanggal tidak boleh kosong")],
  colorWindowController.confirmSendColorWindow
);

module.exports = router;
