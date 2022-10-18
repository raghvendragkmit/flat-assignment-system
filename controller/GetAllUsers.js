const db = require("../connection");


exports.getAllUsers = (req,res)=>
{
    let id=req.query.id;
    if(id == null){
        db.query("select * from user",(err,result)=>
    {
        if(err)
        return res.status(503).json({message : "Please try after sometime"});
        return res.status(200).json(result);
    });
}else{
    db.query("select * from user where id=?",[id],(err,result)=>
    {
        if(err)
            return res.status(503).json({message : "Please try after sometime"});
        if(result.length==0)
            return res.status(404).json({
                error:"User not found"
            })
        return res.status(200).json(result);
    });
}
}