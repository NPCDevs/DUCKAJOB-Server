const mongoose = require('mongoose');

const contractSchema = mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: [true],
    },

    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true],
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true],
    },

    contract_address: {
      type: String,
      required: [true],
      // unique: true,
    },
    contractLink: {
      type: String,
    },
    seller_wallet: {
      type: String,
      required: [true],
    },
    buyer_wallet: {
      type: String,
      required: [true],
    },
    disputeResolver_wallet: {
      type: String,
      required: [true],
    },
    contract_price: {
      type: Number,
      required: [true],
    },
    funds: {
      // -----> Need to be Integer if possible
      type: Number,
      required: [false],
    },
    contract_status: {
      // -----> Need to be dictionary (or later parsed into one) if possible. E.g {0: "Unfunded", 1: "Funded"...}
      type: Number,
      required: [true],
    },
    deployed_time: {
      // -----> Actual value is unix timestamp (number of seconds)
      type: Date,
      required: [false],
    },
    deposit_time: {
      // -----> Actual value is unix timestamp (number of seconds)
      type: Date,
      required: [false],
    },
    delivery_time: {
      // -----> Actual value is unix timestamp (number of seconds)
      type: Date,
      required: [false],
    },
    max_time_to_deposit: {
      // -----> Actual value is unix timestamp (number of seconds)
      type: Date,
      required: [false],
    },
    max_time_to_complete: {
      // -----> Actual value is unix timestamp (number of seconds)
      type: Date,
      required: [false],
    },
    max_time_to_review: {
      // -----> Actual value is unix timestamp (number of seconds)
      type: Date,
      required: [false],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Contract', contractSchema);
