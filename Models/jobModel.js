const mongoose = require('mongoose');

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    description: {
      type: String,
      required: [true],
    },
    budget: {
      type: Number,
      required: [true],
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Tag',
      required: [true],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Job', jobSchema);
