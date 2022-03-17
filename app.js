
const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./router/authRouter");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter); // 기능 분리


mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("DB연결 성공");
    })
    .catch((err)=>{
        console.log("DB연결실패",err);
    })


app.listen(3000,()=> console.log("listen 3000"))

