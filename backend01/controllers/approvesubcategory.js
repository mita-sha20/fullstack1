const SubCategory = require("../model/subcategoryModel")


let approvesubcategory = async (req , res) => {
  
   const { id , status } = req.body;

   console.log(id, status)
   
   let updateCat = await SubCategory.findOneAndUpdate({_id:id},
   { status: status == "waiting" ? "approve" : "waiting"},
   { new : true }

   )

  res.send("Updated")
};

module.exports = approvesubcategory;