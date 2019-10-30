const express = require('express');
const HttpStatusCodes = require('http-status-codes');
const Device = require('../models/device.model');

const route = express.Router();

route.get('/devices/:id', async (req, res, next) => {
  try {
    const device = await Device.getById(req.params.id);
    if (device) {
      res.send(device);
    } else {
      res.sendStatus(HttpStatusCodes.NOT_FOUND);
    }
  } catch (error) {
    res.sendStatus(HttpStatusCodes.INTERNAL_SERVER_ERROR);
  }
});

route.get('/devices', async (req, res, next) => {
  try {
    const devices = await Device.getAll();
    res.send(devices);
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
});

route.post('/devices', async (req, res, next) => {
  try {
    await Device.create(req.body);
    res.sendStatus(HttpStatusCodes.CREATED);
  } catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).send(error);
  }
});

route.put('/devices/:id', async (req, res, next) => {
  try {
    req.body._id = req.params.id;
    await Device.update(req.body);
    res.sendStatus(HttpStatusCodes.OK);
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
});

route.delete('/devices/:id', async (req, res, next) => {
  try {
    await Device.delete(req.params.id);
    res.sendStatus(HttpStatusCodes.OK);
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
});

module.exports = route;