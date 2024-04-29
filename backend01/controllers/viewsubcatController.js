const SubCategory = require("../model/subcategoryModel")
const Category = require("../model/categoryModel")

let viewsubcatController = async(req,res)=>{
   let data = await SubCategory.find().populate("categoryId");

   res.send(data);
}

module.exports = viewsubcatController;