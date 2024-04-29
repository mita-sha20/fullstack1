const SubCategory = require("../model/subcategoryModel")


let addsubcatcontroller = async (req , res) => {
  
   const { name , categoryId } = req.body;
   console.log(name.toLowerCase());

   let existingCategory = await SubCategory.find({ name: name.toLowerCase().trim() });
   console.log(existingCategory);

   if(existingCategory.length > 0){
   res.send({error:"Subcategory already exists"});
   }else{
    let cat = new SubCategory(
        {
         name: name.toLowerCase(),
         categoryId : categoryId
        }
    )
    cat.save();
    res.send({success:"subcategory is created"})
   }

 
};

module.exports = addsubcatcontroller;