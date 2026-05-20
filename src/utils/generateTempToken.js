const crypto = require('crypto');

function generateTempToken(size = 32) {
  return crypto.randomBytes(size).toString('hex');
}

module.exports = generateTempToken;