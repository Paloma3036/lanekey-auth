const authService = require('../services/auth.service');

async function requestAccess(req, res, next) {
  try {
    const { email } = req.body;

    const result = await authService.generateTemporaryToken(email);

    return res.status(201).json({
      message: 'Token gerado com sucesso',
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

async function validateToken(req, res, next) {
  try {
    const { token } = req.body;

    const result = await authService.validateTemporaryToken(token);

    return res.status(200).json({
      message: 'Token válido',
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  requestAccess,
  validateToken,
};