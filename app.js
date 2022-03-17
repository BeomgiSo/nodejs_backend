const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs= require("fs"); //파일을 읽을수 있게함
const dotenv=require("dotenv");
const authRouter=require("./router/authorRouter");

app.use("/auth",authRouter);

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));



mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("DB연결 성공");
    })
    .catch((err)=>{
        console.log("DB연결실패",err);
    })


app.listen(3000,()=> console.log("listen 3000"))

