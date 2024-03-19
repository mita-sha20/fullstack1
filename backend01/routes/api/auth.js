const express = require('express')
const route = express.Router()
const registrationcontroller = require("../../controllers/registrationcontroller")
const loginController = require("../../controllers/loginController")
const otpController = require("../../controllers/otpController")
const secureApi = require("../../middleware/secureApi")
const linkController = require('../../controllers/linkController')

route.post('/registration' , registrationcontroller);
route.post('/login' , loginController);
route.post('/otpVerification', otpController);
route.post('/linkverification', linkController);



module.exports = route;