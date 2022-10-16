const db = require("../connection");

exports.isUserExist = (req,res,next)=>
{
    let id = req.body.userId;
    db.query("select * from user where id=?",[id],(err,result)=>
    {
        if(err) 
        return res.status(503).json({message : "Please try after sometime"});


        if(result.length==0)
        return res.status(400).json({message:"User does not exist"});

        next();
    });
}