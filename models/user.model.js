const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 4, maxlength: 15, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 15 }
});

const UserModel = mongoose.model('User', userSchema, 'users');

class User {

  static authenticate(username, password) {
    const query = { username, password };
    return UserModel.findOne(query);
  }

}

module.exports = User;

