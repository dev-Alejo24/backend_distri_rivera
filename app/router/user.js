const express = require('express')
const router = express.Router();
const UserController = require('../controller/userController');

router.post('/', UserController.guardar);
router.get('/', UserController.listar);
router.get('/:id', UserController.listar);

module.exports = router;