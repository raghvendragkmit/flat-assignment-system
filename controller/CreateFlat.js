const db = require("../connection");

exports.createFlat = (req,res)=>
{
    let {floor, size, furnished, assignmentStatus} = req.body;

    console.log(floor,size,furnished,assignmentStatus);
    if(floor=='' || size=='' || furnished == '' || assignmentStatus == '')
    return res.status(400).json({message : "Please enter all required details"});

    db.query("insert into Flat(floor, size, furnished, assignmentStatus) values(?,?,?,?)",[floor, size, furnished, assignmentStatus],(err,result)=>
    {
        if(err)
        return res.status(503).json({message : "Please try after sometime"});

        return res.status(201).json({message: "Success"});
    })
}