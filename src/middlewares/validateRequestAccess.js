function validateRequestAccess(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return next({
      statusCode: 400,
      message: 'Email é obrigatório',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return next({
      statusCode: 400,
      message: 'Email inválido',
    });
  }

  next();
}

module.exports = validateRequestAccess;