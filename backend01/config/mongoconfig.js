const mongoose = require('mongoose');


let mongoconfig=()=>{
    mongoose.connect('mongodb+srv://mernian:J$z5njKez7!J-h5@cluster0.ojwjkfk.mongodb.net/new-mernian?retryWrites=true&w=majority')
  .then(() => console.log('Database Connected!'));
}


module.exports=mongoconfig;