const express = require('express');
const router = express.Router()
const guest = require('../model/guest _details')

router.post (`/`,(req,res)=>{
    const user = new guest({
     name:req.body.name,
     email:req.body.email,
     arrival_date:req.body.arrival_date,
     departure_date:req.body.departure_date,
     choose_room:req.body.choose_room,
     num_people:req.body.num_people,
     phone_number:req.body.phone_number,
     departure_time:req.body.departure_time
    })
    try{
   user.save().then(()=>{
     console.log(user);
   })
     res.send(user)
  }
  catch(erorr){
    console.log(erorr);
  }
   })
 
   module.exports = router; 