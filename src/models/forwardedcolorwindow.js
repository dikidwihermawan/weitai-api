const mongoose = require("mongoose");

const ForwardedColorWindow = mongoose.Schema(
  {
    customer_id: {
      type: String,
      required: true,
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
      type: String,
      required: true,
    },
    recipient_send: {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "forwarded_color_windows",
  ForwardedColorWindow
);
