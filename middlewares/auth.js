import { user } from "../models/users.js";
import jwt from "jsonwebtoken"
export const isAuthenticated = async (req,res,next) => {
    const {token} = req.cookies;
    if(!token){
        return res.status(404).json({
            success : false,
            message : "Login First"
        })
    }
    const id =  jwt.verify(token , process.env.JWT_PRIVATE_KEY);
    req.user = await user.findById(id);
    next()
}