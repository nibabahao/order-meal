const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderInfoSchema = new Schema({
  orderNo: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  mealType: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  sickNo: {
    type: String,
    required: true
  },
  cartData: {
    type: [
      {
        name: {
          type: String,
          required: true
        },
        tid: {
          type: String,
          required: true
        },
        fid: {
          type: String,
          required: true
        },
        price: {
          type: String,
          required: true
        },
        quantity: {
          type: String,
          required: true
        }
      }
    ],
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  prePay: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  orderTime: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("OrderInfo", OrderInfoSchema);
