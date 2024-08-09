const mongoose = require("mongoose");

const ColorWindow = mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    forwarded: [{ type: mongoose.Schema.Types.ObjectId, ref: "Forwarded" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ColorWindow", ColorWindow);
