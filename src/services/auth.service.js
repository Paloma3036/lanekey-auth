const crypto = require('crypto');
const tokenRepository = require('../repositories/token.repository');

async function generateTemporaryToken(email) {
  const rawToken = crypto.randomBytes(32).toString('hex');
  const tokenHash = crypto
    .createHash('sha256')
    .update(rawToken)
    .digest('hex');

  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 min

  await tokenRepository.saveToken({
    email,
    tokenHash,
    expiresAt,
  });

  return {
    message: 'Token temporário gerado',
    email,
    token: rawToken,
    expiresAt,
  };
}

async function validateTemporaryToken(token) {
  const tokenHash = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const storedToken = await tokenRepository.findValidToken(tokenHash);

  if (!storedToken) {
    throw new Error('Token inválido');
  }

  await tokenRepository.markTokenAsUsed(storedToken.id);

  return {
    message: 'Token válido',
    email: storedToken.email,
  };
}

module.exports = {
  generateTemporaryToken,
  validateTemporaryToken,
};

