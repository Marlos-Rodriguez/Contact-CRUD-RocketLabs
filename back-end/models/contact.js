const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nickname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Contact", contactSchema);
