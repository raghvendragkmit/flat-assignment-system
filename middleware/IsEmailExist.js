exports.isEmailExist = (req,res,next) =>{
    let email = req.body.email;
    db.query("select * from user where email = ?", [email],(err,result)=>
    {
        if(result.length > 0)
        res.status(409).json({message : "account already exist please login"});
       next();
    });

}