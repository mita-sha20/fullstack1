const express = require('express')
const route = express.Router()
const registrationcontroller = require("../../controllers/registrationcontroller")
const secureApi = require("../../middleware/secureApi")

route.get('/registration', secureApi , registrationcontroller)

//mongodb+srv://mernian:J$z5njKez7!J-h5@cluster0.ojwjkfk.mongodb.net/new-mernian?retryWrites=true&w=majority
//new-mernian

module.exports = route;