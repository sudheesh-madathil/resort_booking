const  mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    hotel_name:{
        type:String,
        required:true,
       
    },

    room_rent:{
        type:String,
        required:true,
    },
    place:{
        type:String,
        required:true,
     
      
    },
    contact:{
        type:Number,
        required:true,
        
    },

   

})
module.exports = mongoose.model('hotel',Schema)