const bcrypt = require("bcrypt");
//const mysql = require("mysql")
//const dotenv = require('dotenv')
//dotenv.config();

const db=require('../connection')
exports.signup=(req,res)=>{
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    console.log(firstName,lastName,email,password);

    if(firstName=='' || lastName=='' || email=='' || password== ''){
    res.status(401).json({
        message:"please enter all required  details"
    })}


    

    //let salt =  bcrypt.genSalt('10');
    let hash_password = bcrypt.hashSync(password,10);
    db.query("insert into user(firstname,lastname,email,password) values(?,?,?,?)",[firstName,lastName,email,hash_password],(err,result)=>
    {
        if(err)
        {
           return  res.status(500).json({
                error:'internal server error'
            });
        }

        return res.status(201).json({
            message:"Registered successfully please login"
        });
    });
};
