const HttpStatusCodes = require('http-status-codes');
const User = require('../models/user.model');

module.exports = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.sendStatus(HttpStatusCodes.UNAUTHORIZED);
  }

  const credentialsSplitedType = authorization.split(' ');
  const authorizationType = credentialsSplitedType.shift();
  const token = credentialsSplitedType.shift();

  if (authorizationType !== 'Basic') {
    return res.sendStatus(HttpStatusCodes.UNAUTHORIZED);
  }

  const credentials = Buffer.from(token, 'base64').toString().split(':');
  const user = await User.authenticate(credentials.shift(), credentials.shift());

  if (!user) {
    return res.sendStatus(HttpStatusCodes.UNAUTHORIZED);
  }

  req.user = user;
  next();
}
