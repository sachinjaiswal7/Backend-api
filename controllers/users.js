import { user } from "../models/users.js";


export const getAllUsers = async (req, res) => {
    const users = await user.find({});
    res.json({
        success : true,
        users,
    })
}


export const createNewUser = async (req, res) => {
    const {name , email , password} = req.body;
    const newUser = await user.create({
        name,
        email,
        password,
    })
    res.status(201);
    res.send("user addition succesfull");
}

export const getAUserDynamically = async (req, res) => {
    const {id} = req.params;
    const curUser = await user.findById(id);
    res.json({
        success : true, 
        curUser,
    }) 
}

export const updateUser = async (req,res) => {
    res.json({
        succes : true,
        message : "User Updated"
    })
}

export const deleteUser = async (req, res) => {
    const {id} = req.params
   await user.findOneAndDelete({_id : id});
    res.json({
        success : true,
        message : "deleted"
    })
}
