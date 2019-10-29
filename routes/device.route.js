const express = require('express');
const HttpStatusCodes = require('http-status-codes');
const Device = require('../models/device.model');

const route = express.Router();

route.get('/devices/:id', (req, res, next) => {
  Device.getById(req.params.id)
    .then((registro) => {
      res.send(registro);
    })
});

route.get('/devices', (req, res, next) => {
  Device.getAll()
    .then((lista) => {
      res.send(lista);
    });
});

route.post('/devices', (req, res, next) => {
  Device.create(req.body)
    .then(() => {
      res.sendStatus(HttpStatusCodes.CREATED);
    });
});

route.put('/devices/:id', (req, res, next) => {
  req.body._id = req.params.id;
  Device.update(req.body)
    .then(() => {
      res.sendStatus(HttpStatusCodes.OK);
    });
});

route.delete('/devices/:id', (req, res, next) => {
  Device.delete(req.params.id)
    .then(() => {
      res.sendStatus(HttpStatusCodes.OK);
    });
});

module.exports = route;