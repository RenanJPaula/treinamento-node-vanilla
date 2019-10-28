const express = require('express');
const HttpStatusCodes = require('http-status-codes');
const Device = require('../models/device.model');

const route = express.Router();

route.get('/devices/:id', (req, res, next) => {
  res.send(Device.getById(req.params.id));
});

route.get('/devices', (req, res, next) => {
  res.send(Device.getAll());
});

route.post('/devices', (req, res, next) => {
  Device.create(req.body);
  res.sendStatus(HttpStatusCodes.CREATED);
});

route.put('/devices/:id', (req, res, next) => {
  if (!Device.getById(req.params.id)) {
    res.send(HttpStatusCodes.NOT_FOUND);
  } else {
    req.body.id = req.params.id;
    Device.update(req.body);
    res.sendStatus(HttpStatusCodes.OK);
  }
});

route.delete('/devices/:id', (req, res, next) => {
  Device.delete(req.params.id);
  res.sendStatus(HttpStatusCodes.OK);
});

module.exports = route;