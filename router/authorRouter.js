const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("auth 라우터입니다.");
})

module.exports=router;