const db = require("../connection");

exports.changeAssignmentStatus = (req,res,next)=>
{
    let id = req.body.flatId;
    let assignmentStatus = "assigned"
    db.query("update Flat set assignmentStatus=? where id = ?",[assignmentStatus,id],(err,result)=>
    {
        if(err)
        return res.status(503).json({message:"Please try after sometim agyafdyfdfye"});
        next();
    });
}