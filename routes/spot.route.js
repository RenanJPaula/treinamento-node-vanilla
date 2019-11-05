const express = require('express');
const HttpStatusCodes = require('http-status-codes');
const Spot = require('../models/spot.model');
const route = express.Router();

route.get('/spots/:id', async (req, res, next) => {
  try {
    const spot = await Spot.getById(req.params.id);
    if (spot) {
      res.send(spot);
    } else {
      res.sendStatus(HttpStatusCodes.NOT_FOUND);
    }
  } catch (error) {
    res.sendStatus(HttpStatusCodes.INTERNAL_SERVER_ERROR);
  }
});

route.get('/spots', async (req, res, next) => {
  try {
    const spots = await Spot.getAll();
    res.send(spots);
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
});

route.post('/spots', async (req, res, next) => {
  try {
    await Spot.create(req.body);
    const responseBody = { message: 'Registro inserido com sucesso!' };
    res.status(HttpStatusCodes.CREATED).send(responseBody);
  } catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).send(error);
  }
});

route.put('/spots/:id', async (req, res, next) => {
  try {
    req.body._id = req.params.id;
    await Spot.update(req.body);
    const responseBody = { message: 'Registro atualizado com sucesso!' };
    res.status(HttpStatusCodes.OK).send(responseBody);
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
});

route.delete('/spots/:id', async (req, res, next) => {
  try {
    await Spot.delete(req.params.id);
    const responseBody = { message: 'Registro removido com sucesso!' };
    res.status(HttpStatusCodes.OK).send(responseBody);
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
});

module.exports = route;