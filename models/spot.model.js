const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  devices: [{ type: mongoose.Schema.ObjectId, ref: 'Device', default: [] }]
});

const SpotModel = mongoose.model('Spot', spotSchema, 'spots');

class Spot {
  static create(device) {
    return SpotModel.create(device);
  }

  static getById(_id) {
    return SpotModel.findOne({ _id }).lean();
  }

  static update(device) {
    return SpotModel.update({ _id: device._id }, device);
  }

  static delete(_id) {
    return SpotModel.deleteOne({ _id });
  }

  static getAll() {
    return SpotModel.find().lean();
  }
}

module.exports = Spot;

