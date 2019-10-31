const express = require('express');
const bodyParser = require('body-parser');
const deviceRoute = require('./routes/device.route');
const authenticationMiddleware = require('./middlewares/authentication.middleware')
const app = express();
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas Públicas
// app.use(loginRoute);

app.use(authenticationMiddleware);

// Rotas Privadas
app.use(deviceRoute);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
