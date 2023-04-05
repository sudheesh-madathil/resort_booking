const  mongoose = require('mongoose')
const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },
    arrival_date:{
        type:String,
        required:true,
      
    },
    departure_date:{
        type:String,
        required:true,
    },

    departure_time:{
        type:String,
        required:true,
    },
    choose_room:{
        type:String,
        required:true,
    
    },
    num_people:{
        type:String,
        required:true,
    },
    phone_number:{
        type:String,
        required:true,
        miniLength:8   
    }

})
module.exports = mongoose.model('guest',Schema)