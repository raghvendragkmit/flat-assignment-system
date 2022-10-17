const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/Auth');
const db=require('./connection');
const flatRouter = require("./routes/Flat");
const flatAssignmentRouter = require("./routes/FlatAssignment");
const userRouter = require("./routes/User");



db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

const app = express();
app.use(express.json()); //server can read json
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api",authRouter);




app.use("/api",flatRouter);
app.use("/api",flatAssignmentRouter);
app.use("/api",userRouter);

const port = process.env.PORT || 3020;
app.listen(port,()=>
{
    console.log(`Port is listening at ${process.env.PORT}`);
});