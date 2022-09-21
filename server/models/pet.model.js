const mongoose = require('mongoose');

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      minLength: [3, 'Name must be at least three characters.'],
    },
    type: {
      type: String,
      required: [true, 'Type is required.'],
      minLength: [3, 'Type must be at least three characters.'],
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
      minLength: [3, 'Description must be at least three characters.'],
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
