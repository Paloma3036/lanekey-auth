const crypto = require('crypto');

function generateTempToken() {
  return crypto.randomBytes(32).toString('hex');
}

module.exports = generateTempToken;

