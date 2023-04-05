const express = require('express');
const router = express.Router()
const hotel = require('../model/hotel');


//__________add hotel_____________________________


router.post (`/`,async(req,res)=>{
    const adduser = await new hotel({
     hotel_name:req.body.hotel_name,
     room_rent:req.body.room_rent,
     place:req.body.place,
     contact:req.body.contact
 
    })
    try{
   adduser.save().then(()=>{
     console.log(adduser);
   })
  return  res.send(adduser);
}
catch(erorr){
    console.log(erorr);
}
   })


   //_____________delete hotel_________________________

   router.delete('/:id',(req,res)=>{
    hotel.findByIdAndRemove(req.params.id).then(user=>{

try{


         return res.json({status: 'not  deleted!!!!'}) 
}  
   
catch(erorr){
    console.log(erorr);
   }  
    })
   })

//________________update hotel___________________________
router.put('/:id',async(req,res)=>{
    const hot = await  hotel.findByIdAndUpdate(
        req.params.id,
        {
     hotel_name:req.body.hotel_name,
     room_rent:req.body.room_rent,
     place:req.body.place,
     contact:req.body.contact
        } ,
        {new: true} 
    ) 
    try{


    if(!hot)
        return res.status(500).send('updated!!!!') 
    console.log(hot);
     return res.send(hot)
    }
    catch(erorr){
        console.log(erorr);
    
    }
    
})


//____________hotel list________________////
router.get('/',async(req,res)=>{
    const hotel_list = await hotel.find();
    try{

    
     if(!hotel_list){
      res.json({succces: false})
     }else{

        res.send(hotel_list);
     }
    }
    catch(erorr){
        console.log(erorr);
    }
})
 
   module.exports = router; 