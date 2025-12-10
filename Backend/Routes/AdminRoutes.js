const express = require('express');
const { AdminLogin } = require('../controller/AdminLoginController');

const AdminRouter = express.Router();


AdminRouter.post('/login', AdminLogin);


module.exports = AdminRouter;
