const express = require('express');
const app = express();
const PORT = 3003;
app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.send({
        sum : sum.toString()
    });
})

app.get("/intrest",(req,res)=>{
    const principle = parseInt(req.query.p);
    const time = parseInt(req.query.t);
    const rate = parseInt(req.query.r);
    const simpleIntrest = (principle*time*rate/100);
    const finalMoney = principle + simpleIntrest;
    res.send({
        Intrest: simpleIntrest,
        total: finalMoney
    })
})


app.listen(PORT,()=>{
    console.log("App started at PORT : ",PORT);
})