const mongoose = require("mongoose");

const ColorWindow = mongoose.Schema(
  {
    material: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    csdate: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("color_windows", ColorWindow);
