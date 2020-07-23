const dotenv = require('dotenv');

module.exports = dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
