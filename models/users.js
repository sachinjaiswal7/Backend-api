import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name : String,
    email : {
        unique : true,
        required : true,
        type : String,
    }
    ,
    password :{
        required : true,
        type : String,
        select : false,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    }
})

export const user = mongoose.model("userCollection",schema);