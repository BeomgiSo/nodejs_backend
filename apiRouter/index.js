const express =require("express");
const router = express.Router();

const User=require("../model/User");
// 가입된 유저 리스트 (읽기) --Get으로 구현

router.get("/user", async (req,res)=>{
    try{
    const allUser = await User.find({}).select("username");
    res.json(allUser);
    }
    catch(e){
        res.json({status:"fail",message:e})
    }
})


module.exports=router;