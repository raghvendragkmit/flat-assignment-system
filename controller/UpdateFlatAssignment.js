const db =require('../connection')

exports.updateFlatAssignment=(req,res)=>{
    const id=req.query.id;
    const {userId,flatId,rent}=req.body;
    if(id==null){
        return res.status(400).json({
            error:"can't access database"
        })
    }
    
    db.query("update FlatAssignment set userId=?,flatId=?,rent=? where id =?",[userId,flatId,rent,id],(err,result)=>{
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
            message:"Successfully updated"
        })
    })
}