const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  deviceid: { type: String, required: true },
  type: { type: String, enum: ['LAMP'], required: true }
});

module.exports = schema;