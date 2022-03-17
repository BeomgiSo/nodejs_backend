const express = require("express");
const app = express();

const fs= require("fs"); //파일을 읽을수 있게함

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/data",(req,res)=>{
    // fd.readFile 비동기방식
    fs.readFile("data.json","utf-8",(err,data)=>{
        // 알아먹을수 없는 문자열만 받게된다.
        //console.log(data);
        //res.send("data");
        // json형식으로 받아야한다.
        const _data=JSON.parse(data);
        console.log(_data);
        res.send(_data);
    })
})

// 클라이언트에서 오는 모든 정보는 req에 닮겨있다.
// 탐스 방식
app.get("/data/:id",(req,res)=>{

    //console.log(req.params.id);
    // 배열 -> array 메서드 사용
    fs.readFile("data.json","utf-8",(err,data)=>{
        const _data=JSON.parse(data);
        const findData=_data.find(
            (element) => element.id === Number(req.params.id)
        );
        console.log(findData);
        res.send(findData);
    });
});

app.post("/data",(req,res)=>{
    //  const body= req.body;
    //  console.log(body);
    //  res.send("Hello");
    fs.readFile("data.json","utf-8",(err,data)=>{
        const _data=JSON.parse(data);
        _data.push(req.body);
        
        fs.writeFile("data.json",JSON.stringify(_data,null,5),(err,data2)=>{
            res.send(_data);
        })
    });
});

app.delete("/data/:id",(req,res)=>{
    fs.readFile("data.json","utf-8",(err,data)=>{
        let _data=JSON.parse(data);
        
        _data=_data.filter((elem)=> elem.id !== Number(req.params.id))
        
        fs.writeFile("data.json",JSON.stringify(_data,null,5),(err,data2)=>{
            res.send(_data);
        })
    });
});

app.listen(3000,()=> console.log("listen 3000"))

