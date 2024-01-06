const express = require('express');
const app = express();
const PORT = 3003;


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// // Your routes and other middleware go here
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


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