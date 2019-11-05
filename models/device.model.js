const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const DeviceModel = mongoose.model('Device', deviceSchema, 'devices');

class Device {

  static create(device) {
    return DeviceModel.create(device);
  }

  static getById(_id) {
    return DeviceModel.findOne({ _id }).lean();
  }

  static update(device) {
    return DeviceModel.update({ _id: device._id }, device);
  }

  static delete(_id) {
    return DeviceModel.deleteOne({ _id });
  }

  static getAll() {
    return DeviceModel.find().lean();
  }

  static getByIds(ids) {
    const query = { _id: { $in: ids } };
    return DeviceModel.find(query).lean();
  }

}

module.exports = Device;
