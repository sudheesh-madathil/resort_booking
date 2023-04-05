const express = require("express");
const router = express.Router();
const user = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//validation
router.post("/", async (req, res) => {
  const User = await user.findOne({ email: req.body.email });
  try{
  if (!User) {
    return res.status(400).send("the user not found");
  }
  let a = await bcrypt.compare(req.body.password, User.password);
  if (User && a) {
    // const token = jwt.sign({
    //   userId: user.id,
    // }); fix this problem
    res.status(200).json({ status: "success" });
  } else {
    res.status(401).json({ status: "failed" });
  }
}
catch(erorr){
  console.log(erorr);

}
});


module.exports = router;
