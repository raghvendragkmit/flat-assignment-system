
const db = require("../connection");

exports.updateFlat=(req,res)=>{


    const id = req.query.id;
    const {floor,size,furnished}=req.body; 

    if(id==null)
    {
        
        return res.status(503).json({message:"cannot access database"});
    }

     else
    {
        db.query("update Flat set floor=?,size=?,furnished=? where id=?",[floor,size,furnished,id],(err,result)=>
        {
            if(err){
            return res.status(503).json({message:"cannot access database"});
            }   

            if(result.length==0)
            return res.status(404).json({message:"Not Found"});

            return res.status(200).json({
                message:"Successfully updated"
            });
        });
    }
}
