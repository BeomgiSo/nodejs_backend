const express = require("express");
const router = express.Router();
const User = require("../../model/User");


router.get("/",(req,res)=>{
    res.send("auth 라우터입니다.");
})

// login/register

// / auth/
router.post("/register", async (req, res) => {
    const { username , password } = req.body;
    try {
      const makeUser = new User({
        username,
        password,
      });
      await makeUser.save();
      res.json({
        status: "succ",
      });
    } catch (e) {
      res.json({
        status: "fail",
        message: e,
      });
    }
  });
  
  

router.post("/login",(req,res)=>{
    res.send("auth/login 라우터입니다.");
});



module.exports=router;