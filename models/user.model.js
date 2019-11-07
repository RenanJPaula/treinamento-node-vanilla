const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');

const UserModel = mongoose.model('User', userSchema, 'users');

class User {

  static authenticate(username, password) {
    const query = { username, password };
    return UserModel.findOne(query).populate({
      path: 'spots',
      model: 'Spot',
      populate: {
        path: 'devices',
        model: 'Device'
      }
    }).lean();
  }

  static async getDeviceOfUser(userId, deviceId) {
    const query = { _id: userId };
    const user = await UserModel.findOne(query).populate({
      path: 'spots',
      model: 'Spot',
      populate: {
        path: 'devices',
        model: 'Device',
        match: { _id: deviceId }
      }
    }).lean();

    const spot = user.spots.pop();
    if (spot) {
      const device = spot.devices.pop();
      return device;
    }

    return null;
  }

}

module.exports = User;

