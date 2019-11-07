const express = require('express');
const bodyParser = require('body-parser');
const authenticationMiddleware = require('./middlewares/authentication.middleware')
const fs = require('fs');
const app = express();

require('./db');
require('./swagger')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas Públicas
app.use(authenticationMiddleware);

// Rotas Privadas
fs.readdirSync('./routes').forEach(file => {
  app.use(require(`./routes/${file}`));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
