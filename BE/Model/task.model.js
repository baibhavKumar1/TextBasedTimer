const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name:String,
        body:String,
        userID:String,
        CreatedAt:{type:Date,default:Date.now()},
        CreatedFor:Date
    }
);

const TaskModel= mongoose.model("Task",taskSchema);

module.exports= TaskModel;