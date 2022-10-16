const db=require('../connection')

exports.deleteFlat=(req,res)=>{
    const id = req.query.id;

    if(id==null)
    {
        
    return res.status(503).json({message:"cannot access database"});
    
    }
    else
    {
        db.query("delete from Flat where id=?",[id],(err,result)=>
        {
            if(err){
            return res.status(503).json({message:"cannot access database"});
            }   

            if(result.length==0)
            return res.status(404).json({message:"Not Found"});

            return res.status(200).json({
                message:"Successfully deleted"
            });
        });
    }
}