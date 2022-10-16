
const db = require("../connection");
exports.isAdmin = (req,res,next)=>
{
    let id = req.auth;
    db.query("select userType from User where id = ?",[id],(err,result)=>
    {
        if(result[0].userType=="Admin")
        next();
        else
        return res.status(403).json({message:"Admin access required"})
    });
}
