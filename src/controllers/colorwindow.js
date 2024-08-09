const { validationResult } = require("express-validator");
const ColorWindow = require("../models/colorwindow");
const ForwardedColorWindow = require("../models/forwardedcolorwindow");

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
  const color = req.body.color;
  const type = req.body.type;
  const date = req.body.date;
  const qty = req.body.qty;
  const data = { customer, material, color, type, date, qty };

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
    .catch((err) =>
      res.json({
        error: "Data not found",
        data: err,
      })
    );
};

exports.updateColorWindow = (req, res, next) => {
  const customer = req.body.customer;
  const material = req.body.material;
  const color = req.body.color;
  const type = req.body.type;
  const date = req.body.date;
  const qty = req.body.qty;
  const data = { customer, material, color, type, date, qty };
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
  ColorWindow.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json({
        success: "Data has been deleted!",
      });
    })
    .catch(() =>
      res.json({
        error: "Data can't deleted",
      })
    );
};

exports.getForwardedColorWindow = (req, res, next) => {
  ColorWindow.findOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        success: true,
        data: {
          id: result._id,
          customer: result.customer,
          material: result.material,
          color: result.color,
          qty: result.qty,
        },
      });
    })
    .catch((err) =>
      res.json({
        error: "Data not found",
        data: err,
      })
    );
};

exports.createForwardedColorWindow = (req, res, next) => {
  const recipient_customer = req.body.customer;
  const recipient_name = req.body.receiver;
  const recipient_qty = req.body.qty;
  const recipient_send = req.body.date;
  const recipient_return = null;
  const recipient_information = req.body.information;

  // recipient_information

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  try {
    const dataColorWindow = ColorWindow.findOne({ _id: req.params.id });

    let addData = new ForwardedColorWindow({
      colorwindow: dataColorWindow._id,
      recipient_customer,
      recipient_name,
      recipient_qty,
      recipient_send,
      recipient_return,
      recipient_information,
    });
    // addData.save();
    // dataColorWindow.forwarded.push(addData);
    // dataColorWindow.save();
    res.json({
      success: "Data has been created!",
      data: dataColorWindow,
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

exports.getAllForwardedColorWindow = (req, res, next) => {
  ForwardedColorWindow.find()
    .then((result) => {
      res.json({
        success: "Data has been suc",
        data: result,
      });
    })
    .catch((err) => console.log(`err: ${err}`));
};
