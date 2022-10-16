const { emit } = require("../connection");
const db = require("../connection");

exports.isFlatExist = (req,res,next)=>
{
    let id = req.body.flatId;
    db.query("select assignmentStatus from flat where id=?",[id],(err,result)=>
    {
        if(err) 
        return res.status(503).json({message : "Please try after sometime"});


        if(result.length==0)
        return res.status(400).json({message:"Flat does not exist"});

        if(result[0].assignmentStatus=="assigned")
        return res.status(400).json({message:"Flat is already assigned"});

        next();
    });
}