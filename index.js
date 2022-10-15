const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')
const authRouter = require('./routes/Auth');
const db=require('./connection')

// dotenv.config();


// //Creating database connection with mysql
// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_ROOT,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE,
//     port:process.env.DATABASE_PORT
// });


db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})



const app = express();
app.use(express.json()); //server can read json
app.use("/auth",authRouter);


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