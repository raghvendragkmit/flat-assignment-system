const db = require("../connection");


exports.getAllUsers = (req,res)=>
{
    db.query("select * from user",(err,result)=>
    {
        if(err)
        return res.status(503).json({message : "Please try after sometime"});
        return res.status(200).json(result);
    });
}