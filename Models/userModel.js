const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    wallet: {
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
    skills: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Tag',
      required: [true],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);
