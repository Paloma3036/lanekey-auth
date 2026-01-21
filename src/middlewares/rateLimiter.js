const rateLimit = require('express-rate-limit');

const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // 10 requisições por IP
  message: {
    error: 'Muitas tentativas. Tente novamente mais tarde.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = authRateLimiter;

