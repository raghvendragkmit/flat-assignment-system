const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const isSignedIn=require('./middleware/IsSignedIn')
const isAdmin=require("./middleware/IsAdmin")
const authRouter = require('./routes/Auth');
const db=require('./connection');

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

const app = express();
app.use(express.json()); //server can read json
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/auth",authRouter);
app.get("/auth/testroute",isSignedIn,isAdmin,(req,res)=>{
   return  res.json({
        message:"test passed"
    })
})


// let salt_value = 6





// app.get("/api/users",(req,res)=>
// {
//     let query = "select * from User";
//    let q =  db.query(query,(err,result)=>
//     {
//         if(err) 
//         {
//             res.status(404).json({
//                 "message" : "please check the url first"}
//             )
//         }
//         res.status(200).json(result);
//     })
// })






const port = process.env.PORT || 3020;
app.listen(port,()=>
{
    console.log(`Port is listening at ${process.env.PORT}`);
});