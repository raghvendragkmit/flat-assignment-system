const db = require("../connection");

exports.getFlatAssignment = (req,res)=>
{
    db.query("select User.id, User.firstName, User.lastName, User.email, FlatAssignment.flatId, FlatAssignment.date, FlatAssignment.rent From FlatAssignment Inner join User on User.id = FlatAssignment.userId",(err,result)=>
    {
        if(err)
        return res.status(503).json({message : "Please try after sometime"});

        return res.status(200).json(result);
    });
}