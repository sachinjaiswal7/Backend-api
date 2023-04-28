import jwt from "jsonwebtoken"

export const sendCookie = async (res,_id,message, statusCode) => {
    const token =  jwt.sign({_id : _id} , process.env.JWT_PRIVATE_KEY);

     res.cookie("token" , token , {
        httpOnly : true,
        maxAge : 15 * 60 * 100,
        sameSite : ((process.env.NODE_ENV == "Development") ? "lax" : "none" ),
        secure : ((process.env.NODE_ENV == "Development") ? false : true), 
    })
    

    res.status(statusCode).json({
        success : true,
        message
    })
}