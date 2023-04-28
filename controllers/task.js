import { ErrorHandlder} from "../middlewares/error.js";
import { task } from "../models/task.js";


export const createTask = async (req, res,next) => {
    try{
        const {title , description,_id}  = req.body;
        const curTask = await task.create({
            title,
            description,
            user : _id
        })
        res.status(201).json({
            success : true,
            message : "Task added Successfully"
        })
    }
    catch(error){
        next(error)
    }
}

export const allTask = async (req,res,next) => {
    try{
        const {data} = req.query;
        const tasks = await task.find({user : data});

        res.status(200).json({
            success : true,
            tasks,
        })
   }
   catch(error){
    next(error);
   }

}


export const updateTask = async (req , res,next) => {
    try {
        const curTask = await task.findById(req.params.id)
        if(!curTask){
            return next(new ErrorHandlder("Invalid Id",404));
        }
        curTask.isCompleted = !curTask.isCompleted
        await curTask.save();
        res.status(200).json({
            success : true,
            message : "Updated Successfully"
        })
    } catch (error) {
        next(error);    
    }
}


export const deleteTask = async (req , res,next) => {
   try{
        const curTask = await task.findById(req.params.id);
        if(!curTask){
        return next(new ErrorHandlder("Invalid Id",404));
        }
        await curTask.deleteOne();
        res.status(200).json({
            success : true,
            message : "Task Deleted Successfully"
        })
   }
   catch(error){
    next(error);
   }
}