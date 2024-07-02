const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const colorWindowController = require("../controllers/colorwindow");

router.get(
  "/",
  [body("material").isLength("20")],
  colorWindowController.getAllColorWindow
);
router.post("/", colorWindowController.createColorWindow);
router.get("/search/:colorwindow", colorWindowController.createColorWindow);

module.exports = router;
