const db= require("../connection");


exports.createFlatAssignment = (req,res)=>
{
    let {userId,flatId,rent} = req.body;
    
    if(userId=='' || flatId == '' || rent == '')
    {
        return res.status(400).json({message:"Please enter all required details"});
    }


    db.query("insert into FlatAssignment(userId, flatId, rent) values(?,?,?)",[userId,flatId,rent],(err,result)=>
    {
        if(err)
        return res.status(503).json({message:"Please try after some time"});

        return res.status(200).json({message:`flat ${flatId} is assigned to ${userId}`});
    });
}