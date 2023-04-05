const express = require('express');
const router = express.Router()
const hotel = require('../model/hotel')

router.get('/',(req,res,next)=>{
    const search = req.query.place;
    hotel.find({place:{$regex: search, $options: 'i'}})
    .then(data=>{
        res.send(data);
        console.log(data);
        console.log("dfyhfgh");
    })
})


 
module.exports = router; 