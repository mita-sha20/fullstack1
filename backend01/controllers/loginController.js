const User = require("../model/userModel")
const bcrypt = require('bcrypt');

let loginController = async(req,res)=>{
   const{ email,password } = req.body;
   
   let findUser = await User.findOne({ email : email });


   if(findUser){
    bcrypt.compare(password, findUser.password, function(err, result) {
        if(result){
           res.send({success:"Login Successful"})
        }else{
           res.send({error:"Credential not matched"})
        }
    });
   }else{
     res.send({error:"User not found"})
   }
   

}

module.exports = loginController;