const mongoose = require('mongoose');

const contractSchema = mongoose.Schema(
    {
        contract_address: {
            type: String,
            required: [true],
            unique: true,
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
        funds: { // -----> Need to be Integer if possible 
          type: Number,
          required: [false],
        },
        contract_status: { // -----> Need to be dictionary (or later parsed into one) if possible. E.g {0: "Unfunded", 1: "Funded"...}
          type: Number,
          required: [true],
        },
        deployed_time: { // -----> Actual value is unix timestamp (number of seconds)
          type: Date,
          required: [false],
        },
        deposit_time: { // -----> Actual value is unix timestamp (number of seconds)
          type: Date,
          required: [false],
        },
        delivery_time: { // -----> Actual value is unix timestamp (number of seconds)
          type: Date,
          required: [false],
        },
        max_time_to_deposit: { // -----> Actual value is unix timestamp (number of seconds)
          type: Date,
          required: [false],
        },
        max_time_to_complete: { // -----> Actual value is unix timestamp (number of seconds)
          type: Date,
          required: [false],
        },
        max_time_to_review: { // -----> Actual value is unix timestamp (number of seconds)
          type: Date,
          required: [false],
        },
        
    },
    {
      timestamps: true,
    },
  );
  
  module.exports = mongoose.model('Contract', contractSchema);