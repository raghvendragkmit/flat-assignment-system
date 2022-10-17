const db = require("../connection");


exports.getAllFlats = (req,res)=>
{

    let id = req.query.id;

    if(id==null)
    {
        //console.log("hello");
        db.query("select * from Flat",(err,result)=>
        {
            if(err){
            return res.status(503).json({message:"cannot access database"});
            }
            return res.status(200).json(result);
        });
    }
    else
    {
       // console.log("world");
        db.query("select * from Flat where id=?",[id],(err,result)=>
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