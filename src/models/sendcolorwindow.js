const mongoose = require("mongoose");

const SendColorWindow = mongoose.Schema(
  {
    colorwindow: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ColorWindow",
    },
    recipient_customer: {
      type: String,
      required: true,
    },
    recipient_name: {
      type: String,
      required: true,
    },
    recipient_qty: {
      type: Number,
      required: true,
    },
    recipient_date: {
      type: String,
      required: true,
    },
    recipient_return: {
      type: String,
    },
    recipient_information: {
      type: String,
      required: true,
    },
    recipient_status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Send", SendColorWindow);
