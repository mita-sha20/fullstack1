const Category = require("../model/categoryModel")


let editCategory = async (req , res) => {
  
   const { name , oldname } = req.body;
   console.log(oldname)

   const existingCategory = await Category.find({ name: name });
   console.log(existingCategory);

   if(existingCategory.length > 0){
   res.send({error:"category already exists"});
   }else{
    let a = await Category.findOneAndUpdate(
        {name: oldname},
        {
         name: name  
        },
        { new : true }
    )
  
    res.send({success:"category updated"})
   }

 
};

module.exports = editCategory;