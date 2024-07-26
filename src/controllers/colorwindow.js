const { validationResult } = require("express-validator");
const ColorWindow = require("../models/colorwindow");

exports.getAllColorWindow = (req, res, next) => {
  ColorWindow.find()
    .then((result) => {
      res.json({
        success: true,
        data: result,
      });
    })
    .catch((err) => console.log(`err: ${err}`));
};

exports.createColorWindow = (req, res, next) => {
  const customer = req.body.customer;
  const material = req.body.material;
  const code = req.body.code;
  const color = req.body.color;
  const date = req.body.date;
  const csdate = req.body.csdate;
  const qty = req.body.qty;
  const data = { customer, material, code, color, date, csdate, qty };

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  if (data) {
    ColorWindow.create(data)
      .then((result) => {
        res.json({
          success: "Data has been created",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          error: "Data can't created",
          data: err,
        });
      });
  }
};
