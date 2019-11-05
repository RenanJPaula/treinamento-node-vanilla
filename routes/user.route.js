const express = require('express');
const route = express.Router();

route.get('/user/profile', async (req, res, next) => {
  const user = JSON.parse(JSON.stringify(req.user));
  delete user.password;
  res.send(user);
});

route.get('/user/devices', async (req, res, next) => {
  // const devices = await Device.getByIds(req.user.devices);
  res.send(req.user.devices);
});

module.exports = route;
