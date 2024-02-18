let secureApi =(req,res,next)=>{
   console.log("kiree", req.headers);
   if(req.headers.authorization == "3/7r8Ej/l5&'"){
    next();
   }
   else{
    res.send({error:"invalid"})
   }

};


module.exports = secureApi;