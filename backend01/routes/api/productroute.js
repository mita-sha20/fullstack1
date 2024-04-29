const express = require('express');
const categorycontroller = require('../../controllers/categoryController');
const addsubcatcontroller = require('../../controllers/addsubcatController');
const viewsubcatController = require('../../controllers/viewsubcatController');
const viewcatController = require('../../controllers/viewcatController');
const verifytoken = require('../../middleware/verifytoken')
const secureApi = require('../../middleware/secureApi')
const route = express.Router()

route.post('/createcategory' ,secureApi, verifytoken, categorycontroller);
route.post('/createsubcategory' , addsubcatcontroller);

route.get("/allcat", viewcatController)
route.get("/allsubcat", viewsubcatController)


module.exports = route;