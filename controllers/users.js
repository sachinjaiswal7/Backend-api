import { user } from "../models/users.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import { sendCookie } from "../utils/features.js";
import { ErrorHandlder } from "../middlewares/error.js";

config({
    path : "./data/config.env",
})

export const getAllUsers = async (req, res) => {

}

// registering a user in the database with this api
export const register = async (req, res,next) => {
   try{
        const {name , email , password} = req.body;
        const userFind = await user.findOne({email : email});
        if(userFind){
            return next(new ErrorHandlder("User Already Exists",400));
        }
        const hashedPassword = await  bcrypt.hash(password,10);
        const createdUser = await user.create({name , email , password : hashedPassword})
        const message = "Registered Successfully";
        const statusCode = 201;
        sendCookie(res,createdUser._id,message , statusCode);
   }
   catch(error){
    next(error);
   }
}

// with the help of this api we login a user 
export const login = async (req, res,next) => {
    try{
        const {email , password} = req.body;
    const findUser = await user.findOne({email : email}).select("+password");
    if(!findUser){
      return next(new ErrorHandlder("Incorrect Email or Password",400));
    }
    const isMatched = await bcrypt.compare(password , findUser.password);

    if(findUser && (isMatched)){
        sendCookie(res,findUser._id,"Login Successfully",200);
    }
    else{
        return next(new ErrorHandlder("Incorrect Email or Password",400));
    }
    }
    catch(error){
        next(error);
    }
}


// with this api we get the data of the user who is currently logged in on the page 
export const getMyProfile = async (req, res,next) => {
   try{
    res.status(200).json({
        success : true,
        user : req.user
    });
   }
   catch(error){
    next(error);
   }
  
}


// api to help the user to logout of the page 
export const logout = async (req,res,next) => {
  try{
        res.cookie("token",null ,{
            expires : new Date(Date.now()),
            httpOnly : false,
            sameSite : ((process.env.NODE_ENV == "Development") ? "lax" : "none" ),
            secure : ((process.env.NODE_ENV == "Development") ? false : true), 
        }).json({
            success : true,
            message : "Logged Out Successfully"
        })
  }
  catch(error){
    next(error);
  }

}
