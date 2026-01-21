function validateRequestAccess(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: 'Email é obrigatório',
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      error: 'Email inválido',
    });
  }

  // se tudo estiver ok, segue o fluxo
  next();
}

module.exports = validateRequestAccess;

