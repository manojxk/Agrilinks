const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    marketID: {
      type: String,
      required: true,
    },
    marketName: {
      type: String,
      required: true,

    },
    cmdtyID: {
      type: String,
      required: true,
    },
    marketType: {
      type: String,
      required: true,
    },
    cmdtyName: {
      type: String,
      required: true,
    },
    priceUnit: {
      type: String,
      required: true,
    },
    convFctr: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
