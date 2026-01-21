const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');
console.log('AUTH CONTROLLER:', authController);

/**
 * @swagger
 * /auth/request-access:
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
 *                 example: teste@lanekey.com
 *     responses:
 *       201:
 *         description: Token gerado com sucesso
 *       400:
 *         description: Email obrigatório
 */
router.post('/request-access', authController.requestAccess);

/**
 * @swagger
 * /auth/validate:
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
 *                 example: 9fa3c2...
 *     responses:
 *       200:
 *         description: Token válido
 *       400:
 *         description: Token inválido ou expirado
 */
router.post('/validate', authController.validateToken);

module.exports = router;

