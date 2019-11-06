const swaggerGenerator = require('express-swagger-generator');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      description: 'Treinamento Nodejs Vanilla',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    produces: [
      "application/json"
    ],
    schemes: ['http']
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/**/*.js'] //Path to the API handle folder
}

function configureSwagger(app) {
  const expressSwagger = swaggerGenerator(app);
  expressSwagger(swaggerOptions)
}

module.exports = configureSwagger;