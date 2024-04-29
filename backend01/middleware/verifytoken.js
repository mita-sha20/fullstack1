var jwt = require('jsonwebtoken');

const verifytoken =async(req,res,next)=>{
   const token = req.headers.token;

   if(!token){
    res.send("token required")
   } else{
    jwt.verify(token, 'shhhhh', function(err, decoded) {
        console.log(decoded) ;
        if(decoded){
            next()
        }else{
            res.send("valid token required")
        }
      });
   }
}

module.exports = verifytoken;