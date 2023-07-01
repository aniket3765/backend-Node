const express = require('express');
const path = require('path')
const router = express.Router();
const loginController = require('../controller/login')
var fs = require('fs');

router.get('/login', loginController.getLogin);

router.post('/product',loginController.getProduct)


module.exports = router;