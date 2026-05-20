const generateTempToken = require('../utils/generateTempToken');
const hashToken = require('../utils/hashToken');
const tokenRepository = require('../repositories/token.repository');

async function generateTemporaryToken(email) {
  if (!email) {
    throw new Error('Email é obrigatório');
  }

  const rawToken = generateTempToken();
  const tokenHash = hashToken(rawToken);

  const expiration = process.env.TOKEN_EXPIRATION_MINUTES || 15;
  const expiresAt = new Date(Date.now() + expiration * 60 * 1000);

  await tokenRepository.saveToken({
    email,
    tokenHash,
    expiresAt,
  });

  return {
    email,
    token: rawToken,
    expiresAt,
  };
}

async function validateTemporaryToken(token) {
  if (!token) {
    throw new Error('Token não fornecido');
  }

  const tokenHashValue = hashToken(token);

  const storedToken = await tokenRepository.findValidToken(tokenHashValue);

  if (!storedToken) {
    throw new Error('Token inválido ou expirado');
  }

  await tokenRepository.markTokenAsUsed(storedToken.id);

  return {
    email: storedToken.email,
  };
}

module.exports = {
  generateTemporaryToken,
  validateTemporaryToken,
};