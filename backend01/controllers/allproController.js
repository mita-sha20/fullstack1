

const Product = require("../model/productModel");

let allproController = async(req,res)=>{
   let data = await Product.find();

   res.send(data);
}

module.exports = allproController;