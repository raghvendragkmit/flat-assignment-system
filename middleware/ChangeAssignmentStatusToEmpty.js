const db = require("../connection");

exports.changeAssignmentStatusToEmpty = (req,res,next)=>
{
    let id = req.query.id;
    let assignmentStatus = "empty"
    db.query("select flatId from FlatAssignment where id = ?",[id],(err,result)=>
    {
        if(err)
        return res.status(503).json({message:"Please try after sometime...."});

        db.query("update Flat set assignmentStatus=? where id=?",[assignmentStatus,result[0].flatId],(err,result)=>{
        if(err)
        return res.status(503).json({message:"Please try after sometime...."});
    })
        next();
    });
}