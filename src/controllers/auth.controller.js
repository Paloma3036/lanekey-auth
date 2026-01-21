const authService = require('../services/auth.service');

async function requestAccess(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email é obrigatório' });
    }

    const token = await authService.generateTemporaryToken(email);

    return res.status(201).json({
      message: 'Token gerado com sucesso',
      token,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao gerar token' });
  }
}

async function validateToken(req, res) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token é obrigatório' });
    }

    const result = await authService.validateTemporaryToken(token);

    return res.status(200).json({
      message: 'Token válido',
      email: result.email,
    });
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
}

module.exports = {
  requestAccess,
  validateToken,
};

