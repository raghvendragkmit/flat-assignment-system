const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')
const bcrypt = require("bcrypt");
const authRouter = require('./routes/Auth');

dotenv.config({ path:'./.env'});


//Creating database connection with mysql
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_ROOT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port:process.env.DATABASE_PORT
});


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


let salt_value = 6





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




app.post("/auth/signup",isEmailExist,async (req,res)=>{
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    console.log(firstName,lastName,email,password);

    if(firstName=='' || lastName=='' || email=='' || password== ''){
    res.status(401).json({
        message:"please enter all required  details"
    })}


    

    let salt = await bcrypt.genSalt(salt_value);
    let hash_password = await bcrypt.hashSync(password,salt);
    db.query("insert into user(firstname,lastname,email,password) values(?,?,?,?)",[firstName,lastName,email,hash_password],(err,result)=>
    {
        if(err)
        {
            res.status(500).json({
                error:'internal server error'
            });
        }

        res.status(201).json({
            message:"Registered successfully please login"
        });
    });
});


const port = process.env.PORT || 3020;
app.listen(port,()=>
{
    console.log(`Port is listening at ${process.env.PORT}`);
});