const db =require('../connection')

exports.deleteFlatAssignment=(req,res)=>{
    const id=req.query.id;
    if(id==null){
        return res.status(400).json({
            error:"can't access database"
        })
    }
    
    db.query("delete from FlatAssignment where id =?",[id],(err,result)=>{
        if(err){
            return res.status(503).json({
                error:"wait for sometime"
            })
        }
        if(result.length>0){
            return res.status(400).json({
                error:"flat is not assigned"
            })
        }
        return res.status(200).json({
            message:"Successfully deleted"
        })
    })
}