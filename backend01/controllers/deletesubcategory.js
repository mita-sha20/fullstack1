const SubCategory = require("../model/subcategoryModel")


let deletesubcategory = async (req , res) => {
  
   console.log(req.params);

   await SubCategory.findByIdAndDelete(req.params.id);
   res.send("Delete");

};

module.exports = deletesubcategory;