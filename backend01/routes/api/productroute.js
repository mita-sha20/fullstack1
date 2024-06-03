const express = require('express');
const route = express.Router()
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log(file)  
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + "-" + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  const categorycontroller = require('../../controllers/categoryController');
  const addsubcatcontroller = require('../../controllers/addsubcatController');
  const viewsubcatController = require('../../controllers/viewsubcatController');
  const viewcatController = require('../../controllers/viewcatController');
  const productController = require('../../controllers/productController')

  const verifytoken = require('../../middleware/verifytoken')
  const secureApi = require('../../middleware/secureApi');
  const allproController = require('../../controllers/allproController');
  const approveCategory = require('../../controllers/approveCategory');
  const deleteCategory = require('../../controllers/deleteCategory');
  const editCategory = require('../../controllers/editCategory')
  const approvesubcategory = require('../../controllers/approvesubcategory')
  const deletesubcategory = require('../../controllers/deletesubcategory');
  const editsubcategory = require('../../controllers/editsubcategory');

route.post('/createcategory' , categorycontroller);
route.post('/approvecategory' , approveCategory);
route.post('/approvesubcategory' , approvesubcategory);
route.post('/createsubcategory' , addsubcatcontroller);
route.post('/createproduct' ,upload.single('avatar'), productController);
route.delete('/deletecategory/:id' , deleteCategory);
route.delete('/deletesubcategory/:id' , deletesubcategory);
route.post('/editcategory' , editCategory);
route.post('/editsubcategory' , editsubcategory);


route.get("/allcat", viewcatController)
route.get("/allsubcat", viewsubcatController)
route.get("/allpro", allproController)


module.exports = route;