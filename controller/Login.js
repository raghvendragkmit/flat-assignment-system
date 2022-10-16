exports.login =  (req,res)=>
{
    let email = req.body.email;
    let password = req.body.password;
    
    if(email=='' || password== ''){
        res.status(400).json({
            message:"please enter email and password"
        })}

        db.query("select password from user where email = ?",[email],(err,result)=>{
            if(err){
                res.status(500).json({
                    error:'internal server error'
                });
            }

            if(result.length ==0)
                return res.status(409).json({message :"Please signup"});
            
            let validate_password = bcrypt.compareSync(password,result[0].password);
            if(validate_password){
                res.status(200).json({
                    message:"Login successfully"
                });}      
            else{
                    res.status(401).json({message : "incorrect email and password please signup"});}
            
        });
}