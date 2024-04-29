const Category = require("../model/categoryModel")


let categorycontroller = async (req , res) => {
  
   const { name } = req.body;
   console.log(name.toLowerCase());

   let existingCategory = await Category.find({ name: name.toLowerCase().trim() });
   console.log(existingCategory);

   if(existingCategory.length > 0){
   res.send({error:"category already exists"});
   }else{
    let cat = new Category(
        {
         name: name.toLowerCase()   
        }
    )
    cat.save();
    res.send({success:"category created"})
   }

 
};

module.exports = categorycontroller;