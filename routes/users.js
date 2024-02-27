const express = require('express');
const router = express.Router();
// const { requiresAuth } = require('express-openid-connect');

const userController = require('../controllers/users')
// const validation = require('../middleware/validate')

router.get('/', userController.getAll);

module.exports = router;