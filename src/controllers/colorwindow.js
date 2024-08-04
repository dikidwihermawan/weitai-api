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
  const material = req.body.material;
  const code = req.body.code;
  const color = req.body.color;
  const date = req.body.date;
  const csdate = req.body.csdate;
  const qty = req.body.qty;
  const customer = req.body.customer;
  const data = { material, code, color, date, csdate, qty, customer };

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

exports.editColorWindow = (req, res, next) => {
  ColorWindow.findOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        success: true,
        data: result,
      });
    })
    .catch((err) => console.log(`err: ${err}`));
};

exports.updateColorWindow = (req, res, next) => {
  const material = req.body.material;
  const code = req.body.code;
  const color = req.body.color;
  const date = req.body.date;
  const csdate = req.body.csdate;
  const qty = req.body.qty;
  const customer = req.body.customer;
  const data = { material, code, color, date, csdate, qty, customer };
  const query = { _id: req.params.id };

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  if (data) {
    ColorWindow.findOneAndUpdate(query, data)
      .then((result) => {
        res.json({
          success: "Data has been updated",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          error: "Data can't edited",
          data: err,
        });
      });
  }
};

exports.deleteColorWindow = (req, res, next) => {
  ColorWindow.findOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        success: true,
        data: result,
      });
    })
    .catch((err) => console.log(`err: ${err}`));
};
