const Product = require("../model/productModel")


let productcontroller = async (req , res) => {
  
   const { name , description } = req.body;
   
//    console.log(`/uploads/${req.file.filename}`)
    let product = new Product(
        {
         name: name,
         description : description,
         image: `/uploads/${req.file.filename}`,
        }
    )
    product.save();
    res.send({success:"product created"})
   }


module.exports = productcontroller;