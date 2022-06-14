// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
const {register, login, profile, processRegister, processLogin} = require('../controllers/userController')
router
    .get('/login', login)
    .post('/login',loginValidator, processLogin)
    .get('/register',register)
    .post('/register',registerValidator, processRegister)
    .get('/profile', profile)

module.exports = router;
