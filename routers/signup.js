const express = require('express');
const router = express.Router()
const user = require('../model/user')
const bcrypt = require('bcryptjs')

router.get (`/`,(req,res)=>{
    const user ={
      email:"sudhee@gg",
      password:"12345"
    }
    res.send(user)
  })
  
   //adduser
  router.post (`/`,(req,res)=>{
   const newuser = new user({
    name:req.body.name,
    email:req.body.email,
    password:bcrypt.hashSync(req.body.password,10 ),
   })

try{
   
  newuser.save().then(()=>{
    console.log(newuser);
  })



    // res.send(newuser)
    res.status(200).json({message: 'success'})
}
catch(erorr){
    console.log(erorr);
  }})

  module.exports = router; 