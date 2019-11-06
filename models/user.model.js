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

}

module.exports = User;

