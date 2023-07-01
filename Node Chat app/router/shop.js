const express = require('express');
const fs = require('fs');
const router = express.Router();
var msg='';
const path  = require('path')
const loginController = require('../controller/login');

router.use('/add', loginController.getAdd);

router.use('/msg', loginController.getMsg);

router.use('/contact', loginController.getContact)

router.use('/success', loginController.getSuccess)

router.use('',loginController.getError)

module.exports = router;