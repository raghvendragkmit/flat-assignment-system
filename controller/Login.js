const bcrypt = require("bcrypt");
const db=require('../connection')
const jwt=require('jsonwebtoken')

exports.login =  (req,res)=>
{
    let email = req.body.email;
    let password = req.body.password;
    
    if(email=='' || password== ''){
       return  res.status(400).json({
            message:"please enter email and password"
        })}

        db.query("select * from user where email = ?",[email],(err,result)=>{
            if(err){
              return res.status(500).json({
                    error:'internal server error'
                });
            }

            if(result.length == 0)
                return res.status(409).json({message :"email address is not registered yet"});
            
            let validate_password = bcrypt.compareSync(password,result[0].password);

            if(validate_password){
                const token=jwt.sign(result[0].id,process.env.SECRET)
                res.cookie("token",token,{expire:new Date()+100000})
               return  res.status(200).json({
                    message:"Login successfully",
                    token:token
                });

            }      
            else{
                    return res.status(401).json({message : "incorrect email and password please signup"});}
            
        });
}