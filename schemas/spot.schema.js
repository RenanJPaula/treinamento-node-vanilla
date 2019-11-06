const mongoose = require('mongoose');
const deviceSchema = require('./device.schema');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  devices: { type: [deviceSchema], ref: 'Device', default: [] }
});

module.exports = schema;