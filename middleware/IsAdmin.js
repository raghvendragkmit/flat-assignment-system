
const db = require("../connection");
const isAdmin = (req,res,next)=>
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

module.exports = isAdmin;