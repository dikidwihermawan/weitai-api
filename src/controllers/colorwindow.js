const { validationResult } = require("express-validator");
const ColorWindow = require("../models/colorwindow");
const SendColorWindow = require("../models/sendcolorwindow");

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

exports.getSendColorWindow = (req, res, next) => {
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

exports.createSendColorWindow = async (req, res, next) => {
  const recipient_customer = req.body.customer;
  const recipient_name = req.body.receiver;
  const recipient_qty = req.body.qty;
  const recipient_send = req.body.date;
  const recipient_return = null;
  const recipient_information = req.body.information;
  const recipient_status = "PINJAM";

  // recipient_information

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  try {
    let dataColorWindow = await ColorWindow.findOne({ _id: req.params.id });
    let addData = new SendColorWindow({
      colorwindow: dataColorWindow._id,
      recipient_customer,
      recipient_name,
      recipient_qty,
      recipient_send,
      recipient_return,
      recipient_information,
      recipient_status,
    });
    dataColorWindow.updateOne({
      $set: {
        qty: 5,
      },
      $push: {
        send: {
          recipient_customer,
          recipient_name,
          recipient_qty,
          recipient_send,
          recipient_return,
          recipient_information,
          recipient_status,
        },
      },
    });
    addData.save();
    dataColorWindow.save();
    res.status(200).json({
      success: "Data has been created!",
      data: addData,
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

exports.getAllSendColorWindow = (req, res, next) => {
  SendColorWindow.find()
    .populate("colorwindow")
    .then((result) => {
      res.json({
        success: "Data has been success",
        data: result,
      });
    })
    .catch((err) => console.log(`err: ${err}`));
};
