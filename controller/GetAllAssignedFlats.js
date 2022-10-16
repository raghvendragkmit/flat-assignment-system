const db = require("../connection");


exports.getAllAssignedFlats = (req,res)=>
{

    let type = req.query.assignmentStatus;

    if(type==null)
    {
       return res.status(503).json({message:"cannot access database"});
    }
    else
    {
        //console.log("world");
        db.query("select * from Flat where assignmentStatus=?",[type],(err,result)=>
        {
            if(err){
            return res.status(503).json({message:"cannot access database"});
            }   

            if(result.length==0)
            return res.status(404).json({message:"Not Found"});

            return res.status(200).json(result);
        });
    }

}