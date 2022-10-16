
const dotenv=require('dotenv')
dotenv.config();
var { expressjwt: jwt } = require("express-jwt");

const isSignedIn =jwt({
secret: process.env.SECRET,
algorithms: ["HS256"],
userProperty:"auth"
});

module.exports=isSignedIn;