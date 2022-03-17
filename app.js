const express = require("express");
const app = express;

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(3000,()=> console.log("listen 3000"))

// 백앤드 개발자
// 기능 개발자
// 유지 목록을 가져오는 기능
// AI기능을 적용한다면? 클라이언트 쪽에서 이미지만 서버한테 전달
// 서버에서 받은 이미지를 AI모델로 돌림 - > 클라이언트에게 전달..
// 인증 허가
// 백엔드 개발이 끝나면 => 명세서 작성