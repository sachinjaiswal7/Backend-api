import mongoose from "mongoose";


const schema = new mongoose.Schema({
    title : {
        required : true,
        type : String,
    },
    description : {
        required : true,
        type : String,
    }
    ,
    isCompleted :{
       type : Boolean,
       default : false,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userCollection",
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    }


})

export  const task = mongoose.model("task",schema);