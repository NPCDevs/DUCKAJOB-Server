const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    wallet: {
      type: String,
      required: [true],
      unique: true,
    },
    telegramId: {
      type: String,
      required: [true],
      unique: true,
    },
    username: {
      type: String,
      required: [true],
    },
    bio: {
      type: String,
      required: [true],
    },
    links: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);
