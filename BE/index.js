const express = require('express');
const { connection } = require('./db');
const UserRouter = require('./Route/user.route');
const TaskRouter = require('./Route/task.route');
const app= express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/users',UserRouter); 
app.use('/tasks',TaskRouter);

app.listen(3000,async()=>{
    try{
        await connection;
        console.log("connected");
    }
    catch(err){
        console.log(err)
    }
    console.log("running on 3000")
})