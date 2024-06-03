const SubCategory = require("../model/subcategoryModel")


let editsubcategory = async (req , res) => {
  
   const { name , oldname } = req.body;
   console.log(oldname)

   const existingCategory = await SubCategory.find({ name: name });
   console.log(existingCategory);

   if(existingCategory.length > 0){
   res.send({error:"category already exists"});
   }else{
    let a = await SubCategory.findOneAndUpdate(
        {name: oldname},
        {
         name: name  
        },
        { new : true }
    )
  
    res.send({success:"category updated"})
   }

 
};

module.exports = editsubcategory;