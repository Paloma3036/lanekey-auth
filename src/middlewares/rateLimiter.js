const rateLimit = require('express-rate-limit');

const windowMs = (Number(process.env.RATE_LIMIT_WINDOW) || 15) * 60 * 1000;
const maxRequests = Number(process.env.RATE_LIMIT_MAX) || 10;

const rateLimiter = rateLimit({
  windowMs,
  max: maxRequests,
  message: {
    error: 'Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiter;