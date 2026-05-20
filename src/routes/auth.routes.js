const express = require('express');

const router = express.Router();

const {
  requestAccess,
  validateToken,
} = require('../controllers/auth.controller');

const rateLimiter = require('../middlewares/rateLimiter');
const validateRequestAccess = require('../middlewares/validateRequestAccess');

/**
 * @swagger
 * /auth/token:
 *   post:
 *     summary: Gera um token temporário de acesso
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: teste@email.com
 *     responses:
 *       201:
 *         description: Token gerado com sucesso
 *       400:
 *         description: Email inválido
 */
router.post('/token', rateLimiter, validateRequestAccess, requestAccess);

/**
 * @swagger
 * /auth/token/validate:
 *   post:
 *     summary: Valida um token temporário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 example: abc123...
 *     responses:
 *       200:
 *         description: Token válido
 *       400:
 *         description: Token inválido
 */
router.post('/token/validate', rateLimiter, validateToken);

module.exports = router;